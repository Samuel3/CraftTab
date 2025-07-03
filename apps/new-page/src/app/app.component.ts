import { Component, OnInit, ViewChild } from '@angular/core';
import { TilesContainerComponent } from './components/tiles-container/tiles-container.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'new-page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TilesContainerComponent, LanguageSwitcherComponent, TranslatePipe],
  standalone: true,
})
export class AppComponent implements OnInit {
  editMode = false;
  
  @ViewChild(LanguageSwitcherComponent) languageSwitcher!: LanguageSwitcherComponent;

  constructor(
    private translationService: TranslationService
  ) {}

  async ngOnInit() {
    // Initialize translation service and wait for translations to load
    await this.translationService.waitForTranslations();
    
    // @ts-ignore
    if (typeof window !== 'undefined' && (window as any).chrome?.bookmarks) {
      (window as any).chrome.bookmarks.getTree().then((result: any) => {
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
}
