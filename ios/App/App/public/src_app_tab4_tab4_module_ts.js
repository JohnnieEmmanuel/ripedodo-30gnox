"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 3631);







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab4PageRoutingModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 7520);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 6746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././services/supabase.service */ 1829);







let Tab4Page = class Tab4Page {
  constructor(supabase, router) {
    this.supabase = supabase;
    this.router = router;
    this.profile = {
      fullname: ''
    };
    this.session = this.supabase.session;
  }

  ionViewDidEnter() {
    this.getProfile();
  }

  getProfile() {
    var _this = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let {
          data: profile,
          error,
          status
        } = yield _this.supabase.profile;

        if (error && status !== 406) {// throw error
        }

        if (profile) {
          _this.profile = profile;
        }
      } catch (error) {
        alert(error.message);
      }
    })();
  }

  updateProfile(avatar_url = '') {
    var _this2 = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loader = yield _this2.supabase.createLoader();
      yield loader.present();

      try {
        yield _this2.supabase.updateProfile({ ..._this2.profile
        });
        yield loader.dismiss();
        yield _this2.supabase.createNotice('Profile updated!');
      } catch (error) {
        yield _this2.supabase.createNotice(error.message);
      }
    })();
  }

  signOut() {
    var _this3 = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('testing?');
      yield _this3.supabase.signOut();

      _this3.router.navigate(['/signin'], {
        replaceUrl: true
      });
    })();
  }

};

Tab4Page.ctorParameters = () => [{
  type: _services_supabase_service__WEBPACK_IMPORTED_MODULE_3__.SupabaseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tab4',
  template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab4Page);


/***/ }),

/***/ 6746:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".cs {\n  margin-left: 20px;\n  display: block;\n}\n\n.cs-text {\n  font-family: \"Trebuchet MS\";\n  font-style: normal;\n  font-size: 4rem;\n  font-weight: bolder;\n  text-align: center;\n}\n\n.img {\n  border-radius: 15px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUkVEJTIwSk9ITlxcREVWXFxyaXBlZG9kb1xcc3JjXFxhcHBcXHRhYjRcXHRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InRhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG59XHJcbi5jcy10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufSIsIi5jcyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNzLXRleHQge1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59Il19 */";

/***/ }),

/***/ 7520:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Account</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Email</ion-label>\r\n      <ion-input type=\"email\" [value]=\"session?.user?.email\"></ion-input>\r\n    </ion-item>\r\n\r\n   \r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Full name</ion-label>\r\n      <ion-input\r\n        type=\"url\"\r\n        name=\"first_name\"\r\n        [(ngModel)]=\"profile.fullname\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <div class=\"ion-text-center\">\r\n      <ion-button fill=\"clear\" (click)=\"updateProfile()\"\r\n        >Update Profile</ion-button\r\n      >\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"ion-text-center\">\r\n    <ion-button fill=\"clear\" (click)=\"signOut()\">Log Out</ion-button>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map