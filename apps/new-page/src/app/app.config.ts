import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { LanguageService } from './services/language.service';
import { TranslationService } from './services/translation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    ConfigService,
    LanguageService,
    TranslationService,
    importProvidersFrom(HttpClientModule)
  ],
};
