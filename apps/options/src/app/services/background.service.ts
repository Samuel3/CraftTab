import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface BackgroundConfig {
  seed: string;
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
}