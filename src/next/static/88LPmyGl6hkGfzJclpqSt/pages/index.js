(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("23aj");return{page:e.default||e}}])},"/eQG":function(e,n,t){t("v5Dd");var a=t("WEpk").Object;e.exports=function(e,n){return a.getOwnPropertyDescriptor(e,n)}},"23aj":function(e,n,t){"use strict";t.r(n);var a=t("ln6h"),o=t.n(a),r=t("O40h"),i=t("q1tI"),l=t.n(i),s=(t("H/NH"),t("tjvq"),t("Jo+v")),c=t.n(s),u=t("4mXO"),d=t.n(u),p=t("pLtp"),f=t.n(p),v=t("hfKm"),h=t.n(v);function m(e,n,t){return n in e?h()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=f()(t);"function"==typeof d.a&&(a=a.concat(d()(t).filter(function(e){return c()(t,e).enumerable}))),a.forEach(function(n){m(e,n,t[n])})}return e}var x=t("UXZV"),g=t.n(x);function y(){return(y=g.a||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function w(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=f()(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(d.a){var r=d()(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var A=t("17x9"),P=t.n(A),O=t("TSYQ"),T=t.n(O),k={propTypes:{clearfix:P.a.bool,pull:P.a.oneOf([void 0,"right","left"]),marginless:P.a.bool,paddingless:P.a.bool,overlay:P.a.bool,clipped:P.a.bool,radiusless:P.a.bool,shadowless:P.a.bool,unselectable:P.a.bool,invisible:P.a.bool,hidden:P.a.bool},defaultProps:{clearfix:void 0,pull:void 0,marginless:void 0,paddingless:void 0,overlay:void 0,clipped:void 0,radiusless:void 0,shadowless:void 0,unselectable:void 0,invisible:void 0,hidden:void 0},classnames:function(e){var n;return T()((m(n={"is-clearfix":e.clearfix},"is-pulled-".concat(e.pull),e.pull),m(n,"is-marginless",e.marginless),m(n,"is-paddingless",e.paddingless),m(n,"is-overlay",e.overlay),m(n,"is-clipped",e.clipped),m(n,"is-radiusless",e.radiusless),m(n,"is-shadowless",e.shadowless),m(n,"is-unselectable",e.unselectable),m(n,"is-invisible",e.invisible),m(n,"is-hidden",e.hidden),n))},clean:function(e){e.hidden,e.clearfix,e.paddingless,e.pull,e.marginless,e.overlay,e.clipped,e.radiusless,e.shadowless,e.unselectable,e.invisible;return w(e,["hidden","clearfix","paddingless","pull","marginless","overlay","clipped","radiusless","shadowless","unselectable","invisible"])}},N=P.a.shape({display:P.a.shape({value:P.a.oneOf(["block","flex","inline","inline-block","inline-flex"]),only:P.a.bool}),hide:P.a.shape({value:P.a.bool,only:P.a.bool}),textSize:P.a.shape({value:P.a.oneOf([1,2,3,4,5,6])}),textAlignment:P.a.shape({value:P.a.oneOf(["centered","justified","left","right"]),only:P.a.bool})}),S={propTypes:{responsive:P.a.shape({mobile:N,tablet:N,desktop:N,widescreen:N,fullhd:N,touch:N})},defaultProps:{responsive:void 0},classnames:function(e){return T()(b({},(n=e.responsive||{},f()(n).reduce(function(e,t){var a,o=n[t].display||{},r=n[t].hide||{},i=n[t].textSize||{},l=n[t].textAlignment||{};return b({},e,(m(a={},"is-".concat(o.value,"-").concat(t).concat(o.only?"-only":""),o.value),m(a,"is-hidden-".concat(t).concat(r.only?"-only":""),r.value),m(a,"has-text-".concat(l.value,"-").concat(t).concat(l.only?"-only":""),l.value),m(a,"is-size-".concat(i.value,"-").concat(t),i.value>0),a))},{}))));var n},clean:function(e){e.responsive,e.hide;return w(e,["responsive","hide"])}},C={propTypes:{textColor:P.a.string,backgroundColor:P.a.string},defaultProps:{textColor:void 0,backgroundColor:void 0},classnames:function(e){var n;return T()((m(n={},"has-text-".concat(e.textColor),e.textColor),m(n,"has-background-".concat(e.backgroundColor),e.backgroundColor),n))},clean:function(e){e.textColor,e.backgroundColor;return w(e,["textColor","backgroundColor"])}},z={propTypes:{textSize:P.a.oneOf([1,2,3,4,5,6]),textAlignment:P.a.oneOf(["centered","justified","left","right"]),textTransform:P.a.oneOf(["capitalized","lowercase","uppercase"]),textWeight:P.a.oneOf(["light","normal","semibold","bold"]),italic:P.a.bool},defaultProps:{textSize:void 0,textAlignment:void 0,textTransform:void 0,italic:void 0,textWeight:void 0},classnames:function(e){var n;return T()((m(n={},"has-text-".concat(e.textAlignment),e.textAlignment),m(n,"has-text-weight-".concat(e.textWeight),e.textWeight),m(n,"is-size-".concat(e.textSize),e.textSize),m(n,"is-".concat(e.textTransform),e.textTransform),m(n,"is-italic",e.italic),n))},clean:function(e){e.textWeight,e.textTransform,e.italic,e.textSize,e.textAlignment;return w(e,["textWeight","textTransform","italic","textSize","textAlignment"])}},E={propTypes:b({},k.propTypes,S.propTypes,C.propTypes,z.propTypes),defaultProps:b({},k.defaultProps,S.defaultProps,C.defaultProps,z.defaultProps),classnames:function(e){return T()(k.classnames(e),S.classnames(e),C.classnames(e),z.classnames(e))},clean:function(e){return function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduce(function(e,n){return n(e)},e)}}(k.clean,S.clean,C.clean,z.clean)(e)}},j=function(e){var n=e.className,t=e.renderAs,a=w(e,["className","renderAs"]),o=t,r=E.clean(a);return l.a.createElement(o,y({className:T()(n,E.classnames(a))||void 0},r))};j.defaultProps=b({},E.defaultProps,{className:void 0,style:void 0,renderAs:"div"});var W=j,D=function(e){var n=e.children,t=e.className,a=e.hasAddons,o=e.position,r=e.renderAs,i=w(e,["children","className","hasAddons","position","renderAs"]);return l.a.createElement(W,y({},i,{renderAs:r,className:T()("buttons",t,m({"has-addons":a},"is-".concat([o]),o))}),n)};D.defaultProps=b({},E.defaultProps,{className:void 0,hasAddons:void 0,position:void 0,renderAs:"div"});var _=function(e){var n,t=e.children,a=e.className,o=e.renderAs,r=e.color,i=e.size,s=e.outlined,c=e.inverted,u=e.state,d=e.submit,p=e.reset,f=e.fullwidth,v=e.loading,h=e.disabled,b=e.remove,x=e.isSelected,g=e.isStatic,A=e.rounded,P=e.onClick,O=e.text,k=w(e,["children","className","renderAs","color","size","outlined","inverted","state","submit","reset","fullwidth","loading","disabled","remove","isSelected","isStatic","rounded","onClick","text"]),N=g?"span":o,S=E.clean(k),C={};return d&&(N="button",C.type="submit"),p&&(N="button",C.type="reset"),l.a.createElement(N,y({tabIndex:h?-1:0},S,C,{disabled:h,onClick:h?void 0:P,className:T()(a,E.classnames(k),(n={},m(n,"is-".concat(r),r),m(n,"is-".concat(i),i),m(n,"is-".concat(u),u),m(n,"is-selected",x),m(n,"is-static",g),m(n,"is-rounded",A),m(n,"is-outlined",s),m(n,"is-inverted",c),m(n,"is-fullwidth",f),m(n,"is-loading",v),m(n,"is-text",O),m(n,"delete",b),m(n,"button",!b),n))}),t)};_.Group=D,_.defaultProps=b({},E.defaultProps,{children:null,className:"",style:{},renderAs:"button",onClick:function(){return null},color:null,size:null,state:null,outlined:!1,inverted:!1,submit:!1,reset:!1,fullwidth:!1,loading:!1,disabled:!1,remove:!1,isSelected:!1,isStatic:!1,rounded:!1,text:!1});var X=_,I=function(e){return l.a.createElement("div",null,l.a.createElement(X,{color:"primary"},"My Bulma button"),l.a.createElement("h1",null,e.test.map(function(e){return l.a.createElement(X,null,e)})))};I.getInitialProps=function(){var e=Object(r.default)(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.req.props);case 1:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),I.componentDidMount=function(){alert("Hello world")};n.default=I},"4mXO":function(e,n,t){e.exports=t("7TPF")},"7TPF":function(e,n,t){t("AUvm"),e.exports=t("WEpk").Object.getOwnPropertySymbols},"Jo+v":function(e,n,t){e.exports=t("/eQG")},TSYQ:function(e,n,t){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(n,[]))||(e.exports=a)}()},v5Dd:function(e,n,t){var a=t("NsO/"),o=t("vwuL").f;t("zn7N")("getOwnPropertyDescriptor",function(){return function(e,n){return o(a(e),n)}})}},[["/EDR",1,0,9]]]);