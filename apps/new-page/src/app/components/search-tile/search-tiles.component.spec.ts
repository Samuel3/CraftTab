import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchTilesComponent } from './search-tiles.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslationService } from '../../services/translation.service';
import { LanguageService } from '../../services/language.service';

describe('SearchTilesComponent', () => {
  let component: SearchTilesComponent;
  let fixture: ComponentFixture<SearchTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTilesComponent, HttpClientTestingModule],
      providers: [TranslationService, LanguageService]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
