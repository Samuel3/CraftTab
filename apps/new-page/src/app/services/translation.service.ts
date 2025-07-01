import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { [key: string]: any } = {};
  private translationsSubject = new BehaviorSubject<{ [key: string]: any }>({});
  public translations$ = this.translationsSubject.asObservable();
  private translationsLoaded = false;

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
    // Subscribe to language changes and load translations
    this.languageService.currentLanguage$.subscribe(lang => {
      this.loadTranslations(lang);
    });
  }

  private loadTranslations(language: string): void {
    const translationFile = `assets/i18n/${language}.json`;
    this.translationsLoaded = false;
    
    this.http.get<{ [key: string]: any }>(translationFile).subscribe({
      next: (translations) => {
        this.translations = translations;
        this.translationsLoaded = true;
        this.translationsSubject.next(translations);
        console.log('Translations loaded for', language, ':', translations);
      },
      error: (error) => {
        console.warn(`Failed to load translations for language: ${language}`, error);
        // Fallback to English if other language fails
        if (language !== 'en') {
          this.loadTranslations('en');
        }
      }
    });
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
}