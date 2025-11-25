import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

interface LibraryInfo {
  name: string;
  version: string;
  description: string;
  url: string;
}

@Component({
  selector: 'options-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslatePipe]
})
export class AboutComponent implements OnInit {
  readonly author = 'Aviv Haruzi';
  readonly license = 'MIT License';
  readonly githubUrl = 'https://github.com/Samuel3/CraftTab';
  readonly version = '1.0.0';

  readonly libraries: LibraryInfo[] = [
    {
      name: 'Angular',
      version: '20.0.5',
      description: 'about.libraries.angular.description',
      url: 'https://angular.io'
    },
    {
      name: 'Angular Material',
      version: '20.0.4',
      description: 'about.libraries.material.description',
      url: 'https://material.angular.io'
    },
    {
      name: 'RxJS',
      version: '7.8.0',
      description: 'about.libraries.rxjs.description',
      url: 'https://rxjs.dev'
    },
    {
      name: 'Nx',
      version: '21.2.1',
      description: 'about.libraries.nx.description',
      url: 'https://nx.dev'
    }
  ];

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    await this.translationService.waitForTranslations();
    this.cdr.markForCheck();
  }

  openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
