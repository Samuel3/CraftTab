import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-add-ticket-dialog',
  template: `
    <h2 mat-dialog-title>{{ 'kanban.addTicket' | translate }}</h2>
    <mat-dialog-content>
      <mat-form-field class="full-width">
        <input matInput 
               [placeholder]="'Ticket Title' | translate" 
               [formControl]="titleControl"
               (keyup.enter)="onSubmit()">
        <mat-error *ngIf="titleControl.hasError('required')">{{ 'Title is required' | translate }}</mat-error>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions class="dialog-actions">
      <button class="cancel-btn" (click)="onCancel()">{{ 'common.close' | translate }}</button>
      <button class="submit-btn" 
              [disabled]="!titleControl.valid" 
              (click)="onSubmit()">{{ 'kanban.addTicket' | translate }}</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .full-width {
      width: 100%;
    }

    .dialog-actions {
      padding: 16px 0 0;
      margin: 0;
      gap: 8px;
      display: flex;
      justify-content: center;
    }

    .cancel-btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      background: #f5f5f5;
      color: #333;
      min-width: 80px;
      transition: background-color 0.2s ease;

      &:hover {
        background: #e0e0e0;
      }
    }

    .submit-btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      background: #4caf50;
      color: white;
      min-width: 80px;
      transition: background-color 0.2s ease;

      &:hover:not(:disabled) {
        background: #388e3c;
      }

      &:disabled {
        background: #cccccc;
        cursor: not-allowed;
      }
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslatePipe
  ]
})
export class AddTicketDialogComponent {
  titleControl = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<AddTicketDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.titleControl.valid) {
      this.dialogRef.close(this.titleControl.value);
    }
  }
}