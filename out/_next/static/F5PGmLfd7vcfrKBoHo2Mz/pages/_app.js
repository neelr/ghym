(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";r.r(t);var o=r("q1tI"),n=r.n(o),i=r("qKvR"),a=function(e,t,r,o,n){for(t=t&&t.split?t.split("."):[t],o=0;o<t.length;o++)e=e?e[t[o]]:n;return e===n?r:e},c=[40,52,64].map((function(e){return e+"em"})),s={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},l={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},f={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},u={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},d=function(e,t){if("number"!==typeof t||t>=0)return a(e,t,t);var r=Math.abs(t),o=a(e,r,r);return"string"===typeof o?"-"+o:-1*o},p=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,t){var r;return Object.assign({},e,((r={})[t]=d,r))}),{}),h=function(e){return function(t){void 0===t&&(t={});var r=Object.assign({},s,t.theme||t),o={},n=function(e){return function(t){var r={},o=a(t,"breakpoints",c),n=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var s="function"===typeof e[i]?e[i](t):e[i];if(null!=s)if(Array.isArray(s))for(var l=0;l<s.slice(0,n.length).length;l++){var f=n[l];f?(r[f]=r[f]||{},null!=s[l]&&(r[f][i]=s[l])):r[i]=s[l]}else r[i]=s}return r}}("function"===typeof e?e(r):e)(r);for(var i in n){var d=n[i],g="function"===typeof d?d(r):d;if("variant"!==i)if(g&&"object"===typeof g)o[i]=h(g)(r);else{var m=a(l,i,i),b=a(u,m),y=a(r,b,a(r,m,{})),v=a(p,m,a)(y,g,g);if(f[m])for(var w=f[m],O=0;O<w.length;O++)o[w[O]]=v;else o[m]=v}else{var S=h(a(r,g))(r);o=Object.assign({},o,S)}}return o}},g=r("PE4B"),m=r.n(g),b=r("ITVs"),y=function(e){if(!e)return null;var t={};for(var r in e)"sx"!==r&&(t[r]=e[r]);var o=function(e){if(e.sx||e.css)return function(t){return[h(e.sx)(t),"function"===typeof e.css?e.css(t):e.css]}}(e);return o&&(t.css=o),t},v=function(e,t){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];return i.c.apply(void 0,[e,y(t)].concat(r))},w=n.a.createContext({__EMOTION_VERSION__:b.a,theme:null}),O=function(){return n.a.useContext(w)},S="function"===typeof Symbol&&Symbol.for,x=S?Symbol.for("react.element"):60103,j=S?Symbol.for("react.forward_ref"):60103,k=function(e){return!!e&&"object"===typeof e&&e.$$typeof!==x&&e.$$typeof!==j},C=function(e,t,r){return t},M=function(e,t){return m()(e,t,{isMergeableObject:k,arrayMerge:C})};M.all=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return m.a.all(e,{isMergeableObject:k,arrayMerge:C})};var R=function(e){var t=e.context,r=e.children;return v(i.b.Provider,{value:t.theme},v(w.Provider,{value:t,children:r}))},T=function(e){var t=e.theme,r=e.children,o=O();var n="function"===typeof t?Object.assign({},o,{theme:t(o.theme)}):M.all({},o,{theme:t});return v(R,{context:n,children:r})},_=function(e){return"--theme-ui-"+e},W=function(e,t){return"var("+_(e)+", "+t+")"},z=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return e.filter(Boolean).join("-")},B={fontWeights:!0,lineHeights:!0},E={useCustomProperties:!0,initialColorModeName:!0,initialColorMode:!0},P=function(e,t){return"number"!==typeof t?t:B[e]?t:t+"px"},L=function(e,t,r){var o=Array.isArray(e)?[]:{};for(var n in e){var i=e[n],a=z(t,n);if(i&&"object"===typeof i)o[n]=L(i,a,n);else if(E[n])o[n]=i;else{var c=P(r||n,i);o[n]=W(a,c)}}return o},H=function(e,t){var r={};for(var o in t)if("modes"!==o){var n=z(e,o),i=t[o];i&&"object"===typeof i?r=Object.assign({},r,H(n,i)):r[_(n)]=i}return r},X=function(e){try{return window.localStorage.getItem("theme-ui-color-mode")||e}catch(t){console.warn("localStorage is disabled and color mode might not work as expected.","Please check your Site Settings.",t)}},A=function(e){try{window.localStorage.setItem("theme-ui-color-mode",e)}catch(t){console.warn("localStorage is disabled and color mode might not work as expected.","Please check your Site Settings.",t)}},I=function(e){void 0===e&&(e={});var t=n.a.useState(e.initialColorModeName||"default"),r=t[0],o=t[1];return n.a.useEffect((function(){var t=X();if(document.body.classList.remove("theme-ui-"+t),t||!e.useColorSchemeMediaQuery)t&&t!==r&&o(t);else{var n=function(){var e="(prefers-color-scheme: dark)",t=window.matchMedia?window.matchMedia(e):{},r=window.matchMedia?window.matchMedia("(prefers-color-scheme: light)"):{};return t.media===e&&t.matches?"dark":"(prefers-color-scheme: light)"===r.media&&r.matches?"light":"default"}();o(n)}}),[]),n.a.useEffect((function(){r&&A(r)}),[r]),[r,o]},F=function(){return v(i.a,{styles:function(e){return function(e){if(void 0===e&&(e={}),!e.colors||!1===e.useBodyStyles)return{};if(!1===e.useCustomProperties||!e.colors.modes)return h({body:{color:"text",bg:"background"}})(e);var t=e.rawColors||e.colors,r=t.modes,o=H("colors",t);return Object.keys(r).forEach((function(e){o["&.theme-ui-"+e]=H("colors",r[e])})),h({body:Object.assign({},o,{color:"text",bg:"background"})})(e)}(e)}})},N=function(e){var t=e.children,r=O(),o=I(r.theme),n=o[0],c=o[1],s=function(e,t){if(!t)return e;var r=a(e,"colors.modes",{});return M.all({},e,{colors:a(r,t,{})})}(r.theme||{},n),l=Object.assign({},s);!1!==s.useCustomProperties&&(l.colors=L(l.colors,"colors"));var f=Object.assign({},r,{theme:s,colorMode:n,setColorMode:c});return v(i.b.Provider,{value:l},v(w.Provider,{value:f},v(F,{key:"color-mode"}),t))},Y=r("5D9J");function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var J=n.a.createContext({}),q=function(e){var t=n.a.useContext(J),r=t;return e&&(r="function"===typeof e?e(t):V({},t,{},e)),r},K=function(e){var t=q(e.components);return n.a.createElement(J.Provider,{value:t},e.children)},$={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},Q=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=D(e,["components","mdxType","originalType","parentName"]),s=q(r),l=o,f=s["".concat(a,".").concat(l)]||s[l]||$[l]||i;return r?n.a.createElement(f,V({ref:t},c,{components:r})):n.a.createElement(f,V({ref:t},c))}));Q.displayName="MDXCreateElement";var Z={inlineCode:"code",thematicBreak:"hr",root:"div"},ee=function(e){return function(t){return h(a(t.theme,"styles."+e))(t.theme)}},te=Object(Y.default)("div")(ee("div")),re={};["p","b","i","a","h1","h2","h3","h4","h5","h6","img","pre","code","ol","ul","li","blockquote","hr","em","table","tr","th","td","em","strong","del","inlineCode","thematicBreak","div","root"].forEach((function(e){var t;re[e]=Object(Y.default)(Z[t=e]||t)(ee(e)),te[e]=re[e]}));var oe=function(e){var t=Object.assign({},re);return Object.keys(e).forEach((function(r){t[r]=Object(Y.default)(e[r])(ee(r))})),t},ne=function(e){var t=e.components,r=e.children,o=q();return v(K,{components:oe(Object.assign({},o,t)),children:r})},ie=function(e,t,r,o,n){for(t=t&&t.split?t.split("."):[t],o=0;o<t.length;o++)e=e?e[t[o]]:n;return e===n?r:e},ae=[40,52,64].map((function(e){return e+"em"})),ce={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},se={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},le={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},fe={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},ue=function(e,t){if("number"!==typeof t||t>=0)return ie(e,t,t);var r=Math.abs(t),o=ie(e,r,r);return"string"===typeof o?"-"+o:-1*o},de=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,t){var r;return Object.assign({},e,((r={})[t]=ue,r))}),{}),pe=function(e){return function(t){void 0===t&&(t={});var r=Object.assign({},ce,t.theme||t),o={},n=function(e){return function(t){var r={},o=ie(t,"breakpoints",ae),n=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var a="function"===typeof e[i]?e[i](t):e[i];if(null!=a)if(Array.isArray(a))for(var c=0;c<a.slice(0,n.length).length;c++){var s=n[c];s?(r[s]=r[s]||{},null!=a[c]&&(r[s][i]=a[c])):r[i]=a[c]}else r[i]=a}return r}}("function"===typeof e?e(r):e)(r);for(var i in n){var a=n[i],c="function"===typeof a?a(r):a;if("variant"!==i)if(c&&"object"===typeof c)o[i]=pe(c)(r);else{var s=ie(se,i,i),l=ie(fe,s),f=ie(r,l,ie(r,s,{})),u=ie(de,s,ie)(f,c,c);if(le[s])for(var d=le[s],p=0;p<d.length;p++)o[d[p]]=u;else o[s]=u}else{var h=pe(ie(r,c))(r);o=Object.assign({},o,h)}}return o}},he=function(){return v(i.a,{styles:function(e){if(!1===e.useBodyStyles||e.styles&&!e.styles.root)return!1;var t=!1===e.useBorderBox?null:"border-box";return pe({"*":{boxSizing:t},body:{margin:0,variant:"styles.root"}})(e)}})},ge=function(e){var t=e.theme,r=e.components,o=e.children;return"function"===typeof O().setColorMode?v(T,{theme:t},v(ne,{components:r,children:o})):v(T,{theme:t},v(N,null,v(he),v(ne,{components:r,children:o})))},me={space:[0,4,8,16,32,64,128,256,512],fonts:{body:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',heading:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',monospace:"Menlo, monospace"},fontSizes:[12,14,16,20,24,32,48,64,96],fontWeights:{body:400,heading:600,bold:700},lineHeights:{body:1.75,heading:1.25},colors:{text:"#454f5b",background:"#fff",primary:"#5c6ac4",secondary:"#006fbb",highlight:"#47c1bf",muted:"#e6e6e6",gray:"#dfe3e8",accent:"#f49342",darken:"#00044c",modes:{dark:{text:"#fff",background:"#1d1f2f",primary:"#9c6ade",secondary:"#b4e1fa",highlight:"#b7ecec",muted:"#e6e6e6"}}},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body"},h1:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:5},h2:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:4},h3:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:3},h4:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:2},h5:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:1},h6:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:0},p:{color:"text",fontFamily:"body",fontWeight:"body",lineHeight:"body"},a:{color:"primary"},pre:{fontFamily:"monospace",overflowX:"auto",code:{color:"inherit"}},code:{fontFamily:"monospace",fontSize:"inherit"},table:{width:"100%",borderCollapse:"separate",borderSpacing:0},th:{textAlign:"left",borderBottomStyle:"solid"},td:{textAlign:"left",borderBottomStyle:"solid"},img:{maxWidth:"100%"}},variants:{nav:{color:"white",":hover":{color:"secondary"},fontWeight:"700",textDecoration:"none"},outline:{border:"secondary",bg:"background"}}},be=r("VdAu"),ye=r("p0XB"),ve=r.n(ye);var we=r("XXOK"),Oe=r.n(we),Se=r("yLu3"),xe=r.n(Se);function je(e,t){return function(e){if(ve()(e))return e}(e)||function(e,t){if(xe()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],o=!0,n=!1,i=void 0;try{for(var a,c=Oe()(e);!(o=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(s){n=!0,i=s}finally{try{o||null==c.return||c.return()}finally{if(n)throw i}}return r}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ke=r("kOwS"),Ce=r("4mXO"),Me=r.n(Ce),Re=r("pLtp"),Te=r.n(Re);function _e(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Te()(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Me.a){var i=Me()(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var We=r("YFqc"),ze=r.n(We),Be=n.a.createElement,Ee=function(e){e.mode;var t=_e(e,["mode"]);return Be(be.a,Object(ke.a)({as:"button"},t,{title:"Cycle Color Mode",sx:{display:"inline-block",appearance:"none",bg:"transparent",color:"inherit",p:1,m:2,border:0,borderRadius:9999,lineHeight:0,":hover, :focus":{color:"primary",boxShadow:"0 0 0 3px",outline:"none"}}}),Be("svg",{viewBox:"0 0 32 32",width:"24",height:"24",fill:"currentcolor"},Be("circle",{cx:"16",cy:"16",r:"14",fill:"none",stroke:"currentcolor",strokeWidth:"4"}),Be("path",{d:"M 16 0 A 16 16 0 0 0 16 32 z"})))},Pe=function(e){var t=je(function(){var e=O(),t=e.colorMode,r=e.setColorMode;if("function"!==typeof r)throw new Error("[useColorMode] requires the ColorModeProvider component");return[t,r]}(),2),r=t[0],o=t[1];return Be(be.c,{px:2,color:"white",bg:"black",alignItems:"center"},Be(ze.a,{href:"/"},Be(be.e,{p:2,variant:"nav"},"Home")),Be(be.a,{mx:"auto"}),Be(ze.a,{href:"/help"},Be(be.e,{mx:"10px",variant:"nav"},"Help!")),Be(Ee,{onClick:function(e){o("default"===r?"dark":"default")}},"default"===r?"Dark":"Light"))},Le=n.a.createElement;t.default=function(e){var t=e.Component,r=e.pageProps;return Le(ge,{theme:me},Le(Pe,null),Le(t,r))}},"4mXO":function(e,t,r){e.exports=r("Vphk")},"7bm4":function(e,t,r){"use strict";var o=r("B4CS"),n=r("H8ru");e.exports=r("8vat")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=o.getEntry(n(this,"Map"),e);return t&&t.v},set:function(e,t){return o.def(n(this,"Map"),0===e?0:e,t)}},o,!0)},A0wl:function(e,t,r){var o=r("fYqa"),n=r("rfP5");e.exports=function(e){return function(){if(o(this)!=e)throw TypeError(e+"#toJSON isn't generic");return n(this)}}},B4CS:function(e,t,r){"use strict";var o=r("OtwA").f,n=r("cQhG"),i=r("OQSD"),a=r("vCXk"),c=r("sLxe"),s=r("VgtN"),l=r("5Kld"),f=r("JFuE"),u=r("G+Sp"),d=r("fZVS"),p=r("YndH").fastKey,h=r("H8ru"),g=d?"_s":"size",m=function(e,t){var r,o=p(t);if("F"!==o)return e._i[o];for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,l){var f=e((function(e,o){c(e,f,t,"_i"),e._t=t,e._i=n(null),e._f=void 0,e._l=void 0,e[g]=0,void 0!=o&&s(o,r,e[l],e)}));return i(f.prototype,{clear:function(){for(var e=h(this,t),r=e._i,o=e._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete r[o.i];e._f=e._l=void 0,e[g]=0},delete:function(e){var r=h(this,t),o=m(r,e);if(o){var n=o.n,i=o.p;delete r._i[o.i],o.r=!0,i&&(i.n=n),n&&(n.p=i),r._f==o&&(r._f=n),r._l==o&&(r._l=i),r[g]--}return!!o},forEach:function(e){h(this,t);for(var r,o=a(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(o(r.v,r.k,this);r&&r.r;)r=r.p},has:function(e){return!!m(h(this,t),e)}}),d&&o(f.prototype,"size",{get:function(){return h(this,t)[g]}}),f},def:function(e,t,r){var o,n,i=m(e,t);return i?i.v=r:(e._l=i={i:n=p(t,!0),k:t,v:r,p:o=e._l,n:void 0,r:!1},e._f||(e._f=i),o&&(o.n=i),e[g]++,"F"!==n&&(e._i[n]=i)),e},getEntry:m,setStrong:function(e,t,r){l(e,t,(function(e,r){this._t=h(e,t),this._k=r,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?f(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,f(1))}),r?"entries":"values",!r,!0),u(t)}}},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},ITVs:function(e){e.exports=JSON.parse('{"a":"10.0.28"}')},Jh6M:function(e,t,r){r("AS96")("Map")},LX0d:function(e,t,r){e.exports=r("s0dr")},PE4B:function(e,t,r){"use strict";var o=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)};var n="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?f((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function a(e,t,r){return e.concat(t).map((function(e){return i(e,r)}))}function c(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function s(e,t){try{return t in e}catch(r){return!1}}function l(e,t,r){var o={};return r.isMergeableObject(e)&&c(e).forEach((function(t){o[t]=i(e[t],r)})),c(t).forEach((function(n){(function(e,t){return s(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,n)||(s(e,n)&&r.isMergeableObject(t[n])?o[n]=function(e,t){if(!t.customMerge)return f;var r=t.customMerge(e);return"function"===typeof r?r:f}(n,r)(e[n],t[n],r):o[n]=i(t[n],r))})),o}function f(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||a,r.isMergeableObject=r.isMergeableObject||o,r.cloneUnlessOtherwiseSpecified=i;var n=Array.isArray(t);return n===Array.isArray(e)?n?r.arrayMerge(e,t,r):l(e,t,r):i(t,r)}f.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return f(e,r,t)}),{})};var u=f;e.exports=u},UXZV:function(e,t,r){e.exports=r("ge64")},Vphk:function(e,t,r){r("0lY0"),e.exports=r("p9MR").Object.getOwnPropertySymbols},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var o=r("8+Nu"),n=r("/HRN"),i=r("WaGi"),a=r("ZDA2"),c=r("/+P4"),s=r("N9n2"),l=r("LX0d"),f=r("KI45"),u=r("5Uuq");t.__esModule=!0,t.default=void 0;var d,p=u(r("q1tI")),h=r("CxY0"),g=r("g/15"),m=f(r("nOHt"));function b(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var y=new l,v=window.IntersectionObserver,w={};function O(){return d||(v?d=new v((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var S=function(e){function t(e){var r;return n(this,t),(r=a(this,c(t).call(this,e))).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,r=null,o=null;return function(n,i){if(o&&n===t&&i===r)return o;var a=e(n,i);return t=n,r=i,o=a,a}}((function(e,t){return{href:b(e),as:t?b(t):t}})),r.linkClicked=function(e){var t=e.currentTarget,o=t.nodeName,n=t.target;if("A"!==o||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),a=i.href,c=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(a)){var s=window.location.pathname;a=(0,h.resolve)(s,a),c=c?(0,h.resolve)(s,c):a,e.preventDefault();var l=r.props.scroll;null==l&&(l=c.indexOf("#")<0),m.default[r.props.replace?"replace":"push"](a,c,{shallow:r.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return s(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as,n=(0,h.resolve)(e,r);return[n,o?(0,h.resolve)(e,o):n]}},{key:"handleRef",value:function(e){var t=this,r=w[this.getPaths()[0]];this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),r||(this.cleanUpListeners=function(e,t){var r=O();return r?(r.observe(e),y.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths(),r=o(t,2),n=r[0],i=r[1];m.default.prefetch(n,i,e),w[n]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,n=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=n||o),p.default.cloneElement(i,a)}}]),t}(p.Component);t.default=S},ge64:function(e,t,r){r("mlGW"),e.exports=r("p9MR").Object.assign},h0es:function(e,t,r){var o=r("0T/a");o(o.P+o.R,"Map",{toJSON:r("A0wl")("Map")})},ineT:function(e,t,r){r("ER9p")("Map")},kOwS:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("UXZV"),n=r.n(o);function i(){return(i=n.a||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}},mlGW:function(e,t,r){var o=r("0T/a");o(o.S+o.F,"Object",{assign:r("nkTw")})},rfP5:function(e,t,r){var o=r("VgtN");e.exports=function(e,t){var r=[];return o(e,!1,r.push,r,t),r}},s0dr:function(e,t,r){r("Ev2V"),r("k8Q4"),r("tCzM"),r("7bm4"),r("h0es"),r("ineT"),r("Jh6M"),e.exports=r("p9MR").Map}},[[0,1,2,0,4,3]]]);