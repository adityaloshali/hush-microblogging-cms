webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_protected_protected_component__ = __webpack_require__("./src/app/components/protected/protected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_writer_guard__ = __webpack_require__("./src/app/guards/writer.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_writer_createblog_createblog_component__ = __webpack_require__("./src/app/components/writer/createblog/createblog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_writer_writerhome_component__ = __webpack_require__("./src/app/components/writer/writerhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_writer_writeredit_writeredit_component__ = __webpack_require__("./src/app/components/writer/writeredit/writeredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_writer_deleteblog_deleteblog_component__ = __webpack_require__("./src/app/components/writer/deleteblog/deleteblog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_editorhome_editorhome_component__ = __webpack_require__("./src/app/components/editorhome/editorhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_editor_guard__ = __webpack_require__("./src/app/guards/editor.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_editorhome_editoredit_editoredit_component__ = __webpack_require__("./src/app/components/editorhome/editoredit/editoredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__ = __webpack_require__("./src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// Our Array of Angular 2 Routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */]] // User must NOT be logged in to view this route
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */]]
    },
    {
        path: 'protected',
        component: __WEBPACK_IMPORTED_MODULE_4__components_protected_protected_component__["a" /* ProtectedComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'writer',
        component: __WEBPACK_IMPORTED_MODULE_8__components_writer_writerhome_component__["a" /* WriterhomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_writer_guard__["a" /* WriterGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] // Login Route// User must NOT be logged in to view this route
    },
    {
        path: 'writer/newblog',
        component: __WEBPACK_IMPORTED_MODULE_7__components_writer_createblog_createblog_component__["a" /* CreateblogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_writer_guard__["a" /* WriterGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] // Login Route// User must NOT be logged in to view this route
    },
    {
        path: 'writer/edit-blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__components_writer_writeredit_writeredit_component__["a" /* WritereditComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_writer_guard__["a" /* WriterGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'writer/delete-blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__components_writer_deleteblog_deleteblog_component__["a" /* DeleteblogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_writer_guard__["a" /* WriterGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'editor',
        component: __WEBPACK_IMPORTED_MODULE_11__components_editorhome_editorhome_component__["a" /* EditorhomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_editor_guard__["a" /* EditorGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'editor/edit-blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_13__components_editorhome_editoredit_editoredit_component__["a" /* EditoreditComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_editor_guard__["a" /* EditorGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 80px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__("./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_protected_protected_component__ = __webpack_require__("./src/app/components/protected/protected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_writer_guard__ = __webpack_require__("./src/app/guards/writer.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_writer_createblog_createblog_component__ = __webpack_require__("./src/app/components/writer/createblog/createblog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_writer_writerhome_component__ = __webpack_require__("./src/app/components/writer/writerhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_writer_service__ = __webpack_require__("./src/app/services/writer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_writer_writeredit_writeredit_component__ = __webpack_require__("./src/app/components/writer/writeredit/writeredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_writer_deleteblog_deleteblog_component__ = __webpack_require__("./src/app/components/writer/deleteblog/deleteblog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_editorhome_editorhome_component__ = __webpack_require__("./src/app/components/editorhome/editorhome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_editor_guard__ = __webpack_require__("./src/app/guards/editor.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_editor_service__ = __webpack_require__("./src/app/services/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_editorhome_editoredit_editoredit_component__ = __webpack_require__("./src/app/components/editorhome/editoredit/editoredit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_notAuth_guard__ = __webpack_require__("./src/app/guards/notAuth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_protected_protected_component__["a" /* ProtectedComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_writer_createblog_createblog_component__["a" /* CreateblogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_writer_writerhome_component__["a" /* WriterhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_writer_writeredit_writeredit_component__["a" /* WritereditComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_writer_deleteblog_deleteblog_component__["a" /* DeleteblogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_editorhome_editorhome_component__["a" /* EditorhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_editorhome_editoredit_editoredit_component__["a" /* EditoreditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomFormsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__guards_writer_guard__["a" /* WriterGuard */],
                __WEBPACK_IMPORTED_MODULE_16__services_writer_service__["a" /* WriterService */],
                __WEBPACK_IMPORTED_MODULE_20__guards_editor_guard__["a" /* EditorGuard */],
                __WEBPACK_IMPORTED_MODULE_21__services_editor_service__["a" /* EditorService */],
                __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_24__guards_notAuth_guard__["a" /* NotAuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/editorhome/editoredit/editoredit.component.css":
/***/ (function(module, exports) {

module.exports = "div.alert{\r\n    margin-top: 4px;\r\n    margin-bottom: 2px;\r\n}"

/***/ }),

/***/ "./src/app/components/editorhome/editoredit/editoredit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Editor Edit Blog</h1>\r\n\r\n<!-- Custom Success/Erro Message -->\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <form #f=\"ngForm\" (ngSubmit)=\"updateBlog(f.value)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Blog Title</label>\r\n          <input type=\"text\" #title=\"ngModel\" name=\"title\" id=\"title\" [(ngModel)]=\"blog.title\" class=\"form-control\" required>\r\n          <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\r\n            Title is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"content\">Blog Content</label>\r\n            <textarea type=\"textarea\" rows=\"10\" cols=\"80 \"name=\"content\" id=\"content\" [(ngModel)]=\"blog.content\" class=\"form-control\" (input)=\"contentChange($event.target.value)\" #content=\"ngModel\" required></textarea>\r\n            <div class=\"alert alert-danger\" *ngIf=\"content.touched && content.invalid\">\r\n              Content is required.\r\n            </div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"(contentLength < 4 || contentLength > 150) && (content.dirty || content.touched)\">\r\n            Content length is  {{ contentLength }} words.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"imageUrl\">Image URL</label>\r\n            <input type=\"text\" #imageUrl=\"ngModel\" name=\"imageUrl\" id=\"imageUrl\" [(ngModel)]=\"blog.imageUrl\" class=\"form-control\" required url>\r\n            <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\r\n              <div *ngIf=\"imageUrl.errors.required\">Image URL is required.</div>\r\n              <div *ngIf=\"imageUrl.errors.url\">Please enter a valid URL.</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"tags\">Tags( space separated )</label>\r\n            <input type=\"text\" #tags=\"ngModel\" name=\"tags\" id=\"tags\" [(ngModel)]=\"blog.tags\" class=\"form-control\" required>\r\n            <div class=\"alert alert-danger\" *ngIf=\"tags.touched && tags.invalid\">\r\n              Tags are required.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"category\">Blog Category</label>\r\n            <select #category=\"ngModel\" name=\"category\" id=\"category\" [(ngModel)]=\"blog.category\" class=\"form-control\" required>\r\n              <option value=\"career\">Career</option>\r\n              <option value=\"employment\">Employment</option>\r\n              <option value=\"upskilling\">Upskilling</option>\r\n              <option value=\"management\">Management</option>\r\n            </select>\r\n            <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\r\n              Category is required.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"status\">Blog Status</label>\r\n            <select #status=\"ngModel\" name=\"status\" id=\"status\" [(ngModel)]=\"blog.status\" class=\"form-control\" required>\r\n              <option value=1>Pending Editing</option>\r\n              <option value=2>Published</option>\r\n            </select>\r\n            <div class=\"alert alert-danger\" *ngIf=\"status.touched && status.invalid\">\r\n              Status is required.\r\n            </div>\r\n        </div>\r\n        <button [disabled]=\"!f.valid\" class=\"btn btn-primary\">Save</button>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/editorhome/editoredit/editoredit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditoreditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_editor_service__ = __webpack_require__("./src/app/services/editor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditoreditComponent = /** @class */ (function () {
    function EditoreditComponent(activatedRoute, router, editorService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.editorService = editorService;
        this.blog = { "_id": null };
        this.processing = false;
        this.loading = true;
        this.contentLength = 0;
    }
    EditoreditComponent.prototype.contentChange = function (searchValue) {
        var word = searchValue.trim().split(" ");
        this.contentLength = word.length;
    };
    EditoreditComponent.prototype.updateBlog = function (blog) {
        var _this = this;
        var id = this.blog._id;
        blog.status = Number(blog.status);
        blog.tags = blog.tags.trim().split(" ");
        console.log(blog);
        this.editorService.updateBlog(id, blog).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                console.log(data);
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.router.navigate(['/editor']);
                }, 2000);
            }
        });
    };
    EditoreditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentParams = this.activatedRoute.snapshot.params; // When component loads, grab the id
        // Function to GET current blog with id in params
        this.editorService.getSingleBlog(this.currentParams.id).subscribe(function (data) {
            // Check if GET request was success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
            }
            else {
                console.log(data.blog);
                data.blog.tags = data.blog.tags.join(" ");
                console.log(data.blog);
                _this.blog = data.blog; // Save blog object for use in HTML
                _this.loading = false; // Allow loading of blog form
            }
        });
    };
    EditoreditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editoredit',
            template: __webpack_require__("./src/app/components/editorhome/editoredit/editoredit.component.html"),
            styles: [__webpack_require__("./src/app/components/editorhome/editoredit/editoredit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_editor_service__["a" /* EditorService */]])
    ], EditoreditComponent);
    return EditoreditComponent;
}());



/***/ }),

/***/ "./src/app/components/editorhome/editorhome.component.css":
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.writer-info{\r\n    -ms-flex-preferred-size: 60%;\r\n        flex-basis: 60%;\r\n}"

/***/ }),

/***/ "./src/app/components/editorhome/editorhome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Editor Home</h1>\r\n</div>\r\n<br />\r\n<br />\r\n<div class=\"panel panel-primary\" *ngFor=\"let blog of blogPosts\">\r\n\r\n    <!-- Panel Title -->\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">{{ blog.title }}</h3>\r\n    </div>\r\n\r\n    <!-- Panel Body -->\r\n    <div class=\"panel-body\">\r\n      {{ blog.content }}\r\n    </div>\r\n\r\n    <!-- Panel Footer Start -->\r\n    <div class=\"panel-footer footer\">\r\n        <div class=\"writer-info\">\r\n            <strong>Posted by: </strong>{{ blog.authorName }}\r\n            <strong> on </strong>{{ blog.createdAt | date:'MMM dd, yyyy' }}    \r\n        </div>\r\n        <div class=\"crud-routes\">\r\n          <!-- Edit Button -->\r\n          <a [routerLink]=\"['/editor/edit-blog/', blog._id]\" ><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\r\n        </div>\r\n      </div>\r\n    <!-- Panel Footer End -->\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/editorhome/editorhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_editor_service__ = __webpack_require__("./src/app/services/editor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorhomeComponent = /** @class */ (function () {
    function EditorhomeComponent(editorService) {
        this.editorService = editorService;
    }
    EditorhomeComponent.prototype.getBlogs = function () {
        var _this = this;
        this.editorService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs;
            console.log(_this.blogPosts);
        });
    };
    EditorhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs;
            console.log(_this.blogPosts);
        });
    };
    EditorhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editorhome',
            template: __webpack_require__("./src/app/components/editorhome/editorhome.component.html"),
            styles: [__webpack_require__("./src/app/components/editorhome/editorhome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_editor_service__["a" /* EditorService */]])
    ], EditorhomeComponent);
    return EditorhomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".hero{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 80vh;\r\n}\r\n\r\n.hero h1{\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 10rem;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\r\n  <h1>Hush CMS</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Login Page</h1>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n    <div [ngClass]=\"messageClass\">\r\n      {{ message }}\r\n    </div>\r\n  </div>\r\n\r\n<!-- Registration Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n\r\n  <!-- Username Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n      <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\"/>\r\n  </div>\r\n\r\n  <!-- Password Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n      <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\r\n  </div>\r\n\r\n  <!-- Submit Input -->\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\r\n\r\n</form>\r\n<!-- Registration Form /-->\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            //Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                console.log(data);
                _this.authService.storeUserData(data.token, data.username, data.authority, data.id);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    console.log(_this.authService.authority);
                    // Check if user was redirected or logging in for first time
                    if (_this.authService.authority === "writer") {
                        _this.router.navigate(['/writer']);
                    }
                    else {
                        _this.router.navigate(['/editor']); // Navigate to dashboard view
                    }
                }, 2000);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\r\n<nav class=\"navbar navbar-default navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n         <span class=\"sr-only\">Toggle navigation</span>\r\n         <span class=\"icon-bar\"></span>\r\n         <span class=\"icon-bar\"></span>\r\n         <span class=\"icon-bar\"></span>\r\n       </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/\">HUSH CMS</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/writer\"><span class=\"glyphicon glyphicon-home\"></span>&nbsp;&nbsp;WriterHome</a></li>\r\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/editor\"><span class=\"glyphicon glyphicon-home\"></span>&nbsp;&nbsp;EditorHome</a></li>\r\n        <li><a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\"><span class=\"glyphicon glyphicon-log-out\"></span>&nbsp;&nbsp;Logout</a></li>\r\n        <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span>&nbsp;&nbsp;Register</a></li>\r\n        <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span>&nbsp;&nbsp;Login</a></li>\r\n      </ul>\r\n    </div>\r\n    <!--/.nav-collapse -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to logout user
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        this.router.navigate(['/']); // Navigate back to home page
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/protected/protected.component.css":
/***/ (function(module, exports) {

module.exports = ".warning{\r\n    height: 80vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/components/protected/protected.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"warning\">\r\n    <h1>You are not AUTHORIZED to view this page</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/components/protected/protected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProtectedComponent = /** @class */ (function () {
    function ProtectedComponent() {
    }
    ProtectedComponent.prototype.ngOnInit = function () {
    };
    ProtectedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-protected',
            template: __webpack_require__("./src/app/components/protected/protected.component.html"),
            styles: [__webpack_require__("./src/app/components/protected/protected.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProtectedComponent);
    return ProtectedComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Register Page</h1>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Registration Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\r\n\r\n  <!-- Username Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty), 'has-success': !form.controls.username.errors}\">\r\n        <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\"/>\r\n        <ul class=\"help-block\">\r\n            <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\r\n            <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\r\n        </ul>\r\n      </div>\r\n  </div>\r\n\r\n  <!-- Password Input -->\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\r\n        <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\r\n        <ul class=\"help-block\">\r\n            <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\r\n            <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\r\n            <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must contain aleast 1 Upper and Lowercase letter,  a number, a special character.</li>\r\n          </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Confirm Password Input -->\r\n  <div class=\"form-group\">\r\n      <label for=\"confirm\">Confirm Password</label>\r\n      <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\r\n        <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\r\n        <!-- Validation -->\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\r\n          <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  <!-- Submit Input -->\r\n  <input [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\r\n\r\n</form>\r\n<!-- Registration Form /-->\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Angular 2 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9\s]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
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
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        // Create user object form user's inputs
        var user = {
            // E-mail input field
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            // Resposne from registration attempt
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 2000);
            }
        });
    };
    // // Function to check if e-mail is taken
    // checkEmail() {
    //   // Function from authentication file to check if e-mail is taken
    //   this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
    //     // Check if success true or false was returned from API
    //     if (!data.success) {
    //       this.emailValid = false; // Return email as invalid
    //       this.emailMessage = data.message; // Return error message
    //     } else {
    //       this.emailValid = true; // Return email as valid
    //       this.emailMessage = data.message; // Return success message
    //     }
    //   });
    // }
    // // Function to check if username is available
    // checkUsername() {
    //   // Function from authentication file to check if username is taken
    //   this.authService.checkUsername(this.form.get('username').value).subscribe(data => {
    //     // Check if success true or success false was returned from API
    //     if (!data.success) {
    //       this.usernameValid = false; // Return username as invalid
    //       this.usernameMessage = data.message; // Return error message
    //     } else {
    //       this.usernameValid = true; // Return username as valid
    //       this.usernameMessage = data.message; // Return success message
    //     }
    //   });
    // }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/writer/createblog/createblog.component.css":
/***/ (function(module, exports) {

module.exports = "div.alert{\r\n    margin-top: 4px;\r\n    margin-bottom: 2px;\r\n}"

/***/ }),

/***/ "./src/app/components/writer/createblog/createblog.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"saveBlog(f.value)\">\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Blog Title</label>\r\n        <input type=\"text\" #title=\"ngModel\" name=\"title\" id=\"title\" ngModel class=\"form-control\" required>\r\n        <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\r\n          Title is required.\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"content\">Blog Content</label>\r\n          <textarea type=\"textarea\" rows=\"10\" cols=\"80 \"name=\"content\" id=\"content\" ngModel class=\"form-control\" (input)=\"contentChange($event.target.value)\" #content=\"ngModel\" required></textarea>\r\n          <div class=\"alert alert-danger\" *ngIf=\"content.touched && content.invalid\">\r\n              Content is required.\r\n            </div>\r\n          <div class=\"alert alert-danger\" *ngIf=\"(contentLength < 4 || contentLength > 150) && (content.dirty || content.touched)\">\r\n           Content length is  {{ contentLength }} words.</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"imageUrl\">Image URL</label>\r\n          <input type=\"text\" #imageUrl=\"ngModel\" name=\"imageUrl\" id=\"imageUrl\" ngModel class=\"form-control\" required url>\r\n          <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\r\n            <div *ngIf=\"imageUrl.errors.required\">Image URL is required.</div>\r\n            <div *ngIf=\"imageUrl.errors.url\">Please enter a valid URL.</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"tags\">Tags( space separated )</label>\r\n          <input type=\"text\" #tags=\"ngModel\" name=\"tags\" id=\"tags\" ngModel class=\"form-control\" required>\r\n          <div class=\"alert alert-danger\" *ngIf=\"tags.touched && tags.invalid\">\r\n            Tags are required.\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"category\">Blog Category</label>\r\n          <select #category=\"ngModel\" name=\"category\" id=\"category\" ngModel class=\"form-control\" required>\r\n            <option value=\"career\">Career</option>\r\n            <option value=\"employment\">Employment</option>\r\n            <option value=\"upskilling\">Upskilling</option>\r\n            <option value=\"management\">Management</option>\r\n          </select>\r\n          <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\r\n             Category is required.\r\n          </div>\r\n      </div>\r\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary\">Save</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/writer/createblog/createblog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateblogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_writer_service__ = __webpack_require__("./src/app/services/writer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateblogComponent = /** @class */ (function () {
    function CreateblogComponent(writerService, router) {
        this.writerService = writerService;
        this.router = router;
        this.contentLength = 0;
    }
    CreateblogComponent.prototype.contentChange = function (searchValue) {
        var word = searchValue.trim().split(" ");
        this.contentLength = word.length;
    };
    CreateblogComponent.prototype.saveBlog = function (blog) {
        var _this = this;
        blog.tags = blog.tags.trim().split(" ");
        console.log(blog);
        this.writerService.createBlog(blog).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.router.navigate(['/writer']);
                }, 2000);
            }
        });
    };
    CreateblogComponent.prototype.ngOnInit = function () {
    };
    CreateblogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createblog',
            template: __webpack_require__("./src/app/components/writer/createblog/createblog.component.html"),
            styles: [__webpack_require__("./src/app/components/writer/createblog/createblog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_writer_service__["a" /* WriterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CreateblogComponent);
    return CreateblogComponent;
}());



/***/ }),

/***/ "./src/app/components/writer/deleteblog/deleteblog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/writer/deleteblog/deleteblog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Delete Blog</h1>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal Confirmation Window -->\r\n<div class=\"col-md-12\" *ngIf=\"foundBlog\">\r\n  <!-- Model Outer Layer -->\r\n  <div class=\"modal-content\">\r\n    <!-- Modal Header -->\r\n    <div class=\"modal-header\">\r\n      <!-- Modal Title -->\r\n      <h4 class=\"modal-title\">Confirm</h4>\r\n    </div>\r\n\r\n    <!-- Modal Body -->\r\n    <div class=\"modal-body\">\r\n      <p>Are you sure you would like to delete this blog?</p>\r\n    </div>\r\n\r\n    <!-- Modal Footer -->\r\n    <div class=\"modal-footer\">\r\n      <!-- Yes Button -->\r\n      <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteBlog()\">Yes</button>\r\n      <!-- No Button -->\r\n      <a routerLink=\"/writer\"><button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button></a>\r\n    </div>\r\n  </div>\r\n\r\n  <br />\r\n\r\n  <!-- Panel -->\r\n  <div class=\"panel panel-primary\">\r\n    <!-- Panel Heading -->\r\n    <div class=\"panel-heading\">\r\n      <!-- Panel Title -->\r\n      <h3 class=\"panel-title\">{{ blog.title }}</h3>\r\n    </div>\r\n\r\n    <!-- Panel Body -->\r\n    <div class=\"panel-body\">\r\n      {{ blog.content }}\r\n    </div>\r\n\r\n    <!-- Panel Footer -->\r\n    <div class=\"panel-footer\">\r\n      <strong>Posted by: </strong> {{ blog.authorName }}\r\n      <br />\r\n      <strong>Date: </strong> {{ blog.createdAt | date:'MMM dd, yyyy' }}\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/writer/deleteblog/deleteblog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteblogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_writer_service__ = __webpack_require__("./src/app/services/writer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteblogComponent = /** @class */ (function () {
    function DeleteblogComponent(activatedRoute, router, writerService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.writerService = writerService;
        this.foundBlog = false;
        this.processing = false;
    }
    // Function to delete blogs
    DeleteblogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.processing = true; // Disable buttons
        // Function for DELETE request
        this.writerService.deleteBlog(this.currentParams.id).subscribe(function (data) {
            // Check if delete request worked
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error bootstrap class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return bootstrap success class
                _this.message = data.message; // Return success message
                // After two second timeout, route to blog page
                setTimeout(function () {
                    _this.router.navigate(['/writer']); // Route users to blog page
                }, 2000);
            }
        });
    };
    DeleteblogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentParams = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
        // Function for GET request to retrieve blog
        this.writerService.getSingleBlog(this.currentParams.id).subscribe(function (data) {
            // Check if request was successfull
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                // Create the blog object to use in HTML
                _this.blog = data.blog;
                _this.foundBlog = true; // Displaly blog window
            }
        });
    };
    DeleteblogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deleteblog',
            template: __webpack_require__("./src/app/components/writer/deleteblog/deleteblog.component.html"),
            styles: [__webpack_require__("./src/app/components/writer/deleteblog/deleteblog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_writer_service__["a" /* WriterService */]])
    ], DeleteblogComponent);
    return DeleteblogComponent;
}());



/***/ }),

/***/ "./src/app/components/writer/writeredit/writeredit.component.css":
/***/ (function(module, exports) {

module.exports = "div.alert{\r\n    margin-top: 4px;\r\n    margin-bottom: 2px;\r\n}"

/***/ }),

/***/ "./src/app/components/writer/writeredit/writeredit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Blog</h1>\r\n\r\n<!-- Custom Success/Erro Message -->\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <form #f=\"ngForm\" (ngSubmit)=\"updateBlog(f.value)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Blog Title</label>\r\n          <input type=\"text\" #title=\"ngModel\" name=\"title\" id=\"title\" [(ngModel)]=\"blog.title\" class=\"form-control\" required>\r\n          <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\r\n            Title is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"content\">Blog Content</label>\r\n            <textarea type=\"textarea\" rows=\"10\" cols=\"80 \"name=\"content\" id=\"content\" [(ngModel)]=\"blog.content\" class=\"form-control\" (input)=\"contentChange($event.target.value)\" #content=\"ngModel\" required></textarea>\r\n            <div class=\"alert alert-danger\" *ngIf=\"content.touched && content.invalid\">\r\n              Content is required.\r\n            </div>\r\n            <div class=\"alert alert-danger\" *ngIf=\"(contentLength < 4 || contentLength > 150) && (content.dirty || content.touched)\">\r\n            Content length is  {{ contentLength }} words.</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"imageUrl\">Image URL</label>\r\n            <input type=\"text\" #imageUrl=\"ngModel\" name=\"imageUrl\" id=\"imageUrl\" [(ngModel)]=\"blog.imageUrl\" class=\"form-control\" required url>\r\n            <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\r\n              <div *ngIf=\"imageUrl.errors.required\">Image URL is required.</div>\r\n              <div *ngIf=\"imageUrl.errors.url\">Please enter a valid URL.</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"tags\">Tags( space separated )</label>\r\n            <input type=\"text\" #tags=\"ngModel\" name=\"tags\" id=\"tags\" [(ngModel)]=\"blog.tags\" class=\"form-control\" required>\r\n            <div class=\"alert alert-danger\" *ngIf=\"tags.touched && tags.invalid\">\r\n              Tags are required.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"category\">Blog Category</label>\r\n            <select #category=\"ngModel\" name=\"category\" id=\"category\" [(ngModel)]=\"blog.category\" class=\"form-control\" required>\r\n              <option value=\"career\">Career</option>\r\n              <option value=\"employment\">Employment</option>\r\n              <option value=\"upskilling\">Upskilling</option>\r\n              <option value=\"management\">Management</option>\r\n            </select>\r\n            <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\r\n              Category is required.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"status\">Blog Status</label>\r\n            <select #status=\"ngModel\" name=\"status\" id=\"status\" [(ngModel)]=\"blog.status\" class=\"form-control\" required>\r\n              <option value=0 >Draft</option>\r\n              <option value=1>Pending Editing</option>\r\n            </select>\r\n            <div class=\"alert alert-danger\" *ngIf=\"status.touched && status.invalid\">\r\n              Status is required.\r\n            </div>\r\n        </div>\r\n        <button [disabled]=\"!f.valid\" class=\"btn btn-primary\">Save</button>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/writer/writeredit/writeredit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritereditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_writer_service__ = __webpack_require__("./src/app/services/writer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WritereditComponent = /** @class */ (function () {
    function WritereditComponent(activatedRoute, router, writerService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.writerService = writerService;
        this.blog = { "_id": null };
        this.processing = false;
        this.loading = true;
        this.contentLength = 0;
    }
    WritereditComponent.prototype.contentChange = function (searchValue) {
        var word = searchValue.trim().split(" ");
        this.contentLength = word.length;
    };
    WritereditComponent.prototype.updateBlog = function (blog) {
        var _this = this;
        var id = this.blog._id;
        blog.status = Number(blog.status);
        blog.tags = blog.tags.trim().split(" ");
        console.log(blog);
        this.writerService.updateBlog(id, blog).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.router.navigate(['/writer']);
                }, 2000);
            }
        });
    };
    WritereditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentParams = this.activatedRoute.snapshot.params; // When component loads, grab the id
        // Function to GET current blog with id in params
        this.writerService.getSingleBlog(this.currentParams.id).subscribe(function (data) {
            // Check if GET request was success or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
            }
            else {
                console.log(data.blog);
                data.blog.tags = data.blog.tags.join(" ");
                console.log(data.blog);
                _this.blog = data.blog; // Save blog object for use in HTML
                _this.loading = false; // Allow loading of blog form
            }
        });
    };
    WritereditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editblog',
            template: __webpack_require__("./src/app/components/writer/writeredit/writeredit.component.html"),
            styles: [__webpack_require__("./src/app/components/writer/writeredit/writeredit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_writer_service__["a" /* WriterService */]])
    ], WritereditComponent);
    return WritereditComponent;
}());



/***/ }),

/***/ "./src/app/components/writer/writerhome.component.css":
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.writer-info{\r\n    -ms-flex-preferred-size: 60%;\r\n        flex-basis: 60%;\r\n}"

/***/ }),

/***/ "./src/app/components/writer/writerhome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <button class=\"btn btn-primary\" routerLink=\"/writer/newblog\">New Blog</button>\r\n  <button [disabled]=\"loadingBlogs\" class=\"btn btn-primary\" (click)=\"reloadBlogs()\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Reload</button>\r\n</div>\r\n<br />\r\n<br />\r\n<div class=\"panel panel-primary\" *ngFor=\"let blog of blogPosts\">\r\n\r\n    <!-- Panel Title -->\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">{{ blog.title }}</h3>\r\n    </div>\r\n\r\n    <!-- Panel Body -->\r\n    <div class=\"panel-body\">\r\n      {{ blog.content }}\r\n    </div>\r\n\r\n    <!-- Panel Footer Start -->\r\n    <div class=\"panel-footer footer\">\r\n      <div class=\"writer-info\">\r\n          <strong>Posted by: </strong>{{ blog.authorName }}\r\n          <strong> on </strong>{{ blog.createdAt | date:'MMM dd, yyyy' }}    \r\n      </div>\r\n      <div class=\"crud-routes\">\r\n        <!-- Edit Button -->\r\n        <a [routerLink]=\"['/writer/edit-blog/', blog._id]\" ><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\r\n        <!-- Delete Button -->\r\n        <a [routerLink]=\"['/writer/delete-blog/', blog._id]\" ><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></a>\r\n      </div>\r\n    </div>\r\n    <!-- Panel Footer End -->\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/writer/writerhome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriterhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_writer_service__ = __webpack_require__("./src/app/services/writer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WriterhomeComponent = /** @class */ (function () {
    function WriterhomeComponent(writerService) {
        this.writerService = writerService;
        this.loadingBlogs = false;
    }
    // Reload blogs on current page
    WriterhomeComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true; // Used to lock button
        this.getBlogs(); // Add any new blogs to the page
        setTimeout(function () {
            _this.loadingBlogs = false; // Release button lock after four seconds
        }, 4000);
    };
    WriterhomeComponent.prototype.getBlogs = function () {
        var _this = this;
        this.writerService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs;
            console.log(_this.blogPosts);
        });
    };
    WriterhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.writerService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs;
            console.log(_this.blogPosts);
        });
    };
    WriterhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-writerhome',
            template: __webpack_require__("./src/app/components/writer/writerhome.component.html"),
            styles: [__webpack_require__("./src/app/components/writer/writerhome.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_writer_service__["a" /* WriterService */]])
    ], WriterhomeComponent);
    return WriterhomeComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/editor.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditorGuard = /** @class */ (function () {
    function EditorGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    EditorGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.hasAuthority() === "editor") {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/protected']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    EditorGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditorGuard);
    return EditorGuard;
}());



/***/ }),

/***/ "./src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/writer.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WriterGuard = /** @class */ (function () {
    function WriterGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    WriterGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.hasAuthority() === "writer") {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/protected']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    WriterGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WriterGuard);
    return WriterGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode__ = __webpack_require__("./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].domain;
        this.authToken = null;
    }
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'api/auth/signup', user).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    // Function to login to user accounts
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + 'api/auth/signin', user).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.userName = null; // Set user to null
        this.authority = null;
        this.userId = null;
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, username, authority, id) {
        localStorage.setItem('hushToken', token); // Set token in local storage
        localStorage.setItem('hushUser', username); // Set user in local storage as string
        localStorage.setItem('hushAuthority', authority);
        localStorage.setItem('hushUserId', id);
        this.authToken = token; // Assign token to be used elsewhere
        this.userName = username; // Set user to be used elsewhere
        this.authority = authority;
        this.userId = id;
    };
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('hushToken'); // Get token and asssign to variable to be used elsewhere
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        var authToken = localStorage.getItem('hushToken');
        // if(authToken){
        //   return true;
        // }else{
        //   return false;
        // }
        if (!this.isTokenExpired(authToken)) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.hasAuthority = function () {
        return localStorage.getItem('hushAuthority');
    };
    AuthService.prototype.getTokenExpirationDate = function (token) {
        var decoded = __WEBPACK_IMPORTED_MODULE_4_jwt_decode__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthService.prototype.isTokenExpired = function (token) {
        //if(!token) token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/editor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorService = /** @class */ (function () {
    function EditorService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    EditorService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    // Function to get all blogs from the database
    EditorService.prototype.getAllBlogs = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'api/editor', this.options).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    EditorService.prototype.getSingleBlog = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'api/editor/' + id, this.options).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    EditorService.prototype.updateBlog = function (id, blog) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + 'api/editor/' + id, blog, this.options).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    EditorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], EditorService);
    return EditorService;
}());



/***/ }),

/***/ "./src/app/services/writer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WriterService = /** @class */ (function () {
    function WriterService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    WriterService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    WriterService.prototype.createBlog = function (blog) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.post(this.domain + 'api/writer/new', blog, this.options).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    WriterService.prototype.getSingleBlog = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'api/writer/' + id, this.options).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    WriterService.prototype.updateBlog = function (id, blog) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.put(this.domain + 'api/writer/' + id, blog, this.options).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    // Function to get all blogs from the database
    WriterService.prototype.getAllBlogs = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + 'api/writer', this.options).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    WriterService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.delete(this.domain + 'api/writer/' + id, this.options).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    WriterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], WriterService);
    return WriterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    domain: "http://localhost:3000/"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map