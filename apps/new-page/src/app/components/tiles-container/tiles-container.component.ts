import { NgForOf, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';

import { tileConfig, TileType } from '../../model/tiles';
import { BookmarkTilesComponent } from '../bookmark-tile/bookmark-tiles.component';
import { CalculatorTilesComponent } from '../calculator-tile/calculator-tiles.component';
import { SearchTilesComponent } from '../search-tile/search-tiles.component';
import { KanbanTileComponent } from '../kanban-tile/kanban-tile.component';
import { ConfigService } from '../../services/config.service';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'new-page-tiles-container',
  templateUrl: './tiles-container.component.html',
  styleUrls: ['./tiles-container.component.scss'],
  standalone: true,
  imports: [
    NgForOf,
    SearchTilesComponent,
    BookmarkTilesComponent,
    CalculatorTilesComponent,
    KanbanTileComponent,
    NgIf,
    DragDropModule,
    TranslatePipe,
  ],
})
export class TilesContainerComponent implements OnInit {
  @Input() editMode = false;

  tiles: tileConfig[] = [
    {
      id: '0',
      name: 'tiles.bookmarks',
      tileType: TileType.Bookmarks,
    },
    {
      id: '1',
      name: 'tiles.search',
      tileType: TileType.Search,
    },
    {
      id: '2',
      name: 'tiles.calculator',
      tileType: TileType.Calculator,
    },
    {
      id: '3',
      name: 'tiles.kanban',
      tileType: TileType.Kanban,
    },
  ];
  protected readonly TileType = TileType;
  showTileSelection = false;
  availableTileTypes = Object.values(TileType);
  tileRows: tileConfig[][] = [[]];
  maxTilesPerRow = 3;

  constructor(
    private configService: ConfigService,
    private translationService: TranslationService
  ) {}

  async ngOnInit() {
    const savedConfig = await this.configService.loadTilesConfig();
    if (savedConfig) {
      this.tiles = savedConfig;
    }
    this.updateTileRows();
  }

  private updateTileRows() {
    this.tileRows = [];
    let currentRow: tileConfig[] = [];

    for (const tile of this.tiles) {
      if (currentRow.length >= this.maxTilesPerRow) {
        this.tileRows.push(currentRow);
        currentRow = [];
      }
      currentRow.push(tile);
    }

    if (currentRow.length > 0) {
      this.tileRows.push(currentRow);
    }
  }

  async onDrop(event: CdkDragDrop<tileConfig[][]>) {
    moveItemInArray(this.tileRows, event.previousIndex, event.currentIndex);
    this.tiles = this.tileRows.flat();
    await this.configService.saveTilesConfig(this.tiles);
  }

  async onRowDrop(event: CdkDragDrop<tileConfig[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.tiles = this.tileRows.flat();
    await this.configService.saveTilesConfig(this.tiles);
  }

  async deleteTile(tile: tileConfig) {
    this.tiles = this.tiles.filter(t => t.id !== tile.id);
    this.updateTileRows();
    await this.configService.saveTilesConfig(this.tiles);
  }

  openTileSelection() {
    this.showTileSelection = true;
  }

  closeTileSelection() {
    this.showTileSelection = false;
  }

  async addTile(type: TileType) {
    const newTile: tileConfig = {
      id: Date.now().toString(),
      name: this.getTileTranslationKey(type),
      tileType: type
    };

    this.tiles.push(newTile);
    this.updateTileRows();
    await this.configService.saveTilesConfig(this.tiles);
    this.closeTileSelection();
  }

  getTileTranslationKey(type: TileType): string {
    switch (type) {
      case TileType.Bookmarks:
        return 'tiles.bookmarks';
      case TileType.Search:
        return 'tiles.search';
      case TileType.Calculator:
        return 'tiles.calculator';
      case TileType.Kanban:
        return 'tiles.kanban';
      default:
        return type;
    }
  }

  getTileName(type: TileType): string {
    switch (type) {
      case TileType.Bookmarks:
        return this.translationService.translate('tiles.bookmarks');
      case TileType.Search:
        return this.translationService.translate('tiles.search');
      case TileType.Calculator:
        return this.translationService.translate('tiles.calculator');
      case TileType.Kanban:
        return this.translationService.translate('tiles.kanban');
      default:
        return type;
    }
  }

  getTileIcon(type: TileType): string {
    switch (type) {
      case TileType.Bookmarks:
        return 'fas fa-bookmark';
      case TileType.Search:
        return 'fas fa-search';
      case TileType.Calculator:
        return 'fas fa-calculator';
      case TileType.Kanban:
        return 'fas fa-columns';
      default:
        return 'fas fa-square';
    }
  }
}
