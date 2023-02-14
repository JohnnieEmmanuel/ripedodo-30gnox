(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _videoplayer_videoplayer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoplayer/videoplayer.component */ 1267);
/* harmony import */ var _viewheader_viewheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewheader/viewheader.component */ 544);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 6630);






const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'search',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 4682)).then(m => m.SearchPageModule)
    },
    {
        path: 'uploadmovie',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_uploadmovie_uploadmovie_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./uploadmovie/uploadmovie.module */ 7706)).then(m => m.UploadmoviePageModule)
    },
    {
        path: 'uploadmovie/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_uploadmovie_uploadmovie_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./uploadmovie/uploadmovie.module */ 7706)).then(m => m.UploadmoviePageModule)
    },
    {
        path: 'viewheader', component: _viewheader_viewheader_component__WEBPACK_IMPORTED_MODULE_1__.ViewheaderComponent
    },
    {
        path: 'movie/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_fullscreen_fullscreen_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_movieinfo_movieinfo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./movieinfo/movieinfo.module */ 3338)).then(m => m.MovieinfoPageModule)
    },
    {
        path: 'movieinfo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_fullscreen_fullscreen_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_movieinfo_movieinfo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./movieinfo/movieinfo.module */ 3338)).then(m => m.MovieinfoPageModule)
    }, {
        path: 'videoplayer', component: _videoplayer_videoplayer_component__WEBPACK_IMPORTED_MODULE_0__.VideoplayerComponent
    },
    {
        path: 'fullscreen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_fullscreen_fullscreen_page_ts"), __webpack_require__.e("src_app_fullscreen_fullscreen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fullscreen/fullscreen.module */ 9131)).then(m => m.FullscreenPageModule)
    },
    {
        path: 'categories',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_categories_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./categories/categories.module */ 1944)).then(m => m.CategoriesPageModule)
    },
    {
        path: 'categories/:tag',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_categories_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./categories/categories.module */ 1944)).then(m => m.CategoriesPageModule)
    },
    {
        path: 'watchlater/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
    },
    {
        path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent
    },
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_signin_signin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./signin/signin.module */ 7445)).then(m => m.SigninPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7648)).then(m => m.SignupPageModule)
    },
    {
        path: '**',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pagenotfound_pagenotfound_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pagenotfound/pagenotfound.module */ 9827)).then(m => m.PagenotfoundPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 7601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/supabase.service */ 1829);









let AppComponent = class AppComponent {
  constructor(splashScreen, platform, supabase, router) {
    this.splashScreen = splashScreen;
    this.platform = platform;
    this.supabase = supabase;
    this.router = router;
    this.supabase.authChanges((_, session) => {
      console.log(session);

      if (session?.user) {// console.log(session.user)
        // this.router.navigate(['/'])
      } else {
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.platform.ready();

      _this.splashScreen.show();
    })();
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
}, {
  type: _services_supabase_service__WEBPACK_IMPORTED_MODULE_4__.SupabaseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _viewheader_viewheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewheader/viewheader.component */ 544);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ 1737);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);










// Imort search module






let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _viewheader_viewheader_component__WEBPACK_IMPORTED_MODULE_2__.ViewheaderComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, swiper_angular__WEBPACK_IMPORTED_MODULE_14__.SwiperModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }, _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__.StreamingMedia, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let ProfileComponent = class ProfileComponent {
    constructor(http) {
        this.http = http;
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Authorization', `Bearer ${token}`);
        this.http.get('http://localhost:5000/auth/profile', { headers }).subscribe((response) => {
            this.name = response.name;
            this.email = response.email;
            this.dob = response.dob;
        }, (error) => {
            console.log(error);
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-profile',
        template: `
    <div>
      <h1>Welcome to your profile, {{ name }}!</h1>
      <p>Email: {{ email }}</p>
      <p>dob: {{ dob }}</p>
    </div>
  `,
    })
], ProfileComponent);



/***/ }),

/***/ 1829:
/*!**********************************************!*\
  !*** ./src/app/services/supabase.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupabaseService": () => (/* binding */ SupabaseService)
/* harmony export */ });
/* harmony import */ var C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ 5683);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let SupabaseService = class SupabaseService {
  constructor(loadingCtrl, toastCtrl, router) {
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
    this.router = router;
    this.supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supabaseUrl, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supabaseKey);
  }

  get user() {
    return this.supabase.auth.user();
  }

  get session() {
    return this.supabase.auth.session();
  }

  authChanges(callback) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  get profile() {
    return this.supabase.from('profiles').select(`fullname`).eq('id', this.user?.id).single();
  }

  signIn(email, password) {
    return this.supabase.auth.signIn({
      email,
      password
    });
  }

  signUp(email, password) {
    return this.supabase.auth.signUp({
      email,
      password
    });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  updateProfile(profile) {
    const update = { ...profile,
      id: this.user?.id,
      updated_at: new Date()
    };
    return this.supabase.from('profiles').upsert(update, {
      returning: 'minimal' // Don't return the value after inserting

    });
  }

  downLoadImage(path) {
    return this.supabase.storage.from('avatars').download(path);
  }

  uploadAvatar(filePath, file) {
    return this.supabase.storage.from('avatars').upload(filePath, file);
  }

  createNotice(message) {
    var _this = this;

    return (0,C_Users_hp_RED_JOHN_DEV_ripedodo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create({
        message,
        duration: 3000
      });
      yield toast.present();
    })();
  }

  createLoader() {
    return this.loadingCtrl.create();
  }

};

SupabaseService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

SupabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], SupabaseService);


/***/ }),

/***/ 1267:
/*!******************************************************!*\
  !*** ./src/app/videoplayer/videoplayer.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoplayerComponent": () => (/* binding */ VideoplayerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _videoplayer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoplayer.component.html?ngResource */ 6410);
/* harmony import */ var _videoplayer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoplayer.component.scss?ngResource */ 52);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ 1737);





let VideoplayerComponent = class VideoplayerComponent {
    constructor(stream) {
        this.stream = stream;
        this.videoUrl = "https://d1deccugb2p5vs.cloudfront.net/Infinite.mp4";
    }
    ngOnInit() { }
    streamVideo() {
        var option = {
            orientation: "portrait",
            controls: true
        };
        this.stream.playVideo(this.videoUrl, option);
    }
};
VideoplayerComponent.ctorParameters = () => [
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_2__.StreamingMedia }
];
VideoplayerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-videoplayer',
        template: _videoplayer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_videoplayer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VideoplayerComponent);



/***/ }),

/***/ 544:
/*!****************************************************!*\
  !*** ./src/app/viewheader/viewheader.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewheaderComponent": () => (/* binding */ ViewheaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _viewheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewheader.component.html?ngResource */ 208);
/* harmony import */ var _viewheader_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewheader.component.css?ngResource */ 9749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ViewheaderComponent = class ViewheaderComponent {
    constructor() {
        this.title = 'ng-carousel-demo';
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: true
        };
        this.slides = [
            { id: 1, img: "https://dummyimage.com/350x150/423b42/fff" },
            { id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff" },
            { id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff" },
            { id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff" },
            { id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff" },
            { id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff" },
            { id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff" }
        ];
    }
    ngOnInit() {
    }
};
ViewheaderComponent.ctorParameters = () => [];
ViewheaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-viewheader',
        template: _viewheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_viewheader_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewheaderComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    supabaseUrl: 'https://rmecexevqwcdszovrnyv.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZWNleGV2cXdjZHN6b3Zybnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxODE4MTcsImV4cCI6MTk5MTc1NzgxN30.ztsfu9vdsZILv90LY2_sLEoPA_cGhDw2g4FGmTG9M4o',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-250f021a_js-node_modules_ionic_core_dist_esm_t-7df007",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-250f021a_js-node_modules_ionic_core_dist_esm_t-7df007",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		6223,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9749:
/*!****************************************************************!*\
  !*** ./src/app/viewheader/viewheader.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3aGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 7601:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 52:
/*!*******************************************************************!*\
  !*** ./src/app/videoplayer/videoplayer.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3BsYXllci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  \n  <ion-router-outlet></ion-router-outlet>\n  \n</ion-app>\n";

/***/ }),

/***/ 6410:
/*!*******************************************************************!*\
  !*** ./src/app/videoplayer/videoplayer.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-textarea rows=\"5\" [(ngModel)]=\"videoUrl\" placeholder=\"Enter Video Url\"></ion-textarea>\r\n            </ion-col>\r\n        </ion-row> <br/>\r\n        <ion-row>\r\n            <ion-col>\r\n<<<<<<< HEAD\r\n                <ion-button (click)=\"streamVideo()\" expand=\"full\">stream video</ion-button>\r\n=======\r\n                <ion-button (click)=\"streamVideo()\" expand=\"full\">Stream video</ion-button>\r\n>>>>>>> e36cc4dd (added tab4 module)\r\n            </ion-col>\r\n        </ion-row> \r\n    </ion-grid>\r\n</ion-content>";

/***/ }),

/***/ 208:
/*!*****************************************************************!*\
  !*** ./src/app/viewheader/viewheader.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h1>Angular 11 Owl Carousel Integration Tutorial - Tutsmake.com</h1>\n   \n<owl-carousel-o [options]=\"customOptions\">\n   \n<ng-container *ngFor=\"let slide of slides\">\n  <ng-template carouselSlide [id]=\"slide.id\">\n    <img [src]=\"slide.img\" >\n  </ng-template>\n</ng-container>\n   \n</owl-carousel-o>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map