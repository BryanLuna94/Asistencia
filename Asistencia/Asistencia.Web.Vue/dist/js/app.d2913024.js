(function(e){function t(t){for(var o,n,r=t[0],c=t[1],l=t[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(o=!1)}o&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},s={app:0},i=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"068a":function(e,t,a){},"3f5b":function(e,t,a){},4678:function(e,t,a){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=i,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v(e._s(e.msg))]),e._m(0)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Welcome to your new single-page applicationx, built with "),a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Vue.js")]),e._v(".")])}],c={name:"Home",props:{msg:String}},l=c,d=a("2877"),p=Object(d["a"])(l,n,r,!1,null,"006fa3d6",null),u=p.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-12",attrs:{id:"Geolocation"}},[a("div",{staticClass:"col-sm-12"},[e.errorStr?a("div",[e._v("\n                Sorry, but the following error\n                occurred: "+e._s(e.errorStr)+"\n            ")]):e._e(),e.gettingLocation?a("div",[a("i",[e._v("Obteniendo su ubicación...")])]):e._e(),e.location?a("div",[e._v("\n                Su ubicación es: Latitud: "+e._s(e.location.coords.latitude)+", Longitud: "+e._s(e.location.coords.longitude)+"\n            ")]):e._e()])])},E=[],g={name:"Geolocation",components:{},created:function(){var e=this;"geolocation"in navigator||(this.errorStr="Geolocation is not available."),this.gettingLocation=!0,navigator.geolocation.getCurrentPosition(function(t){e.gettingLocation=!1,e.location=t},function(t){e.gettingLocation=!1,e.errorStr=t.message})},data:function(){return{location:null,gettingLocation:!1,valor:"De componente Geolocalitation"}},mounted:function(){}},f=g,b=(a("bfc6"),Object(d["a"])(f,m,E,!1,null,null,null)),_=b.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-12 container-login100"},[a("div",{staticClass:"col-sm-12"},[e.gettingLocation?a("div",[a("i",[e._v("Obteniendo su ubicación...")])]):e.errorStr?a("div",[e._v("\n                Lo sentimos, pero ocurrió el siguiente error: "+e._s(e.errorStr)+"\n            ")]):a("div",[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",[a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"form-group m-b-0"},[a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-5"},[a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"padding-left":"2px","padding-right":"2px"}},[a("label",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0 text-black-50"},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.fechaHoy)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),e._m(1),e._m(2)])])])]),a("div",[a("div",{staticClass:"panel-body"},[a("form",{staticClass:"form-horizontal"},[a("div",{staticClass:"form-group m-b-0"},[a("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",staticStyle:{"padding-left":"1px","padding-right":"2px"}},[a("label",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0",staticStyle:{"font-size":"50px","text-align":"center","background-color":"black",color:"white"}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+e._s(e.message)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),a("div",{staticClass:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},[a("div",{staticClass:"form-group",class:{"form-group--error":e.$v.codigo.$error}},[a("label",[e._v("N° DOCUMENTO")]),a("div",{staticClass:"m-b-30"},[a("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model.trim",value:e.codigo,expression:"codigo",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.codigo},on:{input:[function(t){t.target.composing||(e.codigo=t.target.value.trim())},function(t){return e.setCodigo(t.target.value)}],keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.LlenarDatosEmpleado(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.LimpiarDatosEmpleado(t)}],blur:function(t){return e.$forceUpdate()}}})])]),e.$v.codigo.required?e._e():a("div",{staticClass:"error"},[e._v("El campo es requerido.")]),e.$v.codigo.minLength?e._e():a("div",{staticClass:"error"},[e._v("El codigo debe tener al menos "+e._s(e.$v.codigo.$params.minLength.min)+" caracteres.")]),e.mensaje?a("div",[e._v(e._s(e.mensaje))]):e._e()]),e._m(3)]),a("hr"),e._m(4),a("div",{staticClass:"row"},[e._m(5),a("div",{staticClass:"col-xs-1 col-sm-1 col-md-1 col-lg-1",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objEmpleado.emp_codigo,expression:"objEmpleado.emp_codigo"}],staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{disabled:""},domProps:{value:e.objEmpleado.emp_codigo},on:{input:function(t){t.target.composing||e.$set(e.objEmpleado,"emp_codigo",t.target.value)}}})]),a("div",{staticClass:"col-xs-1 col-sm-1 col-md-1 col-lg-1",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objEmpleado.emp_tipo,expression:"objEmpleado.emp_tipo"}],staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{disabled:""},domProps:{value:e.objEmpleado.emp_tipo},on:{input:function(t){t.target.composing||e.$set(e.objEmpleado,"emp_tipo",t.target.value)}}})]),a("div",{staticClass:"col-xs-3 col-sm-3 col-md-3 col-lg-3",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objEmpleado.emp_nombre,expression:"objEmpleado.emp_nombre"}],staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{disabled:""},domProps:{value:e.objEmpleado.emp_nombre},on:{input:function(t){t.target.composing||e.$set(e.objEmpleado,"emp_nombre",t.target.value)}}})]),e._m(6),a("div",{staticClass:"col-xs-1 col-sm-1 col-md-1 col-lg-1",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objEmpleado.are_codigo,expression:"objEmpleado.are_codigo"}],staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{disabled:""},domProps:{value:e.objEmpleado.are_codigo},on:{input:function(t){t.target.composing||e.$set(e.objEmpleado,"are_codigo",t.target.value)}}})]),a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objEmpleado.are_descripcion,expression:"objEmpleado.are_descripcion"}],staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{disabled:""},domProps:{value:e.objEmpleado.are_descripcion},on:{input:function(t){t.target.composing||e.$set(e.objEmpleado,"are_descripcion",t.target.value)}}})])]),a("div",{staticClass:"row"},[e._m(7),a("div",{staticClass:"col-xs-1 col-sm-1 col-md-1 col-lg-1",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objEmpleado.suc_codigo,expression:"objEmpleado.suc_codigo"}],staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{disabled:""},domProps:{value:e.objEmpleado.suc_codigo},on:{input:function(t){t.target.composing||e.$set(e.objEmpleado,"suc_codigo",t.target.value)}}})]),a("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 col-lg-4",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objEmpleado.suc_nombre,expression:"objEmpleado.suc_nombre"}],staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{disabled:""},domProps:{value:e.objEmpleado.suc_nombre},on:{input:function(t){t.target.composing||e.$set(e.objEmpleado,"suc_nombre",t.target.value)}}})]),e._m(8),a("div",{staticClass:"col-xs-1 col-sm-1 col-md-1 col-lg-1",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objEmpleado.aresub_codigo,expression:"objEmpleado.aresub_codigo"}],staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{disabled:""},domProps:{value:e.objEmpleado.aresub_codigo},on:{input:function(t){t.target.composing||e.$set(e.objEmpleado,"aresub_codigo",t.target.value)}}})]),a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objEmpleado.aresub_descripcion,expression:"objEmpleado.aresub_descripcion"}],staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",attrs:{disabled:""},domProps:{value:e.objEmpleado.aresub_descripcion},on:{input:function(t){t.target.composing||e.$set(e.objEmpleado,"aresub_descripcion",t.target.value)}}})])]),a("hr")])])])])]),a("div",{staticClass:"panel-footer"},[a("div",{staticClass:"form-group m-b-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col text-center col-sm-12"},[a("button",{staticClass:"btn btn-success btn-lg btn-block",attrs:{disabled:e.isDisabled},on:{click:function(t){return t.preventDefault(),e.GuardarMarcadorEmpleado()}}},[e._v("Marcar")])])])])])])])])])])])])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"padding-left":"1px","padding-right":"2px"}},[a("label",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0"},[e._v("FECHA:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"padding-left":"1px","padding-right":"2px"}},[a("label",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0"},[e._v("SUCURSAL:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",staticStyle:{"padding-left":"1px","padding-right":"2px"}},[a("label",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-0 p-0 text-black-50"},[e._v("003 - 06 TERMINAL FLORES LIMA ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-3 col-sm-3 col-md-3 col-lg-3 pull-right"},[a("div",{staticClass:"form-group"},[a("label",[e._v("MARCADO ESPECIAL")]),a("div",{staticClass:"m-b-30"},[a("input",{attrs:{type:"checkbox","data-color":"#f96262","data-size":"small"}})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("DATOS DEL TRABAJADOR")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"padding-left":"1px","padding-right":"2px","padding-bottom":"2px"}},[a("label",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",staticStyle:{"vertical-align":"central"}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTRABAJADOR:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"padding-left":"1px","padding-right":"2px"}},[a("label",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",staticStyle:{"vertical-align":"central"}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAREA:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"padding-left":"1px","padding-right":"2px"}},[a("label",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",staticStyle:{"vertical-align":"central"}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUCURSAL:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2",staticStyle:{"padding-left":"1px","padding-right":"2px"}},[a("label",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",staticStyle:{"vertical-align":"central"}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUB AREA:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])}],T=(a("96cf"),a("1da1")),j=a("c1df"),C=a.n(j),S=a("bc3a"),L=a.n(S),M={configApiAsistencia:{URL_BASE:"https://apimarcador.somee.com/",TIME_EXPIRE_TOKEN:"144000"},configWeb:{IDIOMA_DEFECTO:"en",NAME:"ASISTENCIA",COPYRIGHT:"VR1 Software"},pathsWeb:{PATH_LOGO_WEB:"AmpleAdmin/plugins/images/dynactrl-logo.png",PATH_LOGO_TEXT:"AmpleAdmin/plugins/images/dynactrl-text.png",PATH_IMAGEN_USER:"AmpleAdmin/plugins/images/user.png",PATH_ENTIRE_LOGO:"AmpleAdmin/plugins/images/dynactrl-complete.png"},configSession:{USER:"userLogin",LANGUAGE:"languaje"},configUrlApiAsistencia:{USUARIO_LOGIN:"api/Autenticacion/Login",USER_LIST:"api/User/ListUser",USER_SELECT:"api/User/SelectUser/{0}",USER_INSERT:"api/User/InsertUser",USER_UPDATE:"api/User/UpdateUser/{0}",USER_DISABLE:"api/User/DisableUser/{0}",EMPLOYEE_INSERT:"api/Empleado/InsertEmpleado",EMPLOYEE_UPDATE:"api/Empleado/UpdateEmpleado/",EMPLOYEE_DISABLE:"api/Empleado/DisableEmpleado/",EMPLOYEE_LIST:"api/Empleado/ListEmpleado",EMPLOYEE_SELECT:"api/Empleado/SelectEmpleado/",MARCADOR_INSERT:"api/Marcador/InsertMarcador",MARCADOR_UPDATE:"api/Marcador/UpdateMarcador/",MARCADOR_DISABLE:"api/Marcador/DisableMarcador/",MARCADOR_LIST:"api/Marcador/ListMarcador",MARCADOR_SELECT:"api/Marcador/SelectMarcador/",COMPANY_INSERT:"api/Company/InsertCompany",COMPANY_UPDATE:"api/Company/UpdateCompany/{0}",COMPANY_DISABLE:"api/Company/DisableCompany/{0}",COMPANY_LIST:"api/Company/ListCompany",COMPANY_SELECT:"api/Company/SelectCompany/{0}",COMPONENT_INSERT:"api/Component/InsertComponent",COMPONENT_UPDATE:"api/Component/UpdateComponent/{0}",COMPONENT_DISABLE:"api/Component/DisableComponent/{0}",COMPONENT_LIST:"api/Component/ListComponent",COMPONENT_SELECT:"api/Component/SelectComponent/{0}",COUNTRY_INSERT:"api/Country/InsertCountry",COUNTRY_UPDATE:"api/Country/UpdateCountry/{0}",COUNTRY_DISABLE:"api/Country/DisableCountry/{0}",COUNTRY_LIST:"api/Country/ListCountry",COUNTRY_SELECT:"api/Country/SelectCountry/{0}",CUSTOMER_INSERT:"api/Customer/InsertCustomer",CUSTOMER_UPDATE:"api/Customer/UpdateCustomer/{0}",CUSTOMER_DISABLE:"api/Customer/DisableCustomer/{0}",CUSTOMER_LIST:"api/Customer/ListCustomer",CUSTOMER_SELECT:"api/Customer/SelectCustomer/{0}",DEALER_INSERT:"api/Dealer/InsertDealer",DEALER_UPDATE:"api/Dealer/UpdateDealer/{0}",DEALER_DISABLE:"api/Dealer/DisableDealer/{0}",DEALER_LIST:"api/Dealer/ListDealer",DEALER_SELECT:"api/Dealer/SelectDealer/{0}",EQUIPMENT_INSERT:"api/Equipment/InsertEquipment",EQUIPMENT_UPDATE:"api/Equipment/UpdateEquipment/{0}",EQUIPMENT_DISABLE:"api/Equipment/DisableEquipment/{0}",EQUIPMENT_LIST:"api/Equipment/ListEquipment",EQUIPMENT_SELECT:"api/Equipment/SelectEquipment/{0}",EQUIPMENTMODEL_INSERT:"api/EquipmentModel/InsertEquipmentModel",EQUIPMENTMODEL_UPDATE:"api/EquipmentModel/UpdateEquipmentModel/{0}",EQUIPMENTMODEL_DISABLE:"api/EquipmentModel/DisableEquipmentModel/{0}",EQUIPMENTMODEL_LIST:"api/EquipmentModel/ListEquipmentModel",EQUIPMENTMODEL_SELECT:"api/EquipmentModel/SelectEquipmentModel/{0}",EQUIPMENTTYPE_INSERT:"api/EquipmentType/InsertEquipmentType",EQUIPMENTTYPE_UPDATE:"api/EquipmentType/UpdateEquipmentType/{0}",EQUIPMENTTYPE_DISABLE:"api/EquipmentType/DisableEquipmentType/{0}",EQUIPMENTTYPE_LIST:"api/EquipmentType/ListEquipmentType",EQUIPMENTTYPE_SELECT:"api/EquipmentType/SelectEquipmentType/{0}",LANGUAGE_INSERT:"api/Language/InsertLanguage",LANGUAGE_UPDATE:"api/Language/UpdateLanguage/{0}",LANGUAGE_DISABLE:"api/Language/DisableLanguage/{0}",LANGUAGE_LIST:"api/Language/ListLanguage",LANGUAGE_SELECT:"api/Language/SelectLanguage/{0}",REGION_INSERT:"api/Region/InsertRegion",REGION_UPDATE:"api/Region/UpdateRegion/{0}",REGION_DISABLE:"api/Region/DisableRegion/{0}",REGION_LIST:"api/Region/ListRegion",REGION_SELECT:"api/Region/SelectRegion/{0}",ROLE_LIST:"api/Role/ListRole",ROLE_SELECT:"api/Role/SelectRole/{0}",ROLE_INSERT:"api/Role/InsertRole",ROLE_UPDATE:"api/Role/UpdateRole/{0}",ROLE_DISABLE:"api/Role/DisableRole/{0}",ROLE_OPTIONS_LIST_TREEVIEW:"api/Role/ListRoleOptionsTreeView/{0}",SUBEQUIPMENT_INSERT:"api/SubEquipment/InsertSubEquipment",SUBEQUIPMENT_UPDATE:"api/SubEquipment/UpdateSubEquipment/{0}",SUBEQUIPMENT_DISABLE:"api/SubEquipment/DisableSubEquipment/{0}",SUBEQUIPMENT_LIST:"api/SubEquipment/ListSubEquipment",SUBEQUIPMENT_SELECT:"api/SubEquipment/SelectSubEquipment/{0}",SUBEQUIPMENTMODEL_INSERT:"api/SubEquipmentModel/InsertSubEquipmentModel",SUBEQUIPMENTMODEL_UPDATE:"api/SubEquipmentModel/UpdateSubEquipmentModel/{0}",SUBEQUIPMENTMODEL_DISABLE:"api/SubEquipmentModel/DisableSubEquipmentModel/{0}",SUBEQUIPMENTMODEL_LIST:"api/SubEquipmentModel/ListSubEquipmentModel",SUBEQUIPMENTMODEL_SELECT:"api/SubEquipmentModel/SelectSubEquipmentModel/{0}",TEMPLATE_LIST:"api/Template/ListTemplate",TEMPLATE_SELECT:"api/Template/SelectTemplate/{0}",TEMPLATE_INSERT:"api/Template/InsertTemplate",TEMPLATE_UPDATE:"api/Template/UpdateTemplate/{0}",TEMPLATE_DISABLE:"api/Template/DisableTemplate/{0}",TEMPLATE_DETAIL_LIST:"api/Template/ListTemplateDetail",COMPANY_AUTOCOMPLETE:"api/Base/ListCompanyAutocomplete/",COMPONENT_AUTOCOMPLETE:"api/Base/ListComponentAutocomplete/",CONDITION_AUTOCOMPLETE:"api/Base/ListConditionAutocomplete/",COUNTRY_AUTOCOMPLETE:"api/Base/ListCountryAutocomplete/",CUSTOMER_AUTOCOMPLETE:"api/Base/ListCustomerAutocomplete/",DEALER_AUTOCOMPLETE:"api/Base/ListDealerAutocomplete/",EQUIPMENT_AUTOCOMPLETE:"api/Base/ListEquipmentAutocomplete/{0}/",EQUIPMENTMODEL_AUTOCOMPLETE:"api/Base/ListEquipmentModelAutocomplete/{0}/",EQUIPMENTTYPE_AUTOCOMPLETE:"api/Base/ListEquipmentTypeAutocomplete/",LANGUAGE_AUTOCOMPLETE:"api/Base/ListLanguageAutocomplete/",REGION_AUTOCOMPLETE:"api/Base/ListRegionAutocomplete/",ROLE_AUTOCOMPLETE:"api/Base/ListRoleAutocomplete/",SUBEQUIPMENT_AUTOCOMPLETE:"api/Base/ListSubEquipmentAutocomplete/",SUBEQUIPMENTMODEL_AUTOCOMPLETE:"api/Base/ListSubEquipmentModelAutocomplete/{0}/",USER_AUTOCOMPLETE:"api/Base/ListUserAutocomplete/"},configMessageResponse:{USER_AUTHORIZE:"Usuario Autorizado",NOT_SELECT_IMAGE_EQUIPMENT:"Debe seleccionar una imagen de equipo de referencia",NOT_SELECT_IMAGE_SUBEQUIPMENT:"Debe seleccionar una imagen de sub equipo de referencia",NOT_SELECT_IMAGE_LIST_EQUIPMENT:"Datos de imágenes incompletas en sección de equipos",NOT_SELECT_CONDITION_LIST_EQUIPMENT:"Datos de condición incompletas en sección de equipos",NOT_SELECT_ORDER_LIST_EQUIPMENT:"Datos de order incompletas en sección de equipos",NOT_SELECT_MAXCHARS_LIST_EQUIPMENT:"Datos de cantidad máxima de caracteres incompletas en sección de equipos",NOT_SELECT_IMAGE_LIST_SUBEQUIPMENT:"Datos de imágenes incompletas en sección de sub equipos",NOT_SELECT_CONDITION_LIST_SUBEQUIPMENT:"Datos de condición incompletas en sección de sub equipos",NOT_SELECT_ORDER_LIST_SUBEQUIPMENT:"Datos de order incompletas en sección de sub equipos",NOT_SELECT_MAXCHARS_LIST_SUBEQUIPMENT:"Datos de cantidad máxima de caracteres incompletas en sección de sub equipos",CHANGE_EQUIPMENTMODEL:"Recuerde que si modifica este valor cambiará la lista de equipos",CHANGE_SUBEQUIPMENTMODEL:"Recuerde que si modifica este valor cambiará la lista de sub equipos"}},A=M,U=(a("7514"),{getSesion:function(e){var t=localStorage.getItem(e);return t},setSesion:function(e,t){localStorage.setItem(e,t)},logout:function(){localStorage.removeItem(A.configSession.USER),window.location.href=rutaLogin},getUrlApiAsistencia:function(e){return A.configApiAsistencia.URL_BASE+e},getUserData:function(){var e=localStorage.getItem(A.configSession.USER);return null===e&&this.logout(),JSON.parse(e)},getErrorResponse:function(e){if(e)switch(e){case 401:Notifications.Messages.warning("Acceso Denegado"),this.logout();break;case 404:Notifications.Messages.error("Recurso no encontrado");break;case 500:Notifications.Messages.error("Error Interno");break;case 501:Notifications.Messages.warning("Registro ya existe");break;case 502:Notifications.Messages.warning("Credenciales incorrectas");break;default:Notifications.Messages.error("Error no indentificado");break}},geti18n:function(e){return new VueI18n({locale:Functions.getCurrentLanguage(),fallbackLocale:"en",messages:e})},showConfirm:function(e,t){return void 0===e&&(e="Deseas eliminar este registro"),void 0===t&&(t="Sì, Eliminar Registro"),Swal.fire({title:"¿Estas Seguro?",text:e,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:t}).then(function(e){if(e.value)return!0})},getUrlBase:function(e){return location.origin+"/"+e},getSrcFromDropify:function(e){var t=$(e).parent().find(".dropify-preview").find(".dropify-render").find("img").attr("src");return void 0===t&&(t=""),t},showImageBase64:function(e,t){if(""!==t)$(e).parent().find(".dropify-preview").find(".dropify-render").html('<img src="'+t+'">'),$(e).parent().find(".dropify-preview").css("display","block"),$(e).parent().addClass("has-preview");else{var a=$(e).dropify();a=a.data("dropify"),void 0!==a&&(a.resetPreview(),a.clearElement())}}}),O=U,I={sendAutocomplete:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,a){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=Functions.getUserData().token,e.next=3,L.a.get(t,{params:{pValue:a},headers:{Authorization:"Bearer "+o,"Content-Type":"application/json"}}).then(function(e){if(e.data.isCorrect)return e.data.value.listBase?e.data.value.listBase:[]}).catch(function(e){Functions.getErrorResponse(e.response.status)});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));function t(t,a){return e.apply(this,arguments)}return t}(),sendPost:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,a,o){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return void 0===o&&(o=!1),e.next=4,L.a.post(t,a,{headers:{"Content-Type":"application/json"}}).then(function(e){if(e.data.isCorrect)return e;Functions.getErrorResponse(e.data.status)}).catch(function(e){Functions.getErrorResponse(e.response.status)});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));function t(t,a,o){return e.apply(this,arguments)}return t}(),sendPostImage:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,a,o,s){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return void 0===s&&(s=!1),i=O.getUserData().token,e.next=4,L.a.post(t,a,o,{headers:{Authorization:"Bearer "+i,"Content-Type":"application/json"}}).then(function(e){if(e.data.isCorrect)return s&&Notifications.Messages.info("Se actualizó la información exitosamente"),e;O.getErrorResponse(e.data.status)}).catch(function(e){O.getErrorResponse(e.response.status)});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));function t(t,a,o,s){return e.apply(this,arguments)}return t}(),sendPut:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t,a){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=O.getUserData().token,e.next=3,L.a.put(t,a,{headers:{Authorization:"Bearer "+o,"Content-Type":"application/json"}}).then(function(e){if(e.data.isCorrect)return Notifications.Messages.info("Se actualizó la información exitosamente"),!0;O.getErrorResponse(e.data.status)}).catch(function(e){O.getErrorResponse(e.response.status)});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));function t(t,a){return e.apply(this,arguments)}return t}(),sendGet:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=3,L.a.get(t,{headers:{"Content-Type":"application/json"}}).then(function(e){return e}).catch(function(e){O.getErrorResponse(e.response.status)});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},D=I,y=a("b5ae"),x={name:"marcador",created:function(){this.obtenerGeolocation()},mounted:function(){setInterval(this.callFunction,1e3)},data:function(){return{titulo:"Marcador",message:"",mensaje:"",fechaHoy:"",codigo:"",flagMarcadoEspecial:!1,location:null,gettingLocation:!1,errorStr:null,objEmpleado:{emp_codigo:"",emp_tipo:"",emp_nombre:"",suc_codigo:"",suc_nombre:"",are_codigo:"",are_descripcion:"",aresub_codigo:"",aresub_descripcion:"",codigo:"",flagUbicacion:!1,flagHabilitarMarcado:!1},objFilter:{codigoAsistencia:0},objMarcador:{id:0,emp_codigo:"",fecha_hora_marcador:"",longitud:0,latitud:0}}},methods:{setCodigo:function(e){this.objFilter.codigoAsistencia=e,this.codigo=e,this.$v.codigo.$touch()},callFunction:function(){var e=new Date,t=C()(e,"YYYY-MM-DD hh:mm:ss").format("hh:mm:ss a");this.message=t,this.fechaHoy=C()(e,"YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY")},LlenarDatosEmpleado:function(e){var t=this;t.ObtenerEmpleado(this.objFilter.codigoAsistencia)},GuardarMarcadorEmpleado:function(){var e=new Date;e.toLocaleString("en-US",{timeZone:"America/New_York"}),this.objMarcador.id=0,this.objMarcador.emp_codigo=this.objEmpleado.emp_codigo,this.objMarcador.fecha_hora_marcador=C()(e).format("YYYY-MM-DDTHH:mm:ss"),this.objMarcador.longitud=this.location.coords.longitude,this.objMarcador.latitud=this.location.coords.latitude,this.GuardarMarcador(this.objMarcador)},ObtenerFechaHoraMarcador:function(){var e=new Date;this.objMarcador.fIngresoUno=C()(e,"YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY"),this.objMarcador.hIngresoUno=C()(e,"YYYY-MM-DD hh:mm:ss").format("hh:mm a")},LimpiarDatosEmpleado:function(){var e=this;e.objEmpleado.emp_codigo="",e.objEmpleado.emp_tipo="",e.objEmpleado.emp_nombre="",e.objEmpleado.suc_codigo="",e.objEmpleado.suc_nombre="",e.objEmpleado.are_codigo="",e.objEmpleado.are_descripcion="",e.objEmpleado.aresub_codigo="",e.objEmpleado.aresub_descripcion="",e.mensaje="",e.codigo="",e.objEmpleado.flagHabilitarMarcado=!1},obtenerGeolocation:function(){var e=this;"geolocation"in navigator?(this.gettingLocation=!0,navigator.geolocation.getCurrentPosition(function(t){e.gettingLocation=!1,e.location=t},function(t){e.gettingLocation=!1,e.errorStr=t.message})):this.errorStr="Geolocation is not available."},ObtenerEmpleado:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t){var a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=this,o=O.getUrlApiAsistencia(A.configUrlApiAsistencia.EMPLOYEE_SELECT+t),e.next=4,D.sendGet(o).then(function(e){e.data.isCorrect?(a.objEmpleado.emp_codigo=e.data.value.empleado.emp_codigo,a.objEmpleado.emp_tipo=e.data.value.empleado.emp_tipo,a.objEmpleado.emp_nombre=e.data.value.empleado.emp_nombre,a.objEmpleado.suc_codigo=e.data.value.empleado.suc_codigo,a.objEmpleado.suc_nombre=e.data.value.empleado.suc_nombre,a.objEmpleado.are_codigo=e.data.value.empleado.are_codigo,a.objEmpleado.are_descripcion=e.data.value.empleado.are_descripcion,a.objEmpleado.aresub_codigo=e.data.value.empleado.aresub_codigo,a.objEmpleado.aresub_descripcion=e.data.value.empleado.aresub_descripcion,a.objEmpleado.flagHabilitarMarcado=!0,a.mensaje=""):(a.LimpiarDatosEmpleado(),a.mensaje="No Encontrado")});case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),alertMarcacionIngreso:function(e){var t=this;this.$swal({position:"top",icon:"success",title:"Marcación de Ingreso",showConfirmButton:!1,timer:1500,timerProgressBar:!0,html:'Fecha: <b style="color:#08C142">'+C()(e.fecha_hora_marcador,"YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY")+'</b>  Hora: <b style="color:#08C142">'+C()(e.fecha_hora_marcador,"YYYY-MM-DD hh:mm:ss").format("hh:mm a")+"</b> "}).then(function(e){t.LimpiarDatosEmpleado()})},alertMarcacionSalida:function(e){var t=this;this.$swal({position:"top",icon:"success",title:"Marcación de Salida",showConfirmButton:!1,timer:1500,html:'Fecha: <b style="color:#EE3811">'+C()(e.fecha_hora_marcador,"YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY")+'</b>  Hora: <b style="color:#EE3811">'+C()(e.fecha_hora_marcador,"YYYY-MM-DD hh:mm:ss").format("hh:mm a")+"</b> "}).then(function(e){t.LimpiarDatosEmpleado()})},alertMarcacionError:function(){this.$swal({position:"center-center",icon:"error",title:"Ocurrió un error",showConfirmButton:!1,timer:1500})},GuardarMarcador:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(t){var a,o,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=this,o={marcador:t},i=O.getUrlApiAsistencia(A.configUrlApiAsistencia.MARCADOR_INSERT),e.next=6,D.sendPost(i,JSON.stringify(o),!0).then(function(e){void 0!==e?(s=e.data.value,1==s?a.alertMarcacionIngreso(t):2==s&&a.alertMarcacionSalida(t)):a.alertMarcacionError()});case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},components:{},validations:{codigo:{required:y["required"],minLength:Object(y["minLength"])(8)}},computed:{isDisabled:function(){return!this.objEmpleado.flagHabilitarMarcado}}},R=x,N=(a("d2ed"),Object(d["a"])(R,v,h,!1,null,"f37c49e6",null)),P=N.exports,w={name:"app",components:{Home:u,Geolocation:_,Marcador:P}},k=w,Y=Object(d["a"])(k,s,i,!1,null,null,null),q=Y.exports,B=a("1dce"),G=a.n(B),Q=a("5f5b"),z=a("b1e0"),H=(a("f9e3"),a("2dd8"),a("8c4f")),F=a("5886"),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"limiter"},[a("div",{staticClass:"container-login100"},[a("div",{staticClass:"wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50"},[a("form",{staticClass:"login100-form validate-form",attrs:{id:"loginform",method:"get",autocomplete:"off"}},[a("span",{staticClass:"login100-form-title p-b-33"},[e._v("\n\t\t\t\t\t\tAccount Login\n\t\t\t\t\t")]),a("div",{staticClass:"wrap-input100 validate-input",attrs:{"data-validate":"Valid email is required: ex@abc.xyz"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objUser.Access,expression:"objUser.Access"}],ref:"Access",staticClass:"input100",attrs:{id:"Access",type:"text",placeholder:"Email"},domProps:{value:e.objUser.Access},on:{"@keypress":function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.login(t))},input:function(t){t.target.composing||e.$set(e.objUser,"Access",t.target.value)}}}),a("span",{staticClass:"focus-input100-1"}),a("span",{staticClass:"focus-input100-2"})]),a("div",{staticClass:"wrap-input100 rs1 validate-input",attrs:{"data-validate":"Password is required"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.objUser.Password,expression:"objUser.Password"}],ref:"Password",staticClass:"input100",attrs:{id:"Password",type:"password",placeholder:"Password"},domProps:{value:e.objUser.Password},on:{"@keypress":function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.login(t))},input:function(t){t.target.composing||e.$set(e.objUser,"Password",t.target.value)}}}),a("span",{staticClass:"focus-input100-1"}),a("span",{staticClass:"focus-input100-2"})]),a("div",{staticClass:"container-login100-form-btn m-t-20"},[a("button",{ref:"bntSubmit",staticClass:"login100-form-btn",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.login()}}},[e._v("\n\t\t\t\t\t\t\tSign in\n\t\t\t\t\t\t")])]),e._m(0),e._m(1)])])])])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center p-t-45 p-b-4"},[a("span",{staticClass:"txt1"},[e._v("\n\t\t\t\t\t\t\tForgot\n\t\t\t\t\t\t")]),a("a",{staticClass:"txt2 hov1",attrs:{href:"javascript:void(0)"}},[e._v("\n\t\t\t\t\t\t\tUsername / Password?\n\t\t\t\t\t\t")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("span",{staticClass:"txt1"},[e._v("\n\t\t\t\t\t\t\tCreate an account?\n\t\t\t\t\t\t")]),a("a",{staticClass:"txt2 hov1",attrs:{href:"#"}},[e._v("\n\t\t\t\t\t\t\tSign up\n\t\t\t\t\t\t")])])}],W={name:"login",props:{msg:"String"},data:function(){return{titulo:"Login",objUser:{Access:"",Password:""}}},methods:{login:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.validateForm()||this.SetFocus();case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),validateForm:function(){return!(!this.objUser.Access||!this.objUser.Password)},SetFocus:function(){this.objUser.Access?this.objUser.Password?this.$refs.bntSubmit.focus():this.$refs.Password.focus():this.$refs.Access.focus()}}},X=W,Z=(a("c8d8"),Object(d["a"])(X,V,J,!1,null,"6fc2b52e",null)),K=Z.exports;o["default"].use(Q["a"]),o["default"].use(z["a"]),o["default"].use(H["a"]),o["default"].use(G.a),o["default"].use(F["a"]),o["default"].config.productionTip=!0,o["default"].directive("focus",{inserted:function(e){e.focus()}});var ee=[{path:"/marcador",component:P},{path:"/geolocation",component:_},{path:"/login",component:K},{path:"/",component:q}],te=new H["a"]({routes:ee,mode:"history"});new o["default"]({router:te,render:function(e){return e(q)}}).$mount("#app")},bf7d:function(e,t,a){},bfc6:function(e,t,a){"use strict";var o=a("3f5b"),s=a.n(o);s.a},c8d8:function(e,t,a){"use strict";var o=a("068a"),s=a.n(o);s.a},d2ed:function(e,t,a){"use strict";var o=a("bf7d"),s=a.n(o);s.a}});
//# sourceMappingURL=app.d2913024.js.map