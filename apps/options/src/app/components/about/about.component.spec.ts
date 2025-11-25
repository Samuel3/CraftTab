import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { TranslationService } from '../../services/translation.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let mockTranslationService: any;

  beforeEach(async () => {
    mockTranslationService = {
      waitForTranslations: () => Promise.resolve(),
      translate: (key: string) => key,
      instant: (key: string) => key,
      translations$: { subscribe: () => ({ unsubscribe: () => {} }) }
    };

    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [
        { provide: TranslationService, useValue: mockTranslationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct author information', () => {
    expect(component.author).toBe('Aviv Haruzi');
  });

  it('should have correct license information', () => {
    expect(component.license).toBe('MIT License');
  });

  it('should have correct GitHub URL', () => {
    expect(component.githubUrl).toBe('https://github.com/Samuel3/CraftTab');
  });

  it('should have correct version', () => {
    expect(component.version).toBe('1.0.0');
  });

  it('should have libraries defined', () => {
    expect(component.libraries).toBeDefined();
    expect(component.libraries.length).toBeGreaterThan(0);
  });

  it('should include Angular in libraries', () => {
    const angular = component.libraries.find(lib => lib.name === 'Angular');
    expect(angular).toBeDefined();
    expect(angular?.url).toBe('https://angular.io');
  });

  it('should include RxJS in libraries', () => {
    const rxjs = component.libraries.find(lib => lib.name === 'RxJS');
    expect(rxjs).toBeDefined();
    expect(rxjs?.url).toBe('https://rxjs.dev');
  });

  it('should open external link correctly', () => {
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation();
    const testUrl = 'https://example.com';
    
    component.openExternalLink(testUrl);
    
    expect(windowOpenSpy).toHaveBeenCalledWith(testUrl, '_blank', 'noopener,noreferrer');
    windowOpenSpy.mockRestore();
  });

  it('should display version in template', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('1.0.0');
  });

  it('should display author in template', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Aviv Haruzi');
  });

  it('should display license in template', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('MIT License');
  });
});
