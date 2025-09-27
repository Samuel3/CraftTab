import { TestBed } from '@angular/core/testing';
import { BackgroundService, BackgroundConfig } from './background.service';

describe('BackgroundService', () => {
  let service: BackgroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundService);
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a valid seed', () => {
    const seed = service.generateSeed();
    expect(seed).toBeTruthy();
    expect(typeof seed).toBe('string');
    expect(seed.length).toBeGreaterThan(0);
  });

  it('should generate different seeds on subsequent calls', () => {
    const seed1 = service.generateSeed();
    const seed2 = service.generateSeed();
    expect(seed1).not.toBe(seed2);
  });

  it('should save and load background config', (done) => {
    const testConfig: BackgroundConfig = { seed: 'test-seed-123' };
    
    service.saveBackgroundConfig(testConfig).subscribe(() => {
      service.loadBackgroundConfig().subscribe(loadedConfig => {
        expect(loadedConfig).toEqual(testConfig);
        done();
      });
    });
  });

  it('should update seed and notify subscribers', (done) => {
    const newSeed = 'new-test-seed';
    
    service.backgroundConfig$.subscribe(config => {
      if (config && config.seed === newSeed) {
        expect(config.seed).toBe(newSeed);
        done();
      }
    });

    service.updateSeed(newSeed).subscribe();
  });

  it('should generate new seed and update config', (done) => {
    service.generateNewSeed().subscribe(newSeed => {
      expect(newSeed).toBeTruthy();
      expect(typeof newSeed).toBe('string');
      
      const currentSeed = service.getCurrentSeed();
      expect(currentSeed).toBe(newSeed);
      done();
    });
  });

  it('should generate triangles based on seed', () => {
    const seed = 'test-seed';
    const width = 800;
    const height = 600;
    
    const triangles1 = service.generateTriangles(seed, width, height);
    const triangles2 = service.generateTriangles(seed, width, height);
    
    expect(triangles1).toBeTruthy();
    expect(triangles1.length).toBeGreaterThan(0);
    expect(triangles1).toEqual(triangles2); // Same seed should produce same triangles
    
    // Check triangle structure
    triangles1.forEach(triangle => {
      expect(triangle.points).toHaveLength(3);
      expect(triangle.color).toBeTruthy();
      triangle.points.forEach(point => {
        expect(typeof point.x).toBe('number');
        expect(typeof point.y).toBe('number');
      });
    });
  });

  it('should generate different triangles for different seeds', () => {
    const width = 800;
    const height = 600;
    
    const triangles1 = service.generateTriangles('seed1', width, height);
    const triangles2 = service.generateTriangles('seed2', width, height);
    
    expect(triangles1).not.toEqual(triangles2);
  });

  it('should return current seed or generate one if none exists', () => {
    const currentSeed = service.getCurrentSeed();
    expect(currentSeed).toBeTruthy();
    expect(typeof currentSeed).toBe('string');
  });
});