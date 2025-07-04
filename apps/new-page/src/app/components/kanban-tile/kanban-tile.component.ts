import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, CdkDropList } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddTicketDialogComponent } from './add-ticket-dialog.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Ticket {
  id: number;
  title: string;
}

interface Column {
  id: number;
  title: string;
  tickets: Ticket[];
}

@Component({
  selector: 'new-page-kanban-tile',
  templateUrl: './kanban-tile.component.html',
  styleUrls: ['./kanban-tile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    TranslatePipe
  ]
})
export class KanbanTileComponent implements OnInit {
  @Input() name = 'Kanban Board';
  @Input() editMode = false;

  @ViewChildren('ticketDropList') ticketDropLists!: QueryList<CdkDropList>;
  @ViewChildren(CdkDropList) dropLists!: QueryList<CdkDropList>;

  columns: Column[] = [
    { id: 1, title: 'Open', tickets: [] },
    { id: 2, title: 'In Progress', tickets: [] },
    { id: 3, title: 'Waiting', tickets: [] },
    { id: 4, title: 'Done', tickets: [] }
  ];

  private readonly STORAGE_KEY = 'kanban_board_data';
  newColumnTitle = '';
  addTicketDialogComponent = AddTicketDialogComponent;

  // Editier-Logik für Tickets
  editingTicket: Ticket | null = null;
  editedTicketTitle: string = '';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadBoard();
  }

  private saveBoard(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.columns));
  }

  private loadBoard(): void {
    const savedData = localStorage.getItem(this.STORAGE_KEY);
    if (savedData) {
      this.columns = JSON.parse(savedData);
      this.columns.forEach(col => {
        if (!Array.isArray(col.tickets)) {
          col.tickets = [];
        }
      });
    }
  }

  drop(event: CdkDragDrop<Ticket[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.saveBoard();
  }

  dropColumn(event: CdkDragDrop<Column[]>) {
    if (this.editMode) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
      this.saveBoard();
    }
  }

  openAddTicketDialog() {
    const dialogRef = this.dialog.open(this.addTicketDialogComponent, {
      width: '300px',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && typeof result === 'string') {
        const newTicket: Ticket = {
          id: Date.now(),
          title: result.trim()
        };
        if (this.columns[0]) {
          this.columns[0].tickets.push(newTicket);
          this.saveBoard();
        }
      }
    });
  }

  deleteTicket(column: Column, ticket: Ticket) {
    const index = column.tickets.indexOf(ticket);
    if (index > -1) {
      column.tickets.splice(index, 1);
      this.saveBoard();
    }
  }

  addColumn() {
    if (this.newColumnTitle.trim()) {
      const newColumn: Column = {
        id: Date.now(),
        title: this.newColumnTitle.trim(),
        tickets: []
      };
      this.columns.push(newColumn);
      this.newColumnTitle = '';
      this.saveBoard();
    }
  }

  deleteColumn(column: Column) {
    const index = this.columns.indexOf(column);
    if (index > -1) {
      this.columns.splice(index, 1);
      this.saveBoard();
    }
  }

  updateColumnTitle(column: Column, newTitle: Event) {
    const title = (newTitle.target as HTMLInputElement).value.trim();
    if (title) {
      column.title = title;
      this.saveBoard();
    }
  }

  protected readonly HTMLInputElement = HTMLInputElement;

  getConnectedDropLists(): string[] {
    return this.columns.map(column => 'dropList-' + column.id);
  }

  // --- Ticket-Titel bearbeiten ---
  startEditingTicket(ticket: Ticket) {
    this.editingTicket = ticket;
    this.editedTicketTitle = ticket.title;
  }

  isEditingTicket(ticket: Ticket): boolean {
    return this.editingTicket === ticket;
  }

  finishEditingTicket(ticket: Ticket, newTitle: string) {
    const trimmed = newTitle.trim();
    if (trimmed && ticket.title !== trimmed) {
      ticket.title = trimmed;
      this.saveBoard();
    }
    this.editingTicket = null;
    this.editedTicketTitle = '';
  }

  cancelEditingTicket() {
    this.editingTicket = null;
    this.editedTicketTitle = '';
  }
}
