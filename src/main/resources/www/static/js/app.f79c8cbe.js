(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)s=o[u],n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dbb13d8f"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,r){a=n[t]=[e,r]});e.push(a[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t),i=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,a[1](s)}n[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bb71");a("da64");r["default"].use(n["a"],{iconfont:"md",theme:{background:"#BCFFFF",primary:"#3f51b5",secondary:"#03a9f4",accent:"#009688"}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("TopToolbar"),a("v-container",{staticStyle:{padding:"0px"},attrs:{"align-start":"",fluid:""}},[a("Error"),a("router-view")],1),a("Feedback")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",[a("v-toolbar-side-icon",[a("router-link",{attrs:{to:{name:"home"},tag:"button"}},[a("v-icon",[t._v("home")])],1)],1),a("v-toolbar-title",[t._v("\n        Apps@HM\n        ")]),a("v-spacer"),a("v-btn",{attrs:{flat:""}},[a("span",{staticClass:"mr-2"},[t._v(t._s(t.getUser().name))])]),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-toolbar-side-icon",t._g({},r))]}}])},[a("v-list",[a("v-list-tile",[a("router-link",{attrs:{to:{name:"home"},tag:"button"}},[a("v-btn",{attrs:{flat:""}},[a("v-icon",{attrs:{left:""}},[t._v("house")]),t._v("\n                        all apps\n                    ")],1)],1)],1),a("v-list-tile",[a("router-link",{attrs:{to:{name:"register"},tag:"button"}},[a("v-btn",{attrs:{flat:""}},[a("v-icon",{attrs:{left:""}},[t._v("add")]),t._v("\n                        register\n                    ")],1)],1)],1),a("v-list-tile",[a("router-link",{attrs:{to:{name:"userlogin"},tag:"button"}},[a("v-btn",{attrs:{flat:""}},[a("v-icon",{attrs:{left:""}},[t._v("face")]),t._v("\n                        Login\n                    ")],1)],1)],1),a("v-list-tile",[a("v-btn",{attrs:{flat:"",href:"http://fr-11-apps.herokuapp.com/swagger-ui.html",target:"_blank"}},[a("v-icon",{attrs:{left:""}},[t._v("assignment")]),t._v("\n                    swagger UI\n                ")],1)],1),a("v-list-tile",[a("v-btn",{attrs:{flat:"",href:"http://localhost:8080/swagger-ui.html",target:"_blank"}},[a("v-icon",{attrs:{left:""}},[t._v("assignment")]),t._v("\n                    swagger UI local\n                ")],1)],1)],1)],1)],1)},l=[],c=a("cebc"),u=a("2f62"),d={name:"TopToolbar",methods:Object(c["a"])({},Object(u["b"])(["getUser"]))},p=d,v=a("2877"),f=a("6544"),m=a.n(f),h=a("8336"),g=a("132d"),b=a("8860"),_=a("ba95"),x=a("e449"),y=a("9910"),w=a("71d9"),V=a("706c"),k=a("2a7f"),S=Object(v["a"])(p,o,l,!1,null,null,null),j=S.exports;m()(S,{VBtn:h["a"],VIcon:g["a"],VList:b["a"],VListTile:_["a"],VMenu:x["a"],VSpacer:y["a"],VToolbar:w["a"],VToolbarSideIcon:V["a"],VToolbarTitle:k["a"]});var T=a("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticStyle:{height:"100%"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:"",lg2:""}},[a("Navigation")],1),a("v-flex",{attrs:{xs10:"",lg10:""}},[a("AllApps")],1)],1)},F=[],O=a("d225"),M=a("308d"),U=a("6bb5"),E=a("4e2b"),L=a("9ab4"),R=a("60a3"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.applist,function(e){return a("v-flex",{key:e.title,attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[a("router-link",{attrs:{to:t.getDetailUrl(e.id)}},[a("small-card",{attrs:{app:e}})],1)],1)}),1)],1)},A=[],P=(a("6762"),a("2fdb"),a("75fc")),N=a("bc3a"),$=a.n(N),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"white--text",staticStyle:{margin:"15Px"},attrs:{hover:"",color:"primary"}},[a("v-layout",{staticStyle:{margin:"inherit"},attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("v-avatar",[a("v-img",{attrs:{src:t.logoUrl,alt:"'no logo there'"}})],1),a("v-spacer"),a("div",{staticClass:"headline"},[t._v(t._s(t.app.title))]),a("v-spacer")],1)],1)],1),a("v-layout",{staticStyle:{margin:"inherit"},attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[t.app.description.length<200?a("div",[t._v(t._s(t.app.description))]):t._e(),t.app.description.length>=200?a("div",[t._v(t._s(t.app.description.substring(0,110)+"..."))]):t._e()]),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs5:""}},[a("v-layout",{attrs:{"justify-end":"",row:""}},[a("v-spacer"),a("v-img",{attrs:{src:t.logoUrl,alt:"no logo there",height:"125px","max-width":"200px",contain:""}})],1)],1)],1),a("v-layout",{staticStyle:{margin:"inherit"},attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("div",[t._v("Tags: "+t._s(t.niceList(t.app.tags)))])]),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs5:""}},[a("div",{staticStyle:{"text-align":"right"}},[a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=1?"star":"star_border"))]),a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=2?"star":"star_border"))]),a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=3?"star":"star_border"))]),a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=4?"star":"star_border"))]),a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=5?"star":"star_border"))])],1)])],1),a("v-layout",{staticStyle:{margin:"inherit"},attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-btn",{staticClass:"black--text",attrs:{color:"secondary",round:""}},[t._v("\n                More Info\n            ")])],1),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs5:""}},[a("div",{staticStyle:{"text-align":"right"}},[a("v-btn",{staticClass:"black--text",attrs:{color:"secondary",round:""}},[t._v("\n                    Go to Site\n                ")])],1)])],1)],1)},B=[],q={name:"SmallCard",props:{app:{type:Object,default:{}}},methods:{niceList:function(t,e,a){if(!t||0==t.length)return"";var r=t.slice(0),n=r.pop();return e=e||", ",a=a||", ",r.join(e)+a+n}},computed:{logoUrl:function(){return"https://fr-11-apps.herokuapp.com/api/apps/"+this.app.id+"/logo"}}},z=q,H=a("8212"),J=a("b0af"),G=a("12b2"),K=a("0e8f"),Q=a("adda"),W=a("a722"),X=Object(v["a"])(z,I,B,!1,null,"cbe46ac6",null),Y=X.exports;m()(X,{VAvatar:H["a"],VBtn:h["a"],VCard:J["a"],VCardTitle:G["a"],VFlex:K["a"],VIcon:g["a"],VImg:Q["a"],VLayout:W["a"],VSpacer:y["a"]}),$.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var Z={components:{SmallCard:Y},data:function(){return{apps:[]}},mounted:function(){var t=this;$.a.get("/api/apps").then(function(e){var a;(a=t.apps).push.apply(a,Object(P["a"])(e.data))}).catch(function(){return Promise.reject("Fehler beim laden aller Apps!")})},methods:Object(c["a"])({},Object(u["b"])(["getSearch","getTags","getMinimumRating"]),{getDetailUrl:function(t){return"/detailed/view/"+t}}),computed:{applist:function(){var t=this;return this.apps.filter(function(e){return e.title.includes(t.getSearch())}).filter(function(e){return Math.round(e.rating)>=t.getMinimumRating()}).filter(function(e){return 0==t.getTags().length||t.getTags().some(function(t){return e.tags.includes(t)})})}}},tt=Z,et=a("a523"),at=Object(v["a"])(tt,D,A,!1,null,null,null),rt=at.exports;m()(at,{VContainer:et["a"],VFlex:K["a"],VLayout:W["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{"mini-variant":t.mini,"hide-overlay":"",stateless:""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-list",{staticClass:"pa-0"},[a("v-list-tile",[a("v-list-tile-action",[t.mini?a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[a("v-icon",[t._v("chevron_right")])],1)],1):t._e()]),a("v-list-tile-content",[a("v-list-tile-title",[t._v("HM APPS")])],1),a("v-list-tile-action",[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[a("v-icon",[t._v("chevron_left")])],1)],1)],1)],1)],1),a("v-list",{staticClass:"pt-0"},[a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("search")])],1),a("v-list-tile-content",[a("v-text-field",{attrs:{label:"search App","single-line":""},on:{keyup:function(e){return t.setSearch(t.filter)}},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("list")])],1),a("v-list-tile-content",[a("v-select",{attrs:{items:t.allTags,chips:"",label:"Tags",multiple:""},on:{input:function(e){return t.setTags(t.selectedTags)}},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}})],1)],1),a("v-list-tile",[a("v-list-tile-content",[a("v-layout",{attrs:{row:""}},[a("div",{staticStyle:{"text-align":"center"}},[a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(1)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=1?"star":"star_border"))])],1),a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(2)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=2?"star":"star_border"))])],1),a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(3)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=3?"star":"star_border"))])],1),a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(4)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=4?"star":"star_border"))])],1),a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(5)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=5?"star":"star_border"))])],1)],1)])],1)],1),a("v-list-tile",[a("v-list-tile-content",[a("v-btn",{attrs:{large:"",round:""}},[a("v-icon",[t._v("add_circle")]),t._v("\n                    Share your App\n                ")],1)],1)],1)],1)],1)},it=[];$.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var st={name:"Navigation.vue",data:function(){return{filter:"",drawer:!0,mini:!0,allTags:["test","ball","trump"],selectedTags:[],items:[{title:"Menu 1"},{title:"Menu 2"}]}},mounted:function(){var t=this;$.a.get("/api/tags").then(function(e){var a;(a=t.allTags).push.apply(a,Object(P["a"])(e.data))}).catch(function(t){console.error("api error:"+t)}),this.setTags([])},methods:Object(c["a"])({},Object(u["c"])(["setSearch","setTags","setMinimumRating"]),Object(u["b"])(["getSearch","getTags","getMinimumRating"]))},ot=st,lt=a("40fe"),ct=a("5d23"),ut=a("f774"),dt=a("b56d"),pt=a("2677"),vt=Object(v["a"])(ot,nt,it,!1,null,"b4623398",null),ft=vt.exports;m()(vt,{VBtn:h["a"],VIcon:g["a"],VLayout:W["a"],VList:b["a"],VListTile:_["a"],VListTileAction:lt["a"],VListTileContent:ct["a"],VListTileTitle:ct["b"],VNavigationDrawer:ut["a"],VSelect:dt["a"],VTextField:pt["a"],VToolbar:w["a"]});var mt=function(t){function e(){return Object(O["a"])(this,e),Object(M["a"])(this,Object(U["a"])(e).apply(this,arguments))}return Object(E["a"])(e,t),e}(R["b"]);mt=L["a"]([Object(R["a"])({components:{AllApps:rt,Navigation:ft}})],mt);var ht=mt,gt=ht,bt=Object(v["a"])(gt,C,F,!1,null,null,null),_t=bt.exports;m()(bt,{VFlex:K["a"],VLayout:W["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{staticStyle:{margin:"15Px"},attrs:{elvation:"12"}},[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"person",type:"text",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"password",type:"password","prepend-icon":"lock",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"success"},on:{click:t.submit}},[t._v(" submit\n                            ")]),a("v-spacer")],1)],1)],1)],1)],1)],1)},yt=[];a("7f7f");$.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var wt={name:"Login",data:function(){return{name:"",password:""}},methods:Object(c["a"])({},Object(u["c"])(["setUser"]),{submit:function(){var t=this;$.a.post("/api/login",{username:this.name,password:this.password}).then(function(e){t.setUser(e.data),console.log(e.data),qt.push({name:"home"})}).catch(function(){return Promise.reject("Fehler beim Einloggen!")})}})},Vt=wt,kt=a("99d9"),St=a("4bd4"),jt=Object(v["a"])(Vt,xt,yt,!1,null,"7c372574",null),Tt=jt.exports;m()(jt,{VBtn:h["a"],VCard:J["a"],VCardActions:kt["a"],VCardText:kt["b"],VContainer:et["a"],VForm:St["a"],VLayout:W["a"],VSpacer:y["a"],VTextField:pt["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{staticStyle:{margin:"15Px"},attrs:{elvation:"12"}},[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"person",type:"text",required:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),a("v-text-field",{attrs:{label:"Email","prepend-icon":"email",type:"text",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("v-text-field",{attrs:{label:"password",type:"password","prepend-icon":"lock",required:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("v-card-actions",[a("v-spacer"),a("router-link",{attrs:{to:{name:"home"},tag:"button"}},[a("v-btn",{attrs:{color:"success"},on:{click:t.submit}},[t._v(" submit\n                            ")])],1),a("v-spacer")],1)],1)],1)],1)],1)],1)},Ft=[];$.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var Ot={name:"Register",data:function(){return{user:{name:"",password:"",email:""}}},methods:Object(c["a"])({},Object(u["c"])(["setUser"]),{submit:function(){$.a.post("/api/users",{name:this.user.name,email:this.user.email,password:this.user.password}).then(function(t){qt.push({name:"userlogin"})}).catch(function(){return Promise.reject("Fehler beim Registrieren!")})}})},Mt=Ot,Ut=Object(v["a"])(Mt,Ct,Ft,!1,null,"394e06b4",null),Et=Ut.exports;m()(Ut,{VBtn:h["a"],VCard:J["a"],VCardActions:kt["a"],VCardText:kt["b"],VContainer:et["a"],VForm:St["a"],VLayout:W["a"],VSpacer:y["a"],VTextField:pt["a"]});var Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"white--text",staticStyle:{margin:"15px"},attrs:{color:"primary","min-height":"75%"}},[a("v-layout",{staticStyle:{margin:"inherit"},attrs:{row:""}},[a("v-flex",{attrs:{lg4:""}},[a("h1",[t.isEditable?a("div",[a("v-text-field",{attrs:{label:"Outline","single-line":"",outline:""},model:{value:t.card.title,callback:function(e){t.$set(t.card,"title",e)},expression:"card.title"}})],1):t._e(),t.isEditable?t._e():a("div",[a("v-card-title",[t._v("\n                        "+t._s(this.card.title)+"\n                    ")])],1)]),a("v-avatar",{staticStyle:{margin:"inherit"},attrs:{size:100}},[a("v-img",{attrs:{src:t.logoUrl,alt:"'no logo there'","max-width":"125"}})],1),t.isEditable?a("div",[a("input",{attrs:{type:"file",name:"test"},on:{change:t.onFileSelected}})]):t._e(),a("v-container",{staticStyle:{margin:"inherit"}},[a("br"),t._v("\n                Author : "+t._s(this.card.autor)+"\n                "),a("br"),t._v("\n                create date: "+t._s(t.toDate(this.card.createDate))+"\n                "),a("br"),t._v("\n                last updated: "+t._s(t.toDate(this.card.upDate))+"\n                "),a("br"),t._v("\n                current Rating: "+t._s(this.card.rating)+"\n                "),a("br"),t._v("\n                overall views: "+t._s(this.card.views)+"\n                "),a("br"),t._v("\n                tags: "+t._s(this.card.tags)+"\n                "),a("br")]),t.isEditable?t._e():a("div",[a("v-spacer"),a("router-link",{attrs:{to:t.getDetailUrl(this.id),tag:"button"}},[a("v-btn",[t._v(" Edit my App\n                    ")])],1)],1),t.isEditable?a("div",[a("v-btn",{on:{click:t.onUpload}},[t._v("\n                    Save Changes\n                ")])],1):t._e()],1),a("v-flex",{staticStyle:{margin:"inherit"},attrs:{lg4:""}},[a("v-card-text",[t.isEditable?a("div",[a("v-textarea",{attrs:{outline:"",name:"input-7-4",label:"Outline textarea",value:"Description"},model:{value:t.card.description,callback:function(e){t.$set(t.card,"description",e)},expression:"card.description"}})],1):t._e(),t.isEditable?t._e():a("div",[t._v("\n                    "+t._s(this.card.description)+"\n                ")])])],1),a("v-flex",{staticStyle:{margin:"inherit"},attrs:{lg4:""}},[t.isEditable?a("div",[a("input",{attrs:{type:"file",multiple:""},on:{change:t.onScreenshotFilesSelected}})]):t._e(),t.isEditable?t._e():a("div",[this.card.screenshots.length>0?a("v-carousel",t._l(this.card.screenshots,function(e){return a("v-carousel-item",{attrs:{src:t.getScreenshotUrl(e.id),"reverse-transition":"fade",transition:"fade"}})}),1):t._e()],1)])],1)],1)},Rt=[];a("c5f6");$.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var Dt={name:"DetailedCardView",components:{},data:function(){return{selectedFileLogo:null,screenshotFiles:[],card:{title:String,description:String,views:Number,screenshots:[],tags:[],rating:Number,autor:String,createDate:Number,upDate:Number}}},props:{id:String,editMode:String},computed:{isEditable:function(){return"edit"==this.editMode},idNumber:function(){return Number(this.id)},logoUrl:function(){return"https://fr-11-apps.herokuapp.com/api/apps/"+this.idNumber+"/logo"}},methods:Object(c["a"])({},Object(u["b"])(["getUser"]),{onFileSelected:function(t){this.selectedFileLogo=t.target.files[0]},onScreenshotFilesSelected:function(t){this.screenshotFiles=t.target.files},onUpload:function(){if(null!=this.selectedFileLogo){var t=new FormData;t.append("file",this.selectedFileLogo),$.a.post("/api/users/"+this.getUser().id+"/apps/"+this.idNumber+"/logo",t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+this.getUser().token}}).then(function(t){return console.log(t)}).catch(function(){return Promise.reject("Fehler beim Hochladen des des Logos!")})}for(var e=0;e<this.screenshotFiles.length;e++){var a=new FormData;console.log("upload Screenshot: "+this.screenshotFiles[e].name),a.append("file",this.screenshotFiles[e]),$.a.post("/api/users/"+this.getUser().id+"/apps/"+this.idNumber+"/screenshots",a,{headers:{Authorization:"Bearer "+this.getUser().token}}).catch(function(){return Promise.reject("Fehler beim Hochladen des Screenshots!")})}$.a.put("/api/users/"+this.getUser().id+"/apps/"+this.idNumber,{description:this.card.description,title:this.card.title,tags:this.card.tags},{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.getUser().token}}).then(function(t){return console.log(t)}).catch(function(){return Promise.reject("Fehler beim Speichern der App!")}),qt.push("/detailed/view/"+this.idNumber)},getScreenshotUrl:function(t){return console.log(this.card.screenshots),console.log(t),"https://fr-11-apps.herokuapp.com/api/apps/"+this.idNumber+"/screenshots/"+Number(t)},toDate:function(t){return new Date(t)},getDetailUrl:function(t){return"/detailed/edit/"+t}}),created:function(){var t=this;console.log("create Card for ID: "+this.idNumber),$.a.get("/api/apps/"+this.idNumber).then(function(e){var a;console.log("show app & prepare Fields of Card\n"+e),(a=console).log.apply(a,Object(P["a"])(e.data.screenshots)),t.card={title:e.data.title,description:e.data.description,views:e.data.views,screenshots:e.data.screenshots,tags:e.data.tags,rating:e.data.rating,autor:e.data.author.name,createDate:e.data.creationDate,upDate:e.data.updateDate}}).catch(function(e){t.card={title:"default",description:"default description",views:999,screenshots:[],tags:[],rating:1,autor:"Max Mustermann",createDate:Date.now(),upDate:Date.now()}})}},At=Dt,Pt=a("5e66"),Nt=a("3e35"),$t=a("a844"),It=Object(v["a"])(At,Lt,Rt,!1,null,"7efda2df",null),Bt=It.exports;m()(It,{VAvatar:H["a"],VBtn:h["a"],VCard:J["a"],VCardText:kt["b"],VCardTitle:G["a"],VCarousel:Pt["a"],VCarouselItem:Nt["a"],VContainer:et["a"],VFlex:K["a"],VImg:Q["a"],VLayout:W["a"],VSpacer:y["a"],VTextField:pt["a"],VTextarea:$t["a"]}),r["default"].use(T["a"]);var qt=new T["a"]({mode:"history",routes:[{path:"/userlogin",name:"userlogin",component:Tt},{path:"/register",name:"register",component:Et},{path:"/",name:"home",component:_t},{path:"/detailed/:editMode/:id",name:"detailedcardview",component:Bt,props:!0},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-alert",{attrs:{dismissible:"",type:"error",transition:"scale-transition"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("\n        "+t._s(t.error)+"\n    ")])],1)},Ht=[];$.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var Jt={name:"Error",data:function(){return{show:!1,error:""}},methods:{showError:function(t){console.log(t),this.error=t.reason,this.show=!0,window.setTimeout(this.hideError,4e3)},hideError:function(t){this.show=!1}},mounted:function(){window.addEventListener("unhandledrejection",this.showError)}},Gt=Jt,Kt=a("0798"),Qt=Object(v["a"])(Gt,zt,Ht,!1,null,"7fe9ff44",null),Wt=Qt.exports;m()(Qt,{VAlert:Kt["a"]});var Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"feedback-button",attrs:{color:"green lighten-2",dark:""}},r),[t._v("\n            Feedback\n        ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n            Tragen Sie hier Ihr Feedback ein:\n        ")]),a("v-card-text",[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg6:""}},[a("v-text-field",{attrs:{rules:t.subjectRules,counter:100,label:"Subject",required:""},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}})],1),a("v-flex",{attrs:{lg12:""}},[a("v-textarea",{attrs:{rules:t.contentRules,counter:300,label:"Content",required:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){return t.sendFeedback()}}},[t._v("\n                Send\n            ")])],1)],1)],1)},Yt=[];$.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var Zt={name:"Feedback",data:function(){return{valid:!1,dialog:!1,subject:"",content:"",subjectRules:[function(t){return!!t||"Subject is required"},function(t){return t.length<=100||"Subject must be less than 100 characters"}],contentRules:[function(t){return!!t||"Content is required"},function(t){return t.length<=300||"Content must be less than 300 characters"}]}},methods:{sendFeedback:function(){var t=this;this.valid&&$.a.post("/api/feedback",{subject:this.subject,content:this.content}).then(function(){t.dialog=!1,t.subject="",t.content=""}).catch(function(t){return Promise.reject("Fehler beim Senden des Feedbacks!")})}}},te=Zt,ee=(a("d02a"),a("169a")),ae=a("ce7e6"),re=Object(v["a"])(te,Xt,Yt,!1,null,"13209e91",null),ne=re.exports;m()(re,{VBtn:h["a"],VCard:J["a"],VCardActions:kt["a"],VCardText:kt["b"],VCardTitle:G["a"],VContainer:et["a"],VDialog:ee["a"],VDivider:ae["a"],VFlex:K["a"],VForm:St["a"],VLayout:W["a"],VSpacer:y["a"],VTextField:pt["a"],VTextarea:$t["a"]});var ie={name:"App",router:qt,components:{TopToolbar:j,Error:Wt,Feedback:ne},data:function(){return{items:[{title:"Menu 1"},{title:"Menu 2"}]}}},se=ie,oe=a("7496"),le=Object(v["a"])(se,i,s,!1,null,null,null),ce=le.exports;m()(le,{VApp:oe["a"],VContainer:et["a"]});a("386d");r["default"].use(u["a"]);var ue=new u["a"].Store({state:{search:"",tags:[""],minimumRating:0,user:{id:0,email:"mail",name:"default",token:"default"}},getters:{getUser:function(t){return t.user},getSearch:function(t){return t.search},getTags:function(t){return t.tags},getMinimumRating:function(t){return t.minimumRating}},mutations:{setUser:function(t,e){t.user=e},setSearch:function(t,e){t.search=e},setTags:function(t,e){t.tags=e},setMinimumRating:function(t,e){t.minimumRating=e}},actions:{}});r["default"].config.productionTip=!1,new r["default"]({router:qt,store:ue,render:function(t){return t(ce)}}).$mount("#app")},d02a:function(t,e,a){"use strict";var r=a("f254"),n=a.n(r);n.a},f254:function(t,e,a){}});
//# sourceMappingURL=app.f79c8cbe.js.map