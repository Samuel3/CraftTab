import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackgroundService } from '../../services/background.service';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'options-background-settings',
  templateUrl: './background-settings.component.html',
  styleUrls: ['./background-settings.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, TranslatePipe]
})
export class BackgroundSettingsComponent implements OnInit, OnDestroy {
  currentSeed = '';
  editingSeed = '';
  isEditing = false;
  saveStatus = '';
  
  private subscription = new Subscription();

  constructor(
    private backgroundService: BackgroundService,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    // Wait for translation service to load
    await this.translationService.waitForTranslations();
    
    // First, subscribe to the background config observable
    this.subscription.add(
      this.backgroundService.backgroundConfig$.subscribe(config => {
        if (config) {
          this.currentSeed = config.seed;
          this.editingSeed = config.seed;
          this.cdr.markForCheck();
        }
      })
    );

    // Then explicitly load the current config to ensure it's displayed
    this.backgroundService.loadBackgroundConfig().subscribe(config => {
      if (config) {
        this.currentSeed = config.seed;
        this.editingSeed = config.seed;
      } else {
        // If no config exists, get the current seed from the service
        const currentSeed = this.backgroundService.getCurrentSeed();
        if (currentSeed) {
          this.currentSeed = currentSeed;
          this.editingSeed = currentSeed;
        }
      }
      this.cdr.markForCheck();
    });
    
    // As a fallback, ensure we always show some seed
    if (!this.currentSeed) {
      const fallbackSeed = this.backgroundService.getCurrentSeed();
      this.currentSeed = fallbackSeed;
      this.editingSeed = fallbackSeed;
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  startEditing(): void {
    this.isEditing = true;
    this.editingSeed = this.currentSeed;
    this.saveStatus = '';
    this.cdr.markForCheck();
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.editingSeed = this.currentSeed;
    this.saveStatus = '';
    this.cdr.markForCheck();
  }

  confirmSeed(): void {
    if (this.editingSeed.trim()) {
      this.backgroundService.updateSeed(this.editingSeed.trim()).subscribe({
        next: () => {
          this.currentSeed = this.editingSeed.trim();
          this.isEditing = false;
          this.saveStatus = this.translationService.translate('background.seedUpdated');
          this.cdr.markForCheck();
          setTimeout(() => {
            this.saveStatus = '';
            this.cdr.markForCheck();
          }, 3000);
        },
        error: () => {
          this.saveStatus = this.translationService.translate('background.errorUpdating');
          this.cdr.markForCheck();
          setTimeout(() => {
            this.saveStatus = '';
            this.cdr.markForCheck();
          }, 3000);
        }
      });
    }
  }

  generateNewSeed(): void {
    this.backgroundService.generateNewSeed().subscribe({
      next: (newSeed) => {
        this.currentSeed = newSeed;
        this.editingSeed = newSeed;
        this.saveStatus = this.translationService.translate('background.seedGenerated');
        this.cdr.markForCheck();
        setTimeout(() => {
          this.saveStatus = '';
          this.cdr.markForCheck();
        }, 3000);
      },
      error: () => {
        this.saveStatus = this.translationService.translate('background.errorGenerating');
        this.cdr.markForCheck();
        setTimeout(() => {
          this.saveStatus = '';
          this.cdr.markForCheck();
        }, 3000);
      }
    });
  }

  savePermanently(): void {
    // Since we're already saving on each change, this just shows a confirmation
    this.saveStatus = this.translationService.translate('background.settingsSaved');
    this.cdr.markForCheck();
    setTimeout(() => {
      this.saveStatus = '';
      this.cdr.markForCheck();
    }, 3000);
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.confirmSeed();
    } else if (event.key === 'Escape') {
      this.cancelEditing();
    }
  }
}