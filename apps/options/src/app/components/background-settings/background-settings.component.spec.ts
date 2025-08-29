import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackgroundSettingsComponent } from './background-settings.component';
import { BackgroundService } from '../../services/background.service';
import { BehaviorSubject, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('BackgroundSettingsComponent', () => {
  let component: BackgroundSettingsComponent;
  let fixture: ComponentFixture<BackgroundSettingsComponent>;
  let mockBackgroundService: any;
  let mockBackgroundConfig$: BehaviorSubject<any>;

  beforeEach(async () => {
    mockBackgroundConfig$ = new BehaviorSubject({ seed: 'test-seed-123' });
    
    mockBackgroundService = {
      backgroundConfig$: mockBackgroundConfig$,
      updateSeed: () => of(void 0),
      generateNewSeed: () => of('new-seed-456'),
      getCurrentSeed: () => 'test-seed-123'
    };

    await TestBed.configureTestingModule({
      imports: [BackgroundSettingsComponent, FormsModule],
      providers: [
        { provide: BackgroundService, useValue: mockBackgroundService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundSettingsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current seed from service', () => {
    fixture.detectChanges();
    expect(component.currentSeed).toBe('test-seed-123');
    expect(component.editingSeed).toBe('test-seed-123');
  });

  it('should start and cancel editing', () => {
    component.currentSeed = 'original-seed';
    component.startEditing();
    
    expect(component.isEditing).toBe(true);
    expect(component.editingSeed).toBe('original-seed');
    
    component.editingSeed = 'modified-seed';
    component.cancelEditing();
    
    expect(component.isEditing).toBe(false);
    expect(component.editingSeed).toBe('original-seed');
  });

  it('should handle keyboard events correctly', () => {
    spyOn(component, 'confirmSeed');
    spyOn(component, 'cancelEditing');
    
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    
    component.onKeyPress(enterEvent);
    expect(component.confirmSeed).toHaveBeenCalled();
    
    component.onKeyPress(escapeEvent);
    expect(component.cancelEditing).toHaveBeenCalled();
  });

  it('should show save status messages', () => {
    component.saveStatus = 'Test message';
    fixture.detectChanges();
    
    const statusElement = fixture.debugElement.nativeElement.querySelector('.status-message');
    expect(statusElement).toBeTruthy();
    expect(statusElement.textContent.trim()).toBe('Test message');
  });
});