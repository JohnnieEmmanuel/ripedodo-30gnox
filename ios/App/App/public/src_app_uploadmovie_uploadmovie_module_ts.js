"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_uploadmovie_uploadmovie_module_ts"],{

/***/ 2697:
/*!***********************************************************!*\
  !*** ./src/app/uploadmovie/uploadmovie-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadmoviePageRoutingModule": () => (/* binding */ UploadmoviePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _uploadmovie_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadmovie.page */ 8834);




const routes = [
    {
        path: '',
        component: _uploadmovie_page__WEBPACK_IMPORTED_MODULE_0__.UploadmoviePage
    }
];
let UploadmoviePageRoutingModule = class UploadmoviePageRoutingModule {
};
UploadmoviePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadmoviePageRoutingModule);



/***/ }),

/***/ 7706:
/*!***************************************************!*\
  !*** ./src/app/uploadmovie/uploadmovie.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadmoviePageModule": () => (/* binding */ UploadmoviePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _uploadmovie_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadmovie-routing.module */ 2697);
/* harmony import */ var _uploadmovie_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadmovie.page */ 8834);







let UploadmoviePageModule = class UploadmoviePageModule {
};
UploadmoviePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _uploadmovie_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadmoviePageRoutingModule
        ],
        declarations: [_uploadmovie_page__WEBPACK_IMPORTED_MODULE_1__.UploadmoviePage]
    })
], UploadmoviePageModule);



/***/ }),

/***/ 8834:
/*!*************************************************!*\
  !*** ./src/app/uploadmovie/uploadmovie.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadmoviePage": () => (/* binding */ UploadmoviePage)
/* harmony export */ });
/* harmony import */ var C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _uploadmovie_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadmovie.page.html?ngResource */ 2071);
/* harmony import */ var _uploadmovie_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploadmovie.page.scss?ngResource */ 5020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_moviesearch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/moviesearch.service */ 5881);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_movieupload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movieupload.service */ 7171);









let UploadmoviePage = class UploadmoviePage {
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(movieService, http, activatedRoute, movieuploadService) {
    this.movieService = movieService;
    this.http = http;
    this.activatedRoute = activatedRoute;
    this.movieuploadService = movieuploadService;
    this.information = null;
    this.movieId = null;
    this.searchTerm = '';
    this.comingsoonTerm = '';
    this.type = _services_moviesearch_service__WEBPACK_IMPORTED_MODULE_3__.SearchType.all;
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

  comingsoonChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.comingsoonTerm, this.type);
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  submitForm() {
    var _this = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let formData = new FormData();
      formData.append("file", _this.file, _this.file.name);

      _this.http.post("http://localhost:5000/uploadvideo", formData).subscribe(response => {
        console.log(response);
      });
    })();
  }

  ngOnInit() {
    this.onAdd();
  }

  onAdd() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id == null) {
      console.log("no param passed");
    } else {
      // Get the information from the API
      this.movieService.getDetails(id).subscribe(result => {
        this.information = result;
        this.movieId = id;
        let moviedata = this.information;
        console.log(moviedata);
        let parseJfile = JSON.stringify(moviedata);
        const parsedData2 = JSON.parse(parseJfile);
        console.log("test test" + parsedData2);
        console.log(parsedData2.Year); // let url = 'https://ripedodo.s3.amazonaws.com/uploads/'+parsedData2.Title+'.mp4';

        let url = 'https://d1deccugb2p5vs.cloudfront.net/' + parsedData2.Title + '.mp4';
        let movieURL = url.replace(/\s/g, '+'); // let movieURL = movieURLNospace.toLocaleLowerCase();

        console.log(movieURL);
        let data = {
          movietitle: parsedData2.Title,
          movieurl: movieURL,
          movieruntime: parsedData2.Runtime,
          movieplot: parsedData2.Plot,
          moviegenre: parsedData2.Genre,
          movieresponse: parsedData2.Response,
          movietype: parsedData2.Type,
          movieidmbid: parsedData2.imdbID,
          movieposter: parsedData2.Poster,
          movieseasons: parsedData2.totalSeasons,
          moviecasts: parsedData2.Actors,
          movieratedpg: parsedData2.Ratedpg
        };
        this.movieuploadService.movieupload(data).subscribe(response => {
          console.log(response);
        });
      });
    }
  }

  onComingsoon(temp) {
    // Get the ID that was passed with the URL
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    let id = temp;
    console.log("this is the movie is", id); // Get the information from the API

    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
      this.movieId = id;
      let moviedata = this.information;
      console.log(moviedata);
      let parseJfile = JSON.stringify(moviedata);
      const parsedData2 = JSON.parse(parseJfile);
      console.log("test test" + parsedData2);
      console.log(parsedData2.Year); // let url = 'https://ripedodo.s3.amazonaws.com/uploads/'+parsedData2.Title+'.mp4';

      let url = 'https://d1deccugb2p5vs.cloudfront.net/' + parsedData2.Title + '.mp4';
      let movieURL = url.replace(/\s/g, '+'); // let movieURL = movieURLNospace.toLocaleLowerCase();

      console.log(movieURL);
      let data = {
        movietitle: parsedData2.Title,
        movieurl: movieURL,
        movieruntime: parsedData2.Runtime,
        movieplot: parsedData2.Plot,
        moviegenre: parsedData2.Genre,
        movieresponse: parsedData2.Response,
        movietype: parsedData2.Type,
        movieidmbid: parsedData2.imdbID,
        movieposter: parsedData2.Poster,
        movieseasons: parsedData2.TotalSeasons,
        moviecasts: parsedData2.Casts,
        movieratedpg: parsedData2.Ratedpg
      };
      console.log(this.movieuploadService.comingsoon(data).subscribe(response => {
        console.log(response);
      }));
    });
  }

};

UploadmoviePage.ctorParameters = () => [{
  type: _services_moviesearch_service__WEBPACK_IMPORTED_MODULE_3__.MoviesearchService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _services_movieupload_service__WEBPACK_IMPORTED_MODULE_4__.MovieuploadService
}];

UploadmoviePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-uploadmovie',
  template: _uploadmovie_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_uploadmovie_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UploadmoviePage);


/***/ }),

/***/ 5020:
/*!**************************************************************!*\
  !*** ./src/app/uploadmovie/uploadmovie.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWRtb3ZpZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2071:
/*!**************************************************************!*\
  !*** ./src/app/uploadmovie/uploadmovie.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>My Movie Search</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <h1>\n    MOVIE DETAILS UPLOAD\n  </h1>\n <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanged($event)\"></ion-searchbar>\n \n  <ion-item>\n    <ion-label>Select</ion-label>\n    <ion-select [(ngModel)]=\"type\" (ionChange)=\"searchChanged($event)\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option value=\"movie\">Movie</ion-select-option>\n      <ion-select-option value=\"series\">Series</ion-select-option>\n      <ion-select-option value=\"episode\">Episode</ion-select-option>\n    </ion-select>\n  </ion-item>\n \n  <ion-list>\n \n    <ion-item button *ngFor=\"let item of (results | async)\"  [routerLink]=\"['/', 'uploadmovie', item.imdbID]\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"item.Poster\" *ngIf=\"item.Poster != 'N/A'\">\n      </ion-avatar>\n \n      <ion-label text-wrap>\n        <h3>{{ item.Title }}</h3>\n        {{ item.Year }}\n        \n      </ion-label>\n \n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'movie'\" name=\"videocam\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'series'\" name=\"tv\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'game'\" name=\"logo-game-controller-b\"></ion-icon>\n \n    </ion-item>\n \n  </ion-list>\n  <!-- <ion-button color=\"primary\" expand=\"full\" (click)=\"onSend()\"\n    >Upload</ion-button\n  >\n    -->\n    <h1>\n      MOVIE VIDEO UPLOAD\n    </h1>\n  <ion-item>\n    <input type=\"file\" (change)=\"onFileChange($event)\" />\n  </ion-item>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"submitForm()\"\n    >Upload</ion-button\n  >\n  <h1>\n    COMING SOON DETAILS UPLOAD\n  </h1>\n  <ion-searchbar [(ngModel)]=\"comingsoonTerm\" (ionChange)=\"comingsoonChanged($event)\"></ion-searchbar>\n \n  <ion-item>\n    <ion-label>Select</ion-label>\n    <ion-select [(ngModel)]=\"type\" (ionChange)=\"comingsoonChanged($event)\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option value=\"movie\">Movie</ion-select-option>\n      <ion-select-option value=\"series\">Series</ion-select-option>\n      <ion-select-option value=\"episode\">Episode</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-list>\n \n    <ion-item button *ngFor=\"let item of (results | async)\" (click)=\"onComingsoon(item.imdbID)\" >\n      <ion-avatar slot=\"start\">\n        <img [src]=\"item.Poster\" *ngIf=\"item.Poster != 'N/A'\">\n      </ion-avatar>\n \n      <ion-label text-wrap>\n        <h3>{{ item.Title }}</h3>\n        {{ item.Year }}\n        \n      </ion-label>\n \n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'movie'\" name=\"videocam\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'series'\" name=\"tv\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'game'\" name=\"logo-game-controller-b\"></ion-icon>\n \n    </ion-item>\n \n  </ion-list>\n  \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_uploadmovie_uploadmovie_module_ts.js.map