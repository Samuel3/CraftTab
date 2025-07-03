import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TilesContainerComponent } from './tiles-container.component';
import { TileType } from '../../model/tiles';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslationService } from '../../services/translation.service';
import { LanguageService } from '../../services/language.service';

describe('TilesContainerComponent', () => {
  let component: TilesContainerComponent;
  let fixture: ComponentFixture<TilesContainerComponent>;
  let mockTranslationService: Partial<TranslationService>;

  beforeEach(async () => {
    mockTranslationService = {
      translate: jest.fn((key: string) => {
        const translations: { [key: string]: string } = {
          'tiles.bookmarks': 'Bookmarks',
          'tiles.search': 'Search',
          'tiles.calculator': 'Calculator',
          'tiles.kanban': 'Kanban Board'
        };
        return translations[key] || key;
      })
    };

    await TestBed.configureTestingModule({
      imports: [TilesContainerComponent, HttpClientTestingModule],
      providers: [
        { provide: TranslationService, useValue: mockTranslationService },
        LanguageService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const cases: any[][] = [
    [TileType.Bookmarks, 'Bookmarks'],
    [TileType.Search, 'Search'],
    [TileType.Calculator, 'Calculator'],
    [TileType.Kanban, 'Kanban Board'],
  ];

  describe("Test tile names", () => {
    test.each(cases)(
      "should return correct tile name for %s",
      (tileType: TileType, expectedName: string) => {
        expect(component.getTileName(tileType)).toBe(expectedName);
      }
    )
  });

  describe("Test tile translation keys", () => {
    it('should return correct translation key for bookmarks', () => {
      expect(component.getTileTranslationKey(TileType.Bookmarks)).toBe('tiles.bookmarks');
    });

    it('should return correct translation key for search', () => {
      expect(component.getTileTranslationKey(TileType.Search)).toBe('tiles.search');
    });

    it('should return correct translation key for calculator', () => {
      expect(component.getTileTranslationKey(TileType.Calculator)).toBe('tiles.calculator');
    });

    it('should return correct translation key for kanban', () => {
      expect(component.getTileTranslationKey(TileType.Kanban)).toBe('tiles.kanban');
    });
  });
});
