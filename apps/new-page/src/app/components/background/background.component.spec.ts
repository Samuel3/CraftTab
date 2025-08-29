import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgroundComponent } from './background.component';
import { BackgroundService } from '../../services/background.service';
import { BehaviorSubject } from 'rxjs';

describe('BackgroundComponent', () => {
  let component: BackgroundComponent;
  let fixture: ComponentFixture<BackgroundComponent>;
  let mockBackgroundService: any;
  let mockBackgroundConfig$: BehaviorSubject<any>;

  beforeEach(async () => {
    mockBackgroundConfig$ = new BehaviorSubject({ seed: 'test-seed' });
    
    mockBackgroundService = {
      backgroundConfig$: mockBackgroundConfig$,
      getCurrentSeed: () => 'test-seed',
      generateTriangles: () => [
        {
          points: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 50, y: 100 }],
          color: 'rgba(242, 149, 89, 0.3)'
        }
      ]
    };

    await TestBed.configureTestingModule({
      imports: [BackgroundComponent],
      providers: [
        { provide: BackgroundService, useValue: mockBackgroundService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have canvas element', () => {
    const canvasElement = fixture.debugElement.nativeElement.querySelector('canvas');
    expect(canvasElement).toBeTruthy();
  });
});