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
      'rgba(242, 149, 89, 0.3)',   // $accent-color pale
      'rgba(32, 44, 57, 0.2)',     // $base-color-strong pale
      'rgba(40, 56, 69, 0.2)',     // $base-color-light pale
      'rgba(184, 176, 141, 0.3)',  // $base-accent-strong pale
      'rgba(242, 212, 146, 0.3)'   // $base-accent-light pale
    ];

    // Create a grid of triangles
    const gridSize = Math.min(width, height) / 8;
    
    for (let x = 0; x < width + gridSize; x += gridSize) {
      for (let y = 0; y < height + gridSize; y += gridSize) {
        // Generate two triangles per grid cell for full coverage
        const variation = gridSize * 0.3;
        
        // Triangle 1 (top-left)
        const colorIndex1 = Math.floor(random() * paletteColors.length);
        const selectedColor1 = paletteColors[colorIndex1] || paletteColors[0]!;
        const triangle1: Triangle = {
          points: [
            { 
              x: x + random() * variation - variation/2, 
              y: y + random() * variation - variation/2 
            },
            { 
              x: x + gridSize + random() * variation - variation/2, 
              y: y + random() * variation - variation/2 
            },
            { 
              x: x + random() * variation - variation/2, 
              y: y + gridSize + random() * variation - variation/2 
            }
          ],
          color: selectedColor1
        };

        // Triangle 2 (bottom-right)
        const colorIndex2 = Math.floor(random() * paletteColors.length);
        const selectedColor2 = paletteColors[colorIndex2] || paletteColors[0]!;
        const triangle2: Triangle = {
          points: [
            { 
              x: x + gridSize + random() * variation - variation/2, 
              y: y + random() * variation - variation/2 
            },
            { 
              x: x + gridSize + random() * variation - variation/2, 
              y: y + gridSize + random() * variation - variation/2 
            },
            { 
              x: x + random() * variation - variation/2, 
              y: y + gridSize + random() * variation - variation/2 
            }
          ],
          color: selectedColor2
        };

        triangles.push(triangle1, triangle2);
      }
    }

    return triangles;
  }
}