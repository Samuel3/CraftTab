import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { TranslationService } from './services/translation.service';

describe('AppComponent', () => {
  let mockTranslationService: any;

  beforeEach(async () => {
    mockTranslationService = {
      waitForTranslations: () => Promise.resolve(),
      translate: (key: string) => key,
      instant: (key: string) => key,
      translations$: { subscribe: () => ({ unsubscribe: () => {} }) }
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule],
      providers: [
        { provide: TranslationService, useValue: mockTranslationService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should default to settings tab', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.currentTab).toBe('settings');
  });

  it('should switch to about tab', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.switchTab('about');
    expect(app.currentTab).toBe('about');
  });

  it('should switch back to settings tab', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.switchTab('about');
    app.switchTab('settings');
    expect(app.currentTab).toBe('settings');
  });
});
