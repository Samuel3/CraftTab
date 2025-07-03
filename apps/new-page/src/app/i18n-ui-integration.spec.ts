import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { TranslationService } from './services/translation.service';
import { LanguageService } from './services/language.service';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('I18n UI Integration Tests', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translationService: TranslationService;
  let httpMock: HttpTestingController;

  const englishTranslations = {
    'app.title': 'My start page',
    'app.edit': 'Change',
    'app.save': 'Save',
    'tiles.bookmarks': 'Bookmarks',
    'tiles.search': 'Search',
    'tiles.calculator': 'Calculator',
    'tiles.kanban': 'Kanban Board',
    'common.edit': 'Edit',
    'common.delete': 'Delete'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers: [TranslationService, LanguageService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translationService = TestBed.inject(TranslationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app component', () => {
    // Handle the automatic English request that happens on service construction
    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush(englishTranslations);
    
    expect(component).toBeTruthy();
  });

  it('should display app title in English by default', (done) => {
    // Setup translations loading
    translationService.translations$.subscribe(translations => {
      if (Object.keys(translations).length > 0) {
        fixture.detectChanges();
        
        const titleElement = fixture.nativeElement.querySelector('h1');
        expect(titleElement?.textContent?.trim()).toBe('My start page');
        done();
      }
    });

    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush(englishTranslations);
  });

  it('should show language switcher only in edit mode', (done) => {
    translationService.translations$.subscribe(translations => {
      if (Object.keys(translations).length > 0) {
        fixture.detectChanges();
        
        // Initially, language switcher should not be visible
        let languageSwitcher = fixture.nativeElement.querySelector('.language-switcher');
        expect(languageSwitcher).toBeFalsy();
        
        // Enter edit mode
        component.toggleEditMode();
        fixture.detectChanges();
        
        // Now language switcher should be visible
        languageSwitcher = fixture.nativeElement.querySelector('.language-toggle');
        expect(languageSwitcher).toBeTruthy();
        
        done();
      }
    });

    const req = httpMock.expectOne('assets/i18n/en.json');
    req.flush(englishTranslations);
  });
});