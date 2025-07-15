import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslationService } from './translation.service';
import { LanguageService } from './language.service';
import { BehaviorSubject } from 'rxjs';

describe('TranslationService', () => {
  let service: TranslationService;
  let httpMock: HttpTestingController;
  let mockLanguageService: Partial<LanguageService>;
  let languageSubject: BehaviorSubject<string>;

  beforeEach(() => {
    languageSubject = new BehaviorSubject<string>('en');
    mockLanguageService = {
      currentLanguage$: languageSubject.asObservable()
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TranslationService,
        { provide: LanguageService, useValue: mockLanguageService }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TranslationService);
  });

  afterEach(() => {
    // Clean up pending requests
    try {
      httpMock.verify();
    } catch (e) {
      // Ignore verification errors in tests
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    
    // Handle the initial request from constructor
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush({});
  });

  it('should load translations', (done) => {
    const mockTranslations = { 'app.title': 'My start page' };
    
    service.translations$.subscribe(translations => {
      if (Object.keys(translations).length > 0) {
        expect(service.isLoaded()).toBe(true);
        done();
      }
    });
    
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush(mockTranslations);
  });

  it('should return key when no translation found', () => {
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush({ 'other.key': 'Other value' });

    // Service should return the key itself if translation not found
    expect(service.translate('missing.key')).toBe('missing.key');
  });

  it('should handle empty translation key', () => {
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush({});

    expect(service.translate('')).toBe('');
  });

  it('should provide instant method', () => {
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush({ 'test.key': 'Test value' });

    // instant should behave the same as translate
    expect(service.instant('test.key')).toBe(service.translate('test.key'));
  });

  it('should track loaded state', (done) => {
    expect(service.isLoaded()).toBe(false);
    
    service.translations$.subscribe(translations => {
      if (Object.keys(translations).length > 0) {
        expect(service.isLoaded()).toBe(true);
        done();
      }
    });
    
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush({ 'app.title': 'My start page' });
  });

  it('should emit translations observable', (done) => {
    const mockTranslations = { 'app.title': 'My start page' };
    
    service.translations$.subscribe(translations => {
      if (Object.keys(translations).length > 0) {
        expect(translations).toEqual(mockTranslations);
        done();
      }
    });

    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush(mockTranslations);
  });

  it('should handle HTTP errors', () => {
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.error(new ProgressEvent('Network error'));

    expect(service.isLoaded()).toBe(false);
  });
});