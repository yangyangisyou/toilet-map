(function(t){function e(e){for(var n,l,o=e[0],p=e[1],m=e[2],_=0,y=[];_<o.length;_++)l=o[_],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&y.push(i[l][0]),i[l]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);d&&d(e);while(y.length)y.shift()();return c.push.apply(c,m||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,o=1;o<a.length;o++){var p=a[o];0!==i[p]&&(n=!1)}n&&(c.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},c=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],p=o.push.bind(o);o.push=e,o=o.slice();for(var m=0;m<o.length;m++)e(o[m]);var d=p;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"219e":function(t){t.exports=JSON.parse('{"ACCESS_TOKEN":"167259dc-8ff9-4574-920d-284100490b7f"}')},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Map")],1)},c=[],l=a("bc3a"),o=a.n(l),p=a("a7fe"),m=a.n(p),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"toolbox col-sm-3 p-2 bg-white"},[a("div",{staticClass:"form-group d-flex"},[a("label",{staticClass:"col-form-label mr-2 text-right",attrs:{for:"city"}},[t._v("縣市")]),a("div",{staticClass:"flex-fill"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.select.city,expression:"select.city"}],staticClass:"form-control",attrs:{id:"city"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.select,"city",e.target.multiple?a:a[0])}}},t._l(t.city,(function(e){return a("option",{key:e.name,domProps:{value:e.name}},[t._v(" "+t._s(e.name)+" ")])})),0)])]),a("div",{staticClass:"form-group d-flex"},[a("label",{staticClass:"col-form-label mr-2 text-right",attrs:{for:"dist"}},[t._v("地區")]),a("div",{staticClass:"flex-fill"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.select.dist,expression:"select.dist"}],staticClass:"form-control",attrs:{id:"dist"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.select,"dist",e.target.multiple?a:a[0])}}},t._l(t.city.find((function(e){return e.name===t.select.city})).districts,(function(e){return a("option",{key:e.name,domProps:{value:e.name}},[t._v(" "+t._s(e.name)+" ")])})),0)])]),a("div",{staticClass:"form-group d-flex"},[a("label",{staticClass:"col-form-label mr-2 text-right",attrs:{for:"toiletType"}},[t._v("廁所種類")]),a("div",{staticClass:"flex-fill"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.select.toiletType,expression:"select.toiletType"}],staticClass:"form-control",attrs:{id:"toiletType"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.select,"toiletType",e.target.multiple?a:a[0])}}},t._l(t.toiletTypes,(function(e,n){return a("option",{key:n,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),a("div",{staticClass:"form-group d-flex"},[t.isUserFirstOpen&&!1===t.isFetchingData?a("label",{staticClass:"col-form-label mr-2 text-right alert-message"},[t._v(" 切換縣市將自動擷取政府資料 ")]):""!==t.select.dist&&void 0!==t.select.dist||!1!==t.isFetchingData?t.isServerResponseError?a("label",{staticClass:"col-form-label mr-2 text-right error-message"},[t._v(" 伺服器忙碌中，請重新嘗試 ")]):t.isFetchingData?a("label",{staticClass:"col-form-label mr-2 text-right"},[t._v(" 政府資料庫擷取中 ")]):a("label",{staticClass:"col-form-label mr-2 text-right",attrs:{for:"toiletType"}},[t._v(" 總共找到："+t._s(t.totalToilet)+"間 ")]):a("label",{staticClass:"col-form-label mr-2 text-right alert-message"},[t._v(" 選擇地區以自動搜尋 ")]),a("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.onQueryServerHandler}},[t._v("Reload")])])]),t._m(0)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-9"},[a("div",{attrs:{id:"map"}})])}],y=(a("99af"),a("4de4"),a("7db0"),a("c740"),a("4160"),a("d81d"),a("b0c0"),a("159b"),a("e11e")),g=a.n(y),r=a("219e"),z=a("e56c"),s=a("725d"),u={name:"Map",props:{msg:String},data:function(){return{city:z,toiletsOriginData:[],toilets:[],toiletTypes:["無障礙廁所","男廁所","女廁所","親子廁所","性別友善廁所","混合廁所"],select:{city:"臺北市",dist:"中正區",toiletType:"混合廁所"},OSMap:{},totalToilet:0,isFetchingData:!1,isServerResponseError:!1,isUserFirstOpen:!0}},mounted:function(){this.OSMap=g.a.map("map",{center:[25.041956,121.508791],zoom:18}),g.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18}).addTo(this.OSMap)},watch:{"select.city":function(){console.log("切換縣市"),this.select.dist="",this.onQueryToiletData()},"select.dist":function(){console.log("切換地區"),this.updateMarkers()},"select.toiletType":function(){console.log("切換廁所種類"),this.updateMarkers()}},methods:{updateMarkers:function(){this.onFilterToilet(),this.onRemoveLocationFromMap(),this.onAddLocationToMap(),this.onFocusMap()},onFilterToilet:function(){var t=this;this.toilets=this.toiletsOriginData.filter((function(e){return t.select.toiletType===e.Type2&&t.select.dist===e.City}))},onFilterToiletType:function(){var t=this;this.toilets=this.toiletsOriginData.filter((function(e){return t.select.toiletType===e.Type2}))},getQueryLocation:function(){var t=this;return s[s.findIndex((function(e){return e.name===t.select.city}))].location},onQueryServerHandler:function(){this.isFetchingData=!0,this.isServerResponseError=!1,this.onQueryToiletData()},onQueryToiletData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e5,n="offset=".concat(e,"&limit=").concat(a),i="https://cors-anywhere.herokuapp.com/",c=this.getQueryLocation(),l=r.ACCESS_TOKEN,o="https://data.epa.gov.tw/api/v1/".concat(c,"?").concat(n,"&api_key=").concat(l);console.log("取得資料中..."),this.axios.get("".concat(i).concat(o)).then((function(e){return t.toiletsOriginData=e.data.records,t.updateMarkers(),e})).then((function(){console.log("成功取得資料"),t.isUserFirstOpen=!1,t.isFetchingData=!1,t.isServerResponseError=!1})).catch((function(e){console.log("伺服器忙碌中",e),t.isFetchingData=!1,t.isServerResponseError=!0}))},onFocusMap:function(){var t=this,e=this.indexOfCity(this.select.city);this.city[e].districts.find((function(e){return e.name===t.select.dist&&t.OSMap.flyTo(new g.a.LatLng(e.lat,e.lng),15),e.name===t.select.dist}))},onRemoveLocationFromMap:function(){var t=this;this.totalToilet=this.toilets.length,this.OSMap.eachLayer((function(e){e instanceof g.a.Marker&&t.OSMap.removeLayer(e)}))},onAddLocationToMap:function(){var t=this;this.toilets.forEach((function(e){g.a.marker([e.Latitude,e.Longitude]).bindPopup('<p><strong style="font-size: 20px;">'.concat(e.Name,'</strong></p>\n                      <strong style="font-size: 16px; color: #d45345;">廁所種類：').concat(e.Type2,"</strong><br>\n                      廁所等級: ").concat(e.Grade,"<br>\n                      <small>地址: <a href=").concat("https://www.google.com/maps/place/".concat(e.Address),' target="_blank">').concat(e.Address,"</a></small>")).addTo(t.OSMap)}))},indexOfCity:function(t){var e=-1;return this.city.forEach((function(a,n){return a.name===t?(e=n,e):e})),e}}},f=u,v=(a("c12b"),a("2877")),h=Object(v["a"])(f,d,_,!1,null,"3bed5bec",null),b=h.exports;n["a"].use(m.a,o.a);var x={name:"App",components:{Map:b},mounted:function(){var t="production";document.documentElement.className=t}},O=x,T=Object(v["a"])(O,i,c,!1,null,null,null),C=T.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(C)}}).$mount("#app")},"725d":function(t){t.exports=JSON.parse('[{"name":"臺灣","location":"fac_p_07"},{"name":"花蓮縣","location":"fac_p_10"},{"name":"宜蘭縣","location":"fac_p_11"},{"name":"金門縣","location":"fac_p_12"},{"name":"南投縣","location":"fac_p_13"},{"name":"屏東縣","location":"fac_p_14"},{"name":"苗栗縣","location":"fac_p_15"},{"name":"桃園市","location":"fac_p_16"},{"name":"高雄市","location":"fac_p_17"},{"name":"基隆市","location":"fac_p_18"},{"name":"連江縣","location":"fac_p_19"},{"name":"雲林縣","location":"fac_p_20"},{"name":"新北市","location":"fac_p_21"},{"name":"新竹市","location":"fac_p_22"},{"name":"新竹縣","location":"fac_p_23"},{"name":"嘉義市","location":"fac_p_24"},{"name":"嘉義縣","location":"fac_p_25"},{"name":"彰化市","location":"fac_p_26"},{"name":"臺中市","location":"fac_p_27"},{"name":"臺北市","location":"fac_p_28"},{"name":"臺東縣","location":"fac_p_29"},{"name":"臺南市","location":"fac_p_30"},{"name":"澎湖縣","location":"fac_p_31"}]')},"9eea":function(t,e,a){},c12b:function(t,e,a){"use strict";var n=a("9eea"),i=a.n(n);i.a},e56c:function(t){t.exports=JSON.parse('[{"name":"臺北市","districts":[{"zip_code":"100","name":"中正區","city":"臺北市","lat":25.0324,"lng":121.52},{"zip_code":"103","name":"大同區","city":"臺北市","lat":25.0634,"lng":121.513},{"zip_code":"104","name":"中山區","city":"臺北市","lat":25.0697,"lng":121.538},{"zip_code":"105","name":"松山區","city":"臺北市","lat":25.06,"lng":121.558},{"zip_code":"106","name":"大安區","city":"臺北市","lat":25.0268,"lng":121.543},{"zip_code":"108","name":"萬華區","city":"臺北市","lat":25.0286,"lng":121.498},{"zip_code":"110","name":"信義區","city":"臺北市","lat":25.0306,"lng":121.572},{"zip_code":"111","name":"士林區","city":"臺北市","lat":25.1255,"lng":121.551},{"zip_code":"112","name":"北投區","city":"臺北市","lat":25.1481,"lng":121.518},{"zip_code":"114","name":"內湖區","city":"臺北市","lat":25.0837,"lng":121.592},{"zip_code":"115","name":"南港區","city":"臺北市","lat":25.036,"lng":121.61},{"zip_code":"116","name":"文山區","city":"臺北市","lat":24.9886,"lng":121.574}]},{"name":"基隆市","districts":[{"zip_code":"200","name":"仁愛區","city":"基隆市","lat":25.1195,"lng":121.743},{"zip_code":"201","name":"信義區","city":"基隆市","lat":25.1258,"lng":121.773},{"zip_code":"202","name":"中正區","city":"基隆市","lat":25.1437,"lng":121.778},{"zip_code":"203","name":"中山區","city":"基隆市","lat":25.1499,"lng":121.731},{"zip_code":"204","name":"安樂區","city":"基隆市","lat":25.1414,"lng":121.708},{"zip_code":"205","name":"暖暖區","city":"基隆市","lat":25.081,"lng":121.745},{"zip_code":"206","name":"七堵區","city":"基隆市","lat":25.1096,"lng":121.684}]},{"name":"新北市","districts":[{"zip_code":"207","name":"萬里區","city":"新北市","lat":25.1757,"lng":121.644},{"zip_code":"208","name":"金山區","city":"新北市","lat":25.2171,"lng":121.605},{"zip_code":"220","name":"板橋區","city":"新北市","lat":25.0119,"lng":121.458},{"zip_code":"221","name":"汐止區","city":"新北市","lat":25.0733,"lng":121.655},{"zip_code":"222","name":"深坑區","city":"新北市","lat":24.9977,"lng":121.62},{"zip_code":"223","name":"石碇區","city":"新北市","lat":24.9471,"lng":121.647},{"zip_code":"224","name":"瑞芳區","city":"新北市","lat":25.0981,"lng":121.823},{"zip_code":"226","name":"平溪區","city":"新北市","lat":25.0261,"lng":121.758},{"zip_code":"227","name":"雙溪區","city":"新北市","lat":24.997,"lng":121.833},{"zip_code":"228","name":"貢寮區","city":"新北市","lat":25.0249,"lng":121.918},{"zip_code":"231","name":"新店區","city":"新北市","lat":24.9304,"lng":121.532},{"zip_code":"232","name":"坪林區","city":"新北市","lat":24.911,"lng":121.724},{"zip_code":"233","name":"烏來區","city":"新北市","lat":24.7882,"lng":121.541},{"zip_code":"234","name":"永和區","city":"新北市","lat":25.0081,"lng":121.517},{"zip_code":"235","name":"中和區","city":"新北市","lat":24.9909,"lng":121.494},{"zip_code":"236","name":"土城區","city":"新北市","lat":24.9643,"lng":121.446},{"zip_code":"237","name":"三峽區","city":"新北市","lat":24.8821,"lng":121.416},{"zip_code":"238","name":"樹林區","city":"新北市","lat":24.9797,"lng":121.401},{"zip_code":"239","name":"鶯歌區","city":"新北市","lat":24.9566,"lng":121.347},{"zip_code":"241","name":"三重區","city":"新北市","lat":25.0628,"lng":121.487},{"zip_code":"242","name":"新莊區","city":"新北市","lat":25.0358,"lng":121.437},{"zip_code":"243","name":"泰山區","city":"新北市","lat":25.0555,"lng":121.416},{"zip_code":"244","name":"林口區","city":"新北市","lat":25.1001,"lng":121.353},{"zip_code":"247","name":"蘆洲區","city":"新北市","lat":25.0893,"lng":121.471},{"zip_code":"248","name":"五股區","city":"新北市","lat":25.0961,"lng":121.433},{"zip_code":"249","name":"八里區","city":"新北市","lat":25.1381,"lng":121.414},{"zip_code":"251","name":"淡水區","city":"新北市","lat":25.1891,"lng":121.464},{"zip_code":"252","name":"三芝區","city":"新北市","lat":25.2316,"lng":121.516},{"zip_code":"253","name":"石門區","city":"新北市","lat":25.2652,"lng":121.569}]},{"name":"連江縣","districts":[{"zip_code":"209","name":"南竿鄉","city":"連江縣","lat":26.1543,"lng":119.931},{"zip_code":"210","name":"北竿鄉","city":"連江縣","lat":26.2256,"lng":119.994},{"zip_code":"211","name":"莒光鄉","city":"連江縣","lat":25.973,"lng":119.939},{"zip_code":"212","name":"東引鄉","city":"連江縣","lat":26.3661,"lng":120.49}]},{"name":"宜蘭縣","districts":[{"zip_code":"260","name":"宜蘭市","city":"宜蘭縣","lat":24.7502,"lng":121.757},{"zip_code":"261","name":"頭城鎮","city":"宜蘭縣","lat":24.9008,"lng":121.846},{"zip_code":"262","name":"礁溪鄉","city":"宜蘭縣","lat":24.8114,"lng":121.735},{"zip_code":"263","name":"壯圍鄉","city":"宜蘭縣","lat":24.7518,"lng":121.802},{"zip_code":"264","name":"員山鄉","city":"宜蘭縣","lat":24.742,"lng":121.661},{"zip_code":"265","name":"羅東鎮","city":"宜蘭縣","lat":24.6788,"lng":121.77},{"zip_code":"266","name":"三星鄉","city":"宜蘭縣","lat":24.6677,"lng":121.664},{"zip_code":"267","name":"大同鄉","city":"宜蘭縣","lat":24.5515,"lng":121.504},{"zip_code":"268","name":"五結鄉","city":"宜蘭縣","lat":24.6889,"lng":121.806},{"zip_code":"269","name":"冬山鄉","city":"宜蘭縣","lat":24.6421,"lng":121.76},{"zip_code":"270","name":"蘇澳鎮","city":"宜蘭縣","lat":24.5547,"lng":121.835},{"zip_code":"272","name":"南澳鄉","city":"宜蘭縣","lat":24.4486,"lng":121.656},{"zip_code":"290","name":"釣魚台列嶼","city":"宜蘭縣","lat":25.7464,"lng":123.475}]},{"name":"新竹市","districts":[{"zip_code":"300","name":"東　區","city":"新竹市","lat":24.7903,"lng":120.993},{"zip_code":"300","name":"北　區","city":"新竹市","lat":24.8227,"lng":120.949},{"zip_code":"300","name":"香山區","city":"新竹市","lat":24.771,"lng":120.924}]},{"name":"新竹縣","districts":[{"zip_code":"302","name":"竹北市","city":"新竹縣","lat":24.8382,"lng":120.995},{"zip_code":"303","name":"湖口鄉","city":"新竹縣","lat":24.8857,"lng":121.052},{"zip_code":"304","name":"新豐鄉","city":"新竹縣","lat":24.9073,"lng":120.996},{"zip_code":"305","name":"新埔鎮","city":"新竹縣","lat":24.8413,"lng":121.094},{"zip_code":"306","name":"關西鎮","city":"新竹縣","lat":24.7851,"lng":121.187},{"zip_code":"307","name":"芎林鄉","city":"新竹縣","lat":24.7657,"lng":121.105},{"zip_code":"308","name":"寶山鄉","city":"新竹縣","lat":24.737,"lng":120.999},{"zip_code":"310","name":"竹東鎮","city":"新竹縣","lat":24.7308,"lng":121.075},{"zip_code":"311","name":"五峰鄉","city":"新竹縣","lat":24.5781,"lng":121.139},{"zip_code":"312","name":"橫山鄉","city":"新竹縣","lat":24.7078,"lng":121.147},{"zip_code":"313","name":"尖石鄉","city":"新竹縣","lat":24.5949,"lng":121.282},{"zip_code":"314","name":"北埔鄉","city":"新竹縣","lat":24.6721,"lng":121.064},{"zip_code":"315","name":"峨嵋鄉","city":"新竹縣","lat":24.6781,"lng":121.011}]},{"name":"桃園市","districts":[{"zip_code":"320","name":"中壢區","city":"桃園市","lat":24.9799,"lng":121.215},{"zip_code":"324","name":"平鎮區","city":"桃園市","lat":24.9212,"lng":121.214},{"zip_code":"325","name":"龍潭區","city":"桃園市","lat":24.8506,"lng":121.212},{"zip_code":"326","name":"楊梅區","city":"桃園市","lat":24.9182,"lng":121.129},{"zip_code":"327","name":"新屋區","city":"桃園市","lat":24.9728,"lng":121.068},{"zip_code":"328","name":"觀音區","city":"桃園市","lat":25.0267,"lng":121.116},{"zip_code":"330","name":"桃園區","city":"桃園市","lat":25.0004,"lng":121.3},{"zip_code":"333","name":"龜山區","city":"桃園市","lat":25.0242,"lng":121.357},{"zip_code":"334","name":"八德區","city":"桃園市","lat":24.9497,"lng":121.291},{"zip_code":"335","name":"大溪區","city":"桃園市","lat":24.868,"lng":121.296},{"zip_code":"336","name":"復興區","city":"桃園市","lat":24.7295,"lng":121.375},{"zip_code":"337","name":"大園區","city":"桃園市","lat":25.0638,"lng":121.212},{"zip_code":"338","name":"蘆竹區","city":"桃園市","lat":25.0607,"lng":121.283}]},{"name":"苗栗縣","districts":[{"zip_code":"350","name":"竹南鎮","city":"苗栗縣","lat":24.6986,"lng":120.878},{"zip_code":"351","name":"頭份鎮","city":"苗栗縣","lat":24.6763,"lng":120.919},{"zip_code":"352","name":"三灣鄉","city":"苗栗縣","lat":24.636,"lng":120.953},{"zip_code":"353","name":"南庄鄉","city":"苗栗縣","lat":24.5661,"lng":121.017},{"zip_code":"354","name":"獅潭鄉","city":"苗栗縣","lat":24.5198,"lng":120.921},{"zip_code":"356","name":"後龍鎮","city":"苗栗縣","lat":24.6156,"lng":120.781},{"zip_code":"357","name":"通霄鎮","city":"苗栗縣","lat":24.485,"lng":120.715},{"zip_code":"358","name":"苑裡鎮","city":"苗栗縣","lat":24.411,"lng":120.688},{"zip_code":"360","name":"苗栗市","city":"苗栗縣","lat":24.5638,"lng":120.811},{"zip_code":"361","name":"造橋鄉","city":"苗栗縣","lat":24.6248,"lng":120.87},{"zip_code":"362","name":"頭屋鄉","city":"苗栗縣","lat":24.5735,"lng":120.883},{"zip_code":"363","name":"公館鄉","city":"苗栗縣","lat":24.5025,"lng":120.851},{"zip_code":"364","name":"大湖鄉","city":"苗栗縣","lat":24.3936,"lng":120.863},{"zip_code":"365","name":"泰安鄉","city":"苗栗縣","lat":24.4193,"lng":121.068},{"zip_code":"366","name":"銅鑼鄉","city":"苗栗縣","lat":24.4559,"lng":120.799},{"zip_code":"367","name":"三義鄉","city":"苗栗縣","lat":24.3808,"lng":120.77},{"zip_code":"368","name":"西湖鄉","city":"苗栗縣","lat":24.5415,"lng":120.761},{"zip_code":"369","name":"卓蘭鎮","city":"苗栗縣","lat":24.3251,"lng":120.856}]},{"name":"臺中市","districts":[{"zip_code":"400","name":"中　區","city":"臺中市","lat":24.1417,"lng":120.681},{"zip_code":"401","name":"東　區","city":"臺中市","lat":24.1373,"lng":120.697},{"zip_code":"402","name":"南　區","city":"臺中市","lat":24.1211,"lng":120.665},{"zip_code":"403","name":"西　區","city":"臺中市","lat":24.1439,"lng":120.665},{"zip_code":"404","name":"北　區","city":"臺中市","lat":24.1586,"lng":120.681},{"zip_code":"406","name":"北屯區","city":"臺中市","lat":24.184,"lng":120.736},{"zip_code":"407","name":"西屯區","city":"臺中市","lat":24.1831,"lng":120.627},{"zip_code":"408","name":"南屯區","city":"臺中市","lat":24.1417,"lng":120.618},{"zip_code":"411","name":"太平區","city":"臺中市","lat":24.1148,"lng":120.773},{"zip_code":"412","name":"大里區","city":"臺中市","lat":24.0958,"lng":120.693},{"zip_code":"413","name":"霧峰區","city":"臺中市","lat":24.0433,"lng":120.72},{"zip_code":"414","name":"烏日區","city":"臺中市","lat":24.0839,"lng":120.629},{"zip_code":"420","name":"豐原區","city":"臺中市","lat":24.2499,"lng":120.738},{"zip_code":"421","name":"后里區","city":"臺中市","lat":24.3096,"lng":120.715},{"zip_code":"422","name":"石岡區","city":"臺中市","lat":24.2649,"lng":120.79},{"zip_code":"423","name":"東勢區","city":"臺中市","lat":24.2495,"lng":120.84},{"zip_code":"424","name":"和平區","city":"臺中市","lat":24.2762,"lng":121.14},{"zip_code":"426","name":"新社區","city":"臺中市","lat":24.1777,"lng":120.831},{"zip_code":"427","name":"潭子區","city":"臺中市","lat":24.2117,"lng":120.711},{"zip_code":"428","name":"大雅區","city":"臺中市","lat":24.227,"lng":120.641},{"zip_code":"429","name":"神岡區","city":"臺中市","lat":24.2657,"lng":120.673},{"zip_code":"432","name":"大肚區","city":"臺中市","lat":24.1447,"lng":120.554},{"zip_code":"433","name":"沙鹿區","city":"臺中市","lat":24.2343,"lng":120.584},{"zip_code":"434","name":"龍井區","city":"臺中市","lat":24.2006,"lng":120.528},{"zip_code":"435","name":"梧棲區","city":"臺中市","lat":24.2455,"lng":120.53},{"zip_code":"436","name":"清水區","city":"臺中市","lat":24.2921,"lng":120.581},{"zip_code":"437","name":"大甲區","city":"臺中市","lat":24.3783,"lng":120.636},{"zip_code":"438","name":"外埔區","city":"臺中市","lat":24.3355,"lng":120.665},{"zip_code":"439","name":"大安區","city":"臺中市","lat":24.3651,"lng":120.591}]},{"name":"彰化縣","districts":[{"zip_code":"500","name":"彰化市","city":"彰化縣","lat":24.0753,"lng":120.569},{"zip_code":"502","name":"芬園鄉","city":"彰化縣","lat":24.0063,"lng":120.629},{"zip_code":"503","name":"花壇鄉","city":"彰化縣","lat":24.0301,"lng":120.56},{"zip_code":"504","name":"秀水鄉","city":"彰化縣","lat":24.0325,"lng":120.504},{"zip_code":"505","name":"鹿港鎮","city":"彰化縣","lat":24.0829,"lng":120.439},{"zip_code":"506","name":"福興鄉","city":"彰化縣","lat":24.0302,"lng":120.431},{"zip_code":"507","name":"線西鄉","city":"彰化縣","lat":24.1316,"lng":120.452},{"zip_code":"508","name":"和美鎮","city":"彰化縣","lat":24.1138,"lng":120.511},{"zip_code":"509","name":"伸港鄉","city":"彰化縣","lat":24.1637,"lng":120.486},{"zip_code":"510","name":"員林鎮","city":"彰化縣","lat":23.9565,"lng":120.593},{"zip_code":"511","name":"社頭鄉","city":"彰化縣","lat":23.9054,"lng":120.602},{"zip_code":"512","name":"永靖鄉","city":"彰化縣","lat":23.9214,"lng":120.542},{"zip_code":"513","name":"埔心鄉","city":"彰化縣","lat":23.9528,"lng":120.534},{"zip_code":"514","name":"溪湖鎮","city":"彰化縣","lat":23.9517,"lng":120.483},{"zip_code":"515","name":"大村鄉","city":"彰化縣","lat":23.9921,"lng":120.559},{"zip_code":"516","name":"埔鹽鄉","city":"彰化縣","lat":23.992,"lng":120.459},{"zip_code":"520","name":"田中鎮","city":"彰化縣","lat":23.8572,"lng":120.59},{"zip_code":"521","name":"北斗鎮","city":"彰化縣","lat":23.8676,"lng":120.533},{"zip_code":"522","name":"田尾鄉","city":"彰化縣","lat":23.9006,"lng":120.522},{"zip_code":"523","name":"埤頭鄉","city":"彰化縣","lat":23.8823,"lng":120.468},{"zip_code":"524","name":"溪州鄉","city":"彰化縣","lat":23.8273,"lng":120.522},{"zip_code":"525","name":"竹塘鄉","city":"彰化縣","lat":23.8506,"lng":120.414},{"zip_code":"526","name":"二林鎮","city":"彰化縣","lat":23.9162,"lng":120.404},{"zip_code":"527","name":"大城鄉","city":"彰化縣","lat":23.8507,"lng":120.311},{"zip_code":"528","name":"芳苑鄉","city":"彰化縣","lat":23.9538,"lng":120.354},{"zip_code":"530","name":"二水鄉","city":"彰化縣","lat":23.8092,"lng":120.629}]},{"name":"南投縣","districts":[{"zip_code":"540","name":"南投市","city":"南投縣","lat":23.9217,"lng":120.679},{"zip_code":"541","name":"中寮鄉","city":"南投縣","lat":23.9059,"lng":120.786},{"zip_code":"542","name":"草屯鎮","city":"南投縣","lat":23.9832,"lng":120.733},{"zip_code":"544","name":"國姓鄉","city":"南投縣","lat":24.0314,"lng":120.868},{"zip_code":"545","name":"埔里鎮","city":"南投縣","lat":23.9789,"lng":120.963},{"zip_code":"546","name":"仁愛鄉","city":"南投縣","lat":24.0289,"lng":121.144},{"zip_code":"551","name":"名間鄉","city":"南投縣","lat":23.8511,"lng":120.677},{"zip_code":"552","name":"集集鎮","city":"南投縣","lat":23.837,"lng":120.785},{"zip_code":"553","name":"水里鄉","city":"南投縣","lat":23.7961,"lng":120.862},{"zip_code":"555","name":"魚池鄉","city":"南投縣","lat":23.876,"lng":120.926},{"zip_code":"556","name":"信義鄉","city":"南投縣","lat":23.6555,"lng":121.021},{"zip_code":"557","name":"竹山鎮","city":"南投縣","lat":23.6981,"lng":120.71},{"zip_code":"558","name":"鹿谷鄉","city":"南投縣","lat":23.7378,"lng":120.782}]},{"name":"嘉義縣","districts":[{"zip_code":"600","name":"東　區","city":"嘉義市","lat":23.4817,"lng":120.471},{"zip_code":"600","name":"西　區","city":"嘉義市","lat":0,"lng":0},{"zip_code":"602","name":"番路鄉","city":"嘉義縣","lat":23.4277,"lng":120.608},{"zip_code":"603","name":"梅山鄉","city":"嘉義縣","lat":23.5554,"lng":120.639},{"zip_code":"604","name":"竹崎鄉","city":"嘉義縣","lat":23.5038,"lng":120.597},{"zip_code":"605","name":"阿里山","city":"嘉義縣","lat":23.4408,"lng":120.76},{"zip_code":"606","name":"中埔鄉","city":"嘉義縣","lat":23.4041,"lng":120.537},{"zip_code":"607","name":"大埔鄉","city":"嘉義縣","lat":23.2885,"lng":120.59},{"zip_code":"608","name":"水上鄉","city":"嘉義縣","lat":23.4291,"lng":120.415},{"zip_code":"611","name":"鹿草鄉","city":"嘉義縣","lat":23.4081,"lng":120.305},{"zip_code":"612","name":"太保市","city":"嘉義縣","lat":23.4729,"lng":120.344},{"zip_code":"613","name":"朴子市","city":"嘉義縣","lat":23.4461,"lng":120.254},{"zip_code":"614","name":"東石鄉","city":"嘉義縣","lat":23.4687,"lng":120.174},{"zip_code":"615","name":"六腳鄉","city":"嘉義縣","lat":23.5102,"lng":120.271},{"zip_code":"616","name":"新港鄉","city":"嘉義縣","lat":23.5458,"lng":120.348},{"zip_code":"621","name":"民雄鄉","city":"嘉義縣","lat":23.5426,"lng":120.444},{"zip_code":"622","name":"大林鎮","city":"嘉義縣","lat":23.5989,"lng":120.481},{"zip_code":"623","name":"溪口鄉","city":"嘉義縣","lat":23.5935,"lng":120.401},{"zip_code":"624","name":"義竹鄉","city":"嘉義縣","lat":23.3458,"lng":120.224},{"zip_code":"625","name":"布袋鎮","city":"嘉義縣","lat":23.3749,"lng":120.178}]},{"name":"雲林縣","districts":[{"zip_code":"630","name":"斗南鎮","city":"雲林縣","lat":23.6707,"lng":120.483},{"zip_code":"631","name":"大埤鄉","city":"雲林縣","lat":23.6456,"lng":120.426},{"zip_code":"632","name":"虎尾鎮","city":"雲林縣","lat":23.7166,"lng":120.429},{"zip_code":"633","name":"土庫鎮","city":"雲林縣","lat":23.6911,"lng":120.365},{"zip_code":"634","name":"褒忠鄉","city":"雲林縣","lat":23.7161,"lng":120.312},{"zip_code":"635","name":"東勢鄉","city":"雲林縣","lat":23.6961,"lng":120.256},{"zip_code":"636","name":"臺西鄉","city":"雲林縣","lat":23.716,"lng":120.205},{"zip_code":"637","name":"崙背鄉","city":"雲林縣","lat":23.7785,"lng":120.334},{"zip_code":"638","name":"麥寮鄉","city":"雲林縣","lat":23.7882,"lng":120.244},{"zip_code":"640","name":"斗六市","city":"雲林縣","lat":23.7065,"lng":120.56},{"zip_code":"643","name":"林內鄉","city":"雲林縣","lat":23.7557,"lng":120.616},{"zip_code":"646","name":"古坑鄉","city":"雲林縣","lat":23.6255,"lng":120.612},{"zip_code":"647","name":"莿桐鄉","city":"雲林縣","lat":23.7697,"lng":120.529},{"zip_code":"648","name":"西螺鎮","city":"雲林縣","lat":23.7794,"lng":120.458},{"zip_code":"649","name":"二崙鄉","city":"雲林縣","lat":23.7926,"lng":120.396},{"zip_code":"651","name":"北港鎮","city":"雲林縣","lat":23.5922,"lng":120.294},{"zip_code":"652","name":"水林鄉","city":"雲林縣","lat":23.5616,"lng":120.235},{"zip_code":"653","name":"口湖鄉","city":"雲林縣","lat":23.5537,"lng":120.141},{"zip_code":"654","name":"四湖鄉","city":"雲林縣","lat":23.6421,"lng":120.206},{"zip_code":"655","name":"元長鄉","city":"雲林縣","lat":23.6424,"lng":120.328}]},{"name":"臺南市","districts":[{"zip_code":"700","name":"中西區","city":"臺南市","lat":22.9959,"lng":120.193},{"zip_code":"701","name":"東　區","city":"臺南市","lat":22.9818,"lng":120.228},{"zip_code":"702","name":"南　區","city":"臺南市","lat":22.9556,"lng":120.19},{"zip_code":"704","name":"北　區","city":"臺南市","lat":23.0101,"lng":120.207},{"zip_code":"708","name":"安平區","city":"臺南市","lat":22.9901,"lng":120.165},{"zip_code":"709","name":"安南區","city":"臺南市","lat":23.0487,"lng":120.153},{"zip_code":"710","name":"永康區","city":"臺南市","lat":23.0273,"lng":120.254},{"zip_code":"711","name":"歸仁區","city":"臺南市","lat":22.9468,"lng":120.293},{"zip_code":"712","name":"新化區","city":"臺南市","lat":23.0339,"lng":120.336},{"zip_code":"713","name":"左鎮區","city":"臺南市","lat":23.026,"lng":120.412},{"zip_code":"714","name":"玉井區","city":"臺南市","lat":23.1148,"lng":120.461},{"zip_code":"715","name":"楠西區","city":"臺南市","lat":23.1789,"lng":120.517},{"zip_code":"716","name":"南化區","city":"臺南市","lat":23.1151,"lng":120.544},{"zip_code":"717","name":"仁德區","city":"臺南市","lat":22.9413,"lng":120.242},{"zip_code":"718","name":"關廟區","city":"臺南市","lat":22.9558,"lng":120.334},{"zip_code":"719","name":"龍崎區","city":"臺南市","lat":22.9548,"lng":120.387},{"zip_code":"720","name":"官田區","city":"臺南市","lat":23.191,"lng":120.348},{"zip_code":"721","name":"麻豆區","city":"臺南市","lat":23.1825,"lng":120.241},{"zip_code":"722","name":"佳里區","city":"臺南市","lat":23.167,"lng":120.179},{"zip_code":"723","name":"西港區","city":"臺南市","lat":23.1249,"lng":120.2},{"zip_code":"724","name":"七股區","city":"臺南市","lat":23.1233,"lng":120.101},{"zip_code":"725","name":"將軍區","city":"臺南市","lat":23.2083,"lng":120.128},{"zip_code":"726","name":"學甲區","city":"臺南市","lat":23.2522,"lng":120.184},{"zip_code":"727","name":"北門區","city":"臺南市","lat":23.2778,"lng":120.126},{"zip_code":"730","name":"新營區","city":"臺南市","lat":23.3015,"lng":120.295},{"zip_code":"731","name":"後壁區","city":"臺南市","lat":23.362,"lng":120.349},{"zip_code":"732","name":"白河區","city":"臺南市","lat":23.3513,"lng":120.458},{"zip_code":"733","name":"東山區","city":"臺南市","lat":23.2783,"lng":120.444},{"zip_code":"734","name":"六甲區","city":"臺南市","lat":23.2273,"lng":120.38},{"zip_code":"735","name":"下營區","city":"臺南市","lat":23.231,"lng":120.265},{"zip_code":"736","name":"柳營區","city":"臺南市","lat":23.2689,"lng":120.355},{"zip_code":"737","name":"鹽水區","city":"臺南市","lat":23.298,"lng":120.248},{"zip_code":"741","name":"善化區","city":"臺南市","lat":23.1403,"lng":120.299},{"zip_code":"742","name":"大內區","city":"臺南市","lat":23.1448,"lng":120.399},{"zip_code":"743","name":"山上區","city":"臺南市","lat":23.0969,"lng":120.371},{"zip_code":"744","name":"新市區","city":"臺南市","lat":23.0832,"lng":120.292},{"zip_code":"745","name":"安定區","city":"臺南市","lat":23.0997,"lng":120.23}]},{"name":"高雄市","districts":[{"zip_code":"800","name":"新興區","city":"高雄市","lat":22.6299,"lng":120.307},{"zip_code":"801","name":"前金區","city":"高雄市","lat":22.627,"lng":120.294},{"zip_code":"802","name":"苓雅區","city":"高雄市","lat":22.6236,"lng":120.321},{"zip_code":"803","name":"鹽埕區","city":"高雄市","lat":22.6242,"lng":120.284},{"zip_code":"804","name":"鼓山區","city":"高雄市","lat":22.6502,"lng":120.274},{"zip_code":"805","name":"旗津區","city":"高雄市","lat":22.5857,"lng":120.289},{"zip_code":"806","name":"前鎮區","city":"高雄市","lat":22.5927,"lng":120.315},{"zip_code":"807","name":"三民區","city":"高雄市","lat":22.6499,"lng":120.318},{"zip_code":"811","name":"楠梓區","city":"高雄市","lat":22.7211,"lng":120.301},{"zip_code":"812","name":"小港區","city":"高雄市","lat":22.5514,"lng":120.359},{"zip_code":"813","name":"左營區","city":"高雄市","lat":22.684,"lng":120.295},{"zip_code":"814","name":"仁武區","city":"高雄市","lat":22.7012,"lng":120.361},{"zip_code":"815","name":"大社區","city":"高雄市","lat":22.7398,"lng":120.371},{"zip_code":"820","name":"岡山區","city":"高雄市","lat":22.8051,"lng":120.298},{"zip_code":"821","name":"路竹區","city":"高雄市","lat":22.8572,"lng":120.266},{"zip_code":"822","name":"阿蓮區","city":"高雄市","lat":22.8702,"lng":120.321},{"zip_code":"823","name":"田寮鄉","city":"高雄市","lat":22.8639,"lng":120.396},{"zip_code":"824","name":"燕巢區","city":"高雄市","lat":22.7877,"lng":120.371},{"zip_code":"825","name":"橋頭區","city":"高雄市","lat":22.7525,"lng":120.301},{"zip_code":"826","name":"梓官區","city":"高雄市","lat":22.7482,"lng":120.259},{"zip_code":"827","name":"彌陀區","city":"高雄市","lat":22.7794,"lng":120.239},{"zip_code":"828","name":"永安區","city":"高雄市","lat":22.8222,"lng":120.228},{"zip_code":"829","name":"湖內鄉","city":"高雄市","lat":22.8932,"lng":120.226},{"zip_code":"830","name":"鳳山區","city":"高雄市","lat":22.6138,"lng":120.355},{"zip_code":"831","name":"大寮區","city":"高雄市","lat":22.5928,"lng":120.411},{"zip_code":"832","name":"林園區","city":"高雄市","lat":22.5081,"lng":120.399},{"zip_code":"833","name":"鳥松區","city":"高雄市","lat":22.6625,"lng":120.373},{"zip_code":"840","name":"大樹區","city":"高雄市","lat":22.711,"lng":120.425},{"zip_code":"842","name":"旗山區","city":"高雄市","lat":22.865,"lng":120.475},{"zip_code":"843","name":"美濃區","city":"高雄市","lat":22.9001,"lng":120.563},{"zip_code":"844","name":"六龜區","city":"高雄市","lat":23.012,"lng":120.659},{"zip_code":"845","name":"內門區","city":"高雄市","lat":22.9567,"lng":120.472},{"zip_code":"846","name":"杉林區","city":"高雄市","lat":22.9969,"lng":120.562},{"zip_code":"847","name":"甲仙區","city":"高雄市","lat":23.1166,"lng":120.623},{"zip_code":"848","name":"桃源區","city":"高雄市","lat":23.2249,"lng":120.852},{"zip_code":"849","name":"那瑪夏區","city":"高雄市","lat":23.275,"lng":120.742},{"zip_code":"851","name":"茂林區","city":"高雄市","lat":22.9199,"lng":120.752},{"zip_code":"852","name":"茄萣區","city":"高雄市","lat":22.8824,"lng":120.198}]},{"name":"澎湖縣","districts":[{"zip_code":"880","name":"馬公市","city":"澎湖縣","lat":23.5553,"lng":119.592},{"zip_code":"881","name":"西嶼鄉","city":"澎湖縣","lat":23.5998,"lng":119.508},{"zip_code":"882","name":"望安鄉","city":"澎湖縣","lat":23.369,"lng":119.504},{"zip_code":"883","name":"七美鄉","city":"澎湖縣","lat":23.2011,"lng":119.434},{"zip_code":"884","name":"白沙鄉","city":"澎湖縣","lat":23.6418,"lng":119.593},{"zip_code":"885","name":"湖西鄉","city":"澎湖縣","lat":23.5736,"lng":119.645}]},{"name":"金門縣","districts":[{"zip_code":"890","name":"金沙鎮","city":"金門縣","lat":24.4587,"lng":118.408},{"zip_code":"891","name":"金湖鎮","city":"金門縣","lat":24.415,"lng":118.404},{"zip_code":"892","name":"金寧鄉","city":"金門縣","lat":24.4248,"lng":118.317},{"zip_code":"893","name":"金城鎮","city":"金門縣","lat":24.384,"lng":118.301},{"zip_code":"894","name":"烈嶼鄉","city":"金門縣","lat":24.4017,"lng":118.228},{"zip_code":"896","name":"烏坵鄉","city":"金門縣","lat":24.9923,"lng":119.453}]},{"name":"屏東縣","districts":[{"zip_code":"900","name":"屏東市","city":"屏東縣","lat":22.6647,"lng":120.48},{"zip_code":"901","name":"三地門","city":"屏東縣","lat":22.7979,"lng":120.687},{"zip_code":"902","name":"霧臺鄉","city":"屏東縣","lat":22.7599,"lng":120.801},{"zip_code":"903","name":"瑪家鄉","city":"屏東縣","lat":22.6711,"lng":120.68},{"zip_code":"904","name":"九如鄉","city":"屏東縣","lat":22.7317,"lng":120.485},{"zip_code":"905","name":"里港鄉","city":"屏東縣","lat":22.7985,"lng":120.506},{"zip_code":"906","name":"高樹鄉","city":"屏東縣","lat":22.8099,"lng":120.602},{"zip_code":"907","name":"鹽埔鄉","city":"屏東縣","lat":22.7425,"lng":120.569},{"zip_code":"908","name":"長治鄉","city":"屏東縣","lat":22.6945,"lng":120.556},{"zip_code":"909","name":"麟洛鄉","city":"屏東縣","lat":22.6488,"lng":120.53},{"zip_code":"911","name":"竹田鄉","city":"屏東縣","lat":22.5886,"lng":120.527},{"zip_code":"912","name":"內埔鄉","city":"屏東縣","lat":22.6512,"lng":120.589},{"zip_code":"913","name":"萬丹鄉","city":"屏東縣","lat":22.5885,"lng":120.477},{"zip_code":"920","name":"潮州鎮","city":"屏東縣","lat":22.5364,"lng":120.557},{"zip_code":"921","name":"泰武鄉","city":"屏東縣","lat":22.6041,"lng":120.692},{"zip_code":"922","name":"來義鄉","city":"屏東縣","lat":22.5016,"lng":120.686},{"zip_code":"923","name":"萬巒鄉","city":"屏東縣","lat":22.5823,"lng":120.602},{"zip_code":"924","name":"崁頂鄉","city":"屏東縣","lat":22.5153,"lng":120.501},{"zip_code":"925","name":"新埤鄉","city":"屏東縣","lat":22.4868,"lng":120.585},{"zip_code":"926","name":"南州鄉","city":"屏東縣","lat":22.4798,"lng":120.518},{"zip_code":"927","name":"林邊鄉","city":"屏東縣","lat":22.4414,"lng":120.513},{"zip_code":"928","name":"東港鎮","city":"屏東縣","lat":22.4627,"lng":120.475},{"zip_code":"929","name":"琉球鄉","city":"屏東縣","lat":22.34,"lng":120.371},{"zip_code":"931","name":"佳冬鄉","city":"屏東縣","lat":22.4298,"lng":120.548},{"zip_code":"932","name":"新園鄉","city":"屏東縣","lat":22.5172,"lng":120.45},{"zip_code":"940","name":"枋寮鄉","city":"屏東縣","lat":22.4033,"lng":120.598},{"zip_code":"941","name":"枋山鄉","city":"屏東縣","lat":22.2709,"lng":120.657},{"zip_code":"942","name":"春日鄉","city":"屏東縣","lat":22.404,"lng":120.698},{"zip_code":"943","name":"獅子鄉","city":"屏東縣","lat":22.2608,"lng":120.736},{"zip_code":"944","name":"車城鄉","city":"屏東縣","lat":22.0792,"lng":120.743},{"zip_code":"945","name":"牡丹鄉","city":"屏東縣","lat":22.1555,"lng":120.817},{"zip_code":"946","name":"恆春鎮","city":"屏東縣","lat":21.9853,"lng":120.763},{"zip_code":"947","name":"滿州鄉","city":"屏東縣","lat":22.0493,"lng":120.844}]},{"name":"臺東縣","districts":[{"zip_code":"950","name":"臺東市","city":"臺東縣","lat":22.7517,"lng":121.11},{"zip_code":"951","name":"綠島鄉","city":"臺東縣","lat":22.6602,"lng":121.49},{"zip_code":"952","name":"蘭嶼鄉","city":"臺東縣","lat":22.0462,"lng":121.551},{"zip_code":"953","name":"延平鄉","city":"臺東縣","lat":22.9034,"lng":120.983},{"zip_code":"954","name":"卑南鄉","city":"臺東縣","lat":22.7649,"lng":121.002},{"zip_code":"955","name":"鹿野鄉","city":"臺東縣","lat":22.9513,"lng":121.156},{"zip_code":"956","name":"關山鎮","city":"臺東縣","lat":23.0378,"lng":121.177},{"zip_code":"957","name":"海端鄉","city":"臺東縣","lat":23.1148,"lng":121.018},{"zip_code":"958","name":"池上鄉","city":"臺東縣","lat":23.0925,"lng":121.218},{"zip_code":"959","name":"東河鄉","city":"臺東縣","lat":22.9801,"lng":121.252},{"zip_code":"961","name":"成功鎮","city":"臺東縣","lat":23.1266,"lng":121.354},{"zip_code":"962","name":"長濱鄉","city":"臺東縣","lat":23.3348,"lng":121.426},{"zip_code":"963","name":"太麻里鄉","city":"臺東縣","lat":22.591,"lng":120.98},{"zip_code":"964","name":"金峰鄉","city":"臺東縣","lat":22.5816,"lng":120.857},{"zip_code":"965","name":"大武鄉","city":"臺東縣","lat":22.3836,"lng":120.899},{"zip_code":"966","name":"達仁鄉","city":"臺東縣","lat":22.3843,"lng":120.836}]},{"name":"花蓮縣","districts":[{"zip_code":"970","name":"花蓮市","city":"花蓮縣","lat":23.997,"lng":121.607},{"zip_code":"971","name":"新城鄉","city":"花蓮縣","lat":24.0558,"lng":121.614},{"zip_code":"972","name":"秀林鄉","city":"花蓮縣","lat":24.1237,"lng":121.481},{"zip_code":"973","name":"吉安鄉","city":"花蓮縣","lat":23.9555,"lng":121.565},{"zip_code":"974","name":"壽豐鄉","city":"花蓮縣","lat":23.8446,"lng":121.534},{"zip_code":"975","name":"鳳林鎮","city":"花蓮縣","lat":23.7432,"lng":121.47},{"zip_code":"976","name":"光復鄉","city":"花蓮縣","lat":23.6466,"lng":121.435},{"zip_code":"977","name":"豐濱鄉","city":"花蓮縣","lat":23.5852,"lng":121.494},{"zip_code":"978","name":"瑞穗鄉","city":"花蓮縣","lat":23.5156,"lng":121.407},{"zip_code":"979","name":"萬榮鄉","city":"花蓮縣","lat":23.7277,"lng":121.319},{"zip_code":"981","name":"玉里鎮","city":"花蓮縣","lat":23.3714,"lng":121.36},{"zip_code":"982","name":"卓溪鄉","city":"花蓮縣","lat":23.3906,"lng":121.18},{"zip_code":"983","name":"富里鄉","city":"花蓮縣","lat":23.1967,"lng":121.298}]}]')}});
//# sourceMappingURL=app.e7291063.js.map