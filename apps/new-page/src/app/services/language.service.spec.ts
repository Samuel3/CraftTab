import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

// Mock chrome API
(global as any).chrome = {
  storage: {
    local: {
      set: jest.fn(),
      get: jest.fn()
    }
  }
};

describe('LanguageService', () => {
  let service: LanguageService;
  let mockLocalStorage: { [key: string]: string };

  beforeEach(() => {
    // Mock localStorage
    mockLocalStorage = {};
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key: string) => mockLocalStorage[key] || null),
        setItem: jest.fn((key: string, value: string) => {
          mockLocalStorage[key] = value;
        }),
        removeItem: jest.fn((key: string) => {
          delete mockLocalStorage[key];
        })
      },
      writable: true
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return available languages', () => {
    const languages = service.getAvailableLanguages();
    expect(languages).toEqual([
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
    ]);
  });

  it('should return default language initially', () => {
    const currentLanguage = service.getCurrentLanguage();
    expect(currentLanguage).toBe('en');
  });

  it('should set and get current language', () => {
    service.setLanguage('de');
    expect(service.getCurrentLanguage()).toBe('de');
  });

  it('should not set invalid language', () => {
    const initialLanguage = service.getCurrentLanguage();
    service.setLanguage('invalid');
    expect(service.getCurrentLanguage()).toBe(initialLanguage);
  });

  it('should emit language changes', (done) => {
    service.currentLanguage$.subscribe(lang => {
      if (lang === 'de') {
        expect(lang).toBe('de');
        done();
      }
    });
    service.setLanguage('de');
  });

  it('should save language to localStorage when not in Chrome extension', () => {
    // Remove chrome mock to simulate browser environment
    delete (global as any).chrome;
    
    service.setLanguage('de');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('crafttab_language', 'de');
  });

  it('should get stored language async from localStorage', async () => {
    // Remove chrome mock to simulate browser environment
    delete (global as any).chrome;
    mockLocalStorage['crafttab_language'] = 'de';
    
    const storedLanguage = await service.getStoredLanguageAsync();
    expect(storedLanguage).toBe('de');
  });

  it('should return default language when no stored language exists', async () => {
    // Remove chrome mock to simulate browser environment
    delete (global as any).chrome;
    
    const storedLanguage = await service.getStoredLanguageAsync();
    expect(storedLanguage).toBe('en');
  });

  it('should handle Chrome extension storage', async () => {
    // Re-add chrome mock
    (global as any).chrome = {
      storage: {
        local: {
          set: jest.fn(),
          get: jest.fn((_keys, callback) => {
            callback({ crafttab_language: 'de' });
          })
        }
      }
    };

    const storedLanguage = await service.getStoredLanguageAsync();
    expect(storedLanguage).toBe('de');
  });
});