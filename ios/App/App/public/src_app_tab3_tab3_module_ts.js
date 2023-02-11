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

module.exports = "ion-segment {\n  --background: #235ced;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUkVEJTIwSk9ITlxcREVWXFxyaXBlZG9kb1xcc3JjXFxhcHBcXHRhYjNcXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzIzNWNlZDtcclxuICB9IiwiaW9uLXNlZ21lbnQge1xuICAtLWJhY2tncm91bmQ6ICMyMzVjZWQ7XG59Il19 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-title class=\"ion-text-center\" color=\"primary\">\r\n        RIPEDODO\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n<ion-content [fullscreen]=\"true\">\r\n\t<ion-segment value=\"custom\">\r\n\t\t<ion-segment-button value=\"custom\">\r\n\t\t  <ion-label>Watch Later</ion-label>\r\n\t\t</ion-segment-button>\r\n\t\t<ion-segment-button id=\"open-modal\">\r\n\t\t  <ion-label>Coming Soon</ion-label>\r\n\t\t</ion-segment-button>\r\n\t  </ion-segment>\r\n\t<!--grids-sec1-->\r\n\t<section class=\"w3l-grids\">\r\n\t\t<div class=\"grids-main py-5\">\r\n\t\t\t<div class=\"container py-lg-3\">\r\n\t\t\t\r\n\t\t\t\t<div class=\"w3l-populohny-grids\">\r\n\t\t\t\t\t<div class=\"item vhny-grid\" *ngFor=\"let ark of Darks\">\r\n\t\t\t\t\t\t<div class=\"box16\">\r\n\t\t\t\t\t\t\t<a href=\"genre.html\">\r\n\t\t\t\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" [src]=\"ark.movieposter\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</figure>\r\n\t\t\t\t\t\t\t\t<div class=\"box-content\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"title\">{{ark.movietitle}}</h3>\r\n\t\t\t\t\t\t\t\t\t<h4> <span class=\"post\"><span class=\"fa fa-clock-o\"> </span> 1 Hr 4min\r\n\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"post fa fa-heart text-right\"></span>\r\n\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"fa fa-play video-icon\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<!--//grids-sec1-->\r\n\t\r\n\t\r\n\t<ion-modal #modal trigger=\"open-modal\" [enterAnimation]=\"enterAnimation\" [leaveAnimation]=\"leaveAnimation\">\r\n\t\t<ng-template>\r\n\t\t  <ion-header>\r\n\t\t\t<ion-toolbar>\r\n\t\t\t  <ion-title>Modal</ion-title>\r\n\t\t\t  <ion-buttons slot=\"end\">\r\n\t\t\t\t<ion-button (click)=\"modal.dismiss()\">Close</ion-button>\r\n\t\t\t  </ion-buttons>\r\n\t\t\t</ion-toolbar>\r\n\t\t  </ion-header>\r\n\t\t  <ion-content>\r\n\t\t\t<ion-list>\r\n\t\t\t  <ion-item>\r\n\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t  <ion-img src=\"https://i.pravatar.cc/300?u=b\"></ion-img>\r\n\t\t\t\t</ion-avatar>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t  <h2>Connor Smith</h2>\r\n\t\t\t\t  <p>Sales Rep</p>\r\n\t\t\t\t</ion-label>\r\n\t\t\t  </ion-item>\r\n\t\t\t  <ion-item>\r\n\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t  <ion-img src=\"https://i.pravatar.cc/300?u=a\"></ion-img>\r\n\t\t\t\t</ion-avatar>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t  <h2>Daniel Smith</h2>\r\n\t\t\t\t  <p>Product Designer</p>\r\n\t\t\t\t</ion-label>\r\n\t\t\t  </ion-item>\r\n\t\t\t  <ion-item>\r\n\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t  <ion-img src=\"https://i.pravatar.cc/300?u=d\"></ion-img>\r\n\t\t\t\t</ion-avatar>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t  <h2>Greg Smith</h2>\r\n\t\t\t\t  <p>Director of Operations</p>\r\n\t\t\t\t</ion-label>\r\n\t\t\t  </ion-item>\r\n\t\t\t  <ion-item>\r\n\t\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t  <ion-img src=\"https://i.pravatar.cc/300?u=e\"></ion-img>\r\n\t\t\t\t</ion-avatar>\r\n\t\t\t\t<ion-label>\r\n\t\t\t\t  <h2>Zoey Smith</h2>\r\n\t\t\t\t  <p>CEO</p>\r\n\t\t\t\t</ion-label>\r\n\t\t\t  </ion-item>\r\n\t\t\t</ion-list>\r\n\t\t  </ion-content>\r\n\t\t</ng-template>\r\n\t  </ion-modal>\r\n   \r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map