/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/Components/Additional.jsx":
/*!**********************************************!*\
  !*** ./client/src/Components/Additional.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.js */ \"./client/src/style.js\");\nvar Additional=function Additional(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"additionalTab\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"additionalStyleD\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"additionalStyleP\"]},props.additional));};/* harmony default export */ __webpack_exports__[\"default\"] = (Additional);\n\n//# sourceURL=webpack:///./client/src/Components/Additional.jsx?");

/***/ }),

/***/ "./client/src/Components/Attributes.jsx":
/*!**********************************************!*\
  !*** ./client/src/Components/Attributes.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.js */ \"./client/src/style.js\");\nvar Attributes=function Attributes(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"attributesTab\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\",{className:\"table2\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"ulAtt\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",{className:\"tableLine\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"liGreyItal\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"key\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanKey\"]},\"Additional Features\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"val\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanVal\"]})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",{className:\"tableLine gray\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"key\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanKey\"]},\"Primary Color\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"val\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanVal\"]},props.attributes.primaryColor)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",{className:\"tableLine\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"liGrey\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"key\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanKey\"]},\"Material\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"val\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanVal\"]},props.attributes.material))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\",{className:\"table2\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"ulAtt\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",{className:\"tableLine\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"liGreyItal\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"key\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanKey\"]},\"Item Dimensions\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"val\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanVal\"]})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",{className:\"tableLine gray\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"key\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanKey\"]},\"Length\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"val\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanVal\"]},props.attributes.length)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",{className:\"tableLine\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"liGrey\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"key\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanKey\"]},\"Width\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"val\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanVal\"]},props.attributes.width))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Attributes);\n\n//# sourceURL=webpack:///./client/src/Components/Attributes.jsx?");

/***/ }),

/***/ "./client/src/Components/Description.jsx":
/*!***********************************************!*\
  !*** ./client/src/Components/Description.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.js */ \"./client/src/style.js\");\nvar Description=function Description(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"descriptionTab\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"directionStyleD\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{id:\"left\",style:{\"float\":'left'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"title\"]},props.description.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\",{style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"bullets\"]},props.description.description.map(function(line){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",null,line);}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\",{className:\"table\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"ulDesc\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",{className:\"tableLine\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"liGrey\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"key\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanKey\"]},\"SKU\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"val\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanValDesc\"]},props.description.SKU)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",{className:\"tableLine gray\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"key\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanKey\"]},\"Primary Brand\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"val\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanValDesc\"]},props.description.primaryBrand)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\",{className:\"tableLine\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"liGrey\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"key\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanKey\"]},\"Days to Ship\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:\"val\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"spanValDesc\"]},props.description.daysToShip)))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\n//# sourceURL=webpack:///./client/src/Components/Description.jsx?");

/***/ }),

/***/ "./client/src/Components/Directions.jsx":
/*!**********************************************!*\
  !*** ./client/src/Components/Directions.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.js */ \"./client/src/style.js\");\nvar Directions=function Directions(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"directionsTab\",style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"directionStyleD\"]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{style:_style_js__WEBPACK_IMPORTED_MODULE_1__[\"directionStyleP\"]},props.directions));};/* harmony default export */ __webpack_exports__[\"default\"] = (Directions);\n\n//# sourceURL=webpack:///./client/src/Components/Directions.jsx?");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Description_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Description.jsx */ \"./client/src/Components/Description.jsx\");\n/* harmony import */ var _Components_Directions_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Directions.jsx */ \"./client/src/Components/Directions.jsx\");\n/* harmony import */ var _Components_Attributes_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Attributes.jsx */ \"./client/src/Components/Attributes.jsx\");\n/* harmony import */ var _Components_Additional_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Additional.jsx */ \"./client/src/Components/Additional.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.js */ \"./client/src/style.js\");\nfunction _typeof(obj){\"@babel/helpers - typeof\";if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect===\"undefined\"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy===\"function\")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var DescriptionService=/*#__PURE__*/function(_React$Component){_inherits(DescriptionService,_React$Component);var _super=_createSuper(DescriptionService);function DescriptionService(props){var _this;_classCallCheck(this,DescriptionService);_this=_super.call(this,props);_this.state={current:'',data:{}};_this.changeModule=_this.changeModule.bind(_assertThisInitialized(_this));_this.onMouseOver=_this.onMouseOver.bind(_assertThisInitialized(_this));_this.onMouseOut=_this.onMouseOut.bind(_assertThisInitialized(_this));return _this;}//Development componentDidMount. Hardcoded to item 100\n// componentDidMount() {\n//   axios.get('/descriptionObject/2010')\n//     .then(data => {\n//       console.log('success getting data in componentDidMount: ', data);\n//       this.setState({\n//         current: 'description',\n//         data: data.data\n//       });\n//       console.log('state: ', this.state);\n//     })\n//     .catch(err => {\n//       console.log('error getting descObj in componentDidMount: ', err);\n//     });\n// }\n//Proxy componentDidMount\n_createClass(DescriptionService,[{key:\"componenDidMount\",value:function componenDidMount(){var _this2=this;console.log('CDM firing!');var item=window.location.search.slice(2);//local address\nvar address='http://localhost';//deployed address\n// const address = 'http://52.14.208.55';\naxios__WEBPACK_IMPORTED_MODULE_5___default.a.get(\"\".concat(address,\":3002/descriptionObject/\").concat(item)).then(function(data){console.log('success getting data in componentDidMount');var bullets=data.data.description.description.split('. ');data.data.description.description=bullets;_this2.setState({current:'descriptionB',data:data.data});console.log('state: ',_this2.state);})[\"catch\"](function(err){console.log('error getting descObj in componentDidMount: ',err);});}},{key:\"changeModule\",value:function changeModule(e){var newState=e.target.id;this.setState({current:newState});}},{key:\"onMouseOver\",value:function onMouseOver(e){var element=document.getElementById(e.target.id);element.style.color='#00395e';}},{key:\"onMouseOut\",value:function onMouseOut(e){var element=document.getElementById(e.target.id);element.style.color='#005891';}},{key:\"render\",value:function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"indexComponent\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"buttons\",style:{width:'875px',margin:'30px auto'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{style:{marginLeft:'100px'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\",{id:\"descriptionB\",style:_style_js__WEBPACK_IMPORTED_MODULE_6__[\"button\"],onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseOut,onClick:this.changeModule},\"Description\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\",{id:\"directionsB\",style:_style_js__WEBPACK_IMPORTED_MODULE_6__[\"button\"],onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseOut,onClick:this.changeModule},\"Directions\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\",{id:\"attributesB\",style:_style_js__WEBPACK_IMPORTED_MODULE_6__[\"button\"],onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseOut,onClick:this.changeModule},\"Attributes/Specifications\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\",{id:\"additionalB\",style:_style_js__WEBPACK_IMPORTED_MODULE_6__[\"button\"],onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseOut,onClick:this.changeModule},\"Additional Details\"))),this.state.current==='descriptionB'&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Description_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{description:this.state.data.description}),this.state.current==='directionsB'&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Directions_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{directions:this.state.data.directions.directions}),this.state.current==='attributesB'&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Attributes_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{attributes:this.state.data.attributes}),this.state.current==='additionalB'&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Additional_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{additional:this.state.data.details.additionalDetails}));}}]);return DescriptionService;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__[\"default\"] = (DescriptionService);// ReactDOM.render(<DescriptionService />, document.getElementById('description'));\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ }),

/***/ "./client/src/style.js":
/*!*****************************!*\
  !*** ./client/src/style.js ***!
  \*****************************/
/*! exports provided: button, directionStyleP, directionStyleD, additionalStyleP, additionalStyleD, spanKey, spanVal, spanValDesc, ulAtt, liGrey, liGreyItal, ulDesc, title, bullets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"button\", function() { return button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"directionStyleP\", function() { return directionStyleP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"directionStyleD\", function() { return directionStyleD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"additionalStyleP\", function() { return additionalStyleP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"additionalStyleD\", function() { return additionalStyleD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spanKey\", function() { return spanKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spanVal\", function() { return spanVal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spanValDesc\", function() { return spanValDesc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ulAtt\", function() { return ulAtt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"liGrey\", function() { return liGrey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"liGreyItal\", function() { return liGreyItal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ulDesc\", function() { return ulDesc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bullets\", function() { return bullets; });\nvar button={display:'inline-table',width:'auto',verticalAlign:'middle',border:'2px solid #fff',borderRadius:'5px',margin:'0 10px',transition:'.3s',padding:'0 17px',textAlign:'center',maxWidth:'200px',height:'50px',boxSizing:'border-box',cursor:'pointer',position:'relative',color:'#005891',fontSize:'.9375em',fontWeight:'bold',backgroundColor:'white'};var directionStyleP={color:'#333',fontSize:'.9375em',lineHeight:'1.6em',fontFamily:'Arial, sans-serif'};var directionStyleD={margin:'0px 20px',padding:'0',border:'0',fontSize:'100%',font:'inherit',verticalAlign:'baseline'};var additionalStyleP={color:'#333',fontFamily:'tahoma, arial, helvetica, sans-serif',fontSize:'12px'};var additionalStyleD={margin:'0px 20px',padding:'0',border:'0',fontSize:'100%',font:'inherit',verticalAlign:'baseline'};var ulAtt={width:'34%',margin:'0',fontFamily:'Arial, sans-serif',lineHeight:'1.25em',listStyle:'none',marginBottom:'20px'};var ulDesc={width:'34%',margin:'0',fontFamily:'Arial, sans-serif',lineHeight:'1.25em',listStyle:'none',marginBottom:'20px',\"float\":'right'};var title={color:'#333',fontSize:'.9375em',fontFamily:'Arial, sans-serif',lineHeight:'1.6em',display:'block',marginBlockStart:'1em',marginBlockEnd:'1em',marginInlineStart:'0px',marginInlineEnd:'0px',textAlign:'left',verticalAlign:'baseline',margin:'0',padding:'0'};var bullets={display:'block',marginBlockStart:'1em',marginBlockEnd:'1em',marginInlineStart:'0px',marginInlineEnd:'40px',lineHeight:'1.25em',color:'#333',fontSize:'.9375em',fontFamily:'Arial, sans-serif',textAlign:'left',margin:'0'};var liGrey={backgroundColor:'rgba(233,236,237,0.5)',borderTop:'1px solid #d4dadc',borderBottom:'1px solid #d4dadc'};var liGreyItal={backgroundColor:'rgba(233,236,237,0.5)',borderTop:'1px solid #d4dadc',borderBottom:'1px solid #d4dadc',fontStyle:'italic',textAlign:'left',fontWeight:'bold',fontSize:'0.9375em',whiteSpace:'nowrap'};var spanKey={boxSizing:'border-box',display:'inline-block',padding:'9px 11px',color:'#333',width:'40%',fontWeight:'bold',fontSize:'0.9375em'};var spanVal={boxSizing:'border-box',display:'inline-block',padding:'9px 11px',position:'relative',left:'135px',fontSize:'0.9375em',color:'#333',vertialAlign:'middle'};var spanValDesc={boxSizing:'border-box',display:'inline-block',padding:'9px 11px',position:'relative',left:'10px',fontSize:'0.9375em',color:'#333',vertialAlign:'middle'};// const body = {\n//   width: '100%',\n//   margin: '0 auto',\n//   padding: '5px'\n//   //display: 'block',\n//  // margin: '0',\n//   // marginLeft: '100px',\n//   // marginRight: '100px',\n//   // //padding: '0',\n//   // border: '0',\n//   // fontSize: '100%',\n//   // verticalAlign: 'baseline',\n//   // //display: 'block',\n//   // //width: '900px',\n//   // padding: '13px 20px 12px',\n//   // // position: 'relative',\n//   // width: '100%'\n// }\n// const buttonStyle = {\n//   color: '#005891',\n//   fontSize: '.9375em',\n//   fontWeight: 'bold',\n//   lineHeight: '1.2em',\n//   display: 'table-cell',\n//   verticalAlign: 'middle',\n//   backgroundColor: 'white',\n//   border: '2px solid #fff',\n//   borderRadius: '5px',\n//   margin: '0 10px',\n//   transition: '.3s',\n//   padding: '0 17px',\n//   textAlign: 'center',\n//   height: '50px',\n//   cursor: 'pointer'\n// }\n// const spanKey = {\n//   boxSizing: 'border-box',\n//   display: 'inline-block',\n//   padding: '9px 11px',\n//   color: '#333',\n//   width: '40%',\n//   fontWeight: 'bold'\n// }\n// const spanVal = {\n//   boxSizing: 'border-box',\n//   display: 'inline-block',\n//   padding: '9px 11px'\n// }\n// const liGrey = {\n//   backgroundColor: 'rgba(233,236,237,0.5)',\n//   borderTop: '1px solid #d4dadc',\n//   borderBottom: '1px solid #d4dadc'\n// }\n// const ul = {\n//   width: '34%',\n//   float: 'right',\n//   margin: '0',\n//   fontFamily: 'Arial,sans-serif',\n//   lineHeight: '1.25em',\n//   listStyle: 'none'\n// }\n// const left = {\n//   width: '66%',\n//   float: 'left',\n//   fontFamily: 'Arial, sans-serif',\n//   color: '#333',\n//   lineHeight: '1.25em'\n// }\n// const para = {\n//   display: 'block',\n//   marginBlockStart: '1em',\n//   marginBlockEnd: '1em',\n//   marginInlineStart: '0px',\n//   marginInlineEnd: '0px'\n// }\n// const bullets = {\n//   display: 'block',\n//   marginBlockStart: '1em',\n//   marginBlockEnd: '1em',\n//   marginInlineStart: '0px',\n//   marginInlineEnd: '0px',\n//   paddingInlineStart: '40px'\n// }\n// const leftUl = {\n//   color: '#333',\n//   fontSize: '.9375em',\n//   marginLeft: '20px'\n// }\n// const p = {\n//   color: '#333',\n//   fontSize: '.9375em',\n//   lineHeight: '1.6em'\n// }\n// const divStyle = {\n//   position: 'relative',\n//   width: '100%',\n//   padding: '20px'\n// }\n// const directions = {\n//   fontFamily: 'Arial, sans-serif',\n//   color: '#333',\n//   fontSize: '.9375em',\n//   lineHeight: '1.6em'\n// }\n// const additional = {\n//   fontFamily: 'tahoma, arial, helvetica, sans-serif',\n//   fontSize: '12px',\n//   color: '#333'\n// }\n// const italKey = {\n//   fontStyle: 'italic',\n//   boxSizing: 'border-box',\n//   display: 'inline-block',\n//   padding: '9px 11px',\n//   color: '#333',\n//   width: '40%',\n//   fontWeight: 'bold',\n//   textAlign: 'left',\n//   fontSize: '0.9375em'\n// }\n// // const leftTable = {\n// //   display: 'block',\n// //   float: 'left'\n// // }\n// export {\n//   body,\n//   buttonStyle,\n//   spanKey,\n//   spanVal,\n//   liGrey,\n//   ul,\n//   left,\n//   leftUl,\n//   p,\n//   divStyle,\n//   directions,\n//   additional,\n//   italKey,\n//   para,\n//   bullets\n// }\n\n//# sourceURL=webpack:///./client/src/style.js?");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.user='samjohnson';\n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./database-mongodb/index.js":
/*!***********************************!*\
  !*** ./database-mongodb/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose=__webpack_require__(/*! mongoose */ \"mongoose\");var Mockgoose=__webpack_require__(/*! mockgoose */ \"mockgoose\").Mockgoose;var mockgoose=new Mockgoose(mongoose);//development:\nif(process.env.node_env==='mockgoose'){mockgoose.prepareStorage().then(function(){console.log('mockgoose running');mongoose.connect('mongodb://localhost/petco_descriptions',{useUnifiedTopology:true,useNewUrlParser:true});})[\"catch\"](function(err){console.log('Mockgoose connection failed: ',err);});}else{mongoose.connect('mongodb://localhost/petco_descriptions',{useUnifiedTopology:true,useNewUrlParser:true});}//production:\n// mongoose.connect('mongodb://ec2-52-14-208-55.us-east-2.compute.amazonaws.com/Description', { useUnifiedTopology: true, useNewUrlParser: true });\nvar db=mongoose.connection;db.on('error',function(){console.log('error connecting to db');});db.once('open',function(){console.log('connected to mongoDB');});//MODELS SECTION\nvar descriptionSchema=new mongoose.Schema({title:{type:String,required:true},description:String,SKU:Number,primaryBrand:String,daysToShip:String},{_id:false});var directionsSchema=new mongoose.Schema({directions:String},{_id:false});var attributesSchema=new mongoose.Schema({primaryColor:String,material:String,length:String,width:String},{_id:false});var detailsSchema=new mongoose.Schema({additionalDetails:String},{_id:false});var itemSchema=new mongoose.Schema({itemId:{type:Number,required:true},description:descriptionSchema,directions:directionsSchema,attributes:attributesSchema,details:detailsSchema});var Description=mongoose.model('Description',itemSchema);//itemInformation Controllers\nvar getTitleAndBrand=function getTitleAndBrand(itemId){return Description.aggregate([{$match:{itemId:itemId}},{$project:{title:'$description.title',primaryBrand:'$description.primaryBrand',_id:0}},{$limit:1}]).hint({itemId:1}).exec();};var getTitlesAndBrands=function getTitlesAndBrands(itemIds){return Description.aggregate([{$match:{itemId:{$in:itemIds}}},{$project:{title:'$description.title',primaryBrand:'$description.primaryBrand',_id:0}},{$limit:itemIds.length}]).hint({itemId:1}).exec();};// descriptionObject Controllers\nvar getDescriptionObject=function getDescriptionObject(itemId){return Description.find({itemId:itemId},{_id:0,__v:0,itemId:0}).limit(1).lean().exec();};var postDescriptionObject=function postDescriptionObject(descObj){return new Description(descObj).save({validateBeforeSave:false});};var putDescriptionObject=function putDescriptionObject(itemId,descObj){return Description.update({itemId:itemId},descObj,{upsert:true,hint:{itemId:1}});};var deleteDescriptionObject=function deleteDescriptionObject(itemId){return Description.remove({itemId:itemId},{justOne:true});};module.exports.Description=Description;module.exports.db=db;module.exports.getTitleAndBrand=getTitleAndBrand;module.exports.getDescriptionObject=getDescriptionObject;module.exports.getTitlesAndBrands=getTitlesAndBrands;module.exports.postDescriptionObject=postDescriptionObject;module.exports.putDescriptionObject=putDescriptionObject;module.exports.deleteDescriptionObject=deleteDescriptionObject;\n\n//# sourceURL=webpack:///./database-mongodb/index.js?");

/***/ }),

/***/ "./database-postgres/index.js":
/*!************************************!*\
  !*** ./database-postgres/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require=__webpack_require__(/*! pg */ \"pg\"),Pool=_require.Pool;var _require2=__webpack_require__(/*! ../config.js */ \"./config.js\"),user=_require2.user;var pool=new Pool({user:user,port:5432,database:'petco_descriptions'});module.exports.db=pool.connect(function(err,client,release){if(err){return console.error('connection failed',err.stack);}client.query('SELECT NOW()',function(err,result){if(err){return console.error('Error executing query',err.stack);}console.log('connected to pg',result.rows);});});//getTitleAndBrand\nvar getTitleAndBrand=function getTitleAndBrand(itemId){return pool.query(\"SELECT title, primarybrand FROM descriptions JOIN brands ON descriptions.brand_id=brands.brandId WHERE itemId=\".concat(itemId)).then(function(data){data.rows[0].primaryBrand=data.rows[0].primarybrand;delete data.rows[0].primarybrand;return data;})[\"catch\"](function(err){throw err;});};var getTitlesAndBrands=function getTitlesAndBrands(itemIds){var idList='';itemIds.map(function(id){return idList+=id+', ';});idList=idList.slice(0,-2);return pool.query(\"SELECT title, primarybrand FROM descriptions JOIN brands ON descriptions.brand_id=brands.brandId WHERE itemId IN (\".concat(idList,\")\")).then(function(data){data.rows.map(function(row){row.primaryBrand=row.primarybrand;delete row.primarybrand;});return data.rows;})[\"catch\"](function(err){console.log('failtown');throw err;});};//getDescriptionObject controllers\nvar getDescriptionObject=function getDescriptionObject(itemId){return pool.query(\"SELECT itemId, title, description, sku, daysToShip, directions, material, length, width, additionalDetails, primaryBrand, primaryColor FROM descriptions JOIN colors ON descriptions.color_id=colors.colorId JOIN brands ON descriptions.brand_id=brands.brandId WHERE descriptions.itemId=\".concat(itemId)).then(function(data){data.rows[0].SKU=data.rows[0].sku;data.rows[0].daysToShip=data.rows[0].daystoship;data.rows[0].additionalDetails=data.rows[0].additionaldetails;data.rows[0].primaryColor=data.rows[0].primarycolor;data.rows[0].primaryBrand=data.rows[0].primarybrand;return data.rows;})[\"catch\"](function(err){throw err;});};module.exports.getDescriptionObject=getDescriptionObject;module.exports.getTitleAndBrand=getTitleAndBrand;module.exports.getTitlesAndBrands=getTitlesAndBrands;\n\n//# sourceURL=webpack:///./database-postgres/index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_src_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client/src/index.jsx */ \"./client/src/index.jsx\");\nfunction _readOnlyError(name){throw new Error(\"\\\"\"+name+\"\\\" is read-only\");}var newrelic=__webpack_require__(/*! newrelic */ \"newrelic\");var morgan=__webpack_require__(/*! morgan */ \"morgan\");var express=__webpack_require__(/*! express */ \"express\");var path=__webpack_require__(/*! path */ \"path\");var redis=__webpack_require__(/*! redis */ \"redis\");var client=redis.createClient();var ReactDOMServer=__webpack_require__(/*! react-dom/server */ \"react-dom/server\");var React=__webpack_require__(/*! react */ \"react\");var fs=__webpack_require__(/*! fs */ \"fs\");var db;if(process.env.node_env==='postgres'){db=__webpack_require__(/*! ./database-postgres/index.js */ \"./database-postgres/index.js\");}else{db=__webpack_require__(/*! ./database-mongodb/index.js */ \"./database-mongodb/index.js\");}var app=express();app.use(express.json());// app.use(morgan('dev'));\n//crossorigin permission for 3000, 3004, 3005 and 3006\napp.use(function(req,res,next){//local address\nvar address='http://localhost';var address2='http://localhost';var address3='http://localhost';//deployed address\n// var address = 'http://52.14.208.55'; //me\n// var address2 = 'http://54.183.137.155'; // nick\n// var address3 = 'http://18.224.229.28'; // kate\nvar referer=req.headers.referer;if(referer){if(req.headers.referer.includes(\"\".concat(address2,\":3004\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address2,\":3004\"));//recommended\n}else if(req.headers.referer.includes('3005')){res.header('Access-Control-Allow-Origin',\"\".concat(address,\":3005\"));//title/price\n}else if(req.headers.referer.includes(\"\".concat(address3,\":3006\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address3,\":3006\"));//deliver\n}else if(req.headers.referer.includes(\"\".concat(address,\":3000\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address,\":3000\"));//my proxy\n}else if(req.headers.referer.includes(\"\".concat(address2,\":3000\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address2,\":3000\"));//nick's proxy\n}else if(req.headers.referer.includes(\"\".concat(address3,\":3000\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address3,\":3000\"));//kate's proxy\n}}next();});//redis caching middleware\nvar redisMiddleware=function redisMiddleware(req,res,next){var key='__expIress'+req.originalUrl||false;client.get(key,function(err,reply){if(reply){res.send(JSON.parse(reply));}else{res.sendResponse=res.send;res.send=function(body){typeof body==='string'?client.set(key,body):client.set(key,JSON.stringify(body));res.sendResponse(body);};next();}});};//gzip\napp.get('*.js',function(req,res,next){req.url=req.url+'.gz';res.set({'Content-Encoding':'gzip','Content-Type':'application/javascript'});next();});app.get('/',function(req,res){var serviceApp=ReactDOMServer.renderToString(/*#__PURE__*/React.createElement(_client_src_index_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"],null));var indexFile=path.resolve('./client/public/index.html');fs.readFile(indexFile,'utf-8',function(err,data){if(err){console.error('Something went wrong:',err);return res.status(500).send('Oops, better luck next time!');}return res.send(data.replace('<div id=\"description\"></div>',\"<div id=\\\"description\\\">\".concat(serviceApp,\"</div>\")));});});app.use(express[\"static\"]('/Users/samjohnson/Documents/hrfiles/petco/description_directions_attributes_/client/public'));//get title and brand name for an item\napp.get('/itemInformation/:itemId',function(req,res){var itemId=req.params.itemId;if(itemId.includes('array')){var itemsInArray=itemId.substring(5);var itemIds=itemsInArray.split(',').map(function(id){return parseInt(id);});var invalidId=false;for(var i=0;i<itemIds.length;i++){if(itemIds[i]<100||itemIds[i]>1e7+100){res.status(404).send('Invalid itemId');invalidId=(_readOnlyError(\"invalidId\"),true);break;}}if(!invalidId){db.getTitlesAndBrands(itemIds).then(function(data){res.send(data);})[\"catch\"](function(err){res.status(404);});}}else if(itemId<100||itemId>1e7+100){// console.log(itemId);\nres.status(404).send('Invalid itemId');}else{db.getTitleAndBrand(parseInt(itemId)).then(function(data){// console.log('success getting title and brand', data);\nres.send(data[0]);})[\"catch\"](function(err){res.status(500).send(err);// console.log('error in getTitleAndBrand: ', err);\n});}});//get full description object for an item\napp.get('/descriptionObject/:itemId',redisMiddleware,function(req,res){var itemId=req.params.itemId;db.getDescriptionObject(itemId).then(function(data){// console.log('success getting descriptionObj', data);\n!data[0]?res.sendStatus(404):res.send(data[0]);})[\"catch\"](function(err){res.status(500).send(err);// console.log('error in getDescriptionObject: ', err);\n});});//post description object for a new item\n// app.post('/descriptionObject', (req, res) => {\n//   const descObj = req.body;\n//   db.getDescriptionObject(descObj.itemId)\n//     .then((result) => {\n//       if (result[0]) {\n//         res.sendStatus(409);\n//       } else {\n//         return db.postDescriptionObject(descObj.itemId, descObj)\n//       }\n//     })\n//     .then((data) => {\n//       // console.log('successful post of data:', !!data);\n//       data ? res.sendStatus(201) : null;\n//     })\n//     .catch((err) => {\n//       // console.log(err);\n//       res.sendStatus(500);\n//     });\n// });\napp.post('/descriptionObject',function(req,res){var descObj=req.body;db.postDescriptionObject(descObj).then(function(data){// console.log('successful post of data:', data);\ndata?res.sendStatus(201):null;})[\"catch\"](function(err){err.code===11000?res.sendStatus(409):res.sendStatus(500);});});//update description object for an item\napp.put('/descriptionObject/:itemId',function(req,res){var descObj=req.body;var itemId=req.params.itemId;db.putDescriptionObject(itemId,descObj).then(function(data){// console.log('successful description update', data);\n!data?res.sendStatus(201):res.sendStatus(200);client.flushdb();})[\"catch\"](function(err){res.sendStatus(500);});});app[\"delete\"]('/descriptionObject/:itemId',function(req,res){var itemId=req.params.itemId;db.deleteDescriptionObject(itemId).then(function(data){// console.log('successfully deleted description', data);\n!data?res.sendStatus(404):res.sendStatus(200);client.flushdb();})[\"catch\"](function(err){// console.log(err);\nres.sendStatus(500);});});app.listen(3002,function(){console.log('server is listening on port 3002');});// module.exports = app;\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mockgoose":
/*!****************************!*\
  !*** external "mockgoose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mockgoose\");\n\n//# sourceURL=webpack:///external_%22mockgoose%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "newrelic":
/*!***************************!*\
  !*** external "newrelic" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"newrelic\");\n\n//# sourceURL=webpack:///external_%22newrelic%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ })

/******/ });