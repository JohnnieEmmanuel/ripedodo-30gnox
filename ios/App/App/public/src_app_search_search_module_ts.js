"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_search_search_module_ts"],{

/***/ 9730:
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 5105);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 4682:
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 9730);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 5105);







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 5105:
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.html?ngResource */ 463);
/* harmony import */ var _search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.page.scss?ngResource */ 5615);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_moviesearch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/moviesearch.service */ 5881);







let SearchPage = class SearchPage {
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(movieService, http) {
    this.movieService = movieService;
    this.http = http;
    this.searchTerm = '';
    this.type = _services_moviesearch_service__WEBPACK_IMPORTED_MODULE_3__.SearchType.all;
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  submitForm() {
    var _this = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formData = new FormData();
      formData.append("file", _this.file, _this.file.name);

      _this.http.post("http://localhost:5000/upload", formData).subscribe(response => {
        console.log(response);
      });
    })();
  }

  ngOnInit() {}

};

SearchPage.ctorParameters = () => [{
  type: _services_moviesearch_service__WEBPACK_IMPORTED_MODULE_3__.MoviesearchService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}];

SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-search',
  template: _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SearchPage);


/***/ }),

/***/ 5615:
/*!****************************************************!*\
  !*** ./src/app/search/search.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 463:
/*!****************************************************!*\
  !*** ./src/app/search/search.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>My Movie Search</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanged($event)\"></ion-searchbar>\n \n  <ion-item>\n    <ion-label>Select</ion-label>\n    <ion-select [(ngModel)]=\"type\" (ionChange)=\"searchChanged($event)\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option value=\"movie\">Movie</ion-select-option>\n      <ion-select-option value=\"series\">Series</ion-select-option>\n      <ion-select-option value=\"episode\">Episode</ion-select-option>\n    </ion-select>\n  </ion-item>\n \n  <ion-list>\n \n    <ion-item button *ngFor=\"let item of (results | async)\"  [routerLink]=\"['/', 'upload', item.imdbID]\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"item.Poster\" *ngIf=\"item.Poster != 'N/A'\">\n      </ion-avatar>\n \n      <ion-label text-wrap>\n        <h3>{{ item.Title }}</h3>\n        {{ item.Year }}\n        \n      </ion-label>\n \n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'movie'\" name=\"videocam\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'series'\" name=\"tv\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'game'\" name=\"logo-game-controller-b\"></ion-icon>\n \n    </ion-item>\n \n  </ion-list>\n   \n  <ion-item>\n    <input type=\"file\" (change)=\"onFileChange($event)\" />\n  </ion-item>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"submitForm()\"\n    >Upload</ion-button\n  >\n\n  \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_search_search_module_ts.js.map