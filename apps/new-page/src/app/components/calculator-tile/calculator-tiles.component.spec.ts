import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorTilesComponent } from './calculator-tiles.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslationService } from '../../services/translation.service';
import { LanguageService } from '../../services/language.service';

describe('SearchTilesComponent', () => {
  let component: CalculatorTilesComponent;
  let fixture: ComponentFixture<CalculatorTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorTilesComponent, HttpClientTestingModule],
      providers: [TranslationService, LanguageService]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
