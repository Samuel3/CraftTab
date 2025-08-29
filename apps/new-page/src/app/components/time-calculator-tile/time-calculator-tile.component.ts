import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface TimeSlot {
  id: number;
  startTime: string;
  endTime: string;
  duration: number; // duration in minutes
}

@Component({
  selector: 'new-page-time-calculator-tile',
  templateUrl: './time-calculator-tile.component.html',
  styleUrls: ['./time-calculator-tile.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
})
export class TimeCalculatorTileComponent implements OnInit, OnDestroy {
  @Input() name = '';
  @Input() editMode = false;

  private timeSlotsSubject = new BehaviorSubject<TimeSlot[]>([]);
  private destroy$ = new Subject<void>();
  private nextSlotId = 1;

  timeSlots$: Observable<TimeSlot[]> = this.timeSlotsSubject.asObservable();
  totalDuration$: Observable<number>;
  totalHours$: Observable<number>;
  showWarning$: Observable<boolean>;

  constructor() {
    this.totalDuration$ = this.timeSlots$.pipe(
      map(slots => slots.reduce((sum, slot) => sum + slot.duration, 0))
    );

    this.totalHours$ = this.totalDuration$.pipe(
      map(minutes => minutes / 60)
    );

    this.showWarning$ = this.totalHours$.pipe(
      map(hours => hours > 10)
    );
  }

  ngOnInit(): void {
    // Initialize with one empty time slot
    this.addNewTimeSlot();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onStartTimeChange(slotId: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onTimeChange(slotId, 'startTime', target.value);
  }

  onEndTimeChange(slotId: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onTimeChange(slotId, 'endTime', target.value);
  }

  onTimeChange(slotId: number, field: 'startTime' | 'endTime', value: string): void {
    const currentSlots = this.timeSlotsSubject.value;
    const updatedSlots = currentSlots.map(slot => {
      if (slot.id === slotId) {
        const updatedSlot = { ...slot, [field]: value };
        updatedSlot.duration = this.calculateDuration(updatedSlot.startTime, updatedSlot.endTime);
        return updatedSlot;
      }
      return slot;
    });

    this.timeSlotsSubject.next(updatedSlots);

    // Add new time slot if both start and end time are filled for the last slot
    const lastSlot = updatedSlots[updatedSlots.length - 1];
    if (lastSlot && lastSlot.startTime && lastSlot.endTime) {
      this.addNewTimeSlot();
    }
  }

  private addNewTimeSlot(): void {
    const currentSlots = this.timeSlotsSubject.value;
    const newSlot: TimeSlot = {
      id: this.nextSlotId++,
      startTime: '',
      endTime: '',
      duration: 0
    };
    this.timeSlotsSubject.next([...currentSlots, newSlot]);
  }

  clearAllEntries(): void {
    this.timeSlotsSubject.next([]);
    this.nextSlotId = 1; // Reset the ID counter
    this.addNewTimeSlot();
  }

  private calculateDuration(startTime: string, endTime: string): number {
    if (!startTime || !endTime) {
      return 0;
    }

    const start = this.parseTime(startTime);
    const end = this.parseTime(endTime);

    if (!start || !end) {
      return 0;
    }

    let duration = end - start;
    
    // Handle case where end time is on the next day
    if (duration < 0) {
      duration += 24 * 60; // Add 24 hours in minutes
    }

    return duration;
  }

  private parseTime(timeString: string): number | null {
    if (!timeString || !timeString.includes(':')) {
      return null;
    }

    const parts = timeString.split(':');
    if (parts.length !== 2) {
      return null;
    }

    const hoursStr = parts[0];
    const minutesStr = parts[1];
    
    if (!hoursStr || !minutesStr) {
      return null;
    }

    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return null;
    }

    return hours * 60 + minutes;
  }

  formatDuration(minutes: number): string {
    if (minutes === 0) {
      return '0h 0m';
    }
    
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours === 0) {
      return `${remainingMinutes}m`;
    } else if (remainingMinutes === 0) {
      return `${hours}h`;
    } else {
      return `${hours}h ${remainingMinutes}m`;
    }
  }

  formatTotalHours(hours: number): string {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    
    if (wholeHours === 0) {
      return `${minutes}m`;
    } else if (minutes === 0) {
      return `${wholeHours}h`;
    } else {
      return `${wholeHours}h ${minutes}m`;
    }
  }

  trackBySlotId(_index: number, slot: TimeSlot): number {
    return slot.id;
  }
}