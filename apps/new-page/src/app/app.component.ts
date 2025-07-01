import { Component, OnInit, ViewChild } from '@angular/core';
import { TilesContainerComponent } from './components/tiles-container/tiles-container.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { TranslatePipe } from './pipes/translate.pipe';

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

  ngOnInit() {
    // @ts-ignore
    if (typeof chrome !== 'undefined' && chrome.bookmarks) {
      chrome.bookmarks.getTree().then((result) => {
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
