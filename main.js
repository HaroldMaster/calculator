(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/calculator/calculator/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "GT3/":
/*!******************************************************!*\
  !*** ./src/app/medium-button/medium-button.model.ts ***!
  \******************************************************/
/*! exports provided: ButtonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["AC"] = 0] = "AC";
    ButtonType[ButtonType["Equal"] = 5] = "Equal";
    ButtonType[ButtonType["plus"] = 7] = "plus";
    ButtonType[ButtonType["less"] = 8] = "less";
    ButtonType[ButtonType["percent"] = 12] = "percent";
    ButtonType[ButtonType["asterisk"] = 16] = "asterisk";
})(ButtonType || (ButtonType = {}));


/***/ }),

/***/ "SJor":
/*!**********************************************************!*\
  !*** ./src/app/medium-button/medium-button.component.ts ***!
  \**********************************************************/
/*! exports provided: MediumButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumButtonComponent", function() { return MediumButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _medium_button_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medium-button.model */ "GT3/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MediumButtonComponent_button_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numberAndOperations_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numberAndOperations_r1.value, " ");
} }
function MediumButtonComponent_button_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numberAndOperations_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numberAndOperations_r1.value, " ");
} }
function MediumButtonComponent_button_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numberAndOperations_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numberAndOperations_r1.value, " ");
} }
function MediumButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediumButtonComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const numberAndOperations_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.emitBoxClick(+numberAndOperations_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MediumButtonComponent_button_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MediumButtonComponent_button_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MediumButtonComponent_button_0_div_3_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numberAndOperations_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("medium-button item", +numberAndOperations_r1.key, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +numberAndOperations_r1.key == ctx_r0.buttonType.AC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +numberAndOperations_r1.key == ctx_r0.buttonType.Equal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +numberAndOperations_r1.key != ctx_r0.buttonType.AC && +numberAndOperations_r1.key != ctx_r0.buttonType.Equal);
} }
class MediumButtonComponent {
    constructor() {
        this.numberAndOperationButtons = {};
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // @Input() numberKeyboard: number = 0;
        //position : number = 0;
        this.buttonType = _medium_button_model__WEBPACK_IMPORTED_MODULE_1__["ButtonType"];
    }
    ngOnInit() {
    }
    emitBoxClick(position) {
        this.buttonClick.emit(position);
    }
}
MediumButtonComponent.ɵfac = function MediumButtonComponent_Factory(t) { return new (t || MediumButtonComponent)(); };
MediumButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediumButtonComponent, selectors: [["app-medium-button"]], inputs: { numberAndOperationButtons: "numberAndOperationButtons" }, outputs: { buttonClick: "buttonClick" }, decls: 2, vars: 3, consts: [[3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "medium-button__number", 4, "ngIf"], [1, "medium-button__number"]], template: function MediumButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MediumButtonComponent_button_0_Template, 4, 6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "keyvalue");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.numberAndOperationButtons));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  grid-gap: 10px;\n  padding: 10px;\n  width: 100%;\n  height: 70%;\n  max-width: 30rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lZGl1bS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJtZWRpdW0tYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_operations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/operations.service */ "ZqpI");
/* harmony import */ var _number_box_number_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-box/number-box.component */ "VsMn");
/* harmony import */ var _medium_button_medium_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium-button/medium-button.component */ "SJor");




class AppComponent {
    constructor(operationsService) {
        this.operationsService = operationsService;
        this.title = 'calculator';
        this.screenValue = '0';
        this.numberAndOperationButtons = this.operationsService.numberAndOperationButtons;
    }
    numberBox(value) {
        this.screenValue = this.operationsService.changeScreen(value);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_operations_service__WEBPACK_IMPORTED_MODULE_1__["OperationsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[1, "calculator"], [1, "calculator__base"], [3, "screenNumber"], [3, "numberAndOperationButtons", "buttonClick"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-number-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-medium-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonClick", function AppComponent_Template_app_medium_button_buttonClick_3_listener($event) { return ctx.numberBox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenNumber", ctx.screenValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("numberAndOperationButtons", ctx.numberAndOperationButtons);
    } }, directives: [_number_box_number_box_component__WEBPACK_IMPORTED_MODULE_2__["NumberBoxComponent"], _medium_button_medium_button_component__WEBPACK_IMPORTED_MODULE_3__["MediumButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "V70I":
/*!************************************************!*\
  !*** ./src/app/number-box/number-box-model.ts ***!
  \************************************************/
/*! exports provided: ScreenValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenValue", function() { return ScreenValue; });
var ScreenValue;
(function (ScreenValue) {
    ScreenValue["initialValue"] = "0";
    ScreenValue["error"] = "Syntax error";
    ScreenValue["wrongOperation"] = "undefined";
})(ScreenValue || (ScreenValue = {}));


/***/ }),

/***/ "VsMn":
/*!****************************************************!*\
  !*** ./src/app/number-box/number-box.component.ts ***!
  \****************************************************/
/*! exports provided: NumberBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberBoxComponent", function() { return NumberBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NumberBoxComponent {
    constructor() {
        this.screenNumber = '';
    }
    ngOnInit() {
    }
}
NumberBoxComponent.ɵfac = function NumberBoxComponent_Factory(t) { return new (t || NumberBoxComponent)(); };
NumberBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberBoxComponent, selectors: [["app-number-box"]], inputs: { screenNumber: "screenNumber" }, decls: 3, vars: 1, consts: [[1, "number-box"], [1, "number-box__screen"]], template: function NumberBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.screenNumber);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 30rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL251bWJlci1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJudW1iZXItYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMzByZW07XG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _medium_button_medium_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medium-button/medium-button.component */ "SJor");
/* harmony import */ var _number_box_number_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number-box/number-box.component */ "VsMn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _medium_button_medium_button_component__WEBPACK_IMPORTED_MODULE_2__["MediumButtonComponent"],
        _number_box_number_box_component__WEBPACK_IMPORTED_MODULE_3__["NumberBoxComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "ZqpI":
/*!********************************************!*\
  !*** ./src/app/core/operations.service.ts ***!
  \********************************************/
/*! exports provided: OperationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsService", function() { return OperationsService; });
/* harmony import */ var _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../medium-button/medium-button.model */ "GT3/");
/* harmony import */ var _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../number-box/number-box-model */ "V70I");
/* harmony import */ var _core_operation_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/operation.model */ "gSEW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class OperationsService {
    constructor() {
        this.SCREEN_MAX_LENGTH = 6;
        this.numberAndOperationButtons = {
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].AC]: 'AC',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].seven]: '7',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].three]: '3',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].two]: '2',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].one]: '1',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].equal]: '=',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].zero]: '0',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].plus]: '+',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].less]: '-',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].eight]: '8',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].nine]: '9',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].percent]: '%',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].four]: '4',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].five]: '5',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].six]: '6',
            [_core_operation_model__WEBPACK_IMPORTED_MODULE_2__["KeyPosition"].asterisk]: '*',
        };
        this.resultOnScreen = false;
        this.numberScreen = '';
    }
    changeScreen(position) {
        position = this.restoreAfterResult(position);
        if (this.resultOnScreen) {
            switch (position) {
                case _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].AC:
                    this.numberScreen = this.resetScreen();
                    return this.numberScreen;
                case _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].asterisk:
                case _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].less:
                case _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].plus:
                case _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].percent:
                    this.numberScreen = this.appendNewOperation(position);
                    this.resultOnScreen = false;
                    return this.numberScreen;
                default:
                    this.numberScreen = this.numberAndOperationButtons[position];
                    this.resultOnScreen = false;
                    return this.numberScreen;
            }
        }
        switch (position) {
            case _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].AC:
                this.numberScreen = _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__["ScreenValue"].initialValue;
                return this.numberScreen;
            case _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].Equal:
                this.numberScreen = this.errorHandler();
                return this.numberScreen;
            default:
                this.resultOnScreen = false;
                break;
        }
        if (this.numberScreen === _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__["ScreenValue"].error &&
            position !== _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].Equal) {
            this.numberScreen = this.newOperationAfterError(position);
            return this.numberScreen;
        }
        this.newOperation(position);
        return this.numberScreen;
    }
    resolveOperation(expression) {
        let result = '';
        if (this.numberScreen != _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__["ScreenValue"].error) {
            result = eval(expression) + '';
            this.resultOnScreen = true;
            return result;
        }
        else {
            result = _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__["ScreenValue"].initialValue;
            this.resultOnScreen = false;
            return result;
        }
    }
    restoreAfterResult(position) {
        if (position == _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].Equal && this.resultOnScreen == true) {
            position = _medium_button_medium_button_model__WEBPACK_IMPORTED_MODULE_0__["ButtonType"].AC;
        }
        return position;
    }
    newOperation(position) {
        if (this.numberScreen.length <= this.SCREEN_MAX_LENGTH) {
            if (this.numberScreen === _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__["ScreenValue"].initialValue) {
                this.numberScreen = this.numberAndOperationButtons[position] + '';
            }
            else {
                this.numberScreen += '' + this.numberAndOperationButtons[position];
            }
        }
    }
    resetScreen() {
        return _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__["ScreenValue"].initialValue;
    }
    appendNewOperation(position) {
        let append = this.numberScreen + this.numberAndOperationButtons[position];
        return append;
    }
    errorHandler() {
        let screenValue = '';
        if (this.numberScreen == _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__["ScreenValue"].wrongOperation) {
            screenValue = _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__["ScreenValue"].error;
            return screenValue;
        }
        else {
            try {
                screenValue = this.resolveOperation(this.numberScreen);
            }
            catch (error) {
                screenValue = _number_box_number_box_model__WEBPACK_IMPORTED_MODULE_1__["ScreenValue"].error;
                this.resultOnScreen = false;
                return screenValue;
            }
            return screenValue;
        }
    }
    newOperationAfterError(position) {
        let newOperation = this.numberAndOperationButtons[position] + '';
        return newOperation;
    }
}
OperationsService.ɵfac = function OperationsService_Factory(t) { return new (t || OperationsService)(); };
OperationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OperationsService, factory: OperationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gSEW":
/*!*****************************************!*\
  !*** ./src/app/core/operation.model.ts ***!
  \*****************************************/
/*! exports provided: KeyPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyPosition", function() { return KeyPosition; });
var KeyPosition;
(function (KeyPosition) {
    KeyPosition[KeyPosition["AC"] = 0] = "AC";
    KeyPosition[KeyPosition["seven"] = 1] = "seven";
    KeyPosition[KeyPosition["three"] = 2] = "three";
    KeyPosition[KeyPosition["two"] = 3] = "two";
    KeyPosition[KeyPosition["one"] = 4] = "one";
    KeyPosition[KeyPosition["equal"] = 5] = "equal";
    KeyPosition[KeyPosition["zero"] = 6] = "zero";
    KeyPosition[KeyPosition["plus"] = 7] = "plus";
    KeyPosition[KeyPosition["less"] = 8] = "less";
    KeyPosition[KeyPosition["eight"] = 10] = "eight";
    KeyPosition[KeyPosition["nine"] = 11] = "nine";
    KeyPosition[KeyPosition["percent"] = 12] = "percent";
    KeyPosition[KeyPosition["four"] = 13] = "four";
    KeyPosition[KeyPosition["five"] = 14] = "five";
    KeyPosition[KeyPosition["six"] = 15] = "six";
    KeyPosition[KeyPosition["asterisk"] = 16] = "asterisk";
})(KeyPosition || (KeyPosition = {}));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map