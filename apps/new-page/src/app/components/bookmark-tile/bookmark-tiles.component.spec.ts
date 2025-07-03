import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkTilesComponent } from './bookmark-tiles.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

describe('BookmarkTilesComponent', () => {
  let component: BookmarkTilesComponent;
  let fixture: ComponentFixture<BookmarkTilesComponent>;

  // Mock Chrome API
  const mockChrome = {
    bookmarks: {
      getTree: jest.fn().mockImplementation((callback) => {
        callback([{
          id: '1',
          title: 'Test Bookmark',
          url: 'https://example.com',
          children: []
        }]);
      })
    },
    storage: {
      sync: {
        get: jest.fn().mockImplementation((_, callback) => {
          callback({ bookmarkOrder: [] });
        }),
        set: jest.fn().mockImplementation((_, callback) => {
          callback();
        }),
        remove: jest.fn().mockImplementation((_, callback) => {
          callback();
        })
      }
    },
    runtime: {
      lastError: null
    }
  };

  beforeEach(async () => {
    // Set Chrome Mock globally
    (global as any).chrome = mockChrome;

    await TestBed.configureTestingModule({
      imports: [
        BookmarkTilesComponent,
        NoopAnimationsModule,
        DragDropModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load bookmarks on init', () => {
    expect(mockChrome.bookmarks.getTree).toHaveBeenCalled();
  });

  it('should toggle edit mode', () => {
    expect(component.isEditing).toBeFalsy();
    component.toggleEditMode();
    expect(component.isEditing).toBeTruthy();
    component.toggleEditMode();
    expect(component.isEditing).toBeFalsy();
  });

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = jest.spyOn(component['subscriptions'], 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
