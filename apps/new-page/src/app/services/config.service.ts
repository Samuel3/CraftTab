import { Injectable } from '@angular/core';
import { tileConfig } from '../model/tiles';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly STORAGE_KEY = 'tiles_config';

  async saveTilesConfig(tiles: tileConfig[]): Promise<void> {
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.sync.set({ [this.STORAGE_KEY]: tiles }, () => {
          resolve();
        });
      } else {
        // Fallback to localStorage
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tiles));
        resolve();
      }
    });
  }

  async loadTilesConfig(): Promise<tileConfig[] | null> {
    return new Promise((resolve) => {
      if (typeof chrome !== 'undefined' && chrome.storage) {
        chrome.storage.sync.get([this.STORAGE_KEY], (result) => {
          resolve(result[this.STORAGE_KEY] || null);
        });
      } else {
        // Fallback to localStorage
        const stored = localStorage.getItem(this.STORAGE_KEY);
        resolve(stored ? JSON.parse(stored) : null);
      }
    });
  }
} 