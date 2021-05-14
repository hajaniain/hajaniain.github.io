(self["webpackChunkhajaniain"] = self["webpackChunkhajaniain"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 25245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, data: { depth: 1 } },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transitionAnimation": function() { return /* binding */ transitionAnimation; },
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_pwa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/pwa.service */ 53284);
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/scroll.service */ 10550);








function transitionAnimation(translateEnter, translateLeave) {
    return [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ height: '!' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ transform: "translateX(" + translateEnter + ")" })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ position: 'absolute', top: 65, left: 0, right: 0 })),
        // animate the leave page away
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('0.3s cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ transform: "translateX(" + translateLeave + ")" })),
            ]),
            // and now reveal the enter
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('0.3s cubic-bezier(.35,0,.25,1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ transform: 'translateX(0)' }))),
        ]),
    ];
}
var AppComponent = /** @class */ (function () {
    function AppComponent(router, pwaService, scrollService) {
        this.router = router;
        this.pwaService = pwaService;
        this.scrollService = scrollService;
        this.title = 'hajaniain';
        console.log('HELLO!!!');
        this.initGoogleAnalytics(router);
        this.pwaService.check();
        this.onRouterChange();
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.scrollToHash();
        this.activeLink();
    };
    AppComponent.prototype.activeLink = function () {
        var mainNavLinks = document.querySelectorAll('nav section ul li a');
        var setActiveLink = function () {
            var fromTop = window.scrollY + 200;
            mainNavLinks.forEach(function (link) {
                var section = document.querySelector(link['hash']);
                if (section) {
                    var offsetTop = section.offsetTop, offsetHeight = section.offsetHeight;
                    if (offsetTop <= fromTop && offsetTop + offsetHeight > fromTop) {
                        link.classList.add('navigation-link-active');
                    }
                    else {
                        link.classList.remove('navigation-link-active');
                    }
                }
            });
        };
        setActiveLink();
        window.addEventListener('scroll', function (event) {
            setActiveLink();
        });
    };
    AppComponent.prototype.onRouterChange = function () {
        var _this = this;
        this.router.events.subscribe(function (routerEvent) {
            // scroll to hash ex: /#about
            _this.scrollToHash();
        });
    };
    AppComponent.prototype.scrollToHash = function () {
        var hash = this.scrollService.getCurrentHash();
        if (hash) {
            this.scrollService.scroll();
        }
    };
    AppComponent.prototype.initGoogleAnalytics = function (router) {
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.analyticsCode;
        var documentHead = document.head;
        documentHead.prepend(script);
        var navEndEvent$ = router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd; }));
        navEndEvent$.subscribe(function (e) {
            gtag('config', 'UA-134231114-1', { page_path: e.urlAfterRedirects });
        });
    };
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_pwa_service__WEBPACK_IMPORTED_MODULE_1__.PwaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__.ScrollService)); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [["myOutlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "router-outlet", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@routeAnimation", ctx.getDepth(_r0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: [".toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: white;\n  width: 100%;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG59XG4iXX0= */"], data: { animation: [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('routeAnimation', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)("1 => 2", transitionAnimation('100%', '-100%')),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)("2 => 1", transitionAnimation('-100%', '100%')),
                ]),
            ] } });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 72249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ 22468);
/* harmony import */ var _components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-form/contact-form.module */ 49026);
/* harmony import */ var _components_job_job_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/job/job.component */ 60273);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 33252);
/* harmony import */ var _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/quote/quote.component */ 69363);
/* harmony import */ var _components_realisations_realisations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/realisations/realisations.component */ 13365);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ 25245);
/* harmony import */ var _pipes_technology_icon_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/technology-icon.pipe */ 20679);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule,
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
                _components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_4__.ContactFormModule,
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__.HomeComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent,
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
        _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_7__.QuoteComponent,
        _components_job_job_component__WEBPACK_IMPORTED_MODULE_5__.JobComponent,
        _pipes_technology_icon_pipe__WEBPACK_IMPORTED_MODULE_10__.TechnologyIconPipe,
        _components_realisations_realisations_component__WEBPACK_IMPORTED_MODULE_8__.RealisationsComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_4__.ContactFormModule] }); })();


/***/ }),

/***/ 22468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/job.service */ 22423);


var AboutComponent = /** @class */ (function () {
    function AboutComponent(jobService) {
        this.jobService = jobService;
        this.jobs = this.jobService.jobs;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(AboutComponent.prototype, "nbYearOfExperience", {
        get: function () {
            var tagIpDebut = new Date('04/01/2014');
            var tagIpEnd = new Date('04/01/2015');
            var nlDebut = new Date('09/01/2015');
            var today = new Date();
            return tagIpEnd.getFullYear() - tagIpDebut.getFullYear() + (today.getFullYear() - nlDebut.getFullYear());
        },
        enumerable: false,
        configurable: true
    });
    AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService)); };
    AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 8, vars: 0, consts: [[1, "content"], ["id", "about", 1, "description", "container", "page"], [1, "section-title"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "About me");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Je suis ing\u00E9nieur informaticien sp\u00E9cialis\u00E9 en G\u00E9nie logiciel et base de donn\u00E9es.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " D\u00E9veloppeur web fullstack , et passionn\u00E9 par les nouvelles technologies du web et ses capacit\u00E9s. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: ["p[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4iXX0= */"] });
    return AboutComponent;
}());



/***/ }),

/***/ 71778:
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFormComponent": function() { return /* binding */ ContactFormComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ 19486);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);













var _c0 = ["contactFormDirective"];
function ContactFormComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Doit contenir au moins 25 caract\u00E8res ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactFormComponent_mat_spinner_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 20)("strokeWidth", 2);
} }
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(fb, fns, snackBar) {
        this.fb = fb;
        this.fns = fns;
        this.snackBar = snackBar;
        this.isSending = false;
        this.initForm();
    }
    ContactFormComponent.prototype.ngOnInit = function () { };
    ContactFormComponent.prototype.initForm = function () {
        this.contactForm = this.fb.group({
            name: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3)]),
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
            message: this.fb.control('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(25)
            ])
        });
    };
    ContactFormComponent.prototype.send = function () {
        var contactFormValue = this.contactForm.value;
        var messageHtmlString = contactFormValue.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
        var isOnline = navigator.onLine;
        this.isSending = true;
        if (isOnline) {
            this.sendEmailFromFireFunctions(contactFormValue, messageHtmlString);
        }
        else {
            this.snackBar.open("Activez votre connection internet");
            this.isSending = false;
        }
    };
    ContactFormComponent.prototype.sendEmailFromFireFunctions = function (contactFormValue, messageHtmlString) {
        var _this = this;
        this.fns
            .httpsCallable('sendEmail')((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, contactFormValue), { message: messageHtmlString }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (error) {
            if (error) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ data: { responseCode: 'ko', info: null, error: error } });
            }
        }))
            .subscribe(function (response) {
            if (response.responseCode) {
                if (response.responseCode === 'ok') {
                    _this.snackBar.open('Message envoyé', undefined, { duration: 3000 });
                }
                else {
                    _this.snackBar.open('Message non envoyé', undefined, {
                        duration: 3000
                    });
                }
                _this.resetForm();
            }
        });
    };
    ContactFormComponent.prototype.resetForm = function () {
        this.contactForm.reset();
        this.contactFormDirective.resetForm();
        this.isSending = false;
    };
    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__.AngularFireFunctions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar)); };
    ContactFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], viewQuery: function ContactFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contactFormDirective = _t.first);
        } }, decls: 19, vars: 4, consts: [[1, "content"], ["id", "contact", 1, "description", "container", "page"], [1, "section-title"], [3, "formGroup"], ["contactFormDirective", "ngForm"], [1, "example-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Nom", "formControlName", "name", "required", ""], ["matInput", "", "type", "email", "placeholder", "Email", "formControlName", "email", "required", ""], ["matInput", "", "placeholder", "Message", "formControlName", "message", "rows", "5", "required", ""], [4, "ngIf"], ["mat-raised-button", "", "type", "submit", 3, "disabled", "click"], [1, "btn-send-text"], ["class", "send-loading", 3, "diameter", "strokeWidth", 4, "ngIf"], [1, "send-loading", 3, "diameter", "strokeWidth"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contactez moi");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactFormComponent_mat_error_13_Template, 2, 0, "mat-error", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactFormComponent_Template_button_click_15_listener() { return ctx.send(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Envoyer ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactFormComponent_mat_spinner_18_Template, 1, 2, "mat-spinner", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("message").hasError);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid || ctx.isSending);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSending);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatSpinner], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn-send-text[_ngcontent-%COMP%] {\n  display: -webkit-inline-box;\n  font-size: 1.8rem;\n}\n\n.send-loading[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.send-loading[_ngcontent-%COMP%]  circle {\n  stroke: #1976d2;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlEQUFpRDtFQUNqRCxzQkFBc0I7QUFDeEIiLCJmaWxlIjoiY29udGFjdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tc2VuZC10ZXh0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnNlbmQtbG9hZGluZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VuZC1sb2FkaW5nOjpuZy1kZWVwIGNpcmNsZSB7XG4gIHN0cm9rZTogIzE5NzZkMjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufSJdfQ== */"] });
    return ContactFormComponent;
}());



/***/ }),

/***/ 49026:
/*!****************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFormModule": function() { return /* binding */ ContactFormModule; }
/* harmony export */ });
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ 19486);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-form.component */ 71778);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);







var ContactFormModule = /** @class */ (function () {
    function ContactFormModule() {
    }
    ContactFormModule.ɵfac = function ContactFormModule_Factory(t) { return new (t || ContactFormModule)(); };
    ContactFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContactFormModule });
    ContactFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebase),
                _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__.AngularFireFunctionsModule
            ]] });
    return ContactFormModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactFormModule, { declarations: [_contact_form_component__WEBPACK_IMPORTED_MODULE_1__.ContactFormComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_fire__WEBPACK_IMPORTED_MODULE_4__.AngularFireModule, _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__.AngularFireFunctionsModule], exports: [_contact_form_component__WEBPACK_IMPORTED_MODULE_1__.ContactFormComponent] }); })();


/***/ }),

/***/ 60273:
/*!*************************************************!*\
  !*** ./src/app/components/job/job.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobComponent": function() { return /* binding */ JobComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ 58341);




function JobComponent_mat_card_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var post_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r5.date, " ");
} }
function JobComponent_mat_card_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.job.project.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.job.project.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r2.job.project.name, "\"");
} }
function JobComponent_mat_card_0_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var responsibility_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", responsibility_r6, " ");
} }
function JobComponent_mat_card_0_mat_chip_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var technology_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", technology_r7.name, " ");
} }
function JobComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, JobComponent_mat_card_0_div_9_Template, 5, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JobComponent_mat_card_0_span_11_Template, 4, 3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JobComponent_mat_card_0_li_13_Template, 2, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, JobComponent_mat_card_0_mat_chip_16_Template, 2, 1, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.job.company.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.job.company.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.job.posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.job.project);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.job.responsibilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.job.technologies);
} }
var JobComponent = /** @class */ (function () {
    function JobComponent() {
    }
    JobComponent.prototype.ngOnInit = function () { };
    JobComponent.ɵfac = function JobComponent_Factory(t) { return new (t || JobComponent)(); };
    JobComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobComponent, selectors: [["app-job"]], inputs: { job: "job" }, decls: 1, vars: 1, consts: [["class", "job-container", 4, "ngIf"], [1, "job-container"], [1, "job-header"], [1, "job-title"], ["target", "blank", 1, "company", 3, "href"], ["class", "post-container", 4, "ngFor", "ngForOf"], [1, "job-description"], ["class", "project-title", 4, "ngIf"], [1, "responsibility-list"], [4, "ngFor", "ngForOf"], [1, "technologies"], [1, "post-container"], [1, "post-name"], [1, "project-title"], [3, "href"]], template: function JobComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JobComponent_mat_card_0_Template, 17, 6, "mat-card", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.job);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChip], styles: [".company[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n\n.technologies[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.technology-item[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.job-description[_ngcontent-%COMP%] {\n  margin: 0 16px;\n  \n}\n\n.job-title[_ngcontent-%COMP%] {\n  \n}\n\n.project-title[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 500;\n}\n\nli[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.job-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.job-header[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.responsibility-list[_ngcontent-%COMP%] {\n  padding-left: 20px !important;\n}\n\n.post-container[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  line-height: 1.6em;\n}\n\n.post-name[_ngcontent-%COMP%] {\n  color:  #011627;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJqb2IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55IHtcbiAgY29sb3I6ICMxOTc2ZDI7XG59XG5cbi50ZWNobm9sb2dpZXMge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4udGVjaG5vbG9neS1pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uam9iLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIC8qIG1pbi13aWR0aDogNTAwcHg7ICovXG59XG5cbi5qb2ItdGl0bGUge1xuICAvKiBmb250LXNpemU6IDAuODc1ZW07ICovXG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5saSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uam9iLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmpvYi1oZWFkZXIge1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4ucmVzcG9uc2liaWxpdHktbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ucG9zdC1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS42ZW07XG59XG5cbi5wb3N0LW5hbWUge1xuICBjb2xvcjogICMwMTE2Mjc7XG59XG4iXX0= */"] });
    return JobComponent;
}());



/***/ }),

/***/ 33252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fragmentLinkActive = '';
        setTimeout(function () {
            var currentFragment = _this.activatedRoute.snapshot.fragment;
            _this.fragmentLinkActive = currentFragment;
        }, 200);
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
    NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 5, vars: 0, consts: [[1, "navigation"], [1, "container"], [1, "navbar-title"], [1, "navigation-list", "float-right"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hajaniaina Rafaliarintsoa");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".navigation-list[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n\n.navbar-title[_ngcontent-%COMP%] {\n  color:  #fafafa;\n  font-size: 2.5em;\n}\n\n.navigation-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.navigation-link[_ngcontent-%COMP%] {\n  color:  #fafafa;\n  cursor: pointer;\n}\n\n.navigation-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.navigation-link-icon[_ngcontent-%COMP%] {\n  \n  color:  #fafafa;\n  display: none;\n}\n\n.navigation-link-text[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-transform: uppercase;\n}\n\n.navigation-link-active[_ngcontent-%COMP%] {\n  color: #1976d2;\n  font-weight: 600;\n}\n\n.navigation-link-active[_ngcontent-%COMP%]   .navigation-link-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n  font-weight: 600;\n}\n\n@media only screen and (max-width: 700px) {\n  .navigation-link-text[_ngcontent-%COMP%] {\n    margin: 0px;\n    display: none;\n  }\n  .navigation-link-icon[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tbGlzdCAuZmFiIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG59XG5cbi5uYXZiYXItdGl0bGUge1xuICBjb2xvcjogICNmYWZhZmE7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5uYXZpZ2F0aW9uLWxpc3QgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5uYXZpZ2F0aW9uLWxpbmsge1xuICBjb2xvcjogICNmYWZhZmE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmlnYXRpb24taXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdmlnYXRpb24tbGluay1pY29uIHtcbiAgLyogZm9udC1zaXplOiAyNXB4OyAqL1xuICBjb2xvcjogICNmYWZhZmE7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLWxpbmstdGV4dCB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm5hdmlnYXRpb24tbGluay1hY3RpdmUge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5hdmlnYXRpb24tbGluay1hY3RpdmUgLm5hdmlnYXRpb24tbGluay1pY29uIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm5hdmlnYXRpb24tbGluay10ZXh0IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5uYXZpZ2F0aW9uLWxpbmstaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59XG4iXX0= */"] });
    return NavbarComponent;
}());



/***/ }),

/***/ 69363:
/*!*****************************************************!*\
  !*** ./src/app/components/quote/quote.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteComponent": function() { return /* binding */ QuoteComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
    }
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(); };
    QuoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["app-quote"]], decls: 5, vars: 0, consts: [[1, "citation-text"]], template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \"Plus tu y croiras, plus tu pourras, plus tu r\u00E9ussiras.\" ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "- Charles Aznavour");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["blockquote[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  position: relative;\n  font-style: italic;\n  font-size: 1.6rem;\n  text-align: center;\n  padding: 1rem 1.2rem;\n  max-width: 80rem; \n  margin: 1rem auto 2rem;\n  color:  #4a4a4a;\n  background: #e8e8e8;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBRSxnQ0FBZ0M7RUFDbEQsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InF1b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJibG9ja3F1b3RlIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAxLjJyZW07XG4gIG1heC13aWR0aDogODByZW07IC8qIGNyZWF0ZSBzcGFjZSBmb3IgdGhlIHF1b3RlcyAqL1xuICBtYXJnaW46IDFyZW0gYXV0byAycmVtO1xuICBjb2xvcjogICM0YTRhNGE7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIC8qIHdpZHRoOiAzMCU7ICovXG59XG4iXX0= */"] });
    return QuoteComponent;
}());



/***/ }),

/***/ 13365:
/*!*******************************************************************!*\
  !*** ./src/app/components/realisations/realisations.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealisationsComponent": function() { return /* binding */ RealisationsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 51095);




function RealisationsComponent_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var realisation_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", realisation_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](realisation_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", realisation_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var RealisationsComponent = /** @class */ (function () {
    function RealisationsComponent() {
        this.realisations = [
            {
                name: 'Arya',
                description: '',
                url: 'https://arya-hajaniaina.firebaseapp.com/',
                github: 'https://github.com/hajaniain/arya',
                img: 'assets/img/arya.gif'
            },
            {
                name: 'Finn',
                description: '',
                url: 'https://hajaniain.dev/finn',
                github: 'https://github.com/hajaniain/finn',
                img: 'assets/img/finn.gif'
            }
        ];
    }
    RealisationsComponent.prototype.ngOnInit = function () { };
    RealisationsComponent.ɵfac = function RealisationsComponent_Factory(t) { return new (t || RealisationsComponent)(); };
    RealisationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RealisationsComponent, selectors: [["app-realisations"]], decls: 6, vars: 1, consts: [[1, "content"], ["id", "realisation", 1, "description", "container", "page"], [1, "section-title"], [1, "realisation-container"], ["class", "realisation-item", 4, "ngFor", "ngForOf"], [1, "realisation-item"], ["target", "_blank", 3, "href"], ["mat-button", ""], [1, "realisation-item-content"], ["alt", "", 3, "src"]], template: function RealisationsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "R\u00E9alisations Open source");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RealisationsComponent_mat_card_5_Template, 7, 3, "mat-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.realisations);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent], styles: [".realisation-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.realisation-item[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 350px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n\n.realisation-item-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.realisation-item-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWxpc2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJyZWFsaXNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWFsaXNhdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yZWFsaXNhdGlvbi1pdGVtIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yZWFsaXNhdGlvbi1pdGVtLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmVhbGlzYXRpb24taXRlbS1jb250ZW50IGltZyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */"] });
    return RealisationsComponent;
}());



/***/ }),

/***/ 29350:
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": function() { return /* binding */ MaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 58341);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);











var MAT_MODULES = [
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
    MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MaterialModule });
    MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [MAT_MODULES, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule] });
    return MaterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule], exports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule] }); })();


/***/ }),

/***/ 25245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 51095);


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 20, vars: 0, consts: [[1, "content"], ["id", "home", 1, "container", "centered"], [1, "about"], [1, "avatar", 2, "text-align", "center"], ["width", "300", "alt", "Hajaniain image", "src", "https://avatars0.githubusercontent.com/u/6097819?s=460&v=4"], [1, "my-name"], [1, "social-links"], [1, "navigation-link"], ["mat-mini-fab", "", "color", "basic", "href", "https://twitter.com/_hajaniain", "target", "_blank"], [1, "fab", "fa-1x", "fa-twitter"], ["mat-mini-fab", "", "color", "basic", "href", "https://www.linkedin.com/in/hajaniaina-marius-rafaliarintsoa-a5b202b9", "target", "_blank"], [1, "fab", "fa-1x", "fa-linkedin"], ["mat-mini-fab", "", "color", "basic", "href", "https://github.com/hajaniain", "target", "_blank"], [1, "fab", "fa-1x", "fa-github"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rafaliarintsoa Hajaniaina");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatAnchor], styles: ["p[_ngcontent-%COMP%] {\n  margin-bottom: 2.3rem;\n  letter-spacing: 0.05em;\n}\n\n.avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1, 1.1);\n  transition: 1s;\n}\n\n.avatar[_ngcontent-%COMP%]:not(:hover) {\n  transition: 1s;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.navigation-link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1, 1.1);\n  transition: 1s;\n}\n\n.navigation-link[_ngcontent-%COMP%]:not(:hover) {\n  transition: 1s;\n}\n\n.social-links[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  color: #0080ab;\n}\n\nsection.container.post[_ngcontent-%COMP%], section.container.page[_ngcontent-%COMP%] {\n  max-width: 90rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  \n  height: 100vh;\n}\n\n.social-title[_ngcontent-%COMP%] {\n  color:  #011627;\n  margin-left: 5px;\n}\n\n.my-name[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  font-weight: 100;\n  letter-spacing: 2px;\n}\n\n.job[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n\n@media only screen and (max-device-width: 440px) {\n  .social-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBtYXJnaW4tYm90dG9tOiAyLjNyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbi5hdmF0YXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbiAgdHJhbnNpdGlvbjogMXM7XG59XG5cbi5hdmF0YXI6bm90KDpob3Zlcikge1xuICB0cmFuc2l0aW9uOiAxcztcbn1cblxuLm5hdmlnYXRpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4ubmF2aWdhdGlvbi1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuXG4ubmF2aWdhdGlvbi1saW5rOm5vdCg6aG92ZXIpIHtcbiAgdHJhbnNpdGlvbjogMXM7XG59XG5cbi5zb2NpYWwtbGlua3MgLmZhYiB7XG4gIGNvbG9yOiAjMDA4MGFiO1xufVxuXG5zZWN0aW9uLmNvbnRhaW5lci5wb3N0LFxuc2VjdGlvbi5jb250YWluZXIucGFnZSB7XG4gIG1heC13aWR0aDogOTByZW07XG59XG5cbi5jb250ZW50IHtcbiAgLyogbWFyZ2luLXRvcDogMTBlbTsgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNvY2lhbC10aXRsZSB7XG4gIGNvbG9yOiAgIzAxMTYyNztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm15LW5hbWUge1xuICBmb250LXNpemU6IDEuOGVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uam9iIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDQwcHgpIHtcbiAgLnNvY2lhbC10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"] });
    return HomeComponent;
}());



/***/ }),

/***/ 20679:
/*!***********************************************!*\
  !*** ./src/app/pipes/technology-icon.pipe.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnologyIconPipe": function() { return /* binding */ TechnologyIconPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var TechnologyIconPipe = /** @class */ (function () {
    function TechnologyIconPipe() {
    }
    TechnologyIconPipe.prototype.transform = function (technologies) {
        if (technologies) {
            return technologies.filter(function (technology) { return technology.type === 'icon'; });
        }
        return [];
    };
    TechnologyIconPipe.ɵfac = function TechnologyIconPipe_Factory(t) { return new (t || TechnologyIconPipe)(); };
    TechnologyIconPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "technologyIcon", type: TechnologyIconPipe, pure: true });
    return TechnologyIconPipe;
}());



/***/ }),

/***/ 22423:
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobService": function() { return /* binding */ JobService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var JobService = /** @class */ (function () {
    function JobService() {
    }
    Object.defineProperty(JobService.prototype, "jobs", {
        get: function () {
            return [
                {
                    company: {
                        name: 'Auxia ( via Groupe HN et Cooptalis)',
                        url: 'http://auxia.com/',
                    },
                    posts: [
                        {
                            name: 'Développeur web',
                            date: 'Avril 2019 - Juin 2020',
                        },
                    ],
                    responsibilities: [],
                    technologies: [
                        { type: 'icon', name: 'Angular' },
                        { type: 'icon', name: 'Angular material' },
                        { type: 'icon', name: 'NgPackagr' },
                        { type: 'icon', name: 'Cypress' },
                        { type: 'icon', name: 'Git' },
                    ],
                },
                {
                    company: {
                        name: 'NL International',
                        url: 'http://www.nleurope.com/FR/',
                    },
                    posts: [
                        {
                            name: 'Lead développeur',
                            date: 'Septembre 2018 - Mars 2019',
                        },
                        {
                            name: 'Développeur web',
                            date: 'Septembre 2015 - Septembre 2018',
                        },
                    ],
                    responsibilities: [
                    // `Développement d'applications web et mobiles`,
                    // `Développement d'applications en tant que Progressive Web Apps (PWA)`,
                    // 'Intégration des web services REST',
                    // 'Déploiement des applications sur Amazon et sur un serveur Linux',
                    // 'Programmation réactive',
                    // 'Programmation fonctionnelle',
                    // 'Programmation orientée objet',
                    // 'Test unitaire',
                    // `Test d'intégration`,
                    // 'Integration continue',
                    // 'Gestion des priorités',
                    // 'Revue de code',
                    // 'Formation des nouveaux développeurs'
                    ],
                    technologies: [
                        { type: 'icon', name: 'Angular' },
                        { type: 'icon', name: 'AngularJs' },
                        { type: 'icon', name: 'Ionic' },
                        { type: 'icon', name: 'Typescript' },
                        { type: 'icon', name: 'Node' },
                        { type: 'icon', name: 'MongoDB' },
                        { type: 'icon', name: 'Cypress' },
                        { type: 'icon', name: 'PWA' },
                        { type: 'icon', name: 'Git' },
                        { type: 'icon', name: 'Scrum' },
                        { type: 'icon', name: 'Linux' },
                    ],
                },
                {
                    company: {
                        name: 'TAG-IP',
                        url: 'https://www.tag-ip.com/',
                    },
                    posts: [
                        {
                            name: 'Développeur mobile',
                            date: 'Octobre 2013 - Avril 2015',
                        },
                    ],
                    // project: {
                    //   title: `Conception et développement de l'application mobile`,
                    //   name: 'Forms',
                    //   url: 'https://tag-ip.com/forms'
                    // },
                    responsibilities: [
                    // 'Recueil des besoins client',
                    // 'Conception et modélisation',
                    // 'Développement de l’application mobile, du back-office et du serveur'
                    ],
                    technologies: [
                        { type: 'icon', name: 'AngularJs' },
                        { type: 'icon', name: 'Cordova' },
                        { type: 'icon', name: 'MongoDB' },
                        { type: 'icon', name: 'Node' },
                        { type: 'icon', name: 'Git' },
                        { type: 'icon', name: 'Linux' },
                    ],
                },
            ];
        },
        enumerable: false,
        configurable: true
    });
    JobService.ɵfac = function JobService_Factory(t) { return new (t || JobService)(); };
    JobService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobService, factory: JobService.ɵfac, providedIn: 'root' });
    return JobService;
}());



/***/ }),

/***/ 53284:
/*!*****************************************!*\
  !*** ./src/app/services/pwa.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PwaService": function() { return /* binding */ PwaService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ 72249);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);





var PwaService = /** @class */ (function () {
    function PwaService(document, updates, snackBar) {
        this.document = document;
        this.updates = updates;
        this.snackBar = snackBar;
    }
    PwaService.prototype.check = function () {
        var _this = this;
        this.updates.available.subscribe(function (event) {
            _this.openSnackBar();
        });
        this.updates.activated.subscribe(function (event) { });
    };
    PwaService.prototype.openSnackBar = function () {
        var _this = this;
        this.snackBar
            .open('Nouvelle version disponible', 'Appliquer')
            .onAction()
            .subscribe(function (clicked) { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updates.activateUpdate()];
                    case 1:
                        _a.sent();
                        this.document.location.reload();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PwaService.prototype.isOnline = function () {
        return navigator.onLine;
    };
    PwaService.ɵfac = function PwaService_Factory(t) { return new (t || PwaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
    PwaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PwaService, factory: PwaService.ɵfac, providedIn: 'root' });
    return PwaService;
}());



/***/ }),

/***/ 10550:
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "topMargin": function() { return /* binding */ topMargin; },
/* harmony export */   "ScrollService": function() { return /* binding */ ScrollService; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




var topMargin = 16;
/**
 * A service that scrolls document elements into view
 */
var ScrollService = /** @class */ (function () {
    function ScrollService(document, location) {
        var _this = this;
        this.document = document;
        this.location = location;
        // On resize, the toolbar might change height, so "invalidate" the top offset.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, 'resize').subscribe(function () { return (_this._topOffset = null); });
    }
    Object.defineProperty(ScrollService.prototype, "topOffset", {
        // Offset from the top of the document to bottom of any static elements
        // at the top (e.g. toolbar) + some margin
        get: function () {
            if (!this._topOffset) {
                var toolbar_1 = this.document.querySelector('.toolbar');
                this._topOffset = ((toolbar_1 && toolbar_1.clientHeight) || 0) + topMargin;
            }
            // tslint:disable-next-line:no-non-null-assertion
            return this._topOffset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScrollService.prototype, "topOfPageElement", {
        get: function () {
            if (!this._topOfPageElement) {
                this._topOfPageElement =
                    this.document.getElementById('top-of-page') || this.document.body;
            }
            return this._topOfPageElement;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Scroll to the element with id extracted from the current location hash fragment.
     * Scroll to top if no hash.
     * Don't scroll if hash not found.
     */
    ScrollService.prototype.scroll = function () {
        var hash = this.getCurrentHash();
        var element = hash
            ? this.document.getElementById(hash)
            : this.topOfPageElement;
        this.scrollToElement(element);
    };
    /**
     * Scroll to the element.
     * Don't scroll if no element.
     */
    ScrollService.prototype.scrollToElement = function (element) {
        if (element) {
            element.scrollIntoView();
            if (window && window.scrollBy) {
                // Scroll as much as necessary to align the top of `element` at `topOffset`.
                // (Usually, `.top` will be 0, except for cases where the element cannot be scrolled all the
                //  way to the top, because the viewport is larger than the height of the content after the
                //  element.)
                window.scrollBy(0, element.getBoundingClientRect().top - this.topOffset);
                // If we are very close to the top (<20px), then scroll all the way up.
                // (This can happen if `element` is at the top of the page, but has a small top-margin.)
                if (window.pageYOffset < 20) {
                    window.scrollBy(0, -window.pageYOffset);
                }
            }
        }
    };
    /** Scroll to the top of the document. */
    ScrollService.prototype.scrollToTop = function () {
        this.scrollToElement(this.topOfPageElement);
    };
    /**
     * Return the hash fragment from the `PlatformLocation`, minus the leading `#`.
     */
    ScrollService.prototype.getCurrentHash = function () {
        return decodeURIComponent(this.location.hash.replace(/^#/, ''));
    };
    ScrollService.ɵfac = function ScrollService_Factory(t) { return new (t || ScrollService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.PlatformLocation)); };
    ScrollService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScrollService, factory: ScrollService.ɵfac, providedIn: 'root' });
    return ScrollService;
}());



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/material/material.module */ 29350);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _modules_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _modules_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _modules_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule], exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _modules_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    analyticsCode: '',
    firebase: {
        apiKey: 'AIzaSyAgMXN1LSpes7u_hoKmW88izr57peSjQl4',
        authDomain: 'hajaniain-io.firebaseapp.com',
        databaseURL: 'https://hajaniain-io.firebaseio.com',
        projectId: 'hajaniain-io',
        storageBucket: 'hajaniain-io.appspot.com',
        messagingSenderId: '713566697163'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map