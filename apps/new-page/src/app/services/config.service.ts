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
        chrome.storage.sync.set({ [this.STORAGE_KEY]: tiles }, () => {
          resolve();
        });
      })
    );
  }

  loadTilesConfig(): Observable<tileConfig[] | null> {
    return from(
      new Promise<{ [key: string]: any }>((resolve) => {
        chrome.storage.sync.get([this.STORAGE_KEY], (result) => {
          resolve(result);
        });
      })
    ).pipe(
      map(result => result[this.STORAGE_KEY] || null)
    );
  }
} 