(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0iUn":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},"7bm4":function(t,n,e){"use strict";var r=e("B4CS"),o=e("H8ru");t.exports=e("8vat")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},A0wl:function(t,n,e){var r=e("fYqa"),o=e("rfP5");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},"AT/M":function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return r}))},B4CS:function(t,n,e){"use strict";var r=e("OtwA").f,o=e("cQhG"),i=e("OQSD"),u=e("vCXk"),s=e("sLxe"),a=e("VgtN"),f=e("5Kld"),c=e("JFuE"),p=e("G+Sp"),l=e("fZVS"),h=e("YndH").fastKey,v=e("H8ru"),d=l?"_s":"size",y=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,f){var c=t((function(t,r){s(t,c,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&a(r,e,t[f],t)}));return i(c.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=v(this,n),r=y(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[d]--}return!!r},forEach:function(t){v(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(v(this,n),t)}}),l&&r(c.prototype,"size",{get:function(){return v(this,n)[d]}}),c},def:function(t,n,e){var r,o,i=y(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,e){f(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?c(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,c(1))}),e?"entries":"values",!e,!0),p(n)}}},Jh6M:function(t,n,e){e("AS96")("Map")},LX0d:function(t,n,e){t.exports=e("s0dr")},MI3g:function(t,n,e){"use strict";var r=e("XVgq"),o=e.n(r),i=e("Z7t5"),u=e.n(i);function s(t){return(s="function"===typeof u.a&&"symbol"===typeof o.a?function(t){return typeof t}:function(t){return t&&"function"===typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"===typeof u.a&&"symbol"===s(o.a)?function(t){return s(t)}:function(t){return t&&"function"===typeof u.a&&t.constructor===u.a&&t!==u.a.prototype?"symbol":s(t)})(t)}var f=e("AT/M");function c(t,n){return!n||"object"!==a(n)&&"function"!==typeof n?Object(f.a)(t):n}e.d(n,"a",(function(){return c}))},RNiq:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return v}));var r=e("0iUn"),o=e("sLSF"),i=e("MI3g"),u=e("a7VT"),s=e("Tit0"),a=e("q1tI"),f=e.n(a),c=e("VdAu"),p=e("YFqc"),l=e.n(p),h=f.a.createElement,v=function(t){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(s.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){return h(c.c,{flexDirection:"column"},h(c.c,{flexDirection:"column",height:"50vh"},h(c.d,{sx:{textDecoration:"underline",textDecorationStyle:"wavy"},fontSize:[6,7],m:"auto"},"Ghym"),h(c.f,{m:"auto",p:"10px",fontWeight:"700"},"Simple, Modern, Distributed Cloud Computing"),h(c.f,{width:"75vw",m:"auto",sx:{textIndent:"5vw"}},"Ghym is a distributed cloud computing platform that allows users to host jobs on their computers or assign jobs to others computers.  When a job is assigned, a small fee is charged based on how much RAM is requested and how long the job takes.  The host gets most of the fee and the rest goes to the Ghym project. Currently our service only supports python due to python being the most common language for computationally expensive tasks.")),h(c.c,{height:"50vh"},h(l.a,{href:"/host"},h(c.b,{p:"20px",px:"40px",m:"auto",sx:{fontSize:3,bg:"secondary",":hover":{cursor:"pointer"}}},"Host")),h(l.a,{href:"/stats"},h(c.b,{p:"20px",px:"40px",m:"auto",sx:{fontSize:3,bg:"green",":hover":{cursor:"pointer"}}},"Statistics")),h(l.a,{href:"/run"},h(c.b,{p:"20px",px:"40px",m:"auto",sx:{fontSize:3,":hover":{cursor:"pointer"}}},"Run"))))}}]),n}(f.a.Component)},Tit0:function(t,n,e){"use strict";var r=e("SqZg"),o=e.n(r),i=e("TRZx"),u=e.n(i);function s(t,n){return(s=u.a||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}e.d(n,"a",(function(){return a}))},YFqc:function(t,n,e){t.exports=e("cTJO")},a7VT:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("Bhuq"),o=e.n(r),i=e("TRZx"),u=e.n(i);function s(t){return(s=u.a?o.a:function(t){return t.__proto__||o()(t)})(t)}},cTJO:function(t,n,e){"use strict";var r=e("8+Nu"),o=e("/HRN"),i=e("WaGi"),u=e("ZDA2"),s=e("/+P4"),a=e("N9n2"),f=e("LX0d"),c=e("KI45"),p=e("5Uuq");n.__esModule=!0,n.default=void 0;var l,h=p(e("q1tI")),v=e("CxY0"),d=e("g/15"),y=c(e("nOHt"));function g(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var m=new f,_=window.IntersectionObserver,b={};function w(){return l||(_?l=new _((function(t){t.forEach((function(t){if(m.has(t.target)){var n=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),m.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var x=function(t){function n(t){var e;return o(this,n),(e=u(this,s(n).call(this,t))).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var n=null,e=null,r=null;return function(o,i){if(r&&o===n&&i===e)return r;var u=t(o,i);return n=o,e=i,r=u,u}}((function(t,n){return{href:g(t),as:n?g(n):n}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),u=i.href,s=i.as;if(function(t){var n=(0,v.parse)(t,!1,!0),e=(0,v.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(u)){var a=window.location.pathname;u=(0,v.resolve)(a,u),s=s?(0,v.resolve)(a,s):u,t.preventDefault();var f=e.props.scroll;null==f&&(f=s.indexOf("#")<0),y.default[e.props.replace?"replace":"push"](u,s,{shallow:e.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return a(n,t),i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),e=n.href,r=n.as,o=(0,v.resolve)(t,e);return[o,r?(0,v.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var n=this,e=b[this.getPaths()[0]];this.p&&_&&t&&t.tagName&&(this.cleanUpListeners(),e||(this.cleanUpListeners=function(t,n){var e=w();return e?(e.observe(t),m.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}m.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var n=this.getPaths(),e=r(n,2),o=e[0],i=e[1];y.default.prefetch(o,i,t),b[o]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),u={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),h.default.cloneElement(i,u)}}]),n}(h.Component);n.default=x},h0es:function(t,n,e){var r=e("0T/a");r(r.P+r.R,"Map",{toJSON:e("A0wl")("Map")})},ineT:function(t,n,e){e("ER9p")("Map")},rfP5:function(t,n,e){var r=e("VgtN");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},s0dr:function(t,n,e){e("Ev2V"),e("k8Q4"),e("tCzM"),e("7bm4"),e("h0es"),e("ineT"),e("Jh6M"),t.exports=e("p9MR").Map},sLSF:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e("hfKm"),o=e.n(r);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function u(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}},vlRD:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("RNiq")}])}},[["vlRD",1,2,0,3,4]]]);