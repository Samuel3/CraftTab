import { Pipe, PipeTransform, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Make it impure so it updates when translations change
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private subscription?: Subscription;

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    // Subscribe to translation changes to trigger updates
    this.subscription = this.translationService.translations$.subscribe((translations) => {
      // Trigger change detection when translations are loaded
      if (Object.keys(translations).length > 0) {
        this.cdr.markForCheck();
      }
    });
  }

  transform(key: string, params?: { [key: string]: string }): string {
    if (!key) return '';
    
    // Use the translation service directly
    return this.translationService.instant(key, params);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}