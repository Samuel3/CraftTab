import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { tileConfig } from '../model/tiles';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly STORAGE_KEY = 'tiles_config';

  saveTilesConfig(tiles: tileConfig[]): Observable<void> {
    return from(
      new Promise<void>((resolve) => {
        if (typeof chrome !== 'undefined' && chrome.storage) {
          chrome.storage.sync.set({ [this.STORAGE_KEY]: tiles }, () => {
            resolve();
          });
        } else {
          // Fallback to localStorage
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tiles));
          resolve();
        }
      })
    );
  }

  loadTilesConfig(): Observable<tileConfig[] | null> {
    return from(
      new Promise<{ [key: string]: any }>((resolve) => {
        if (typeof chrome !== 'undefined' && chrome.storage) {
          chrome.storage.sync.get([this.STORAGE_KEY], (result) => {
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
} 