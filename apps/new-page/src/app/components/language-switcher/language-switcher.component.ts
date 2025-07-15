import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
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