"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 5426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_watchlater_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/watchlater.service */ 4621);
/* harmony import */ var _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/moviecrud.service */ 437);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let Tab3Page = class Tab3Page {
    constructor(animationCtrl, watchlaterservice, movieCrudService) {
        this.animationCtrl = animationCtrl;
        this.watchlaterservice = watchlaterservice;
        this.movieCrudService = movieCrudService;
        this.hold = [];
        this.temp = [];
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
            console.log(this.Movies);
            this.watchlaterservice.getWl().subscribe((response) => {
                this.Wlater = response;
                console.log(this.Wlater);
                this.watchLists = this.Movies.filter(movie => movie._id);
                console.log(this.watchLists[0]._id);
                const nn = this.watchLists.length;
                console.log("nn=", nn);
                const mm = this.Wlater.length;
                console.log("wl", mm);
                for (var i = 0; i < mm; i++) {
                    console.log("wlater", this.Wlater);
                    console.log(this.watchLists);
                    this.min = this.watchLists.filter(vv => vv._id === this.Wlater[i]._id);
                    const zz = this.hold.push(this.min);
                    this.temp[i] = this.hold[i][0];
                }
                console.log("this is min", this.min);
                console.log("this is hold", this.hold);
                console.log("this is temp  ", this.temp);
                function removeDuplicateObjectFromArray(array, key) {
                    return array.filter((obj, index, self) => index === self.findIndex((el) => (el[key] === obj[key])));
                }
                // console.log(removeDuplicateObjectFromArray(this.temp, '_id'))
                // console.log("this is hold",this.hold.length)
                const cave = removeDuplicateObjectFromArray(this.temp, '_id');
                console.log(cave);
                this.Darks = cave.map(dark => dark);
                // for(var i=0;i<this.hold.length;i++){
                //   this.temp[i] = this.hold[i][0]
                // // this.Darks = this.temp.map(dark=>dark)
                // }
                //  console.log(this.temp)
                //  console.log(this.Darks)
            });
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController },
    { type: _services_watchlater_service__WEBPACK_IMPORTED_MODULE_2__.WatchlaterService },
    { type: _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_3__.MoviecrudService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 5426:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-segment {\n  --background: #235ced;\n}\n\n.cs {\n  margin-left: 20px;\n  display: block;\n}\n\n.cs-text {\n  font-family: \"Trebuchet MS\";\n  font-style: normal;\n  font-size: 4rem;\n  font-weight: bolder;\n  text-align: center;\n}\n\n.img {\n  border-radius: 15px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUkVEJTIwSk9ITlxcREVWXFxyaXBlZG9kb1xcc3JjXFxhcHBcXHRhYjNcXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUNDSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzIzNWNlZDtcclxuICB9XHJcblxyXG4gIC5jc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxufVxyXG4uY3MtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4uaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn0iLCJpb24tc2VnbWVudCB7XG4gIC0tYmFja2dyb3VuZDogIzIzNWNlZDtcbn1cblxuLmNzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3MtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn0iXX0= */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n\t<ion-toolbar>\r\n\t  <ion-title class=\"ion-text-center\" color=\"primary\">\r\n\t\tRIPEDODO\r\n\t  </ion-title>\r\n\t  \r\n\t</ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content [fullscreen]=\"true\">\r\n  <div class=\"cs cs-text\">\r\n\t<strong><h1>Saved for Later</h1></strong>\r\n  </div>\r\n\t<ion-grid>\r\n  \r\n   \r\n\t  <ion-row class=\"ion-align-items-center\">\r\n\t\t<ion-col size=\"4\"  class=\"fig-col\" *ngFor=\"let ark of Darks\" [routerLink]=\"['/', 'movie', ark._id]\">\r\n\t\t  <figure>\r\n\t\t\t<img class=\"img-fig\"  [src]=\"ark.movieposter\" *ngIf=\"ark.movieposter != 'N/A'\"alt=\"\" loading=\"lazy\">\r\n\t\t\t<!-- <figcaption class=\"img-figcaption\">{{genre.movietitle}}</figcaption> -->\r\n\t\t  </figure>\r\n\t\t  <p></p>\r\n\t\t</ion-col>\r\n\t\t\r\n\t  </ion-row>\r\n\t  \r\n\t</ion-grid>\r\n\t\r\n\t\r\n\t</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map