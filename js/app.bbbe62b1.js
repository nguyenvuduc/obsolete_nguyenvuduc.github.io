(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"904a7cf0"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"5d28e33d"}[e]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1375:function(e,t,n){},"14e2":function(e,t,n){},1885:function(e,t,n){},"36ad":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header"},[n("div",{staticClass:"page-header__banner"},[e._m(0),n("div",{staticClass:"page-header__banner__menu-wrapper"},[n("Menu",[n("MenuItem",{attrs:{routePath:"/"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Home")]},proxy:!0}])}),n("MenuItem",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("About")]},proxy:!0}])},[n("MenuItem",{attrs:{routePath:"/den-sonics"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("DenSonics")]},proxy:!0}])}),n("MenuItem",{attrs:{routePath:"/leadership"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Leadership")]},proxy:!0}])}),n("MenuItem",{attrs:{routePath:"/staff"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Staff")]},proxy:!0}])})],1),n("MenuItem",{attrs:{routePath:"/products"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Products")]},proxy:!0}])}),n("MenuItem",{attrs:{routePath:"/funding-support"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Funding Support")]},proxy:!0}])}),n("MenuItem",{attrs:{routePath:"/contact-us"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Contact")]},proxy:!0}])})],1)],1)])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-header__banner__logo-image-wrapper"},[r("img",{staticClass:"page-header__banner__logo-image",attrs:{src:n("d3cd")}})])}],i=n("d4ec"),o=n("2caf"),c=n("262e"),s=n("9ab4"),u=n("60a3"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"animenu",attrs:{role:"navigation","aria-label":"Menu"}},[e._m(0),n("ul",{staticClass:"animenu__nav",attrs:{role:"navigation"}},[e._t("default")],2)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"animenu__btn"},[n("span",{staticClass:"animenu__btn__bar"}),n("span",{staticClass:"animenu__btn__bar"}),n("span",{staticClass:"animenu__btn__bar"})])}],p=(n("1375"),function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]));p=Object(s["a"])([u["a"]],p);var d=p,m=d,h=(n("b531"),n("2877")),A=Object(h["a"])(m,l,f,!1,null,null,null),b=A.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e.hasChildMenus?e._e():n("a",{attrs:{href:"#"},on:{click:e.menuItemClicked}},[e._t("title")],2),e.hasChildMenus?n("a",{staticClass:"animenu__nav__hasDropdown",attrs:{href:"#","aria-haspopup":"true"},on:{click:e.menuItemClicked}},[e._t("title")],2):e._e(),e.hasChildMenus?n("ul",{staticClass:"animenu__nav__dropdown",attrs:{"aria-label":"submenu",role:"menu"}},[n("ul",{staticClass:"animenu__nav__dropdown-pane"},[e._t("default")],2)]):e._e()])},g=[],y=n("bee2"),j=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.hasChildMenus=!1,e}return Object(y["a"])(n,[{key:"mounted",value:function(){this.hasChildMenus=!!this.$slots.default}},{key:"menuItemClicked",value:function(){var e=this.routePath;e&&this.$router.push(e)}}]),n}(u["c"]);Object(s["a"])([Object(u["b"])()],j.prototype,"routePath",void 0),j=Object(s["a"])([u["a"]],j);var k=j,O=k,_=Object(h["a"])(O,v,g,!1,null,null,null),x=_.exports,w=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);Object(s["a"])([Object(u["b"])()],w.prototype,"msg",void 0),w=Object(s["a"])([Object(u["a"])({components:{Menu:b,MenuItem:x}})],w);var C=w,D=C,S=(n("4344"),Object(h["a"])(D,r,a,!1,null,"79462fc4",null));t["a"]=S.exports},"3a03":function(e,t,n){},"3f1e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",[n("PageHeader"),n("PageBody",[n("TeamMember",{scopedSlots:e._u([{key:"image",fn:function(){return[n("TeamMemberAvatar",{attrs:{src:e.images.major}})]},proxy:!0},{key:"title",fn:function(){return[e._v(" Paul Major, DDS, MSc, FRCD(C) ")]},proxy:!0},{key:"role",fn:function(){return[e._v(" President ")]},proxy:!0},{key:"description",fn:function(){return[e._v(" Dr. Major completed his general Dentistry (1980) and Orthodontic specialty (1986) training at the University of Alberta. He is currently the Department Chair of the School of Dentistry at the University of Alberta. He has significant business experience and is the founder of Align Orthodontics Inc and Edmonton Diagnostic Imaging Inc. Dr. Major will serve as the President of the Company and will be responsible for operational management. He will also serve as a clinical expert in the development of imaging technology. ")]},proxy:!0}])}),n("TeamMember",{scopedSlots:e._u([{key:"image",fn:function(){return[n("TeamMemberAvatar",{attrs:{src:e.images.kapatuir}})]},proxy:!0},{key:"title",fn:function(){return[e._v(" Neel Kaipatur, DDS, PhD, FRCD(C) ")]},proxy:!0},{key:"role",fn:function(){return[e._v(" Vice-President (Clinical Research and Development) ")]},proxy:!0},{key:"description",fn:function(){return[e._v(" Dr. Kaipatur completed his Dental degree (2006) from McGill University and a PhD in Orthodontics (2015) from University of Alberta. He has extensive experience in bench side and translational research and is an assistant clinical professor at the University of Alberta since 2015. He will serve as the Vice- President of the Company and with his research knowledge and business experience, will guide the research and development wing of DenSonics. ")]},proxy:!0}])}),n("TeamMember",{scopedSlots:e._u([{key:"image",fn:function(){return[n("TeamMemberAvatar",{attrs:{src:e.images.le}})]},proxy:!0},{key:"title",fn:function(){return[e._v(" Lawrence H Le, PhD, MBA ")]},proxy:!0},{key:"role",fn:function(){return[e._v(" Chief Technology Officer (Imaging Research & Development) ")]},proxy:!0},{key:"description",fn:function(){return[e._v(" Dr. Le completed his PhD in Physics (1991) and MBA specializing in Finance and Technology Commercialization (1999) at the University of Alberta. He is currently a clinical professor at the Department of Diagnostic Radiology, University of Alberta and a senior medical physicist for Alberta Health Services. Dr. Le has more than 30 years’ working and research experience in mechanical wave propagation. He will be responsible for research and technology development relevant to oral imaging. ")]},proxy:!0}])}),n("TeamMember",{scopedSlots:e._u([{key:"image",fn:function(){return[n("TeamMemberAvatar",{attrs:{src:e.images.lou}})]},proxy:!0},{key:"title",fn:function(){return[e._v(" Edmond Lou, PhD, P.Eng ")]},proxy:!0},{key:"role",fn:function(){return[e._v(" Chief Engineer (Product Development) ")]},proxy:!0},{key:"description",fn:function(){return[e._v(" Dr. Lou received his PhD in Electrical and Computer Engineering (1998) and specializing in Low Power Wireless Medical Devices at the University of Alberta. He was co-founder of two startups (Xanantec Technologies Inc. and Orthopedic Innovations) in Edmonton. He has extensive experience in commercialization of medical devices and holds 5 US patents and 1 international patent. Currently, he is an Associate Professor in the Department of Electrical & Computer Engineering, the Director of the AI-Supercomputing Hub at the University of Alberta, and a Research Scientist at the Glenrose Rehabilitation Hospital. He will look after the product development. ")]},proxy:!0}])}),n("TeamMember",{scopedSlots:e._u([{key:"image",fn:function(){return[n("TeamMemberAvatar",{attrs:{src:e.images.jaremko}})]},proxy:!0},{key:"title",fn:function(){return[e._v(" Jacob Jaremko, MD, PhD, FRCP(C) ")]},proxy:!0},{key:"role",fn:function(){return[e._v(" Radiologist (Imaging) ")]},proxy:!0},{key:"description",fn:function(){return[e._v(" Dr. Jaremko is a pediatric musculoskeletal radiologist, Associate Professor and AHS Endowed Chair at the University of Alberta in Edmonton. He obtained a combined MD-PhD at the University of Calgary. His main research interests are in pediatric musculoskeletal development, adult arthritis, and use of artificial intelligence to automate image analysis, particularly of ultrasound. Dr. Jacob will advise on the user interface and image quality of the technology ")]},proxy:!0}])}),n("TeamMember",{scopedSlots:e._u([{key:"image",fn:function(){return[n("TeamMemberAvatar",{attrs:{src:e.images.thomas}})]},proxy:!0},{key:"title",fn:function(){return[e._v(" Thomas Major, BSc, MBA ")]},proxy:!0},{key:"role",fn:function(){return[e._v(" Business and IP Advisor ")]},proxy:!0},{key:"description",fn:function(){return[e._v(" Thomas completed his Mechanical Engineering degree at the University of Alberta in 2010 and MBA at Harvard School of Business in 2015. He has experience in intellectual property protection as well as senior business management. He will be responsible for directing intellectual property protection as well as planning interaction with other companies. ")]},proxy:!0}])}),n("TeamMember",{scopedSlots:e._u([{key:"image",fn:function(){return[n("TeamMemberAvatar",{attrs:{src:e.images.nguyen}})]},proxy:!0},{key:"title",fn:function(){return[e._v(" Kim-Cuong T Nguyen, BEng, MSc ")]},proxy:!0},{key:"role",fn:function(){return[e._v(" Imaging Specialist ")]},proxy:!0},{key:"description",fn:function(){return[e._v(" Kim obtained a BEng in Biomedical Engineering/Engineering Physics (2010) at the University of Technology, Ho Chi Minh City, Vietnam and a MSc in ultrasound imaging (2013) at the University of Alberta. She has more than 9 years working experience with ultrasound imaging, CBCT, and µCT. She serves as the Company’s biomedical engineer/imaging specialist and works on technology development and validation. ")]},proxy:!0}])})],1),n("PageFooter")],1)},a=[],i=n("d4ec"),o=n("2caf"),c=n("262e"),s=n("9ab4"),u=n("60a3"),l=n("9973"),f=n("36ad"),p=n("e13b"),d=n("c8cc"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"team-member"},[n("div",{staticClass:"team-member__image"},[e._t("image")],2),n("div",{staticClass:"team-member__details"},[n("div",{staticClass:"team-member__title"},[e._t("title")],2),n("div",{staticClass:"team-member__role"},[e._t("role")],2),n("div",{staticClass:"team-member__description"},[e._t("description")],2)])])},h=[],A=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);A=Object(s["a"])([u["a"]],A);var b=A,v=b,g=(n("ff82"),n("2877")),y=Object(g["a"])(v,m,h,!1,null,"5468a8a8",null),j=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"avatar-image-container"},[n("img",{attrs:{src:e.srcUrl}})])},O=[],_=n("bee2"),x=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.srcUrl=null,e}return Object(_["a"])(n,[{key:"mounted",value:function(){this.srcUrl=this.$props.src}}]),n}(u["c"]);Object(s["a"])([Object(u["b"])()],x.prototype,"src",void 0),x=Object(s["a"])([u["a"]],x);var w=x,C=w,D=(n("c988"),Object(g["a"])(C,k,O,!1,null,"dc04879c",null)),S=D.exports,E=function(e){Object(c["a"])(r,e);var t=Object(o["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.images={jaremko:n("479a"),kapatuir:n("9a0b"),le:n("f58d"),lou:n("5c7f"),major:n("5266"),nguyen:n("8d39"),thomas:n("45db")},e}return r}(u["c"]);Object(s["a"])([Object(u["b"])()],E.prototype,"msg",void 0),E=Object(s["a"])([Object(u["a"])({components:{Page:l["a"],PageHeader:f["a"],PageBody:p["a"],PageFooter:d["a"],TeamMember:j,TeamMemberAvatar:S}})],E);var M=E,P=M,T=Object(g["a"])(P,r,a,!1,null,null,null);t["default"]=T.exports},4344:function(e,t,n){"use strict";var r=n("3a03"),a=n.n(r);a.a},"45db":function(e,t,n){e.exports=n.p+"img/Thomas.f6da7fde.webp"},"479a":function(e,t,n){e.exports=n.p+"img/Jaremko.9096fd07.webp"},5266:function(e,t){e.exports="data:image/webp;base64,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"},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5c7f":function(e,t,n){e.exports=n.p+"img/Lou.33e3c01c.webp"},"86fc":function(e,t,n){"use strict";var r=n("e0d4"),a=n.n(r);a.a},"8d39":function(e,t,n){e.exports=n.p+"img/Nguyen.6a622976.webp"},9973:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-html"},[e._t("default")],2)},a=[],i=n("d4ec"),o=n("2caf"),c=n("262e"),s=n("9ab4"),u=n("60a3"),l=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);l=Object(s["a"])([u["a"]],l);var f=l,p=f,d=(n("a0f2"),n("2877")),m=Object(d["a"])(p,r,a,!1,null,"38b9961d",null);t["a"]=m.exports},"9a0b":function(e,t,n){e.exports=n.p+"img/Kapatuir.b05bfb5d.webp"},"9c0c":function(e,t,n){},"9d06":function(e,t,n){"use strict";var r=n("f797"),a=n.n(r);a.a},a0f2:function(e,t,n){"use strict";var r=n("14e2"),a=n.n(r);a.a},a80f:function(e,t,n){},b531:function(e,t,n){"use strict";var r=n("f0a9"),a=n.n(r);a.a},c8cc:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page_footer"},[e._v(" ©2019 by DenSonics Imaging Inc ")])},a=[],i=n("d4ec"),o=n("2caf"),c=n("262e"),s=n("9ab4"),u=n("60a3"),l=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);l=Object(s["a"])([u["a"]],l);var f=l,p=f,d=(n("86fc"),n("2877")),m=Object(d["a"])(p,r,a,!1,null,"24ad7340",null);t["a"]=m.exports},c988:function(e,t,n){"use strict";var r=n("1885"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=(n("5c0b"),n("2877")),c={},s=Object(o["a"])(c,a,i,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Leadership")},p=[],d=n("3f1e"),m={name:"Home",components:{Leadership:d["default"]}},h=m,A=Object(o["a"])(h,f,p,!1,null,null,null),b=A.exports;r["a"].use(l["a"]);var v=[{path:"/",name:"Home",component:b},{path:"/contact-us",name:"Contact Us",component:function(){return n.e("about").then(n.bind(null,"e9bb"))}},{path:"/den-sonics",name:"DenSonics",component:function(){return n.e("about").then(n.bind(null,"f042"))}},{path:"/funding-support",name:"Funding Support",component:function(){return n.e("about").then(n.bind(null,"57a8"))}},{path:"/leadership",name:"Leadership",component:function(){return n.e("about").then(n.bind(null,"3f1e"))}},{path:"/products",name:"Products",component:function(){return n.e("about").then(n.bind(null,"e6dc"))}},{path:"/staff",name:"Staff",component:function(){return n.e("about").then(n.bind(null,"18d6"))}}],g=new l["a"]({mode:"history",base:"/",routes:v}),y=g;r["a"].config.productionTip=!1,new r["a"]({router:y,render:function(e){return e(u)}}).$mount("#app")},d3cd:function(e,t,n){e.exports=n.p+"img/logo_densonicsimaging.011c3096.png"},e0d4:function(e,t,n){},e13b:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page_body"},[e._t("default")],2)},a=[],i=n("d4ec"),o=n("2caf"),c=n("262e"),s=n("9ab4"),u=n("60a3"),l=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);l=Object(s["a"])([u["a"]],l);var f=l,p=f,d=(n("9d06"),n("2877")),m=Object(d["a"])(p,r,a,!1,null,"021feabf",null);t["a"]=m.exports},f0a9:function(e,t,n){},f58d:function(e,t,n){e.exports=n.p+"img/Le.8b992713.webp"},f797:function(e,t,n){},ff82:function(e,t,n){"use strict";var r=n("a80f"),a=n.n(r);a.a}});
//# sourceMappingURL=app.bbbe62b1.js.map