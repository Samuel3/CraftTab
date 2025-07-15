/// <reference types="chrome"/>
import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'new-page-search-tile',
  templateUrl: './search-tiles.component.html',
  styleUrls: ['./search-tiles.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, TranslatePipe],
})
export class SearchTilesComponent implements AfterContentInit {
  @ViewChild('search') searchElement!: ElementRef;
  @Input() name = '';
  @Input() editMode = false;
  searchQuery = '';
  
  valueUpdated() {
    if (typeof window !== 'undefined' && (window as any).chrome?.search) {
      (window as any).chrome.search.query({ disposition: 'CURRENT_TAB', text: this.searchQuery });
    } else {
      // Fallback for browsers without Chrome extension API
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(this.searchQuery)}`;
      window.open(searchUrl, '_blank');
    }
  }

  ngAfterContentInit() {
    this.searchElement?.nativeElement?.focus();
  }
}
