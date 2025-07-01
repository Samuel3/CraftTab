import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkTilesComponent } from './bookmark-tiles.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslationService } from '../../services/translation.service';
import { LanguageService } from '../../services/language.service';

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
        local: {
          get: jest.fn().mockImplementation((_, callback) => {
            callback({ crafttab_language: 'en' });
          }),
          set: jest.fn().mockImplementation((_, callback) => {
            if (callback) callback();
          })
        },
        sync: {
          get: jest.fn().mockImplementation((_, callback) => {
            callback({ bookmarkOrder: [] });
          }),
          set: jest.fn().mockImplementation((_, callback) => {
            if (callback) callback();
          }),
          remove: jest.fn().mockImplementation((_, callback) => {
            if (callback) callback();
          })
        }
      },
      runtime: {
        lastError: null
      }
  beforeEach(async () => {
    // Setze Chrome Mock global
    (window as any).chrome = mockChrome;

    await TestBed.configureTestingModule({
      imports: [
        BookmarkTilesComponent,
        NoopAnimationsModule,
        DragDropModule,
        HttpClientTestingModule
      ],
      providers: [TranslationService, LanguageService]
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
