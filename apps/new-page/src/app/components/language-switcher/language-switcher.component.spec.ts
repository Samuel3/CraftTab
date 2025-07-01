import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { LanguageService, Language } from '../../services/language.service';
import { BehaviorSubject } from 'rxjs';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;
  let mockLanguageService: Partial<LanguageService>;
  let currentLanguageSubject: BehaviorSubject<string>;

  const mockLanguages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  beforeEach(async () => {
    currentLanguageSubject = new BehaviorSubject<string>('en');
    
    mockLanguageService = {
      getAvailableLanguages: jest.fn().mockReturnValue(mockLanguages),
      getCurrentLanguage: jest.fn().mockReturnValue('en'),
      setLanguage: jest.fn(),
      currentLanguage$: currentLanguageSubject.asObservable()
    };

    await TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent],
      providers: [
        { provide: LanguageService, useValue: mockLanguageService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with available languages', () => {
    expect(component.availableLanguages).toEqual(mockLanguages);
    expect(mockLanguageService.getAvailableLanguages).toHaveBeenCalled();
  });

  it('should initialize with current language', () => {
    expect(component.currentLanguage).toBe('en');
    expect(mockLanguageService.getCurrentLanguage).toHaveBeenCalled();
  });

  it('should update current language when language service emits change', () => {
    currentLanguageSubject.next('de');
    expect(component.currentLanguage).toBe('de');
  });

  it('should set switcher visibility', () => {
    expect(component.showSwitcher).toBe(false);
    
    component.setVisible(true);
    expect(component.showSwitcher).toBe(true);
    
    component.setVisible(false);
    expect(component.showSwitcher).toBe(false);
  });

  it('should close dropdown when hiding switcher', () => {
    component.isDropdownOpen = true;
    component.setVisible(false);
    
    expect(component.isDropdownOpen).toBe(false);
  });

  it('should toggle dropdown', () => {
    expect(component.isDropdownOpen).toBe(false);
    
    component.toggleDropdown();
    expect(component.isDropdownOpen).toBe(true);
    
    component.toggleDropdown();
    expect(component.isDropdownOpen).toBe(false);
  });

  it('should select language and close dropdown', () => {
    component.isDropdownOpen = true;
    
    component.selectLanguage('de');
    
    expect(mockLanguageService.setLanguage).toHaveBeenCalledWith('de');
    expect(component.isDropdownOpen).toBe(false);
  });

  it('should get current language name', () => {
    component.currentLanguage = 'en';
    expect(component.getCurrentLanguageName()).toBe('English');
    
    component.currentLanguage = 'de';
    expect(component.getCurrentLanguageName()).toBe('Deutsch');
    
    component.currentLanguage = 'unknown';
    expect(component.getCurrentLanguageName()).toBe('Unknown');
  });

  it('should get current language flag', () => {
    component.currentLanguage = 'en';
    expect(component.getCurrentLanguageFlag()).toBe('🇺🇸');
    
    component.currentLanguage = 'de';
    expect(component.getCurrentLanguageFlag()).toBe('🇩🇪');
    
    component.currentLanguage = 'unknown';
    expect(component.getCurrentLanguageFlag()).toBe('🌐');
  });

  it('should render switcher when visible', () => {
    component.setVisible(true);
    fixture.detectChanges();
    
    const switcherElement = fixture.nativeElement.querySelector('.language-switcher');
    expect(switcherElement).toBeTruthy();
  });

  it('should not render switcher when hidden', () => {
    component.setVisible(false);
    fixture.detectChanges();
    
    const switcherElement = fixture.nativeElement.querySelector('.language-switcher');
    expect(switcherElement).toBeFalsy();
  });

  it('should render current language flag and name', () => {
    component.setVisible(true);
    fixture.detectChanges();
    
    const flagElement = fixture.nativeElement.querySelector('.language-toggle');
    
    expect(flagElement?.textContent?.trim()).toBe('🇺🇸');
  });

  it('should open dropdown when clicked', () => {
    component.setVisible(true);
    fixture.detectChanges();
    
    const switcherButton = fixture.nativeElement.querySelector('.language-toggle');
    switcherButton.click();
    
    expect(component.isDropdownOpen).toBe(true);
  });

  it('should render dropdown options when open', () => {
    component.setVisible(true);
    component.isDropdownOpen = true;
    fixture.detectChanges();
    
    const options = fixture.nativeElement.querySelectorAll('.language-option');
    expect(options.length).toBe(2);
    
    const englishFlag = options[0].querySelector('.flag');
    const englishName = options[0].querySelector('.name');
    const germanFlag = options[1].querySelector('.flag');
    const germanName = options[1].querySelector('.name');
    
    expect(englishFlag?.textContent?.trim()).toBe('🇺🇸');
    expect(englishName?.textContent?.trim()).toBe('English');
    expect(germanFlag?.textContent?.trim()).toBe('🇩🇪');
    expect(germanName?.textContent?.trim()).toBe('Deutsch');
  });

  it('should select language when option clicked', () => {
    component.setVisible(true);
    component.isDropdownOpen = true;
    fixture.detectChanges();
    
    const germanOption = fixture.nativeElement.querySelectorAll('.language-option')[1];
    germanOption.click();
    
    expect(mockLanguageService.setLanguage).toHaveBeenCalledWith('de');
  });
});