import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable, from, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

interface Bookmark {
  id: string;
  title: string;
  url: string;
  favicon?: string;
  order?: number;
}

@Component({
  selector: 'new-page-bookmark-tile',
  templateUrl: './bookmark-tiles.component.html',
  styleUrls: ['./bookmark-tiles.component.scss'],
  standalone: true,
  imports: [CommonModule, DragDropModule],
})
export class BookmarkTilesComponent implements OnInit, OnDestroy {
  @Input() name = '';
  @Input() editMode = false;
  bookmarks: Bookmark[] = [];
  isEditing = false;

  private subscriptions = new Subscription();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadBookmarks();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.saveBookmarkOrder();
    }
  }

  onDrop(event: CdkDragDrop<Bookmark[]>) {
    moveItemInArray(this.bookmarks, event.previousIndex, event.currentIndex);
    this.saveBookmarkOrder();
    this.cdr.detectChanges();
  }

  private saveBookmarkOrder() {
    const bookmarkOrder = this.bookmarks.map((bookmark, index) => ({
      id: bookmark.id,
      order: index
    }));
    
    const chromeAPI = (window as any).chrome;
    if (chromeAPI && chromeAPI.storage) {
      chromeAPI.storage.sync.set({ bookmarkOrder }, () => {
        if (chromeAPI.runtime && chromeAPI.runtime.lastError) {
          console.error('Failed to save bookmark order:', chromeAPI.runtime.lastError.message);
        } else {
          console.log('Bookmark order saved successfully.');
        }
      });
    }
  }

  private loadBookmarkOrder(): Observable<{ [key: string]: number }> {
    return from(
      new Promise<{ [key: string]: any }>((resolve, reject) => {
        const chromeAPI = (window as any).chrome;
        if (chromeAPI && chromeAPI.storage) {
          chromeAPI.storage.sync.get('bookmarkOrder', (result: any) => {
            resolve(result);
          });
        } else {
          reject(new Error('Chrome storage API not available'));
        }
      })
    ).pipe(
      map(result => {
        const orderMap: { [key: string]: number } = {};
        if (result['bookmarkOrder']) {
          result['bookmarkOrder'].forEach((item: { id: string; order: number }) => {
            orderMap[item.id] = item.order;
          });
        }
        return orderMap;
      })
    );
  }

  private loadBookmarks() {
    const bookmarksSub = this.getBookmarkTree()
      .pipe(
        switchMap((bookmarkTreeNodes) => {
          this.bookmarks = [];
          return this.processBookmarkNodes(bookmarkTreeNodes).pipe(
            switchMap(() => this.loadBookmarkOrder())
          );
        })
      )
      .subscribe({
        next: (orderMap) => {
          // Sort bookmarks according to saved order
          if (Object.keys(orderMap).length > 0) {
            const sortedBookmarks: Bookmark[] = [];
            const maxOrder = Math.max(...Object.values(orderMap));
            // Add bookmarks in saved order
            for (let i = 0; i <= maxOrder; i++) {
              const bookmark = this.bookmarks.find(b => orderMap[b.id] === i);
              if (bookmark) {
                sortedBookmarks.push(bookmark);
              }
            }
            // Add remaining bookmarks at the end
            this.bookmarks.forEach(bookmark => {
              if (!sortedBookmarks.includes(bookmark)) {
                sortedBookmarks.push(bookmark);
              }
            });
            this.bookmarks = sortedBookmarks;
          }
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Failed to load bookmarks:', error);
          this.cdr.detectChanges();
        }
      });
    this.subscriptions.add(bookmarksSub);
  }

  private getBookmarkTree(): Observable<any[]> {
    return from(
      new Promise<any[]>((resolve, reject) => {
        const chromeAPI = (window as any).chrome;
        if (chromeAPI && chromeAPI.bookmarks) {
          chromeAPI.bookmarks.getTree((bookmarkTreeNodes: any[]) => {
            resolve(bookmarkTreeNodes);
          });
        } else {
          reject(new Error('Chrome bookmarks API not available'));
        }
      })
    );
  }

  private getFaviconUrl(url: string): string {
    try {
      const urlObj = new URL(url);
      return `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=64`;
    } catch (e) {
      return 'assets/default-favicon.png';
    }
  }

  private processBookmarkNodes(nodes: any[]): Observable<void> {
    const processNode = (node: any): void => {
      if (node.url) {
        const bookmark: Bookmark = {
          id: node.id,
          title: node.title || 'Unbenannt',
          url: node.url,
          favicon: this.getFaviconUrl(node.url)
        };
        this.bookmarks.push(bookmark);
      }
      if (node.children) {
        node.children.forEach((child: any) => processNode(child));
      }
    };

    nodes.forEach(node => processNode(node));
    return from([undefined]).pipe(map(() => void 0));
  }

  moveBookmark(index: number, direction: 'up' | 'down') {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === this.bookmarks.length - 1)
    ) {
      return;
    }

    const bookmark = this.bookmarks[index];
    if (!bookmark) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    this.bookmarks.splice(index, 1);
    this.bookmarks.splice(newIndex, 0, bookmark);
    this.cdr.detectChanges();
  }

  removeBookmark(index: number) {
    this.bookmarks.splice(index, 1);
    this.saveBookmarkOrder();
    this.cdr.detectChanges();
  }

  resetOrder() {
    const chromeAPI = (window as any).chrome;
    if (chromeAPI && chromeAPI.storage) {
      chromeAPI.storage.sync.remove('bookmarkOrder', () => {
        this.loadBookmarks();
      });
    }
  }
}
