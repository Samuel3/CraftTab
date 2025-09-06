import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from './services/language.service';
import { TranslationService } from './services/translation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    LanguageService,
    TranslationService,
    importProvidersFrom(HttpClientModule)
  ],
};
