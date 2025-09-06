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
      new Promise<void>((resolve) => {
        if (typeof (window as any).chrome !== 'undefined' && (window as any).chrome.storage) {
          (window as any).chrome.storage.sync.set({ [this.STORAGE_KEY]: config }, () => {
            resolve();
          });
        } else {
          // Fallback to localStorage
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(config));
          resolve();
        }
      })
    );
  }

  loadBackgroundConfig(): Observable<BackgroundConfig | null> {
    return from(
      new Promise<{ [key: string]: any }>((resolve) => {
        if (typeof (window as any).chrome !== 'undefined' && (window as any).chrome.storage) {
          (window as any).chrome.storage.sync.get([this.STORAGE_KEY], (result: any) => {
            resolve(result);
          });
        } else {
          // Fallback to localStorage
          const stored = localStorage.getItem(this.STORAGE_KEY);
          resolve({ [this.STORAGE_KEY]: stored ? JSON.parse(stored) : null });
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
    
    // Base colors from the existing palette, made paler
    const paletteColors = [
      'rgba(242, 149, 89, 0.15)',   // $accent-color pale
      'rgba(32, 44, 57, 0.1)',      // $base-color-strong pale
      'rgba(40, 56, 69, 0.1)',      // $base-color-light pale
      'rgba(184, 176, 141, 0.15)',  // $base-accent-strong pale
      'rgba(242, 212, 146, 0.15)'   // $base-accent-light pale
    ];

    // Generate points for more even distribution
    const points: { x: number; y: number }[] = [];
    
    // Calculate grid size based on viewport dimensions for more even distribution
    const gridCellSize = Math.max(120, Math.min(width, height) / 8);
    const gridCols = Math.ceil(width / gridCellSize);
    const gridRows = Math.ceil(height / gridCellSize);
    
    // Add grid-based points with slight randomization for natural look
    for (let row = 0; row <= gridRows; row++) {
      for (let col = 0; col <= gridCols; col++) {
        const baseX = (col / gridCols) * width;
        const baseY = (row / gridRows) * height;
        
        // Add randomization within cell bounds
        const offsetX = (random() - 0.5) * gridCellSize * 0.3;
        const offsetY = (random() - 0.5) * gridCellSize * 0.3;
        
        points.push({
          x: Math.max(0, Math.min(width, baseX + offsetX)),
          y: Math.max(0, Math.min(height, baseY + offsetY))
        });
      }
    }
    
    // Add additional edge points for better coverage
    const edgePointsPerSide = Math.max(4, Math.floor(Math.min(width, height) / 200));
    
    // Top edge
    for (let i = 1; i < edgePointsPerSide; i++) {
      points.push({
        x: (i / edgePointsPerSide) * width + (random() - 0.5) * 40,
        y: random() * 20
      });
    }
    
    // Right edge
    for (let i = 1; i < edgePointsPerSide; i++) {
      points.push({
        x: width - random() * 20,
        y: (i / edgePointsPerSide) * height + (random() - 0.5) * 40
      });
    }
    
    // Bottom edge
    for (let i = 1; i < edgePointsPerSide; i++) {
      points.push({
        x: (i / edgePointsPerSide) * width + (random() - 0.5) * 40,
        y: height - random() * 20
      });
    }
    
    // Left edge
    for (let i = 1; i < edgePointsPerSide; i++) {
      points.push({
        x: random() * 20,
        y: (i / edgePointsPerSide) * height + (random() - 0.5) * 40
      });
    }
    
    // Ensure corner points are included
    points.push(
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: width, y: height },
      { x: 0, y: height }
    );
    
    // Create triangles using Delaunay-like triangulation for better coverage
    // This creates a more uniform distribution than the previous method
    
    // Sort points by distance from center for radial pattern
    const centerX = width / 2;
    const centerY = height / 2;
    
    const sortedPoints = points.slice().sort((a, b) => {
      const distA = Math.sqrt((a.x - centerX) ** 2 + (a.y - centerY) ** 2);
      const distB = Math.sqrt((b.x - centerX) ** 2 + (b.y - centerY) ** 2);
      return distA - distB;
    });
    
    // Create triangles by connecting nearby points for better coverage
    for (let i = 0; i < sortedPoints.length - 2; i++) {
      const p1 = sortedPoints[i];
      if (!p1) continue;
      
      // Find the two nearest points to p1
      const distances: { point: { x: number; y: number }; distance: number; index: number }[] = [];
      
      for (let j = i + 1; j < sortedPoints.length; j++) {
        const p = sortedPoints[j];
        if (!p) continue;
        const distance = Math.sqrt((p1.x - p.x) ** 2 + (p1.y - p.y) ** 2);
        distances.push({ point: p, distance, index: j });
      }
      
      // Sort by distance and take closest points
      distances.sort((a, b) => a.distance - b.distance);
      
      // Create triangles with several nearby points
      for (let k = 0; k < Math.min(3, distances.length - 1); k++) {
        for (let l = k + 1; l < Math.min(4, distances.length); l++) {
          const distanceEntry1 = distances[k];
          const distanceEntry2 = distances[l];
          if (!distanceEntry1 || !distanceEntry2) continue;
          
          const p2 = distanceEntry1.point;
          const p3 = distanceEntry2.point;
          if (!p2 || !p3) continue;
          
          // Check if triangle is valid (not degenerate)
          const area = Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
          
          // Only add triangles with reasonable size and coverage
          if (area > 500 && area < 50000) {
            const colorIndex = Math.floor(random() * paletteColors.length);
            const selectedColor = paletteColors[colorIndex] || paletteColors[0]!;
            
            triangles.push({
              points: [p1, p2, p3],
              color: selectedColor
            });
          }
        }
      }
    }
    
    // Add additional triangles for better coverage by connecting edge points to center
    const centerPoint = { x: centerX, y: centerY };
    const edgePoints = points.filter(p => 
      p.x <= 20 || p.x >= width - 20 || p.y <= 20 || p.y >= height - 20
    );
    
    for (let i = 0; i < edgePoints.length; i += 2) {
      if (i + 1 < edgePoints.length) {
        const p1 = edgePoints[i];
        const p2 = edgePoints[i + 1];
        
        if (!p1 || !p2) continue;
        
        const area = Math.abs((p1.x * (p2.y - centerY) + p2.x * (centerY - p1.y) + centerX * (p1.y - p2.y)) / 2);
        if (area > 1000) {
          const colorIndex = Math.floor(random() * paletteColors.length);
          const selectedColor = paletteColors[colorIndex] || paletteColors[0]!;
          
          triangles.push({
            points: [p1, p2, centerPoint],
            color: selectedColor
          });
        }
      }
    }

    return triangles;
  }
}