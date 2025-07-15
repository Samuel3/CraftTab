import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { [key: string]: any } = {};
  private translationsSubject = new BehaviorSubject<{ [key: string]: any }>({});
  public translations$ = this.translationsSubject.asObservable();
  private translationsLoaded = false;
  private isLoading = false;

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
    // Subscribe to language changes and load translations
    this.languageService.currentLanguage$.subscribe(lang => {
      this.loadTranslations(lang);
    });
  }

  private async loadTranslations(language: string): Promise<void> {
    if (this.isLoading) return;
    
    const translationFile = `assets/i18n/${language}.json`;
    this.isLoading = true;
    this.translationsLoaded = false;
    
    try {
      const translations = await firstValueFrom(this.http.get<{ [key: string]: any }>(translationFile));
      this.translations = translations;
      this.translationsLoaded = true;
      this.translationsSubject.next(translations);
    } catch (error) {
      console.warn(`Failed to load translations for language: ${language}`, error);
      // Fallback to English if other language fails
      if (language !== 'en') {
        await this.loadTranslations('en');
      } else {
        // If even English fails, provide fallback translations
        this.translations = this.getFallbackTranslations();
        this.translationsLoaded = true;
        this.translationsSubject.next(this.translations);
      }
    } finally {
      this.isLoading = false;
    }
  }

  private getFallbackTranslations(): { [key: string]: any } {
    // Minimal fallback for essential translations if HTTP loading fails
    return {
      'app.title': 'My start page',
      'app.edit': 'Change',
      'app.save': 'Save'
    };
  }

  translate(key: string, params?: { [key: string]: string }): string {
    if (!this.translationsLoaded || !this.translations) {
      return key; // Return key if translations not loaded yet
    }

    let translation = this.getNestedTranslation(key, this.translations) || key;
    
    
    // Replace parameters if provided
    if (params) {
      Object.keys(params).forEach(param => {
        const value = params[param];
        if (value !== undefined) {
          translation = translation.replace(`{{${param}}}`, value);
        }
      });
    }
    
    return translation;
  }

  instant(key: string, params?: { [key: string]: string }): string {
    return this.translate(key, params);
  }

  private getNestedTranslation(key: string, translations: any): string | null {
    // First try direct lookup for flat keys like 'app.title'
    if (key in translations) {
      return translations[key];
    }
    
    // If not found, try nested object lookup
    const keys = key.split('.');
    let current = translations;
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return null;
      }
    }
    
    return typeof current === 'string' ? current : null;
  }

  isLoaded(): boolean {
    return this.translationsLoaded;
  }

  async waitForTranslations(): Promise<void> {
    if (this.translationsLoaded) return;
    
    return new Promise((resolve) => {
      const subscription = this.translations$.subscribe(translations => {
        if (Object.keys(translations).length > 0) {
          subscription.unsubscribe();
          resolve();
        }
      });
    });
  }
}