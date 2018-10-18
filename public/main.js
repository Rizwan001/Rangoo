(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\n  <ng4-loading-spinner> </ng4-loading-spinner>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Frontend';
    }
    AppComponent.prototype.beforeunloadHandler = function (event) {
        //  this.endSession();
    };
    AppComponent.prototype.endSession = function () {
        //this.authToken = null;
        // this.user = null;
        localStorage.clear();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "beforeunloadHandler", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_user_model_user_model_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user-model/user-model.component */ "./src/app/components/user-model/user-model.component.ts");
/* harmony import */ var _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/verify/verify.component */ "./src/app/components/verify/verify.component.ts");
/* harmony import */ var _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/forget/forget.component */ "./src/app/components/forget/forget.component.ts");
/* harmony import */ var _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/reset/reset.component */ "./src/app/components/reset/reset.component.ts");
/* harmony import */ var _components_userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/userpanel/userpanel.component */ "./src/app/components/userpanel/userpanel.component.ts");
/* harmony import */ var _components_user_panel_navbar_user_panel_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user-panel-navbar/user-panel-navbar.component */ "./src/app/components/user-panel-navbar/user-panel-navbar.component.ts");
/* harmony import */ var _components_user_energy_mix_user_energy_mix_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/user-energy-mix/user-energy-mix.component */ "./src/app/components/user-energy-mix/user-energy-mix.component.ts");
/* harmony import */ var _components_user_power_storage_user_power_storage_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user-power-storage/user-power-storage.component */ "./src/app/components/user-power-storage/user-power-storage.component.ts");
/* harmony import */ var _components_user_trade_user_trade_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user-trade/user-trade.component */ "./src/app/components/user-trade/user-trade.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'forget', component: _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_24__["ForgetComponent"] },
    { path: 'verify/:token', component: _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_23__["VerifyComponent"] },
    { path: 'reset/:token', component: _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_25__["ResetComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'userPanel', component: _components_userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_26__["UserpanelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _components_user_model_user_model_component__WEBPACK_IMPORTED_MODULE_22__["UserModelComponent"],
                _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_23__["VerifyComponent"],
                _components_forget_forget_component__WEBPACK_IMPORTED_MODULE_24__["ForgetComponent"],
                _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_25__["ResetComponent"],
                _components_userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_26__["UserpanelComponent"],
                _components_user_panel_navbar_user_panel_navbar_component__WEBPACK_IMPORTED_MODULE_27__["UserPanelNavbarComponent"],
                _components_user_energy_mix_user_energy_mix_component__WEBPACK_IMPORTED_MODULE_28__["UserEnergyMixComponent"],
                _components_user_power_storage_user_power_storage_component__WEBPACK_IMPORTED_MODULE_29__["UserPowerStorageComponent"],
                _components_user_trade_user_trade_component__WEBPACK_IMPORTED_MODULE_30__["UserTradeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__["FlashMessagesModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_13__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_6__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbActiveModal"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/forget/forget.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/forget/forget.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forget/forget.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/forget/forget.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"alert alert-success\" *ngIf=\"emailVerificationResposne\">\n  <strong>Success!</strong> {{emailVerificationResposne}}\n</div>\n\n\n\n<!-- Registration Form /-->\n\n\n\n\n<div class=\"container d-flex h-100\">\n    <div class=\"row align-self-center w-100\">\n        <div class=\"col-10 mx-auto\">\n          <div class=\" \">\n\n            <div class=\"col \">\n        \n            </div>\n            <div class=\"col-6 offset-3 peer pX-20 pY-50 h-100 bgc-white scrollable pos-r text-center Aligner-item \">\n              <a href=\"#\"><img class=\"logo\" src=\"../../../assets/img/logo.png\"></a>\n        \n        \n              <h4 class=\"fw-400 c-grey-900 mB-20 login\">Forget Password</h4>\n              <p class=\"sign-in-text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>\n             \n              <!-- Registration Form -->\n<form [formGroup]=\"form\" (submit)=\"submitForget()\">\n\n\n    <!-- Email Input -->\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <div>\n        <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\"  class=\"text-danger\">This field is required</li>\n          <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\" class=\"text-danger\">This must be a valid e-mail</li>\n        </ul>\n      </div>\n    </div>\n  \n    <!-- Submit Input -->\n    <input  [disabled]=\" !processing || !emailValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n  \n  </form>\n        \n              <div class=\"col\">\n                <a class=\"forget-pass\" [routerLink]=\"['/login']\">Login </a>\n              </div>\n        \n        \n            </div>\n        \n        \n          </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/forget/forget.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/forget/forget.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alertify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgetComponent = /** @class */ (function () {
    function ForgetComponent(formBuilder, authService, router, flashMessage, spinnerService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.spinnerService = spinnerService;
        this.processing = false;
        this.createForm();
    }
    ForgetComponent.prototype.ngOnInit = function () {
    };
    // Function to validate e-mail is proper format
    ForgetComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    ForgetComponent.prototype.submitForget = function () {
        var _this = this;
        var email = this.form.get('email').value;
        this.spinnerService.show();
        this.authService.forgetPassword(email).subscribe(function (res) {
            if (res['success'] === true) {
                _this.spinnerService.hide();
                alertify_js__WEBPACK_IMPORTED_MODULE_3__["logPosition"]('top right').success('An email has been send to your account '); //example
                // this.form.get('email').setValue('');
                _this.emailVerificationResposne = res['message'];
                _this.router.navigate(['/login']);
            }
            else {
                _this.spinnerService.hide();
                alertify_js__WEBPACK_IMPORTED_MODULE_3__["logPosition"]('top right').error('Something went wrong please try again '); //example
                _this.form.get('email').setValue('');
            }
        });
    };
    // Function to check if e-mail is taken
    ForgetComponent.prototype.checkEmail = function () {
        var _this = this;
        var email = this.form.get('email').value;
        if (email == null || email == '' || email == undefined) {
            this.flashMessage.show('Please enter an email address', {
                cssClass: 'alert-danger text-center',
                timeout: 3000
            });
            alertify_js__WEBPACK_IMPORTED_MODULE_3__["logPosition"]('top right').error("Please enter an email address "); //example
            return false;
        }
        this.spinnerService.show();
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            console.log(data['success']);
            if (data['success'] === false) {
                _this.processing = true;
                alertify_js__WEBPACK_IMPORTED_MODULE_3__["logPosition"]('top right').success("Email is verified"); //example
                _this.emailValid = true;
                _this.spinnerService.hide();
            }
            else {
                _this.emailValid = false;
                alertify_js__WEBPACK_IMPORTED_MODULE_3__["logPosition"]('top right').error("Email does not exits "); //example
                _this.form.get('email').setValue('');
                _this.spinnerService.hide();
            }
        });
    };
    // Function to create registration form
    ForgetComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    this.validateEmail // Custom validation
                ])],
        }); // Add custom validator to form for matching passwords
    };
    ForgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__(/*! ./forget.component.html */ "./src/app/components/forget/forget.component.html"),
            styles: [__webpack_require__(/*! ./forget.component.css */ "./src/app/components/forget/forget.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]])
    ], ForgetComponent);
    return ForgetComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1>MEAN Authentication App</h1>\n    <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch</p>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>Express Backend</h3>\n      <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Angular-CLI</h3>\n      <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>JWT Tokens</h3>\n      <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex h-100\">\n    <div class=\"row align-self-center w-100\">\n        <div class=\"col-10 mx-auto\">\n          <div class=\" \">\n\n            <div class=\"col \">\n        \n            </div>\n            <div class=\"col-6 offset-3 peer pX-20 pY-50 h-100 bgc-white scrollable pos-r text-center Aligner-item \">\n              <a href=\"#\"><img class=\"logo\" src=\"../../../assets/img/logo.png\"></a>\n        \n        \n              <h4 class=\"fw-400 c-grey-900 mB-20 login\">Login</h4>\n              <p class=\"sign-in-text\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>\n              <form class=\"pT-50\" (submit)=\"onLoginSubmit()\">\n                <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control sign-in-input\"\n                  [(ngModel)]=\"email\" name=\"email\"\n                  placeholder=\"email address\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control sign-in-input\"\n                  [(ngModel)]=\"password\" name=\"password\"\n                  placeholder=\"Password\">\n                </div>\n          \n                <div class=\"form-group pY-20\">\n                   <button type=\"submit\" class=\"btn btn-sign-in\">Sign In</button>\n        \n                </div>\n              </form>\n\n        \n              <div class=\"col\">\n                  <a class=\"btn btn-sign-in\" [routerLink]=\"['/register']\"> Sign up </a> /\n                <a class=\"forget-pass\" [routerLink]=\"['/forget']\"> Forget Password ? </a>\n              </div>\n        \n        \n            </div>\n        \n        \n          </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(alertify_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage, spinnerService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.spinnerService = spinnerService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.spinnerService.show();
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data['success'] === 'notActivate') {
                alertify_js__WEBPACK_IMPORTED_MODULE_5__["logPosition"]('top right').error('Admin did not approved your account yet');
                _this.spinnerService.hide();
                _this.password = '';
                _this.router.navigate(['login']);
            }
            if (data['success'] === true) {
                alertify_js__WEBPACK_IMPORTED_MODULE_5__["logPosition"]('top right').success('Sucessfully login');
                _this.authService.storeUserData(data['token'], data['user']);
                _this.spinnerService.hide();
                console.log('User resposne is ', data);
                if (data['user']['isAdmin'] === true) {
                    _this.router.navigate(['profile']);
                }
                else {
                    _this.router.navigate(['userPanel']);
                }
            }
            else if (data['success'] === false) {
                alertify_js__WEBPACK_IMPORTED_MODULE_5__["logPosition"]('top right').error('Invalid username or password');
                _this.spinnerService.hide();
                _this.password = '';
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      \n      <!-- <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\n      </li> -->\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/forget']\">Forget </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n      </li>\n      <li class=\"nav-item\"  *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.component */ "./src/app/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.openModal = function () {
        this.register.openModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]),
        __metadata("design:type", _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"])
    ], NavbarComponent.prototype, "register", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar ></app-navbar>\n<div *ngIf=\"user\">\n    <h2 class=\"page-header\">{{user.name}}</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username : {{user.username}}</li>\n      <li class=\"list-group-item\">Email : {{user.email}}</li>\n    </ul>\n  </div>\n  <!-- Buttons -->\n  <br/>\n  <table class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\"\n    [dtTrigger]=\"dtTrigger\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Action</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users$\">\n        <td>{{ user.username }}</td>\n        <td>{{ user.email }}</td>\n        <td> <span  class=\"glyphicon glyphicon-pencil\" (click)=\"openModal(user._id)\">Edit</span></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <app-user-model ></app-user-model>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_model_user_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-model/user-model.component */ "./src/app/components/user-model/user-model.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, spinnerService) {
        this.authService = authService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.users$ = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.title = '';
        this.userId = '';
        this.timerValue = false;
        this.registerModalShown = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            _this.spinnerService.hide();
        }, function (err) {
            _this.spinnerService.hide();
            return false;
        });
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.authService.getAllUsers().subscribe(function (data) {
            _this.users$ = data['users'];
            _this.dtTrigger.next();
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProfileComponent.prototype.openModal = function (id) {
        this.userModel.openModal(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_user_model_user_model_component__WEBPACK_IMPORTED_MODULE_5__["UserModelComponent"]),
        __metadata("design:type", _user_model_user_model_component__WEBPACK_IMPORTED_MODULE_5__["UserModelComponent"])
    ], ProfileComponent.prototype, "userModel", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex h-100\">\n    <div class=\"row align-self-center w-100\">\n        <div class=\"col-10 mx-auto\">\n          <div class=\" \">\n\n            <div class=\"col \">\n        \n            </div>\n            <div class=\"col-6 offset-3 peer pX-20 pY-50 h-100 bgc-white scrollable pos-r text-center Aligner-item \">\n              <a href=\"#\"><img class=\"logo\" src=\"../../../assets/img/logo.png\"></a>\n              <h4 class=\"fw-400 c-grey-900 mB-20 login\">Signup</h4>\n             \n             <!-- Registration Form -->\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit(id)\">\n\n    <!-- Username Input -->\n    <div class=\"form-group\">\n      <!-- <label for=\"username\">Username</label> -->\n      <div>\n        <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\"  />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\" class=\"text-danger\">This field is required</li>\n        </ul>\n      </div>\n    </div>\n  \n    <!-- Email Input -->\n    <div class=\"form-group\">\n      <!-- <label for=\"email\">Email</label> -->\n      <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\n        <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\n          <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\n          <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\n          <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\n        </ul>\n      </div>\n    </div>\n  \n    <div class=\"form-group\">\n      <!-- <label for=\"distanceFromGrid\">Distance from grid</label> -->\n      <div [ngClass]=\"{'has-error': (form.controls.distanceFromGrid.errors && form.controls.distanceFromGrid.dirty), 'has-success': !form.controls.distanceFromGrid.errors}\">\n        <input type=\"text\" name=\"distanceFromGrid\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Distance from grid\" formControlName=\"distanceFromGrid\"  />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.distanceFromGrid.errors?.required && form.controls.distanceFromGrid.dirty\">This field is required</li>\n        </ul>\n      </div>\n    </div>\n  \n    <div class=\"form-group\">\n      <!-- <label for=\"balanceAmount\">Balance</label> -->\n      <div [ngClass]=\"{'has-error': (form.controls.balanceAmount.errors && form.controls.balanceAmount.dirty), 'has-success': !form.controls.balanceAmount.errors}\">\n        <input type=\"text\" name=\"balanceAmount\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Balance Amount\" formControlName=\"balanceAmount\"  />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.balanceAmount.errors?.required && form.controls.balanceAmount.dirty\">This field is required</li>\n        </ul>\n      </div>\n    </div>\n  \n    <div class=\"form-group\">\n      <!-- <label for=\"PricePerKWH\">Price Per KWH</label> -->\n      <div [ngClass]=\"{'has-error': (form.controls.PricePerKWH.errors && form.controls.PricePerKWH.dirty), 'has-success': !form.controls.PricePerKWH.errors}\">\n        <input type=\"text\" name=\"PricePerKWH\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Price Per KHW\" formControlName=\"PricePerKWH\"  />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.PricePerKWH.errors?.required && form.controls.PricePerKWH.dirty\">This field is required</li>\n        </ul>\n      </div>\n    </div>\n  \n    <div class=\"form-group\">\n      <!-- <label for=\"LocationDetail\">Location</label> -->\n      <div>\n      \n      <select formControlName=\"LocationDetail\" class=\"form-control\">\n      \n       <option  value=\"0\">Hotttingen</option>\n       <option  value=\"1\">Hirslanden</option>\n       <option  value=\"2\">Witikon</option>\n       <option  value=\"3\">Werd</option>\n       <option  value=\"4\">Sihlfeld</option>\n       <option  value=\"5\">Albisrieden</option>\n       <option  value=\"6\">Fluntern</option>\n     </select>\n   </div>\n    </div>\n  \n  \n  \n  \n    <!-- Password Input -->\n    <div class=\"form-group\" >\n      <!-- <label for=\"password\">Password</label> -->\n      <div>\n        <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\" class=\"text-danger\">This field is required</li>\n          <li class=\"text-danger\" *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\n     <li  class=\"text-danger\" *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 50</li>\n        </ul>\n      </div>\n    </div>\n  \n    <!-- Confirm Password Input -->\n    <div class=\"form-group\">\n      <!-- <label for=\"confirm\">Confirm Password</label> -->\n      <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\n        <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\n        <!-- Validation -->\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\n          <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n        </ul>\n      </div>\n    </div>\n  \n    \n  \n    <!-- Submit Input -->\n    <input  [disabled]=\"!form.valid || processing || !emailValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n  \n  </form>\n  <!-- Registration Form /-->\n  \n  <br/>\n  <div class=\"btn btn-primary\">\n      <a class=\"forget-pass\" [routerLink]=\"['/login']\">Login </a>\n    </div>\n        \n            </div>\n        \n            \n        \n          </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(alertify_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router, spinnerService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.title = "";
        this.userId = '';
        this.processing = false;
        this.locations = ['Hotttingen', 'Hirslanden', 'Witikon', 'Werd', 'Sihlfeld', 'Albisrieden', 'Fluntern'];
        this.lattitudes = [47.372300, 47.365321, 47.361235, 47.372614, 47.372318, 47.375455, 47.382181];
        this.longitudes = [8.565892, 8.572578, 8.595230, 8.527667, 8.507186, 8.482983, 8.566247];
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            // distanceFromGrid Input
            distanceFromGrid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            // balanceAmount Input
            balanceAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            // Location Input
            LocationDetail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            // Location Input
            PricePerKWH: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            // Password Input
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                ])],
            // Confirm Password Input
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    RegisterComponent.prototype.clearForm = function () {
        this.form.controls['username'].setValue('');
        this.form.controls['email'].setValue('');
        this.form.controls['password'].setValue('');
        this.form.controls['confirm'].setValue('');
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.spinnerService.show();
        var locationVlaue = this.form.get('LocationDetail').value;
        this.location = this.locations[locationVlaue];
        this.lattitude = this.lattitudes[locationVlaue];
        this.longitude = this.longitudes[locationVlaue];
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        //this.disableForm(); // Disable the form
        // Create user object form user's inputs
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value,
            distanceFromGrid: this.form.get('distanceFromGrid').value,
            balanceAmount: this.form.get('balanceAmount').value,
            PricePerKWH: this.form.get('PricePerKWH').value,
            LocationDetail: this.location,
            Lattitude: this.lattitude,
            Longitude: this.longitude
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            // Resposne from registration attempt
            if (data['success'] == false) {
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
                alertify_js__WEBPACK_IMPORTED_MODULE_5__["logPosition"]('top right').error("Something went wrong please try again"); //example
                _this.spinnerService.hide();
                _this.router.navigate(['/register']);
            }
            else {
                alertify_js__WEBPACK_IMPORTED_MODULE_5__["logPosition"]('top right').success("User Registered Sucessfully"); //example
                _this.spinnerService.hide();
                _this.router.navigate(['/login']);
            }
        });
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data['success']) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data['message']; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = data['message']; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.emailValid = true;
        this.emailMessage = '';
    };
    RegisterComponent.prototype.clearMessages = function () {
        this.emailMessage = '';
        this.emailValid = true;
    };
    RegisterComponent.prototype.openModal = function () {
        this.clearMessages();
        this.clearForm();
        $('#myModal').modal('show');
    };
    RegisterComponent.prototype.registerRoute = function () {
        this.router.navigate(['register']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "userId", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/reset/reset.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/reset/reset.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reset/reset.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/reset/reset.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Registration Form -->\n<form [formGroup]=\"form\" (submit)=\"onResetSubmit()\">\n\n\n\n\n\n  <!-- Password Input -->\n  <div class=\"form-group\" >\n    <label for=\"password\">New Password</label>\n    <div>\n      <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\" class=\"text-danger\">This field is required</li>\n        <li class=\"text-danger\" *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\n   <li  class=\"text-danger\" *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 50</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Confirm Password Input -->\n  <div class=\"form-group\">\n    <label for=\"confirm\">Confirm Password</label>\n    <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\n      <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\"  formControlName=\"confirm\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\n        <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n      </ul>\n    </div>\n  </div>\n\n\n\n  <!-- Submit Input -->\n  <input   type=\"submit\" [disabled]=\"!processing\" class=\"btn btn-primary\" value=\"Submit\" />\n\n</form>\n<!-- Registration Form /-->\n"

/***/ }),

/***/ "./src/app/components/reset/reset.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/reset/reset.component.ts ***!
  \*****************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alertify_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetComponent = /** @class */ (function () {
    function ResetComponent(formBuilder, authService, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.createForm();
    }
    ResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.token = params.token;
        });
    };
    // Function to create registration form
    ResetComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Password Input
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                ])],
            // Confirm Password Input
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Funciton to ensure passwords match
    ResetComponent.prototype.matchingPasswords = function (password, confirm) {
        var _this = this;
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value != '' && group.controls[confirm].value != '')
                if (group.controls[password].value === group.controls[confirm].value) {
                    _this.processing = !false;
                    return null; // Return as a match
                }
                else {
                    return { 'matchingPasswords': true }; // Return as error: do not match
                }
        };
    };
    ResetComponent.prototype.onResetSubmit = function () {
        var _this = this;
        this.authService.resetPassword(this.token, this.form.value.password).subscribe(function (res) {
            if (res['success'] === true) {
                alertify_js__WEBPACK_IMPORTED_MODULE_4__["logPosition"]('top right').success("Password has been updated sucessfully"); //example
                _this.router.navigate(['/login']);
            }
            else {
                alertify_js__WEBPACK_IMPORTED_MODULE_4__["logPosition"]('top right').error("Invalid Token or expired please try again "); //example
                _this.router.navigate(['/forget']);
            }
        });
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/components/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.css */ "./src/app/components/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/components/user-energy-mix/user-energy-mix.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/user-energy-mix/user-energy-mix.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-energy-mix/user-energy-mix.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/user-energy-mix/user-energy-mix.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n      <div class=\"row background-white\">\n          <div class=\"col-1\">\n              <img class=\"img-cons\" src=\"../../../assets/img/storm.png\">\n          </div>\n          <div class=\"col-5 mT-10\">\n              <h2 class=\"cons-h\">STORM MIX</h2>\n              <h4 class=\"cons-h4\">Wind/Wasser/Solar </h4>\n          </div>\n          <div class=\"col-6 text-right\">\n              <button type=\"button\" class=\"btn btn-end-contract btn-energy\"\n                      data-toggle=\"modal\" data-target=\"#sell-energy\">Add\n                  Energy\n              </button>\n          </div>\n\n          <div class=\"col-12 mT-50\">\n              <div class=\"row mT-10 nine-cols\">\n                  <div class=\"col text-center border-charts\" *ngIf=\"windPowoer_engergyResource\">\n                      <div class=\"c100 p65 blue\">\n                          <span>{{windPower_totalPercentage.toFixed(2)}}%</span>\n                          <div class=\"slice\">\n                              <div class=\"bar\"></div>\n                              <div class=\"fill\"></div>\n                          </div>\n                      </div>\n                      <div>\n                          <img class=\"img-chart\" src=\"../../../assets/img/wind.png\">\n                          <p class=\"wind-text m-b-10-negv\">{{windPowoer_engergyResource}}</p>\n                          <p class=\"wind-text\">{{windPower_production}} KWH</p>\n\n                      </div>\n                  </div>\n\n                  <div class=\"col text-center border-charts\">\n                      <div class=\"c100 p45 blue\">\n                          <span>45%</span>\n                          <div class=\"slice\">\n                              <div class=\"bar\"></div>\n                              <div class=\"fill\"></div>\n                          </div>\n                      </div>\n                      <div>\n                          <img class=\"img-chart\" src=\"../../../assets/img/solar.png\">\n                          <p class=\"wind-text m-b-10-negv\">Solar</p>\n                          <p class=\"wind-text\">10 KWH</p>\n\n                      </div>\n                  </div>\n\n                  <div class=\"col text-center border-charts\">\n                      <div class=\"c100 p35 blue\">\n                          <span>35%</span>\n                          <div class=\"slice\">\n                              <div class=\"bar\"></div>\n                              <div class=\"fill\"></div>\n                          </div>\n                      </div>\n                      <div>\n                          <img class=\"img-chart\" src=\"../../../assets/img/nuclear.png\">\n                          <p class=\"wind-text m-b-10-negv\">Nuclear</p>\n                          <p class=\"wind-text\">10 KWH</p>\n\n                      </div>\n                  </div>\n\n                  <div class=\"col text-center border-charts\">\n                      <div class=\"c100 p25 blue\">\n                          <span>25%</span>\n                          <div class=\"slice\">\n                              <div class=\"bar\"></div>\n                              <div class=\"fill\"></div>\n                          </div>\n                      </div>\n                      <div>\n                          <img class=\"img-chart\" src=\"../../../assets/img/wasser.png\">\n                          <p class=\"wind-text m-b-10-negv\">Wasser</p>\n                          <p class=\"wind-text\">10 KWH</p>\n\n                      </div>\n                  </div>\n\n                  <div class=\"col text-center border-charts\">\n                      <div class=\"c100 p75 blue\">\n                          <span>75%</span>\n                          <div class=\"slice\">\n                              <div class=\"bar\"></div>\n                              <div class=\"fill\"></div>\n                          </div>\n                      </div>\n                      <div>\n                          <img class=\"img-chart\" src=\"../../../assets/img/geopower.png\">\n                          <p class=\"wind-text m-b-10-negv\">Geopower</p>\n                          <p class=\"wind-text\">10 KWH</p>\n                      </div>\n                  </div>\n\n\n              </div>\n              <div class=\"row mT-20 nine-cols\">\n                  <div class=\"col text-center border-charts\">\n                      <div class=\"c100 p85 blue\">\n                          <span>85%</span>\n                          <div class=\"slice\">\n                              <div class=\"bar\"></div>\n                              <div class=\"fill\"></div>\n                          </div>\n                      </div>\n                      <div>\n                          <img class=\"img-chart\" src=\"../../../assets/img/diesal.png\">\n                          <p class=\"wind-text m-b-10-negv\">Diesel</p>\n                          <p class=\"wind-text\">10 KWH</p>\n                      </div>\n                  </div>\n\n                  <div class=\"col text-center border-charts\">\n                      <div class=\"c100 p95 blue\">\n                          <span>95%</span>\n                          <div class=\"slice\">\n                              <div class=\"bar\"></div>\n                              <div class=\"fill\"></div>\n                          </div>\n                      </div>\n                      <div>\n                          <img class=\"img-chart\" src=\"../../../assets/img/bio.png\">\n                          <p class=\"wind-text m-b-10-negv\">Bio</p>\n                          <p class=\"wind-text\">10 KWH</p>\n\n                      </div>\n                  </div>\n\n                  <div class=\"col text-center border-charts\">\n                      <div class=\"c100 p5 blue\">\n                          <span>5%</span>\n                          <div class=\"slice\">\n                              <div class=\"bar\"></div>\n                              <div class=\"fill\"></div>\n                          </div>\n                      </div>\n                      <div>\n                          <img class=\"img-chart\" src=\"../../../assets/img/coal.png\">\n                          <p class=\"wind-text m-b-10-negv\">Coal</p>\n                          <p class=\"wind-text\">10 KWH</p>\n\n                      </div>\n                  </div>\n\n                  <div class=\"col text-center border-charts\">\n                      <div class=\"c100 p15 blue\">\n                          <span>15%</span>\n                          <div class=\"slice\">\n                              <div class=\"bar\"></div>\n                              <div class=\"fill\"></div>\n                          </div>\n                      </div>\n                      <div>\n                          <img class=\"img-chart\" src=\"../../../assets/img/gas.png\">\n                          <p class=\"wind-text m-b-10-negv\">Gas</p>\n                          <p class=\"wind-text\">10 KWH</p>\n\n                      </div>\n                  </div>\n\n                  <div class=\"col\">\n                  </div>\n              </div>\n          </div>\n\n\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-energy-mix/user-energy-mix.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-energy-mix/user-energy-mix.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserEnergyMixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEnergyMixComponent", function() { return UserEnergyMixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserEnergyMixComponent = /** @class */ (function () {
    function UserEnergyMixComponent(dataService) {
        this.dataService = dataService;
        this.engergyResources = ['WIND_POWER', 'SOLAR_POWER', 'NUCLEAR', 'GEO_POWER', 'BIO', 'GAS', 'COAL', 'DIESEL'];
        this.windPower_totalPercentage = 0;
        this.solarPower_totalPercentage = 0;
        this.nuclear_totalPercentage = 0;
        this.geoPower_totalPercentage = 0;
        this.bioPower_totalPercentage = 0;
        this.gasPower_totalPercentage = 0;
        this.coalPower_totalPercentage = 0;
        this.dieselPower_totalPercentage = 0;
    }
    UserEnergyMixComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getMix().subscribe(function (res) {
            console.log('Repsonse from mix is ', res['energyConsumption']);
            res['energyConsumption'].forEach(function (element) {
                console.log('Element is', element.unitsPurchased);
                console.log('Element Response', element.energyResource === "WIND_POWER");
                if (element.energyResource == 'WIND_POWER') {
                    _this.windPowoer_engergyResource = 'WIND POWER';
                    _this.windPower_totalunitsPurchased += element.unitsPurchased;
                    _this.windPower_totalPercentage += element.percentage;
                }
                if (element.energyResource == 'SOLAR_POWER') {
                    _this.solarPowoer_engergyResource = 'SOLAR POWER';
                    _this.solarPower_production += element.unitsPurchased;
                    _this.solarPower_totalPercentage += element.percentage;
                }
                if (element.energyResource === 'NUCLEAR') {
                    _this.nuclear_engergyResource = 'NUCLEAR';
                    _this.nuclear_production += element.unitsPurchased;
                    _this.nuclear_totalPercentage += element.percentage;
                }
                if (element.energyResource == 'GEO_POWER') {
                    _this.geoPower_engergyResource = 'GEO POWER';
                    _this.geoPower_production = element.production;
                    _this.geoPower_totalPercentage += element.percentage;
                }
                if (element.energyResource == 'BIO') {
                    _this.bioPowoer_engergyResource = 'BIO';
                    _this.bioPower_production = element.production;
                    _this.bioPower_totalPercentage += element.percentage;
                }
                if (element.energyResource == 'COAL') {
                    _this.coalPowoer_engergyResource = 'COAL';
                    _this.coalPower_production = element.production;
                    _this.coalPower_totalPercentage += element.percentage;
                }
                if (element.energyResource == 'DIESEL') {
                    _this.dieselPowoer_engergyResource = 'DIESEL';
                    _this.dieselPower_production = element.production;
                    _this.dieselPower_totalPercentage += element.percentage;
                }
                console.log('Wind power units purchased', _this.windPower_totalunitsPurchased);
            });
            // this.energies = this.arrayMap(res, item => item.energyConsumed);       
            //this.timestamps = this.arrayMap(res, item => item.timestamp.split("T")[0])
            // console.log('Response for mix about energyResource', res['energyConsumption'][0]['energyResource']);
            // console.log('Response for mix about percentage', res['energyConsumption'][0]['percentage']);
            // console.log('Response for mix about production', res['energyConsumption'][0]['production']);
        });
    };
    UserEnergyMixComponent.prototype.arrayMap = function (obj, fn) {
        var aray = [];
        for (var i = 0; i < obj.length; i++) {
            aray.push(fn(obj[i]));
        }
        return aray;
    };
    UserEnergyMixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-energy-mix',
            template: __webpack_require__(/*! ./user-energy-mix.component.html */ "./src/app/components/user-energy-mix/user-energy-mix.component.html"),
            styles: [__webpack_require__(/*! ./user-energy-mix.component.css */ "./src/app/components/user-energy-mix/user-energy-mix.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UserEnergyMixComponent);
    return UserEnergyMixComponent;
}());



/***/ }),

/***/ "./src/app/components/user-model/user-model.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/user-model/user-model.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal.fade.show.in{\r\n    background: rgba(0,0,0,0.5);\r\n}"

/***/ }),

/***/ "./src/app/components/user-model/user-model.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-model/user-model.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Verify User {{user.username}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        \n      </div>\n      <div class=\"modal-body\">\n\n        <!-- Registration Form -->\n        <form>\n\n          <!-- Username Input -->\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <div>\n              <p >{{user.username}}</p>\n            </div>\n          </div>\n\n          <!-- Email Input -->\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n             <p>{{user.email}}</p>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"distanceFromGrid\">Distance from grid</label>\n            <p>{{user.distanceFromGrid}}</p>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"balanceAmount\">Balance</label>\n           <p>{{user.balanceAmount}}</p>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"PricePerKWH\">Price Per KWH</label>\n           <p>{{user.PricePerKWH}}</p>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"LocationDetail\">Location</label>\n            <div>\n            <p>{{user.LocationDetail}}</p>\n         </div>\n          </div>\n\n\n          <!-- Submit Input -->\n          <input  *ngIf=\"!activate\"  type=\"submit\" class=\"btn btn-primary tex-center form-control\" (click)=\"activateUser()\" value=\"Activate User\" />\n\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-model/user-model.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-model/user-model.component.ts ***!
  \***************************************************************/
/*! exports provided: UserModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModelComponent", function() { return UserModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alertify_js__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserModelComponent = /** @class */ (function () {
    function UserModelComponent(formBuilder, authService, dataService, router, spinnerService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.dataService = dataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.processing = false;
        this.user = {};
    }
    UserModelComponent.prototype.ngOnInit = function () {
    };
    UserModelComponent.prototype.openModal = function (id) {
        var _this = this;
        this.spinnerService.show();
        this.authService.getUserById(id).subscribe(function (res) {
            if (res['success'] === true) {
                console.log('Response from data is ', res['message']);
                _this.user = res['message'];
                _this.activate = _this.user.activate;
                _this.spinnerService.hide();
                console.log('Open model inside user model', id);
                // this.showAngularModal($("#myModal"));
                $("#myModal").showAngularModal();
                // $("#myModal").showAngularModal();
                // $("body").addClass("modal-open");
                // $("#myModal").addClass("show in");
                // $('#myModal').modal('show');
            }
        });
    };
    UserModelComponent.prototype.activateUser = function () {
        var _this = this;
        console.log('Hello World', this.user._id);
        this.spinnerService.show();
        this.authService.getUserById(this.user._id).subscribe(function (res) {
            console.log('Response from data is ', res['message']);
            if (res['success'] === true) {
                var newUser = {
                    "userID": _this.user._id,
                    "name": _this.user.username,
                    "distanceFromGrid": _this.user.distanceFromGrid,
                    "pricePerKWH": _this.user.PricePerKWH,
                    "balanceAmount": _this.user.balanceAmount,
                    "location": _this.user.LocationDetail
                };
                console.log('New user detail is ', newUser);
                _this.dataService.createUser(newUser).subscribe(function (res) {
                    console.log(res);
                    _this.authService.activateUser(_this.user._id).subscribe(function (res) {
                        console.log('Response for activate user', res);
                        if (res['success'] === true) {
                            alertify_js__WEBPACK_IMPORTED_MODULE_6__["logPosition"]('top right').success("User account has been activated sucessfully"); //example
                            _this.spinnerService.hide();
                            $('#myModal').modal('hide');
                        }
                        else {
                            alertify_js__WEBPACK_IMPORTED_MODULE_6__["logPosition"]('top right').error("Somthing went wrong please try again"); //example
                            _this.spinnerService.hide();
                        }
                    });
                });
            }
        });
    };
    UserModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-model',
            template: __webpack_require__(/*! ./user-model.component.html */ "./src/app/components/user-model/user-model.component.html"),
            styles: [__webpack_require__(/*! ./user-model.component.css */ "./src/app/components/user-model/user-model.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], UserModelComponent);
    return UserModelComponent;
}());



/***/ }),

/***/ "./src/app/components/user-panel-navbar/user-panel-navbar.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/user-panel-navbar/user-panel-navbar.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-panel-navbar/user-panel-navbar.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user-panel-navbar/user-panel-navbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"sidebar\">\n      <div class=\"sidebar-inner\">\n          <div class=\"sidebar-logo\">\n              <div class=\"peers ai-c fxw-nw\">\n                  <div class=\"peer peer-greed\">\n                      <a class=\"sidebar-link td-n\" href=\"/index.html\">\n                          <div class=\"peers ai-c fxw-nw\">\n                              <div class=\"peer\">\n                                  <div>\n                                      <img class=\"rengoo-logo\" src=\"../../../assets/img/logo.png\" alt=\"Rengoo\">\n                                  </div>\n                              </div>\n\n                          </div>\n                      </a>\n                  </div>\n                  <div class=\"peer\">\n                      <div class=\"mobile-toggle sidebar-toggle\">\n                          <a class=\"td-n\">\n                              <i class=\"ti-arrow-circle-left\"></i>\n                          </a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <ul class=\"sidebar-menu scrollable pos-r\">\n              <li class=\"nav-item mT-30 active\">\n                  <a class=\"sidebar-link\" [routerLink]=\"['/userPanel']\" default>\n                          <span class=\"icon-holder\">\n                              <i class=\"c-blue-500 ti-home\"></i>\n                          </span>\n                      <span class=\"title\" >Dashboard</span>\n                  </a>\n              </li>\n\n              \n             \n          </ul>\n      </div>\n  </div>\n  <div class=\"page-container\">\n      <div class=\"header navbar\">\n          <div class=\"header-container\">\n              <ul class=\"nav-left\">\n                  <li>\n                      <a id=\"sidebar-toggle\" class=\"sidebar-toggle\" href=\"javascript:void(0);\">\n                          <i class=\"ti-menu\"></i>\n                      </a>\n                  </li>\n                  <li class=\"search-box\">\n                      <div class=\"nav-wrapper\">\n                          <div class=\"sl-nav\">\n                              <ul>\n                                  <li><b>English</b> <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                                      <div class=\"triangle\"></div>\n                                      <ul>\n                                          <li><i class=\"sl-flag flag-de\">\n                                              <div id=\"germany\"></div>\n                                          </i> <span class=\"active\">Deutsch</span></li>\n                                          <li><i class=\"sl-flag flag-usa\">\n                                              <div id=\"germany\"></div>\n                                          </i> <span>English</span></li>\n                                      </ul>\n                                  </li>\n                              </ul>\n                          </div>\n                      </div>\n                  </li>\n                  <li class=\"search-input\">\n                      <input class=\"form-control\" type=\"text\" placeholder=\"Search...\">\n                  </li>\n              </ul>\n              <ul class=\"nav-right\">\n                  \n                  <li class=\"dropdown\">\n                      <a class=\"dropdown-toggle no-after peers fxw-nw ai-c lh-1\" data-toggle=\"dropdown\">\n                          <div class=\"peer mR-10\">\n                              <img class=\"w-2r bdrs-50p\" src=\"../../../assets/img/default.png\" alt=\"\">\n                          </div>\n                          <div class=\"peer\">\n                              <span class=\"fsz-sm c-grey-900\">{{user}}</span>\n                          </div>\n                      </a>\n                      <ul class=\"dropdown-menu fsz-sm\">\n                          <li role=\"separator\" class=\"divider\"></li>\n                          <li *ngIf=\"authService.loggedIn()\">\n                              <a class=\"d-b td-n pY-5 bgcH-grey-100 c-grey-700\"\n                              (click)=\"onLogoutClick()\"\n                              >\n                                  <i class=\"ti-power-off mR-10\"></i>\n                                  <span>Logout</span>\n                              </a>\n                          </li>\n                      </ul>\n                  </li>\n              </ul>\n          </div>\n      </div>\n      <main class=\"main-content bgc-grey-100\">\n          <div id=\"mainContent\">\n              <div class=\"row gap-20 masonry pos-r height-100\">\n                  <div class=\"col-md-12 \">\n                      <div class=\"row height-100\">\n                          <div class=\"col-md-2 background-fff\">\n                              <form>\n                                  <div class=\"form-group mB-0\">\n                                      <input class=\"search-input\" type=\"search\" placeholder=\"Search...\">\n                                  </div>\n                              </form>\n\n\n                              <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\n                                  <a class=\"nav-item nav-link active border-left-1\" id=\"nav-home-tab\"\n                                     data-toggle=\"tab\" href=\"#nav-current\" role=\"tab\" aria-controls=\"nav-home\"\n                                     aria-selected=\"true\">Current Consumption\n                                      <span class=\"d-block\">5 KW/H</span>\n                                  </a>\n                                  <a class=\"nav-item nav-link border-left-2\" id=\"nav-profile-tab\" data-toggle=\"tab\"\n                                     href=\"#nav-mix\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">\n                                      MIX\n                                      <span class=\"d-block\"> Wind 28%  water 66%  Solar 6%</span>\n                                  </a>\n                                  <a class=\"nav-item nav-link border-left-3\" id=\"nav-contact-tab\" data-toggle=\"tab\"\n                                     href=\"#nav-power\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">\n                                      Power Storage\n                                      <span class=\"d-block\">Haus: 55%   Auto: 90%</span>\n                                  </a>\n                                  <a class=\"nav-item nav-link border-left-4\" id=\"nav-about-tab\" data-toggle=\"tab\"\n                                     href=\"#nav-tradet\" role=\"tab\" aria-controls=\"nav-about\" aria-selected=\"false\">\n                                      Trade\n\n                                      <span class=\"d-block\">Sale from 20 Rp. / kWh</span>\n                                  </a>\n                              </div>\n                          </div>\n\n                          <div class=\"col-md-10 padding-0\">\n                              <div class=\"tab-content py-3 px-3 px-sm-0 padding-0\" id=\"nav-tabContent\">\n                                  <div class=\"tab-pane fade show active\" id=\"nav-current\" role=\"tabpanel\"\n                                       aria-labelledby=\"nav-home-tab\">\n\n\n                                      <div class=\"h-1 color-h\"><span class=\"text-h\">Current Consumption</span></div>\n\n\n                                      <div class=\"row\">\n                                          <div class=\"col-12\">\n                                              <div class=\"row background-white\">\n                                                  <div class=\"col-1\">\n                                                      <img class=\"img-cons\" src=\"../../../assets/img/consumption-logo.png\">\n                                                  </div>\n                                                  <div class=\"col-5 mT-10\">\n                                                      <h2 class=\"cons-h\">Current Consumption</h2>\n                                                      <h4 class=\"cons-h4\">Verbrauch <span\n                                                              class=\"span-h4\"> 5 kW/h </span></h4>\n                                                  </div>\n                                                  <div class=\"col-6 text-right\">\n                                                      <button type=\"button\" class=\"btn btn-end-contract btn-sell\"\n                                                              data-toggle=\"modal\" data-target=\"#sell-energy\">Open To\n                                                          Sell Others\n                                                      </button>\n                                                  </div>\n\n                                                  <div class=\"col-12 mT-20\">\n                                                      <div id=\"consumption\" class=\"consumption-chart\"></div>\n                                                  </div>\n\n\n                                                  <div class=\"col-12 mT-50\">\n                                                      <div class=\"table-responsive\">\n                                                          <table class=\"table table-striped\">\n                                                              <thead>\n                                                              <tr>\n                                                                  <th scope=\"col\">Name</th>\n                                                                  <th scope=\"col\">Energy Consumed</th>\n                                                                  <th scope=\"col\">TimeStamp</th>\n                                                              </tr>\n                                                              </thead>\n                                                              <tbody>\n                                                              <tr *ngFor=\"let energy of energies; let i=index\">\n\n                                                                  <td>{{user}}</td>\n                                                                  <td>{{energy}} KWH</td>\n                                                                  <td>{{timestamps[i]}}</td>\n                                                              </tr>\n                                                              </tbody>\n                                                          </table>\n                                                      </div>\n                                                  </div>\n\n\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                                  <div class=\"tab-pane fade\" id=\"nav-mix\" role=\"tabpanel\"\n                                       aria-labelledby=\"nav-profile-tab\">\n                                      <div class=\"h-1 color-h1\"><span class=\"text-h\">STORM MIX</span></div>\n\n\n                                      <!--\n                                          Energy Mix Component\n                                      -->\n                                    <app-user-energy-mix></app-user-energy-mix>\n\n                                  </div>\n                                  <div class=\"tab-pane fade\" id=\"nav-power\" role=\"tabpanel\"\n                                       aria-labelledby=\"nav-contact-tab\">\n                                      <div class=\"h-1 color-h2\"><span class=\"text-h\">Power Storage</span></div>\n<!-- Power Storge Component-->\n\n                                     <app-user-power-storage></app-user-power-storage>\n                                  </div>\n                                  <div class=\"tab-pane fade\" id=\"nav-tradet\" role=\"tabpanel\"\n                                       aria-labelledby=\"nav-about-tab\">\n                                      <div class=\"h-1 color-h3\"><span class=\"text-h\">Trade</span></div>\n                                     \n                                      <!-- Trade Component-->\n                                      <app-user-trade></app-user-trade>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n\n                  </div>\n\n\n              </div>\n          </div>\n      </main>\n      <footer class=\"bdT ta-c pT-20 lh-0 fsz-sm \">\n          <p class=\"mB-0\">Copyrights &copy; 2018 Rengoo, All Rights Reserved</p>\n      </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-panel-navbar/user-panel-navbar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-panel-navbar/user-panel-navbar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserPanelNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelNavbarComponent", function() { return UserPanelNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPanelNavbarComponent = /** @class */ (function () {
    // consumptions[]:any;
    function UserPanelNavbarComponent(authService, dataService, router, spinnerService, flashMessage) {
        this.authService = authService;
        this.dataService = dataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.flashMessage = flashMessage;
    }
    UserPanelNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getConsumption().subscribe(function (res) {
            _this.energies = _this.arrayMap(res, function (item) { return item.energyConsumed; });
            _this.timestamps = _this.arrayMap(res, function (item) { return item.timestamp.split("T")[0]; });
            console.log('Consumption Response', res);
            console.log('Consumption Response', _this.timestamps);
            console.log('Consumption Response', _this.energies);
            _this.renderHighchart();
        });
        this.dataService.getMix().subscribe(function (res) {
            // console.log('Repsonse from mix is ',res['energyProductionDetails'][0]);
            // console.log('Response for mix about energyResource', res['energyProductionDetails'][0]['energyResource']);
            // console.log('Response for mix about percentage', res['energyProductionDetails'][0]['percentage']);
            // console.log('Response for mix about production', res['energyProductionDetails'][0]['production']);
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user']['username'];
            console.log(_this.user);
            _this.spinnerService.hide();
        }, function (err) {
            _this.spinnerService.hide();
            return false;
        });
    };
    UserPanelNavbarComponent.prototype.arrayMap = function (obj, fn) {
        var aray = [];
        for (var i = 0; i < obj.length; i++) {
            aray.push(fn(obj[i]));
        }
        return aray;
    };
    UserPanelNavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    UserPanelNavbarComponent.prototype.renderHighchart = function () {
        Highcharts.chart('consumption', {
            chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Consumption Usage'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: this.timestamps,
                plotBands: [{
                        from: 4.5,
                        to: 6.5,
                        color: 'rgba(68, 170, 213, .2)'
                    }]
            },
            yAxis: {
                title: {
                    text: 'Units'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                    name: 'Energy Consumed',
                    data: this.energies
                }]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]),
        __metadata("design:type", _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"])
    ], UserPanelNavbarComponent.prototype, "navbar", void 0);
    UserPanelNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-panel-navbar',
            template: __webpack_require__(/*! ./user-panel-navbar.component.html */ "./src/app/components/user-panel-navbar/user-panel-navbar.component.html"),
            styles: [__webpack_require__(/*! ./user-panel-navbar.component.css */ "./src/app/components/user-panel-navbar/user-panel-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], UserPanelNavbarComponent);
    return UserPanelNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/user-power-storage/user-power-storage.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/user-power-storage/user-power-storage.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-power-storage/user-power-storage.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/user-power-storage/user-power-storage.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n      <div class=\"row background-white\">\n          <div class=\"col-1\">\n              <img class=\"img-cons\" src=\"../../../assets/img/power-storage.png\">\n          </div>\n          <div class=\"col-11\">\n              <h2 class=\"cons-h\">Power Storage</h2>\n              <h4 class=\"cons-h4\">Haus/Auto<span class=\"span-h4\"> </span></h4>\n              <p class=\"cons-p\">Lorem Ipsum is simply dummy text of the\n                  printing and typesetting industry. Lorem Ipsum has been the\n                  industry's standard dummy text ever since the 1500s, when an\n                  unknown printer took a galley of type and scrambled it to\n                  make a type specimen book. It has survived not only five\n                  centuries.</p>\n          </div>\n\n          <div class=\"col-12 mT-50\">\n              <div class=\"table-responsive\">\n                  <table class=\"table table-striped\">\n                      <thead>\n                      <tr>\n                          <th scope=\"col\">User</th>\n                          <th scope=\"col\">Units</th>\n                          <th scope=\"col\">Price</th>\n                          <th scope=\"col\">Action</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr>\n\n                          <td>Mark</td>\n                          <td>Otto</td>\n                          <td>@mdo</td>\n                          <td>\n                              <button type=\"button\"\n                                      class=\"btn btn-danger btn-end-contract\"\n                                      data-toggle=\"modal\"\n                                      data-target=\"#modalpower\">End Contract\n                              </button>\n                          </td>\n                      </tr>\n                      <tr>\n\n                          <td>Jacob</td>\n                          <td>Thornton</td>\n                          <td>@fat</td>\n                          <td>\n                              <button type=\"button\"\n                                      class=\"btn btn-danger btn-end-contract\"\n                                      data-toggle=\"modal\"\n                                      data-target=\"#modalpower\">End Contract\n                              </button>\n                          </td>\n                      </tr>\n                      <tr>\n\n                          <td>Larry</td>\n                          <td>the Bird</td>\n                          <td>@twitter</td>\n                          <td>\n                              <button type=\"button\"\n                                      class=\"btn btn-danger btn-end-contract\"\n                                      data-toggle=\"modal\"\n                                      data-target=\"#modalpower\">End Contract</button>\n                          </td>\n                      </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-power-storage/user-power-storage.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user-power-storage/user-power-storage.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserPowerStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPowerStorageComponent", function() { return UserPowerStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserPowerStorageComponent = /** @class */ (function () {
    function UserPowerStorageComponent() {
    }
    UserPowerStorageComponent.prototype.ngOnInit = function () {
    };
    UserPowerStorageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-power-storage',
            template: __webpack_require__(/*! ./user-power-storage.component.html */ "./src/app/components/user-power-storage/user-power-storage.component.html"),
            styles: [__webpack_require__(/*! ./user-power-storage.component.css */ "./src/app/components/user-power-storage/user-power-storage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserPowerStorageComponent);
    return UserPowerStorageComponent;
}());



/***/ }),

/***/ "./src/app/components/user-trade/user-trade.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/user-trade/user-trade.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-trade/user-trade.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-trade/user-trade.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n      <div class=\"row background-white\">\n          <div class=\"col-1\">\n              <img class=\"img-cons border-radius-100\" src=\"../../../assets/img/default.png\">\n          </div>\n          <div class=\"col-11\">\n              <h2 class=\"cons-h mT-20\">John Doe :<span\n                      class=\"cons-h\"> Seller</span></h2>\n\n          </div>\n\n          <div class=\"col-12 mT-50\">\n              <div class=\"table-responsive\">\n                  <table class=\"table table-striped\">\n                      <thead>\n                      <tr>\n                          <th scope=\"col\">User</th>\n                          <th scope=\"col\">Units</th>\n                          <th scope=\"col\">Price</th>\n                          <th scope=\"col\">Action</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr>\n\n                          <td>Mark</td>\n                          <td>Otto</td>\n                          <td>@mdo</td>\n                          <td>\n                              <button type=\"button\"\n                                      class=\"btn btn-danger btn-end-contract\"\n                                      data-toggle=\"modal\"\n                                      data-target=\"#sell-energy\">Sell Energy\n                              </button>\n                          </td>\n                      </tr>\n                      <tr>\n\n                          <td>Jacob</td>\n                          <td>Thornton</td>\n                          <td>@fat</td>\n                          <td>\n                              <button type=\"button\"\n                                      class=\"btn btn-danger btn-end-contract\"\n                                      data-toggle=\"modal\"\n                                      data-target=\"#sell-energy\">Sell Energy\n                              </button>\n                          </td>\n                      </tr>\n                      <tr>\n\n                          <td>Larry</td>\n                          <td>the Bird</td>\n                          <td>@twitter</td>\n                          <td>\n                              <button type=\"button\"\n                                      class=\"btn btn-danger btn-end-contract\"\n                                      data-toggle=\"modal\"\n                                      data-target=\"#sell-energy\">Sell Energy\n                              </button>\n                          </td>\n                      </tr>\n                      </tbody>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-trade/user-trade.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-trade/user-trade.component.ts ***!
  \***************************************************************/
/*! exports provided: UserTradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTradeComponent", function() { return UserTradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserTradeComponent = /** @class */ (function () {
    function UserTradeComponent() {
    }
    UserTradeComponent.prototype.ngOnInit = function () {
    };
    UserTradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-trade',
            template: __webpack_require__(/*! ./user-trade.component.html */ "./src/app/components/user-trade/user-trade.component.html"),
            styles: [__webpack_require__(/*! ./user-trade.component.css */ "./src/app/components/user-trade/user-trade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserTradeComponent);
    return UserTradeComponent;
}());



/***/ }),

/***/ "./src/app/components/userpanel/userpanel.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/userpanel/userpanel.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/userpanel/userpanel.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/userpanel/userpanel.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<app-user-panel-navbar></app-user-panel-navbar>\r\n\r\n<!-- Power Management Modal -->\r\n<div class=\"modal fade\" id=\"modalpower\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">End Contract</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form class=\"pT-50\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control sign-in-input\" placeholder=\"User\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control sign-in-input\" placeholder=\"Amount\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control sign-in-input\" id=\"sel1\">\r\n                            <option value=\"\" disabled selected>Connection Type</option>\r\n                            <option>Network User</option>\r\n                            <option>App User</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group pY-20 text-center\">\r\n                        <a href=\"#\">\r\n                            <button type=\"button\" class=\"btn btn-sign-in btn-red-border\">END CONTRACT</button>\r\n                        </a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--Sell Energy Modal-->\r\n\r\n<div class=\"modal fade\" id=\"sell-energy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Sell Energy</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">Energy Type</th>\r\n                            <th scope=\"col\">Total Available</th>\r\n                            <th scope=\"col\">Sell Energy Value</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr>\r\n\r\n                            <td>Coal</td>\r\n                            <td>100 KW</td>\r\n                            <td>\r\n                                <form>\r\n                                    <div class=\"form-group mB-0\">\r\n                                        <input class=\"form-control input-table \" type=\"text\" placeholder=\"1 MW\">\r\n                                    </div>\r\n                                </form>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n\r\n                            <td>Turbine</td>\r\n                            <td>100 KW</td>\r\n                            <td>\r\n                                <form>\r\n                                    <div class=\"form-group mB-0\">\r\n                                        <input class=\"form-control input-table \" type=\"text\" placeholder=\"1 MW\">\r\n                                    </div>\r\n                                </form>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n\r\n                            <td>DAM</td>\r\n                            <td>100 KW</td>\r\n                            <td>\r\n                                <form>\r\n                                    <div class=\"form-group mB-0\">\r\n                                        <input class=\"form-control input-table \" type=\"text\" placeholder=\"1 MW\">\r\n                                    </div>\r\n                                </form>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n                <div class=\"row padding-10\">\r\n                    <div class=\"col-3\">\r\n\r\n                        <b>Total</b>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-9 text-right padding-r-25per\">\r\n\r\n                        <b>250</b>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-12 text-right padding-10 padding-r-15per\">\r\n                        <a href=\"#\">\r\n                            <button class=\"btn btn-end-contract btn-sell-energy\">Sell Energy</button>\r\n                        </a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--End Sell Energy Modal-->\r\n\r\n\r\n<!--Sell Energy Modal-->\r\n\r\n<div class=\"modal fade\" id=\"sell-energy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n     aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Sell Energy</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">Energy Type</th>\r\n                            <th scope=\"col\">Total Available</th>\r\n                            <th scope=\"col\">Sell Energy Value</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr>\r\n\r\n                            <td>Coal</td>\r\n                            <td>100 KW</td>\r\n                            <td>\r\n                                <form>\r\n                                    <div class=\"form-group mB-0\">\r\n                                        <input class=\"form-control input-table \" type=\"text\" placeholder=\"1 MW\">\r\n                                    </div>\r\n                                </form>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n\r\n                            <td>Turbine</td>\r\n                            <td>100 KW</td>\r\n                            <td>\r\n                                <form>\r\n                                    <div class=\"form-group mB-0\">\r\n                                        <input class=\"form-control input-table \" type=\"text\" placeholder=\"1 MW\">\r\n                                    </div>\r\n                                </form>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n\r\n                            <td>DAM</td>\r\n                            <td>100 KW</td>\r\n                            <td>\r\n                                <form>\r\n                                    <div class=\"form-group mB-0\">\r\n                                        <input class=\"form-control input-table \" type=\"text\" placeholder=\"1 MW\">\r\n                                    </div>\r\n                                </form>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n                <div class=\"row padding-10\">\r\n                    <div class=\"col-3\">\r\n\r\n                        <b>Total</b>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-9 text-right padding-r-25per\">\r\n\r\n                        <b>250</b>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-12 text-right padding-10 padding-r-15per\">\r\n                        <a href=\"#\">\r\n                            <button class=\"btn btn-end-contract btn-sell-energy\">Sell Energy</button>\r\n                        </a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/userpanel/userpanel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/userpanel/userpanel.component.ts ***!
  \*************************************************************/
/*! exports provided: UserpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpanelComponent", function() { return UserpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserpanelComponent = /** @class */ (function () {
    function UserpanelComponent() {
        this.Rangoo = 'https://hyperledger-power-watson-rest-appreciative-bear.eu-gb.mybluemix.net/';
        console.log(this.Rangoo + 'api/User');
    }
    UserpanelComponent.prototype.ngOnInit = function () {
    };
    UserpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userpanel',
            template: __webpack_require__(/*! ./userpanel.component.html */ "./src/app/components/userpanel/userpanel.component.html"),
            styles: [__webpack_require__(/*! ./userpanel.component.css */ "./src/app/components/userpanel/userpanel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserpanelComponent);
    return UserpanelComponent;
}());



/***/ }),

/***/ "./src/app/components/verify/verify.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/verify/verify.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/verify/verify.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/verify/verify.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  App works\n</p>\n"

/***/ }),

/***/ "./src/app/components/verify/verify.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/verify/verify.component.ts ***!
  \*******************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alertify_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        // this.token = this.route.snapshot.params;
        // console.log(this.token);
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.token = params.token;
            console.log('Parameters are ', _this.token);
        });
        this.authService.verifyUser(this.token).subscribe(function (res) {
            console.log('Response issssssszzz ', res);
            alertify_js__WEBPACK_IMPORTED_MODULE_3__["logPosition"]('top right').success(res['message']); //example
            _this.router.navigate(['/login']);
        }, function (err) {
            alertify_js__WEBPACK_IMPORTED_MODULE_3__["logPosition"]('top right').error("Invalid token"); //example
            _this.router.navigate(['/login']);
            return false;
        });
    };
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/components/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/components/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.AdminloggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        console.log('User inside register service', user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-Type', 'application/json')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post('http://localhost:3000/users/authenticate', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-Type', 'application/json')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Forget Password Api Call
    AuthService.prototype.forgetPassword = function (email) {
        return this.http.post('http://localhost:3000/users/forgetPassword', { email: email }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-Type', 'application/json')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Reset Password
    AuthService.prototype.resetPassword = function (token, password) {
        return this.http.post("http://localhost:3000/users/resetPassword/" + token + "/" + password, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Content-Type', 'application/json')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.http.get('http://localhost:3000/users/profile', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        console.log('Token is  ' + this.authToken);
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.getItem('id_token') == undefined) {
            return false;
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
            return !helper.isTokenExpired(localStorage.getItem('id_token')); // other people are putting 'id_token'' here but it didn't work for me so i just put the localStorage item
        }
    };
    AuthService.prototype.AdminloggedIn = function () {
        var isAdmin = JSON.parse(localStorage.getItem("user")).isAdmin;
        if (isAdmin)
            return true;
        else {
            return false;
        }
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:3000/users/checkUsername/' + username, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.checkEmail = function (email) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:3000/users/checkEmail/' + email, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getUserById = function (_id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:3000/users/getUserById/' + _id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.activateUser = function (_id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:3000/users/activateUser/' + _id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    // Function to get all users records
    AuthService.prototype.getAllUsers = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:3000/users/getAllUsers', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.verifyUser = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:3000/users/verify/' + token, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.RengooUrl = 'https://rengoo-latest-playground-balanced-leopard.eu-gb.mybluemix.net/api';
        this.MixUrl = 'https://rengoo-latest-rest-optimistic-pangolin.eu-gb.mybluemix.net/api/User/';
        this.ConsumptionUrl = 'https://rengoo-latest-rest-optimistic-pangolin.eu-gb.mybluemix.net/api/queries/GetConsumptionForTable?user=resource%3Awaltson.poc.hyperledger.User%23';
    }
    DataService.prototype.getUsers = function () {
    };
    DataService.prototype.createUser = function (newUser) {
        console.log('I am in new User', newUser.userID);
        return this.http.post(this.RengooUrl + 'api/User', newUser, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    DataService.prototype.getConsumption = function () {
        return this.http.get(this.ConsumptionUrl + 2, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    DataService.prototype.getMix = function () {
        return this.http.get(this.MixUrl + 3, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append('Content-Type', 'application/json')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RizwanOffical\Desktop\Rangoo\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map