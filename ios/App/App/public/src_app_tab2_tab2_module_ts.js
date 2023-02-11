"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);








// Import HTTP module

// Imort search module

let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 6907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/moviecrud.service */ 437);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);







let Tab2Page = class Tab2Page {
    constructor(activatedRoute, movieCrudService, animationCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.movieCrudService = movieCrudService;
        this.animationCtrl = animationCtrl;
        this.router = router;
        this.filterTerm = '';
        this.Movies = [];
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
        this.leaveAnimation = (baseEl) => {
            return this.enterAnimation(baseEl).direction('reverse');
        };
    }
    ionViewDidEnter() {
        this.movieCrudService.getMovies().subscribe((response) => {
            this.Movies = response;
            let da = this.Movies.movietitle;
            console.log(this.Movies);
        });
        function action() {
            console.log("action category");
        }
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_2__.MoviecrudService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 6907:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".f-box {\n  width: 100%;\n  text-align: center;\n}\n\n.box {\n  display: inline-flex;\n  height: 5rem;\n  width: 41%;\n  margin: 10px 20px 10px 10px;\n  border-radius: 8px;\n  color: white;\n  align-items: center;\n}\n\n.box:hover {\n  background-color: rgb(69, 57, 57);\n  border: 1px solid white;\n}\n\nh4 {\n  font-weight: bolder;\n  font-size: 19px;\n  align-self: center;\n  padding-left: 10px;\n}\n\n.b-0 {\n  background-color: rgb(10, 79, 176);\n}\n\n.b-1 {\n  background-color: rgb(197, 60, 133);\n}\n\n.b-2 {\n  background-color: rgb(10, 125, 59);\n}\n\n.b-3 {\n  background-color: rgb(216, 119, 0);\n}\n\n.b-4 {\n  background-color: rgb(113, 141, 1);\n}\n\n.b-5 {\n  background-color: rgb(50, 81, 123);\n}\n\n.b-6 {\n  background-color: rgb(227, 66, 66);\n}\n\n.b-7 {\n  background-color: rgb(99, 11, 125);\n}\n\n.b-8 {\n  background-color: rgb(253, 189, 39);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUkVEJTIwSk9ITlxcREVWXFxyaXBlZG9kb1xcc3JjXFxhcHBcXHRhYjJcXHRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUNBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDRyxrQkFBQTtBQ0VQOztBREFBO0VBQ0ksa0NBQUE7QUNHSjs7QUREQTtFQUNJLG1DQUFBO0FDSUo7O0FERkE7RUFDSSxrQ0FBQTtBQ0tKOztBREhBO0VBQ0ksa0NBQUE7QUNNSjs7QURKQTtFQUNJLGtDQUFBO0FDT0o7O0FETEE7RUFDSSxrQ0FBQTtBQ1FKOztBRE5BO0VBQ0ksa0NBQUE7QUNTSjs7QUROQTtFQUNJLGtDQUFBO0FDU0o7O0FETkE7RUFDSSxtQ0FBQTtBQ1NKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmYtYm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5ib3h7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIHdpZHRoOiA0MSU7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5ib3g6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjksIDU3LCA1Nyk7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlXHJcbiAgICBcclxufVxyXG5oNHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDE5cHg7IFxyXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgIH1cclxuLmItMHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMTAsIDc5LCAxNzYpO1xyXG59XHJcbi5iLTF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDE5NywgNjAsIDEzMyk7XHJcbn1cclxuLmItMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMTAsIDEyNSwgNTkpO1xyXG59XHJcbi5iLTN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDIxNiwgMTE5LCAwKTtcclxufVxyXG4uYi00e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigxMTMsIDE0MSwgMSk7XHJcbn1cclxuLmItNXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNTAsIDgxLCAxMjMpO1xyXG59XHJcbi5iLTZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDIyNywgNjYsIDY2KTtcclxuICAgIFxyXG59XHJcbi5iLTd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDk5LCAxMSwgMTI1KTtcclxuXHJcbn1cclxuLmItOHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMjUzLCAxODksIDM5KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIuZi1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGhlaWdodDogNXJlbTtcbiAgd2lkdGg6IDQxJTtcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OSwgNTcsIDU3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbmg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmItMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgNzksIDE3Nik7XG59XG5cbi5iLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCA2MCwgMTMzKTtcbn1cblxuLmItMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTI1LCA1OSk7XG59XG5cbi5iLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAxMTksIDApO1xufVxuXG4uYi00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgMTQxLCAxKTtcbn1cblxuLmItNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgODEsIDEyMyk7XG59XG5cbi5iLTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI3LCA2NiwgNjYpO1xufVxuXG4uYi03IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCAxMSwgMTI1KTtcbn1cblxuLmItOCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDE4OSwgMzkpO1xufSJdfQ== */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\" color=\"primary\">\n      RIPEDODO\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-searchbar placeholder=\"Surf for Movies, Tv-shows\" [(ngModel)]=\"filterTerm\"  animated=\"true\" ></ion-searchbar>\n  <ion-list *ngIf=\"filterTerm !== ''\">\n\n    <ion-item *ngFor=\"let movie of Movies | filter:filterTerm \" [routerLink]=\"['/', 'movie', movie._id]\" routerDirection=\"forward\">\n      <ion-avatar slot=\"start\">\n        <img alt=\"Movie Image\" [src]=\"movie.movieposter\" />\n      </ion-avatar>\n      <ion-label style=\"text-transform: uppercase;\">\n        {{movie.movietitle}}\n      </ion-label>\n    </ion-item>\n    \n \n  </ion-list>\n  <div class=\"f-box\" *ngIf=\"filterTerm == ''\">\n    <div class=\"box b-0\" [routerLink]=\"['/', 'categories', 'Action']\" >\n      <h4>\n        Action\n      </h4>\n    </div>\n    <div class=\"box b-1\" [routerLink]=\"['/', 'categories', 'Adventure']\">\n      <h4>\n        Adventures\n      </h4>\n    </div>\n    <div class=\"box b-2\" [routerLink]=\"['/', 'categories', 'Romance']\">\n      <h4>\n        Romance\n      </h4>\n    </div>\n    <div class=\"box b-3\" [routerLink]=\"['/', 'categories', 'Comedy']\">\n      <h4>\n        Comedy\n      </h4>\n    </div>\n    <div class=\"box b-4\" [routerLink]=\"['/', 'categories', 'Drama']\">\n      <h4>\n        Drama\n      </h4>\n    </div> \n    <div class=\"box b-5\" [routerLink]=\"['/', 'categories', 'Thriller']\">\n      <h4>\n        Triller\n      </h4>\n    </div>\n    <div class=\"box b-6\" [routerLink]=\"['/', 'categories', 'Crime']\">\n      <h4>\n        Crime\n      </h4>\n    </div>\n    <div class=\"box b-7\" [routerLink]=\"['/', 'categories', 'Sci-Fi']\">\n      <h4>\n        Sci-Fi\n      </h4>\n    </div>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map