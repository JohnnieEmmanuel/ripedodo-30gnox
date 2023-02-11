"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pagenotfound_pagenotfound_module_ts"],{

/***/ 8121:
/*!*************************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundPageRoutingModule": () => (/* binding */ PagenotfoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pagenotfound_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagenotfound.page */ 9295);




const routes = [
    {
        path: '',
        component: _pagenotfound_page__WEBPACK_IMPORTED_MODULE_0__.PagenotfoundPage
    }
];
let PagenotfoundPageRoutingModule = class PagenotfoundPageRoutingModule {
};
PagenotfoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagenotfoundPageRoutingModule);



/***/ }),

/***/ 9827:
/*!*****************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundPageModule": () => (/* binding */ PagenotfoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagenotfound-routing.module */ 8121);
/* harmony import */ var _pagenotfound_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagenotfound.page */ 9295);







let PagenotfoundPageModule = class PagenotfoundPageModule {
};
PagenotfoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagenotfoundPageRoutingModule
        ],
        declarations: [_pagenotfound_page__WEBPACK_IMPORTED_MODULE_1__.PagenotfoundPage]
    })
], PagenotfoundPageModule);



/***/ }),

/***/ 9295:
/*!***************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundPage": () => (/* binding */ PagenotfoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pagenotfound_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagenotfound.page.html?ngResource */ 5388);
/* harmony import */ var _pagenotfound_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagenotfound.page.scss?ngResource */ 5046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PagenotfoundPage = class PagenotfoundPage {
    constructor() { }
    ngOnInit() {
    }
};
PagenotfoundPage.ctorParameters = () => [];
PagenotfoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pagenotfound',
        template: _pagenotfound_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pagenotfound_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagenotfoundPage);



/***/ }),

/***/ 5046:
/*!****************************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "/*======================\n    404 page\n=======================*/\n.page_404 {\n  padding: 40px 0;\n  background: white !important;\n  font-family: \"Arvo\", serif;\n}\n.page_404 img {\n  width: 100%;\n}\n.four_zero_four_bg {\n  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);\n  height: 400px;\n  background-position: center;\n}\n.four_zero_four_bg h1 {\n  font-size: 80px;\n}\n.four_zero_four_bg h3 {\n  font-size: 80px;\n}\n.link_404 {\n  color: #fff !important;\n  padding: 10px 20px;\n  background: #197fd3;\n  margin: 20px 0;\n  display: inline-block;\n}\n.contant_box_404 {\n  margin-top: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Vub3Rmb3VuZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxSRUQlMjBKT0hOXFxERVZcXHJpcGVkb2RvXFxzcmNcXGFwcFxccGFnZW5vdGZvdW5kXFxwYWdlbm90Zm91bmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzt3QkFBQTtBQUtBO0VBQVcsZUFBQTtFQUFnQiw0QkFBQTtFQUE0QiwwQkFBQTtBQ0N2RDtBREVBO0VBQWdCLFdBQUE7QUNFaEI7QURBQTtFQUVDLCtGQUFBO0VBQ0csYUFBQTtFQUNBLDJCQUFBO0FDRUo7QURFQztFQUNBLGVBQUE7QUNDRDtBREVFO0VBQ0UsZUFBQTtBQ0NKO0FERUk7RUFDSCxzQkFBQTtFQUNHLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDSjtBREFDO0VBQWtCLGlCQUFBO0FDSW5CIiwiZmlsZSI6InBhZ2Vub3Rmb3VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyo9PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICA0MDQgcGFnZVxyXG49PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLnBhZ2VfNDA0eyBwYWRkaW5nOjQwcHggMDsgYmFja2dyb3VuZDp3aGl0ZSFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnQXJ2bycsIHNlcmlmO1xyXG59XHJcblxyXG4ucGFnZV80MDQgIGltZ3sgd2lkdGg6MTAwJTt9XHJcblxyXG4uZm91cl96ZXJvX2ZvdXJfYmd7XHJcbiBcclxuIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5kcmliYmJsZS5jb20vdXNlcnMvMjg1NDc1L3NjcmVlbnNob3RzLzIwODMwODYvZHJpYmJibGVfMS5naWYpO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gXHJcbiAuZm91cl96ZXJvX2ZvdXJfYmcgaDF7XHJcbiBmb250LXNpemU6ODBweDtcclxuIH1cclxuIFxyXG4gIC5mb3VyX3plcm9fZm91cl9iZyBoM3tcclxuXHRcdFx0IGZvbnQtc2l6ZTo4MHB4O1xyXG5cdFx0XHQgfVxyXG5cdFx0XHQgXHJcblx0XHRcdCAubGlua180MDR7XHRcdFx0IFxyXG5cdGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxOTdmZDM7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcblx0LmNvbnRhbnRfYm94XzQwNHsgbWFyZ2luLXRvcDotNTBweDt9IiwiLyo9PT09PT09PT09PT09PT09PT09PT09XG4gICAgNDA0IHBhZ2Vcbj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5wYWdlXzQwNCB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiQXJ2b1wiLCBzZXJpZjtcbn1cblxuLnBhZ2VfNDA0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm91cl96ZXJvX2ZvdXJfYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJzLzI4NTQ3NS9zY3JlZW5zaG90cy8yMDgzMDg2L2RyaWJiYmxlXzEuZ2lmKTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uZm91cl96ZXJvX2ZvdXJfYmcgaDEge1xuICBmb250LXNpemU6IDgwcHg7XG59XG5cbi5mb3VyX3plcm9fZm91cl9iZyBoMyB7XG4gIGZvbnQtc2l6ZTogODBweDtcbn1cblxuLmxpbmtfNDA0IHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTk3ZmQzO1xuICBtYXJnaW46IDIwcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29udGFudF9ib3hfNDA0IHtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59Il19 */";

/***/ }),

/***/ 5388:
/*!****************************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>RipeDODO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <section class=\"page_404\">\n    <div class=\"container\">\n      <div class=\"row\">\t\n      <div class=\"col-sm-12 \">\n      <div class=\"col-sm-10 col-sm-offset-1  text-center\">\n      <div class=\"four_zero_four_bg\">\n        <h1 class=\"text-center \">404</h1>\n      \n      \n      </div>\n      \n      <div class=\"contant_box_404\">\n      <h3 class=\"h2\">\n      Look like you're lost\n      </h3>\n      \n      <p>the page you are looking for not avaible!</p>\n      \n      <button  class=\"btn btn-primary text-center\" [routerLink]=\"['/home']\">HOME</button>\n    </div>\n      </div>\n      </div>\n      </div>\n    </div>\n  </section>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pagenotfound_pagenotfound_module_ts.js.map