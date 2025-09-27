import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface BackgroundConfig {
  seed: string;
}

export interface Triangle {
  points: { x: number; y: number }[];
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private readonly STORAGE_KEY = 'background_config';
  private readonly backgroundConfigSubject = new BehaviorSubject<BackgroundConfig | null>(null);
  
  public backgroundConfig$ = this.backgroundConfigSubject.asObservable();

  constructor() {
    this.loadBackgroundConfig().subscribe(config => {
      if (!config) {
        // Generate and store a new seed if none exists
        const newConfig = { seed: this.generateSeed() };
        this.saveBackgroundConfig(newConfig).subscribe(() => {
          this.backgroundConfigSubject.next(newConfig);
        });
      } else {
        this.backgroundConfigSubject.next(config);
      }
    });
  }

  saveBackgroundConfig(config: BackgroundConfig): Observable<void> {
    return from(
      new Promise<void>((resolve, reject) => {
        if (typeof (window as any).chrome !== 'undefined' && (window as any).chrome.storage) {
          (window as any).chrome.storage.sync.set({ [this.STORAGE_KEY]: config }, () => {
            if ((window as any).chrome.runtime.lastError) {
              console.warn('Chrome storage error:', (window as any).chrome.runtime.lastError);
              reject(new Error((window as any).chrome.runtime.lastError.message));
            } else {
              resolve();
            }
          });
        } else {
          // Fallback to localStorage
          try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(config));
            resolve();
          } catch (error) {
            console.warn('localStorage error:', error);
            reject(error);
          }
        }
      })
    );
  }

  loadBackgroundConfig(): Observable<BackgroundConfig | null> {
    return from(
      new Promise<{ [key: string]: any }>((resolve, reject) => {
        if (typeof (window as any).chrome !== 'undefined' && (window as any).chrome.storage) {
          (window as any).chrome.storage.sync.get([this.STORAGE_KEY], (result: any) => {
            if ((window as any).chrome.runtime.lastError) {
              console.warn('Chrome storage error:', (window as any).chrome.runtime.lastError);
              reject(new Error((window as any).chrome.runtime.lastError.message));
            } else {
              resolve(result);
            }
          });
        } else {
          // Fallback to localStorage
          try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            resolve({ [this.STORAGE_KEY]: stored ? JSON.parse(stored) : null });
          } catch (error) {
            console.warn('localStorage error:', error);
            resolve({ [this.STORAGE_KEY]: null });
          }
        }
      })
    ).pipe(
      map(result => result[this.STORAGE_KEY] || null)
    );
  }

  generateSeed(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  generateNewSeed(): Observable<string> {
    const newSeed = this.generateSeed();
    const newConfig = { seed: newSeed };
    
    return this.saveBackgroundConfig(newConfig).pipe(
      map(() => {
        this.backgroundConfigSubject.next(newConfig);
        return newSeed;
      })
    );
  }

  updateSeed(seed: string): Observable<void> {
    const config = { seed };
    return this.saveBackgroundConfig(config).pipe(
      map(() => {
        this.backgroundConfigSubject.next(config);
      })
    );
  }

  getCurrentSeed(): string {
    const currentConfig = this.backgroundConfigSubject.value;
    return currentConfig?.seed || this.generateSeed();
  }

  private seedRandom(seed: string): () => number {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      const char = seed.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    return function() {
      hash = ((hash * 9301) + 49297) % 233280;
      return hash / 233280;
    };
  }

  generateTriangles(seed: string, width: number, height: number): Triangle[] {
    const random = this.seedRandom(seed);
    const triangles: Triangle[] = [];
    
    // Base colors from the existing palette, made more visible
    const paletteColors = [
      'rgba(242, 149, 89, 0.4)',   // $accent-color more visible
      'rgba(32, 44, 57, 0.25)',      // $base-color-strong more visible
      'rgba(40, 56, 69, 0.25)',      // $base-color-light more visible
      'rgba(184, 176, 141, 0.4)',  // $base-accent-strong more visible
      'rgba(242, 212, 146, 0.4)'   // $base-accent-light more visible
    ];

    // Generate points using a non-overlapping grid approach
    const points: { x: number; y: number }[] = [];
    
    // Calculate grid size for even distribution without overlaps
    const gridCellSize = Math.max(150, Math.min(width, height) / 6);
    const gridCols = Math.ceil(width / gridCellSize);
    const gridRows = Math.ceil(height / gridCellSize);
    
    // Add grid-based points with controlled randomization
    for (let row = 0; row <= gridRows; row++) {
      for (let col = 0; col <= gridCols; col++) {
        const baseX = (col / gridCols) * width;
        const baseY = (row / gridRows) * height;
        
        // Smaller randomization to prevent overlaps
        const offsetX = (random() - 0.5) * gridCellSize * 0.2;
        const offsetY = (random() - 0.5) * gridCellSize * 0.2;
        
        points.push({
          x: Math.max(0, Math.min(width, baseX + offsetX)),
          y: Math.max(0, Math.min(height, baseY + offsetY))
        });
      }
    }
    
    // Add corner points to ensure full coverage
    points.push(
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: width, y: height },
      { x: 0, y: height }
    );
    
    // Remove duplicate points to prevent degenerate triangles
    const uniquePoints = points.filter((point, index, array) => {
      return array.findIndex(p => 
        Math.abs(p.x - point.x) < 5 && Math.abs(p.y - point.y) < 5
      ) === index;
    });
    
    // Create non-overlapping triangles using a systematic approach
    const usedPoints = new Set<number>();
    
    // Sort points by x coordinate, then by y for systematic triangulation
    const sortedPoints = uniquePoints.slice().sort((a, b) => {
      if (Math.abs(a.x - b.x) < 1) {
        return a.y - b.y;
      }
      return a.x - b.x;
    });
    
    // Create triangles in a systematic pattern to avoid overlaps
    for (let i = 0; i < sortedPoints.length - 2; i++) {
      if (usedPoints.has(i)) continue;
      
      const p1 = sortedPoints[i];
      if (!p1) continue;
      
      // Find two nearby points that haven't been used in recent triangles
      const candidates: { point: { x: number; y: number }; distance: number; index: number }[] = [];
      
      for (let j = i + 1; j < sortedPoints.length; j++) {
        if (usedPoints.has(j)) continue;
        
        const p = sortedPoints[j];
        if (!p) continue;
        
        const distance = Math.sqrt((p1.x - p.x) ** 2 + (p1.y - p.y) ** 2);
        
        // Only consider points within reasonable distance
        if (distance > 50 && distance < gridCellSize * 2) {
          candidates.push({ point: p, distance, index: j });
        }
      }
      
      // Sort by distance and try to create one good triangle
      candidates.sort((a, b) => a.distance - b.distance);
      
      for (let k = 0; k < Math.min(2, candidates.length - 1); k++) {
        for (let l = k + 1; l < Math.min(3, candidates.length); l++) {
          const candidate1 = candidates[k];
          const candidate2 = candidates[l];
          if (!candidate1 || !candidate2) continue;
          
          const p2 = candidate1.point;
          const p3 = candidate2.point;
          if (!p2 || !p3) continue;
          
          // Check if triangle is valid and not too thin
          const area = Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
          
          // Calculate aspect ratio to avoid thin triangles
          const d1 = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          const d2 = Math.sqrt((p2.x - p3.x) ** 2 + (p2.y - p3.y) ** 2);
          const d3 = Math.sqrt((p3.x - p1.x) ** 2 + (p3.y - p1.y) ** 2);
          
          const maxSide = Math.max(d1, d2, d3);
          const minSide = Math.min(d1, d2, d3);
          const aspectRatio = maxSide / minSide;
          
          // Only add triangles with good area and aspect ratio
          if (area > 1000 && area < 80000 && aspectRatio < 4) {
            // Check if this triangle would overlap with existing ones
            const centerX = (p1.x + p2.x + p3.x) / 3;
            const centerY = (p1.y + p2.y + p3.y) / 3;
            
            let hasOverlap = false;
            for (const existingTriangle of triangles) {
              const [ep1, ep2, ep3] = existingTriangle.points;
              if (!ep1 || !ep2 || !ep3) continue;
              
              const existingCenterX = (ep1.x + ep2.x + ep3.x) / 3;
              const existingCenterY = (ep1.y + ep2.y + ep3.y) / 3;
              const distance = Math.sqrt((centerX - existingCenterX) ** 2 + (centerY - existingCenterY) ** 2);
              
              // If centers are too close, consider it an overlap
              if (distance < gridCellSize * 0.7) {
                hasOverlap = true;
                break;
              }
            }
            
            if (!hasOverlap) {
              const colorIndex = Math.floor(random() * paletteColors.length);
              const selectedColor = paletteColors[colorIndex] || paletteColors[0]!;
              
              triangles.push({
                points: [p1, p2, p3],
                color: selectedColor
              });
              
              // Mark points as used to reduce further overlaps
              usedPoints.add(i);
              usedPoints.add(candidate1.index);
              usedPoints.add(candidate2.index);
              
              // Only create one triangle per iteration to avoid overlaps
              break;
            }
          }
        }
        if (usedPoints.has(i)) break; // Break outer loop if triangle was created
      }
    }

    return triangles;
  }
}