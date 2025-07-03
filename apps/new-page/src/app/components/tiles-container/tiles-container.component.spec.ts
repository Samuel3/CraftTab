import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TilesContainerComponent } from './tiles-container.component';
import { TileType } from '../../model/tiles';
import { ConfigService } from '../../services/config.service';

// Mock chrome API
const mockChrome = {
  storage: {
    sync: {
      set: jest.fn(),
      get: jest.fn()
    }
  }
};

// Add chrome to global scope
(global as any).chrome = mockChrome;

describe('TilesContainerComponent', () => {
  let component: TilesContainerComponent;
  let fixture: ComponentFixture<TilesContainerComponent>;
  let mockConfigService: jest.Mocked<ConfigService>;

  beforeEach(async () => {
    const configServiceSpy = {
      loadTilesConfig: jest.fn().mockReturnValue(of(null)),
      saveTilesConfig: jest.fn().mockReturnValue(of(undefined))
    };

    await TestBed.configureTestingModule({
      imports: [TilesContainerComponent],
      providers: [
        { provide: ConfigService, useValue: configServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TilesContainerComponent);
    component = fixture.componentInstance;
    mockConfigService = TestBed.inject(ConfigService) as jest.Mocked<ConfigService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load saved config on init', () => {
    expect(mockConfigService.loadTilesConfig).toHaveBeenCalled();
  });

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = jest.spyOn(component['subscriptions'], 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
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

  it('should add tile and save config', () => {
    const initialTileCount = component.tiles.length;
    component.addTile(TileType.Bookmarks);
    
    expect(component.tiles.length).toBe(initialTileCount + 1);
    expect(mockConfigService.saveTilesConfig).toHaveBeenCalledWith(component.tiles);
  });

  it('should delete tile and save config', () => {
    const tileToDelete = component.tiles[0];
    const initialTileCount = component.tiles.length;
    
    if (tileToDelete) {
      component.deleteTile(tileToDelete);
      
      expect(component.tiles.length).toBe(initialTileCount - 1);
      expect(component.tiles).not.toContain(tileToDelete);
      expect(mockConfigService.saveTilesConfig).toHaveBeenCalledWith(component.tiles);
    }
  });
});
