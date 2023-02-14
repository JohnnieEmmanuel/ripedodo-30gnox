"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 6297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/moviecrud.service */ 437);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././services/supabase.service */ 1829);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








let Tab1Page = class Tab1Page {
  constructor(movieCrudService, supabase, router) {
    this.movieCrudService = movieCrudService;
    this.supabase = supabase;
    this.router = router;
    this.profile = {
      fullname: ''
    };
    this.Movies = [];
    this.Tvshows = [];
    this.MoviesOnly = [];
    this.options = {
      keyboard: true,
      slidesPerView: 1,
      autoplay: {
        delay: 7000
      }
    };
    this.session = this.supabase.session;
  }

  slideWillChange() {
    console.log('Slide will change');
  }

  slideDidChange() {
    var _this = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Slide did change');
      if (!_this.slidesRef) return;
      console.table({
        isBeginning: yield _this.slidesRef.isBeginning(),
        isEnd: yield _this.slidesRef.isEnd()
      });
    })();
  }

  ionViewDidEnter() {
    if (this.session) {
      this.getProfile();
    } else {
      this.router.navigate(['/signin'], {
        replaceUrl: true
      });
    }

    this.movieCrudService.getMovies().subscribe(response => {
      this.Movies = response;
      console.log(this.Movies); // filterSeriesOnly(this.Movies);

      this.Tvshows = this.Movies.filter(tvshow => tvshow.movietype === 'series'); //filter series only

      this.MoviesOnly = this.Movies.filter(movie => movie.movietype === 'movie'); //filter movies only
    });
  }

  getProfile() {
    var _this2 = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let {
          data: profile,
          error,
          status
        } = yield _this2.supabase.profile;

        if (error && status == 406) {
          console.log("new user -- redirecting to verification page");

          _this2.router.navigate(['/verification'], {
            replaceUrl: true
          });
        }

        if (profile) {
          _this2.profile = profile;
        }
      } catch (error) {
        alert(error.message);
      }
    })();
  }

};

Tab1Page.ctorParameters = () => [{
  type: _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_3__.MoviecrudService
}, {
  type: _services_supabase_service__WEBPACK_IMPORTED_MODULE_4__.SupabaseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

Tab1Page.propDecorators = {
  slidesRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['slidesRef', {
      static: true
    }]
  }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tab1',
  template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab1Page);


/***/ }),

/***/ 6297:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".scrolling-wrapper {\n  overflow-x: auto;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: 3.4em;\n}\n\n.subtitle {\n  font-size: 1.25em;\n  opacity: 0.65;\n}\n\n.card-block {\n  height: 300px;\n  background-color: rgb(40, 107, 25);\n  border: none;\n  background-position: center;\n}\n\nion-slides {\n  height: 300px;\n  width: 100%;\n  --background: transparent;\n  --bullet-background:transparent;\n  --bullet-background-active: transparent;\n  --scroll-bar-background:transparent;\n}\n\n.img-fig {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUkVEJTIwSk9ITlxcREVWXFxyaXBlZG9kb1xcc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURJSTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElJO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNGLHlCQUFBO0VBQ0UsK0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG1DQUFBO0FDRFI7O0FESUk7RUFDRSxtQkFBQTtBQ0ROIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGluZy13cmFwcGVye1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMy40ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdWJ0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgb3BhY2l0eTogMC42NTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtYmxvY2t7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCAxMDcsIDI1KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2xpZGVzIHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAuaW1nLWZpZ3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAiLCIuc2Nyb2xsaW5nLXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMy40ZW07XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBvcGFjaXR5OiAwLjY1O1xufVxuXG4uY2FyZC1ibG9jayB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgMTA3LCAyNSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB0cmFuc3BhcmVudDtcbiAgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG59XG5cbi5pbWctZmlnIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n\t<ion-toolbar>\n\t  <ion-title class=\"ion-text-center\" color=\"primary\">\n\t\tRIPEDODO\n\t  </ion-title>\n\t</ion-toolbar>\n  </ion-header>\n  \n  \n<ion-content [fullscreen]=\"true\">\n\n\t\t<ion-row>\n\t\t  \n\t\t  <ion-col>\n\t\t\t<div class=\"ion-text-center \">\n\t\t\t\t<ion-slides\n  [pager]=\"true\"\n  [scrollbar]=\"true\"\n  [options]=\"options\"\n\n  (ionSlideWillChange)=\"slideWillChange()\"\n  (ionSlideDidChange)=\"slideDidChange()\"\n\n  #slidesRef\n>\n\n\t<ion-slide *ngFor=\"let movie of Movies\">\n\t\t<figure>\n\t\t\t<img class=\"img-fig\"  [src]=\"movie.movieposter\" *ngIf=\"movie.movieposter != 'N/A'\"alt=\"\" >\n\t\t  </figure>\t\n\t</ion-slide>\n\n  \n  \n</ion-slides>\n\t\t\t</div>\n\t\t  </ion-col>\n\t\t</ion-row>\n\t\t\n\t \n\n\t<ion-grid>\n\t\t<ion-row>\n\t\t  \n\t\t  <ion-col>\n\t\t\t<div class=\"ion-text-center \">\n\t\t\t\t<ion-text color=\"primary\">\n\t\t\t\t\t<h4 style=\"font-weight: bold;\">MOVIES</h4>\n\t\t\t\t  </ion-text>\n\t\t\t</div>\n\t\t  </ion-col>\n\t\t</ion-row>\n\t\t<ion-row class=\"ion-align-items-center scrolling-wrapper flex-row flex-nowrap\">\n\t\t\t<ion-col size=\"4\"  class=\"fig-col\" *ngFor=\"let movie of MoviesOnly\" [routerLink]=\"['/', 'movie', movie._id]\">\n\t\t\t  <figure>\n\t\t\t\t<img class=\"img-fig\"  [src]=\"movie.movieposter\" *ngIf=\"movie.movieposter != 'N/A'\"alt=\"\" loading=\"lazy\">\n\t\t\t\t<!-- <figcaption class=\"img-figcaption\">{{genre.movietitle}}</figcaption> -->\n\t\t\t  </figure>\n\t\t\t  <p></p>\n\t\t\t</ion-col>\n\t\t\t\n\t\t  </ion-row>\n\t  </ion-grid>\n  \n\t<ion-grid>\n\t\t<ion-row>\n\t\t  \n\t\t  <ion-col>\n\t\t\t<div class=\"ion-text-center \">\n\t\t\t\t<ion-text color=\"primary\">\n\t\t\t\t\t<h4 style=\"font-weight: bold;\">TV SHOWS</h4>\n\t\t\t\t  </ion-text>\n\t\t\t</div>\n\t\t  </ion-col>\n\t\t</ion-row>\n\t\t<ion-row class=\"ion-align-items-center scrolling-wrapper flex-row flex-nowrap\">\n\t\t\t<ion-col size=\"4\"  class=\"fig-col\" *ngFor=\"let tvshow of Tvshows\" [routerLink]=\"['/', 'movie', tvshow._id]\">\n\t\t\t  <figure>\n\t\t\t\t<img class=\"img-fig\"  [src]=\"tvshow.movieposter\" *ngIf=\"tvshow.movieposter != 'N/A'\"alt=\"\" loading=\"lazy\">\n\t\t\t\t<!-- <figcaption class=\"img-figcaption\">{{genre.movietitle}}</figcaption> -->\n\t\t\t  </figure>\n\t\t\t  <p></p>\n\t\t\t</ion-col>\n\t\t\t\n\t\t  </ion-row>\n\t  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map