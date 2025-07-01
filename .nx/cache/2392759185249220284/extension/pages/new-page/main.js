"use strict";
(self["webpackChunknew_page"] = self["webpackChunknew_page"] || []).push([["main"],{

/***/ 105:
/*!**********************************************!*\
  !*** ./apps/new-page/src/app/model/tiles.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileType: () => (/* binding */ TileType)
/* harmony export */ });
var TileType;
(function (TileType) {
  TileType["Bookmarks"] = "bookmarks";
  TileType["Calculator"] = "calculator";
  TileType["Search"] = "search";
  TileType["Kanban"] = "kanban";
})(TileType || (TileType = {}));

/***/ }),

/***/ 1648:
/*!**********************************************************!*\
  !*** ./apps/new-page/src/app/services/config.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);


class ConfigService {
  constructor() {
    this.STORAGE_KEY = 'tiles_config';
  }
  saveTilesConfig(tiles) {
    var _this = this;
    return (0,_home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        chrome.storage.sync.set({
          [_this.STORAGE_KEY]: tiles
        }, () => {
          resolve();
        });
      });
    })();
  }
  loadTilesConfig() {
    var _this2 = this;
    return (0,_home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        chrome.storage.sync.get([_this2.STORAGE_KEY], result => {
          resolve(result[_this2.STORAGE_KEY] || null);
        });
      });
    })();
  }
  static #_ = this.ɵfac = function ConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConfigService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ConfigService,
    factory: ConfigService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2441:
/*!***************************************************************************************!*\
  !*** ./apps/new-page/src/app/components/tiles-container/tiles-container.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TilesContainerComponent: () => (/* binding */ TilesContainerComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _model_tiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/tiles */ 105);
/* harmony import */ var _bookmark_tile_bookmark_tiles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookmark-tile/bookmark-tiles.component */ 6982);
/* harmony import */ var _calculator_tile_calculator_tiles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calculator-tile/calculator-tiles.component */ 7526);
/* harmony import */ var _search_tile_search_tiles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-tile/search-tiles.component */ 8230);
/* harmony import */ var _kanban_tile_kanban_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kanban-tile/kanban-tile.component */ 7301);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/config.service */ 1648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);












function TilesContainerComponent_div_2_div_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TilesContainerComponent_div_2_div_1_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const tile_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.deleteTile(tile_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TilesContainerComponent_div_2_div_1_new_page_bookmark_tile_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "new-page-bookmark-tile", 13);
  }
  if (rf & 2) {
    const tile_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", tile_r4.name)("editMode", ctx_r1.editMode);
  }
}
function TilesContainerComponent_div_2_div_1_new_page_search_tile_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "new-page-search-tile", 13);
  }
  if (rf & 2) {
    const tile_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", tile_r4.name)("editMode", ctx_r1.editMode);
  }
}
function TilesContainerComponent_div_2_div_1_new_page_calculator_tile_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "new-page-calculator-tile", 13);
  }
  if (rf & 2) {
    const tile_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", tile_r4.name)("editMode", ctx_r1.editMode);
  }
}
function TilesContainerComponent_div_2_div_1_new_page_kanban_tile_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "new-page-kanban-tile", 13);
  }
  if (rf & 2) {
    const tile_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", tile_r4.name)("editMode", ctx_r1.editMode);
  }
}
function TilesContainerComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TilesContainerComponent_div_2_div_1_button_2_Template, 2, 0, "button", 9)(3, TilesContainerComponent_div_2_div_1_new_page_bookmark_tile_3_Template, 1, 2, "new-page-bookmark-tile", 10)(4, TilesContainerComponent_div_2_div_1_new_page_search_tile_4_Template, 1, 2, "new-page-search-tile", 10)(5, TilesContainerComponent_div_2_div_1_new_page_calculator_tile_5_Template, 1, 2, "new-page-calculator-tile", 10)(6, TilesContainerComponent_div_2_div_1_new_page_kanban_tile_6_Template, 1, 2, "new-page-kanban-tile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tile_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cdkDragDisabled", !ctx_r1.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", tile_r4.tileType === ctx_r1.TileType.Bookmarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", tile_r4.tileType === ctx_r1.TileType.Search);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", tile_r4.tileType === ctx_r1.TileType.Calculator);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", tile_r4.tileType === ctx_r1.TileType.Kanban);
  }
}
function TilesContainerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cdkDropListDropped", function TilesContainerComponent_div_2_Template_div_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onRowDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TilesContainerComponent_div_2_div_1_Template, 7, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", row_r5);
  }
}
function TilesContainerComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TilesContainerComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openTileSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Kachel hinzuf\u00FCgen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TilesContainerComponent_div_4_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TilesContainerComponent_div_4_button_5_Template_button_click_0_listener() {
      const type_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.addTile(type_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r1.getTileIcon(type_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getTileName(type_r9), " ");
  }
}
function TilesContainerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TilesContainerComponent_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeTileSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TilesContainerComponent_div_4_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Kachel ausw\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TilesContainerComponent_div_4_button_5_Template, 3, 3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TilesContainerComponent_div_4_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeTileSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.availableTileTypes);
  }
}
class TilesContainerComponent {
  constructor(configService) {
    this.configService = configService;
    this.editMode = false;
    this.tiles = [{
      id: '0',
      name: 'bookmarks',
      tileType: _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Bookmarks
    }, {
      id: '1',
      name: 'search',
      tileType: _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Search
    }, {
      id: '2',
      name: 'calculator',
      tileType: _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Calculator
    }, {
      id: '3',
      name: 'kanban',
      tileType: _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Kanban
    }];
    this.TileType = _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType;
    this.showTileSelection = false;
    this.availableTileTypes = Object.values(_model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType);
    this.tileRows = [[]];
    this.maxTilesPerRow = 3;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const savedConfig = yield _this.configService.loadTilesConfig();
      if (savedConfig) {
        _this.tiles = savedConfig;
      }
      _this.updateTileRows();
    })();
  }
  updateTileRows() {
    this.tileRows = [];
    let currentRow = [];
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
  onDrop(event) {
    var _this2 = this;
    return (0,_home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.moveItemInArray)(_this2.tileRows, event.previousIndex, event.currentIndex);
      _this2.tiles = _this2.tileRows.flat();
      yield _this2.configService.saveTilesConfig(_this2.tiles);
    })();
  }
  onRowDrop(event) {
    var _this3 = this;
    return (0,_home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event.previousContainer === event.container) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      }
      _this3.tiles = _this3.tileRows.flat();
      yield _this3.configService.saveTilesConfig(_this3.tiles);
    })();
  }
  deleteTile(tile) {
    var _this4 = this;
    return (0,_home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.tiles = _this4.tiles.filter(t => t.id !== tile.id);
      _this4.updateTileRows();
      yield _this4.configService.saveTilesConfig(_this4.tiles);
    })();
  }
  openTileSelection() {
    this.showTileSelection = true;
  }
  closeTileSelection() {
    this.showTileSelection = false;
  }
  addTile(type) {
    var _this5 = this;
    return (0,_home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newTile = {
        id: Date.now().toString(),
        name: _this5.getTileName(type),
        tileType: type
      };
      _this5.tiles.push(newTile);
      _this5.updateTileRows();
      yield _this5.configService.saveTilesConfig(_this5.tiles);
      _this5.closeTileSelection();
    })();
  }
  getTileName(type) {
    switch (type) {
      case _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Bookmarks:
        return 'Bookmarks';
      case _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Search:
        return 'Search';
      case _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Calculator:
        return 'Calculator';
      case _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Kanban:
        return 'Kanban Board';
      default:
        return type;
    }
  }
  getTileIcon(type) {
    switch (type) {
      case _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Bookmarks:
        return 'fas fa-bookmark';
      case _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Search:
        return 'fas fa-search';
      case _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Calculator:
        return 'fas fa-calculator';
      case _model_tiles__WEBPACK_IMPORTED_MODULE_1__.TileType.Kanban:
        return 'fas fa-columns';
      default:
        return 'fas fa-square';
    }
  }
  static #_ = this.ɵfac = function TilesContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TilesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: TilesContainerComponent,
    selectors: [["new-page-tiles-container"]],
    inputs: {
      editMode: "editMode"
    },
    decls: 5,
    vars: 3,
    consts: [["id", "container"], ["id", "tiles-container", "cdkDropList", "", "cdkDropListOrientation", "vertical", 3, "cdkDropListDropped"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", "class", "tile-row", 3, "cdkDropListDropped", 4, "ngFor", "ngForOf"], ["class", "add-tile-button", 3, "click", 4, "ngIf"], ["class", "modal-overlay", "role", "dialog", "aria-modal", "true", 3, "click", 4, "ngIf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "tile-row", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "tile-wrapper", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "tile-wrapper", 3, "cdkDragDisabled"], [1, "tile-container"], ["class", "delete-button", "aria-label", "Delete tile", 3, "click", 4, "ngIf"], [3, "name", "editMode", 4, "ngIf"], ["aria-label", "Delete tile", 1, "delete-button", 3, "click"], [1, "fas", "fa-trash"], [3, "name", "editMode"], [1, "add-tile-button", 3, "click"], [1, "fas", "fa-plus"], ["role", "dialog", "aria-modal", "true", 1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "tile-options"], ["class", "tile-option", 3, "click", 4, "ngFor", "ngForOf"], ["aria-label", "Close modal", 1, "close-button", 3, "click"], [1, "fas", "fa-times"], [1, "tile-option", 3, "click"]],
    template: function TilesContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cdkDropListDropped", function TilesContainerComponent_Template_div_cdkDropListDropped_1_listener($event) {
          return ctx.onDrop($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TilesContainerComponent_div_2_Template, 2, 1, "div", 2)(3, TilesContainerComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TilesContainerComponent_div_4_Template, 8, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.tileRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showTileSelection);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _search_tile_search_tiles_component__WEBPACK_IMPORTED_MODULE_4__.SearchTilesComponent, _bookmark_tile_bookmark_tiles_component__WEBPACK_IMPORTED_MODULE_2__.BookmarkTilesComponent, _calculator_tile_calculator_tiles_component__WEBPACK_IMPORTED_MODULE_3__.CalculatorTilesComponent, _kanban_tile_kanban_tile_component__WEBPACK_IMPORTED_MODULE_5__.KanbanTileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDrag],
    styles: ["#tiles-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 1rem;\n  min-height: 200px;\n}\n\n.tile-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  min-height: 200px;\n}\n\n.tile-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  cursor: move;\n}\n\n.tile-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: #ff4444;\n  color: white;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 0;\n  font-size: 12px;\n  transition: all 0.2s ease;\n}\n.delete-button[_ngcontent-%COMP%]:hover {\n  background-color: #cc0000;\n  transform: scale(1.1);\n}\n\n.add-tile-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: 2px dashed #ccc;\n  border-radius: 8px;\n  background: transparent;\n  color: #666;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n}\n.add-tile-button[_ngcontent-%COMP%]:hover {\n  border-color: #999;\n  color: #333;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.add-tile-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  min-width: 300px;\n  position: relative;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.tile-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.tile-option[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n}\n.tile-option[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  border-color: #ddd;\n}\n.tile-option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #666;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: #666;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  color: #333;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.tile-wrapper.cdk-drop-list-dragging[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvbmV3LXBhZ2Uvc3JjL2FwcC9jb21wb25lbnRzL3RpbGVzLWNvbnRhaW5lci90aWxlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0FBREo7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBRkY7QUFJRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBSEo7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSkY7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUpKOztBQVFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBTEY7O0FBVUE7RUFDRSxVQUFBO0FBUEY7O0FBVUE7RUFDRSxzREFBQTtBQVBGOztBQVVBO0VBQ0Usc0RBQUE7QUFQRiIsInNvdXJjZXNDb250ZW50IjpbIiN0aWxlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi50aWxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi50aWxlLXdyYXBwZXIge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi50aWxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ0NDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbn1cblxuLmFkZC10aWxlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzk5OTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICB9XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cblxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50aWxlLW9wdGlvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4udGlsZS1vcHRpb24ge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICB9XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjNjY2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLnRpbGUtd3JhcHBlci5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC50aWxlLXdyYXBwZXI6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3898:
/*!*************************************************************************************!*\
  !*** ./apps/new-page/src/app/components/kanban-tile/add-ticket-dialog.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTicketDialogComponent: () => (/* binding */ AddTicketDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 230);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 7440);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8808);











function AddTicketDialogComponent_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class AddTicketDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    if (this.titleControl.valid) {
      this.dialogRef.close(this.titleControl.value);
    }
  }
  static #_ = this.ɵfac = function AddTicketDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AddTicketDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.k));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddTicketDialogComponent,
    selectors: [["app-add-ticket-dialog"]],
    decls: 11,
    vars: 3,
    consts: [["mat-dialog-title", ""], [1, "full-width"], ["matInput", "", "placeholder", "Ticket Title", 3, "keyup.enter", "formControl"], [4, "ngIf"], [1, "dialog-actions"], [1, "cancel-btn", 3, "click"], [1, "submit-btn", 3, "click", "disabled"]],
    template: function AddTicketDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field", 1)(4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AddTicketDialogComponent_Template_input_keyup_enter_4_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddTicketDialogComponent_mat_error_5_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTicketDialogComponent_Template_button_click_7_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTicketDialogComponent_Template_button_click_9_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.titleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titleControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.titleControl.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.l, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.b, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.M, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.c, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.j, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.b, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.M, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
    styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.dialog-actions[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n  margin: 0;\n  gap: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  background: #f5f5f5;\n  color: #333;\n  min-width: 80px;\n  transition: background-color 0.2s ease;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  background: #4caf50;\n  color: white;\n  min-width: 80px;\n  transition: background-color 0.2s ease;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #388e3c;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #cccccc;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvbmV3LXBhZ2Uvc3JjL2FwcC9jb21wb25lbnRzL2thbmJhbi10aWxlL2FkZC10aWNrZXQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLFdBQUE7QUFBTjs7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFBTjs7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFBTjtBQUVNO0VBQ0UsbUJBQUE7QUFBUjs7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFETjtBQUdNO0VBQ0UsbUJBQUE7QUFEUjtBQUlNO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQUZSIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmZ1bGwtd2lkdGgge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmRpYWxvZy1hY3Rpb25zIHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMCAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhbmNlbC1idG4ge1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN1Ym1pdC1idG4ge1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzg4ZTNjO1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4845:
/*!***********************************!*\
  !*** ./apps/new-page/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 9868);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 8449);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ }),

/***/ 6982:
/*!************************************************************************************!*\
  !*** ./apps/new-page/src/app/components/bookmark-tile/bookmark-tiles.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarkTilesComponent: () => (/* binding */ BookmarkTilesComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







function BookmarkTilesComponent_div_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookmarkTilesComponent_div_4_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.resetOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Reset Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BookmarkTilesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BookmarkTilesComponent_div_4_button_1_Template, 3, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookmarkTilesComponent_div_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggleEditMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.isEditing ? "fas fa-save" : "fas fa-edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.isEditing ? "Save" : "Change Order", " ");
  }
}
function BookmarkTilesComponent_div_5_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookmarkTilesComponent_div_5_div_2_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeBookmark(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Entfernen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BookmarkTilesComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BookmarkTilesComponent_div_5_div_2_button_6_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bookmark_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dragging", ctx_r2.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragDisabled", !ctx_r2.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", bookmark_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", bookmark_r7.favicon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", bookmark_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bookmark_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isEditing);
  }
}
function BookmarkTilesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function BookmarkTilesComponent_div_5_Template_div_cdkDropListDropped_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BookmarkTilesComponent_div_5_div_2_Template, 7, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListDisabled", !ctx_r2.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.bookmarks);
  }
}
class BookmarkTilesComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.name = '';
    this.editMode = false;
    this.bookmarks = [];
    this.isEditing = false;
  }
  ngOnInit() {
    this.loadBookmarks();
  }
  toggleEditMode() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.saveBookmarkOrder();
    }
  }
  onDrop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(this.bookmarks, event.previousIndex, event.currentIndex);
    this.saveBookmarkOrder();
    this.cdr.detectChanges();
  }
  saveBookmarkOrder() {
    const bookmarkOrder = this.bookmarks.map((bookmark, index) => ({
      id: bookmark.id,
      order: index
    }));
    chrome.storage.sync.set({
      bookmarkOrder
    }, () => {
      if (chrome.runtime.lastError) {
        console.error('Failed to save bookmark order:', chrome.runtime.lastError.message);
      } else {
        console.log('Bookmark order saved successfully.');
      }
    });
  }
  loadBookmarkOrder() {
    return new Promise(resolve => {
      chrome.storage.sync.get('bookmarkOrder', result => {
        const orderMap = {};
        if (result['bookmarkOrder']) {
          result['bookmarkOrder'].forEach(item => {
            orderMap[item.id] = item.order;
          });
        }
        resolve(orderMap);
      });
    });
  }
  loadBookmarks() {
    var _this = this;
    chrome.bookmarks.getTree(/*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (bookmarkTreeNodes) {
        _this.bookmarks = [];
        yield _this.processBookmarkNodes(bookmarkTreeNodes);
        const orderMap = yield _this.loadBookmarkOrder();
        // Sortiere Bookmarks nach gespeicherter Reihenfolge
        if (Object.keys(orderMap).length > 0) {
          // Erstelle ein temporäres Array mit der korrekten Reihenfolge
          const sortedBookmarks = [];
          const maxOrder = Math.max(...Object.values(orderMap));
          // Füge Bookmarks in der gespeicherten Reihenfolge hinzu
          for (let i = 0; i <= maxOrder; i++) {
            const bookmark = _this.bookmarks.find(b => orderMap[b.id] === i);
            if (bookmark) {
              sortedBookmarks.push(bookmark);
            }
          }
          // Füge verbleibende Bookmarks am Ende hinzu
          _this.bookmarks.forEach(bookmark => {
            if (!sortedBookmarks.includes(bookmark)) {
              sortedBookmarks.push(bookmark);
            }
          });
          _this.bookmarks = sortedBookmarks;
        }
        _this.cdr.detectChanges();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  getFaviconUrl(url) {
    try {
      const urlObj = new URL(url);
      return `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=64`;
    } catch (e) {
      return 'assets/default-favicon.png';
    }
  }
  processBookmarkNodes(nodes) {
    var _this2 = this;
    return (0,_home_runner_work_CraftTab_CraftTab_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const node of nodes) {
        if (node.url) {
          const bookmark = {
            id: node.id,
            title: node.title || 'Unbenannt',
            url: node.url,
            favicon: _this2.getFaviconUrl(node.url)
          };
          _this2.bookmarks.push(bookmark);
        }
        if (node.children) {
          yield _this2.processBookmarkNodes(node.children);
        }
      }
    })();
  }
  moveBookmark(index, direction) {
    if (direction === 'up' && index === 0 || direction === 'down' && index === this.bookmarks.length - 1) {
      return;
    }
    const bookmark = this.bookmarks[index];
    if (!bookmark) return;
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    this.bookmarks.splice(index, 1);
    this.bookmarks.splice(newIndex, 0, bookmark);
    this.cdr.detectChanges();
  }
  removeBookmark(index) {
    this.bookmarks.splice(index, 1);
    this.saveBookmarkOrder();
    this.cdr.detectChanges();
  }
  resetOrder() {
    chrome.storage.sync.remove('bookmarkOrder', () => {
      this.loadBookmarks();
    });
  }
  static #_ = this.ɵfac = function BookmarkTilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookmarkTilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BookmarkTilesComponent,
    selectors: [["new-page-bookmark-tile"]],
    inputs: {
      name: "name",
      editMode: "editMode"
    },
    decls: 6,
    vars: 5,
    consts: [["id", "container"], [1, "header"], [1, "header-title"], ["class", "button-group", 4, "ngIf"], ["class", "bookmark-tiles", 4, "ngIf"], [1, "button-group"], ["class", "reset-button", 3, "click", 4, "ngIf"], [1, "edit-button", 3, "click"], [1, "reset-button", 3, "click"], [1, "fas", "fa-undo"], [1, "bookmark-tiles"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "bookmark-grid", 3, "cdkDropListDropped", "cdkDropListDisabled"], ["cdkDrag", "", "class", "bookmark-item", 3, "cdkDragDisabled", "dragging", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "bookmark-item", 3, "cdkDragDisabled"], [1, "bookmark-content"], ["target", "_blank", 1, "bookmark-link", 3, "href"], [1, "bookmark-favicon", 3, "src", "alt"], [1, "bookmark-title"], ["class", "remove-button", 3, "click", 4, "ngIf"], [1, "remove-button", 3, "click"], [1, "fas", "fa-trash"]],
    template: function BookmarkTilesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BookmarkTilesComponent_div_4_Template, 5, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BookmarkTilesComponent_div_5_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("edit-mode", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editMode);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag],
    styles: ["#container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  padding: 1rem;\n  transition: border-color 0.3s ease;\n}\n#container.edit-mode[_ngcontent-%COMP%] {\n  border-color: #ccc;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: 0;\n  text-align: left;\n}\n\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n\n.button[_ngcontent-%COMP%], \n.edit-button[_ngcontent-%COMP%], \n.reset-button[_ngcontent-%COMP%], \n.remove-button[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  margin: 1rem 0.5rem 1rem 0;\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border: none;\n  border-radius: 4px;\n  background-color: #f0f0f0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n}\n\n.edit-button[_ngcontent-%COMP%]:hover, \n.reset-button[_ngcontent-%COMP%]:hover, \n.remove-button[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\n.remove-button[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  background: #fff0f0;\n  border: none;\n}\n\n.remove-button[_ngcontent-%COMP%]:hover {\n  background: #e74c3c;\n  color: #fff;\n}\n\n.button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.edit-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.reset-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.remove-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  transition: transform 0.3s ease;\n}\n\n.bookmark-tiles[_ngcontent-%COMP%] {\n  padding: 1rem;\n  width: 100%;\n  overflow-x: auto;\n}\n\n.bookmark-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 0.5rem;\n  min-width: min-content;\n}\n\n.bookmark-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  padding: 1rem;\n  transition: transform 0.2s ease;\n  min-width: 100px;\n  flex-shrink: 0;\n  cursor: default;\n}\n.bookmark-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.15);\n}\n.bookmark-item.dragging[_ngcontent-%COMP%] {\n  cursor: move;\n  opacity: 0.8;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.bookmark-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.bookmark-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  color: inherit;\n}\n\n.bookmark-favicon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin-bottom: 0.5rem;\n}\n\n.bookmark-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-align: center;\n  word-break: break-word;\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.bookmark-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.bookmark-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.bookmark-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f0f0;\n}\n.bookmark-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 8px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.bookmark-grid.cdk-drop-list-dragging[_ngcontent-%COMP%]   .bookmark-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvbmV3LXBhZ2Uvc3JjL2FwcC9jb21wb25lbnRzL2Jvb2ttYXJrLXRpbGUvYm9va21hcmstdGlsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTs7OztFQUlFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7OztFQUdFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTs7OztFQUlFLGtCQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFGO0FBRUU7RUFDRSwyQkFBQTtFQUNBLHFDQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFGRjtBQUlFO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFGSjtBQUlJO0VBQ0UsbUJBQUE7QUFGTjtBQUtJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSE47O0FBUUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFMRjs7QUFVQTtFQUNFLFVBQUE7QUFQRjs7QUFVQTtFQUNFLHNEQUFBO0FBUEY7O0FBVUE7RUFDRSxzREFBQTtBQVBGIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xuXG4gICYuZWRpdC1tb2RlIHtcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJ1dHRvbi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmJ1dHRvbixcbi5lZGl0LWJ1dHRvbixcbi5yZXNldC1idXR0b24sXG4ucmVtb3ZlLWJ1dHRvbiB7XG4gIGhlaWdodDogMi41cmVtO1xuICBtYXJnaW46IDFyZW0gMC41cmVtIDFyZW0gMDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZWRpdC1idXR0b246aG92ZXIsXG4ucmVzZXQtYnV0dG9uOmhvdmVyLFxuLnJlbW92ZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4ucmVtb3ZlLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTc0YzNjO1xuICBiYWNrZ3JvdW5kOiAjZmZmMGYwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5yZW1vdmUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U3NGMzYztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idXR0b24gaSxcbi5lZGl0LWJ1dHRvbiBpLFxuLnJlc2V0LWJ1dHRvbiBpLFxuLnJlbW92ZS1idXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLmJvb2ttYXJrLXRpbGVzIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5ib29rbWFyay1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5ib29rbWFyay1pdGVtIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIH1cblxuICAmLmRyYWdnaW5nIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxufVxuXG4uYm9va21hcmstY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYm9va21hcmstbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5ib29rbWFyay1mYXZpY29uIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uYm9va21hcmstdGl0bGUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmJvb2ttYXJrLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG5cbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICB9XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5ib29rbWFyay1ncmlkLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmJvb2ttYXJrLWl0ZW06bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7301:
/*!*******************************************************************************!*\
  !*** ./apps/new-page/src/app/components/kanban-tile/kanban-tile.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KanbanTileComponent: () => (/* binding */ KanbanTileComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 230);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 7440);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _add_ticket_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-ticket-dialog.component */ 3898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);














const _c0 = ["ticketDropList"];
function KanbanTileComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u22EE\u22EE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function KanbanTileComponent_div_8_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](column_r1.title);
  }
}
function KanbanTileComponent_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KanbanTileComponent_div_8_div_5_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.updateColumnTitle(column_r1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KanbanTileComponent_div_8_div_5_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deleteColumn(column_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", column_r1.title);
  }
}
function KanbanTileComponent_div_8_div_6_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ticket_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ticket_r6.title, " ");
  }
}
function KanbanTileComponent_div_8_div_6_div_1_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 27, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function KanbanTileComponent_div_8_div_6_div_1_input_3_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const editInput_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ticket_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.finishEditingTicket(ticket_r6, editInput_r8.value));
    })("keyup.enter", function KanbanTileComponent_div_8_div_6_div_1_input_3_Template_input_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const editInput_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ticket_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.finishEditingTicket(ticket_r6, editInput_r8.value));
    })("keyup.escape", function KanbanTileComponent_div_8_div_6_div_1_input_3_Template_input_keyup_escape_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.cancelEditingTicket());
    })("click", function KanbanTileComponent_div_8_div_6_div_1_input_3_Template_input_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r2.editedTicketTitle);
  }
}
function KanbanTileComponent_div_8_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function KanbanTileComponent_div_8_div_6_div_1_Template_div_dblclick_0_listener() {
      const ticket_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.startEditingTicket(ticket_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KanbanTileComponent_div_8_div_6_div_1_span_2_Template, 2, 1, "span", 14)(3, KanbanTileComponent_div_8_div_6_div_1_input_3_Template, 2, 1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KanbanTileComponent_div_8_div_6_div_1_Template_button_click_4_listener() {
      const ticket_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deleteTicket(column_r1, ticket_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ticket_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragDisabled", ctx_r2.isEditingTicket(ticket_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isEditingTicket(ticket_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isEditingTicket(ticket_r6));
  }
}
function KanbanTileComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function KanbanTileComponent_div_8_div_6_Template_div_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KanbanTileComponent_div_8_div_6_div_1_Template, 6, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "dropList-" + column_r1.id)("cdkDropListData", column_r1.tickets)("cdkDropListConnectedTo", ctx_r2.getConnectedDropLists());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r1.tickets);
  }
}
function KanbanTileComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, KanbanTileComponent_div_8_div_3_Template, 3, 0, "div", 13)(4, KanbanTileComponent_div_8_h3_4_Template, 2, 1, "h3", 14)(5, KanbanTileComponent_div_8_div_5_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, KanbanTileComponent_div_8_div_6_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragDisabled", !ctx_r2.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.editMode);
  }
}
function KanbanTileComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KanbanTileComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openAddTicketDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+ New Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function KanbanTileComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function KanbanTileComponent_div_11_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.newColumnTitle, $event) || (ctx_r2.newColumnTitle = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function KanbanTileComponent_div_11_Template_input_keyup_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addColumn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KanbanTileComponent_div_11_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addColumn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "+ New Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newColumnTitle);
  }
}
class KanbanTileComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.name = 'Kanban Board';
    this.editMode = false;
    this.columns = [{
      id: 1,
      title: 'Open',
      tickets: []
    }, {
      id: 2,
      title: 'In Progress',
      tickets: []
    }, {
      id: 3,
      title: 'Waiting',
      tickets: []
    }, {
      id: 4,
      title: 'Done',
      tickets: []
    }];
    this.STORAGE_KEY = 'kanban_board_data';
    this.newColumnTitle = '';
    this.addTicketDialogComponent = _add_ticket_dialog_component__WEBPACK_IMPORTED_MODULE_0__.AddTicketDialogComponent;
    // Editier-Logik für Tickets
    this.editingTicket = null;
    this.editedTicketTitle = '';
    this.HTMLInputElement = HTMLInputElement;
  }
  ngOnInit() {
    this.loadBoard();
  }
  saveBoard() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.columns));
  }
  loadBoard() {
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
  drop(event) {
    if (event.previousContainer === event.container) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.saveBoard();
  }
  dropColumn(event) {
    if (this.editMode) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(this.columns, event.previousIndex, event.currentIndex);
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
        const newTicket = {
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
  deleteTicket(column, ticket) {
    const index = column.tickets.indexOf(ticket);
    if (index > -1) {
      column.tickets.splice(index, 1);
      this.saveBoard();
    }
  }
  addColumn() {
    if (this.newColumnTitle.trim()) {
      const newColumn = {
        id: Date.now(),
        title: this.newColumnTitle.trim(),
        tickets: []
      };
      this.columns.push(newColumn);
      this.newColumnTitle = '';
      this.saveBoard();
    }
  }
  deleteColumn(column) {
    const index = this.columns.indexOf(column);
    if (index > -1) {
      this.columns.splice(index, 1);
      this.saveBoard();
    }
  }
  updateColumnTitle(column, newTitle) {
    const title = newTitle.target.value.trim();
    if (title) {
      column.title = title;
      this.saveBoard();
    }
  }
  getConnectedDropLists() {
    return this.columns.map(column => 'dropList-' + column.id);
  }
  // --- Ticket-Titel bearbeiten ---
  startEditingTicket(ticket) {
    this.editingTicket = ticket;
    this.editedTicketTitle = ticket.title;
  }
  isEditingTicket(ticket) {
    return this.editingTicket === ticket;
  }
  finishEditingTicket(ticket, newTitle) {
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
  static #_ = this.ɵfac = function KanbanTileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || KanbanTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.h));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: KanbanTileComponent,
    selectors: [["new-page-kanban-tile"]],
    viewQuery: function KanbanTileComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ticketDropLists = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropLists = _t);
      }
    },
    inputs: {
      name: "name",
      editMode: "editMode"
    },
    decls: 12,
    vars: 8,
    consts: [["editInput", ""], ["id", "container"], [1, "header"], [1, "edit-btn", 3, "click"], [1, "kanban-board"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "kanban-columns", 3, "cdkDropListDropped", "cdkDropListData"], ["class", "kanban-column", "cdkDrag", "", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], [1, "actions"], ["class", "add-ticket-btn", 3, "click", 4, "ngIf"], ["class", "add-column-form", 4, "ngIf"], ["cdkDrag", "", 1, "kanban-column", 3, "cdkDragDisabled"], [1, "column-content"], ["cdkDragHandle", "", 1, "column-header"], ["class", "drag-handle", 4, "ngIf"], [4, "ngIf"], ["class", "edit-column-header", 4, "ngIf"], ["class", "tickets-container", "cdkDropList", "", 3, "id", "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped", 4, "ngIf"], [1, "drag-handle"], [1, "edit-column-header"], ["placeholder", "Column Title", 3, "change", "value"], ["aria-label", "Delete Column", 1, "delete-column-btn", 3, "click"], ["cdkDropList", "", 1, "tickets-container", 3, "cdkDropListDropped", "id", "cdkDropListData", "cdkDropListConnectedTo"], ["class", "ticket", "cdkDrag", "", 3, "cdkDragDisabled", "dblclick", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "ticket", 3, "dblclick", "cdkDragDisabled"], [1, "ticket-content"], ["autofocus", "", 3, "value", "blur", "keyup.enter", "keyup.escape", "click", 4, "ngIf"], ["aria-label", "Delete Ticket", 1, "delete-btn", 3, "click"], ["autofocus", "", 3, "blur", "keyup.enter", "keyup.escape", "click", "value"], [1, "add-ticket-btn", 3, "click"], [1, "add-column-form"], ["placeholder", "New Column Title", 3, "ngModelChange", "keyup.enter", "ngModel"], [3, "click"]],
    template: function KanbanTileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KanbanTileComponent_Template_button_click_4_listener() {
          return ctx.editMode = !ctx.editMode;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function KanbanTileComponent_Template_div_cdkDropListDropped_7_listener($event) {
          return ctx.dropColumn($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, KanbanTileComponent_div_8_Template, 7, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, KanbanTileComponent_button_10_Template, 2, 0, "button", 8)(11, KanbanTileComponent_div_11_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("edit-mode", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.editMode ? "Done" : "Edit", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editMode);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDragHandle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.l, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.M, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule],
    styles: ["#container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #f5f5f5;\n  min-height: 50vh;\n  width: 100%;\n  border-radius: 2px;\n}\n#container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n#container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  background: #2196f3;\n  color: white;\n}\n#container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]:hover {\n  background: #1976d2;\n}\n\n.actions[_ngcontent-%COMP%]   .add-column-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .add-ticket-btn[_ngcontent-%COMP%], .ticket[_ngcontent-%COMP%]   .ticket-content[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%], .kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .edit-column-header[_ngcontent-%COMP%]   .delete-column-btn[_ngcontent-%COMP%], #container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 80px;\n}\n\n.kanban-board[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 20px 0;\n}\n\n.kanban-columns[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  gap: 20px;\n  min-height: 100px;\n}\n\n.kanban-column[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  flex: 1;\n  min-width: 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.kanban-column.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.kanban-column.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.kanban-column.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.kanban-column[_ngcontent-%COMP%]   .column-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%] {\n  cursor: move;\n  color: #666;\n  font-size: 20px;\n  padding: 4px;\n  margin-right: 8px;\n}\n.kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .drag-handle[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .edit-column-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex: 1;\n}\n.kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .edit-column-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .edit-column-header[_ngcontent-%COMP%]   .delete-column-btn[_ngcontent-%COMP%] {\n  background: #f44336;\n  color: white;\n  padding: 4px 8px;\n  min-width: auto;\n}\n.kanban-column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .edit-column-header[_ngcontent-%COMP%]   .delete-column-btn[_ngcontent-%COMP%]:hover {\n  background: #d32f2f;\n}\n.kanban-column[_ngcontent-%COMP%]   .tickets-container[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n  min-height: 100px;\n  overflow-y: auto;\n}\n\n.ticket[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin-bottom: 8px;\n  cursor: move;\n}\n.ticket[_ngcontent-%COMP%]   .ticket-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f5f5f5;\n}\n.ticket[_ngcontent-%COMP%]   .ticket-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 8px;\n}\n.ticket[_ngcontent-%COMP%]   .ticket-content[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  color: #f44336;\n  font-size: 18px;\n  padding: 0 4px;\n  min-width: auto;\n}\n.ticket[_ngcontent-%COMP%]   .ticket-content[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover {\n  color: #d32f2f;\n  background: rgba(244, 67, 54, 0.1);\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  gap: 16px;\n}\n.actions[_ngcontent-%COMP%]   .add-ticket-btn[_ngcontent-%COMP%] {\n  background: #4caf50;\n  color: white;\n}\n.actions[_ngcontent-%COMP%]   .add-ticket-btn[_ngcontent-%COMP%]:hover {\n  background: #388e3c;\n}\n.actions[_ngcontent-%COMP%]   .add-column-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.actions[_ngcontent-%COMP%]   .add-column-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  min-width: 200px;\n}\n.actions[_ngcontent-%COMP%]   .add-column-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #2196f3;\n  color: white;\n}\n.actions[_ngcontent-%COMP%]   .add-column-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #1976d2;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.kanban-columns.cdk-drop-list-dragging[_ngcontent-%COMP%]   .kanban-column[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvbmV3LXBhZ2Uvc3JjL2FwcC9jb21wb25lbnRzL2thbmJhbi10aWxlL2thbmJhbi10aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFFRSxtQkFBQTtFQUNBLFlBQUE7QUFBTjtBQUVNO0VBQ0UsbUJBQUE7QUFBUjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBSEY7QUFLRTtFQUNFLHFIQUFBO0FBSEo7QUFRRTtFQUNFLFVBQUE7QUFOSjtBQVNFO0VBQ0Usc0RBQUE7QUFQSjtBQVVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQVJKO0FBV0U7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBVEo7QUFXSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVROO0FBV007RUFDRSxXQUFBO0FBVFI7QUFhSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVhOO0FBY0k7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQVpOO0FBY007RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQWVNO0VBRUUsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBZFI7QUFnQlE7RUFDRSxtQkFBQTtBQWRWO0FBb0JFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBbEJKOztBQXNCQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQW5CRjtBQXFCRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbkJKO0FBcUJJO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBbkJOO0FBc0JJO0VBRUUsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBckJOO0FBdUJNO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0FBckJSOztBQTJCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUF4QkY7QUEwQkU7RUFFRSxtQkFBQTtFQUNBLFlBQUE7QUF6Qko7QUEyQkk7RUFDRSxtQkFBQTtBQXpCTjtBQTZCRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBM0JKO0FBNkJJO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTNCTjtBQThCSTtFQUVFLG1CQUFBO0VBQ0EsWUFBQTtBQTdCTjtBQStCTTtFQUNFLG1CQUFBO0FBN0JSOztBQW1DQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQWhDRjs7QUFxQ0E7RUFDRSxVQUFBO0FBbENGOztBQXFDQTtFQUNFLHNEQUFBO0FBbENGOztBQXFDQTtFQUNFLHNEQUFBO0FBbENGIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLmVkaXQtYnRuIHtcbiAgICAgIEBleHRlbmQgJWJ1dHRvbi1iYXNlO1xuICAgICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTc2ZDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiVidXR0b24tYmFzZSB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLmthbmJhbi1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5rYW5iYW4tY29sdW1ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4ua2FuYmFuLWNvbHVtbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcblxuICAmLmNkay1kcmFnLXByZXZpZXcge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cblxuICAmLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgJi5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxuXG4gIC5jb2x1bW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb2x1bW4taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcblxuICAgIC5kcmFnLWhhbmRsZSB7XG4gICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmbGV4OiAxO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAuZWRpdC1jb2x1bW4taGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuXG4gICAgICAuZGVsZXRlLWNvbHVtbi1idG4ge1xuICAgICAgICBAZXh0ZW5kICVidXR0b24tYmFzZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2QzMmYyZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50aWNrZXRzLWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbn1cblxuLnRpY2tldCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjdXJzb3I6IG1vdmU7XG5cbiAgLnRpY2tldC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcblxuICAgIHNwYW4ge1xuICAgICAgZmxleDogMTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAuZGVsZXRlLWJ0biB7XG4gICAgICBAZXh0ZW5kICVidXR0b24tYmFzZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgbWluLXdpZHRoOiBhdXRvO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNkMzJmMmY7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCA2NywgNTQsIDAuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuXG4gIC5hZGQtdGlja2V0LWJ0biB7XG4gICAgQGV4dGVuZCAlYnV0dG9uLWJhc2U7XG4gICAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMzODhlM2M7XG4gICAgfVxuICB9XG5cbiAgLmFkZC1jb2x1bW4tZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcblxuICAgIGlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBAZXh0ZW5kICVidXR0b24tYmFzZTtcbiAgICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTk3NmQyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4ua2FuYmFuLWNvbHVtbnMuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAua2FuYmFuLWNvbHVtbjpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7526:
/*!****************************************************************************************!*\
  !*** ./apps/new-page/src/app/components/calculator-tile/calculator-tiles.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalculatorTilesComponent: () => (/* binding */ CalculatorTilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);


function CalculatorTilesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onClearClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onOperatorClick("/"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00F7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onOperatorClick("*"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onOperatorClick("-"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("7"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("8"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("9"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onOperatorClick("+"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("5"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("6"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onEqualClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("3"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorTilesComponent_div_3_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onDigitClick("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.displayValue);
  }
}
class CalculatorTilesComponent {
  constructor() {
    this.name = '';
    this.editMode = false;
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }
  onDigitClick(digit) {
    if (this.waitingForSecondOperand) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
    }
  }
  onOperatorClick(operator) {
    const inputValue = parseFloat(this.displayValue);
    if (this.firstOperand === null) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.performCalculation();
      this.displayValue = String(result);
      this.firstOperand = result;
    }
    this.waitingForSecondOperand = true;
    this.operator = operator;
  }
  onEqualClick() {
    if (this.operator && this.firstOperand !== null) {
      const result = this.performCalculation();
      this.displayValue = String(result);
      this.firstOperand = null;
      this.operator = null;
      this.waitingForSecondOperand = false;
    }
  }
  onClearClick() {
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }
  performCalculation() {
    const secondOperand = parseFloat(this.displayValue);
    if (this.operator === '+') return this.firstOperand + secondOperand;
    if (this.operator === '-') return this.firstOperand - secondOperand;
    if (this.operator === '*') return this.firstOperand * secondOperand;
    if (this.operator === '/') return this.firstOperand / secondOperand;
    return secondOperand;
  }
  static #_ = this.ɵfac = function CalculatorTilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CalculatorTilesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalculatorTilesComponent,
    selectors: [["new-page-calculator-tile"]],
    inputs: {
      name: "name",
      editMode: "editMode"
    },
    decls: 4,
    vars: 4,
    consts: [["id", "container"], ["class", "calculator", 4, "ngIf"], [1, "calculator"], [1, "display"], [1, "buttons"], [1, "clear", 3, "click"], [1, "operator", 3, "click"], [3, "click"], [1, "equals", 3, "click"], [1, "zero", 3, "click"]],
    template: function CalculatorTilesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalculatorTilesComponent_div_3_Template, 36, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("edit-mode", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["#container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  padding: 1rem;\n  transition: border-color 0.3s ease;\n}\n#container.edit-mode[_ngcontent-%COMP%] {\n  border-color: #ccc;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.calculator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n  height: 100%;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1.25rem;\n  border-radius: 0.25rem;\n  background-color: #f0f0f0;\n  border: none;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.calculator[_ngcontent-%COMP%] {\n  width: 300px;\n  background: #f0f0f0;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.display[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  text-align: right;\n  font-size: 24px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 15px;\n  font-size: 18px;\n  border: none;\n  border-radius: 5px;\n  background: #fff;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\nbutton.operator[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #007bff;\n}\nbutton.equals[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  grid-row: span 2;\n}\nbutton.equals[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\nbutton.clear[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\nbutton.clear[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\nbutton.zero[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvbmV3LXBhZ2Uvc3JjL2FwcC9jb21wb25lbnRzL2NhbGN1bGF0b3ItdGlsZS9jYWxjdWxhdG9yLXRpbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0FBQUY7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFDRSxtQkFBQTtBQUZOO0FBTUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFKSjtBQU1JO0VBQ0UsbUJBQUE7QUFKTjtBQVFFO0VBQ0UsbUJBQUE7QUFOSiIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcblxuICAmLmVkaXQtbW9kZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbn1cblxuLmNhbGN1bGF0b3J7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FsY3VsYXRvciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmRpc3BsYXkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICB9XG5cbiAgJi5vcGVyYXRvciB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuXG4gICYuZXF1YWxzIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBncmlkLXJvdzogc3BhbiAyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDA1NmIzO1xuICAgIH1cbiAgfVxuXG4gICYuY2xlYXIge1xuICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjYzgyMzMzO1xuICAgIH1cbiAgfVxuXG4gICYuemVybyB7XG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8230:
/*!********************************************************************************!*\
  !*** ./apps/new-page/src/app/components/search-tile/search-tiles.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchTilesComponent: () => (/* binding */ SearchTilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/// <reference types="chrome"/>





const _c0 = ["search"];
function SearchTilesComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3)(2, "input", 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function SearchTilesComponent_ng_container_3_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchTilesComponent_ng_container_3_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.valueUpdated());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchTilesComponent_ng_container_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.valueUpdated());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Go");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
  }
}
class SearchTilesComponent {
  constructor() {
    this.name = '';
    this.editMode = false;
    this.searchQuery = '';
  }
  valueUpdated() {
    chrome.search.query({
      disposition: 'CURRENT_TAB',
      text: this.searchQuery
    });
  }
  ngAfterContentInit() {
    this.searchElement?.nativeElement?.focus();
  }
  static #_ = this.ɵfac = function SearchTilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SearchTilesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchTilesComponent,
    selectors: [["new-page-search-tile"]],
    viewQuery: function SearchTilesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
      }
    },
    inputs: {
      name: "name",
      editMode: "editMode"
    },
    decls: 4,
    vars: 4,
    consts: [["search", ""], ["id", "container"], [4, "ngIf"], [1, "search-container"], ["id", "searchBox", "type", "text", "placeholder", "Search...", "autofocus", "", 3, "ngModelChange", "change", "ngModel"], [1, "search-button", 3, "click"]],
    template: function SearchTilesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchTilesComponent_ng_container_3_Template, 6, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("edit-mode", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: ["#container[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  padding: 1rem;\n  transition: border-color 0.3s ease;\n}\n#container.edit-mode[_ngcontent-%COMP%] {\n  border-color: #ccc;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n#searchBox[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n  height: 2.5rem;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  padding: 0 1rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color 0.2s;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvbmV3LXBhZ2Uvc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC10aWxlL3NlYXJjaC10aWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFBRjtBQUVFO0VBQ0UseUJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcblxuICAmLmVkaXQtbW9kZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NlYXJjaEJveCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGhlaWdodDogMi41cmVtO1xufVxuXG4uc2VhcmNoLWJ1dHRvbiB7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8449:
/*!*********************************************!*\
  !*** ./apps/new-page/src/app/app.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/config.service */ 1648);

const appConfig = {
  providers: [_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService]
};

/***/ }),

/***/ 9868:
/*!************************************************!*\
  !*** ./apps/new-page/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _components_tiles_container_tiles_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tiles-container/tiles-container.component */ 2441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);


class AppComponent {
  constructor() {
    this.editMode = false;
  }
  ngOnInit() {
    // @ts-ignore
    chrome.bookmarks.getTree().then(result => {
      console.log('Bookmarks:', result);
    });
    console.log('New Page Component Initialized');
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["new-page-root"]],
    decls: 8,
    vars: 4,
    consts: [["id", "container"], ["id", "heading"], [2, "width", "100px", "height", "40px", 3, "click"], [3, "editMode"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My start page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() {
          return ctx.toggleEditMode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "new-page-tiles-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.editMode ? "fas fa-save" : "fas fa-cog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.editMode ? "Save" : "Change", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editMode", ctx.editMode);
      }
    },
    dependencies: [_components_tiles_container_tiles_container_component__WEBPACK_IMPORTED_MODULE_0__.TilesContainerComponent],
    styles: ["#heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  margin: 1rem;\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border: none;\n  border-radius: 4px;\n  background-color: #f0f0f0;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\nbutton[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\nbutton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  transition: transform 0.3s ease;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvbmV3LXBhZ2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSEY7QUFLRTtFQUNFLHlCQUFBO0FBSEo7QUFLSTtFQUNFLHdCQUFBO0FBSE47QUFPRTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7QUFMSjs7QUFTQTtFQUNFLFlBQUE7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAvL2JhY2tncm91bmQ6ICNmZjAwMDA7XG59XG5cbiNoZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgXG4gICAgaSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICB9XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIH1cbn1cblxuaDEge1xuICBtYXJnaW46IDFyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4845)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map