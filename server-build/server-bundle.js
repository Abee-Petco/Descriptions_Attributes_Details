!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("fs")},function(e,t,n){var i=n(7),r=new(0,n(8).Mockgoose)(i);"mockgoose"===process.env.node_env?r.prepareStorage().then((function(){console.log("mockgoose running"),i.connect("mongodb://localhost/petco_descriptions",{useUnifiedTopology:!0,useNewUrlParser:!0})})).catch((function(e){console.log("Mockgoose connection failed: ",e)})):"production"===process.env.node_env?i.connect("mongodb://3.138.71.170:27017/petco_descriptions",{useUnifiedTopology:!0,useNewUrlParser:!0}):i.connect("mongodb://localhost/petco_descriptions",{useUnifiedTopology:!0,useNewUrlParser:!0});var o=i.connection;o.on("error",(function(){console.log("error connecting to db")})),o.once("open",(function(){console.log("connected to mongoDB")}));var a=new i.Schema({title:{type:String,required:!0},description:String,SKU:Number,primaryBrand:String,daysToShip:String},{_id:!1}),s=new i.Schema({directions:String},{_id:!1}),c=new i.Schema({primaryColor:String,material:String,length:String,width:String},{_id:!1}),l=new i.Schema({additionalDetails:String},{_id:!1}),d=new i.Schema({itemId:{type:Number,required:!0},description:a,directions:s,attributes:c,details:l}),u=i.model("Description",d);e.exports.Description=u,e.exports.db=o,e.exports.getTitleAndBrand=function(e){return u.aggregate([{$match:{itemId:e}},{$project:{title:"$description.title",primaryBrand:"$description.primaryBrand",_id:0}},{$limit:1}]).hint({itemId:1}).exec()},e.exports.getDescriptionObject=function(e){return u.find({itemId:e},{_id:0,__v:0,itemId:0}).limit(1).lean().exec()},e.exports.getTitlesAndBrands=function(e){return u.aggregate([{$match:{itemId:{$in:e}}},{$project:{title:"$description.title",primaryBrand:"$description.primaryBrand",_id:0}},{$limit:e.length}]).hint({itemId:1}).exec()},e.exports.postDescriptionObject=function(e){return new u(e).save({validateBeforeSave:!1})},e.exports.putDescriptionObject=function(e,t){return u.update({itemId:e},t,{upsert:!0,hint:{itemId:1}})},e.exports.deleteDescriptionObject=function(e){return u.remove({itemId:e},{justOne:!0})}},function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("mockgoose")},function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o={display:"inline-table",width:"auto",verticalAlign:"middle",border:"2px solid #fff",borderRadius:"5px",margin:"0 10px",transition:".3s",padding:"0 17px",textAlign:"center",maxWidth:"200px",height:"50px",boxSizing:"border-box",cursor:"pointer",position:"relative",color:"#005891",fontSize:".9375em",fontWeight:"bold",backgroundColor:"white"},a={color:"#333",fontSize:".9375em",lineHeight:"1.6em",fontFamily:"Arial, sans-serif"},s={margin:"0px 20px",padding:"0",border:"0",fontSize:"100%",font:"inherit",verticalAlign:"baseline"},c={color:"#333",fontFamily:"tahoma, arial, helvetica, sans-serif",fontSize:"12px"},l={margin:"0px 20px",padding:"0",border:"0",fontSize:"100%",font:"inherit",verticalAlign:"baseline"},d={width:"34%",margin:"0",fontFamily:"Arial, sans-serif",lineHeight:"1.25em",listStyle:"none",marginBottom:"20px"},u={width:"34%",margin:"0",fontFamily:"Arial, sans-serif",lineHeight:"1.25em",listStyle:"none",marginBottom:"20px",float:"right"},p={color:"#333",fontSize:".9375em",fontFamily:"Arial, sans-serif",lineHeight:"1.6em",display:"block",marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart:"0px",marginInlineEnd:"0px",textAlign:"left",verticalAlign:"baseline",margin:"0",padding:"0"},m={display:"block",marginBlockStart:"1em",marginBlockEnd:"1em",marginInlineStart:"0px",marginInlineEnd:"40px",lineHeight:"1.25em",color:"#333",fontSize:".9375em",fontFamily:"Arial, sans-serif",textAlign:"left",margin:"0"},f={backgroundColor:"rgba(233,236,237,0.5)",borderTop:"1px solid #d4dadc",borderBottom:"1px solid #d4dadc"},g={backgroundColor:"rgba(233,236,237,0.5)",borderTop:"1px solid #d4dadc",borderBottom:"1px solid #d4dadc",fontStyle:"italic",textAlign:"left",fontWeight:"bold",fontSize:"0.9375em",whiteSpace:"nowrap"},y={boxSizing:"border-box",display:"inline-block",padding:"9px 11px",color:"#333",width:"40%",fontWeight:"bold",fontSize:"0.9375em"},b={boxSizing:"border-box",display:"inline-block",padding:"9px 11px",position:"relative",left:"135px",fontSize:"0.9375em",color:"#333",vertialAlign:"middle"},h={boxSizing:"border-box",display:"inline-block",padding:"9px 11px",position:"relative",left:"10px",fontSize:"0.9375em",color:"#333",vertialAlign:"middle"},v=function(e){return r.a.createElement("div",{id:"descriptionTab",style:s},r.a.createElement("span",{id:"left",style:{float:"left"}},r.a.createElement("p",{style:p},e.description.title),r.a.createElement("ul",{style:m},e.description.description.map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement("span",null,r.a.createElement("ul",{className:"table",style:u},r.a.createElement("li",{className:"tableLine",style:f},r.a.createElement("span",{className:"key",style:y},"SKU"),r.a.createElement("span",{className:"val",style:h},e.description.SKU)),r.a.createElement("li",{className:"tableLine gray"},r.a.createElement("span",{className:"key",style:y},"Primary Brand"),r.a.createElement("span",{className:"val",style:h},e.description.primaryBrand)),r.a.createElement("li",{className:"tableLine",style:f},r.a.createElement("span",{className:"key",style:y},"Days to Ship"),r.a.createElement("span",{className:"val",style:h},e.description.daysToShip)))))},S=function(e){return r.a.createElement("div",{id:"directionsTab",style:s},r.a.createElement("p",{style:a},e.directions))},x=function(e){return r.a.createElement("div",{id:"attributesTab"},r.a.createElement("ul",{className:"table2",style:d},r.a.createElement("li",{className:"tableLine",style:g},r.a.createElement("span",{className:"key",style:y},"Additional Features"),r.a.createElement("span",{className:"val",style:b})),r.a.createElement("li",{className:"tableLine gray"},r.a.createElement("span",{className:"key",style:y},"Primary Color"),r.a.createElement("span",{className:"val",style:b},e.attributes.primaryColor)),r.a.createElement("li",{className:"tableLine",style:f},r.a.createElement("span",{className:"key",style:y},"Material"),r.a.createElement("span",{className:"val",style:b},e.attributes.material))),r.a.createElement("ul",{className:"table2",style:d},r.a.createElement("li",{className:"tableLine",style:g},r.a.createElement("span",{className:"key",style:y},"Item Dimensions"),r.a.createElement("span",{className:"val",style:b})),r.a.createElement("li",{className:"tableLine gray"},r.a.createElement("span",{className:"key",style:y},"Length"),r.a.createElement("span",{className:"val",style:b},e.attributes.length)),r.a.createElement("li",{className:"tableLine",style:f},r.a.createElement("span",{className:"key",style:y},"Width"),r.a.createElement("span",{className:"val",style:b},e.attributes.width))))},E=function(e){return r.a.createElement("div",{id:"additionalTab",style:l},r.a.createElement("p",{style:c},e.additional))};n(1);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=M(e);if(t){var r=M(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(s,e);var t,n,i,a=k(s);function s(e){var t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),t=a.call(this,e);var i=e.initCurrent;return e.initData?n=e.initData:(n=window.__initData__,delete window.__initData__),t.state={current:i,data:n},t.changeModule=t.changeModule.bind(N(t)),t.onMouseOver=t.onMouseOver.bind(N(t)),t.onMouseOut=t.onMouseOut.bind(N(t)),t}return t=s,(n=[{key:"changeModule",value:function(e){var t=e.target.id;this.setState({current:t})}},{key:"onMouseOver",value:function(e){document.getElementById(e.target.id).style.color="#00395e"}},{key:"onMouseOut",value:function(e){document.getElementById(e.target.id).style.color="#005891"}},{key:"render",value:function(){return r.a.createElement("div",{id:"indexComponent"},r.a.createElement("div",{id:"buttons",style:{width:"875px",margin:"30px auto"}},r.a.createElement("span",{style:{marginLeft:"100px"}},r.a.createElement("button",{id:"descriptionB",style:o,onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseOut,onClick:this.changeModule},"Description"),r.a.createElement("button",{id:"directionsB",style:o,onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseOut,onClick:this.changeModule},"Directions"),r.a.createElement("button",{id:"attributesB",style:o,onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseOut,onClick:this.changeModule},"Attributes/Specifications"),r.a.createElement("button",{id:"additionalB",style:o,onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseOut,onClick:this.changeModule},"Additional Details"))),"descriptionB"===this.state.current&&r.a.createElement(v,{description:this.state.data.description}),"directionsB"===this.state.current&&r.a.createElement(S,{directions:this.state.data.directions.directions}),"attributesB"===this.state.current&&r.a.createElement(x,{attributes:this.state.data.attributes}),"additionalB"===this.state.current&&r.a.createElement(E,{additional:this.state.data.details.additionalDetails}))}}])&&w(t.prototype,n),i&&w(t,i),s}(r.a.Component);function B(e){throw new Error('"'+e+'" is read-only')}var D=n(2),A=(n(3),n(4)),T=n(0),C=(n(5),n(6)),P=(n(1),D());P.use(D.json()),P.use((function(e,t,n){e.headers.referer;t.header("Access-Control-Allow-Origin","*"),n()})),P.get("*.js",(function(e,t,n){e.url=e.url+".gz",t.set({"Content-Encoding":"gzip","Content-Type":"application/javascript"}),n()})),P.get("/",(function(e,t){var n=e.originalUrl.slice(3);C.getDescriptionObject(n).then((function(e){e[0]||t.sendStatus(404);var n=e[0].description.description.split(". ");e[0].description.description=n;var i=A.renderToString(T.createElement(I,{initData:e[0]}));return t.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>PetCo</title>\n          <script>window.__initData__ = ".concat(JSON.stringify(e[0]),"<\/script>\n          <script crossorigin src=\"https://unpkg.com/react@16/umd/react.production.min.js\"><\/script>\n          <script crossorigin src=\"https://unpkg.com/react-dom@16/umd/react-dom.production.min.js\"><\/script>\n          \x3c!-- <link href='style.css' rel='stylesheet' type='text/css'> --\x3e\n        </head>\n        <body>\n          <div id=\"description\">").concat(i,'</div>\n          <script src="bundle.js"><\/script>\n        </body>\n      </html>\n    '))})).catch((function(e){404!==t.statusCode&&t.sendStatus(500)}))})),P.get("/component",(function(e,t){var n=e.query.itemId;C.getDescriptionObject(n).then((function(e){e[0]||t.sendStatus(404);var n=e[0].description.description.split(". ");e[0].description.description=n;var i=A.renderToString(T.createElement(I,{initData:e[0]}));t.send({windowData:JSON.stringify(e[0]),serviceApp:i})})).catch((function(e){404!==t.statusCode&&t.sendStatus(500)}))})),P.use(D.static("client/public")),P.get("/itemInformation/:itemId",(function(e,t){var n=e.params.itemId;if(n.includes("array")){for(var i=n.substring(5).split(",").map((function(e){return parseInt(e)})),r=!1,o=0;o<i.length;o++)if(i[o]<100||i[o]>10000100){t.status(404).send("Invalid itemId"),B("invalidId"),r=!0;break}r||C.getTitlesAndBrands(i).then((function(e){t.send(e)})).catch((function(e){t.status(404)}))}else n<100||n>10000100?t.status(404).send("Invalid itemId"):C.getTitleAndBrand(parseInt(n)).then((function(e){t.send(e[0])})).catch((function(e){t.status(500).send(e)}))})),P.get("/descriptionObject/:itemId",(function(e,t){var n=e.params.itemId;C.getDescriptionObject(n).then((function(e){e[0]?t.send(e[0]):t.sendStatus(404)})).catch((function(e){t.status(500).send(e)}))})),P.post("/descriptionObject",(function(e,t){var n=e.body;C.postDescriptionObject(n).then((function(e){e&&t.sendStatus(201)})).catch((function(e){11e3===e.code?t.sendStatus(409):t.sendStatus(500)}))})),P.put("/descriptionObject/:itemId",(function(e,t){var n=e.body,i=e.params.itemId;C.putDescriptionObject(i,n).then((function(e){e?t.sendStatus(200):t.sendStatus(201),client.flushdb()})).catch((function(e){t.sendStatus(500)}))})),P.delete("/descriptionObject/:itemId",(function(e,t){var n=e.params.itemId;C.deleteDescriptionObject(n).then((function(e){e?t.sendStatus(200):t.sendStatus(404),client.flushdb()})).catch((function(e){t.sendStatus(500)}))})),P.listen(3002,(function(){console.log("server is listening on port 3002")}))}]);