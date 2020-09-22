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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {function _readOnlyError(name){throw new Error(\"\\\"\"+name+\"\\\" is read-only\");}var newrelic=__webpack_require__(/*! newrelic */ \"newrelic\");var morgan=__webpack_require__(/*! morgan */ \"morgan\");var express=__webpack_require__(/*! express */ \"express\");var path=__webpack_require__(/*! path */ \"path\");var redis=__webpack_require__(/*! redis */ \"redis\");var client=redis.createClient();// const App = require('./client/src/index.jsx')\nvar db;if(process.env.node_env==='postgres'){db=__webpack_require__(/*! ./database-postgres/index.js */ \"./database-postgres/index.js\");}else{db=__webpack_require__(/*! ./database-mongodb/index.js */ \"./database-mongodb/index.js\");}var app=express();app.use(express.json());// app.use(morgan('dev'));\n//crossorigin permission for 3000, 3004, 3005 and 3006\napp.use(function(req,res,next){//local address\nvar address='http://localhost';var address2='http://localhost';var address3='http://localhost';//deployed address\n// var address = 'http://52.14.208.55'; //me\n// var address2 = 'http://54.183.137.155'; // nick\n// var address3 = 'http://18.224.229.28'; // kate\nvar referer=req.headers.referer;if(referer){if(req.headers.referer.includes(\"\".concat(address2,\":3004\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address2,\":3004\"));//recommended\n}else if(req.headers.referer.includes('3005')){res.header('Access-Control-Allow-Origin',\"\".concat(address,\":3005\"));//title/price\n}else if(req.headers.referer.includes(\"\".concat(address3,\":3006\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address3,\":3006\"));//deliver\n}else if(req.headers.referer.includes(\"\".concat(address,\":3000\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address,\":3000\"));//my proxy\n}else if(req.headers.referer.includes(\"\".concat(address2,\":3000\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address2,\":3000\"));//nick's proxy\n}else if(req.headers.referer.includes(\"\".concat(address3,\":3000\"))){res.header('Access-Control-Allow-Origin',\"\".concat(address3,\":3000\"));//kate's proxy\n}}next();});//redis caching middleware\nvar redisMiddleware=function redisMiddleware(req,res,next){var key='__expIress'+req.originalUrl||false;client.get(key,function(err,reply){if(reply){res.send(JSON.parse(reply));}else{res.sendResponse=res.send;res.send=function(body){typeof body==='string'?client.set(key,body):client.set(key,JSON.stringify(body));res.sendResponse(body);};next();}});};//gzip\napp.get('*.js',function(req,res,next){req.url=req.url+'.gz';res.set({'Content-Encoding':'gzip','Content-Type':'application/javascript'});next();});app.use(express[\"static\"](path.join(__dirname,'client/public')));//get title and brand name for an item\napp.get('/itemInformation/:itemId',function(req,res){var itemId=req.params.itemId;if(itemId.includes('array')){var itemsInArray=itemId.substring(5);var itemIds=itemsInArray.split(',').map(function(id){return parseInt(id);});var invalidId=false;for(var i=0;i<itemIds.length;i++){if(itemIds[i]<100||itemIds[i]>1e7+100){res.status(404).send('Invalid itemId');invalidId=(_readOnlyError(\"invalidId\"),true);break;}}if(!invalidId){db.getTitlesAndBrands(itemIds).then(function(data){res.send(data);})[\"catch\"](function(err){res.status(404);});}}else if(itemId<100||itemId>1e7+100){// console.log(itemId);\nres.status(404).send('Invalid itemId');}else{db.getTitleAndBrand(parseInt(itemId)).then(function(data){// console.log('success getting title and brand', data);\nres.send(data[0]);})[\"catch\"](function(err){res.status(500).send(err);// console.log('error in getTitleAndBrand: ', err);\n});}});//get full description object for an item\napp.get('/descriptionObject/:itemId',redisMiddleware,function(req,res){var itemId=req.params.itemId;db.getDescriptionObject(itemId).then(function(data){// console.log('success getting descriptionObj', data);\n!data[0]?res.sendStatus(404):res.send(data[0]);})[\"catch\"](function(err){res.status(500).send(err);// console.log('error in getDescriptionObject: ', err);\n});});//post description object for a new item\n// app.post('/descriptionObject', (req, res) => {\n//   const descObj = req.body;\n//   db.getDescriptionObject(descObj.itemId)\n//     .then((result) => {\n//       if (result[0]) {\n//         res.sendStatus(409);\n//       } else {\n//         return db.postDescriptionObject(descObj.itemId, descObj)\n//       }\n//     })\n//     .then((data) => {\n//       // console.log('successful post of data:', !!data);\n//       data ? res.sendStatus(201) : null;\n//     })\n//     .catch((err) => {\n//       // console.log(err);\n//       res.sendStatus(500);\n//     });\n// });\napp.post('/descriptionObject',function(req,res){var descObj=req.body;db.postDescriptionObject(descObj).then(function(data){// console.log('successful post of data:', data);\ndata?res.sendStatus(201):null;})[\"catch\"](function(err){err.code===11000?res.sendStatus(409):res.sendStatus(500);});});//update description object for an item\napp.put('/descriptionObject/:itemId',function(req,res){var descObj=req.body;var itemId=req.params.itemId;db.putDescriptionObject(itemId,descObj).then(function(data){// console.log('successful description update', data);\n!data?res.sendStatus(201):res.sendStatus(200);client.flushdb();})[\"catch\"](function(err){res.sendStatus(500);});});app[\"delete\"]('/descriptionObject/:itemId',function(req,res){var itemId=req.params.itemId;db.deleteDescriptionObject(itemId).then(function(data){// console.log('successfully deleted description', data);\n!data?res.sendStatus(404):res.sendStatus(200);client.flushdb();})[\"catch\"](function(err){// console.log(err);\nres.sendStatus(500);});});app.listen(3002,function(){console.log('server is listening on port 3002');});// module.exports = app;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ })

/******/ });