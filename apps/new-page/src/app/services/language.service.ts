import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'crafttab_language';
  private readonly DEFAULT_LANGUAGE = 'en';
  
  private readonly availableLanguages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  private currentLanguageSubject = new BehaviorSubject<string>(this.getStoredLanguage());
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() {
    // Set initial language without calling setLanguage to avoid side effects during construction
    const storedLang = this.getStoredLanguage();
    this.currentLanguageSubject.next(storedLang);
  }

  getAvailableLanguages(): Language[] {
    return this.availableLanguages;
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  setLanguage(languageCode: string): void {
    if (this.availableLanguages.some(lang => lang.code === languageCode)) {
      this.currentLanguageSubject.next(languageCode);
      this.saveLanguage(languageCode);
      
      // Reload the page to apply new language
      // This is necessary for Angular i18n to work properly
      if (typeof window !== 'undefined' && (window as any).chrome?.storage) {
        // For Chrome extension environment
        (window as any).chrome.storage.local.set({ [this.STORAGE_KEY]: languageCode });
      } else {
        // Fallback to localStorage
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(this.STORAGE_KEY, languageCode);
        }
      }
      
      // In a real i18n setup, you might want to dynamically load the locale
      // For now, we'll just emit the change
    }
  }

  private getStoredLanguage(): string {
    if (typeof window !== 'undefined' && window.chrome?.storage) {
      // For Chrome extension environment, we'll use sync approach for initial load
      // In real implementation, you might want to use async storage
      return this.DEFAULT_LANGUAGE;
    } else {
      if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(this.STORAGE_KEY) || this.DEFAULT_LANGUAGE;
      }
      return this.DEFAULT_LANGUAGE;
    }
  }

  private saveLanguage(languageCode: string): void {
    if (typeof window !== 'undefined' && (window as any).chrome?.storage) {
      (window as any).chrome.storage.local.set({ [this.STORAGE_KEY]: languageCode });
    } else {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, languageCode);
      }
    }
  }

  // Method to get stored language asynchronously (for Chrome extension)
  async getStoredLanguageAsync(): Promise<string> {
    if (typeof window !== 'undefined' && (window as any).chrome?.storage) {
      return new Promise((resolve) => {
        (window as any).chrome.storage.local.get([this.STORAGE_KEY], (result: any) => {
          resolve(result[this.STORAGE_KEY] || this.DEFAULT_LANGUAGE);
        });
      });
    } else {
      if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(this.STORAGE_KEY) || this.DEFAULT_LANGUAGE;
      }
      return this.DEFAULT_LANGUAGE;
    }
  }
}