import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Make it impure so it updates when translations change
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private subscription?: Subscription;
  private lastKey?: string;
  private lastTranslation?: string;

  constructor(private translationService: TranslationService) {}

  transform(key: string, params?: { [key: string]: string }): string {
    if (!key) return '';
    
    // If key hasn't changed and we have a cached translation, return it
    if (this.lastKey === key && this.lastTranslation) {
      return this.lastTranslation;
    }

    this.lastKey = key;
    this.lastTranslation = this.translationService.instant(key, params);
    
    return this.lastTranslation;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}