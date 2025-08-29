import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeCalculatorTileComponent } from './time-calculator-tile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslationService } from '../../services/translation.service';
import { LanguageService } from '../../services/language.service';
import { By } from '@angular/platform-browser';

describe('TimeCalculatorTileComponent', () => {
  let component: TimeCalculatorTileComponent;
  let fixture: ComponentFixture<TimeCalculatorTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCalculatorTileComponent, HttpClientTestingModule],
      providers: [TranslationService, LanguageService]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeCalculatorTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with one empty time slot', () => {
    component.timeSlots$.subscribe(slots => {
      expect(slots.length).toBe(1);
      expect(slots[0]?.startTime).toBe('');
      expect(slots[0]?.endTime).toBe('');
      expect(slots[0]?.duration).toBe(0);
    });
  });

  it('should calculate duration correctly for valid time inputs', () => {
    const duration = component['calculateDuration']('09:00', '17:00');
    expect(duration).toBe(480); // 8 hours in minutes
  });

  it('should handle overnight time calculation', () => {
    const duration = component['calculateDuration']('22:00', '06:00');
    expect(duration).toBe(480); // 8 hours in minutes (overnight)
  });

  it('should return 0 for invalid time inputs', () => {
    const duration1 = component['calculateDuration']('', '17:00');
    const duration2 = component['calculateDuration']('09:00', '');
    const duration3 = component['calculateDuration']('invalid', '17:00');
    
    expect(duration1).toBe(0);
    expect(duration2).toBe(0);
    expect(duration3).toBe(0);
  });

  it('should format duration correctly', () => {
    expect(component.formatDuration(0)).toBe('0h 0m');
    expect(component.formatDuration(30)).toBe('30m');
    expect(component.formatDuration(60)).toBe('1h');
    expect(component.formatDuration(90)).toBe('1h 30m');
    expect(component.formatDuration(480)).toBe('8h');
  });

  it('should format total hours correctly', () => {
    expect(component.formatTotalHours(0)).toBe('0m');
    expect(component.formatTotalHours(0.5)).toBe('30m');
    expect(component.formatTotalHours(1)).toBe('1h');
    expect(component.formatTotalHours(1.5)).toBe('1h 30m');
    expect(component.formatTotalHours(8)).toBe('8h');
  });

  it('should add new time slot when both start and end time are filled', () => {
    const initialSlots = component['timeSlotsSubject'].value;
    const firstSlotId = initialSlots[0]?.id;
    
    if (firstSlotId) {
      component.onTimeChange(firstSlotId, 'startTime', '09:00');
      component.onTimeChange(firstSlotId, 'endTime', '17:00');
      
      component.timeSlots$.subscribe(slots => {
        expect(slots.length).toBe(2);
        expect(slots[0]?.duration).toBe(480);
        expect(slots[1]?.startTime).toBe('');
        expect(slots[1]?.endTime).toBe('');
      });
    }
  });

  it('should calculate total duration correctly', () => {
    const initialSlots = component['timeSlotsSubject'].value;
    const firstSlotId = initialSlots[0]?.id;
    
    if (firstSlotId) {
      // Add first time slot
      component.onTimeChange(firstSlotId, 'startTime', '09:00');
      component.onTimeChange(firstSlotId, 'endTime', '12:00');
      
      // Add second time slot
      const slots = component['timeSlotsSubject'].value;
      const secondSlotId = slots[slots.length - 1]?.id;
      if (secondSlotId) {
        component.onTimeChange(secondSlotId, 'startTime', '13:00');
        component.onTimeChange(secondSlotId, 'endTime', '17:00');
        
        component.totalDuration$.subscribe(total => {
          expect(total).toBe(420); // 3 hours + 4 hours = 7 hours = 420 minutes
        });
      }
    }
  });

  it('should show warning when total exceeds 10 hours', () => {
    const initialSlots = component['timeSlotsSubject'].value;
    const firstSlotId = initialSlots[0]?.id;
    
    if (firstSlotId) {
      // Add a time slot with more than 10 hours
      component.onTimeChange(firstSlotId, 'startTime', '08:00');
      component.onTimeChange(firstSlotId, 'endTime', '19:00');
      
      component.showWarning$.subscribe(showWarning => {
        expect(showWarning).toBe(true);
      });
    }
  });

  it('should not show warning when total is under 10 hours', () => {
    const initialSlots = component['timeSlotsSubject'].value;
    const firstSlotId = initialSlots[0]?.id;
    
    if (firstSlotId) {
      // Add a time slot with less than 10 hours
      component.onTimeChange(firstSlotId, 'startTime', '09:00');
      component.onTimeChange(firstSlotId, 'endTime', '17:00');
      
      component.showWarning$.subscribe(showWarning => {
        expect(showWarning).toBe(false);
      });
    }
  });

  it('should clear all entries when clearAllEntries is called', () => {
    const initialSlots = component['timeSlotsSubject'].value;
    const firstSlotId = initialSlots[0]?.id;
    
    if (firstSlotId) {
      // Add some time slots first
      component.onTimeChange(firstSlotId, 'startTime', '09:00');
      component.onTimeChange(firstSlotId, 'endTime', '17:00');
      
      // Clear all entries
      component.clearAllEntries();
      
      component.timeSlots$.subscribe(slots => {
        expect(slots.length).toBe(1);
        expect(slots[0]?.startTime).toBe('');
        expect(slots[0]?.endTime).toBe('');
        expect(slots[0]?.duration).toBe(0);
      });
    }
  });

  it('should parse time correctly', () => {
    expect(component['parseTime']('09:30')).toBe(570); // 9*60 + 30
    expect(component['parseTime']('00:00')).toBe(0);
    expect(component['parseTime']('23:59')).toBe(1439);
    expect(component['parseTime']('')).toBeNull();
    expect(component['parseTime']('invalid')).toBeNull();
    expect(component['parseTime']('25:00')).toBeNull(); // Invalid hour
    expect(component['parseTime']('12:60')).toBeNull(); // Invalid minute
  });

  it('should track by slot id correctly', () => {
    const slot = { id: 123, startTime: '', endTime: '', duration: 0 };
    expect(component.trackBySlotId(0, slot)).toBe(123);
  });

  it('should render clear button', () => {
    const clearButton = fixture.debugElement.query(By.css('.clear-button'));
    expect(clearButton).toBeTruthy();
  });

  it('should render time input fields', () => {
    const timeInputs = fixture.debugElement.queryAll(By.css('.time-input'));
    expect(timeInputs.length).toBeGreaterThanOrEqual(2); // At least start and end time inputs
  });
});