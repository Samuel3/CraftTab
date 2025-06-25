import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesContainerComponent } from './tiles-container.component';
import { TileType } from '../../model/tiles';

describe('SearchTilesComponent', () => {
  let component: TilesContainerComponent;
  let fixture: ComponentFixture<TilesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TilesContainerComponent],
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
});
