import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesContainerComponent } from './components/tiles-container/tiles-container.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { BackgroundComponent } from './components/background/background.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';

// Access Chrome API with proper typing
declare const chrome: typeof globalThis.chrome | undefined;

@Component({
  selector: 'new-page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, TilesContainerComponent, LanguageSwitcherComponent, BackgroundComponent, TranslatePipe],
  standalone: true,
})
export class AppComponent implements OnInit {
  editMode = false;

  @ViewChild(LanguageSwitcherComponent) languageSwitcher!: LanguageSwitcherComponent;

  translationService = inject(TranslationService);

  private get chromeApi(): typeof chrome | undefined {
    return typeof chrome !== 'undefined' ? chrome : undefined;
  }

  async ngOnInit() {
    // Initialize translation service and wait for translations to load
    await this.translationService.waitForTranslations();

    if (this.chromeApi?.bookmarks) {
      this.chromeApi.bookmarks.getTree().then((result) => {
        console.log('Bookmarks:', result);
      });
    }
    console.log('New Page Component Initialized');
  }

  toggleEditMode() {
    this.editMode = !this.editMode;

    // Show/hide language switcher based on edit mode
    if (this.languageSwitcher) {
      this.languageSwitcher.setVisible(this.editMode);
    }
  }

  openBackgroundSettings() {
    // Open the extension's options page
    if (this.chromeApi?.runtime) {
      this.chromeApi.runtime.openOptionsPage();
    } else {
      // Fallback: open options page in new tab
      window.open('/pages/options/index.html', '_blank');
    }
  }

  openAboutPage() {
    // Open the extension's options page with about tab
    if (this.chromeApi?.runtime && this.chromeApi?.tabs) {
      const optionsUrl = this.chromeApi.runtime.getURL('pages/options/index.html?tab=about');
      this.chromeApi.tabs.create({ url: optionsUrl });
    } else {
      // Fallback: open options page with about tab in new tab
      window.open('/pages/options/index.html?tab=about', '_blank');
    }
  }
}
