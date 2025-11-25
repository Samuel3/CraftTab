import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesContainerComponent } from './components/tiles-container/tiles-container.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { BackgroundComponent } from './components/background/background.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private get chromeApi(): any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    return typeof win.chrome !== 'undefined' ? win.chrome : undefined;
  }

  async ngOnInit() {
    // Initialize translation service and wait for translations to load
    await this.translationService.waitForTranslations();

    if (this.chromeApi?.bookmarks) {
      this.chromeApi.bookmarks.getTree().then((result: unknown) => {
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
