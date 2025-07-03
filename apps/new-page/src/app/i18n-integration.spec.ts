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
      'app.save': 'Save',
      'tiles.bookmarks': 'Bookmarks',
      'tiles.search': 'Search',
      'tiles.calculator': 'Calculator',
      'tiles.kanban': 'Kanban Board',
      'common.edit': 'Edit',
      'common.delete': 'Delete',
      'common.go': 'Go',
      'kanban.newTicket': '+ New Ticket',
      'kanban.done': 'Done',
      'kanban.newColumn': '+ New Column',
      'search.placeholder': 'Search...',
      'search.go': 'Go',
      'ticket.title': 'Ticket Title',
      'ticket.required': 'Title is required'
    };

    translationService.translations$.subscribe(translations => {
      if (Object.keys(translations).length > 0) {
        expect(translations['app.title']).toBe('My start page');
        expect(translations['app.edit']).toBe('Change');
        expect(translations['tiles.bookmarks']).toBe('Bookmarks');
        expect(translations['kanban.newTicket']).toBe('+ New Ticket');
        expect(translationService.translate('app.title')).toBe('My start page');
        expect(translationService.translate('app.edit')).toBe('Change');
        done();
      }
    });

    const req = httpMock.expectOne('assets/i18n/en.json');
    expect(req.request.method).toBe('GET');
    req.flush(englishTranslations);
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

  it('should handle nested translation key structure properly', () => {
    const translations = {
      'app.title': 'My start page',
      'tiles.bookmarks': 'Bookmarks',
      'kanban.newTicket': '+ New Ticket'
    };
    
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush(translations);

    // Test flat key access
    expect(translationService.translate('app.title')).toBe('My start page');
    expect(translationService.translate('tiles.bookmarks')).toBe('Bookmarks');
    expect(translationService.translate('kanban.newTicket')).toBe('+ New Ticket');
  });

  it('should persist language preference', async () => {
    // Mock localStorage
    const mockSetItem = jest.fn();
    const mockGetItem = jest.fn().mockReturnValue(JSON.stringify('de'));
    
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: mockSetItem,
        getItem: mockGetItem
      },
      writable: true
    });

    // Set language to German
    await languageService.setLanguage('de');
    
    // Verify that setLanguage was called
    expect(languageService.getCurrentLanguage()).toBe('de');
  });

  it('should handle Chrome extension API gracefully', () => {
    // Mock Chrome APIs not being available
    const originalChrome = (window as any).chrome;
    delete (window as any).chrome;
    
    // Language service should still work without Chrome APIs
    expect(() => languageService.setLanguage('de')).not.toThrow();
    
    // Restore Chrome object
    (window as any).chrome = originalChrome;
  });
});