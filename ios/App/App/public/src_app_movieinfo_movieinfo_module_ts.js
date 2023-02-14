"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_movieinfo_movieinfo_module_ts"],{

/***/ 2820:
/*!*******************************************************!*\
  !*** ./src/app/movieinfo/movieinfo-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieinfoPageRoutingModule": () => (/* binding */ MovieinfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _movieinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieinfo.page */ 188);




const routes = [
    {
        path: '',
        component: _movieinfo_page__WEBPACK_IMPORTED_MODULE_0__.MovieinfoPage
    }
];
let MovieinfoPageRoutingModule = class MovieinfoPageRoutingModule {
};
MovieinfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MovieinfoPageRoutingModule);



/***/ }),

/***/ 3338:
/*!***********************************************!*\
  !*** ./src/app/movieinfo/movieinfo.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieinfoPageModule": () => (/* binding */ MovieinfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _movieinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieinfo-routing.module */ 2820);
/* harmony import */ var _movieinfo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieinfo.page */ 188);







let MovieinfoPageModule = class MovieinfoPageModule {
};
MovieinfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _movieinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__.MovieinfoPageRoutingModule
        ],
        declarations: [_movieinfo_page__WEBPACK_IMPORTED_MODULE_1__.MovieinfoPage]
    })
], MovieinfoPageModule);



/***/ }),

/***/ 188:
/*!*********************************************!*\
  !*** ./src/app/movieinfo/movieinfo.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieinfoPage": () => (/* binding */ MovieinfoPage)
/* harmony export */ });
/* harmony import */ var C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _movieinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieinfo.page.html?ngResource */ 6237);
/* harmony import */ var _movieinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieinfo.page.scss?ngResource */ 6596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/moviecrud.service */ 437);
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ 1737);
/* harmony import */ var _fullscreen_fullscreen_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fullscreen/fullscreen.page */ 7431);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_movieupload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/movieupload.service */ 7171);
/* harmony import */ var _services_watchlater_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/watchlater.service */ 4621);













let MovieinfoPage = class MovieinfoPage {
  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param moviecrudService The movie Service to get data
   
   */
  constructor(watchlaterService, router, activatedRoute, moviecrudService, streamingMedia, modalCtrl, movieuploadService) {
    this.watchlaterService = watchlaterService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.moviecrudService = moviecrudService;
    this.streamingMedia = streamingMedia;
    this.modalCtrl = modalCtrl;
    this.movieuploadService = movieuploadService;
    this.episodes = ["episode 1", "episode 2", "episode 3", "episode 4", "episode 5"];
    this.wPlatform = false;
    this.aPlatform = false;
    this.iPlatform = false;
    this.url = null;
    this.sturl = null;
    this.stlang = null;
    this.stoptions = null;
    this.platform = null;
    this.rate = 1.0;
    this.exitOnEnd = true;
    this.loopOnEnd = false;
    this.pipEnabled = true;
    this.bkmodeEnabled = true;
    this.mp4st = 'https://brenopolanski.github.io/html5-video-webvtt-example/MIB2-subtitles-pt-BR.vtt';
    this.mp4stLang = 'es';
    this.mp4stOptions = {
      backgroundColor: 'rgba(0,0,0,0)',
      fontSize: 18,
      foregroundColor: 'rgba(128,128,0,1)'
    };
    /* end video with subtitle */

    this.testApi = false;
    this.information = null;
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("checking id", id);
    this.moviecrudService.getDetails(id).subscribe(result => {
      this.information = result;
      this.movieId = id;
      console.log("check info", this.information);
      console.log("check info", this.information.movietitle);
      console.log("check info", this.information.movieurl);
      this.videoUrl = this.information.movieurl;
      this.mp4 = this.information.movieurl;
      console.log(this.videoUrl);
    });
    this.platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__.Capacitor.getPlatform();
    console.log(`$$$ platform: ${this.platform}`);

    if (this.platform === 'ios' || this.platform === 'android') {
      if (this.platform === 'ios') {
        this.iPlatform = true;
        this.aPlatform = false;
      } else {
        this.iPlatform = false;
        this.aPlatform = true;
      }

      this.wPlatform = false;
    } else {
      this.wPlatform = true;
      this.iPlatform = false;
      this.aPlatform = false;
    }
  }

  testVideoPlayerPlugin(vType) {
    var _this = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (vType === 'mp4') {
        _this.url = _this.mp4;

        if (_this.aPlatform) {
          _this.playVideo();
        } else if (_this.iPlatform) {
          _this.playVideo();
        } else if (_this.wPlatform) {
          if (_this.videoUrl) {
            _this.sturl = _this.mp4st;
            _this.stlang = _this.mp4stLang;
            _this.stoptions = _this.mp4stOptions;
          } else {
            _this.sturl = null;
            _this.stlang = null;
            _this.stoptions = null;
          }

          const modal = yield _this.modalCtrl.create({
            component: _fullscreen_fullscreen_page__WEBPACK_IMPORTED_MODULE_5__.FullscreenPage,
            componentProps: {
              url: _this.url,
              sturl: _this.sturl,
              stlang: _this.stlang,
              stoptions: _this.stoptions,
              rate: _this.rate,
              exitOnEnd: _this.exitOnEnd,
              loopOnEnd: _this.loopOnEnd,
              pipEnabled: _this.pipEnabled,
              bkmodeEnabled: _this.bkmodeEnabled,
              testApi: _this.testApi,
              platform: _this.platform
            },
            swipeToClose: true
          });
          yield modal.present();
        } else {
          console.log("Your devices is not supported");
        }
      } else {
        console.log('Video format not supported');
      }
    })();
  }

  playVideo() {
    let options = {
      successCallback: () => {
        console.log('Video played');
      },
      errorCallback: e => {
        console.log('Error streaming');
      },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };
    this.streamingMedia.playVideo(this.videoUrl, options);
  }

  onWatchLater() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieId = id;
    console.log(this.movieId);
    let data = {
      _id: this.movieId
    };
    console.log(this.watchlaterService.watchlater(data).subscribe(response => {
      console.log(response);
    }));
  }

};

MovieinfoPage.ctorParameters = () => [{
  type: _services_watchlater_service__WEBPACK_IMPORTED_MODULE_8__.WatchlaterService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
}, {
  type: _services_moviecrud_service__WEBPACK_IMPORTED_MODULE_3__.MoviecrudService
}, {
  type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__.StreamingMedia
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
}, {
  type: _services_movieupload_service__WEBPACK_IMPORTED_MODULE_7__.MovieuploadService
}];

MovieinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-movieinfo',
  template: _movieinfo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_movieinfo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MovieinfoPage);


/***/ }),

/***/ 6596:
/*!**********************************************************!*\
  !*** ./src/app/movieinfo/movieinfo.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "* {\n  box-sizing: border-box;\n  line-height: 1.5;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nimg {\n  max-width: 100%;\n}\n\nion-content {\n  --background: rgb(0, 0, 0);\n}\n\nion-toolbar {\n  --background:rgb(0, 0, 0) !important;\n}\n\n.info_img {\n  width: 100%;\n  border-radius: 10px;\n  height: 400px;\n  margin-top: 10px;\n}\n\n.cov {\n  position: absolute;\n  background-color: rgb(0, 0, 0);\n  height: 100px;\n  width: 100%;\n  top: 315px;\n}\n\n.movietitle {\n  color: white;\n  font-family: verdana;\n  text-align: center;\n  font-size: 25px;\n  padding-top: 10px;\n  font-weight: bolder;\n  text-transform: uppercase;\n}\n\n.movieplot {\n  text-align: justify;\n  font-size: 12px;\n  font-family: verdana;\n  color: white;\n  opacity: 0.8;\n}\n\n.plotdesc {\n  color: white;\n  font-size: 15px;\n  font-weight: bold;\n}\n\nion-chip {\n  --background: #00213f;\n  --color: #adefd1;\n}\n\nion-icon {\n  --padding-top:20px;\n}\n\n.pp {\n  background-color: black;\n}\n\n#b-btn {\n  width: 2rem;\n  height: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllaW5mby5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxSRUQlMjBKT0hOXFxERVZcXHJpcGVkb2RvXFxzcmNcXGFwcFxcbW92aWVpbmZvXFxtb3ZpZWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSwwQkFBQTtBQ0NKOztBREdFO0VBQ0Usb0NBQUE7QUNBSjs7QURFRTtFQUNFLFdBQUE7RUFBWSxtQkFBQTtFQUFxQixhQUFBO0VBQ2pDLGdCQUFBO0FDR0o7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDR0o7O0FEQ0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0FDRUo7O0FERUU7RUFDRSx1QkFBQTtBQ0NKOztBRElFO0VBQ0UsV0FBQTtFQUFZLFlBQUE7RUFBYSxrQkFBQTtBQ0M3QiIsImZpbGUiOiJtb3ZpZWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcblxyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6cmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbmZvX2ltZ3tcclxuICAgIHdpZHRoOiAxMDAlO2JvcmRlci1yYWRpdXM6IDEwcHg7IGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3Z7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDMxNXB4O1xyXG4gICAgXHJcbiAgfVxyXG4gXHJcbiAgLm1vdmlldGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTp2ZXJkYW5hO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICB9XHJcblxyXG4gIC5tb3ZpZXBsb3R7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6dmVyZGFuYTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuXHJcbiAgfVxyXG5cclxuICAucGxvdGRlc2N7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgaW9uLWNoaXAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAyMTNmO1xyXG4gICAgLS1jb2xvcjogI2FkZWZkMTtcclxuICB9XHJcbiAgaW9uLWljb257XHJcbiAgICAtLXBhZGRpbmctdG9wOjIwcHg7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAucHB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLy8gQG1lZGlhICBzY3JlZW4gKG1pbi13aWR0aDo3NjlweCkge1xyXG4gICAgXHJcbiAgLy8gfVxyXG4gICNiLWJ0bntcclxuICAgIHdpZHRoOjJyZW07IGhlaWdodDoycmVtOyB0ZXh0LWFsaWduOmNlbnRlcjtcclxufSIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcbn1cblxuLmluZm9faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb3Yge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMzE1cHg7XG59XG5cbi5tb3ZpZXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogdmVyZGFuYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubW92aWVwbG90IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogdmVyZGFuYTtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5wbG90ZGVzYyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNoaXAge1xuICAtLWJhY2tncm91bmQ6ICMwMDIxM2Y7XG4gIC0tY29sb3I6ICNhZGVmZDE7XG59XG5cbmlvbi1pY29uIHtcbiAgLS1wYWRkaW5nLXRvcDoyMHB4O1xufVxuXG4ucHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuI2ItYnRuIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 6237:
/*!**********************************************************!*\
  !*** ./src/app/movieinfo/movieinfo.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\" >\n  <ion-toolbar style=\"background-color:rgb(0, 0, 0) !important;\" >\n    <ion-fab vertical=\"top\" horizontal=\"start\">\n      <ion-fab-button [routerLink]=\"['/home']\" id=\"b-btn\" routerDirection=\"backward\" >\n        <ion-icon name=\"arrow-back-circle\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n \n<div class=\"container\">\n\n\n  <span *ngIf=\"information\">\n  <div class=\"row\" >\n    <div class=\"col-12\">\n      <img class=\"info_img\" [src]=\"information.movieposter\"   alt=\"\">\n    </div>\n\n  </div>\n  <div class=\"row cov\" >\n    <div class=\"col \" >\n      <div class=\"col-12 \" *ngIf=\"information.movietype === 'movie'\" style=\"text-align:center; margin-top: 30px;\" >\n        <ion-button shape=\"round\" (click)=\"testVideoPlayerPlugin('mp4')\">\n          <ion-icon slot=\"start\" name=\"play-outline\" ></ion-icon>\n          PLAY \n        </ion-button>\n      </div>\n    </div>\n\n   \n\n <div class=\"col \" >\n      <div class=\"col-12 \" style=\"text-align:center; margin-top: 30px;\" >\n        <a > <ion-button shape=\"round\"  fill=\"outline\" (click)=\"onWatchLater()\" >\n          <ion-icon slot=\"start\" name=\"add-outline\" ></ion-icon>\n         WATCH LATER\n        </ion-button></a>\n      </div>\n    </div> \n    \n  </div>\n  <div class=\"row\" >\n    <div class=\"col-12 \" >\n      <h1 class=\"movietitle\">{{information.movietitle}}</h1>\n    </div>\n  </div>\n  <div class=\"row \" >\n    <div class=\"col-12 \" style=\"text-align:center\">\n      <ion-chip color=\"primary\">{{information.moviegenre}}</ion-chip>\n\n      <ion-chip [outline]=\"true\"  color=\"primary\">{{information.movieruntime}}</ion-chip>\n      <ion-chip [outline]=\"true\" color=\"primary\">HD</ion-chip>\n    \n    </div>\n  </div>\n  <div class=\"row \" *ngIf=\"information.movietype === 'series'\" >\n    <div class=\"col-12 \" style=\"text-align:center\">\n    <ion-item color=\"primary\" >\n\n      <ion-select color=\"primary\" \n      placeholder=\"Season 1\"\n      (ionChange)=\"handleChange($event)\"\n      (ionCancel)=\"pushLog('ionCancel fired')\"\n      (ionDismiss)=\"pushLog('ionDismiss fired')\"\n    >\n      <ion-select-option *ngFor=\"let episode of episodes\"  color=\"primary\" >{{episode}}</ion-select-option>\n    </ion-select>\n    </ion-item>\n    </div>\n  </div>\n\n\n  <div class=\"row \" >\n    <div class=\"col-12 plotsummary\" >\n      <h4 class=\"plotdesc\">Plot Summary</h4>\n      <h1 class=\"movieplot\">{{information.movieplot}}</h1>\n    </div>\n  </div>\n  \n  <div class=\"row \" >\n    <div class=\"col-12 plotsummary\" >\n      <h4 class=\"plotdesc\">Cast</h4>\n      <h1 class=\"movieplot\">{{information.moviecasts}}</h1>\n    </div>\n  </div>\n</span>\n</div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_movieinfo_movieinfo_module_ts.js.map