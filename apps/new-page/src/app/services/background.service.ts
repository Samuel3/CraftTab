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

    // Generate points along the edges of the canvas
    const points: { x: number; y: number }[] = [];
    
    // Number of points per edge (adjustable for density)
    const pointsPerEdge = Math.max(8, Math.floor(Math.min(width, height) / 120));
    
    // Top edge
    for (let i = 0; i <= pointsPerEdge; i++) {
      points.push({
        x: (i / pointsPerEdge) * width + (random() - 0.5) * (width / pointsPerEdge) * 0.3,
        y: 0 + random() * 20
      });
    }
    
    // Right edge
    for (let i = 1; i <= pointsPerEdge; i++) {
      points.push({
        x: width - random() * 20,
        y: (i / pointsPerEdge) * height + (random() - 0.5) * (height / pointsPerEdge) * 0.3
      });
    }
    
    // Bottom edge
    for (let i = pointsPerEdge - 1; i >= 0; i--) {
      points.push({
        x: (i / pointsPerEdge) * width + (random() - 0.5) * (width / pointsPerEdge) * 0.3,
        y: height - random() * 20
      });
    }
    
    // Left edge
    for (let i = pointsPerEdge - 1; i >= 1; i--) {
      points.push({
        x: 0 + random() * 20,
        y: (i / pointsPerEdge) * height + (random() - 0.5) * (height / pointsPerEdge) * 0.3
      });
    }
    
    // Add some interior points for more interesting triangulation
    const interiorPointsCount = Math.floor(pointsPerEdge / 2);
    for (let i = 0; i < interiorPointsCount; i++) {
      points.push({
        x: width * 0.2 + random() * width * 0.6,
        y: height * 0.2 + random() * height * 0.6
      });
    }
    
    // Create triangles using a simple fan triangulation from center
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Sort points by angle from center to create a more natural triangulation
    const sortedPoints = points.slice().sort((a, b) => {
      const angleA = Math.atan2(a.y - centerY, a.x - centerX);
      const angleB = Math.atan2(b.y - centerY, b.x - centerX);
      return angleA - angleB;
    });
    
    // Create triangles by connecting consecutive edge points to create a web-like pattern
    for (let i = 0; i < sortedPoints.length; i++) {
      const p1 = sortedPoints[i];
      const p2 = sortedPoints[(i + 1) % sortedPoints.length];
      const p3 = sortedPoints[(i + 2) % sortedPoints.length];
      
      // Ensure all points exist
      if (!p1 || !p2 || !p3) continue;
      
      // Skip triangles that would be too small or degenerate
      const area = Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
      if (area > 1000) { // Minimum area threshold
        const colorIndex = Math.floor(random() * paletteColors.length);
        const selectedColor = paletteColors[colorIndex] || paletteColors[0]!;
        
        triangles.push({
          points: [p1, p2, p3],
          color: selectedColor
        });
      }
    }
    
    // Add some additional triangles by connecting non-consecutive points for better coverage
    for (let i = 0; i < sortedPoints.length; i += 2) {
      if (i + 3 < sortedPoints.length) {
        const p1 = sortedPoints[i];
        const p2 = sortedPoints[i + 2];
        const p3 = sortedPoints[i + 3];
        
        // Ensure all points exist
        if (!p1 || !p2 || !p3) continue;
        
        const area = Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
        if (area > 800) {
          const colorIndex = Math.floor(random() * paletteColors.length);
          const selectedColor = paletteColors[colorIndex] || paletteColors[0]!;
          
          triangles.push({
            points: [p1, p2, p3],
            color: selectedColor
          });
        }
      }
    }

    return triangles;
  }
}