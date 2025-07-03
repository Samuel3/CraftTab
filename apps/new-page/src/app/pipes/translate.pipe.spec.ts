import { ChangeDetectorRef } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from '../services/translation.service';
import { BehaviorSubject } from 'rxjs';

describe('TranslatePipe', () => {
  let pipe: TranslatePipe;
  let mockTranslationService: Partial<TranslationService>;
  let mockChangeDetectorRef: Partial<ChangeDetectorRef>;
  let translationsSubject: BehaviorSubject<any>;

  beforeEach(() => {
    translationsSubject = new BehaviorSubject({});
    
    mockTranslationService = {
      translations$: translationsSubject.asObservable(),
      instant: jest.fn()
    };

    mockChangeDetectorRef = {
      markForCheck: jest.fn()
    };

    pipe = new TranslatePipe(
      mockTranslationService as TranslationService,
      mockChangeDetectorRef as ChangeDetectorRef
    );
  });

  afterEach(() => {
    pipe.ngOnDestroy();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string for empty key', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should call translation service instant method', () => {
    const mockInstant = mockTranslationService.instant as jest.Mock;
    mockInstant.mockReturnValue('Translated text');

    const result = pipe.transform('test.key');

    expect(mockInstant).toHaveBeenCalledWith('test.key', undefined);
    expect(result).toBe('Translated text');
  });

  it('should pass parameters to translation service', () => {
    const mockInstant = mockTranslationService.instant as jest.Mock;
    mockInstant.mockReturnValue('Hello John!');

    const params = { name: 'John' };
    const result = pipe.transform('greeting', params);

    expect(mockInstant).toHaveBeenCalledWith('greeting', params);
    expect(result).toBe('Hello John!');
  });

  it('should trigger change detection when translations are loaded', () => {
    const mockMarkForCheck = mockChangeDetectorRef.markForCheck as jest.Mock;

    // Emit new translations
    translationsSubject.next({ 'app.title': 'My start page' });

    expect(mockMarkForCheck).toHaveBeenCalled();
  });

  it('should not trigger change detection for empty translations', () => {
    const mockMarkForCheck = mockChangeDetectorRef.markForCheck as jest.Mock;

    // Emit empty translations
    translationsSubject.next({});

    expect(mockMarkForCheck).not.toHaveBeenCalled();
  });

  it('should unsubscribe on destroy', () => {
    const subscription = (pipe as any).subscription;
    const unsubscribeSpy = jest.spyOn(subscription, 'unsubscribe');

    pipe.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should handle undefined subscription on destroy', () => {
    (pipe as any).subscription = undefined;
    
    // Should not throw an error
    expect(() => pipe.ngOnDestroy()).not.toThrow();
  });
});