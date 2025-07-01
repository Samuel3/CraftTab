import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [NgForOf, NgIf],
  template: `
    <div class="language-switcher" *ngIf="showSwitcher">
      <button 
        class="language-toggle"
        (click)="toggleDropdown()"
        [title]="'Language: ' + getCurrentLanguageName()">
        {{ getCurrentLanguageFlag() }}
      </button>
      
      <div class="language-dropdown" *ngIf="isDropdownOpen">
        <button 
          *ngFor="let language of availableLanguages"
          class="language-option"
          [class.active]="language.code === currentLanguage"
          (click)="selectLanguage(language.code)">
          <span class="flag">{{ language.flag }}</span>
          <span class="name">{{ language.name }}</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .language-switcher {
      position: relative;
      display: inline-block;
    }

    .language-toggle {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 16px;
      color: white;
      transition: all 0.2s ease;
      min-width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .language-toggle:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }

    .language-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      background: white;
      border: 1px solid #ddd;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      min-width: 150px;
      margin-top: 4px;
    }

    .language-option {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px 12px;
      border: none;
      background: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
      font-size: 14px;
      color: #333;
    }

    .language-option:hover {
      background-color: #f5f5f5;
    }

    .language-option.active {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .language-option:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .language-option:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .flag {
      margin-right: 8px;
      font-size: 16px;
    }

    .name {
      font-weight: 500;
    }
  `]
})
export class LanguageSwitcherComponent implements OnInit {
  showSwitcher = false;
  isDropdownOpen = false;
  currentLanguage = 'en';
  availableLanguages: Language[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.availableLanguages = this.languageService.getAvailableLanguages();
    this.currentLanguage = this.languageService.getCurrentLanguage();
    
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  setVisible(visible: boolean) {
    this.showSwitcher = visible;
    if (!visible) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(languageCode: string) {
    this.languageService.setLanguage(languageCode);
    this.isDropdownOpen = false;
  }

  getCurrentLanguageName(): string {
    const currentLang = this.availableLanguages.find(lang => lang.code === this.currentLanguage);
    return currentLang ? currentLang.name : 'Unknown';
  }

  getCurrentLanguageFlag(): string {
    const currentLang = this.availableLanguages.find(lang => lang.code === this.currentLanguage);
    return currentLang ? currentLang.flag : '🌐';
  }
}