"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_categories_categories_module_ts"],{

/***/ 7036:
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageRoutingModule": () => (/* binding */ CategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.page */ 4945);




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ 1944:
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageModule": () => (/* binding */ CategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories-routing.module */ 7036);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page */ 4945);







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriesPageRoutingModule
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_1__.CategoriesPage]
    })
], CategoriesPageModule);



/***/ }),

/***/ 4945:
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPage": () => (/* binding */ CategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.page.html?ngResource */ 2467);
/* harmony import */ var _categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page.scss?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/moviecrud.service */ 437);



/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/prefer-for-of */




let CategoriesPage = class CategoriesPage {
    constructor(activatedRoute, movieCrudService, animationCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.movieCrudService = movieCrudService;
        this.animationCtrl = animationCtrl;
        this.router = router;
        /**
         * @param activatedRoute Information about the route we are on
         */
        this.filterTerm = '';
        this.Movies = [];
        this.Tvshows = [];
        this.MoviesOnly = [];
        this.Genres = [];
        this.enterAnimation = (baseEl) => {
            const root = baseEl.shadowRoot;
            const backdropAnimation = this.animationCtrl
                .create()
                .addElement(root.querySelector('ion-backdrop'))
                .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
            const wrapperAnimation = this.animationCtrl
                .create()
                .addElement(root.querySelector('.modal-wrapper'))
                .keyframes([
                { offset: 0, opacity: '0', transform: 'scale(0)' },
                { offset: 1, opacity: '0.99', transform: 'scale(1)' },
            ]);
            return this.animationCtrl
                .create()
                .addElement(baseEl)
                .easing('ease-out')
                .duration(500)
                .addAnimation([backdropAnimation, wrapperAnimation]);
        };
        this.leaveAnimation = (baseEl) => this.enterAnimation(baseEl).direction('reverse');
    }
    ionViewDidEnter() {
        const tag = this.activatedRoute.snapshot.paramMap.get('tag');
        console.log('CATEGORY:', tag);
        this.movieCrudService.getMovies().subscribe((response) => {
            this.Movies = response;
            this.Genres = this.Movies.filter(genre => genre.moviegenre.search(tag) >= 0);
            this.Tvshows = this.Movies.filter(tvshow => tvshow.movietype === 'series'); //filter series only
            this.MoviesOnly = this.Movies.filter(movie => movie.movietype === 'movie'); //filter movies only
        });
    }
    ngOnInit() {
        // this.moviecrudService.getDetails(id).subscribe(result => {
        //   this.information = result;
        //  this.movieId = id;
        //  console.log("check info", this.information);
        //  console.log("check info", this.information.movietitle);
        //  console.log("check info", this.information.movieurl);
        // });
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_2__.MoviecrudService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
CategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-categories',
        template: _categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoriesPage);



/***/ }),

/***/ 3088:
/*!************************************************************!*\
  !*** ./src/app/categories/categories.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".img-fig {\n  border-radius: 8px;\n}\n\n.fig-col {\n  max-height: 400px;\n}\n\n#b-btn {\n  width: 2rem;\n  height: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUkVEJTIwSk9ITlxcREVWXFxyaXBlZG9kb1xcc3JjXFxhcHBcXGNhdGVnb3JpZXNcXGNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQVksWUFBQTtFQUFhLGtCQUFBO0FDRzdCIiwiZmlsZSI6ImNhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWctZmlne1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uZmlnLWNvbHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcbiNiLWJ0bntcclxuICAgIHdpZHRoOjJyZW07IGhlaWdodDoycmVtOyB0ZXh0LWFsaWduOmNlbnRlcjtcclxufSIsIi5pbWctZmlnIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uZmlnLWNvbCB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xufVxuXG4jYi1idG4ge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 2467:
/*!************************************************************!*\
  !*** ./src/app/categories/categories.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-fab vertical=\"top\" horizontal=\"start\">\n      <ion-fab-button [routerLink]=\"['/v1/search']\"  routerDirection=\"backward\" id=\"b-btn\" >\n       \n        <ion-icon name=\"arrow-back-circle\"></ion-icon> \n      </ion-fab-button>\n    </ion-fab>\n    <strong> <ion-title color=\"primary\" class=\"ion-text-center\"> RIPEDODO</ion-title></strong>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  \n  <ion-grid>\n\n \n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"4\"  class=\"fig-col\" *ngFor=\"let genre of Genres\" [routerLink]=\"['/', 'movie', genre._id]\">\n        <figure>\n          <img class=\"img-fig\"  [src]=\"genre.movieposter\" *ngIf=\"genre.movieposter != 'N/A'\"alt=\"\" loading=\"lazy\">\n          <!-- <figcaption class=\"img-figcaption\">{{genre.movietitle}}</figcaption> -->\n        </figure>\n        <p></p>\n      </ion-col>\n      \n    </ion-row>\n    \n  </ion-grid>\n  \n  \n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_categories_categories_module_ts.js.map