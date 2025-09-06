import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundSettingsComponent } from './components/background-settings/background-settings.component';
import { BackgroundComponent } from './components/background/background.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';

@Component({
  standalone: true,
  selector: 'options-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BackgroundSettingsComponent, BackgroundComponent, TranslatePipe]
})
export class AppComponent implements OnInit {
  translationsLoaded = false;

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    // Wait for translations to load before showing the UI
    await this.translationService.waitForTranslations();
    this.translationsLoaded = true;
    this.cdr.markForCheck();
  }

  goBackToMain(): void {
    // Check if we're in a Chrome extension context
    if (typeof (window as any).chrome !== 'undefined' && (window as any).chrome.tabs) {
      // Create a new tab with the new-page app
      (window as any).chrome.tabs.create({
        url: (window as any).chrome.runtime.getURL('pages/new-page/index.html')
      });
    } else {
      // Fallback for development environment - try to open in same tab
      window.location.href = '../new-page/index.html';
    }
  }
}
