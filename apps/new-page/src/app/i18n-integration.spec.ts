import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslationService } from './services/translation.service';
import { LanguageService } from './services/language.service';

describe('I18n Integration Tests', () => {
  let translationService: TranslationService;
  let languageService: LanguageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TranslationService, LanguageService]
    });

    translationService = TestBed.inject(TranslationService);
    languageService = TestBed.inject(LanguageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should load English translations by default', (done) => {
    const englishTranslations = {
      'app.title': 'My start page',
      'app.edit': 'Change',
      'tiles.bookmarks': 'Bookmarks'
    };

    translationService.translations$.subscribe(translations => {
      if (Object.keys(translations).length > 0) {
        expect(translations).toEqual(englishTranslations);
        expect(translationService.translate('app.title')).toBe('My start page');
        expect(translationService.translate('app.edit')).toBe('Change');
        done();
      }
    });

    const req = httpMock.expectOne('assets/i18n/en.json');
    expect(req.request.method).toBe('GET');
    req.flush(englishTranslations);
  });

  it('should switch to German translations when language changes', (done) => {
    const germanTranslations = {
      'app.title': 'Meine Startseite',
      'app.edit': 'Bearbeiten',
      'tiles.bookmarks': 'Lesezeichen'
    };

    // First load English
    const englishReq = httpMock.expectOne('assets/i18n/en.json');
    englishReq.flush({ 'app.title': 'My start page' });

    // Switch to German
    languageService.setLanguage('de');

    translationService.translations$.subscribe(translations => {
      if (translations['app.title'] === 'Meine Startseite') {
        expect(translations).toEqual(germanTranslations);
        expect(translationService.translate('app.title')).toBe('Meine Startseite');
        expect(translationService.translate('app.edit')).toBe('Bearbeiten');
        expect(translationService.translate('tiles.bookmarks')).toBe('Lesezeichen');
        done();
      }
    });

    const germanReq = httpMock.expectOne('assets/i18n/de.json');
    expect(germanReq.request.method).toBe('GET');
    germanReq.flush(germanTranslations);
  });

  it('should return fallback translations when HTTP request fails', (done) => {
    translationService.translations$.subscribe(translations => {
      if (Object.keys(translations).length > 0) {
        // Should fall back to built-in translations
        expect(translationService.translate('app.title')).toBe('My start page');
        expect(translationService.translate('app.edit')).toBe('Change');
        done();
      }
    });

    const req = httpMock.expectOne('assets/i18n/en.json');
    req.error(new ProgressEvent('Network error'));
  });

  it('should handle translation keys not found', () => {
    const translations = { 'app.title': 'My start page' };
    
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush(translations);

    // Should return the key itself when translation not found
    expect(translationService.translate('unknown.key')).toBe('unknown.key');
  });
});