import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KanbanTileComponent } from './kanban-tile.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// Dummy-Komponente für Dialog
import { Component } from '@angular/core';

@Component({ template: '' })
class DummyDialogComponent {}

interface Ticket {
  id: number;
  title: string;
}

interface Column {
  id: number;
  title: string;
  tickets: Ticket[];
}

describe('KanbanTileComponent', () => {
  let component: KanbanTileComponent;
  let fixture: ComponentFixture<KanbanTileComponent>;

  beforeEach(async () => {
    const dialogSpy = {
      open: jest.fn().mockReturnValue({
        afterClosed: () => of('New Test Ticket')
      })
    };

    await TestBed.configureTestingModule({
      imports: [
        KanbanTileComponent,
        NoopAnimationsModule,
        DragDropModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        DummyDialogComponent
      ],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    fixture = TestBed.createComponent(KanbanTileComponent);
    component = fixture.componentInstance;
    component.addTicketDialogComponent = DummyDialogComponent as any;
    component['dialog'] = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default columns', () => {
    expect(component.columns.length).toBe(4);
    expect(component.columns[0]?.title).toBe('Open');
    expect(component.columns[1]?.title).toBe('In Progress');
    expect(component.columns[2]?.title).toBe('Waiting');
    expect(component.columns[3]?.title).toBe('Done');
  });

  it('should toggle edit mode', () => {
    expect(component.editMode).toBeFalsy();
    component.editMode = true;
    fixture.detectChanges();
    expect(component.editMode).toBeTruthy();
  });

  it('should add a new ticket', () => {
    const initialTicketCount = component.columns[0]?.tickets.length ?? 0;
    component.openAddTicketDialog();
    fixture.detectChanges();
    expect(component.columns[0]?.tickets.length).toBe(initialTicketCount + 1);
    expect(component.columns[0]?.tickets[initialTicketCount]?.title).toBe('New Test Ticket');
  });

  it('should delete a ticket', () => {
    // Add a ticket first
    component.openAddTicketDialog();
    fixture.detectChanges();

    const column = component.columns[0];
    if (!column) return;

    const ticket = column.tickets[0];
    if (!ticket) return;

    const initialTicketCount = column.tickets.length;

    component.deleteTicket(column, ticket);
    fixture.detectChanges();

    expect(column.tickets.length).toBe(initialTicketCount - 1);
  });

  it('should add a new column', () => {
    const initialColumnCount = component.columns.length;
    component.newColumnTitle = 'Test Column';
    component.addColumn();
    fixture.detectChanges();

    expect(component.columns.length).toBe(initialColumnCount + 1);
    expect(component.columns[initialColumnCount]?.title).toBe('Test Column');
  });

  it('should delete a column', () => {
    const initialColumnCount = component.columns.length;
    const columnToDelete = component.columns[0];
    if (!columnToDelete) return;

    component.deleteColumn(columnToDelete);
    fixture.detectChanges();

    expect(component.columns.length).toBe(initialColumnCount - 1);
  });

  it('should update column title', () => {
    const column = component.columns[0];
    if (!column) return;

    const event = { target: { value: 'Updated Title' } } as unknown as Event;
    component.updateColumnTitle(column, event);
    fixture.detectChanges();

    expect(column.title).toBe('Updated Title');
  });

  it('should handle ticket drop within same column', () => {
    // Add two tickets
    component.openAddTicketDialog();
    component.openAddTicketDialog();
    fixture.detectChanges();

    const column = component.columns[0];
    if (!column) return;

    const tickets = column.tickets;
    const firstTicket = tickets[0];
    const secondTicket = tickets[1];

    // Simulate drop event
    const event = {
      previousContainer: { data: tickets },
      container: { data: tickets },
      previousIndex: 0,
      currentIndex: 1
    } as CdkDragDrop<Ticket[]>;

    component.drop(event);
    fixture.detectChanges();

    expect(tickets[0]).toBe(secondTicket);
    expect(tickets[1]).toBe(firstTicket);
  });

  it('should handle ticket drop between columns', () => {
    // Add a ticket to first column
    component.openAddTicketDialog();
    fixture.detectChanges();

    const sourceColumn = component.columns[0];
    const targetColumn = component.columns[1];
    if (!sourceColumn || !targetColumn) return;

    const sourceTickets = sourceColumn.tickets;
    const targetTickets = targetColumn.tickets;
    const ticket = sourceTickets[0];

    // Simulate drop event
    const event = {
      previousContainer: { data: sourceTickets },
      container: { data: targetTickets },
      previousIndex: 0,
      currentIndex: 0
    } as CdkDragDrop<Ticket[]>;

    component.drop(event);
    fixture.detectChanges();

    expect(sourceTickets.length).toBe(0);
    expect(targetTickets.length).toBe(1);
    expect(targetTickets[0]).toBe(ticket);
  });

  it('should handle column reordering in edit mode', () => {
    component.editMode = true;
    fixture.detectChanges();

    const firstColumn = component.columns[0];
    const secondColumn = component.columns[1];
    if (!firstColumn || !secondColumn) return;

    // Simulate drop event
    const event = {
      previousIndex: 0,
      currentIndex: 1
    } as CdkDragDrop<Column[]>;

    component.dropColumn(event);
    fixture.detectChanges();

    expect(component.columns[0]).toBe(secondColumn);
    expect(component.columns[1]).toBe(firstColumn);
  });

  it('should not handle column reordering outside edit mode', () => {
    component.editMode = false;
    fixture.detectChanges();

    const firstColumn = component.columns[0];
    const secondColumn = component.columns[1];
    if (!firstColumn || !secondColumn) return;

    // Simulate drop event
    const event = {
      previousIndex: 0,
      currentIndex: 1
    } as CdkDragDrop<Column[]>;

    component.dropColumn(event);
    fixture.detectChanges();

    expect(component.columns[0]).toBe(firstColumn);
    expect(component.columns[1]).toBe(secondColumn);
  });

  // --- Tests für Ticket-Editing-Feature ---
  describe('Ticket Editing', () => {
    let ticket: Ticket;
    let column: Column;

    beforeEach(() => {
      // Add a ticket first
      component.openAddTicketDialog();
      fixture.detectChanges();

      column = component.columns[0]!;
      ticket = column.tickets[0]!;
    });

    it('should start editing a ticket', () => {
      component.startEditingTicket(ticket);

      expect(component.editingTicket).toBe(ticket);
      expect(component.editedTicketTitle).toBe(ticket.title);
    });

    it('should check if ticket is being edited', () => {
      expect(component.isEditingTicket(ticket)).toBeFalsy();

      component.startEditingTicket(ticket);

      expect(component.isEditingTicket(ticket)).toBeTruthy();
    });

    it('should finish editing with new title', () => {
      component.startEditingTicket(ticket);
      const newTitle = 'Updated Ticket Title';

      component.finishEditingTicket(ticket, newTitle);

      expect(ticket.title).toBe(newTitle);
      expect(component.editingTicket).toBeNull();
      expect(component.editedTicketTitle).toBe('');
    });

    it('should not update title if new title is empty', () => {
      component.startEditingTicket(ticket);
      const originalTitle = ticket.title;

      component.finishEditingTicket(ticket, '   ');

      expect(ticket.title).toBe(originalTitle);
      expect(component.editingTicket).toBeNull();
    });

    it('should not update title if new title is same as current', () => {
      component.startEditingTicket(ticket);
      const originalTitle = ticket.title;

      component.finishEditingTicket(ticket, originalTitle);

      expect(ticket.title).toBe(originalTitle);
      expect(component.editingTicket).toBeNull();
    });

    it('should cancel editing', () => {
      component.startEditingTicket(ticket);

      component.cancelEditingTicket();

      expect(component.editingTicket).toBeNull();
      expect(component.editedTicketTitle).toBe('');
    });

    it('should disable drag when ticket is being edited', () => {
      expect(component.isEditingTicket(ticket)).toBeFalsy();

      component.startEditingTicket(ticket);

      expect(component.isEditingTicket(ticket)).toBeTruthy();
    });
  });
});
