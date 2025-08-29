import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackgroundService } from '../../services/background.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'options-background-settings',
  templateUrl: './background-settings.component.html',
  styleUrls: ['./background-settings.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BackgroundSettingsComponent implements OnInit, OnDestroy {
  currentSeed = '';
  editingSeed = '';
  isEditing = false;
  saveStatus = '';
  
  private subscription = new Subscription();

  constructor(private backgroundService: BackgroundService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.backgroundService.backgroundConfig$.subscribe(config => {
        if (config) {
          this.currentSeed = config.seed;
          this.editingSeed = config.seed;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  startEditing(): void {
    this.isEditing = true;
    this.editingSeed = this.currentSeed;
    this.saveStatus = '';
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.editingSeed = this.currentSeed;
    this.saveStatus = '';
  }

  confirmSeed(): void {
    if (this.editingSeed.trim()) {
      this.backgroundService.updateSeed(this.editingSeed.trim()).subscribe({
        next: () => {
          this.currentSeed = this.editingSeed.trim();
          this.isEditing = false;
          this.saveStatus = 'Seed updated successfully!';
          setTimeout(() => this.saveStatus = '', 3000);
        },
        error: () => {
          this.saveStatus = 'Error updating seed';
          setTimeout(() => this.saveStatus = '', 3000);
        }
      });
    }
  }

  generateNewSeed(): void {
    this.backgroundService.generateNewSeed().subscribe({
      next: (newSeed) => {
        this.currentSeed = newSeed;
        this.editingSeed = newSeed;
        this.saveStatus = 'New seed generated!';
        setTimeout(() => this.saveStatus = '', 3000);
      },
      error: () => {
        this.saveStatus = 'Error generating new seed';
        setTimeout(() => this.saveStatus = '', 3000);
      }
    });
  }

  savePermanently(): void {
    // Since we're already saving on each change, this just shows a confirmation
    this.saveStatus = 'Settings saved permanently!';
    setTimeout(() => this.saveStatus = '', 3000);
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.confirmSeed();
    } else if (event.key === 'Escape') {
      this.cancelEditing();
    }
  }
}