import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundSettingsComponent } from './components/background-settings/background-settings.component';
import { BackgroundComponent } from './components/background/background.component';
import { AboutComponent } from './components/about/about.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';

@Component({
  standalone: true,
  selector: 'options-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BackgroundSettingsComponent, BackgroundComponent, AboutComponent, TranslatePipe]
})
export class AppComponent implements OnInit {
  translationsLoaded = false;
  currentTab: 'settings' | 'about' = 'settings';

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private get chromeApi(): any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    return typeof win.chrome !== 'undefined' ? win.chrome : undefined;
  }

  async ngOnInit(): Promise<void> {
    // Check if we should open the about page directly
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('tab') === 'about') {
      this.currentTab = 'about';
    }

    // Wait for translations to load before showing the UI
    await this.translationService.waitForTranslations();
    this.translationsLoaded = true;
    this.cdr.markForCheck();
  }

  goBackToMain(): void {
    // Check if we're in a Chrome extension context
    if (this.chromeApi?.tabs && this.chromeApi?.runtime) {
      // Create a new tab with the new-page app
      this.chromeApi.tabs.create({
        url: this.chromeApi.runtime.getURL('pages/new-page/index.html')
      });
    } else {
      // Fallback for development environment - try to open in same tab
      window.location.href = '../new-page/index.html';
    }
  }

  switchTab(tab: 'settings' | 'about'): void {
    this.currentTab = tab;
    this.cdr.markForCheck();
  }
}
