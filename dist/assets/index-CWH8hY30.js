(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var by={exports:{}},eu={},Vy={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),WE=Symbol.for("react.portal"),GE=Symbol.for("react.fragment"),KE=Symbol.for("react.strict_mode"),QE=Symbol.for("react.profiler"),XE=Symbol.for("react.provider"),YE=Symbol.for("react.context"),JE=Symbol.for("react.forward_ref"),ZE=Symbol.for("react.suspense"),e1=Symbol.for("react.memo"),t1=Symbol.for("react.lazy"),qp=Symbol.iterator;function n1(t){return t===null||typeof t!="object"?null:(t=qp&&t[qp]||t["@@iterator"],typeof t=="function"?t:null)}var Dy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oy=Object.assign,Ly={};function cs(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||Dy}cs.prototype.isReactComponent={};cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function My(){}My.prototype=cs.prototype;function ud(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||Dy}var cd=ud.prototype=new My;cd.constructor=ud;Oy(cd,cs.prototype);cd.isPureReactComponent=!0;var Wp=Array.isArray,jy=Object.prototype.hasOwnProperty,hd={current:null},zy={key:!0,ref:!0,__self:!0,__source:!0};function Fy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jy.call(e,r)&&!zy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Fo,type:t,key:s,ref:o,props:i,_owner:hd.current}}function r1(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function i1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gp=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i1(""+t.key):e.toString(36)}function Fa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case WE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+oc(o,0):r,Wp(i)?(n="",t!=null&&(n=t.replace(Gp,"$&/")+"/"),Fa(i,e,n,"",function(h){return h})):i!=null&&(dd(i)&&(i=r1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+oc(s,l);o+=Fa(s,e,n,u,i)}else if(u=n1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+oc(s,l++),o+=Fa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var r=[],i=0;return Fa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function s1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Ua={transition:null},o1={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:hd};function Uy(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=cs;ne.Fragment=GE;ne.Profiler=QE;ne.PureComponent=ud;ne.StrictMode=KE;ne.Suspense=ZE;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o1;ne.act=Uy;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Oy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)jy.call(e,u)&&!zy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Fo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:YE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:XE,_context:t},t.Consumer=t};ne.createElement=Fy;ne.createFactory=function(t){var e=Fy.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:JE,render:t}};ne.isValidElement=dd;ne.lazy=function(t){return{$$typeof:t1,_payload:{_status:-1,_result:t},_init:s1}};ne.memo=function(t,e){return{$$typeof:e1,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};ne.unstable_act=Uy;ne.useCallback=function(t,e){return pt.current.useCallback(t,e)};ne.useContext=function(t){return pt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return pt.current.useEffect(t,e)};ne.useId=function(){return pt.current.useId()};ne.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return pt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ne.useRef=function(t){return pt.current.useRef(t)};ne.useState=function(t){return pt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return pt.current.useTransition()};ne.version="18.3.1";Vy.exports=ne;var K=Vy.exports;const a1=qE(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1=K,u1=Symbol.for("react.element"),c1=Symbol.for("react.fragment"),h1=Object.prototype.hasOwnProperty,d1=l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f1={key:!0,ref:!0,__self:!0,__source:!0};function By(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)h1.call(e,r)&&!f1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:u1,type:t,key:s,ref:o,props:i,_owner:d1.current}}eu.Fragment=c1;eu.jsx=By;eu.jsxs=By;by.exports=eu;var f=by.exports,$c={},$y={exports:{}},Nt={},Hy={exports:{}},qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,X){var Z=U.length;U.push(X);e:for(;0<Z;){var me=Z-1>>>1,se=U[me];if(0<i(se,X))U[me]=X,U[Z]=se,Z=me;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var X=U[0],Z=U.pop();if(Z!==X){U[0]=Z;e:for(var me=0,se=U.length,Te=se>>>1;me<Te;){var ye=2*(me+1)-1,Ft=U[ye],Ut=ye+1,Bt=U[Ut];if(0>i(Ft,Z))Ut<se&&0>i(Bt,Ft)?(U[me]=Bt,U[Ut]=Z,me=Ut):(U[me]=Ft,U[ye]=Z,me=ye);else if(Ut<se&&0>i(Bt,Z))U[me]=Bt,U[Ut]=Z,me=Ut;else break e}}return X}function i(U,X){var Z=U.sortIndex-X.sortIndex;return Z!==0?Z:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,g=null,m=3,S=!1,P=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(U){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=U)r(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(h)}}function V(U){if(N=!1,A(U),!P)if(n(u)!==null)P=!0,Mn(j);else{var X=n(h);X!==null&&Re(V,X.startTime-U)}}function j(U,X){P=!1,N&&(N=!1,x(v),v=-1),S=!0;var Z=m;try{for(A(X),g=n(u);g!==null&&(!(g.expirationTime>X)||U&&!C());){var me=g.callback;if(typeof me=="function"){g.callback=null,m=g.priorityLevel;var se=me(g.expirationTime<=X);X=t.unstable_now(),typeof se=="function"?g.callback=se:g===n(u)&&r(u),A(X)}else r(u);g=n(u)}if(g!==null)var Te=!0;else{var ye=n(h);ye!==null&&Re(V,ye.startTime-X),Te=!1}return Te}finally{g=null,m=Z,S=!1}}var z=!1,E=null,v=-1,w=5,I=-1;function C(){return!(t.unstable_now()-I<w)}function k(){if(E!==null){var U=t.unstable_now();I=U;var X=!0;try{X=E(!0,U)}finally{X?T():(z=!1,E=null)}}else z=!1}var T;if(typeof _=="function")T=function(){_(k)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,en=Le.port2;Le.port1.onmessage=k,T=function(){en.postMessage(null)}}else T=function(){D(k,0)};function Mn(U){E=U,z||(z=!0,T())}function Re(U,X){v=D(function(){U(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){P||S||(P=!0,Mn(j))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var Z=m;m=X;try{return U()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=m;m=U;try{return X()}finally{m=Z}},t.unstable_scheduleCallback=function(U,X,Z){var me=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,U){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Z+se,U={id:p++,callback:X,priorityLevel:U,startTime:Z,expirationTime:se,sortIndex:-1},Z>me?(U.sortIndex=Z,e(h,U),n(u)===null&&U===n(h)&&(N?(x(v),v=-1):N=!0,Re(V,Z-me))):(U.sortIndex=se,e(u,U),P||S||(P=!0,Mn(j))),U},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(U){var X=m;return function(){var Z=m;m=X;try{return U.apply(this,arguments)}finally{m=Z}}}})(qy);Hy.exports=qy;var p1=Hy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1=K,Rt=p1;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wy=new Set,po={};function oi(t,e){Ki(t,e),Ki(t+"Capture",e)}function Ki(t,e){for(po[t]=e,t=0;t<e.length;t++)Wy.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,g1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kp={},Qp={};function y1(t){return Hc.call(Qp,t)?!0:Hc.call(Kp,t)?!1:g1.test(t)?Qp[t]=!0:(Kp[t]=!0,!1)}function v1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _1(t,e,n,r){if(e===null||typeof e>"u"||v1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var fd=/[\-:]([a-z])/g;function pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fd,pd);Xe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fd,pd);Xe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fd,pd);Xe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function md(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_1(e,n,i,r)&&(n=null),r||i===null?y1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),Ii=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),Gy=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),vd=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),Qy=Symbol.for("react.offscreen"),Xp=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=Xp&&t[Xp]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,ac;function Bs(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var lc=!1;function uc(t,e){if(!t||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function w1(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function Kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case Ii:return"Portal";case qc:return"Profiler";case gd:return"StrictMode";case Wc:return"Suspense";case Gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ky:return(t.displayName||"Context")+".Consumer";case Gy:return(t._context.displayName||"Context")+".Provider";case yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vd:return e=t.displayName||null,e!==null?e:Kc(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return Kc(t(e))}catch{}}return null}function E1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(e);case 8:return e===gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function T1(t){var e=Xy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=T1(t))}function Yy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qc(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jy(t,e){e=e.checked,e!=null&&md(t,"checked",e,!1)}function Xc(t,e){Jy(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $s=Array.isArray;function Mi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if($s(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function Zy(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I1=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){I1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var x1=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(t,e){if(e){if(x1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function _d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rh=null,ji=null,zi=null;function tm(t){if(t=$o(t)){if(typeof rh!="function")throw Error(M(280));var e=t.stateNode;e&&(e=su(e),rh(t.stateNode,t.type,e))}}function iv(t){ji?zi?zi.push(t):zi=[t]:ji=t}function sv(){if(ji){var t=ji,e=zi;if(zi=ji=null,tm(t),e)for(t=0;t<e.length;t++)tm(e[t])}}function ov(t,e){return t(e)}function av(){}var cc=!1;function lv(t,e,n){if(cc)return t(e,n);cc=!0;try{return ov(t,e,n)}finally{cc=!1,(ji!==null||zi!==null)&&(av(),sv())}}function go(t,e){var n=t.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var ih=!1;if(An)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{ih=!1}function S1(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Js=!1,ul=null,cl=!1,sh=null,A1={onError:function(t){Js=!0,ul=t}};function C1(t,e,n,r,i,s,o,l,u){Js=!1,ul=null,S1.apply(A1,arguments)}function k1(t,e,n,r,i,s,o,l,u){if(C1.apply(this,arguments),Js){if(Js){var h=ul;Js=!1,ul=null}else throw Error(M(198));cl||(cl=!0,sh=h)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nm(t){if(ai(t)!==t)throw Error(M(188))}function P1(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nm(i),t;if(s===r)return nm(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function cv(t){return t=P1(t),t!==null?hv(t):null}function hv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hv(t);if(e!==null)return e;t=t.sibling}return null}var dv=Rt.unstable_scheduleCallback,rm=Rt.unstable_cancelCallback,R1=Rt.unstable_shouldYield,N1=Rt.unstable_requestPaint,be=Rt.unstable_now,b1=Rt.unstable_getCurrentPriorityLevel,wd=Rt.unstable_ImmediatePriority,fv=Rt.unstable_UserBlockingPriority,hl=Rt.unstable_NormalPriority,V1=Rt.unstable_LowPriority,pv=Rt.unstable_IdlePriority,tu=null,an=null;function D1(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:M1,O1=Math.log,L1=Math.LN2;function M1(t){return t>>>=0,t===0?32:31-(O1(t)/L1|0)|0}var Ea=64,Ta=4194304;function Hs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Hs(l):(s&=o,s!==0&&(r=Hs(s)))}else o=n&~i,o!==0?r=Hs(o):s!==0&&(r=Hs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function j1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=j1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mv(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function F1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yv,Td,vv,_v,wv,ah=!1,Ia=[],nr=null,rr=null,ir=null,yo=new Map,vo=new Map,Gn=[],U1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function im(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function Ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$o(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function B1(t,e,n,r,i){switch(e){case"focusin":return nr=Ls(nr,t,e,n,r,i),!0;case"dragenter":return rr=Ls(rr,t,e,n,r,i),!0;case"mouseover":return ir=Ls(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return yo.set(s,Ls(yo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vo.set(s,Ls(vo.get(s)||null,t,e,n,r,i)),!0}return!1}function Ev(t){var e=Ur(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=uv(n),e!==null){t.blockedOn=e,wv(t.priority,function(){vv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nh=r,n.target.dispatchEvent(r),nh=null}else return e=$o(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function sm(t,e,n){Ba(t)&&n.delete(e)}function $1(){ah=!1,nr!==null&&Ba(nr)&&(nr=null),rr!==null&&Ba(rr)&&(rr=null),ir!==null&&Ba(ir)&&(ir=null),yo.forEach(sm),vo.forEach(sm)}function Ms(t,e){t.blockedOn===e&&(t.blockedOn=null,ah||(ah=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,$1)))}function _o(t){function e(i){return Ms(i,t)}if(0<Ia.length){Ms(Ia[0],t);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Ms(nr,t),rr!==null&&Ms(rr,t),ir!==null&&Ms(ir,t),yo.forEach(e),vo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&Gn.shift()}var Fi=On.ReactCurrentBatchConfig,fl=!0;function H1(t,e,n,r){var i=de,s=Fi.transition;Fi.transition=null;try{de=1,Id(t,e,n,r)}finally{de=i,Fi.transition=s}}function q1(t,e,n,r){var i=de,s=Fi.transition;Fi.transition=null;try{de=4,Id(t,e,n,r)}finally{de=i,Fi.transition=s}}function Id(t,e,n,r){if(fl){var i=lh(t,e,n,r);if(i===null)Ec(t,e,r,pl,n),im(t,r);else if(B1(i,t,e,n,r))r.stopPropagation();else if(im(t,r),e&4&&-1<U1.indexOf(t)){for(;i!==null;){var s=$o(i);if(s!==null&&yv(s),s=lh(t,e,n,r),s===null&&Ec(t,e,r,pl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ec(t,e,r,null,n)}}var pl=null;function lh(t,e,n,r){if(pl=null,t=_d(r),t=Ur(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function Tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b1()){case wd:return 1;case fv:return 4;case hl:case V1:return 16;case pv:return 536870912;default:return 16}default:return 16}}var Zn=null,xd=null,$a=null;function Iv(){if($a)return $a;var t,e=xd,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $a=i.slice(t,1<r?1-r:void 0)}function Ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function om(){return!1}function bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xa:om,this.isPropagationStopped=om,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=bt(hs),Bo=Ae({},hs,{view:0,detail:0}),W1=bt(Bo),dc,fc,js,nu=Ae({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(dc=t.screenX-js.screenX,fc=t.screenY-js.screenY):fc=dc=0,js=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),am=bt(nu),G1=Ae({},nu,{dataTransfer:0}),K1=bt(G1),Q1=Ae({},Bo,{relatedTarget:0}),pc=bt(Q1),X1=Ae({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Y1=bt(X1),J1=Ae({},hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z1=bt(J1),eT=Ae({},hs,{data:0}),lm=bt(eT),tT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rT[t])?!!e[t]:!1}function Ad(){return iT}var sT=Ae({},Bo,{key:function(t){if(t.key){var e=tT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(t){return t.type==="keypress"?Ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oT=bt(sT),aT=Ae({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=bt(aT),lT=Ae({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),uT=bt(lT),cT=Ae({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hT=bt(cT),dT=Ae({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fT=bt(dT),pT=[9,13,27,32],Cd=An&&"CompositionEvent"in window,Zs=null;An&&"documentMode"in document&&(Zs=document.documentMode);var mT=An&&"TextEvent"in window&&!Zs,xv=An&&(!Cd||Zs&&8<Zs&&11>=Zs),cm=" ",hm=!1;function Sv(t,e){switch(t){case"keyup":return pT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Si=!1;function gT(t,e){switch(t){case"compositionend":return Av(e);case"keypress":return e.which!==32?null:(hm=!0,cm);case"textInput":return t=e.data,t===cm&&hm?null:t;default:return null}}function yT(t,e){if(Si)return t==="compositionend"||!Cd&&Sv(t,e)?(t=Iv(),$a=xd=Zn=null,Si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xv&&e.locale!=="ko"?null:e.data;default:return null}}var vT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vT[t.type]:e==="textarea"}function Cv(t,e,n,r){iv(r),e=ml(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var eo=null,wo=null;function _T(t){jv(t,0)}function ru(t){var e=ki(t);if(Yy(e))return t}function wT(t,e){if(t==="change")return e}var kv=!1;if(An){var mc;if(An){var gc="oninput"in document;if(!gc){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),gc=typeof fm.oninput=="function"}mc=gc}else mc=!1;kv=mc&&(!document.documentMode||9<document.documentMode)}function pm(){eo&&(eo.detachEvent("onpropertychange",Pv),wo=eo=null)}function Pv(t){if(t.propertyName==="value"&&ru(wo)){var e=[];Cv(e,wo,t,_d(t)),lv(_T,e)}}function ET(t,e,n){t==="focusin"?(pm(),eo=e,wo=n,eo.attachEvent("onpropertychange",Pv)):t==="focusout"&&pm()}function TT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(wo)}function IT(t,e){if(t==="click")return ru(e)}function xT(t,e){if(t==="input"||t==="change")return ru(e)}function ST(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:ST;function Eo(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hc.call(e,i)||!Zt(t[i],e[i]))return!1}return!0}function mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,e){var n=mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mm(n)}}function Rv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nv(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AT(t){var e=Nv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rv(n.ownerDocument.documentElement,n)){if(r!==null&&kd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gm(n,s);var o=gm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CT=An&&"documentMode"in document&&11>=document.documentMode,Ai=null,uh=null,to=null,ch=!1;function ym(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||Ai==null||Ai!==ll(r)||(r=Ai,"selectionStart"in r&&kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&Eo(to,r)||(to=r,r=ml(uh,"onSelect"),0<r.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ci={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},yc={},bv={};An&&(bv=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function iu(t){if(yc[t])return yc[t];if(!Ci[t])return t;var e=Ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bv)return yc[t]=e[n];return t}var Vv=iu("animationend"),Dv=iu("animationiteration"),Ov=iu("animationstart"),Lv=iu("transitionend"),Mv=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){Mv.set(t,e),oi(e,[t])}for(var vc=0;vc<vm.length;vc++){var _c=vm[vc],kT=_c.toLowerCase(),PT=_c[0].toUpperCase()+_c.slice(1);Cr(kT,"on"+PT)}Cr(Vv,"onAnimationEnd");Cr(Dv,"onAnimationIteration");Cr(Ov,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(Lv,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RT=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function _m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,k1(r,e,void 0,t),t.currentTarget=null}function jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;_m(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;_m(i,l,h),s=u}}}if(cl)throw t=sh,cl=!1,sh=null,t}function _e(t,e){var n=e[mh];n===void 0&&(n=e[mh]=new Set);var r=t+"__bubble";n.has(r)||(zv(e,t,2,!1),n.add(r))}function wc(t,e,n){var r=0;e&&(r|=4),zv(n,t,r,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[Aa]){t[Aa]=!0,Wy.forEach(function(n){n!=="selectionchange"&&(RT.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,wc("selectionchange",!1,e))}}function zv(t,e,n,r){switch(Tv(e)){case 1:var i=H1;break;case 4:i=q1;break;default:i=Id}n=i.bind(null,e,n,t),i=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ec(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lv(function(){var h=s,p=_d(n),g=[];e:{var m=Mv.get(t);if(m!==void 0){var S=Sd,P=t;switch(t){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":S=oT;break;case"focusin":P="focus",S=pc;break;case"focusout":P="blur",S=pc;break;case"beforeblur":case"afterblur":S=pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=uT;break;case Vv:case Dv:case Ov:S=Y1;break;case Lv:S=hT;break;case"scroll":S=W1;break;case"wheel":S=fT;break;case"copy":case"cut":case"paste":S=Z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=um}var N=(e&4)!==0,D=!N&&t==="scroll",x=N?m!==null?m+"Capture":null:m;N=[];for(var _=h,A;_!==null;){A=_;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,x!==null&&(V=go(_,x),V!=null&&N.push(Io(_,V,A)))),D)break;_=_.return}0<N.length&&(m=new S(m,P,null,n,p),g.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==nh&&(P=n.relatedTarget||n.fromElement)&&(Ur(P)||P[Cn]))break e;if((S||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,S?(P=n.relatedTarget||n.toElement,S=h,P=P?Ur(P):null,P!==null&&(D=ai(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(S=null,P=h),S!==P)){if(N=am,V="onMouseLeave",x="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=um,V="onPointerLeave",x="onPointerEnter",_="pointer"),D=S==null?m:ki(S),A=P==null?m:ki(P),m=new N(V,_+"leave",S,n,p),m.target=D,m.relatedTarget=A,V=null,Ur(p)===h&&(N=new N(x,_+"enter",P,n,p),N.target=A,N.relatedTarget=D,V=N),D=V,S&&P)t:{for(N=S,x=P,_=0,A=N;A;A=yi(A))_++;for(A=0,V=x;V;V=yi(V))A++;for(;0<_-A;)N=yi(N),_--;for(;0<A-_;)x=yi(x),A--;for(;_--;){if(N===x||x!==null&&N===x.alternate)break t;N=yi(N),x=yi(x)}N=null}else N=null;S!==null&&wm(g,m,S,N,!1),P!==null&&D!==null&&wm(g,D,P,N,!0)}}e:{if(m=h?ki(h):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var j=wT;else if(dm(m))if(kv)j=xT;else{j=TT;var z=ET}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=IT);if(j&&(j=j(t,h))){Cv(g,j,n,p);break e}z&&z(t,m,h),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&Yc(m,"number",m.value)}switch(z=h?ki(h):window,t){case"focusin":(dm(z)||z.contentEditable==="true")&&(Ai=z,uh=h,to=null);break;case"focusout":to=uh=Ai=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,ym(g,n,p);break;case"selectionchange":if(CT)break;case"keydown":case"keyup":ym(g,n,p)}var E;if(Cd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Si?Sv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(xv&&n.locale!=="ko"&&(Si||v!=="onCompositionStart"?v==="onCompositionEnd"&&Si&&(E=Iv()):(Zn=p,xd="value"in Zn?Zn.value:Zn.textContent,Si=!0)),z=ml(h,v),0<z.length&&(v=new lm(v,t,null,n,p),g.push({event:v,listeners:z}),E?v.data=E:(E=Av(n),E!==null&&(v.data=E)))),(E=mT?gT(t,n):yT(t,n))&&(h=ml(h,"onBeforeInput"),0<h.length&&(p=new lm("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:h}),p.data=E))}jv(g,e)})}function Io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=go(t,n),s!=null&&r.unshift(Io(t,s,i)),s=go(t,e),s!=null&&r.push(Io(t,s,i))),t=t.return}return r}function yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=go(n,s),u!=null&&o.unshift(Io(n,u,l))):i||(u=go(n,s),u!=null&&o.push(Io(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var NT=/\r\n?/g,bT=/\u0000|\uFFFD/g;function Em(t){return(typeof t=="string"?t:""+t).replace(NT,`
`).replace(bT,"")}function Ca(t,e,n){if(e=Em(e),Em(t)!==e&&n)throw Error(M(425))}function gl(){}var hh=null,dh=null;function fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,VT=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,DT=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(t){return Tm.resolve(null).then(t).catch(OT)}:ph;function OT(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),on="__reactFiber$"+ds,xo="__reactProps$"+ds,Cn="__reactContainer$"+ds,mh="__reactEvents$"+ds,LT="__reactListeners$"+ds,MT="__reactHandles$"+ds;function Ur(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Im(t);t!==null;){if(n=t[on])return n;t=Im(t)}return e}t=n,n=t.parentNode}return null}function $o(t){return t=t[on]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function su(t){return t[xo]||null}var gh=[],Pi=-1;function kr(t){return{current:t}}function Ee(t){0>Pi||(t.current=gh[Pi],gh[Pi]=null,Pi--)}function ge(t,e){Pi++,gh[Pi]=t.current,t.current=e}var vr={},at=kr(vr),Et=kr(!1),Qr=vr;function Qi(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function yl(){Ee(Et),Ee(at)}function xm(t,e,n){if(at.current!==vr)throw Error(M(168));ge(at,e),ge(Et,n)}function Fv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,E1(t)||"Unknown",i));return Ae({},n,r)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Qr=at.current,ge(at,t),ge(Et,Et.current),!0}function Sm(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Fv(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,Ee(Et),Ee(at),ge(at,t)):Ee(Et),ge(Et,n)}var wn=null,ou=!1,Ic=!1;function Uv(t){wn===null?wn=[t]:wn.push(t)}function jT(t){ou=!0,Uv(t)}function Pr(){if(!Ic&&wn!==null){Ic=!0;var t=0,e=de;try{var n=wn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,ou=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),dv(wd,Pr),i}finally{de=e,Ic=!1}}return null}var Ri=[],Ni=0,_l=null,wl=0,Vt=[],Dt=0,Xr=null,En=1,Tn="";function jr(t,e){Ri[Ni++]=wl,Ri[Ni++]=_l,_l=t,wl=e}function Bv(t,e,n){Vt[Dt++]=En,Vt[Dt++]=Tn,Vt[Dt++]=Xr,Xr=t;var r=En;t=Tn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Xt(e)+i|n<<i|r,Tn=s+t}else En=1<<s|n<<i|r,Tn=t}function Pd(t){t.return!==null&&(jr(t,1),Bv(t,1,0))}function Rd(t){for(;t===_l;)_l=Ri[--Ni],Ri[Ni]=null,wl=Ri[--Ni],Ri[Ni]=null;for(;t===Xr;)Xr=Vt[--Dt],Vt[Dt]=null,Tn=Vt[--Dt],Vt[Dt]=null,En=Vt[--Dt],Vt[Dt]=null}var Pt=null,Ct=null,Ie=!1,Gt=null;function $v(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Am(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:En,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Ct=null,!0):!1;default:return!1}}function yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vh(t){if(Ie){var e=Ct;if(e){var n=e;if(!Am(t,e)){if(yh(t))throw Error(M(418));e=sr(n.nextSibling);var r=Pt;e&&Am(t,e)?$v(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Pt=t)}}else{if(yh(t))throw Error(M(418));t.flags=t.flags&-4097|2,Ie=!1,Pt=t}}}function Cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function ka(t){if(t!==Pt)return!1;if(!Ie)return Cm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fh(t.type,t.memoizedProps)),e&&(e=Ct)){if(yh(t))throw Hv(),Error(M(418));for(;e;)$v(t,e),e=sr(e.nextSibling)}if(Cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Pt?sr(t.stateNode.nextSibling):null;return!0}function Hv(){for(var t=Ct;t;)t=sr(t.nextSibling)}function Xi(){Ct=Pt=null,Ie=!1}function Nd(t){Gt===null?Gt=[t]:Gt.push(t)}var zT=On.ReactCurrentBatchConfig;function zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function km(t){var e=t._init;return e(t._payload)}function qv(t){function e(x,_){if(t){var A=x.deletions;A===null?(x.deletions=[_],x.flags|=16):A.push(_)}}function n(x,_){if(!t)return null;for(;_!==null;)e(x,_),_=_.sibling;return null}function r(x,_){for(x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function i(x,_){return x=ur(x,_),x.index=0,x.sibling=null,x}function s(x,_,A){return x.index=A,t?(A=x.alternate,A!==null?(A=A.index,A<_?(x.flags|=2,_):A):(x.flags|=2,_)):(x.flags|=1048576,_)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,_,A,V){return _===null||_.tag!==6?(_=Rc(A,x.mode,V),_.return=x,_):(_=i(_,A),_.return=x,_)}function u(x,_,A,V){var j=A.type;return j===xi?p(x,_,A.props.children,V,A.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===qn&&km(j)===_.type)?(V=i(_,A.props),V.ref=zs(x,_,A),V.return=x,V):(V=Ya(A.type,A.key,A.props,null,x.mode,V),V.ref=zs(x,_,A),V.return=x,V)}function h(x,_,A,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=Nc(A,x.mode,V),_.return=x,_):(_=i(_,A.children||[]),_.return=x,_)}function p(x,_,A,V,j){return _===null||_.tag!==7?(_=Wr(A,x.mode,V,j),_.return=x,_):(_=i(_,A),_.return=x,_)}function g(x,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Rc(""+_,x.mode,A),_.return=x,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case va:return A=Ya(_.type,_.key,_.props,null,x.mode,A),A.ref=zs(x,null,_),A.return=x,A;case Ii:return _=Nc(_,x.mode,A),_.return=x,_;case qn:var V=_._init;return g(x,V(_._payload),A)}if($s(_)||Ds(_))return _=Wr(_,x.mode,A,null),_.return=x,_;Pa(x,_)}return null}function m(x,_,A,V){var j=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(x,_,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case va:return A.key===j?u(x,_,A,V):null;case Ii:return A.key===j?h(x,_,A,V):null;case qn:return j=A._init,m(x,_,j(A._payload),V)}if($s(A)||Ds(A))return j!==null?null:p(x,_,A,V,null);Pa(x,A)}return null}function S(x,_,A,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return x=x.get(A)||null,l(_,x,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case va:return x=x.get(V.key===null?A:V.key)||null,u(_,x,V,j);case Ii:return x=x.get(V.key===null?A:V.key)||null,h(_,x,V,j);case qn:var z=V._init;return S(x,_,A,z(V._payload),j)}if($s(V)||Ds(V))return x=x.get(A)||null,p(_,x,V,j,null);Pa(_,V)}return null}function P(x,_,A,V){for(var j=null,z=null,E=_,v=_=0,w=null;E!==null&&v<A.length;v++){E.index>v?(w=E,E=null):w=E.sibling;var I=m(x,E,A[v],V);if(I===null){E===null&&(E=w);break}t&&E&&I.alternate===null&&e(x,E),_=s(I,_,v),z===null?j=I:z.sibling=I,z=I,E=w}if(v===A.length)return n(x,E),Ie&&jr(x,v),j;if(E===null){for(;v<A.length;v++)E=g(x,A[v],V),E!==null&&(_=s(E,_,v),z===null?j=E:z.sibling=E,z=E);return Ie&&jr(x,v),j}for(E=r(x,E);v<A.length;v++)w=S(E,x,v,A[v],V),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?v:w.key),_=s(w,_,v),z===null?j=w:z.sibling=w,z=w);return t&&E.forEach(function(C){return e(x,C)}),Ie&&jr(x,v),j}function N(x,_,A,V){var j=Ds(A);if(typeof j!="function")throw Error(M(150));if(A=j.call(A),A==null)throw Error(M(151));for(var z=j=null,E=_,v=_=0,w=null,I=A.next();E!==null&&!I.done;v++,I=A.next()){E.index>v?(w=E,E=null):w=E.sibling;var C=m(x,E,I.value,V);if(C===null){E===null&&(E=w);break}t&&E&&C.alternate===null&&e(x,E),_=s(C,_,v),z===null?j=C:z.sibling=C,z=C,E=w}if(I.done)return n(x,E),Ie&&jr(x,v),j;if(E===null){for(;!I.done;v++,I=A.next())I=g(x,I.value,V),I!==null&&(_=s(I,_,v),z===null?j=I:z.sibling=I,z=I);return Ie&&jr(x,v),j}for(E=r(x,E);!I.done;v++,I=A.next())I=S(E,x,v,I.value,V),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?v:I.key),_=s(I,_,v),z===null?j=I:z.sibling=I,z=I);return t&&E.forEach(function(k){return e(x,k)}),Ie&&jr(x,v),j}function D(x,_,A,V){if(typeof A=="object"&&A!==null&&A.type===xi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case va:e:{for(var j=A.key,z=_;z!==null;){if(z.key===j){if(j=A.type,j===xi){if(z.tag===7){n(x,z.sibling),_=i(z,A.props.children),_.return=x,x=_;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===qn&&km(j)===z.type){n(x,z.sibling),_=i(z,A.props),_.ref=zs(x,z,A),_.return=x,x=_;break e}n(x,z);break}else e(x,z);z=z.sibling}A.type===xi?(_=Wr(A.props.children,x.mode,V,A.key),_.return=x,x=_):(V=Ya(A.type,A.key,A.props,null,x.mode,V),V.ref=zs(x,_,A),V.return=x,x=V)}return o(x);case Ii:e:{for(z=A.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(x,_.sibling),_=i(_,A.children||[]),_.return=x,x=_;break e}else{n(x,_);break}else e(x,_);_=_.sibling}_=Nc(A,x.mode,V),_.return=x,x=_}return o(x);case qn:return z=A._init,D(x,_,z(A._payload),V)}if($s(A))return P(x,_,A,V);if(Ds(A))return N(x,_,A,V);Pa(x,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(x,_.sibling),_=i(_,A),_.return=x,x=_):(n(x,_),_=Rc(A,x.mode,V),_.return=x,x=_),o(x)):n(x,_)}return D}var Yi=qv(!0),Wv=qv(!1),El=kr(null),Tl=null,bi=null,bd=null;function Vd(){bd=bi=Tl=null}function Dd(t){var e=El.current;Ee(El),t._currentValue=e}function _h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ui(t,e){Tl=t,bd=bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},bi===null){if(Tl===null)throw Error(M(308));bi=t,Tl.dependencies={lanes:0,firstContext:t}}else bi=bi.next=t;return e}var Br=null;function Od(t){Br===null?Br=[t]:Br.push(t)}function Gv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Od(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,Od(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function qa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ed(t,n)}}function Pm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,p=h=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(m=e,S=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){g=P.call(S,g,m);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,m=typeof P=="function"?P.call(S,g,m):P,m==null)break e;g=Ae({},g,m);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=S,u=g):p=p.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=g}}function Rm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Ho={},ln=kr(Ho),So=kr(Ho),Ao=kr(Ho);function $r(t){if(t===Ho)throw Error(M(174));return t}function Md(t,e){switch(ge(Ao,e),ge(So,t),ge(ln,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zc(e,t)}Ee(ln),ge(ln,e)}function Ji(){Ee(ln),Ee(So),Ee(Ao)}function Qv(t){$r(Ao.current);var e=$r(ln.current),n=Zc(e,t.type);e!==n&&(ge(So,t),ge(ln,n))}function jd(t){So.current===t&&(Ee(ln),Ee(So))}var xe=kr(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function zd(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var Wa=On.ReactCurrentDispatcher,Sc=On.ReactCurrentBatchConfig,Yr=0,Se=null,Me=null,$e=null,Sl=!1,no=!1,Co=0,FT=0;function tt(){throw Error(M(321))}function Fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function Ud(t,e,n,r,i,s){if(Yr=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wa.current=t===null||t.memoizedState===null?HT:qT,t=n(r,i),no){s=0;do{if(no=!1,Co=0,25<=s)throw Error(M(301));s+=1,$e=Me=null,e.updateQueue=null,Wa.current=WT,t=n(r,i)}while(no)}if(Wa.current=Al,e=Me!==null&&Me.next!==null,Yr=0,$e=Me=Se=null,Sl=!1,e)throw Error(M(300));return t}function Bd(){var t=Co!==0;return Co=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Se.memoizedState=$e=t:$e=$e.next=t,$e}function zt(){if(Me===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=$e===null?Se.memoizedState:$e.next;if(e!==null)$e=e,Me=t;else{if(t===null)throw Error(M(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?Se.memoizedState=$e=t:$e=$e.next=t}return $e}function ko(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=zt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var p=h.lane;if((Yr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Se.lanes|=p,Jr|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Zt(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=zt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Zt(s,e.memoizedState)||(wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Xv(){}function Yv(t,e){var n=Se,r=zt(),i=e(),s=!Zt(r.memoizedState,i);if(s&&(r.memoizedState=i,wt=!0),r=r.queue,$d(e0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Po(9,Zv.bind(null,n,r,i,e),void 0,null),He===null)throw Error(M(349));Yr&30||Jv(n,e,i)}return i}function Jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zv(t,e,n,r){e.value=n,e.getSnapshot=r,t0(e)&&n0(t)}function e0(t,e,n){return n(function(){t0(e)&&n0(t)})}function t0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function n0(t){var e=kn(t,1);e!==null&&Yt(e,t,1,-1)}function Nm(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=$T.bind(null,Se,t),[e.memoizedState,t]}function Po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function r0(){return zt().memoizedState}function Ga(t,e,n,r){var i=rn();Se.flags|=t,i.memoizedState=Po(1|e,n,void 0,r===void 0?null:r)}function au(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&Fd(r,o.deps)){i.memoizedState=Po(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Po(1|e,n,s,r)}function bm(t,e){return Ga(8390656,8,t,e)}function $d(t,e){return au(2048,8,t,e)}function i0(t,e){return au(4,2,t,e)}function s0(t,e){return au(4,4,t,e)}function o0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a0(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,o0.bind(null,e,t),n)}function Hd(){}function l0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function u0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function c0(t,e,n){return Yr&21?(Zt(n,e)||(n=mv(),Se.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function UT(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Sc.transition;Sc.transition={};try{t(!1),e()}finally{de=n,Sc.transition=r}}function h0(){return zt().memoizedState}function BT(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},d0(t))f0(e,n);else if(n=Gv(t,e,n,r),n!==null){var i=ft();Yt(n,t,r,i),p0(n,e,r)}}function $T(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(d0(t))f0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Zt(l,o)){var u=e.interleaved;u===null?(i.next=i,Od(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Gv(t,e,i,r),n!==null&&(i=ft(),Yt(n,t,r,i),p0(n,e,r))}}function d0(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function f0(t,e){no=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ed(t,n)}}var Al={readContext:jt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},HT={readContext:jt,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ga(4194308,4,o0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ga(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ga(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=BT.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:Nm,useDebugValue:Hd,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=Nm(!1),e=t[0];return t=UT.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=rn();if(Ie){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),He===null)throw Error(M(349));Yr&30||Jv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,bm(e0.bind(null,r,s,t),[t]),r.flags|=2048,Po(9,Zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rn(),e=He.identifierPrefix;if(Ie){var n=Tn,r=En;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qT={readContext:jt,useCallback:l0,useContext:jt,useEffect:$d,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:u0,useReducer:Ac,useRef:r0,useState:function(){return Ac(ko)},useDebugValue:Hd,useDeferredValue:function(t){var e=zt();return c0(e,Me.memoizedState,t)},useTransition:function(){var t=Ac(ko)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:Yv,useId:h0,unstable_isNewReconciler:!1},WT={readContext:jt,useCallback:l0,useContext:jt,useEffect:$d,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:u0,useReducer:Cc,useRef:r0,useState:function(){return Cc(ko)},useDebugValue:Hd,useDeferredValue:function(t){var e=zt();return Me===null?e.memoizedState=t:c0(e,Me.memoizedState,t)},useTransition:function(){var t=Cc(ko)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:Yv,useId:h0,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=lr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Yt(e,t,i,r),qa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=lr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Yt(e,t,i,r),qa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=lr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Yt(e,t,r,n),qa(e,t,r))}};function Vm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,s):!0}function m0(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=Tt(e)?Qr:at.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function Eh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=Tt(e)?Qr:at.current,i.context=Qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lu.enqueueReplaceState(i,i.state,null),Il(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zi(t,e){try{var n="",r=e;do n+=w1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GT=typeof WeakMap=="function"?WeakMap:Map;function g0(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kl||(kl=!0,bh=r),Th(t,e)},n}function y0(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Th(t,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Om(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new GT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aI.bind(null,t,e,n),e.then(t,t))}function Lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var KT=On.ReactCurrentOwner,wt=!1;function dt(t,e,n,r){e.child=t===null?Wv(e,null,n,r):Yi(e,t.child,n,r)}function jm(t,e,n,r,i){n=n.render;var s=e.ref;return Ui(e,i),r=Ud(t,e,n,r,s,i),n=Bd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(Ie&&n&&Pd(e),e.flags|=1,dt(t,e,r,i),e.child)}function zm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,v0(t,e,s,r,i)):(t=Ya(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function v0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Eo(s,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return Ih(t,e,n,r,i)}function _0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Di,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Di,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Di,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Di,At),At|=r;return dt(t,e,i,n),e.child}function w0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ih(t,e,n,r,i){var s=Tt(n)?Qr:at.current;return s=Qi(e,s),Ui(e,i),n=Ud(t,e,n,r,s,i),r=Bd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(Ie&&r&&Pd(e),e.flags|=1,dt(t,e,n,i),e.child)}function Fm(t,e,n,r,i){if(Tt(n)){var s=!0;vl(e)}else s=!1;if(Ui(e,i),e.stateNode===null)Ka(t,e),m0(e,n,r),Eh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=jt(h):(h=Tt(n)?Qr:at.current,h=Qi(e,h));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Dm(e,o,r,h),Wn=!1;var m=e.memoizedState;o.state=m,Il(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Et.current||Wn?(typeof p=="function"&&(wh(e,n,p,r),u=e.memoizedState),(l=Wn||Vm(e,n,l,r,m,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Kv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:qt(e.type,l),o.props=h,g=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=Tt(n)?Qr:at.current,u=Qi(e,u));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==u)&&Dm(e,o,r,u),Wn=!1,m=e.memoizedState,o.state=m,Il(e,r,o,i);var P=e.memoizedState;l!==g||m!==P||Et.current||Wn?(typeof S=="function"&&(wh(e,n,S,r),P=e.memoizedState),(h=Wn||Vm(e,n,h,r,m,P,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return xh(t,e,n,r,s,i)}function xh(t,e,n,r,i,s){w0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sm(e,n,!1),Pn(t,e,s);r=e.stateNode,KT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yi(e,t.child,null,s),e.child=Yi(e,null,l,s)):dt(t,e,l,s),e.memoizedState=r.state,i&&Sm(e,n,!0),e.child}function E0(t){var e=t.stateNode;e.pendingContext?xm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xm(t,e.context,!1),Md(t,e.containerInfo)}function Um(t,e,n,r,i){return Xi(),Nd(i),e.flags|=256,dt(t,e,n,r),e.child}var Sh={dehydrated:null,treeContext:null,retryLane:0};function Ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function T0(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(xe,i&1),t===null)return vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ah(n),e.memoizedState=Sh,t):qd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return QT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sh,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qd(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ra(t,e,n,r){return r!==null&&Nd(r),Yi(e,t.child,null,n),t=qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kc(Error(M(422))),Ra(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yi(e,t.child,null,o),e.child.memoizedState=Ah(o),e.memoizedState=Sh,s);if(!(e.mode&1))return Ra(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=kc(s,r,void 0),Ra(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Yt(r,t,i,-1))}return Yd(),r=kc(Error(M(421))),Ra(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=sr(i.nextSibling),Pt=e,Ie=!0,Gt=null,t!==null&&(Vt[Dt++]=En,Vt[Dt++]=Tn,Vt[Dt++]=Xr,En=t.id,Tn=t.overflow,Xr=e),e=qd(e,r.children),e.flags|=4096,e)}function Bm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_h(t.return,e,n)}function Pc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function I0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,n,e);else if(t.tag===19)Bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pc(e,!0,n,null,s);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XT(t,e,n){switch(e.tag){case 3:E0(e),Xi();break;case 5:Qv(e);break;case 1:Tt(e.type)&&vl(e);break;case 4:Md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(El,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?T0(t,e,n):(ge(xe,xe.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ge(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return I0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,_0(t,e,n)}return Pn(t,e,n)}var x0,Ch,S0,A0;x0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ch=function(){};S0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(ln.current);var s=null;switch(n){case"input":i=Qc(t,i),r=Qc(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Jc(t,i),r=Jc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gl)}eh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(po.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(po.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};A0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fs(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function YT(t,e,n){var r=e.pendingProps;switch(Rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Tt(e.type)&&yl(),nt(e),null;case 3:return r=e.stateNode,Ji(),Ee(Et),Ee(at),zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(Oh(Gt),Gt=null))),Ch(t,e),nt(e),null;case 5:jd(e);var i=$r(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)S0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return nt(e),null}if(t=$r(ln.current),ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[xo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<qs.length;i++)_e(qs[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Yp(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Zp(r,s),_e("invalid",r)}eh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,l,t),i=["children",""+l]):po.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":_a(r),Jp(r,s,!0);break;case"textarea":_a(r),em(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[xo]=r,x0(t,e,!1,!1),e.stateNode=t;e:{switch(o=th(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<qs.length;i++)_e(qs[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Yp(t,r),i=Qc(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Zp(t,r),i=Jc(t,r),_e("invalid",t);break;default:i=r}eh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&mo(t,u):typeof u=="number"&&mo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&md(t,s,u,o))}switch(n){case"input":_a(t),Jp(t,r,!1);break;case"textarea":_a(t),em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)A0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=$r(Ao.current),$r(ln.current),ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Ca(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return nt(e),null;case 13:if(Ee(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Ct!==null&&e.mode&1&&!(e.flags&128))Hv(),Xi(),e.flags|=98560,s=!1;else if(s=ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[on]=e}else Xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Gt!==null&&(Oh(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?ze===0&&(ze=3):Yd())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return Ji(),Ch(t,e),t===null&&To(e.stateNode.containerInfo),nt(e),null;case 10:return Dd(e.type._context),nt(e),null;case 17:return Tt(e.type)&&yl(),nt(e),null;case 19:if(Ee(xe),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fs(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xl(t),o!==null){for(e.flags|=128,Fs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>es&&(e.flags|=128,r=!0,Fs(s,!1),e.lanes=4194304)}else{if(!r)if(t=xl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return nt(e),null}else 2*be()-s.renderingStartTime>es&&n!==1073741824&&(e.flags|=128,r=!0,Fs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=xe.current,ge(xe,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return Xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function JT(t,e){switch(Rd(e),e.tag){case 1:return Tt(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ji(),Ee(Et),Ee(at),zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jd(e),null;case 13:if(Ee(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(xe),null;case 4:return Ji(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var Na=!1,st=!1,ZT=typeof WeakSet=="function"?WeakSet:Set,$=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var $m=!1;function eI(t,e){if(hh=fl,t=Nv(),kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,g=t,m=null;t:for(;;){for(var S;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(S=g.firstChild)!==null;)m=g,g=S;for(;;){if(g===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++p===r&&(u=o),(S=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},fl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,D=P.memoizedState,x=e.stateNode,_=x.getSnapshotBeforeUpdate(e.elementType===e.type?N:qt(e.type,N),D);x.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){Pe(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=$m,$m=!1,P}function ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kh(e,n,s)}i=i.next}while(i!==r)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function C0(t){var e=t.alternate;e!==null&&(t.alternate=null,C0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[xo],delete e[mh],delete e[LT],delete e[MT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k0(t){return t.tag===5||t.tag===3||t.tag===4}function Hm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var We=null,Wt=!1;function $n(t,e,n){for(n=n.child;n!==null;)P0(t,e,n),n=n.sibling}function P0(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:st||Vi(n,e);case 6:var r=We,i=Wt;We=null,$n(t,e,n),We=r,Wt=i,We!==null&&(Wt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Wt?(t=We,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),_o(t)):Tc(We,n.stateNode));break;case 4:r=We,i=Wt,We=n.stateNode.containerInfo,Wt=!0,$n(t,e,n),We=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kh(n,e,o),i=i.next}while(i!==r)}$n(t,e,n);break;case 1:if(!st&&(Vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,$n(t,e,n),st=r):$n(t,e,n);break;default:$n(t,e,n)}}function qm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZT),e.forEach(function(r){var i=uI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Wt=!1;break e;case 3:We=l.stateNode.containerInfo,Wt=!0;break e;case 4:We=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(We===null)throw Error(M(160));P0(s,o,i),We=null,Wt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Pe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R0(e,t),e=e.sibling}function R0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),tn(t),r&4){try{ro(3,t,t.return),uu(3,t)}catch(N){Pe(t,t.return,N)}try{ro(5,t,t.return)}catch(N){Pe(t,t.return,N)}}break;case 1:Ht(e,t),tn(t),r&512&&n!==null&&Vi(n,n.return);break;case 5:if(Ht(e,t),tn(t),r&512&&n!==null&&Vi(n,n.return),t.flags&32){var i=t.stateNode;try{mo(i,"")}catch(N){Pe(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jy(i,s),th(l,o);var h=th(l,s);for(o=0;o<u.length;o+=2){var p=u[o],g=u[o+1];p==="style"?rv(i,g):p==="dangerouslySetInnerHTML"?tv(i,g):p==="children"?mo(i,g):md(i,p,g,h)}switch(l){case"input":Xc(i,s);break;case"textarea":Zy(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Mi(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?Mi(i,!!s.multiple,s.defaultValue,!0):Mi(i,!!s.multiple,s.multiple?[]:"",!1))}i[xo]=s}catch(N){Pe(t,t.return,N)}}break;case 6:if(Ht(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Pe(t,t.return,N)}}break;case 3:if(Ht(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(N){Pe(t,t.return,N)}break;case 4:Ht(e,t),tn(t);break;case 13:Ht(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kd=be())),r&4&&qm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(st=(h=st)||p,Ht(e,t),st=h):Ht(e,t),tn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(g=$=p;$!==null;){switch(m=$,S=m.child,m.tag){case 0:case 11:case 14:case 15:ro(4,m,m.return);break;case 1:Vi(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Pe(r,n,N)}}break;case 5:Vi(m,m.return);break;case 22:if(m.memoizedState!==null){Gm(g);continue}}S!==null?(S.return=m,$=S):Gm(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=nv("display",o))}catch(N){Pe(t,t.return,N)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(N){Pe(t,t.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ht(e,t),tn(t),r&4&&qm(t);break;case 21:break;default:Ht(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k0(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mo(i,""),r.flags&=-33);var s=Hm(t);Nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Hm(t);Rh(t,l,o);break;default:throw Error(M(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tI(t,e,n){$=t,N0(t)}function N0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Na;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||st;l=Na;var h=st;if(Na=o,(st=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Km(i):u!==null?(u.return=o,$=u):Km(i);for(;s!==null;)$=s,N0(s),s=s.sibling;$=i,Na=l,st=h}Wm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Wm(t)}}function Wm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&_o(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}st||e.flags&512&&Ph(e)}catch(m){Pe(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Gm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Km(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Ph(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Ph(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var nI=Math.ceil,Cl=On.ReactCurrentDispatcher,Wd=On.ReactCurrentOwner,Mt=On.ReactCurrentBatchConfig,ae=0,He=null,De=null,Qe=0,At=0,Di=kr(0),ze=0,Ro=null,Jr=0,cu=0,Gd=0,io=null,vt=null,Kd=0,es=1/0,_n=null,kl=!1,bh=null,ar=null,ba=!1,er=null,Pl=0,so=0,Vh=null,Qa=-1,Xa=0;function ft(){return ae&6?be():Qa!==-1?Qa:Qa=be()}function lr(t){return t.mode&1?ae&2&&Qe!==0?Qe&-Qe:zT.transition!==null?(Xa===0&&(Xa=mv()),Xa):(t=de,t!==0||(t=window.event,t=t===void 0?16:Tv(t.type)),t):1}function Yt(t,e,n,r){if(50<so)throw so=0,Vh=null,Error(M(185));Uo(t,n,r),(!(ae&2)||t!==He)&&(t===He&&(!(ae&2)&&(cu|=n),ze===4&&Kn(t,Qe)),It(t,r),n===1&&ae===0&&!(e.mode&1)&&(es=be()+500,ou&&Pr()))}function It(t,e){var n=t.callbackNode;z1(t,e);var r=dl(t,t===He?Qe:0);if(r===0)n!==null&&rm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rm(n),e===1)t.tag===0?jT(Qm.bind(null,t)):Uv(Qm.bind(null,t)),DT(function(){!(ae&6)&&Pr()}),n=null;else{switch(gv(r)){case 1:n=wd;break;case 4:n=fv;break;case 16:n=hl;break;case 536870912:n=pv;break;default:n=hl}n=z0(n,b0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b0(t,e){if(Qa=-1,Xa=0,ae&6)throw Error(M(327));var n=t.callbackNode;if(Bi()&&t.callbackNode!==n)return null;var r=dl(t,t===He?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Rl(t,r);else{e=r;var i=ae;ae|=2;var s=D0();(He!==t||Qe!==e)&&(_n=null,es=be()+500,qr(t,e));do try{sI();break}catch(l){V0(t,l)}while(!0);Vd(),Cl.current=s,ae=i,De!==null?e=0:(He=null,Qe=0,e=ze)}if(e!==0){if(e===2&&(i=oh(t),i!==0&&(r=i,e=Dh(t,i))),e===1)throw n=Ro,qr(t,0),Kn(t,r),It(t,be()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!rI(i)&&(e=Rl(t,r),e===2&&(s=oh(t),s!==0&&(r=s,e=Dh(t,s))),e===1))throw n=Ro,qr(t,0),Kn(t,r),It(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:zr(t,vt,_n);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=Kd+500-be(),10<e)){if(dl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ph(zr.bind(null,t,vt,_n),e);break}zr(t,vt,_n);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nI(r/1960))-r,10<r){t.timeoutHandle=ph(zr.bind(null,t,vt,_n),r);break}zr(t,vt,_n);break;case 5:zr(t,vt,_n);break;default:throw Error(M(329))}}}return It(t,be()),t.callbackNode===n?b0.bind(null,t):null}function Dh(t,e){var n=io;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=vt,vt=n,e!==null&&Oh(e)),t}function Oh(t){vt===null?vt=t:vt.push.apply(vt,t)}function rI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~Gd,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function Qm(t){if(ae&6)throw Error(M(327));Bi();var e=dl(t,0);if(!(e&1))return It(t,be()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var r=oh(t);r!==0&&(e=r,n=Dh(t,r))}if(n===1)throw n=Ro,qr(t,0),Kn(t,e),It(t,be()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,vt,_n),It(t,be()),null}function Qd(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(es=be()+500,ou&&Pr())}}function Zr(t){er!==null&&er.tag===0&&!(ae&6)&&Bi();var e=ae;ae|=1;var n=Mt.transition,r=de;try{if(Mt.transition=null,de=1,t)return t()}finally{de=r,Mt.transition=n,ae=e,!(ae&6)&&Pr()}}function Xd(){At=Di.current,Ee(Di)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VT(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Rd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:Ji(),Ee(Et),Ee(at),zd();break;case 5:jd(r);break;case 4:Ji();break;case 13:Ee(xe);break;case 19:Ee(xe);break;case 10:Dd(r.type._context);break;case 22:case 23:Xd()}n=n.return}if(He=t,De=t=ur(t.current,null),Qe=At=e,ze=0,Ro=null,Gd=cu=Jr=0,vt=io=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function V0(t,e){do{var n=De;try{if(Vd(),Wa.current=Al,Sl){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sl=!1}if(Yr=0,$e=Me=Se=null,no=!1,Co=0,Wd.current=null,n===null||n.return===null){ze=1,Ro=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=Lm(o);if(S!==null){S.flags&=-257,Mm(S,o,l,s,e),S.mode&1&&Om(s,h,e),e=S,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Om(s,h,e),Yd();break e}u=Error(M(426))}}else if(Ie&&l.mode&1){var D=Lm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Mm(D,o,l,s,e),Nd(Zi(u,l));break e}}s=u=Zi(u,l),ze!==4&&(ze=2),io===null?io=[s]:io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=g0(s,u,e);Pm(s,x);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ar===null||!ar.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=y0(s,l,e);Pm(s,V);break e}}s=s.return}while(s!==null)}L0(n)}catch(j){e=j,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function D0(){var t=Cl.current;return Cl.current=Al,t===null?Al:t}function Yd(){(ze===0||ze===3||ze===2)&&(ze=4),He===null||!(Jr&268435455)&&!(cu&268435455)||Kn(He,Qe)}function Rl(t,e){var n=ae;ae|=2;var r=D0();(He!==t||Qe!==e)&&(_n=null,qr(t,e));do try{iI();break}catch(i){V0(t,i)}while(!0);if(Vd(),ae=n,Cl.current=r,De!==null)throw Error(M(261));return He=null,Qe=0,ze}function iI(){for(;De!==null;)O0(De)}function sI(){for(;De!==null&&!R1();)O0(De)}function O0(t){var e=j0(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?L0(t):De=e,Wd.current=null}function L0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=JT(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,De=null;return}}else if(n=YT(n,e,At),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);ze===0&&(ze=5)}function zr(t,e,n){var r=de,i=Mt.transition;try{Mt.transition=null,de=1,oI(t,e,n,r)}finally{Mt.transition=i,de=r}return null}function oI(t,e,n,r){do Bi();while(er!==null);if(ae&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F1(t,s),t===He&&(De=He=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,z0(hl,function(){return Bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=de;de=1;var l=ae;ae|=4,Wd.current=null,eI(t,n),R0(n,t),AT(dh),fl=!!hh,dh=hh=null,t.current=n,tI(n),N1(),ae=l,de=o,Mt.transition=s}else t.current=n;if(ba&&(ba=!1,er=t,Pl=i),s=t.pendingLanes,s===0&&(ar=null),D1(n.stateNode),It(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kl)throw kl=!1,t=bh,bh=null,t;return Pl&1&&t.tag!==0&&Bi(),s=t.pendingLanes,s&1?t===Vh?so++:(so=0,Vh=t):so=0,Pr(),null}function Bi(){if(er!==null){var t=gv(Pl),e=Mt.transition,n=de;try{if(Mt.transition=null,de=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Pl=0,ae&6)throw Error(M(331));var i=ae;for(ae|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:ro(8,p,s)}var g=p.child;if(g!==null)g.return=p,$=g;else for(;$!==null;){p=$;var m=p.sibling,S=p.return;if(C0(p),p===h){$=null;break}if(m!==null){m.return=S,$=m;break}$=S}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,$=x;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uu(9,l)}}catch(j){Pe(l,l.return,j)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(ae=i,Pr(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(tu,t)}catch{}r=!0}return r}finally{de=n,Mt.transition=e}}return!1}function Xm(t,e,n){e=Zi(n,e),e=g0(t,e,1),t=or(t,e,1),e=ft(),t!==null&&(Uo(t,1,e),It(t,e))}function Pe(t,e,n){if(t.tag===3)Xm(t,t,n);else for(;e!==null;){if(e.tag===3){Xm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){t=Zi(n,t),t=y0(e,t,1),e=or(e,t,1),t=ft(),e!==null&&(Uo(e,1,t),It(e,t));break}}e=e.return}}function aI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Qe&n)===n&&(ze===4||ze===3&&(Qe&130023424)===Qe&&500>be()-Kd?qr(t,0):Gd|=n),It(t,e)}function M0(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=ft();t=kn(t,e),t!==null&&(Uo(t,e,n),It(t,n))}function lI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M0(t,n)}function uI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),M0(t,n)}var j0;j0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,XT(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Ie&&e.flags&1048576&&Bv(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ka(t,e),t=e.pendingProps;var i=Qi(e,at.current);Ui(e,n),i=Ud(null,e,r,t,i,n);var s=Bd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(s=!0,vl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ld(e),i.updater=lu,e.stateNode=i,i._reactInternals=e,Eh(e,r,t,n),e=xh(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Pd(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ka(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hI(r),t=qt(r,t),i){case 0:e=Ih(null,e,r,t,n);break e;case 1:e=Fm(null,e,r,t,n);break e;case 11:e=jm(null,e,r,t,n);break e;case 14:e=zm(null,e,r,qt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Fm(t,e,r,i,n);case 3:e:{if(E0(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Kv(t,e),Il(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zi(Error(M(423)),e),e=Um(t,e,r,n,i);break e}else if(r!==i){i=Zi(Error(M(424)),e),e=Um(t,e,r,n,i);break e}else for(Ct=sr(e.stateNode.containerInfo.firstChild),Pt=e,Ie=!0,Gt=null,n=Wv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xi(),r===i){e=Pn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return Qv(e),t===null&&vh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fh(r,i)?o=null:s!==null&&fh(r,s)&&(e.flags|=32),w0(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&vh(e),null;case 13:return T0(t,e,n);case 4:return Md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yi(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),jm(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(El,r._currentValue),r._currentValue=o,s!==null)if(Zt(s.value,o)){if(s.children===i.children&&!Et.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),_h(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ui(e,n),i=jt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),zm(t,e,r,i,n);case 15:return v0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Ka(t,e),e.tag=1,Tt(r)?(t=!0,vl(e)):t=!1,Ui(e,n),m0(e,r,i),Eh(e,r,i,n),xh(null,e,r,!0,t,n);case 19:return I0(t,e,n);case 22:return _0(t,e,n)}throw Error(M(156,e.tag))};function z0(t,e){return dv(t,e)}function cI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new cI(t,e,n,r)}function Jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hI(t){if(typeof t=="function")return Jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yd)return 11;if(t===vd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ya(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xi:return Wr(n.children,i,s,e);case gd:o=8,i|=8;break;case qc:return t=Lt(12,n,e,i|2),t.elementType=qc,t.lanes=s,t;case Wc:return t=Lt(13,n,e,i),t.elementType=Wc,t.lanes=s,t;case Gc:return t=Lt(19,n,e,i),t.elementType=Gc,t.lanes=s,t;case Qy:return hu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gy:o=10;break e;case Ky:o=9;break e;case yd:o=11;break e;case vd:o=14;break e;case qn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function hu(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=Qy,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zd(t,e,n,r,i,s,o,l,u){return t=new dI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function fI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function F0(t){if(!t)return vr;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(Tt(n))return Fv(t,n,e)}return e}function U0(t,e,n,r,i,s,o,l,u){return t=Zd(n,r,!0,t,i,s,o,l,u),t.context=F0(null),n=t.current,r=ft(),i=lr(n),s=Sn(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,Uo(t,i,r),It(t,r),t}function du(t,e,n,r){var i=e.current,s=ft(),o=lr(i);return n=F0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(Yt(t,i,o,s),qa(t,i,o)),o}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ym(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ef(t,e){Ym(t,e),(t=t.alternate)&&Ym(t,e)}function pI(){return null}var B0=typeof reportError=="function"?reportError:function(t){console.error(t)};function tf(t){this._internalRoot=t}fu.prototype.render=tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));du(t,e,null,null)};fu.prototype.unmount=tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){du(null,t,null,null)}),e[Cn]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=_v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&Ev(t)}};function nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jm(){}function mI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Nl(o);s.call(h)}}var o=U0(e,r,t,0,null,!1,!1,"",Jm);return t._reactRootContainer=o,t[Cn]=o.current,To(t.nodeType===8?t.parentNode:t),Zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Nl(u);l.call(h)}}var u=Zd(t,0,!1,null,null,!1,!1,"",Jm);return t._reactRootContainer=u,t[Cn]=u.current,To(t.nodeType===8?t.parentNode:t),Zr(function(){du(e,u,n,r)}),u}function mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Nl(o);l.call(u)}}du(e,o,t,i)}else o=mI(n,e,t,i,r);return Nl(o)}yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hs(e.pendingLanes);n!==0&&(Ed(e,n|1),It(e,be()),!(ae&6)&&(es=be()+500,Pr()))}break;case 13:Zr(function(){var r=kn(t,1);if(r!==null){var i=ft();Yt(r,t,1,i)}}),ef(t,1)}};Td=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ft();Yt(e,t,134217728,n)}ef(t,134217728)}};vv=function(t){if(t.tag===13){var e=lr(t),n=kn(t,e);if(n!==null){var r=ft();Yt(n,t,e,r)}ef(t,e)}};_v=function(){return de};wv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};rh=function(t,e,n){switch(e){case"input":if(Xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=su(r);if(!i)throw Error(M(90));Yy(r),Xc(r,i)}}}break;case"textarea":Zy(t,n);break;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}};ov=Qd;av=Zr;var gI={usingClientEntryPoint:!1,Events:[$o,ki,su,iv,sv,Qd]},Us={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yI={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cv(t),t===null?null:t.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||pI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{tu=Va.inject(yI),an=Va}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gI;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(e))throw Error(M(200));return fI(t,e,null,n)};Nt.createRoot=function(t,e){if(!nf(t))throw Error(M(299));var n=!1,r="",i=B0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zd(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,To(t.nodeType===8?t.parentNode:t),new tf(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=cv(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return Zr(t)};Nt.hydrate=function(t,e,n){if(!pu(e))throw Error(M(200));return mu(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!nf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=B0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=U0(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,To(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fu(e)};Nt.render=function(t,e,n){if(!pu(e))throw Error(M(200));return mu(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!pu(t))throw Error(M(40));return t._reactRootContainer?(Zr(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Qd;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return mu(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function $0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)}catch(t){console.error(t)}}$0(),$y.exports=Nt;var vI=$y.exports,Zm=vI;$c.createRoot=Zm.createRoot,$c.hydrateRoot=Zm.hydrateRoot;const _I=()=>{};var eg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},q0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,g=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(m=64)),r.push(n[p],n[g],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new EI;const m=s<<2|l>>4;if(r.push(m),h!==64){const S=l<<4&240|h>>2;if(r.push(S),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TI=function(t){const e=H0(t);return q0.encodeByteArray(e,!0)},bl=function(t){return TI(t).replace(/\./g,"")},W0=function(t){try{return q0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=()=>II().__FIREBASE_DEFAULTS__,SI=()=>{if(typeof process>"u"||typeof eg>"u")return;const t=eg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W0(t[1]);return e&&JSON.parse(e)},gu=()=>{try{return _I()||xI()||SI()||AI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},G0=t=>{var e,n;return(n=(e=gu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},CI=t=>{const e=G0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},K0=()=>{var t;return(t=gu())===null||t===void 0?void 0:t.config},Q0=t=>{var e;return(e=gu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function X0(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bl(JSON.stringify(n)),bl(JSON.stringify(o)),""].join(".")}const oo={};function RI(){const t={prod:[],emulator:[]};for(const e of Object.keys(oo))oo[e]?t.emulator.push(e):t.prod.push(e);return t}function NI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let tg=!1;function Y0(t,e){if(typeof window>"u"||typeof document>"u"||!fs(window.location.host)||oo[t]===e||oo[t]||tg)return;oo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=RI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,S){m.setAttribute("width","24"),m.setAttribute("id",S),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{tg=!0,o()},m}function p(m,S){m.setAttribute("id",S),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=NI(r),S=n("text"),P=document.getElementById(S)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),x=n("preprendIcon"),_=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const A=m.element;l(A),p(D,N);const V=h();u(_,x),A.append(_,P,D,V),document.body.appendChild(A)}s?(P.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function VI(){var t;const e=(t=gu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MI(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jI(){return!VI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zI(){try{return typeof indexedDB=="object"}catch{return!1}}function FI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UI,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qo.prototype.create)}}class qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?BI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,l,r)}}function BI(t,e){return t.replace($I,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $I=/\{\$([^}]+)}/g;function HI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ng(s)&&ng(o)){if(!ei(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ng(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qI(t,e){const n=new WI(t,e);return n.subscribe.bind(n)}class WI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bc),i.error===void 0&&(i.error=bc),i.complete===void 0&&(i.complete=bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class ti{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XI(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QI(t){return t===Fr?void 0:t}function XI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const JI={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ZI=re.INFO,ex={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},tx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ex[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rf{constructor(e){this.name=e,this._logLevel=ZI,this._logHandler=tx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const nx=(t,e)=>e.some(n=>t instanceof n);let rg,ig;function rx(){return rg||(rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ix(){return ig||(ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const J0=new WeakMap,Lh=new WeakMap,Z0=new WeakMap,Vc=new WeakMap,sf=new WeakMap;function sx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&J0.set(n,t)}).catch(()=>{}),sf.set(e,t),e}function ox(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let Mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Z0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ax(t){Mh=t(Mh)}function lx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dc(this),e,...n);return Z0.set(r,e.sort?e.sort():[e]),cr(r)}:ix().includes(t)?function(...e){return t.apply(Dc(this),e),cr(J0.get(this))}:function(...e){return cr(t.apply(Dc(this),e))}}function ux(t){return typeof t=="function"?lx(t):(t instanceof IDBTransaction&&ox(t),nx(t,rx())?new Proxy(t,Mh):t)}function cr(t){if(t instanceof IDBRequest)return sx(t);if(Vc.has(t))return Vc.get(t);const e=ux(t);return e!==t&&(Vc.set(t,e),sf.set(e,t)),e}const Dc=t=>sf.get(t);function cx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const hx=["get","getKey","getAll","getAllKeys","count"],dx=["put","add","delete","clear"],Oc=new Map;function sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Oc.set(e,s),s}ax(t=>({...t,get:(e,n,r)=>sg(e,n)||t.get(e,n,r),has:(e,n)=>!!sg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(px(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function px(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jh="@firebase/app",og="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new rf("@firebase/app"),mx="@firebase/app-compat",gx="@firebase/analytics-compat",yx="@firebase/analytics",vx="@firebase/app-check-compat",_x="@firebase/app-check",wx="@firebase/auth",Ex="@firebase/auth-compat",Tx="@firebase/database",Ix="@firebase/data-connect",xx="@firebase/database-compat",Sx="@firebase/functions",Ax="@firebase/functions-compat",Cx="@firebase/installations",kx="@firebase/installations-compat",Px="@firebase/messaging",Rx="@firebase/messaging-compat",Nx="@firebase/performance",bx="@firebase/performance-compat",Vx="@firebase/remote-config",Dx="@firebase/remote-config-compat",Ox="@firebase/storage",Lx="@firebase/storage-compat",Mx="@firebase/firestore",jx="@firebase/ai",zx="@firebase/firestore-compat",Fx="firebase",Ux="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="[DEFAULT]",Bx={[jh]:"fire-core",[mx]:"fire-core-compat",[yx]:"fire-analytics",[gx]:"fire-analytics-compat",[_x]:"fire-app-check",[vx]:"fire-app-check-compat",[wx]:"fire-auth",[Ex]:"fire-auth-compat",[Tx]:"fire-rtdb",[Ix]:"fire-data-connect",[xx]:"fire-rtdb-compat",[Sx]:"fire-fn",[Ax]:"fire-fn-compat",[Cx]:"fire-iid",[kx]:"fire-iid-compat",[Px]:"fire-fcm",[Rx]:"fire-fcm-compat",[Nx]:"fire-perf",[bx]:"fire-perf-compat",[Vx]:"fire-rc",[Dx]:"fire-rc-compat",[Ox]:"fire-gcs",[Lx]:"fire-gcs-compat",[Mx]:"fire-fst",[zx]:"fire-fst-compat",[jx]:"fire-vertex","fire-js":"fire-js",[Fx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new Map,$x=new Map,Fh=new Map;function ag(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Fh.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;Fh.set(e,t);for(const n of Vl.values())ag(n,t);for(const n of $x.values())ag(n,t);return!0}function of(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new qo("app","Firebase",Hx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=Ux;function e_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=K0()),!n)throw hr.create("no-options");const s=Vl.get(i);if(s){if(ei(n,s.options)&&ei(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new YI(i);for(const u of Fh.values())o.addComponent(u);const l=new qx(n,r,o);return Vl.set(i,l),l}function t_(t=zh){const e=Vl.get(t);if(!e&&t===zh&&K0())return e_();if(!e)throw hr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let i=(r=Bx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(l.join(" "));return}ts(new ti(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx="firebase-heartbeat-database",Gx=1,No="firebase-heartbeat-store";let Lc=null;function n_(){return Lc||(Lc=cx(Wx,Gx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function Kx(t){try{const n=(await n_()).transaction(No),r=await n.objectStore(No).get(r_(t));return await n.done,r}catch(e){if(e instanceof Ln)Rn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function lg(t,e){try{const r=(await n_()).transaction(No,"readwrite");await r.objectStore(No).put(e,r_(t)),await r.done}catch(n){if(n instanceof Ln)Rn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function r_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=1024,Xx=30;class Yx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ug();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Xx){const o=eS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ug(),{heartbeatsToSend:r,unsentEntries:i}=Jx(this._heartbeatsCache.heartbeats),s=bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rn.warn(n),""}}}function ug(){return new Date().toISOString().substring(0,10)}function Jx(t,e=Qx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zI()?FI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cg(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}function eS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){ts(new ti("platform-logger",e=>new fx(e),"PRIVATE")),ts(new ti("heartbeat",e=>new Yx(e),"PRIVATE")),dr(jh,og,t),dr(jh,og,"esm2017"),dr("fire-js","")}tS("");var nS="firebase",rS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(nS,rS,"app");function af(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iS=i_,s_=new qo("auth","Firebase",i_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new rf("@firebase/auth");function sS(t,...e){Dl.logLevel<=re.WARN&&Dl.warn(`Auth (${ps}): ${t}`,...e)}function Ja(t,...e){Dl.logLevel<=re.ERROR&&Dl.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,...e){throw lf(t,...e)}function un(t,...e){return lf(t,...e)}function o_(t,e,n){const r=Object.assign(Object.assign({},iS()),{[e]:n});return new qo("auth","Firebase",r).create(e,{appName:t.name})}function fr(t){return o_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return s_.create(t,...e)}function Y(t,e,...n){if(!t)throw lf(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ja(e),new Error(e)}function bn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oS(){return hg()==="http:"||hg()==="https:"}function hg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oS()||OI()||"connection"in navigator)?navigator.onLine:!0}function lS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=bI()||LI()}get(){return aS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hS=new Go(3e4,6e4);function yu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ms(t,e,n,r,i={}){return l_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Wo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return DI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&fs(t.emulatorConfig.host)&&(h.credentials="include"),a_.fetch()(await c_(t,t.config.apiHost,n,l),h)})}async function l_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uS),e);try{const i=new dS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Da(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw o_(t,p,h);Nn(t,p)}}catch(i){if(i instanceof Ln)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function u_(t,e,n,r,i={}){const s=await ms(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function c_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?uf(t.config,i):`${t.config.apiScheme}://${i}`;return cS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class dS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),hS.get())})}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(t,e){return ms(t,"POST","/v1/accounts:delete",e)}async function Ol(t,e){return ms(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pS(t,e=!1){const n=ut(t),r=await n.getIdToken(e),i=cf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ao(Mc(i.auth_time)),issuedAtTime:ao(Mc(i.iat)),expirationTime:ao(Mc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mc(t){return Number(t)*1e3}function cf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=W0(n);return i?JSON.parse(i):(Ja("Failed to decode base64 JWT payload"),null)}catch(i){return Ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dg(t){const e=cf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&mS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bo(t,Ol(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?h_(s.providerUserInfo):[],l=vS(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Bh(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function yS(t){const e=ut(t);await Ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function h_(t){return t.map(e=>{var{providerId:n}=e,r=af(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t,e){const n=await l_(t,{},async()=>{const r=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await c_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&fs(t.emulatorConfig.host)&&(u.credentials="include"),a_.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wS(t,e){return ms(t,"POST","/v2/accounts:revokeToken",yu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _S(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $i;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pS(this,e)}reload(){return yS(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await bo(this,fS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,x=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:A,emailVerified:V,isAnonymous:j,providerData:z,stsTokenManager:E}=n;Y(A&&E,e,"internal-error");const v=$i.fromJSON(this.name,E);Y(typeof A=="string",e,"internal-error"),Hn(g,e.name),Hn(m,e.name),Y(typeof V=="boolean",e,"internal-error"),Y(typeof j=="boolean",e,"internal-error"),Hn(S,e.name),Hn(P,e.name),Hn(N,e.name),Hn(D,e.name),Hn(x,e.name),Hn(_,e.name);const w=new Qt({uid:A,auth:e,email:m,emailVerified:V,displayName:g,isAnonymous:j,photoURL:P,phoneNumber:S,tenantId:N,stsTokenManager:v,createdAt:x,lastLoginAt:_});return z&&Array.isArray(z)&&(w.providerData=z.map(I=>Object.assign({},I))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new $i;i.updateFromServerResponse(n);const s=new Qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ll(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?h_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new $i;l.updateFromIdToken(r);const u=new Qt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Bh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new Map;function xn(t){bn(t instanceof Function,"Expected a class definition");let e=fg.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d_.type="NONE";const pg=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Za(this.userKey,i.apiKey,s),this.fullPersistenceKey=Za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ol(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(xn(pg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||xn(pg);const o=Za(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){let g;if(typeof p=="string"){const m=await Ol(e,{idToken:p}).catch(()=>{});if(!m)break;g=await Qt._fromGetAccountInfoResponse(e,m,p)}else g=Qt._fromJSON(e,p);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v_(e))return"Blackberry";if(__(e))return"Webos";if(p_(e))return"Safari";if((e.includes("chrome/")||m_(e))&&!e.includes("edge/"))return"Chrome";if(y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f_(t=lt()){return/firefox\//i.test(t)}function p_(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function m_(t=lt()){return/crios\//i.test(t)}function g_(t=lt()){return/iemobile/i.test(t)}function y_(t=lt()){return/android/i.test(t)}function v_(t=lt()){return/blackberry/i.test(t)}function __(t=lt()){return/webos/i.test(t)}function hf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ES(t=lt()){var e;return hf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TS(){return MI()&&document.documentMode===10}function w_(t=lt()){return hf(t)||y_(t)||__(t)||v_(t)||/windows phone/i.test(t)||g_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e=[]){let n;switch(t){case"Browser":n=mg(lt());break;case"Worker":n=`${mg(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e={}){return ms(t,"GET","/v2/passwordPolicy",yu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=6;class AS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gg(this),this.idTokenSubscription=new gg(this),this.beforeStateQueue=new IS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=s_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ol(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(fr(this));const n=e?ut(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xS(this),n=new AS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vu(t){return ut(t)}class gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=qI(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let df={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kS(t){df=t}function PS(t){return df.loadJS(t)}function RS(){return df.gapiScript}function NS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e){const n=of(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ei(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function VS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DS(t,e,n){const r=vu(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=T_(e),{host:o,port:l}=OS(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(ei(h,r.config.emulator)&&ei(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,fs(o)?(X0(`${s}//${o}${u}`),Y0("Auth",!0)):LS()}function T_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OS(t){const e=T_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yg(o)}}}function yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e){return u_(t,"POST","/v1/accounts:signInWithIdp",yu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="http://localhost";class ni extends I_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=af(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qi(e,n)}buildRequest(){const e={requestUri:MS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends x_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ko{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ko{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ko{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e){return u_(t,"POST","/v1/accounts:signUp",yu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qt._fromIdTokenResponse(e,r,i),o=vg(r);return new _r({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vg(r);return new _r({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t){var e;if(Kt(t.app))return Promise.reject(fr(t));const n=vu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new _r({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await jS(n,{returnSecureToken:!0}),i=await _r._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends Ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ml.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ml(e,n,r,i)}}function S_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ml._fromErrorAndOperation(t,s,e,r):s})}async function FS(t,e,n=!1){const r=await bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(t,e,n=!1){const{auth:r}=t;if(Kt(r.app))return Promise.reject(fr(r));const i="reauthenticate";try{const s=await bo(t,S_(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=cf(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),_r._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(t,e,n=!1){if(Kt(t.app))return Promise.reject(fr(t));const r="signIn",i=await S_(t,r,e),s=await _r._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function $S(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function HS(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function qS(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}const jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jl,"1"),this.storage.removeItem(jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=1e3,GS=10;class C_ extends A_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C_.type="LOCAL";const KS=C_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends A_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k_.type="SESSION";const P_=k_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await QS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_u.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=ff("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function YS(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function JS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eA(){return R_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="firebaseLocalStorageDb",tA=1,zl="firebaseLocalStorage",b_="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wu(t,e){return t.transaction([zl],e?"readwrite":"readonly").objectStore(zl)}function nA(){const t=indexedDB.deleteDatabase(N_);return new Qo(t).toPromise()}function $h(){const t=indexedDB.open(N_,tA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zl,{keyPath:b_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zl)?e(r):(r.close(),await nA(),e(await $h()))})})}async function _g(t,e,n){const r=wu(t,!0).put({[b_]:e,value:n});return new Qo(r).toPromise()}async function rA(t,e){const n=wu(t,!1).get(e),r=await new Qo(n).toPromise();return r===void 0?null:r.value}function wg(t,e){const n=wu(t,!0).delete(e);return new Qo(n).toPromise()}const iA=800,sA=3;class V_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return R_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_u._getInstance(eA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JS(),!this.activeServiceWorker)return;this.sender=new XS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $h();return await _g(e,jl,"1"),await wg(e,jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wu(i,!1).getAll();return new Qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V_.type="LOCAL";const oA=V_;new Go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t,e){return e?xn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends I_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lA(t){return BS(t.auth,new pf(t),t.bypassAuthState)}function uA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),US(n,new pf(t),t.bypassAuthState)}async function cA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),FS(n,new pf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lA;case"linkViaPopup":case"linkViaRedirect":return cA;case"reauthViaPopup":case"reauthViaRedirect":return uA;default:Nn(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new Go(2e3,1e4);class Oi extends D_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hA.get())};e()}}Oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="pendingRedirect",el=new Map;class fA extends D_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{const r=await pA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pA(t,e){const n=yA(e),r=gA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mA(t,e){el.set(t._key(),e)}function gA(t){return xn(t._redirectPersistence)}function yA(t){return Za(dA,t.config.apiKey,t.name)}async function vA(t,e,n=!1){if(Kt(t.app))return Promise.reject(fr(t));const r=vu(t),i=aA(r,e),o=await new fA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=10*60*1e3;class wA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_A&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eg(e))}saveEventToCache(e){this.cachedEventUids.add(Eg(e)),this.lastProcessedEventTime=Date.now()}}function Eg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e={}){return ms(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xA=/^https?/;async function SA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TA(t);for(const n of e)try{if(AA(n))return}catch{}Nn(t,"unauthorized-domain")}function AA(t){const e=Uh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xA.test(n))return!1;if(IA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new Go(3e4,6e4);function Tg(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kA(t){return new Promise((e,n)=>{var r,i,s;function o(){Tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tg(),n(un(t,"network-request-failed"))},timeout:CA.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const l=NS("iframefcb");return cn()[l]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},PS(`${RS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw tl=null,e})}let tl=null;function PA(t){return tl=tl||kA(t),tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=new Go(5e3,15e3),NA="__/auth/iframe",bA="emulator/auth/iframe",VA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OA(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uf(e,bA):`https://${t.config.authDomain}/${NA}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=DA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wo(r).slice(1)}`}async function LA(t){const e=await PA(t),n=cn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:OA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=cn().setTimeout(()=>{s(o)},RA.get());function u(){cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jA=500,zA=600,FA="_blank",UA="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BA(t,e,n,r=jA,i=zA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},MA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=lt().toLowerCase();n&&(l=m_(h)?FA:n),f_(h)&&(e=e||UA,u.scrollbars="yes");const p=Object.entries(u).reduce((m,[S,P])=>`${m}${S}=${P},`,"");if(ES(h)&&l!=="_self")return $A(e||"",l),new Ig(null);const g=window.open(e||"",l,p);Y(g,t,"popup-blocked");try{g.focus()}catch{}return new Ig(g)}function $A(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="__/auth/handler",qA="emulator/auth/handler",WA=encodeURIComponent("fac");async function xg(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof x_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof Ko){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${WA}=${encodeURIComponent(u)}`:"";return`${GA(t)}?${Wo(l).slice(1)}${h}`}function GA({config:t}){return t.emulator?uf(t,qA):`https://${t.authDomain}/${HA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class KA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P_,this._completeRedirectFn=vA,this._overrideRedirectResult=mA}async _openPopup(e,n,r,i){var s;bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xg(e,n,r,Uh(),i);return BA(e,o,ff())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xg(e,n,r,Uh(),i);return YS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LA(e),r=new wA(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jc];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return w_()||p_()||hf()}}const QA=KA;var Sg="@firebase/auth",Ag="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JA(t){ts(new ti("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E_(t)},h=new CS(r,i,s,u);return VS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new ti("auth-internal",e=>{const n=vu(e.getProvider("auth").getImmediate());return(r=>new XA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Sg,Ag,YA(t)),dr(Sg,Ag,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=5*60,eC=Q0("authIdTokenMaxAge")||ZA;let Cg=null;const tC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eC)return;const i=n==null?void 0:n.token;Cg!==i&&(Cg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nC(t=t_()){const e=of(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bS(t,{popupRedirectResolver:QA,persistence:[oA,KS,P_]}),r=Q0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=tC(s.toString());HS(n,o,()=>o(n.currentUser)),$S(n,l=>o(l))}}const i=G0("auth");return i&&DS(n,`http://${i}`),n}function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JA("Browser");var kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,L_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function w(){}w.prototype=v.prototype,E.D=v.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(I,C,k){for(var T=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)T[Le-2]=arguments[Le];return v.prototype[C].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,w){w||(w=0);var I=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)I[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)I[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=E.g[0],w=E.g[1],C=E.g[2];var k=E.g[3],T=v+(k^w&(C^k))+I[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=k+(C^v&(w^C))+I[1]+3905402710&4294967295,k=v+(T<<12&4294967295|T>>>20),T=C+(w^k&(v^w))+I[2]+606105819&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(v^C&(k^v))+I[3]+3250441966&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(k^w&(C^k))+I[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(C^v&(w^C))+I[5]+1200080426&4294967295,k=v+(T<<12&4294967295|T>>>20),T=C+(w^k&(v^w))+I[6]+2821735955&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(v^C&(k^v))+I[7]+4249261313&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(k^w&(C^k))+I[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(C^v&(w^C))+I[9]+2336552879&4294967295,k=v+(T<<12&4294967295|T>>>20),T=C+(w^k&(v^w))+I[10]+4294925233&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(v^C&(k^v))+I[11]+2304563134&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(k^w&(C^k))+I[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=k+(C^v&(w^C))+I[13]+4254626195&4294967295,k=v+(T<<12&4294967295|T>>>20),T=C+(w^k&(v^w))+I[14]+2792965006&4294967295,C=k+(T<<17&4294967295|T>>>15),T=w+(v^C&(k^v))+I[15]+1236535329&4294967295,w=C+(T<<22&4294967295|T>>>10),T=v+(C^k&(w^C))+I[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(v^w))+I[6]+3225465664&4294967295,k=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(k^v))+I[11]+643717713&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(C^k))+I[0]+3921069994&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^k&(w^C))+I[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(v^w))+I[10]+38016083&4294967295,k=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(k^v))+I[15]+3634488961&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(C^k))+I[4]+3889429448&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^k&(w^C))+I[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(v^w))+I[14]+3275163606&4294967295,k=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(k^v))+I[3]+4107603335&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(C^k))+I[8]+1163531501&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(C^k&(w^C))+I[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=k+(w^C&(v^w))+I[2]+4243563512&4294967295,k=v+(T<<9&4294967295|T>>>23),T=C+(v^w&(k^v))+I[7]+1735328473&4294967295,C=k+(T<<14&4294967295|T>>>18),T=w+(k^v&(C^k))+I[12]+2368359562&4294967295,w=C+(T<<20&4294967295|T>>>12),T=v+(w^C^k)+I[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^C)+I[8]+2272392833&4294967295,k=v+(T<<11&4294967295|T>>>21),T=C+(k^v^w)+I[11]+1839030562&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^v)+I[14]+4259657740&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^k)+I[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^C)+I[4]+1272893353&4294967295,k=v+(T<<11&4294967295|T>>>21),T=C+(k^v^w)+I[7]+4139469664&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^v)+I[10]+3200236656&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^k)+I[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^C)+I[0]+3936430074&4294967295,k=v+(T<<11&4294967295|T>>>21),T=C+(k^v^w)+I[3]+3572445317&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^v)+I[6]+76029189&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(w^C^k)+I[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=k+(v^w^C)+I[12]+3873151461&4294967295,k=v+(T<<11&4294967295|T>>>21),T=C+(k^v^w)+I[15]+530742520&4294967295,C=k+(T<<16&4294967295|T>>>16),T=w+(C^k^v)+I[2]+3299628645&4294967295,w=C+(T<<23&4294967295|T>>>9),T=v+(C^(w|~k))+I[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~C))+I[7]+1126891415&4294967295,k=v+(T<<10&4294967295|T>>>22),T=C+(v^(k|~w))+I[14]+2878612391&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~v))+I[5]+4237533241&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~k))+I[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~C))+I[3]+2399980690&4294967295,k=v+(T<<10&4294967295|T>>>22),T=C+(v^(k|~w))+I[10]+4293915773&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~v))+I[1]+2240044497&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~k))+I[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~C))+I[15]+4264355552&4294967295,k=v+(T<<10&4294967295|T>>>22),T=C+(v^(k|~w))+I[6]+2734768916&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~v))+I[13]+1309151649&4294967295,w=C+(T<<21&4294967295|T>>>11),T=v+(C^(w|~k))+I[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=k+(w^(v|~C))+I[11]+3174756917&4294967295,k=v+(T<<10&4294967295|T>>>22),T=C+(v^(k|~w))+I[2]+718787259&4294967295,C=k+(T<<15&4294967295|T>>>17),T=w+(k^(C|~v))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var w=v-this.blockSize,I=this.B,C=this.h,k=0;k<v;){if(C==0)for(;k<=w;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<v;)if(I[C++]=E.charCodeAt(k++),C==this.blockSize){i(this,I),C=0;break}}else for(;k<v;)if(I[C++]=E[k++],C==this.blockSize){i(this,I),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var w=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=w&255,w/=256;for(this.u(E),E=Array(16),v=w=0;4>v;++v)for(var I=0;32>I;I+=8)E[w++]=this.g[v]>>>I&255;return E};function s(E,v){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=v(E)}function o(E,v){this.h=v;for(var w=[],I=!0,C=E.length-1;0<=C;C--){var k=E[C]|0;I&&k==v||(w[C]=k,I=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return D(h(-E));for(var v=[],w=1,I=0;E>=w;I++)v[I]=E/w|0,w*=4294967296;return new o(v,0)}function p(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return D(p(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),I=g,C=0;C<E.length;C+=8){var k=Math.min(8,E.length-C),T=parseInt(E.substring(C,C+k),v);8>k?(k=h(Math.pow(v,k)),I=I.j(k).add(h(T))):(I=I.j(w),I=I.add(h(T)))}return I}var g=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var E=0,v=1,w=0;w<this.g.length;w++){var I=this.i(w);E+=(0<=I?I:4294967296+I)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+D(this).toString(E);for(var v=h(Math.pow(E,6)),w=this,I="";;){var C=V(w,v).g;w=x(w,C.j(v));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=C,P(w))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=x(this,E),N(E)?-1:P(E)?0:1};function D(E){for(var v=E.g.length,w=[],I=0;I<v;I++)w[I]=~E.g[I];return new o(w,~E.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0,C=0;C<=v;C++){var k=I+(this.i(C)&65535)+(E.i(C)&65535),T=(k>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);I=T>>>16,k&=65535,T&=65535,w[C]=T<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function x(E,v){return E.add(D(v))}t.j=function(E){if(P(this)||P(E))return g;if(N(this))return N(E)?D(this).j(D(E)):D(D(this).j(E));if(N(E))return D(this.j(D(E)));if(0>this.l(S)&&0>E.l(S))return h(this.m()*E.m());for(var v=this.g.length+E.g.length,w=[],I=0;I<2*v;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<E.g.length;C++){var k=this.i(I)>>>16,T=this.i(I)&65535,Le=E.i(C)>>>16,en=E.i(C)&65535;w[2*I+2*C]+=T*en,_(w,2*I+2*C),w[2*I+2*C+1]+=k*en,_(w,2*I+2*C+1),w[2*I+2*C+1]+=T*Le,_(w,2*I+2*C+1),w[2*I+2*C+2]+=k*Le,_(w,2*I+2*C+2)}for(I=0;I<v;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=v;I<2*v;I++)w[I]=0;return new o(w,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function A(E,v){this.g=E,this.h=v}function V(E,v){if(P(v))throw Error("division by zero");if(P(E))return new A(g,g);if(N(E))return v=V(D(E),v),new A(D(v.g),D(v.h));if(N(v))return v=V(E,D(v)),new A(D(v.g),v.h);if(30<E.g.length){if(N(E)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var w=m,I=v;0>=I.l(E);)w=j(w),I=j(I);var C=z(w,1),k=z(I,1);for(I=z(I,2),w=z(w,2);!P(I);){var T=k.add(I);0>=T.l(E)&&(C=C.add(w),k=T),I=z(I,1),w=z(w,1)}return v=x(E,C.j(v)),new A(C,v)}for(C=g;0<=E.l(v);){for(w=Math.max(1,Math.floor(E.m()/v.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=h(w),T=k.j(v);N(T)||0<T.l(E);)w-=I,k=h(w),T=k.j(v);P(k)&&(k=m),C=C.add(k),E=x(E,T)}return new A(C,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)&E.i(I);return new o(w,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)|E.i(I);return new o(w,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],I=0;I<v;I++)w[I]=this.i(I)^E.i(I);return new o(w,this.h^E.h)};function j(E){for(var v=E.g.length+1,w=[],I=0;I<v;I++)w[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(w,E.h)}function z(E,v){var w=v>>5;v%=32;for(var I=E.g.length-w,C=[],k=0;k<I;k++)C[k]=0<v?E.i(k+w)>>>v|E.i(k+w+1)<<32-v:E.i(k+w);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,L_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,pr=o}).apply(typeof kg<"u"?kg:typeof self<"u"?self:typeof window<"u"?window:{});var Oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var M_,Ws,j_,nl,Hh,z_,F_,U_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oa=="object"&&Oa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in d))break e;d=d[R]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,y=!1,R={next:function(){if(!y&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return y=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,y),a.apply(c,R)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,m.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,R,b){for(var F=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)F[fe-2]=arguments[fe];return c.prototype[R].apply(y,F)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function D(a,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const R=a.length||0,b=y.length||0;a.length=R+b;for(let F=0;F<b;F++)a[R+F]=y[F]}else a.push(y)}}class x{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function z(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function v(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let d,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(d in y)a[d]=y[d];for(let b=0;b<w.length;b++)d=w[b],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=X;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Le{constructor(){this.h=this.g=null}add(c,d){const y=en.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var en=new x(()=>new Mn,a=>a.reset());class Mn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,U=!1,X=new Le,Z=()=>{const a=l.Promise.resolve(void 0);Re=()=>{a.then(me)}};var me=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){k(d)}var c=en;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}U=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Ft(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{V(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ft.aa.h.call(this)}}P(Ft,Te);var Ut={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Bt="closure_listenable_"+(1e6*Math.random()|0),Fu=0;function hi(a,c,d,y,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=R,this.key=++Fu,this.da=this.fa=!1}function jn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function br(a){this.src=a,this.g={},this.h=0}br.prototype.add=function(a,c,d,y,R){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var F=H(a,c,y,R);return-1<F?(c=a[F],d||(c.fa=!1)):(c=new hi(c,this.src,b,!!y,R),c.fa=d,a.push(c)),c};function di(a,c){var d=c.type;if(d in a.g){var y=a.g[d],R=Array.prototype.indexOf.call(y,c,void 0),b;(b=0<=R)&&Array.prototype.splice.call(y,R,1),b&&(jn(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function H(a,c,d,y){for(var R=0;R<a.length;++R){var b=a[R];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==y)return R}return-1}var W="closure_lm_"+(1e6*Math.random()|0),ue={};function gt(a,c,d,y,R){if(Array.isArray(c)){for(var b=0;b<c.length;b++)gt(a,c[b],d,y,R);return null}return d=Qf(d),a&&a[Bt]?a.K(c,d,h(y)?!!y.capture:!1,R):xt(a,c,d,!1,y,R)}function xt(a,c,d,y,R,b){if(!c)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,fe=Bu(a);if(fe||(a[W]=fe=new br(a)),d=fe.add(c,d,y,F,b),d.proxy)return d;if(y=ws(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)ye||(R=F),R===void 0&&(R=!1),a.addEventListener(c.toString(),y,R);else if(a.attachEvent)a.attachEvent(Kf(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ws(){function a(d){return c.call(a.src,a.listener,d)}const c=vE;return a}function zn(a,c,d,y,R){if(Array.isArray(c))for(var b=0;b<c.length;b++)zn(a,c[b],d,y,R);else y=h(y)?!!y.capture:!!y,d=Qf(d),a&&a[Bt]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=H(b,d,y,R),-1<d&&(jn(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=Bu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=H(c,d,y,R)),(d=-1<a?c[a]:null)&&Uu(d))}function Uu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Bt])di(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(Kf(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Bu(c))?(di(d,a),d.h==0&&(d.src=null,c[W]=null)):jn(a)}}}function Kf(a){return a in ue?ue[a]:ue[a]="on"+a}function vE(a,c){if(a.da)a=!0;else{c=new Ft(c,this);var d=a.listener,y=a.ha||a.src;a.fa&&Uu(a),a=d.call(y,c)}return a}function Bu(a){return a=a[W],a instanceof br?a:null}var $u="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qf(a){return typeof a=="function"?a:(a[$u]||(a[$u]=function(c){return a.handleEvent(c)}),a[$u])}function Je(){se.call(this),this.i=new br(this),this.M=this,this.F=null}P(Je,se),Je.prototype[Bt]=!0,Je.prototype.removeEventListener=function(a,c,d,y){zn(this,a,c,d,y)};function ct(a,c){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var R=c;c=new Te(y,a),I(c,R)}if(R=!0,d)for(var b=d.length-1;0<=b;b--){var F=c.g=d[b];R=ta(F,y,!0,c)&&R}if(F=c.g=a,R=ta(F,y,!0,c)&&R,R=ta(F,y,!1,c)&&R,d)for(b=0;b<d.length;b++)F=c.g=d[b],R=ta(F,y,!1,c)&&R}Je.prototype.N=function(){if(Je.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],y=0;y<d.length;y++)jn(d[y]);delete a.g[c],a.h--}}this.F=null},Je.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},Je.prototype.L=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function ta(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,b=0;b<c.length;++b){var F=c[b];if(F&&!F.da&&F.capture==d){var fe=F.listener,qe=F.ha||F.src;F.fa&&di(a.i,F),R=fe.call(qe,y)!==!1&&R}}return R&&!y.defaultPrevented}function Xf(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Yf(a){a.g=Xf(()=>{a.g=null,a.i&&(a.i=!1,Yf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class _E extends se{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Yf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(a){se.call(this),this.h=a,this.g={}}P(Es,se);var Jf=[];function Zf(a){z(a.g,function(c,d){this.g.hasOwnProperty(d)&&Uu(c)},a),a.g={}}Es.prototype.N=function(){Es.aa.N.call(this),Zf(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hu=l.JSON.stringify,wE=l.JSON.parse,EE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function qu(){}qu.prototype.h=null;function ep(a){return a.h||(a.h=a.i())}function tp(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wu(){Te.call(this,"d")}P(Wu,Te);function Gu(){Te.call(this,"c")}P(Gu,Te);var Vr={},np=null;function na(){return np=np||new Je}Vr.La="serverreachability";function rp(a){Te.call(this,Vr.La,a)}P(rp,Te);function Is(a){const c=na();ct(c,new rp(c))}Vr.STAT_EVENT="statevent";function ip(a,c){Te.call(this,Vr.STAT_EVENT,a),this.stat=c}P(ip,Te);function ht(a){const c=na();ct(c,new ip(c,a))}Vr.Ma="timingevent";function sp(a,c){Te.call(this,Vr.Ma,a),this.size=c}P(sp,Te);function xs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ss(){this.g=!0}Ss.prototype.xa=function(){this.g=!1};function TE(a,c,d,y,R,b){a.info(function(){if(a.g)if(b)for(var F="",fe=b.split("&"),qe=0;qe<fe.length;qe++){var le=fe[qe].split("=");if(1<le.length){var Ze=le[0];le=le[1];var et=Ze.split("_");F=2<=et.length&&et[1]=="type"?F+(Ze+"="+le+"&"):F+(Ze+"=redacted&")}}else F=null;else F=b;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+c+`
`+d+`
`+F})}function IE(a,c,d,y,R,b,F){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+c+`
`+d+`
`+b+" "+F})}function fi(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+SE(a,d)+(y?" "+y:"")})}function xE(a,c){a.info(function(){return"TIMEOUT: "+c})}Ss.prototype.info=function(){};function SE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var R=y[1];if(Array.isArray(R)&&!(1>R.length)){var b=R[0];if(b!="noop"&&b!="stop"&&b!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return Hu(d)}catch{return c}}var ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},op={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ku;function ia(){}P(ia,qu),ia.prototype.g=function(){return new XMLHttpRequest},ia.prototype.i=function(){return{}},Ku=new ia;function Fn(a,c,d,y){this.j=a,this.i=c,this.l=d,this.R=y||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ap}function ap(){this.i=null,this.g="",this.h=!1}var lp={},Qu={};function Xu(a,c,d){a.L=1,a.v=la(yn(c)),a.m=d,a.P=!0,up(a,null)}function up(a,c){a.F=Date.now(),sa(a),a.A=yn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Ip(d.i,"t",y),a.C=0,d=a.j.J,a.h=new ap,a.g=Up(a.j,d?c:null,!a.m),0<a.O&&(a.M=new _E(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,y=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Jf[0]=R.toString()),R=Jf);for(var b=0;b<R.length;b++){var F=gt(d,R[b],y||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Is(),TE(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const c=this.M;c&&vn(a)==3?c.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const et=vn(this.g);var c=this.g.Ba();const gi=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Rp(this.g)))){this.J||et!=4||c==7||(c==8||0>=gi?Is(3):Is(2)),Yu(this);var d=this.g.Z();this.X=d;t:if(cp(this)){var y=Rp(this.g);a="";var R=y.length,b=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),As(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(b&&c==R-1)});y.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,IE(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,qe=this.g;if((fe=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(fe)){var le=fe;break t}}le=null}if(d=le)fi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ju(this,d);else{this.o=!1,this.s=3,ht(12),Dr(this),As(this);break e}}if(this.P){d=!0;let $t;for(;!this.J&&this.C<F.length;)if($t=AE(this,F),$t==Qu){et==4&&(this.s=4,ht(14),d=!1),fi(this.i,this.l,null,"[Incomplete Response]");break}else if($t==lp){this.s=4,ht(15),fi(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else fi(this.i,this.l,$t,null),Ju(this,$t);if(cp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||F.length!=0||this.h.h||(this.s=1,ht(16),d=!1),this.o=this.o&&d,!d)fi(this.i,this.l,F,"[Invalid Chunked Response]"),Dr(this),As(this);else if(0<F.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),ic(Ze),Ze.M=!0,ht(11))}}else fi(this.i,this.l,F,null),Ju(this,F);et==4&&Dr(this),this.o&&!this.J&&(et==4?Mp(this.j,this):(this.o=!1,sa(this)))}else $E(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Dr(this),As(this)}}}catch{}finally{}};function cp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function AE(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?Qu:(d=Number(c.substring(d,y)),isNaN(d)?lp:(y+=1,y+d>c.length?Qu:(c=c.slice(y,y+d),a.C=y+d,c)))}Fn.prototype.cancel=function(){this.J=!0,Dr(this)};function sa(a){a.S=Date.now()+a.I,hp(a,a.I)}function hp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=xs(m(a.ba,a),c)}function Yu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xE(this.i,this.A),this.L!=2&&(Is(),ht(17)),Dr(this),this.s=2,As(this)):hp(this,this.S-a)};function As(a){a.j.G==0||a.J||Mp(a.j,a)}function Dr(a){Yu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Zf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ju(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Zu(d.h,a))){if(!a.K&&Zu(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)pa(d),da(d);else break e;rc(d),ht(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=xs(m(d.Za,d),6e3));if(1>=pp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Lr(d,11)}else if((a.K||d.g==a)&&pa(d),!_(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let le=R[c];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const Ze=le[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=le[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const gi=le[5];gi!=null&&typeof gi=="number"&&0<gi&&(y=1.5*gi,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const $t=a.g;if($t){const ga=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var b=y.h;b.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ec(b,b.h),b.h=null))}if(y.D){const sc=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;sc&&(y.ya=sc,ve(y.I,y.D,sc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var F=a;if(y.qa=Fp(y,y.J?y.ia:null,y.W),F.K){mp(y.h,F);var fe=F,qe=y.L;qe&&(fe.I=qe),fe.B&&(Yu(fe),sa(fe)),y.g=F}else Op(y);0<d.i.length&&fa(d)}else le[0]!="stop"&&le[0]!="close"||Lr(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Lr(d,7):nc(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}Is(4)}catch{}}var CE=class{constructor(a,c){this.g=a,this.map=c}};function dp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pp(a){return a.h?1:a.g?a.g.size:0}function Zu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ec(a,c){a.g?a.g.add(c):a.h=c}function mp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}dp.prototype.cancel=function(){if(this.i=gp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function kE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,y=0;y<d;y++)c.push(a[y]);return c}c=[],d=0;for(y in a)c[d++]=a[y];return c}function PE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const y in a)c[d++]=y;return c}}}function yp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=PE(a),y=kE(a),R=y.length,b=0;b<R;b++)c.call(void 0,y[b],d&&d[b],a)}var vp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),R=null;if(0<=y){var b=a[d].substring(0,y);R=a[d].substring(y+1)}else b=a[d];c(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Or){this.h=a.h,oa(this,a.j),this.o=a.o,this.g=a.g,aa(this,a.s),this.l=a.l;var c=a.i,d=new Ps;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),_p(this,d),this.m=a.m}else a&&(c=String(a).match(vp))?(this.h=!1,oa(this,c[1]||"",!0),this.o=Cs(c[2]||""),this.g=Cs(c[3]||"",!0),aa(this,c[4]),this.l=Cs(c[5]||"",!0),_p(this,c[6]||"",!0),this.m=Cs(c[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}Or.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ks(c,wp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ks(c,wp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ks(d,d.charAt(0)=="/"?VE:bE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ks(d,OE)),a.join("")};function yn(a){return new Or(a)}function oa(a,c,d){a.j=d?Cs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function aa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function _p(a,c,d){c instanceof Ps?(a.i=c,LE(a.i,a.h)):(d||(c=ks(c,DE)),a.i=new Ps(c,a.h))}function ve(a,c,d){a.i.set(c,d)}function la(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Cs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,NE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wp=/[#\/\?@]/g,bE=/[#\?:]/g,VE=/[#\?]/g,DE=/[#\?@]/g,OE=/#/g;function Ps(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&RE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ps.prototype,t.add=function(a,c){Un(this),this.i=null,a=pi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Ep(a,c){Un(a),c=pi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Tp(a,c){return Un(a),c=pi(a,c),a.g.has(c)}t.forEach=function(a,c){Un(this),this.g.forEach(function(d,y){d.forEach(function(R){a.call(c,R,y,this)},this)},this)},t.na=function(){Un(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const R=a[y];for(let b=0;b<R.length;b++)d.push(c[y])}return d},t.V=function(a){Un(this);let c=[];if(typeof a=="string")Tp(this,a)&&(c=c.concat(this.g.get(pi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Un(this),this.i=null,a=pi(this,a),Tp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Ip(a,c,d){Ep(a,c),0<d.length&&(a.i=null,a.g.set(pi(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const b=encodeURIComponent(String(y)),F=this.V(y);for(y=0;y<F.length;y++){var R=b;F[y]!==""&&(R+="="+encodeURIComponent(String(F[y]))),a.push(R)}}return this.i=a.join("&")};function pi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function LE(a,c){c&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(d,y){var R=y.toLowerCase();y!=R&&(Ep(this,y),Ip(this,R,d))},a)),a.j=c}function ME(a,c){const d=new Ss;if(l.Image){const y=new Image;y.onload=S(Bn,d,"TestLoadImage: loaded",!0,c,y),y.onerror=S(Bn,d,"TestLoadImage: error",!1,c,y),y.onabort=S(Bn,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=S(Bn,d,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function jE(a,c){const d=new Ss,y=new AbortController,R=setTimeout(()=>{y.abort(),Bn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(b=>{clearTimeout(R),b.ok?Bn(d,"TestPingServer: ok",!0,c):Bn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Bn(d,"TestPingServer: error",!1,c)})}function Bn(a,c,d,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(d)}catch{}}function zE(){this.g=new EE}function FE(a,c,d){const y=d||"";try{yp(a,function(R,b){let F=R;h(R)&&(F=Hu(R)),c.push(y+b+"="+encodeURIComponent(F))})}catch(R){throw c.push(y+"type="+encodeURIComponent("_badmap")),R}}function ua(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ua,qu),ua.prototype.g=function(){return new ca(this.l,this.j)},ua.prototype.i=function(a){return function(){return a}}({});function ca(a,c){Je.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ca,Je),t=ca.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Rs(this):Ns(this),this.readyState==3&&xp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Rs(this))},t.Qa=function(a){this.g&&(this.response=a,Rs(this))},t.ga=function(){this.g&&Rs(this)};function Rs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ns(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sp(a){let c="";return z(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function tc(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Sp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ve(a,c,d))}function ke(a){Je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ke,Je);var UE=/^https?$/i,BE=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ku.g(),this.v=this.o?ep(this.o):ep(Ku),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Ap(this,b);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)d.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())d.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(BE,c,void 0))||y||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,F]of d)this.g.setRequestHeader(b,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Ap(this,b)}};function Ap(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Cp(a),ha(a)}function Cp(a){a.A||(a.A=!0,ct(a,"complete"),ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ct(this,"complete"),ct(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?kp(this):this.bb())},t.bb=function(){kp(this)};function kp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)Xf(a.Ea,0,a);else if(ct(a,"readystatechange"),vn(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=F===0){var R=String(a.D).match(vp)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),y=!UE.test(R?R.toLowerCase():"")}d=y}if(d)ct(a,"complete"),ct(a,"success");else{a.m=6;try{var b=2<vn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",Cp(a)}}finally{ha(a)}}}}function ha(a,c){if(a.g){Pp(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ct(a,"ready");try{d.onreadystatechange=y}catch{}}}function Pp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),wE(c)}};function Rp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $E(a){const c={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var d=C(a[y]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[R]||[];c[R]=b,b.push(d)}E(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Np(a){this.Aa=0,this.i=[],this.j=new Ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,a),this.cb=bs("retryDelaySeedMs",1e4,a),this.Wa=bs("forwardChannelMaxRetries",2,a),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new dp(a&&a.concurrentRequestLimit),this.Da=new zE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Np.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,y){ht(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=Fp(this,null,this.W),fa(this)};function nc(a){if(bp(a),a.G==3){var c=a.U++,d=yn(a.I);if(ve(d,"SID",a.K),ve(d,"RID",c),ve(d,"TYPE","terminate"),Vs(a,d),c=new Fn(a,a.j,c),c.L=2,c.v=la(yn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Up(c.j,null),c.g.ea(c.v)),c.F=Date.now(),sa(c)}zp(a)}function da(a){a.g&&(ic(a),a.g.cancel(),a.g=null)}function bp(a){da(a),a.u&&(l.clearTimeout(a.u),a.u=null),pa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fa(a){if(!fp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Re||Z(),U||(Re(),U=!0),X.add(c,a),a.B=0}}function HE(a,c){return pp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=xs(m(a.Ga,a,c),jp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Fn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=v(b),I(b,this.S)):b=this.S),this.m!==null||this.O||(R.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Dp(this,R,c),d=yn(this.I),ve(d,"RID",a),ve(d,"CVER",22),this.D&&ve(d,"X-HTTP-Session-Id",this.D),Vs(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(Sp(b)))+"&"+c:this.m&&tc(d,this.m,b)),ec(this.h,R),this.Ua&&ve(d,"TYPE","init"),this.P?(ve(d,"$req",c),ve(d,"SID","null"),R.T=!0,Xu(R,d,null)):Xu(R,d,c),this.G=2}}else this.G==3&&(a?Vp(this,a):this.i.length==0||fp(this.h)||Vp(this))};function Vp(a,c){var d;c?d=c.l:d=a.U++;const y=yn(a.I);ve(y,"SID",a.K),ve(y,"RID",d),ve(y,"AID",a.T),Vs(a,y),a.m&&a.o&&tc(y,a.m,a.o),d=new Fn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Dp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ec(a.h,d),Xu(d,y,c)}function Vs(a,c){a.H&&z(a.H,function(d,y){ve(c,y,d)}),a.l&&yp({},function(d,y){ve(c,y,d)})}function Dp(a,c,d){d=Math.min(a.i.length,d);var y=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let b=-1;for(;;){const F=["count="+d];b==-1?0<d?(b=R[0].g,F.push("ofs="+b)):b=0:F.push("ofs="+b);let fe=!0;for(let qe=0;qe<d;qe++){let le=R[qe].g;const Ze=R[qe].map;if(le-=b,0>le)b=Math.max(0,R[qe].g-100),fe=!1;else try{FE(Ze,F,"req"+le+"_")}catch{y&&y(Ze)}}if(fe){y=F.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,y}function Op(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Re||Z(),U||(Re(),U=!0),X.add(c,a),a.v=0}}function rc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=xs(m(a.Fa,a),jp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Lp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=xs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),da(this),Lp(this))};function ic(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Lp(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=yn(a.qa);ve(c,"RID","rpc"),ve(c,"SID",a.K),ve(c,"AID",a.T),ve(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(c,"TO",a.ja),ve(c,"TYPE","xmlhttp"),Vs(a,c),a.m&&a.o&&tc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=la(yn(c)),d.m=null,d.P=!0,up(d,a)}t.Za=function(){this.C!=null&&(this.C=null,da(this),rc(this),ht(19))};function pa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Mp(a,c){var d=null;if(a.g==c){pa(a),ic(a),a.g=null;var y=2}else if(Zu(a.h,c))d=c.D,mp(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=a.B;y=na(),ct(y,new sp(y,d)),fa(a)}else Op(a);else if(R=c.s,R==3||R==0&&0<c.X||!(y==1&&HE(a,c)||y==2&&rc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function jp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Lr(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),y=a.Xa;const R=!y;y=new Or(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||oa(y,"https"),la(y),R?ME(y.toString(),d):jE(y.toString(),d)}else ht(2);a.G=0,a.l&&a.l.sa(c),zp(a),bp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function zp(a){if(a.G=0,a.ka=[],a.l){const c=gp(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Fp(a,c,d){var y=d instanceof Or?yn(d):new Or(d);if(y.g!="")c&&(y.g=c+"."+y.g),aa(y,y.s);else{var R=l.location;y=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var b=new Or(null);y&&oa(b,y),c&&(b.g=c),R&&aa(b,R),d&&(b.l=d),y=b}return d=a.D,c=a.ya,d&&c&&ve(y,d,c),ve(y,"VER",a.la),Vs(a,y),y}function Up(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ke(new ua({eb:d})):new ke(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bp(){}t=Bp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ma(){}ma.prototype.g=function(a,c){return new St(a,c)};function St(a,c){Je.call(this),this.g=new Np(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new mi(this)}P(St,Je),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){nc(this.g)},St.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Hu(a),a=d);c.i.push(new CE(c.Ya++,a)),c.G==3&&fa(c)},St.prototype.N=function(){this.g.l=null,delete this.j,nc(this.g),delete this.g,St.aa.N.call(this)};function $p(a){Wu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P($p,Wu);function Hp(){Gu.call(this),this.status=1}P(Hp,Gu);function mi(a){this.g=a}P(mi,Bp),mi.prototype.ua=function(){ct(this.g,"a")},mi.prototype.ta=function(a){ct(this.g,new $p(a))},mi.prototype.sa=function(a){ct(this.g,new Hp)},mi.prototype.ra=function(){ct(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,U_=function(){return new ma},F_=function(){return na()},z_=Vr,Hh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,nl=ra,op.COMPLETE="complete",j_=op,tp.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",Je.prototype.listen=Je.prototype.K,Ws=tp,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,M_=ke}).apply(typeof Oa<"u"?Oa:typeof self<"u"?self:typeof window<"u"?window:{});const Pg="@firebase/firestore",Rg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new rf("@firebase/firestore");function _i(){return ri.logLevel}function B(t,...e){if(ri.logLevel<=re.DEBUG){const n=e.map(mf);ri.debug(`Firestore (${gs}): ${t}`,...n)}}function Vn(t,...e){if(ri.logLevel<=re.ERROR){const n=e.map(mf);ri.error(`Firestore (${gs}): ${t}`,...n)}}function wr(t,...e){if(ri.logLevel<=re.WARN){const n=e.map(mf);ri.warn(`Firestore (${gs}): ${t}`,...n)}}function mf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,B_(t,r,n)}function B_(t,e,n){let r=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Vn(r),new Error(r)}function ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||B_(e,i,r)}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class sC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oC{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new $_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class aC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new aC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ng{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ng(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ng(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=cC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function qh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return te(r,i);{const s=H_(),o=hC(s.encode(bg(t,n)),s.encode(bg(e,n)));return o!==0?o:te(r,i)}}n+=r>65535?2:1}return te(t.length,e.length)}function bg(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function hC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return te(t[n],e[n]);return te(t.length,e.length)}function ns(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="__name__";class sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=sn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return te(e.length,n.length)}static compareSegments(e,n){const r=sn.isNumericId(e),i=sn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?sn.extractNumericId(e).compare(sn.extractNumericId(n)):qh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class we extends sn{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends sn{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vg}static keyField(){return new Ke([Vg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(we.fromString(e))}static fromName(e){return new G(we.fromString(e).popFirst(5))}static empty(){return new G(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new we(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fC(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dg(t){if(!G.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Og(t){if(G.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function W_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function yf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function mr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yf(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Xo(t,e){if(!W_(t))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=-62135596800,Mg=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Mg);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Lg)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mg}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xo(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Lg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Oe("string",pe._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new pe(0,0))}static max(){return new J(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=-1;function pC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new Er(i,G.empty(),e)}function mC(t){return new Er(t.readTime,t.key,Vo)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(J.min(),G.empty(),Vo)}static max(){return new Er(J.max(),G.empty(),Vo)}}function gC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==yC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function _C(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Eu.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=-1;function Tu(t){return t==null}function Fl(t){return t===0&&1/t==-1/0}function wC(t){return typeof t=="number"&&Number.isInteger(t)&&!Fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="";function EC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jg(e)),e=TC(t.get(n),e);return jg(e)}function TC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case G_:n+="";break;default:n+=s}}return n}function jg(t){return t+G_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function K_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new La(this.root,e,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new La(this.root,e,this.comparator,!0)}}class La{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fg(this.data.getIterator())}getIteratorFrom(e){return new Fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Ue(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Q_("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const IC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=IC.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="server_timestamp",Y_="__type__",J_="__previous_value__",Z_="__local_write_time__";function _f(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Y_])===null||n===void 0?void 0:n.stringValue)===X_}function Iu(t){const e=t.mapValue.fields[J_];return _f(e)?Iu(e):e}function Do(t){const e=Tr(t.mapValue.fields[Z_].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,r,i,s,o,l,u,h,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p}}const Ul="(default)";class Oo{constructor(e,n){this.projectId=e,this.database=n||Ul}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database===Ul}isEqual(e){return e instanceof Oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="__type__",SC="__max__",Ma={mapValue:{}},tw="__vector__",Bl="value";function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_f(t)?4:CC(t)?9007199254740991:AC(t)?10:11:Q(28295,{value:t})}function mn(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Tr(i.timestampValue),l=Tr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ir(i.bytesValue).isEqual(Ir(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),l=Ne(s.doubleValue);return o===l?Fl(o)===Fl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(zg(o)!==zg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Lo(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ug(t.timestampValue,e.timestampValue);case 4:return Ug(Do(t),Do(e));case 5:return qh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ir(s),u=Ir(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=te(l[h],u[h]);if(p!==0)return p}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=te(Ne(s.latitude),Ne(o.latitude));return l!==0?l:te(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Bg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,p;const g=s.fields||{},m=o.fields||{},S=(l=g[Bl])===null||l===void 0?void 0:l.arrayValue,P=(u=m[Bl])===null||u===void 0?void 0:u.arrayValue,N=te(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:Bg(S,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ma.mapValue&&o===Ma.mapValue)return 0;if(s===Ma.mapValue)return 1;if(o===Ma.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const m=qh(u[g],p[g]);if(m!==0)return m;const S=rs(l[u[g]],h[p[g]]);if(S!==0)return S}return te(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{le:n})}}function Ug(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Tr(t),r=Tr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Bg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=rs(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function is(t){return Wh(t)}function Wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Wh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Wh(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function rl(t){switch(xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Iu(t);return e?16+rl(e):16;case 5:return 2*t.stringValue.length;case 6:return Ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+rl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Rr(r.fields,(s,o)=>{i+=s.length+rl(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function Gh(t){return!!t&&"integerValue"in t}function wf(t){return!!t&&"arrayValue"in t}function $g(t){return!!t&&"nullValue"in t}function Hg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function il(t){return!!t&&"mapValue"in t}function AC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ew])===null||n===void 0?void 0:n.stringValue)===tw}function lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===SC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lo(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=lo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(lo(this.value))}}function nw(t){const e=[];return Rr(t.fields,(n,r)=>{const i=new Ke([n]);if(il(r)){const s=nw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,J.min(),J.min(),J.min(),_t.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,J.min(),J.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,J.min(),J.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.position=e,this.inclusive=n}}function qg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function kC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rw=class{};class je extends rw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RC(e,n,r):n==="array-contains"?new VC(e,r):n==="in"?new DC(e,r):n==="not-in"?new OC(e,r):n==="array-contains-any"?new LC(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NC(e,r):new bC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(rs(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends rw{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new gn(e,n)}matches(e){return iw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function iw(t){return t.op==="and"}function sw(t){return PC(t)&&iw(t)}function PC(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function Kh(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+is(t.value);if(sw(t))return t.filters.map(e=>Kh(e)).join(",");{const e=t.filters.map(n=>Kh(n)).join(",");return`${t.op}(${e})`}}function ow(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&mn(r.value,i.value)}(t,e):t instanceof gn?function(r,i){return i instanceof gn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&ow(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function aw(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(aw).join(" ,")+"}"}(t):"Filter"}class RC extends je{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class NC extends je{constructor(e,n){super(e,"in",n),this.keys=lw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bC extends je{constructor(e,n){super(e,"not-in",n),this.keys=lw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class VC extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wf(n)&&Lo(n.arrayValue,this.value)}}class DC extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class OC extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Lo(this.value.arrayValue,n)}}class LC extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Gg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MC(t,e,n,r,i,s,o)}function Ef(t){const e=ee(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Tu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),e.Pe=n}return e.Pe}function Tf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ow(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wg(t.startAt,e.startAt)&&Wg(t.endAt,e.endAt)}function Qh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function jC(t,e,n,r,i,s,o,l){return new xu(t,e,n,r,i,s,o,l)}function If(t){return new xu(t)}function Kg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zC(t){return t.collectionGroup!==null}function uo(t){const e=ee(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ue(Ke.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Hl(s,r))}),n.has(Ke.keyField().canonicalString())||e.Te.push(new Hl(Ke.keyField(),r))}return e.Te}function hn(t){const e=ee(t);return e.Ie||(e.Ie=FC(e,uo(t))),e.Ie}function FC(t,e){if(t.limitType==="F")return Gg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Hl(i.field,s)});const n=t.endAt?new $l(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $l(t.startAt.position,t.startAt.inclusive):null;return Gg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xh(t,e,n){return new xu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Su(t,e){return Tf(hn(t),hn(e))&&t.limitType===e.limitType}function uw(t){return`${Ef(hn(t))}|lt:${t.limitType}`}function wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>aw(i)).join(", ")}]`),Tu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>is(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>is(i)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Au(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of uo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=qg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,uo(r),i)||r.endAt&&!function(o,l,u){const h=qg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,uo(r),i))}(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cw(t){return(e,n)=>{let r=!1;for(const i of uo(t)){const s=BC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BC(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?rs(u,h):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return K_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=new Ce(G.comparator);function Dn(){return $C}const hw=new Ce(G.comparator);function Gs(...t){let e=hw;for(const n of t)e=e.insert(n.key,n);return e}function dw(t){let e=hw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return co()}function fw(){return co()}function co(){return new li(t=>t.toString(),(t,e)=>t.isEqual(e))}const HC=new Ce(G.comparator),qC=new Ue(G.comparator);function ie(...t){let e=qC;for(const n of t)e=e.add(n);return e}const WC=new Ue(te);function GC(){return WC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fl(e)?"-0":e}}function pw(t){return{integerValue:""+t}}function KC(t,e){return wC(e)?pw(e):xf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this._=void 0}}function QC(t,e,n){return t instanceof Mo?function(i,s){const o={fields:{[Y_]:{stringValue:X_},[Z_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_f(s)&&(s=Iu(s)),s&&(o.fields[J_]=s),{mapValue:o}}(n,e):t instanceof jo?gw(t,e):t instanceof zo?yw(t,e):function(i,s){const o=mw(i,s),l=Qg(o)+Qg(i.Ee);return Gh(o)&&Gh(i.Ee)?pw(l):xf(i.serializer,l)}(t,e)}function XC(t,e,n){return t instanceof jo?gw(t,e):t instanceof zo?yw(t,e):n}function mw(t,e){return t instanceof ql?function(r){return Gh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mo extends Cu{}class jo extends Cu{constructor(e){super(),this.elements=e}}function gw(t,e){const n=vw(e);for(const r of t.elements)n.some(i=>mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends Cu{constructor(e){super(),this.elements=e}}function yw(t,e){let n=vw(e);for(const r of t.elements)n=n.filter(i=>!mn(i,r));return{arrayValue:{values:n}}}class ql extends Cu{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Qg(t){return Ne(t.integerValue||t.doubleValue)}function vw(t){return wf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.field=e,this.transform=n}}function JC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof jo&&i instanceof jo||r instanceof zo&&i instanceof zo?ns(r.elements,i.elements,mn):r instanceof ql&&i instanceof ql?mn(r.Ee,i.Ee):r instanceof Mo&&i instanceof Mo}(t.transform,e.transform)}class ZC{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ku{}function _w(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sf(t.key,Jt.none()):new Yo(t.key,t.data,Jt.none());{const n=t.data,r=_t.empty();let i=new Ue(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new kt(i.toArray()),Jt.none())}}function ek(t,e,n){t instanceof Yo?function(i,s,o){const l=i.value.clone(),u=Yg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(i,s,o){if(!sl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Yg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ww(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof Yo?function(s,o,l,u){if(!sl(s.precondition,o))return l;const h=s.value.clone(),p=Jg(s.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(s,o,l,u){if(!sl(s.precondition,o))return l;const h=Jg(s.fieldTransforms,u,o),p=o.data;return p.setAll(ww(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return sl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function tk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mw(r.transform,i||null);s!=null&&(n===null&&(n=_t.empty()),n.set(r.field,s))}return n||null}function Xg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ns(r,i,(s,o)=>JC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ww(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yg(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,XC(o,l,n[i]))}return r}function Jg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QC(s,o,e))}return r}class Sf extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nk extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ek(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=_w(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>Xg(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>Xg(n,r))}}class Af{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return HC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Af(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,oe;function ok(t){switch(t){case L.OK:return Q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function Ew(t){if(t===void 0)return Vn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ve.OK:return L.OK;case Ve.CANCELLED:return L.CANCELLED;case Ve.UNKNOWN:return L.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return L.INTERNAL;case Ve.UNAVAILABLE:return L.UNAVAILABLE;case Ve.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ve.NOT_FOUND:return L.NOT_FOUND;case Ve.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ve.ABORTED:return L.ABORTED;case Ve.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ve.DATA_LOSS:return L.DATA_LOSS;default:return Q(39323,{code:t})}}(oe=Ve||(Ve={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=new pr([4294967295,4294967295],0);function Zg(t){const e=H_().encode(t),n=new L_;return n.update(e),new Uint8Array(n.digest())}function ey(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new pr([n,r],0),new pr([i,s],0)]}class Cf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=pr.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(pr.fromNumber(r)));return i.compare(ak)===1&&(i=new pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Cf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pu(J.min(),i,new Ce(te),Dn(),ie())}}class Jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jo(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class Tw{constructor(e,n){this.targetId=e,this.De=n}}class Iw{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ty{constructor(){this.ve=0,this.Ce=ny(),this.Fe=Ye.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ie(),n=ie(),r=ie();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new Jo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=ny()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class lk{constructor(e){this.We=e,this.Ge=new Map,this.ze=Dn(),this.je=ja(),this.Je=ja(),this.He=new Ce(te)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(Qh(s))if(r===0){const o=new G(s.path);this.Xe(n,o,ot.newNoDocument(o,J.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ir(r).toUint8Array()}catch(u){if(u instanceof Q_)return wr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Cf(o,i,s)}catch(u){return wr(u instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Qh(l.target)){const u=new G(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,ot.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=ie();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Pu(e,n,this.He,this.ze,r);return this.ze=Dn(),this.je=ja(),this.Je=ja(),this.He=new Ce(te),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new ty,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ue(te),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ue(te),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ty),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ja(){return new Ce(G.comparator)}function ny(){return new Ce(G.comparator)}const uk={asc:"ASCENDING",desc:"DESCENDING"},ck={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hk={and:"AND",or:"OR"};class dk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yh(t,e){return t.useProto3Json||Tu(e)?e:{value:e}}function Wl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fk(t,e){return Wl(t,e.toTimestamp())}function dn(t){return ce(!!t,49232),J.fromTimestamp(function(n){const r=Tr(n);return new pe(r.seconds,r.nanos)}(t))}function kf(t,e){return Jh(t,e).canonicalString()}function Jh(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Sw(t){const e=we.fromString(t);return ce(Rw(e),10190,{key:e.toString()}),e}function Zh(t,e){return kf(t.databaseId,e.path)}function zc(t,e){const n=Sw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Cw(n))}function Aw(t,e){return kf(t.databaseId,e)}function pk(t){const e=Sw(t);return e.length===4?we.emptyPath():Cw(e)}function ed(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cw(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ry(t,e,n){return{name:Zh(t,e),fields:n.value.mapValue.fields}}function mk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(ce(p===void 0||typeof p=="string",58123),Ye.fromBase64String(p||"")):(ce(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ye.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?L.UNKNOWN:Ew(h.code);return new q(p,h.message||"")}(o);n=new Iw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zc(t,r.document.name),s=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):J.min(),l=new _t({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(i,s,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new ol(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zc(t,r.document),s=r.readTime?dn(r.readTime):J.min(),o=ot.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ol([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zc(t,r.document),s=r.removedTargetIds||[];n=new ol([],s,i,null)}else{if(!("filter"in e))return Q(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sk(i,s),l=r.targetId;n=new Tw(l,o)}}return n}function gk(t,e){let n;if(e instanceof Yo)n={update:ry(t,e.key,e.value)};else if(e instanceof Sf)n={delete:Zh(t,e.key)};else if(e instanceof Nr)n={update:ry(t,e.key,e.data),updateMask:Sk(e.fieldMask)};else{if(!(e instanceof nk))return Q(16599,{Rt:e.type});n={verify:Zh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ql)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:fk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function yk(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?dn(i.updateTime):dn(s);return o.isEqual(J.min())&&(o=dn(s)),new ZC(o,i.transformResults||[])}(n,e))):[]}function vk(t,e){return{documents:[Aw(t,e.path)]}}function _k(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Aw(t,i);const s=function(h){if(h.length!==0)return Pw(gn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(p=>function(m){return{field:Ei(m.field),direction:Tk(m.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Yh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:i}}function wk(t){let e=pk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const m=kw(g);return m instanceof gn&&sw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(P){return new Hl(Ti(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,Tu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,S=g.values||[];return new $l(S,m)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const m=!g.before,S=g.values||[];return new $l(S,m)}(n.endAt)),jC(e,i,o,s,l,"F",u,h)}function Ek(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ti(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ti(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ti(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ti(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(Ti(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>kw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function Tk(t){return uk[t]}function Ik(t){return ck[t]}function xk(t){return hk[t]}function Ei(t){return{fieldPath:t.canonicalString()}}function Ti(t){return Ke.fromServerFormat(t.fieldPath)}function Pw(t){return t instanceof je?function(n){if(n.op==="=="){if(Hg(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NAN"}};if($g(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hg(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NAN"}};if($g(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ei(n.field),op:Ik(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(i=>Pw(i));return r.length===1?r[0]:{compositeFilter:{op:xk(n.op),filters:r}}}(t):Q(54877,{filter:t})}function Sk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.gt=e}}function Ck(t){const e=wk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.Dn=new Pk}addToCollectionParentIndex(e,n){return this.Dn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Er.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class Pk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nw=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Nw,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ss(0)}static ur(){return new ss(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="LruGarbageCollector",Rk=1048576;function oy([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class Nk{constructor(e){this.Tr=e,this.buffer=new Ue(oy),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();oy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class bk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){B(sy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vs(n)?B(sy,"Ignoring IndexedDB error during garbage collection: ",n):await ys(n)}await this.Rr(3e5)})}}class Vk{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Eu.ue);const r=new Nk(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(iy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iy):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,o=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(s=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),_i()<=re.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function Dk(t,e){return new Vk(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.changes=new li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ho(r.mutation,i,kt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Hr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Gs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dn();const o=co(),l=function(){return co()}();return n.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Nr)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),ho(p.mutation,h,p.mutation.getFieldMask(),pe.now())):o.set(h.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var g;return l.set(h,new Lk(p,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=co();let i=new Ce((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||kt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const g=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,g=fw();p.forEach(m=>{if(!s.has(m)){const S=_w(n.get(m),r.get(m));S!==null&&g.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Hr());let l=Vo,u=s;return o.next(h=>O.forEach(h,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(p)?O.resolve():this.remoteDocumentCache.getEntry(e,p).next(m=>{u=u.insert(p,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ie())).next(p=>({batchId:l,changes:dw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Gs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(g,m){return new xu(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,ot.newInvalidDocument(p)))});let l=Gs();return o.forEach((u,h)=>{const p=s.get(u);p!==void 0&&ho(p.mutation,h,kt.empty(),pe.now()),Au(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return O.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:dn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:Ck(i.bundledQuery),readTime:dn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.overlays=new Ce(G.comparator),this.kr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Hr(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Hr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Hr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return O.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ik(n,r));let s=this.kr.get(n);s===void 0&&(s=ie(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.qr=new Ue(Be.Qr),this.$r=new Ue(Be.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Be(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new G(new we([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new G(new we([])),r=new Be(n,e),i=new Be(n,e+1);let s=ie();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return G.comparator(e.key,n.key)||te(e.Hr,n.Hr)}static Ur(e,n){return te(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ue(Be.Qr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?vf:this.er-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(te);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),O.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Be(new G(s),0);let l=new Ue(te);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),O.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return O.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Be(n,0),i=this.Yr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.ni=e,this.docs=function(){return new Ce(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||gC(mC(p),r)<=0||(i.has(p.key)||Au(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ri(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $k(this)}getSize(e){return O.resolve(this.size)}}class $k extends Ok{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.persistence=e,this.ii=new li(n=>Ef(n),Tf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.si=0,this.oi=new Pf,this.targetCount=0,this._i=ss.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),O.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.hr(n),O.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.ai={},this.overlays={},this.ui=new Eu(0),this.ci=!1,this.ci=!0,this.li=new Fk,this.referenceDelegate=e(this),this.hi=new Hk(this),this.indexManager=new kk,this.remoteDocumentCache=function(i){return new Bk(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Ak(n),this.Ti=new jk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Uk(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new qk(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return O.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class qk extends vC{constructor(e){super(),this.currentSequenceNumber=e}}class Rf{constructor(e){this.persistence=e,this.Ai=new Pf,this.Ri=null}static Vi(e){return new Rf(e)}get mi(){if(this.Ri)return this.Ri;throw Q(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.mi,r=>{const i=G.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return O.or([()=>O.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Gl{constructor(e,n){this.persistence=e,this.gi=new li(r=>EC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Dk(this,n)}static Vi(e,n){return new Gl(e,n)}Ii(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return O.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),O.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=rl(e.data.value)),n}Sr(e,n,r){return O.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Nf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return jI()?8:_C(lt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Wk;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(_i()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(_i()<=re.DEBUG&&B("QueryEngine","Query:",wi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(_i()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):O.resolve())}ps(e,n){if(Kg(n))return O.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xh(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,Xh(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return Kg(n)||i.isEqual(J.min())?O.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?O.resolve(null):(_i()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wi(n)),this.vs(e,o,n,pC(i,Vo)).next(l=>l))})}bs(e,n){let r=new Ue(cw(e));return n.forEach((i,s)=>{Au(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return _i()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",wi(n)),this.gs.getDocumentsMatchingQuery(e,n,Er.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="LocalStore",Kk=3e8;class Qk{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new Ce(te),this.Ms=new li(s=>Ef(s),Tf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mk(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function Xk(t,e,n,r){return new Qk(t,e,n,r)}async function Vw(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const h of i){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Yk(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const g=h.batch,m=g.keys();let S=O.resolve();return m.forEach(P=>{S=S.next(()=>p.getEntry(u,P)).next(N=>{const D=h.docVersions.get(P);ce(D!==null,48541),N.version.compareTo(D)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),p.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Dw(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function Jk(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((p,g)=>{const m=i.get(g);if(!m)return;l.push(n.hi.removeMatchingKeys(s,p.removedDocuments,g).next(()=>n.hi.addMatchingKeys(s,p.addedDocuments,g)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Ye.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(g,S),function(N,D,x){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Kk?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,S,p)&&l.push(n.hi.updateTargetData(s,S))});let u=Dn(),h=ie();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(Zk(s,o,e.documentUpdates).next(p=>{u=p.Ls,h=p.ks})),!r.isEqual(J.min())){const p=n.hi.getLastRemoteSnapshotVersion(s).next(g=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Fs=i,s))}function Zk(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(bf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function e2(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=vf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function t2(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function td(t,e,n){const r=ee(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vs(o))throw o;B(bf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function ay(t,e,n){const r=ee(t);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const g=ee(u),m=g.Ms.get(p);return m!==void 0?O.resolve(g.Fs.get(m)):g.hi.getTargetData(h,p)}(r,o,hn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ie())).next(l=>(n2(r,UC(e),l),{documents:l,qs:s})))}function n2(t,e,n){let r=t.xs.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class ly{constructor(){this.activeTargetIds=GC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class r2{constructor(){this.Fo=new ly,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ly,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="ConnectivityMonitor";class cy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){B(uy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){B(uy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za=null;function nd(){return za===null?za=function(){return 268435456+Math.round(2147483648*Math.random())}():za++,"0x"+za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="RestConnection",s2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class o2{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Ul?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=nd(),l=this.Go(e,n.toUriEncodedString());B(Fc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),p=fs(h);return this.jo(e,l,u,r,p).then(g=>(B(Fc,`Received RPC '${e}' ${o}: `,g),g),g=>{throw wr(Fc,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=s2[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class l2 extends o2{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=nd();return new Promise((l,u)=>{const h=new M_;h.setWithCredentials(!0),h.listenOnce(j_.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case nl.NO_ERROR:const g=h.getResponseJson();B(rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case nl.TIMEOUT:B(rt,`RPC '${e}' ${o} timed out`),u(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case nl.HTTP_ERROR:const m=h.getStatus();if(B(rt,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const N=function(x){const _=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(P.status);u(new q(N,P.message))}else u(new q(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(L.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{B(rt,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);B(rt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",p,r,15)})}P_(e,n,r){const i=nd(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=U_(),l=F_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");B(rt,`Creating RPC '${e}' stream ${i}: ${p}`,u);const g=o.createWebChannel(p,u);this.T_(g);let m=!1,S=!1;const P=new a2({Ho:D=>{S?B(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(B(rt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),m=!0),B(rt,`RPC '${e}' stream ${i} sending:`,D),g.send(D))},Yo:()=>g.close()}),N=(D,x,_)=>{D.listen(x,A=>{try{_(A)}catch(V){setTimeout(()=>{throw V},0)}})};return N(g,Ws.EventType.OPEN,()=>{S||(B(rt,`RPC '${e}' stream ${i} transport opened.`),P.s_())}),N(g,Ws.EventType.CLOSE,()=>{S||(S=!0,B(rt,`RPC '${e}' stream ${i} transport closed`),P.__(),this.I_(g))}),N(g,Ws.EventType.ERROR,D=>{S||(S=!0,wr(rt,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),P.__(new q(L.UNAVAILABLE,"The operation could not be completed")))}),N(g,Ws.EventType.MESSAGE,D=>{var x;if(!S){const _=D.data[0];ce(!!_,16349);const A=_,V=(A==null?void 0:A.error)||((x=A[0])===null||x===void 0?void 0:x.error);if(V){B(rt,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let z=function(w){const I=Ve[w];if(I!==void 0)return Ew(I)}(j),E=V.message;z===void 0&&(z=L.INTERNAL,E="Unknown error status: "+j+" with message "+V.message),S=!0,P.__(new q(z,E)),g.close()}else B(rt,`RPC '${e}' stream ${i} received:`,_),P.a_(_)}}),N(l,z_.STAT_EVENT,D=>{D.stat===Hh.PROXY?B(rt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Hh.NOPROXY&&B(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){return new dk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="PersistentStream";class Lw{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ow(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return B(hy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(B(hy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class u2 extends Lw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=mk(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?dn(o.readTime):J.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=ed(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Qh(u)?{documents:vk(s,u)}:{query:_k(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=xw(s,o.resumeToken);const h=Yh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Wl(s,o.snapshotVersion.toTimestamp());const h=Yh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Ek(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=ed(this.serializer),n.removeTarget=e,this.k_(n)}}class c2 extends Lw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=yk(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=ed(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gk(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{}class d2 extends h2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Jh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Jh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class f2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Vn(n),this._a=!1):B("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="RemoteStore";class p2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{ui(this)&&(B(ii,"Restarting streams for network reachability change."),await async function(u){const h=ee(u);h.Ia.add(4),await Zo(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Nu(h)}(this))})}),this.Aa=new f2(r,i)}}async function Nu(t){if(ui(t))for(const e of t.da)await e(!0)}async function Zo(t){for(const e of t.da)await e(!1)}function Mw(t,e){const n=ee(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Lf(n)?Of(n):_s(n).x_()&&Df(n,e))}function Vf(t,e){const n=ee(t),r=_s(n);n.Ta.delete(e),r.x_()&&jw(n,e),n.Ta.size===0&&(r.x_()?r.B_():ui(n)&&n.Aa.set("Unknown"))}function Df(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).H_(e)}function jw(t,e){t.Ra.$e(e),_s(t).Y_(e)}function Of(t){t.Ra=new lk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.Aa.aa()}function Lf(t){return ui(t)&&!_s(t).M_()&&t.Ta.size>0}function ui(t){return ee(t).Ia.size===0}function zw(t){t.Ra=void 0}async function m2(t){t.Aa.set("Online")}async function g2(t){t.Ta.forEach((e,n)=>{Df(t,e)})}async function y2(t,e){zw(t),Lf(t)?(t.Aa.la(e),Of(t)):t.Aa.set("Unknown")}async function v2(t,e,n){if(t.Aa.set("Online"),e instanceof Iw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){B(ii,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kl(t,r)}else if(e instanceof ol?t.Ra.Ye(e):e instanceof Tw?t.Ra.it(e):t.Ra.et(e),!n.isEqual(J.min()))try{const r=await Dw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ta.get(h);p&&s.Ta.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=s.Ta.get(u);if(!p)return;s.Ta.set(u,p.withResumeToken(Ye.EMPTY_BYTE_STRING,p.snapshotVersion)),jw(s,u);const g=new tr(p.target,u,h,p.sequenceNumber);Df(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(ii,"Failed to raise snapshot:",r),await Kl(t,r)}}async function Kl(t,e,n){if(!vs(e))throw e;t.Ia.add(1),await Zo(t),t.Aa.set("Offline"),n||(n=()=>Dw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(ii,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Nu(t)})}function Fw(t,e){return e().catch(n=>Kl(t,n,e))}async function bu(t){const e=ee(t),n=Sr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:vf;for(;_2(e);)try{const i=await e2(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,w2(e,i)}catch(i){await Kl(e,i)}Uw(e)&&Bw(e)}function _2(t){return ui(t)&&t.Pa.length<10}function w2(t,e){t.Pa.push(e);const n=Sr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Uw(t){return ui(t)&&!Sr(t).M_()&&t.Pa.length>0}function Bw(t){Sr(t).start()}async function E2(t){Sr(t).na()}async function T2(t){const e=Sr(t);for(const n of t.Pa)e.X_(n.mutations)}async function I2(t,e,n){const r=t.Pa.shift(),i=Af.from(r,e,n);await Fw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bu(t)}async function x2(t,e){e&&Sr(t).Z_&&await async function(r,i){if(function(o){return ok(o)&&o!==L.ABORTED}(i.code)){const s=r.Pa.shift();Sr(r).N_(),await Fw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bu(r)}}(t,e),Uw(t)&&Bw(t)}async function dy(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),B(ii,"RemoteStore received new credentials");const r=ui(n);n.Ia.add(3),await Zo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Nu(n)}async function S2(t,e){const n=ee(t);e?(n.Ia.delete(2),await Nu(n)):e||(n.Ia.add(2),await Zo(n),n.Aa.set("Unknown"))}function _s(t){return t.Va||(t.Va=function(n,r,i){const s=ee(n);return s.ia(),new u2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:m2.bind(null,t),e_:g2.bind(null,t),n_:y2.bind(null,t),J_:v2.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Lf(t)?Of(t):t.Aa.set("Unknown")):(await t.Va.stop(),zw(t))})),t.Va}function Sr(t){return t.ma||(t.ma=function(n,r,i){const s=ee(n);return s.ia(),new c2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:E2.bind(null,t),n_:x2.bind(null,t),ea:T2.bind(null,t),ta:I2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await bu(t)):(await t.ma.stop(),t.Pa.length>0&&(B(ii,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Mf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jf(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),vs(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{static emptySet(e){return new Wi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Gs(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.fa=new Ce(G.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Q(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class os{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new os(e,n,Wi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class C2{constructor(){this.queries=py(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=py(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function py(){return new li(t=>uw(t),Su)}async function k2(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new A2,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=jf(o,`Initialization of query '${wi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&zf(n)}async function P2(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function R2(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&zf(n)}function N2(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function zf(t){t.Da.forEach(e=>{e.next()})}var rd,my;(my=rd||(rd={})).Fa="default",my.Cache="cache";class b2{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==rd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.key=e}}class Hw{constructor(e){this.key=e}}class V2{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ie(),this.mutatedKeys=ie(),this.Xa=cw(e),this.eu=new Wi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new fy,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const m=i.get(p),S=Au(this.query,g)?g:null,P=!!m&&this.mutatedKeys.has(m.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;m&&S?m.data.isEqual(S.data)?P!==N&&(r.track({type:3,doc:S}),D=!0):this.iu(m,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.Xa(S,u)>0||h&&this.Xa(S,h)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),D=!0):m&&!S&&(r.track({type:1,doc:m}),D=!0,(u||h)&&(l=!0)),D&&(S?(o=o.add(S),s=N?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((p,g)=>function(S,P){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{At:D})}};return N(S)-N(P)}(p.type,g.type)||this.Xa(p.doc,g.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new os(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ie(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new Hw(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new $w(r))}),n}uu(e){this.Ha=e.qs,this.Za=ie();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return os.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ff="SyncEngine";class D2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class O2{constructor(e){this.key=e,this.lu=!1}}class L2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new li(l=>uw(l),Su),this.Tu=new Map,this.Iu=new Set,this.du=new Ce(G.comparator),this.Eu=new Map,this.Au=new Pf,this.Ru={},this.Vu=new Map,this.mu=ss.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function M2(t,e,n=!0){const r=Xw(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await qw(r,e,n,!0),i}async function j2(t,e){const n=Xw(t);await qw(n,e,!0,!1)}async function qw(t,e,n,r){const i=await t2(t.localStore,hn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await z2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Mw(t.remoteStore,i),l}async function z2(t,e,n,r,i){t.gu=(g,m,S)=>async function(N,D,x,_){let A=D.view.nu(x);A.Ds&&(A=await ay(N.localStore,D.query,!1).then(({documents:E})=>D.view.nu(E,A)));const V=_&&_.targetChanges.get(D.targetId),j=_&&_.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(A,N.isPrimaryClient,V,j);return yy(N,D.targetId,z._u),z.snapshot}(t,g,m,S);const s=await ay(t.localStore,e,!0),o=new V2(e,s.qs),l=o.nu(s.documents),u=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);yy(t,n,h._u);const p=new D2(e,n,o);return t.Pu.set(e,p),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function F2(t,e,n){const r=ee(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Su(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await td(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Vf(r.remoteStore,i.targetId),id(r,i.targetId)}).catch(ys)):(id(r,i.targetId),await td(r.localStore,i.targetId,!0))}async function U2(t,e){const n=ee(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Vf(n.remoteStore,r.targetId))}async function B2(t,e,n){const r=Q2(t);try{const i=await function(o,l){const u=ee(o),h=pe.now(),p=l.reduce((S,P)=>S.add(P.key),ie());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Dn(),N=ie();return u.Os.getEntries(S,p).next(D=>{P=D,P.forEach((x,_)=>{_.isValidDocument()||(N=N.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(D=>{g=D;const x=[];for(const _ of l){const A=tk(_,g.get(_.key).overlayedDocument);A!=null&&x.push(new Nr(_.key,A,nw(A.value.mapValue),Jt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,x,l)}).next(D=>{m=D;const x=D.applyToLocalDocumentSet(g,N);return u.documentOverlayCache.saveOverlays(S,D.batchId,x)})}).then(()=>({batchId:m.batchId,changes:dw(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new Ce(te)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,n),await ea(r,i.changes),await bu(r.remoteStore)}catch(i){const s=jf(i,"Failed to persist write");n.reject(s)}}async function Ww(t,e){const n=ee(t);try{const r=await Jk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?ce(o.lu,14607):i.removedDocuments.size>0&&(ce(o.lu,42227),o.lu=!1))}),await ea(n,r,e)}catch(r){await ys(r)}}function gy(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let h=!1;u.queries.forEach((p,g)=>{for(const m of g.wa)m.va(l)&&(h=!0)}),h&&zf(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $2(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Ce(G.comparator);o=o.insert(s,ot.newNoDocument(s,J.min()));const l=ie().add(s),u=new Pu(J.min(),new Map,new Ce(te),o,l);await Ww(r,u),r.du=r.du.remove(s),r.Eu.delete(e),Uf(r)}else await td(r.localStore,e,!1).then(()=>id(r,e,n)).catch(ys)}async function H2(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await Yk(n.localStore,e);Kw(n,r,null),Gw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,i)}catch(i){await ys(i)}}async function q2(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ce(g!==null,37113),p=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);Kw(r,e,n),Gw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ea(r,i)}catch(i){await ys(i)}}function Gw(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function Kw(t,e,n){const r=ee(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function id(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||Qw(t,r)})}function Qw(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Vf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Uf(t))}function yy(t,e,n){for(const r of n)r instanceof $w?(t.Au.addReference(r.key,e),W2(t,r)):r instanceof Hw?(B(Ff,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Qw(t,r.key)):Q(19791,{yu:r})}function W2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(B(Ff,"New document in limbo: "+n),t.Iu.add(r),Uf(t))}function Uf(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new G(we.fromString(e)),r=t.mu.next();t.Eu.set(r,new O2(n)),t.du=t.du.insert(n,r),Mw(t.remoteStore,new tr(hn(If(n.path)),r,"TargetPurposeLimboResolution",Eu.ue))}}async function ea(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=Nf.Es(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){const p=ee(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(h,m=>O.forEach(m.Is,S=>p.persistence.referenceDelegate.addReference(g,m.targetId,S)).next(()=>O.forEach(m.ds,S=>p.persistence.referenceDelegate.removeReference(g,m.targetId,S)))))}catch(g){if(!vs(g))throw g;B(bf,"Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const S=p.Fs.get(m),P=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(P);p.Fs=p.Fs.insert(m,N)}}}(r.localStore,s))}async function G2(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){B(Ff,"User change. New user:",e.toKey());const r=await Vw(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(n,r.Bs)}}function K2(t,e){const n=ee(t),r=n.Eu.get(e);if(r&&r.lu)return ie().add(r.key);{let i=ie();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function Xw(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ww.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$2.bind(null,e),e.hu.J_=R2.bind(null,e.eventManager),e.hu.pu=N2.bind(null,e.eventManager),e}function Q2(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q2.bind(null,e),e}class Ql{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ru(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return Xk(this.persistence,new Gk,e.initialUser,this.serializer)}Du(e){return new bw(Rf.Vi,this.serializer)}bu(e){return new r2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ql.provider={build:()=>new Ql};class X2 extends Ql{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ce(this.persistence.referenceDelegate instanceof Gl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new bk(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new bw(r=>Gl.Vi(r,n),this.serializer)}}class sd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G2.bind(null,this.syncEngine),await S2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new C2}()}createDatastore(e){const n=Ru(e.databaseInfo.databaseId),r=function(s){return new l2(s)}(e.databaseInfo);return function(s,o,l,u){return new d2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new p2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>gy(this.syncEngine,n,0),function(){return cy.C()?new cy:new i2}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,p){const g=new L2(i,s,o,l,u,h);return p&&(g.fu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);B(ii,"RemoteStore shutting down."),s.Ia.add(5),await Zo(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sd.provider={build:()=>new sd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="FirestoreClient";class J2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=gf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),B(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Vw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{wr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{B("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{wr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function vy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Z2(t);B(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>dy(e.remoteStore,i)),t._onlineComponents=e}async function Z2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Ar,"Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wr("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new Ql)}}else B(Ar,"Using default OfflineComponentProvider"),await Bc(t,new X2(void 0));return t._offlineComponents}async function Yw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Ar,"Using user provided OnlineComponentProvider"),await vy(t,t._uninitializedComponentsProvider._online)):(B(Ar,"Using default OnlineComponentProvider"),await vy(t,new sd))),t._onlineComponents}function eP(t){return Yw(t).then(e=>e.syncEngine)}async function _y(t){const e=await Yw(t),n=e.eventManager;return n.onListen=M2.bind(null,e.syncEngine),n.onUnlisten=F2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=j2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=U2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="firestore.googleapis.com",Ey=!0;class Ty{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zw,this.ssl=Ey}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ey;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rk)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ty({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ty(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iC;switch(r.type){case"firstParty":return new lC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wy.get(n);r&&(B("ComponentProvider","Removing Datastore"),wy.delete(n),r.terminate())}(this),Promise.resolve()}}function tP(t,e,n,r={}){var i;t=mr(t,Vu);const s=fs(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(X0(`https://${u}`),Y0("Firestore",!0)),o.host!==Zw&&o.host!==u&&wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!ei(h,l)&&(t._setSettings(h),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=it.MOCK_USER;else{p=PI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new it(m)}t._authCredentials=new sC(new $_(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Du(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}toJSON(){return{type:Fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Xo(n,Fe._jsonSchema))return new Fe(e,r||null,new G(we.fromString(n.referencePath)))}}Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:Oe("string",Fe._jsonSchemaVersion),referencePath:Oe("string")};class gr extends Du{constructor(e,n,r){super(e,n,If(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new G(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Li(t,e,...n){if(t=ut(t),q_("collection","path",e),t instanceof Vu){const r=we.fromString(e,...n);return Og(r),new gr(t,null,r)}{if(!(t instanceof Fe||t instanceof gr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Og(r),new gr(t.firestore,null,r)}}function si(t,e,...n){if(t=ut(t),arguments.length===1&&(e=gf.newId()),q_("doc","path",e),t instanceof Vu){const r=we.fromString(e,...n);return Dg(r),new Fe(t,null,new G(r))}{if(!(t instanceof Fe||t instanceof gr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Dg(r),new Fe(t.firestore,t instanceof gr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="AsyncQueue";class xy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ow(this,"async_queue_retry"),this.oc=()=>{const r=Uc();r&&B(Iy,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Uc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Gr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!vs(e))throw e;B(Iy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Vn("INTERNAL UNHANDLED ERROR: ",Sy(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Mf.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&Q(47125,{hc:Sy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Sy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class as extends Vu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new xy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xy(e),this._firestoreClient=void 0,await e}}}function ls(t,e){const n=typeof t=="object"?t:t_(),r=typeof t=="string"?t:Ul,i=of(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=CI("firestore");s&&tP(i,...s)}return i}function eE(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||nP(t),t._firestoreClient}function nP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,p){return new xC(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Jw(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new J2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(Ye.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xo(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:Oe("string",Ot._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(Xo(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:Oe("string",fn._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xo(e,pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new pn(e.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pn._jsonSchemaVersion="firestore/vectorValue/1.0",pn._jsonSchema={type:Oe("string",pn._jsonSchemaVersion),vectorValues:Oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=/^__.*__$/;class iP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class tE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ec:t})}}class Bf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Bf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Xl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(nE(this.Ec)&&rP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class sP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ru(e)}Dc(e,n,r,i=!1){return new Bf({Ec:e,methodName:n,bc:r,path:Ke.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rE(t){const e=t._freezeSettings(),n=Ru(t._databaseId);return new sP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oP(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);Hf("Data must be an object, but it was:",o,r);const l=iE(r,o);let u,h;if(s.merge)u=new kt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const m=od(e,g,n);if(!o.contains(m))throw new q(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);oE(p,m)||p.push(m)}u=new kt(p),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new iP(new _t(l),u,h)}class Mu extends Lu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mu}}class $f extends Lu{_toFieldTransform(e){return new YC(e.path,new Mo)}isEqual(e){return e instanceof $f}}function aP(t,e,n,r){const i=t.Dc(1,e,n);Hf("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();Rr(r,(u,h)=>{const p=qf(e,u,n);h=ut(h);const g=i.gc(p);if(h instanceof Mu)s.push(p);else{const m=ju(h,g);m!=null&&(s.push(p),o.set(p,m))}});const l=new kt(s);return new tE(o,l,i.fieldTransforms)}function lP(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[od(e,r,n)],u=[i];if(s.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(od(e,s[m])),u.push(s[m+1]);const h=[],p=_t.empty();for(let m=l.length-1;m>=0;--m)if(!oE(h,l[m])){const S=l[m];let P=u[m];P=ut(P);const N=o.gc(S);if(P instanceof Mu)h.push(S);else{const D=ju(P,N);D!=null&&(h.push(S),p.set(S,D))}}const g=new kt(h);return new tE(p,g,o.fieldTransforms)}function ju(t,e){if(sE(t=ut(t)))return Hf("Unsupported field value:",e,t),iE(t,e);if(t instanceof Lu)return function(r,i){if(!nE(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ju(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return KC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:Wl(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wl(i.serializer,s)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:xw(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof pn)return function(o,l){return{mapValue:{fields:{[ew]:{stringValue:tw},[Bl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return xf(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${yf(r)}`)}(t,e)}function iE(t,e){const n={};return K_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,i)=>{const s=ju(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof fn||t instanceof Ot||t instanceof Fe||t instanceof Lu||t instanceof pn)}function Hf(t,e,n){if(!sE(n)||!W_(n)){const r=yf(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function od(t,e,n){if((e=ut(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return qf(t,e);throw Xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const uP=new RegExp("[~\\*/\\[\\]]");function qf(t,e,n){if(e.search(uP)>=0)throw Xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch{throw Xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function oE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cP extends aE{data(){return super.data()}}function lE(t,e){return typeof e=="string"?qf(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dP{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Bl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new pn(s)}convertGeoPoint(e){return new fn(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Iu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);ce(Rw(r),9688,{name:e});const i=new Oo(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kr extends aE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Kr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Kr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Kr._jsonSchema={type:Oe("string",Kr._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class al extends Kr{data(e={}){return super.data(e)}}class Gi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new al(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new al(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new al(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:pP(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}Gi._jsonSchemaVersion="firestore/querySnapshot/1.0",Gi._jsonSchema={type:Oe("string",Gi._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class uE extends dP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function zu(t,e,n,...r){t=mr(t,Fe);const i=mr(t.firestore,as),s=rE(i);let o;return o=typeof(e=ut(e))=="string"||e instanceof Ou?lP(s,"updateDoc",t._key,e,n,r):aP(s,"updateDoc",t._key,e),Wf(i,[o.toMutation(t._key,Jt.exists(!0))])}function cE(t){return Wf(mr(t.firestore,as),[new Sf(t._key,Jt.none())])}function Yl(t,e){const n=mr(t.firestore,as),r=si(t),i=fP(t.converter,e);return Wf(n,[oP(rE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function Cy(t,...e){var n,r,i;t=ut(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ay(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ay(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,p;if(t instanceof Fe)h=mr(t.firestore,as),p=If(t._key.path),u={next:g=>{e[o]&&e[o](mP(h,t,g))},error:e[o+1],complete:e[o+2]};else{const g=mr(t,Du);h=mr(g.firestore,as),p=g._query;const m=new uE(h);u={next:S=>{e[o]&&e[o](new Gi(h,m,g,S))},error:e[o+1],complete:e[o+2]},hP(t._query)}return function(m,S,P,N){const D=new Y2(N),x=new b2(S,D,P);return m.asyncQueue.enqueueAndForget(async()=>k2(await _y(m),x)),()=>{D.Ou(),m.asyncQueue.enqueueAndForget(async()=>P2(await _y(m),x))}}(eE(h),p,l,u)}function Wf(t,e){return function(r,i){const s=new Gr;return r.asyncQueue.enqueueAndForget(async()=>B2(await eP(r),i,s)),s.promise}(eE(t),e)}function mP(t,e,n){const r=n.docs.get(e._key),i=new uE(t);return new Kr(t,i,e._key,r,new Qs(n.hasPendingWrites,n.fromCache),e.converter)}function Jl(){return new $f("serverTimestamp")}(function(e,n=!0){(function(i){gs=i})(ps),ts(new ti("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new as(new oC(r.getProvider("auth-internal")),new uC(o,r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(h.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),dr(Pg,Rg,e),dr(Pg,Rg,"esm2017")})();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=K.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>K.createElement("svg",{ref:u,...yP,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:hE("lucide",i),...l},[...o.map(([h,p])=>K.createElement(h,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(t,e)=>{const n=K.forwardRef(({className:r,...i},s)=>K.createElement(vP,{ref:s,iconNode:e,className:hE(`lucide-${gP(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=he("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=he("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=he("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=he("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=he("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=he("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=he("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=he("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=he("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=he("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=he("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=he("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=he("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=he("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=he("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=he("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=he("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=he("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=he("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=he("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=he("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=he("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=he("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=he("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),DP={apiKey:"AIzaSyCEaVNk-ccwOZ3mzDiITAztK0l4Qq6Cu2Y",authDomain:"legajosonline-959f6.firebaseapp.com",projectId:"legajosonline-959f6",storageBucket:"legajosonline-959f6.firebasestorage.app",messagingSenderId:"753392336661",appId:"1:753392336661:web:b2d23e3cc6aae7a0c4331c",measurementId:"G-JVM29M5BHC"},nn="bacarpass-v1",gE=e_(DP),Ny=nC(gE),vi=ls(gE),yE=t=>{try{return t?`https://www.google.com/s2/favicons?domain=${new URL(t.includes("://")?t:`https://${t}`).hostname}&sz=64`:null}catch{return null}},OP=t=>{let e=0;return t.length>5&&(e+=20),t.length>10&&(e+=30),/[A-Z]/.test(t)&&(e+=15),/[0-9]/.test(t)&&(e+=15),/[^A-Za-z0-9]/.test(t)&&(e+=20),Math.min(100,e)};function LP(){var di;const[t,e]=K.useState(null),[n,r]=K.useState(null),[i,s]=K.useState("login"),[o,l]=K.useState(null),[u,h]=K.useState(null),[p,g]=K.useState(null),[m,S]=K.useState(!1),[P,N]=K.useState([]),[D,x]=K.useState([]),[_,A]=K.useState(!0),[V,j]=K.useState(""),[z,E]=K.useState(!1),[v,w]=K.useState(null),[I,C]=K.useState(!1),[k,T]=K.useState(!1),[Le,en]=K.useState(!1),[Mn,Re]=K.useState(!1),[U,X]=K.useState(!1),[Z,me]=K.useState(null),[se,Te]=K.useState(null);K.useEffect(()=>{(async()=>{try{await zS(Ny)}catch(ue){console.error("Auth error:",ue)}})();const W=qS(Ny,ue=>{e(ue)});return()=>W()},[]),K.useEffect(()=>{if(!t)return;const H=Li(vi,"artifacts",nn,"public","data","app_users"),W=Cy(H,xt=>{const ws=xt.docs.map(zn=>({id:zn.id,...zn.data()}));N(ws),A(!1)},xt=>console.error("Error fetching users:",xt)),ue=Li(vi,"artifacts",nn,"public","data","passwords"),gt=Cy(ue,xt=>{const ws=xt.docs.map(zn=>({id:zn.id,...zn.data()}));x(ws)},xt=>console.error("Error fetching passwords:",xt));return()=>{W(),gt()}},[t]);const ye=(H,W)=>{Te({msg:H,type:W}),setTimeout(()=>Te(null),3e3)},Ft=(H,W)=>{const ue=P.find(gt=>gt.username.toLowerCase()===H.toLowerCase()&&gt.pin===W);ue?(r(ue),s("passwords"),h(null),l(ue.username),S(!1),g(null),ye(`Bienvenido, ${ue.fullName}`,"success")):ye("Credenciales inválidas","error")},Ut=async H=>{if(n)try{await zu(si(vi,"artifacts",nn,"public","data","app_users",n.id),{pin:H}),r({...n,pin:H}),ye("PIN actualizado correctamente","success"),T(!1)}catch(W){console.error(W),ye("Error al actualizar PIN","error")}},Bt=async(H,W,ue,gt)=>{if(P.some(xt=>xt.username.toLowerCase()===W.toLowerCase())){ye("El usuario ya existe","error");return}try{await Yl(Li(vi,"artifacts",nn,"public","data","app_users"),{fullName:H,username:W,pin:ue,area:gt,role:"user",allowedTags:[W,gt],createdAt:Jl()}),ye("Cuenta creada con éxito. Inicia sesión.","success"),s("login")}catch(xt){console.error(xt),ye("Error al crear cuenta","error")}},Fu=async()=>{if(!(P.length>0))try{await Yl(Li(vi,"artifacts",nn,"public","data","app_users"),{username:"admin",pin:"1234",fullName:"Super Admin",role:"admin",area:"Sistemas",allowedTags:["ALL"],createdAt:Jl()}),ye('Admin creado: Usuario "admin", PIN "1234"',"success")}catch(H){console.error(H),ye("Error creando admin","error")}},hi=K.useMemo(()=>{const H={};return D.forEach(W=>{H[W.createdBy]||(H[W.createdBy]=new Set),H[W.createdBy].add(W.tag)}),H},[D]),jn=K.useMemo(()=>{if(!n)return[];let H=D;if(n.role!=="admin"&&(H=H.filter(W=>{var ue;return W.createdBy===n.username||((ue=W.sharedAccess)==null?void 0:ue.some(gt=>gt.targetUser===n.username))})),m?H=H.filter(W=>{var ue;return(ue=W.sharedAccess)==null?void 0:ue.some(gt=>gt.targetUser===n.username)}):o&&(H=H.filter(W=>W.createdBy===o),u&&(H=H.filter(W=>W.tag===u))),V){const W=V.toLowerCase();H=H.filter(ue=>ue.title.toLowerCase().includes(W)||ue.tag.toLowerCase().includes(W)||ue.username.toLowerCase().includes(W))}return H},[D,n,o,u,m,V]),br=({isMobile:H=!1})=>f.jsxs("nav",{className:`p-4 space-y-6 ${H?"mt-16":""}`,children:[f.jsxs("div",{children:[f.jsx("p",{className:"px-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2",children:"Personal"}),f.jsxs("div",{className:"space-y-1",children:[f.jsx(Mr,{icon:f.jsx(kP,{size:18}),label:"Mi Bóveda",active:i==="passwords"&&o===(n==null?void 0:n.username)&&!m,onClick:()=>{s("passwords"),l((n==null?void 0:n.username)||null),h(null),S(!1),H&&Re(!1)}}),f.jsx(Mr,{icon:f.jsx(us,{size:18}),label:"Compartidos conmigo",active:i==="passwords"&&m,onClick:()=>{s("passwords"),S(!0),l(null),h(null),H&&Re(!1)}}),n&&hi[n.username]&&Array.from(hi[n.username]).map(W=>f.jsx("div",{className:"pl-4",children:f.jsx(Mr,{icon:f.jsx(fo,{size:14}),label:W,active:i==="passwords"&&o===n.username&&u===W,onClick:()=>{s("passwords"),l(n.username),h(W),S(!1),H&&Re(!1)},small:!0})},W))]})]}),f.jsxs("div",{children:[f.jsx("p",{className:"px-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 mt-6",children:"Soporte"}),f.jsx(Mr,{icon:f.jsx(fE,{size:18}),label:"Guía de Uso",onClick:()=>{en(!0),H&&Re(!1)}})]}),(n==null?void 0:n.role)==="admin"&&f.jsxs("div",{children:[f.jsx("p",{className:"px-4 text-[10px] font-bold text-red-500 uppercase tracking-wider mb-2 mt-6 border-t border-zinc-800 pt-4",children:"Administración"}),f.jsxs("div",{className:"space-y-1",children:[f.jsx(Mr,{icon:f.jsx(mE,{size:18}),label:"Gestionar Personal",active:i==="users",onClick:()=>{s("users"),H&&Re(!1)}}),f.jsxs("div",{className:"mt-4",children:[f.jsx("p",{className:"px-4 text-[10px] font-bold text-zinc-600 uppercase tracking-wider mb-2",children:"Bóvedas de Empleados"}),P.filter(W=>W.username!==n.username).map(W=>f.jsxs("div",{children:[f.jsx(Mr,{icon:f.jsx(bP,{size:16}),label:W.fullName,active:o===W.username,onClick:()=>{p===W.username?g(null):(g(W.username),s("passwords"),l(W.username),h(null),S(!1),H&&Re(!1))},hasSubmenu:!0,isOpen:p===W.username}),p===W.username&&f.jsx("div",{className:"ml-4 border-l border-zinc-800 pl-2 mt-1 space-y-1 animate-in slide-in-from-left-2 fade-in duration-200",children:hi[W.username]?Array.from(hi[W.username]).map(ue=>f.jsx(Mr,{icon:f.jsx(fo,{size:14}),label:ue,active:o===W.username&&u===ue,onClick:()=>{s("passwords"),l(W.username),h(ue),H&&Re(!1)},small:!0},`${W.username}-${ue}`)):f.jsx("div",{className:"text-[10px] text-zinc-600 px-3 py-1 italic",children:"Sin carpetas"})})]},W.id))]})]})]})]});return _?f.jsx("div",{className:"min-h-screen bg-zinc-950 flex items-center justify-center text-red-700",children:f.jsxs("div",{className:"animate-pulse flex flex-col items-center",children:[f.jsx(Xs,{size:48}),f.jsx("span",{className:"mt-4 text-zinc-400",children:"Cargando BacarPass..."})]})}):n?f.jsxs("div",{className:"min-h-screen bg-zinc-950 text-zinc-100 flex font-sans relative overflow-x-hidden",children:[f.jsxs("aside",{className:"w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between hidden md:flex z-10",children:[f.jsxs("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:[f.jsxs("div",{className:"h-20 flex items-center px-6 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10",children:[f.jsx(Xs,{className:"w-8 h-8 text-red-600 mr-3"}),f.jsx("span",{className:"font-bold text-xl tracking-tight",children:"BacarPass"})]}),f.jsx(br,{})]}),f.jsxs("div",{className:"p-4 border-t border-zinc-800 bg-zinc-900",children:[f.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[f.jsx("div",{className:"w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 font-bold border border-red-900/50 shrink-0",children:n.fullName.charAt(0)}),f.jsxs("div",{className:"overflow-hidden",children:[f.jsx("p",{className:"text-sm font-medium truncate",children:n.fullName}),f.jsxs("button",{onClick:()=>T(!0),className:"text-xs text-zinc-500 hover:text-red-400 flex items-center gap-1 transition-colors mt-0.5",children:[f.jsx(Zl,{size:10})," Cambiar PIN"]})]})]}),f.jsxs("button",{onClick:()=>r(null),className:"w-full flex items-center justify-center space-x-2 text-zinc-400 hover:text-white hover:bg-zinc-800 p-2 rounded-lg transition-colors",children:[f.jsx(Py,{size:18}),f.jsx("span",{children:"Cerrar Sesión"})]})]})]}),f.jsxs("div",{className:"md:hidden fixed top-0 w-full bg-zinc-900 border-b border-zinc-800 z-30 flex justify-between items-center p-4 h-16",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("button",{onClick:()=>Re(!0),className:"text-zinc-400 hover:text-white p-1",children:f.jsx(PP,{size:24})}),f.jsx(Xs,{className:"w-6 h-6 text-red-600"}),f.jsx("span",{className:"font-bold text-lg",children:"BacarPass"})]}),f.jsx("button",{onClick:()=>r(null),className:"text-zinc-500 hover:text-red-400 p-1",children:f.jsx(Py,{size:22})})]}),f.jsx("div",{className:`md:hidden fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${Mn?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>Re(!1),"aria-hidden":"true"}),f.jsxs("aside",{className:`md:hidden fixed top-0 left-0 w-4/5 max-w-xs h-full bg-zinc-900 border-r border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${Mn?"translate-x-0":"-translate-x-full"}`,children:[f.jsxs("div",{className:"flex-1 overflow-y-auto custom-scrollbar relative",children:[f.jsx("button",{onClick:()=>Re(!1),className:"absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800/50 p-2 rounded-full z-20",children:f.jsx(VP,{size:20})}),f.jsx(br,{isMobile:!0})]}),f.jsx("div",{className:"p-4 border-t border-zinc-800 bg-zinc-900/95",children:f.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[f.jsx("div",{className:"w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center text-red-500 font-bold border border-red-900/50 shrink-0 text-lg",children:n.fullName.charAt(0)}),f.jsxs("div",{className:"overflow-hidden",children:[f.jsx("p",{className:"text-base font-medium truncate",children:n.fullName}),f.jsxs("button",{onClick:()=>{T(!0),Re(!1)},className:"text-sm text-zinc-500 hover:text-red-400 flex items-center gap-1 transition-colors mt-1",children:[f.jsx(Zl,{size:12})," Cambiar PIN"]})]})]})})]}),f.jsxs("main",{className:"flex-1 overflow-y-auto p-4 pt-6 md:p-8 mt-16 md:mt-0",children:[f.jsxs("header",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8",children:[f.jsxs("div",{children:[f.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white flex items-center gap-2 truncate",children:i==="passwords"?f.jsxs(f.Fragment,{children:[m?f.jsx(us,{className:"text-blue-500 shrink-0",size:20}):f.jsx(Gf,{className:"text-red-600 shrink-0",size:20}),f.jsx("span",{className:"truncate",children:m?"Compartidos conmigo":o===n.username?"Mi Bóveda":`Bóveda de ${((di=P.find(H=>H.username===o))==null?void 0:di.fullName)||o}`}),u&&f.jsxs("span",{className:"text-zinc-500 text-lg font-normal flex items-center truncate",children:[" ",f.jsx(ad,{size:16,className:"mx-1 shrink-0"})," ",u]})]}):"Gestión de Personal"}),f.jsx("p",{className:"text-zinc-500 text-sm mt-1 truncate",children:i==="passwords"?u?`Carpeta: ${u}`:`Viendo ${jn.length} credenciales`:"Administrar accesos, roles y áreas"})]}),i==="passwords"&&!m&&(o===n.username||n.role==="admin")&&f.jsxs("div",{className:"flex gap-3",children:[f.jsxs("div",{className:"relative flex-1 md:flex-none",children:[f.jsx(RP,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4"}),f.jsx("input",{type:"text",placeholder:"Buscar...",value:V,onChange:H=>j(H.target.value),className:"bg-zinc-900 border border-zinc-800 text-zinc-300 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-red-800 w-full md:w-64 transition-colors text-sm"})]}),o===n.username&&f.jsxs("button",{onClick:()=>{w(null),E(!0)},className:"bg-red-800 hover:bg-red-700 text-white px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-red-900/20 shrink-0",children:[f.jsx(Ry,{size:18}),f.jsx("span",{className:"hidden md:inline",children:"Nueva"})]})]}),i==="users"&&n.role==="admin"&&f.jsxs("button",{onClick:()=>C(!0),className:"bg-zinc-100 hover:bg-white text-zinc-900 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-medium text-sm md:text-base w-full md:w-auto justify-center",children:[f.jsx(Ry,{size:18}),f.jsx("span",{children:"Nuevo Usuario"})]})]}),i==="passwords"?f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4",children:[jn.map(H=>f.jsx(FP,{data:H,currentUser:n,onNotify:W=>ye(W,"success"),onDelete:async()=>{window.confirm("¿Borrar contraseña?")&&(await cE(si(vi,"artifacts",nn,"public","data","passwords",H.id)),ye("Eliminado","success"))},onEdit:()=>{w(H),E(!0)},onShare:()=>{me(H),X(!0)}},H.id)),jn.length===0&&f.jsxs("div",{className:"col-span-full py-12 flex flex-col items-center justify-center text-zinc-600 bg-zinc-900/50 rounded-xl border border-dashed border-zinc-800 text-center px-4",children:[f.jsx(fo,{size:48,className:"mb-4 opacity-20"}),f.jsx("p",{children:"No hay elementos en esta vista."}),m&&f.jsx("p",{className:"text-xs mt-2",children:"Nadie te ha compartido contraseñas aún."})]})]}):f.jsx(UP,{users:P,currentUserId:n.id,appId:nn,onNotify:ye})]}),z&&f.jsx(BP,{onClose:()=>{E(!1),w(null)},currentUser:n,appId:nn,initialData:v,currentFolder:u,onSuccess:H=>ye(H,"success")}),I&&f.jsx($P,{onClose:()=>C(!1),appId:nn,onSuccess:H=>ye(H,"success")}),U&&Z&&f.jsx(HP,{onClose:()=>{X(!1),me(null)},appId:nn,passwordData:Z,users:P,onSuccess:H=>ye(H,"success")}),k&&f.jsx(qP,{onClose:()=>T(!1),onSave:Ut,realCurrentPin:n.pin}),Le&&f.jsx(MP,{onClose:()=>en(!1)}),se&&f.jsx("div",{className:`fixed bottom-4 right-4 left-4 md:left-auto px-6 py-3 rounded-lg shadow-lg text-white font-medium z-[100] animate-fade-in-up ${se.type==="success"?"bg-emerald-600":"bg-red-600"} text-center md:text-left`,children:f.jsxs("div",{className:"flex items-center justify-center md:justify-start gap-2",children:[se.type==="success"?f.jsx(dE,{size:18}):f.jsx(ci,{size:18}),se.msg]})})]}):f.jsxs("div",{className:"min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none"}),f.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none"}),f.jsxs("div",{className:"w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl relative z-10",children:[f.jsx("div",{className:"flex justify-center mb-8",children:f.jsx("div",{className:"p-4 bg-red-900/20 rounded-full border border-red-900/30",children:f.jsx(Xs,{className:"w-12 h-12 text-red-600"})})}),f.jsx("h1",{className:"text-2xl font-bold text-center text-zinc-100 mb-2",children:"BacarPass"}),f.jsx("p",{className:"text-zinc-500 text-center mb-8",children:"Gestión de Accesos Corporativos"}),P.length===0?f.jsxs("div",{className:"text-center",children:[f.jsx("p",{className:"text-yellow-500 mb-4 text-sm",children:"Sistema nuevo detectado."}),f.jsx("button",{onClick:Fu,className:"w-full bg-red-700 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-all",children:"Inicializar Bóveda (Crear Admin)"})]}):i==="register"?f.jsx(jP,{onRegister:Bt,onBack:()=>s("login")}):f.jsxs(f.Fragment,{children:[f.jsx(zP,{onLogin:Ft}),f.jsx("div",{className:"mt-6 text-center pt-6 border-t border-zinc-800",children:f.jsxs("button",{onClick:()=>s("register"),className:"text-sm text-zinc-500 hover:text-red-400 transition-colors flex items-center justify-center gap-2 w-full",children:[f.jsx(NP,{size:16})," Crear una cuenta nueva"]})})]})]}),se&&f.jsx("div",{className:`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-medium ${se.type==="success"?"bg-emerald-600":"bg-red-600"}`,children:se.msg})]})}function MP({onClose:t}){return f.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center",children:f.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-2xl rounded-t-xl md:rounded-xl p-6 shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center",children:[f.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full",children:f.jsx(ci,{size:24})}),f.jsxs("div",{className:"flex items-center gap-3 mb-6 pr-8",children:[f.jsx("div",{className:"p-3 bg-red-900/20 rounded-full border border-red-900/30 shrink-0",children:f.jsx(fE,{className:"w-8 h-8 text-red-600"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"Guía de Uso BacarPass"}),f.jsx("p",{className:"text-zinc-500 text-sm",children:"Cómo sacar el máximo provecho a tu bóveda."})]})]}),f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"flex gap-4",children:[f.jsx("div",{className:"w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-400",children:f.jsx(fo,{size:24})}),f.jsxs("div",{children:[f.jsx("h3",{className:"font-bold text-zinc-200 text-lg",children:"Organización por Carpetas"}),f.jsxs("p",{className:"text-zinc-400 text-sm mt-1",children:['No necesitas "crear" carpetas manualmente. Simplemente, cuando agregues una contraseña, escribe el nombre de la carpeta en el campo ',f.jsx("strong",{children:"Carpeta / Tag"}),' (ej: "NVR", "Marketing"). El sistema agrupará todo automáticamente en el menú lateral.']})]})]}),f.jsxs("div",{className:"flex gap-4",children:[f.jsx("div",{className:"w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-400",children:f.jsx(us,{size:24})}),f.jsxs("div",{children:[f.jsx("h3",{className:"font-bold text-zinc-200 text-lg",children:"Compartir Seguro con PIN"}),f.jsxs("p",{className:"text-zinc-400 text-sm mt-1",children:["¿Necesitas enviar una contraseña a un compañero? Usa el botón de compartir ",f.jsx("span",{className:"inline-block align-middle",children:f.jsx(us,{size:12})})," en la tarjeta. Se te pedirá crear un ",f.jsx("strong",{children:"PIN único"}),". Tu compañero solo podrá ver la contraseña si ingresa ese PIN."]})]})]}),f.jsxs("div",{className:"flex gap-4",children:[f.jsx("div",{className:"w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 text-zinc-400",children:f.jsx(Xs,{size:24})}),f.jsxs("div",{children:[f.jsx("h3",{className:"font-bold text-zinc-200 text-lg",children:"Privacidad y Seguridad"}),f.jsxs("p",{className:"text-zinc-400 text-sm mt-1",children:["Cada usuario tiene su propia bóveda privada. Los administradores pueden ver todas las bóvedas, pero los usuarios normales ",f.jsx("strong",{children:"solo ven lo que ellos crearon"})," o lo que se les compartió explícitamente. ¡Cambia tu PIN personal regularmente desde el menú inferior!"]})]})]})]}),f.jsx("div",{className:"mt-8 pt-4 border-t border-zinc-800 text-center sticky bottom-0 bg-zinc-900 pb-2",children:f.jsx("button",{onClick:t,className:"bg-white hover:bg-zinc-200 text-zinc-900 font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto",children:"¡Entendido!"})})]})})}function Mr({icon:t,label:e,active:n,onClick:r,small:i,hasSubmenu:s,isOpen:o}){return f.jsxs("button",{onClick:r,className:`w-full flex items-center justify-between px-4 ${i?"py-2":"py-3"} rounded-lg transition-all duration-200 group ${n?"bg-red-900/20 text-red-500 border border-red-900/30":"text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-transparent"}`,children:[f.jsxs("div",{className:"flex items-center space-x-3 truncate",children:[t,f.jsx("span",{className:`${i?"text-sm":"text-base"} font-medium truncate`,children:e})]}),n&&!s&&f.jsx(ad,{size:16,className:"opacity-50"}),s&&(o?f.jsx(wP,{size:16}):f.jsx(ad,{size:16,className:"opacity-50"}))]})}function jP({onRegister:t,onBack:e}){const[n,r]=K.useState({fullName:"",username:"",pin:"",area:""});return f.jsxs("form",{onSubmit:i=>{i.preventDefault(),t(n.fullName,n.username,n.pin,n.area)},className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"Nombre Completo"}),f.jsx("input",{className:"w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-all",value:n.fullName,onChange:i=>r({...n,fullName:i.target.value}),required:!0})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"Usuario"}),f.jsx("input",{className:"w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-all",value:n.username,onChange:i=>r({...n,username:i.target.value}),required:!0})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"PIN"}),f.jsx("input",{type:"password",className:"w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-all",value:n.pin,onChange:i=>r({...n,pin:i.target.value}),required:!0})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"Área de Trabajo"}),f.jsx("input",{placeholder:"Ej: Ventas, Logística...",className:"w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-all",value:n.area,onChange:i=>r({...n,area:i.target.value}),required:!0}),f.jsx("p",{className:"text-[10px] text-zinc-600 mt-1",children:"Tu bóveda se organizará por carpetas que tú crees."})]}),f.jsxs("div",{className:"flex gap-2 mt-4",children:[f.jsx("button",{type:"button",onClick:e,className:"w-1/3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 rounded-lg transition-all",children:f.jsx(_P,{size:20,className:"mx-auto"})}),f.jsx("button",{type:"submit",className:"w-2/3 bg-red-800 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-red-900/20",children:"Registrarme"})]})]})}function zP({onLogin:t}){const[e,n]=K.useState(""),[r,i]=K.useState("");return f.jsxs("form",{onSubmit:s=>{s.preventDefault(),t(e,r)},className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"Usuario"}),f.jsx("input",{className:"w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all",value:e,onChange:s=>n(s.target.value),placeholder:"Ej: admin",required:!0})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"PIN / Contraseña"}),f.jsx("input",{type:"password",className:"w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all",value:r,onChange:s=>i(s.target.value),placeholder:"Ej: 1234",required:!0})]}),f.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white font-bold py-3 rounded-lg mt-4 transition-all shadow-lg shadow-red-900/30",children:"Acceder"})]})}function FP({data:t,currentUser:e,onDelete:n,onEdit:r,onShare:i,onNotify:s}){var I,C;const[o,l]=K.useState(!1),[u,h]=K.useState(!1),[p,g]=K.useState(!1),[m,S]=K.useState(""),[P,N]=K.useState(!1),D=e.username===t.createdBy,x=e.role==="admin",_=(I=t.sharedAccess)==null?void 0:I.some(k=>k.targetUser===e.username),A=x||D,V=t.history&&t.history.length>0,j=_&&!x&&!D,z=yE(t.url),E=()=>{if(o){l(!1);return}j?(g(!0),N(!1),S("")):l(!0)},v=()=>{var T;const k=(T=t.sharedAccess)==null?void 0:T.find(Le=>Le.targetUser===e.username);k&&k.accessPin===m?(l(!0),g(!1)):N(!0)},w=(k,T)=>{if(j&&!o){E();return}navigator.clipboard.writeText(k),s(`${T} copiado`)};return f.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-5 hover:border-zinc-700 transition-all group shadow-sm hover:shadow-md relative flex flex-col h-full",children:[f.jsxs("div",{className:"flex justify-between items-start mb-4 gap-2",children:[f.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[f.jsxs("div",{className:"w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 relative overflow-hidden border border-zinc-700 shrink-0",children:[z?f.jsx("img",{src:z,alt:"logo",className:"w-6 h-6 object-contain"}):f.jsx(CP,{size:20}),_&&f.jsx("div",{className:"absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border border-zinc-900",title:"Compartido contigo"})]}),f.jsxs("div",{className:"overflow-hidden",children:[f.jsx("h3",{className:"font-bold text-zinc-200 truncate",children:t.title}),f.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 flex items-center gap-1 w-fit truncate mt-0.5",children:[f.jsx(fo,{size:10,className:"shrink-0"})," ",f.jsx("span",{className:"truncate",children:t.tag})]})]})]}),f.jsxs("div",{className:"flex gap-1 shrink-0",children:[e.role==="admin"&&V&&f.jsx("button",{onClick:()=>h(!u),className:`p-1.5 rounded-md transition-colors ${u?"bg-red-900/30 text-red-400":"text-zinc-600 hover:text-zinc-300"}`,title:"Ver Historial",children:f.jsx(SP,{size:16})}),A&&f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:i,className:"text-zinc-600 hover:text-white p-1.5 transition-colors",title:"Compartir",children:f.jsx(us,{size:16})}),f.jsx("button",{onClick:r,className:"text-zinc-600 hover:text-white p-1.5 transition-colors",title:"Editar",children:f.jsx(pE,{size:16})}),f.jsx("button",{onClick:n,className:"text-zinc-600 hover:text-red-500 p-1.5 transition-colors",title:"Eliminar",children:f.jsx(ld,{size:16})})]})]})]}),u?f.jsxs("div",{className:"space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 flex-1",children:[f.jsx("h4",{className:"text-xs font-bold text-red-500 uppercase tracking-wider mb-2",children:"Historial de Cambios"}),f.jsx("div",{className:"max-h-32 overflow-y-auto space-y-2 pr-1 custom-scrollbar",children:(C=t.history)==null?void 0:C.slice().reverse().map((k,T)=>{var Le;return f.jsxs("div",{className:"text-xs bg-zinc-950/80 p-2 rounded border border-zinc-800",children:[f.jsxs("div",{className:"flex justify-between text-zinc-500 mb-1",children:[f.jsx("span",{children:(Le=k.changedAt)==null?void 0:Le.toDate().toLocaleDateString()}),f.jsx("span",{children:k.changedBy})]}),f.jsx("div",{className:"font-mono text-zinc-300 break-all",children:k.value})]},T)})}),f.jsx("button",{onClick:()=>h(!1),className:"w-full text-xs text-center text-zinc-500 hover:text-zinc-300 mt-2",children:"Cerrar Historial"})]}):f.jsxs("div",{className:"space-y-3 flex-1",children:[f.jsxs("div",{className:"bg-zinc-950/50 p-2 rounded-lg flex justify-between items-center border border-zinc-800/50",children:[f.jsx("span",{className:"text-sm text-zinc-400 select-all truncate mr-2",children:t.username}),f.jsx("button",{onClick:()=>w(t.username,"Usuario"),className:"text-zinc-600 hover:text-zinc-300 shrink-0 p-1",children:f.jsx(ky,{size:14})})]}),f.jsx("div",{className:"bg-zinc-950/50 p-2 rounded-lg flex justify-between items-center border border-zinc-800/50 relative",children:p?f.jsxs("div",{className:"flex w-full gap-2 animate-in fade-in",children:[f.jsx("input",{type:"password",autoFocus:!0,placeholder:"PIN",className:`w-full bg-zinc-900 text-xs px-2 rounded border focus:outline-none ${P?"border-red-500 text-red-500":"border-zinc-700 text-white"}`,value:m,onChange:k=>S(k.target.value),onKeyDown:k=>k.key==="Enter"&&v()}),f.jsx("button",{onClick:v,className:"text-red-500 hover:text-red-400 shrink-0",children:f.jsx(dE,{size:16})}),f.jsx("button",{onClick:()=>g(!1),className:"text-zinc-500 shrink-0",children:f.jsx(ci,{size:16})})]}):f.jsxs(f.Fragment,{children:[f.jsx("span",{className:`text-sm ${o?"text-red-400 font-mono":"text-zinc-500"} truncate mr-2 flex-1`,children:o?t.passwordValue:"••••••••••••"}),f.jsxs("div",{className:"flex gap-1 shrink-0",children:[f.jsx("button",{onClick:E,className:`hover:text-zinc-300 p-1 ${j&&!o?"text-blue-500":"text-zinc-600"}`,children:o?f.jsx(EP,{size:14}):j?f.jsx(Gf,{size:14}):f.jsx(TP,{size:14})}),f.jsx("button",{onClick:()=>w(t.passwordValue,"Contraseña"),className:"text-zinc-600 hover:text-zinc-300 p-1",children:f.jsx(ky,{size:14})})]})]})}),f.jsxs("div",{className:"mt-auto pt-3 border-t border-zinc-800/50 flex justify-between items-center text-xs",children:[f.jsxs("a",{href:t.url.startsWith("http")?t.url:`https://${t.url}`,target:"_blank",rel:"noreferrer",className:"text-red-500 hover:text-red-400 hover:underline truncate block flex-1 mr-2",children:[t.url.replace("https://","").replace("http://","").replace("www.","")," →"]}),f.jsxs("span",{className:"text-zinc-600 truncate shrink-0",children:["@",t.createdBy]})]})]})]})}function UP({users:t,currentUserId:e,appId:n,onNotify:r}){const[i,s]=K.useState(""),o=t.filter(h=>{var p;return h.fullName.toLowerCase().includes(i.toLowerCase())||h.username.toLowerCase().includes(i.toLowerCase())||((p=h.area)==null?void 0:p.toLowerCase().includes(i.toLowerCase()))||h.role.toLowerCase().includes(i.toLowerCase())}),l=async h=>{if(h.id===e)return;const p=h.role==="admin"?"user":"admin";await zu(si(ls(),"artifacts",n,"public","data","app_users",h.id),{role:p}),r(`Rol de ${h.username} cambiado a ${p}`,"success")},u=async h=>{h.id!==e&&window.confirm(`¿Eliminar usuario ${h.username}?`)&&(await cE(si(ls(),"artifacts",n,"public","data","app_users",h.id)),r("Usuario eliminado","success"))};return f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"relative",children:[f.jsx(IP,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4"}),f.jsx("input",{type:"text",placeholder:"Filtrar empleados por nombre, área o rol...",value:i,onChange:h=>s(h.target.value),className:"w-full bg-zinc-900 border border-zinc-800 text-zinc-300 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-red-800 transition-colors text-sm"})]}),f.jsx("div",{className:"grid grid-cols-1 gap-3 md:hidden",children:o.map(h=>f.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-3",children:[f.jsxs("div",{className:"flex justify-between items-start",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold",children:h.fullName.substring(0,2).toUpperCase()}),f.jsxs("div",{children:[f.jsx("p",{className:"font-medium text-zinc-200",children:h.fullName}),f.jsxs("p",{className:"text-sm text-zinc-500",children:["@",h.username]})]})]}),f.jsx("div",{className:"flex gap-2",children:h.id!==e&&f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:()=>l(h),className:"text-zinc-500 hover:text-white p-2 bg-zinc-800 rounded-lg",title:"Cambiar Rol",children:f.jsx(Zl,{size:18})}),f.jsx("button",{onClick:()=>u(h),className:"text-zinc-500 hover:text-red-500 p-2 bg-zinc-800 rounded-lg",title:"Eliminar",children:f.jsx(ld,{size:18})})]})})]}),f.jsxs("div",{className:"flex flex-wrap gap-2 items-center text-sm pt-2 border-t border-zinc-800",children:[f.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium border ${h.role==="admin"?"bg-red-900/20 text-red-400 border-red-900/30":"bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:h.role.toUpperCase()}),h.area&&f.jsxs("span",{className:"text-zinc-500",children:["| ",h.area]})]}),h.allowedTags.length>0&&f.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:h.allowedTags.map(p=>f.jsx("span",{className:"text-xs bg-zinc-950 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded",children:p},p))})]},h.id))}),f.jsx("div",{className:"hidden md:block bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",children:f.jsxs("table",{className:"w-full text-left",children:[f.jsx("thead",{className:"bg-zinc-950 text-zinc-500 text-xs uppercase font-medium",children:f.jsxs("tr",{children:[f.jsx("th",{className:"px-6 py-4",children:"Usuario"}),f.jsx("th",{className:"px-6 py-4",children:"Rol / Área"}),f.jsx("th",{className:"px-6 py-4",children:"Permisos"}),f.jsx("th",{className:"px-6 py-4 text-right",children:"Acciones"})]})}),f.jsx("tbody",{className:"divide-y divide-zinc-800",children:o.map(h=>f.jsxs("tr",{className:"hover:bg-zinc-800/50 transition-colors",children:[f.jsx("td",{className:"px-6 py-4",children:f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-bold",children:h.fullName.substring(0,2).toUpperCase()}),f.jsxs("div",{children:[f.jsx("p",{className:"font-medium text-zinc-200",children:h.fullName}),f.jsxs("p",{className:"text-xs text-zinc-500",children:["@",h.username]})]})]})}),f.jsx("td",{className:"px-6 py-4",children:f.jsxs("div",{className:"flex flex-col gap-1",children:[f.jsx("span",{className:`px-2 py-0.5 w-fit rounded text-[10px] font-medium border ${h.role==="admin"?"bg-red-900/20 text-red-400 border-red-900/30":"bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:h.role.toUpperCase()}),h.area&&f.jsx("span",{className:"text-xs text-zinc-500",children:h.area})]})}),f.jsx("td",{className:"px-6 py-4",children:f.jsx("div",{className:"flex flex-wrap gap-1",children:h.allowedTags.map(p=>f.jsx("span",{className:"text-xs bg-zinc-950 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded",children:p},p))})}),f.jsx("td",{className:"px-6 py-4 text-right space-x-2",children:h.id!==e&&f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:()=>l(h),className:"text-zinc-500 hover:text-white p-1",title:"Cambiar Rol",children:f.jsx(Zl,{size:16})}),f.jsx("button",{onClick:()=>u(h),className:"text-zinc-500 hover:text-red-500 p-1",title:"Eliminar",children:f.jsx(ld,{size:16})})]})})]},h.id))})]})}),o.length===0&&f.jsx("div",{className:"p-8 text-center text-zinc-500 text-sm bg-zinc-900 border border-zinc-800 rounded-xl",children:"No se encontraron usuarios con ese filtro."})]})}function BP({onClose:t,currentUser:e,appId:n,initialData:r,onSuccess:i,currentFolder:s}){const[o,l]=K.useState({title:(r==null?void 0:r.title)||"",username:(r==null?void 0:r.username)||"",passwordValue:(r==null?void 0:r.passwordValue)||"",url:(r==null?void 0:r.url)||"",tag:(r==null?void 0:r.tag)||s||""}),[u,h]=K.useState(0);K.useEffect(()=>{h(OP(o.passwordValue))},[o.passwordValue]);const p=yE(o.url),g=async m=>{if(m.preventDefault(),!o.tag)return alert("Debes asignar un Tag/Carpeta");try{const S=ls();if(r){const P={...o};if(r.passwordValue!==o.passwordValue){const N={value:r.passwordValue,changedAt:pe.now(),changedBy:e.username},D=r.history||[];P.history=[...D,N]}await zu(si(S,"artifacts",n,"public","data","passwords",r.id),P),i("Contraseña actualizada")}else await Yl(Li(S,"artifacts",n,"public","data","passwords"),{...o,createdBy:e.username,createdAt:Jl(),history:[]}),i("Contraseña creada");t()}catch(S){console.error(S),alert("Error al guardar")}};return f.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center",children:f.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-md rounded-t-xl md:rounded-xl p-5 md:p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center relative",children:[f.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full md:hidden z-10",children:f.jsx(ci,{size:24})}),f.jsxs("h3",{className:"text-xl font-bold text-white mb-6 flex items-center gap-2 pr-8",children:[r?f.jsx(pE,{size:20,className:"text-red-600"}):f.jsx(Gf,{size:20,className:"text-red-600"}),r?"Editar Credencial":"Nueva Credencial"]}),f.jsxs("form",{onSubmit:g,className:"space-y-4",children:[f.jsx("input",{placeholder:"Título (ej: Gmail Marketing)",className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:o.title,onChange:m=>l({...o,title:m.target.value})}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[f.jsx("input",{placeholder:"Usuario/Email",className:"bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:o.username,onChange:m=>l({...o,username:m.target.value})}),f.jsx("input",{placeholder:"Carpeta (ej: NVR, Cámaras)",className:"bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:o.tag,onChange:m=>l({...o,tag:m.target.value})})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex gap-2",children:[f.jsx("div",{className:"w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-lg flex-shrink-0 flex items-center justify-center",children:p?f.jsx("img",{src:p,alt:"Icon",className:"w-6 h-6 object-contain"}):f.jsx(xP,{size:20,className:"text-zinc-600"})}),f.jsx("input",{placeholder:"URL del Sitio (Automático Icono)",className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:o.url,onChange:m=>l({...o,url:m.target.value})})]}),f.jsxs("div",{children:[f.jsx("input",{type:"text",placeholder:"Contraseña",className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none font-mono text-red-400 text-base",required:!0,value:o.passwordValue,onChange:m=>l({...o,passwordValue:m.target.value})}),f.jsx("div",{className:"mt-2 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden",children:f.jsx("div",{className:`h-full transition-all duration-300 ${u>80?"bg-emerald-500":u>40?"bg-yellow-500":"bg-red-500"}`,style:{width:`${Math.max(5,u)}%`}})}),f.jsxs("p",{className:"text-[10px] text-zinc-600 mt-1 flex justify-between",children:[f.jsx("span",{children:"Salud de Contraseña"}),f.jsx("span",{className:`${u>80?"text-emerald-500":u>40?"text-yellow-500":"text-red-500"}`,children:u>80?"Excelente":u>40?"Buena":"Débil"})]})]})]}),f.jsxs("div",{className:"flex gap-3 mt-6 pt-4 border-t border-zinc-800 sticky bottom-0 bg-zinc-900 pb-2",children:[f.jsx("button",{type:"button",onClick:t,className:"flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg transition-colors text-base",children:"Cancelar"}),f.jsx("button",{type:"submit",className:"flex-1 bg-red-800 hover:bg-red-700 text-white py-3 rounded-lg transition-colors font-medium text-base",children:"Guardar"})]})]})]})})}function $P({onClose:t,appId:e,onSuccess:n}){const[r,i]=K.useState({fullName:"",username:"",pin:"",tagsInput:""}),s=async o=>{o.preventDefault();const l=r.tagsInput.split(",").map(u=>u.trim()).filter(Boolean);try{await Yl(Li(ls(),"artifacts",e,"public","data","app_users"),{fullName:r.fullName,username:r.username,pin:r.pin,role:"user",allowedTags:l,createdAt:Jl()}),n("Usuario Creado"),t()}catch(u){console.error(u),alert("Error creando usuario")}};return f.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center",children:f.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-md rounded-t-xl md:rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center relative",children:[f.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full md:hidden z-10",children:f.jsx(ci,{size:24})}),f.jsxs("h3",{className:"text-xl font-bold text-white mb-6 flex items-center gap-2 pr-8",children:[f.jsx(mE,{size:20,className:"text-zinc-400"})," Nuevo Empleado"]}),f.jsxs("form",{onSubmit:s,className:"space-y-4",children:[f.jsx("input",{placeholder:"Nombre Completo",className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:r.fullName,onChange:o=>i({...r,fullName:o.target.value})}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[f.jsx("input",{placeholder:"Usuario",className:"bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:r.username,onChange:o=>i({...r,username:o.target.value})}),f.jsx("input",{placeholder:"PIN",className:"bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:r.pin,onChange:o=>i({...r,pin:o.target.value})})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs text-zinc-500 mb-1 block",children:"Etiquetas / Carpetas Permitidas"}),f.jsx("input",{placeholder:"Ej: NVR, Cámaras, Marketing",className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",value:r.tagsInput,onChange:o=>i({...r,tagsInput:o.target.value})})]}),f.jsxs("div",{className:"flex gap-3 mt-6 pt-4 border-t border-zinc-800 sticky bottom-0 bg-zinc-900 pb-2",children:[f.jsx("button",{type:"button",onClick:t,className:"flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg transition-colors text-base",children:"Cancelar"}),f.jsx("button",{type:"submit",className:"flex-1 bg-white hover:bg-zinc-200 text-zinc-900 py-3 rounded-lg transition-colors font-medium text-base",children:"Crear"})]})]})]})})}function HP({onClose:t,appId:e,passwordData:n,users:r,onSuccess:i}){const[s,o]=K.useState(""),[l,u]=K.useState(""),h=async p=>{var g;if(p.preventDefault(),!!s){if((g=n.sharedAccess)!=null&&g.some(m=>m.targetUser===s)){alert("Ya está compartida con este usuario");return}try{const m=ls(),S=n.sharedAccess||[],P={targetUser:s,accessPin:l,sharedAt:pe.now()};await zu(si(m,"artifacts",e,"public","data","passwords",n.id),{sharedAccess:[...S,P]}),i(`Compartido con ${s}`),t()}catch(m){console.error(m),alert("Error al compartir")}}};return f.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center",children:f.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-md rounded-t-xl md:rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center relative",children:[f.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full md:hidden z-10",children:f.jsx(ci,{size:24})}),f.jsxs("h3",{className:"text-xl font-bold text-white mb-4 flex items-center gap-2 pr-8",children:[f.jsx(us,{size:20,className:"text-red-600"})," Compartir Credencial"]}),f.jsxs("p",{className:"text-sm text-zinc-400 mb-4",children:["Vas a compartir ",f.jsx("strong",{children:n.title})," con otro usuario."]}),f.jsxs("form",{onSubmit:h,className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"Usuario Destino"}),f.jsxs("select",{className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",value:s,onChange:p=>o(p.target.value),required:!0,children:[f.jsx("option",{value:"",children:"Seleccionar Usuario..."}),r.filter(p=>p.username!==n.createdBy).map(p=>f.jsxs("option",{value:p.username,children:[p.fullName," (@",p.username,")"]},p.id))]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"Asignar PIN de Acceso"}),f.jsx("input",{type:"text",placeholder:"Ej: 9999",className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none font-mono text-red-400 text-base",value:l,onChange:p=>u(p.target.value),required:!0}),f.jsx("p",{className:"text-[10px] text-zinc-500 mt-1",children:"El usuario deberá ingresar este PIN para ver la contraseña."})]}),f.jsxs("div",{className:"flex gap-3 mt-6 pt-4 border-t border-zinc-800 sticky bottom-0 bg-zinc-900 pb-2",children:[f.jsx("button",{type:"button",onClick:t,className:"flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg transition-colors text-base",children:"Cancelar"}),f.jsx("button",{type:"submit",className:"flex-1 bg-white hover:bg-zinc-200 text-zinc-900 py-3 rounded-lg transition-colors font-medium text-base",children:"Compartir"})]})]}),n.sharedAccess&&n.sharedAccess.length>0&&f.jsxs("div",{className:"mt-6 pt-4 border-t border-zinc-800",children:[f.jsx("h4",{className:"text-xs font-bold text-zinc-500 uppercase mb-2",children:"Compartido con:"}),f.jsx("div",{className:"space-y-2",children:n.sharedAccess.map((p,g)=>f.jsxs("div",{className:"flex justify-between items-center text-sm bg-zinc-950/50 p-2 rounded border border-zinc-800/50",children:[f.jsxs("span",{className:"text-zinc-300",children:["@",p.targetUser]}),f.jsxs("span",{className:"text-zinc-600 font-mono text-xs",children:["PIN: ",p.accessPin]})]},g))})]})]})})}function qP({onClose:t,onSave:e,realCurrentPin:n}){const[r,i]=K.useState(""),[s,o]=K.useState(""),[l,u]=K.useState(""),h=p=>{if(p.preventDefault(),r!==n)return alert("El PIN actual es incorrecto");if(s!==l)return alert("Los nuevos PINs no coinciden");if(s.length<4)return alert("El PIN debe tener al menos 4 caracteres");e(s)};return f.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm items-end md:items-center",children:f.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 w-full md:w-[95%] max-w-sm rounded-t-xl md:rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:slide-in-from-center relative",children:[f.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-800/50 p-1 rounded-full md:hidden z-10",children:f.jsx(ci,{size:24})}),f.jsxs("h3",{className:"text-xl font-bold text-white mb-6 flex items-center gap-2 pr-8",children:[f.jsx(AP,{size:20,className:"text-red-600"})," Cambiar PIN de Acceso"]}),f.jsxs("form",{onSubmit:h,className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"PIN Actual"}),f.jsx("input",{type:"password",className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:r,onChange:p=>i(p.target.value)})]}),f.jsxs("div",{className:"pt-2 border-t border-zinc-800",children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"Nuevo PIN"}),f.jsx("input",{type:"password",className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:s,onChange:p=>o(p.target.value)})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1",children:"Confirmar Nuevo PIN"}),f.jsx("input",{type:"password",className:"w-full bg-zinc-950 border border-zinc-800 text-white p-3 rounded-lg focus:border-red-800 focus:outline-none text-base",required:!0,value:l,onChange:p=>u(p.target.value)})]}),f.jsxs("div",{className:"flex gap-3 mt-6 pt-4 border-t border-zinc-800 sticky bottom-0 bg-zinc-900 pb-2",children:[f.jsx("button",{type:"button",onClick:t,className:"flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-lg transition-colors text-base",children:"Cancelar"}),f.jsx("button",{type:"submit",className:"flex-1 bg-white hover:bg-zinc-200 text-zinc-900 py-3 rounded-lg transition-colors font-medium text-base",children:"Actualizar"})]})]})]})})}$c.createRoot(document.getElementById("root")).render(f.jsx(a1.StrictMode,{children:f.jsx(LP,{})}));
