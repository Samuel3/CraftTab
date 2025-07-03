import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';
import { tileConfig, TileType } from '../model/tiles';

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

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
    
    // Reset mocks
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save tiles config using Observable', (done) => {
    const testTiles: tileConfig[] = [
      {
        id: '1',
        name: 'Test Tile',
        tileType: TileType.Bookmarks
      }
    ];

    // Mock chrome.storage.sync.set to call callback
    mockChrome.storage.sync.set.mockImplementation((_data: any, callback: () => void) => {
      callback();
    });

    service.saveTilesConfig(testTiles).subscribe({
      next: () => {
        expect(mockChrome.storage.sync.set).toHaveBeenCalledWith(
          { tiles_config: testTiles },
          expect.any(Function)
        );
        done();
      },
      error: done
    });
  });

  it('should load tiles config using Observable', (done) => {
    const testTiles: tileConfig[] = [
      {
        id: '1',
        name: 'Test Tile',
        tileType: TileType.Search
      }
    ];

    // Mock chrome.storage.sync.get to call callback with data
    mockChrome.storage.sync.get.mockImplementation((_keys: string[], callback: (result: any) => void) => {
      callback({ tiles_config: testTiles });
    });

    service.loadTilesConfig().subscribe({
      next: (result) => {
        expect(result).toEqual(testTiles);
        expect(mockChrome.storage.sync.get).toHaveBeenCalledWith(
          ['tiles_config'],
          expect.any(Function)
        );
        done();
      },
      error: done
    });
  });

  it('should return null when no config is stored', (done) => {
    // Mock chrome.storage.sync.get to call callback with empty result
    mockChrome.storage.sync.get.mockImplementation((_keys: string[], callback: (result: any) => void) => {
      callback({});
    });

    service.loadTilesConfig().subscribe({
      next: (result) => {
        expect(result).toBeNull();
        done();
      },
      error: done
    });
  });
});