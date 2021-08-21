(function (factory) {
	typeof define === 'function' && define.amd ? define(['tiny-swiper/lib/index.full.js', 'tippy.js'], factory) :
	factory();
}((function () { 'use strict';

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$2=Symbol();class s$4{constructor(t,s){if(s!==e$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return t$2&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n$4=new Map,o$4=t=>{let o=n$4.get(t);return void 0===o&&n$4.set(t,o=new s$4(t,e$2)),o},r$2=t=>o$4("string"==typeof t?t:t+""),i$4=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,o)=>e+(t=>{if(t instanceof s$4)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1]),t[0]);return o$4(n)},S$1=(e,s)=>{t$2?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,e.appendChild(s);}));},u$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */var s$3,e$1,h$2,r$1;const o$3={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$3=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$3,reflect:!1,hasChanged:n$3};class a$2 extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u();}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const h=this[t];this[i]=e,this.requestUpdate(t,h,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(u$1(i));}else void 0!==i&&s.push(u$1(i));return s}static Πp(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1);}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0);}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t));}attributeChangedCallback(t,i,s){this.K(t,s);}Πj(t,i,s=l$2){var e,h;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:o$3.toAttribute)(i,s.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null;}}K(t,i){var s,e,h;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:o$3.fromAttribute;this.Πh=n,this[n]=a(i,t.type),this.Πh=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$3)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq());}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo;}catch(t){Promise.reject(t);}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$();}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s);}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}Π$(){this.L=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return !0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$();}updated(t){}firstUpdated(t){}}a$2.finalized=!0,a$2.elementProperties=new Map,a$2.elementStyles=[],a$2.shadowRootOptions={mode:"open"},null===(e$1=(s$3=globalThis).reactiveElementPlatformSupport)||void 0===e$1||e$1.call(s$3,{ReactiveElement:a$2}),(null!==(h$2=(r$1=globalThis).reactiveElementVersions)&&void 0!==h$2?h$2:r$1.reactiveElementVersions=[]).push("1.0.0-rc.2");

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	var t$1,i$3,s$2,e;const o$2=globalThis.trustedTypes,l$1=o$2?o$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,n$2=`lit$${(Math.random()+"").slice(9)}$`,h$1="?"+n$2,r=`<${h$1}>`,u=document,c=(t="")=>u.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,a$1=t=>{var i;return v(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,g=/"/g,y=/^(?:script|style|textarea)$/i,b=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),T=b(1),w=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),P=new WeakMap,V=(t,i,s)=>{var e,o;const l=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=l._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;l._$litPart$=n=new C(i.insertBefore(c(),t),t,void 0,s);}return n.I(t),n},E=u.createTreeWalker(u,129,null,!1),M=(t,i)=>{const s=t.length-1,e=[];let o,h=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let l,c,d=-1,v=0;for(;v<s.length&&(u.lastIndex=v,c=u.exec(s),null!==c);)v=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(o=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=o?o:f,d=-1):void 0===c[1]?d=-2:(d=u.lastIndex-c[2].length,l=c[1],u=void 0===c[3]?p:'"'===c[3]?g:$):u===g||u===$?u=p:u===_||u===m?u=f:(u=p,o=void 0);const a=u===p&&t[i+1].startsWith("/>")?" ":"";h+=u===f?s+r:d>=0?(e.push(l),s.slice(0,d)+"$lit$"+s.slice(d)+n$2+a):s+n$2+(-2===d?(e.push(void 0),i):a);}const c=h+(t[s]||"<?>")+(2===i?"</svg>":"");return [void 0!==l$1?l$1.createHTML(c):c,e]};class N{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let l=0,r=0;const u=t.length-1,d=this.parts,[v,a]=M(t,i);if(this.el=N.createElement(v,s),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(e=E.nextNode())&&d.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(n$2)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(n$2),i=/([.?@])?(.*)/.exec(s);d.push({type:1,index:l,name:i[2],strings:t,ctor:"."===i[1]?I:"?"===i[1]?L:"@"===i[1]?R:H});}else d.push({type:6,index:l});}for(const i of t)e.removeAttribute(i);}if(y.test(e.tagName)){const t=e.textContent.split(n$2),i=t.length-1;if(i>0){e.textContent=o$2?o$2.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],c()),E.nextNode(),d.push({type:2,index:++l});e.append(t[i],c());}}}else if(8===e.nodeType)if(e.data===h$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=e.data.indexOf(n$2,t+1));)d.push({type:7,index:l}),t+=n$2.length-1;}l++;}}static createElement(t,i){const s=u.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,l,n,h;if(i===w)return i;let r=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(l=null==r?void 0:r.O)||void 0===l||l.call(r,!1),void 0===u?r=void 0:(r=new u(t),r.T(t,s,e)),void 0!==e?(null!==(n=(h=s).Σi)&&void 0!==n?n:h.Σi=[])[e]=r:s.Σo=r),void 0!==r&&(i=S(t,r.S(t,i.values),r,e)),i}class k{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i;}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:u).importNode(s,!0);E.currentNode=o;let l=E.nextNode(),n=0,h=0,r=e[0];for(;void 0!==r;){if(n===r.index){let i;2===r.type?i=new C(l,l.nextSibling,this,t):1===r.type?i=new r.ctor(l,r.name,r.strings,this,t):6===r.type&&(i=new z(l,this,t)),this.l.push(i),r=e[++h];}n!==(null==r?void 0:r.index)&&(l=E.nextNode(),n++);}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++;}}class C{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e;}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t);}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this.H!==A&&this.R(),this.H=A):t!==this.H&&t!==w&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a$1(t)?this.g(t):this.m(t);}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t));}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(u.createTextNode(t)),this.H=t;}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=N.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else {const t=new k(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t;}}C(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new N(t)),i}g(t){v(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new C(this.k(c()),this.k(c()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e);}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i;}}}class H{constructor(t,i,s,e,o){this.type=1,this.H=A,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(A),this.strings=s):this.H=A;}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let l=!1;if(void 0===o)t=S(this,t,i,0),l=!d(t)||t!==this.H&&t!==w,l&&(this.H=t);else {const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=S(this,e[s+n],i,n),h===w&&(h=this.H[n]),l||(l=!d(h)||h!==this.H[n]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[n+1]),this.H[n]=h;}l&&!e&&this.W(t);}W(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class I extends H{constructor(){super(...arguments),this.type=3;}W(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}W(t){t&&t!==A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class R extends H{constructor(){super(...arguments),this.type=5;}I(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===w)return;const e=this.H,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,l=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),l&&this.element.addEventListener(this.name,this,t),this.H=t;}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s;}I(t){S(this,t);}}null===(i$3=(t$1=globalThis).litHtmlPlatformSupport)||void 0===i$3||i$3.call(t$1,N,C),(null!==(s$2=(e=globalThis).litHtmlVersions)&&void 0!==s$2?s$2:e.litHtmlVersions=[]).push("2.0.0-rc.3");

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */var i$2,l,o$1,s$1,n$1,a;(null!==(i$2=(a=globalThis).litElementVersions)&&void 0!==i$2?i$2:a.litElementVersions=[]).push("3.0.0-rc.2");class h extends a$2{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0;}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const r=this.render();super.update(t),this.Φt=V(r,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1);}render(){return w}}h.finalized=!0,h._$litElement$=!0,null===(o$1=(l=globalThis).litElementHydrateSupport)||void 0===o$1||o$1.call(l,{LitElement:h}),null===(n$1=(s$1=globalThis).litElementPlatformSupport)||void 0===n$1||n$1.call(s$1,{LitElement:h});

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i$1=t=>(...i)=>({_$litDirective$:t,values:i});class s{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s;}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}

	/**
	 * @license
	 * Copyright 2018 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */const i=i$1(class extends s{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.St){this.St=new Set;for(const t in r)this.St.add(t);return this.render(r)}this.St.forEach((t=>{null==r[t]&&(this.St.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.St.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return w}});

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var page = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
		module.exports = factory() ;
	}(commonjsGlobal, (function () {
	var isarray = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var pathToRegexp_1 = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {String} str
	 * @return {Array}
	 */
	function parse (str) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var suffix = res[6];
	    var asterisk = res[7];

	    var repeat = suffix === '+' || suffix === '*';
	    var optional = suffix === '?' || suffix === '*';
	    var delimiter = prefix || '/';
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?');

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      pattern: escapeGroup(pattern)
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {String}   str
	 * @return {Function}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^' + tokens[i].pattern + '$');
	    }
	  }

	  return function (obj) {
	    var path = '';
	    var data = obj || {};

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encodeURIComponent(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = encodeURIComponent(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {String} group
	 * @return {String}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {RegExp} re
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {String}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {RegExp} path
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {Array}  path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {String} path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path);
	  var re = tokensToRegExp(tokens, options);

	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i]);
	    }
	  }

	  return attachKeys(re, keys)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {Array}  tokens
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';
	  var lastToken = tokens[tokens.length - 1];
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken);

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = token.pattern;

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (prefix) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)';
	  }

	  return new RegExp('^' + route, flags(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(String|RegExp|Array)} path
	 * @param  {Array}                 [keys]
	 * @param  {Object}                [options]
	 * @return {RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || [];

	  if (!isarray(keys)) {
	    options = keys;
	    keys = [];
	  } else if (!options) {
	    options = {};
	  }

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, keys)
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(path, keys, options)
	  }

	  return stringToRegexp(path, keys, options)
	}

	pathToRegexp_1.parse = parse_1;
	pathToRegexp_1.compile = compile_1;
	pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

	/**
	   * Module dependencies.
	   */

	  

	  /**
	   * Short-cuts for global-object checks
	   */

	  var hasDocument = ('undefined' !== typeof document);
	  var hasWindow = ('undefined' !== typeof window);
	  var hasHistory = ('undefined' !== typeof history);
	  var hasProcess = typeof process !== 'undefined';

	  /**
	   * Detect click event
	   */
	  var clickEvent = hasDocument && document.ontouchstart ? 'touchstart' : 'click';

	  /**
	   * To work properly with the URL
	   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
	   */

	  var isLocation = hasWindow && !!(window.history.location || window.location);

	  /**
	   * The page instance
	   * @api private
	   */
	  function Page() {
	    // public things
	    this.callbacks = [];
	    this.exits = [];
	    this.current = '';
	    this.len = 0;

	    // private things
	    this._decodeURLComponents = true;
	    this._base = '';
	    this._strict = false;
	    this._running = false;
	    this._hashbang = false;

	    // bound functions
	    this.clickHandler = this.clickHandler.bind(this);
	    this._onpopstate = this._onpopstate.bind(this);
	  }

	  /**
	   * Configure the instance of page. This can be called multiple times.
	   *
	   * @param {Object} options
	   * @api public
	   */

	  Page.prototype.configure = function(options) {
	    var opts = options || {};

	    this._window = opts.window || (hasWindow && window);
	    this._decodeURLComponents = opts.decodeURLComponents !== false;
	    this._popstate = opts.popstate !== false && hasWindow;
	    this._click = opts.click !== false && hasDocument;
	    this._hashbang = !!opts.hashbang;

	    var _window = this._window;
	    if(this._popstate) {
	      _window.addEventListener('popstate', this._onpopstate, false);
	    } else if(hasWindow) {
	      _window.removeEventListener('popstate', this._onpopstate, false);
	    }

	    if (this._click) {
	      _window.document.addEventListener(clickEvent, this.clickHandler, false);
	    } else if(hasDocument) {
	      _window.document.removeEventListener(clickEvent, this.clickHandler, false);
	    }

	    if(this._hashbang && hasWindow && !hasHistory) {
	      _window.addEventListener('hashchange', this._onpopstate, false);
	    } else if(hasWindow) {
	      _window.removeEventListener('hashchange', this._onpopstate, false);
	    }
	  };

	  /**
	   * Get or set basepath to `path`.
	   *
	   * @param {string} path
	   * @api public
	   */

	  Page.prototype.base = function(path) {
	    if (0 === arguments.length) return this._base;
	    this._base = path;
	  };

	  /**
	   * Gets the `base`, which depends on whether we are using History or
	   * hashbang routing.

	   * @api private
	   */
	  Page.prototype._getBase = function() {
	    var base = this._base;
	    if(!!base) return base;
	    var loc = hasWindow && this._window && this._window.location;

	    if(hasWindow && this._hashbang && loc && loc.protocol === 'file:') {
	      base = loc.pathname;
	    }

	    return base;
	  };

	  /**
	   * Get or set strict path matching to `enable`
	   *
	   * @param {boolean} enable
	   * @api public
	   */

	  Page.prototype.strict = function(enable) {
	    if (0 === arguments.length) return this._strict;
	    this._strict = enable;
	  };


	  /**
	   * Bind with the given `options`.
	   *
	   * Options:
	   *
	   *    - `click` bind to click events [true]
	   *    - `popstate` bind to popstate [true]
	   *    - `dispatch` perform initial dispatch [true]
	   *
	   * @param {Object} options
	   * @api public
	   */

	  Page.prototype.start = function(options) {
	    var opts = options || {};
	    this.configure(opts);

	    if (false === opts.dispatch) return;
	    this._running = true;

	    var url;
	    if(isLocation) {
	      var window = this._window;
	      var loc = window.location;

	      if(this._hashbang && ~loc.hash.indexOf('#!')) {
	        url = loc.hash.substr(2) + loc.search;
	      } else if (this._hashbang) {
	        url = loc.search + loc.hash;
	      } else {
	        url = loc.pathname + loc.search + loc.hash;
	      }
	    }

	    this.replace(url, null, true, opts.dispatch);
	  };

	  /**
	   * Unbind click and popstate event handlers.
	   *
	   * @api public
	   */

	  Page.prototype.stop = function() {
	    if (!this._running) return;
	    this.current = '';
	    this.len = 0;
	    this._running = false;

	    var window = this._window;
	    this._click && window.document.removeEventListener(clickEvent, this.clickHandler, false);
	    hasWindow && window.removeEventListener('popstate', this._onpopstate, false);
	    hasWindow && window.removeEventListener('hashchange', this._onpopstate, false);
	  };

	  /**
	   * Show `path` with optional `state` object.
	   *
	   * @param {string} path
	   * @param {Object=} state
	   * @param {boolean=} dispatch
	   * @param {boolean=} push
	   * @return {!Context}
	   * @api public
	   */

	  Page.prototype.show = function(path, state, dispatch, push) {
	    var ctx = new Context(path, state, this),
	      prev = this.prevContext;
	    this.prevContext = ctx;
	    this.current = ctx.path;
	    if (false !== dispatch) this.dispatch(ctx, prev);
	    if (false !== ctx.handled && false !== push) ctx.pushState();
	    return ctx;
	  };

	  /**
	   * Goes back in the history
	   * Back should always let the current route push state and then go back.
	   *
	   * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
	   * @param {Object=} state
	   * @api public
	   */

	  Page.prototype.back = function(path, state) {
	    var page = this;
	    if (this.len > 0) {
	      var window = this._window;
	      // this may need more testing to see if all browsers
	      // wait for the next tick to go back in history
	      hasHistory && window.history.back();
	      this.len--;
	    } else if (path) {
	      setTimeout(function() {
	        page.show(path, state);
	      });
	    } else {
	      setTimeout(function() {
	        page.show(page._getBase(), state);
	      });
	    }
	  };

	  /**
	   * Register route to redirect from one path to other
	   * or just redirect to another route
	   *
	   * @param {string} from - if param 'to' is undefined redirects to 'from'
	   * @param {string=} to
	   * @api public
	   */
	  Page.prototype.redirect = function(from, to) {
	    var inst = this;

	    // Define route from a path to another
	    if ('string' === typeof from && 'string' === typeof to) {
	      page.call(this, from, function(e) {
	        setTimeout(function() {
	          inst.replace(/** @type {!string} */ (to));
	        }, 0);
	      });
	    }

	    // Wait for the push state and replace it with another
	    if ('string' === typeof from && 'undefined' === typeof to) {
	      setTimeout(function() {
	        inst.replace(from);
	      }, 0);
	    }
	  };

	  /**
	   * Replace `path` with optional `state` object.
	   *
	   * @param {string} path
	   * @param {Object=} state
	   * @param {boolean=} init
	   * @param {boolean=} dispatch
	   * @return {!Context}
	   * @api public
	   */


	  Page.prototype.replace = function(path, state, init, dispatch) {
	    var ctx = new Context(path, state, this),
	      prev = this.prevContext;
	    this.prevContext = ctx;
	    this.current = ctx.path;
	    ctx.init = init;
	    ctx.save(); // save before dispatching, which may redirect
	    if (false !== dispatch) this.dispatch(ctx, prev);
	    return ctx;
	  };

	  /**
	   * Dispatch the given `ctx`.
	   *
	   * @param {Context} ctx
	   * @api private
	   */

	  Page.prototype.dispatch = function(ctx, prev) {
	    var i = 0, j = 0, page = this;

	    function nextExit() {
	      var fn = page.exits[j++];
	      if (!fn) return nextEnter();
	      fn(prev, nextExit);
	    }

	    function nextEnter() {
	      var fn = page.callbacks[i++];

	      if (ctx.path !== page.current) {
	        ctx.handled = false;
	        return;
	      }
	      if (!fn) return unhandled.call(page, ctx);
	      fn(ctx, nextEnter);
	    }

	    if (prev) {
	      nextExit();
	    } else {
	      nextEnter();
	    }
	  };

	  /**
	   * Register an exit route on `path` with
	   * callback `fn()`, which will be called
	   * on the previous context when a new
	   * page is visited.
	   */
	  Page.prototype.exit = function(path, fn) {
	    if (typeof path === 'function') {
	      return this.exit('*', path);
	    }

	    var route = new Route(path, null, this);
	    for (var i = 1; i < arguments.length; ++i) {
	      this.exits.push(route.middleware(arguments[i]));
	    }
	  };

	  /**
	   * Handle "click" events.
	   */

	  /* jshint +W054 */
	  Page.prototype.clickHandler = function(e) {
	    if (1 !== this._which(e)) return;

	    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	    if (e.defaultPrevented) return;

	    // ensure link
	    // use shadow dom when available if not, fall back to composedPath()
	    // for browsers that only have shady
	    var el = e.target;
	    var eventPath = e.path || (e.composedPath ? e.composedPath() : null);

	    if(eventPath) {
	      for (var i = 0; i < eventPath.length; i++) {
	        if (!eventPath[i].nodeName) continue;
	        if (eventPath[i].nodeName.toUpperCase() !== 'A') continue;
	        if (!eventPath[i].href) continue;

	        el = eventPath[i];
	        break;
	      }
	    }

	    // continue ensure link
	    // el.nodeName for svg links are 'a' instead of 'A'
	    while (el && 'A' !== el.nodeName.toUpperCase()) el = el.parentNode;
	    if (!el || 'A' !== el.nodeName.toUpperCase()) return;

	    // check if link is inside an svg
	    // in this case, both href and target are always inside an object
	    var svg = (typeof el.href === 'object') && el.href.constructor.name === 'SVGAnimatedString';

	    // Ignore if tag has
	    // 1. "download" attribute
	    // 2. rel="external" attribute
	    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;

	    // ensure non-hash for the same path
	    var link = el.getAttribute('href');
	    if(!this._hashbang && this._samePath(el) && (el.hash || '#' === link)) return;

	    // Check for mailto: in the href
	    if (link && link.indexOf('mailto:') > -1) return;

	    // check target
	    // svg target is an object and its desired value is in .baseVal property
	    if (svg ? el.target.baseVal : el.target) return;

	    // x-origin
	    // note: svg links that are not relative don't call click events (and skip page.js)
	    // consequently, all svg links tested inside page.js are relative and in the same origin
	    if (!svg && !this.sameOrigin(el.href)) return;

	    // rebuild path
	    // There aren't .pathname and .search properties in svg links, so we use href
	    // Also, svg href is an object and its desired value is in .baseVal property
	    var path = svg ? el.href.baseVal : (el.pathname + el.search + (el.hash || ''));

	    path = path[0] !== '/' ? '/' + path : path;

	    // strip leading "/[drive letter]:" on NW.js on Windows
	    if (hasProcess && path.match(/^\/[a-zA-Z]:\//)) {
	      path = path.replace(/^\/[a-zA-Z]:\//, '/');
	    }

	    // same page
	    var orig = path;
	    var pageBase = this._getBase();

	    if (path.indexOf(pageBase) === 0) {
	      path = path.substr(pageBase.length);
	    }

	    if (this._hashbang) path = path.replace('#!', '');

	    if (pageBase && orig === path && (!isLocation || this._window.location.protocol !== 'file:')) {
	      return;
	    }

	    e.preventDefault();
	    this.show(orig);
	  };

	  /**
	   * Handle "populate" events.
	   * @api private
	   */

	  Page.prototype._onpopstate = (function () {
	    var loaded = false;
	    if ( ! hasWindow ) {
	      return function () {};
	    }
	    if (hasDocument && document.readyState === 'complete') {
	      loaded = true;
	    } else {
	      window.addEventListener('load', function() {
	        setTimeout(function() {
	          loaded = true;
	        }, 0);
	      });
	    }
	    return function onpopstate(e) {
	      if (!loaded) return;
	      var page = this;
	      if (e.state) {
	        var path = e.state.path;
	        page.replace(path, e.state);
	      } else if (isLocation) {
	        var loc = page._window.location;
	        page.show(loc.pathname + loc.search + loc.hash, undefined, undefined, false);
	      }
	    };
	  })();

	  /**
	   * Event button.
	   */
	  Page.prototype._which = function(e) {
	    e = e || (hasWindow && this._window.event);
	    return null == e.which ? e.button : e.which;
	  };

	  /**
	   * Convert to a URL object
	   * @api private
	   */
	  Page.prototype._toURL = function(href) {
	    var window = this._window;
	    if(typeof URL === 'function' && isLocation) {
	      return new URL(href, window.location.toString());
	    } else if (hasDocument) {
	      var anc = window.document.createElement('a');
	      anc.href = href;
	      return anc;
	    }
	  };

	  /**
	   * Check if `href` is the same origin.
	   * @param {string} href
	   * @api public
	   */
	  Page.prototype.sameOrigin = function(href) {
	    if(!href || !isLocation) return false;

	    var url = this._toURL(href);
	    var window = this._window;

	    var loc = window.location;

	    /*
	       When the port is the default http port 80 for http, or 443 for
	       https, internet explorer 11 returns an empty string for loc.port,
	       so we need to compare loc.port with an empty string if url.port
	       is the default port 80 or 443.
	       Also the comparition with `port` is changed from `===` to `==` because
	       `port` can be a string sometimes. This only applies to ie11.
	    */
	    return loc.protocol === url.protocol &&
	      loc.hostname === url.hostname &&
	      (loc.port === url.port || loc.port === '' && (url.port == 80 || url.port == 443)); // jshint ignore:line
	  };

	  /**
	   * @api private
	   */
	  Page.prototype._samePath = function(url) {
	    if(!isLocation) return false;
	    var window = this._window;
	    var loc = window.location;
	    return url.pathname === loc.pathname &&
	      url.search === loc.search;
	  };

	  /**
	   * Remove URL encoding from the given `str`.
	   * Accommodates whitespace in both x-www-form-urlencoded
	   * and regular percent-encoded form.
	   *
	   * @param {string} val - URL component to decode
	   * @api private
	   */
	  Page.prototype._decodeURLEncodedURIComponent = function(val) {
	    if (typeof val !== 'string') { return val; }
	    return this._decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
	  };

	  /**
	   * Create a new `page` instance and function
	   */
	  function createPage() {
	    var pageInstance = new Page();

	    function pageFn(/* args */) {
	      return page.apply(pageInstance, arguments);
	    }

	    // Copy all of the things over. In 2.0 maybe we use setPrototypeOf
	    pageFn.callbacks = pageInstance.callbacks;
	    pageFn.exits = pageInstance.exits;
	    pageFn.base = pageInstance.base.bind(pageInstance);
	    pageFn.strict = pageInstance.strict.bind(pageInstance);
	    pageFn.start = pageInstance.start.bind(pageInstance);
	    pageFn.stop = pageInstance.stop.bind(pageInstance);
	    pageFn.show = pageInstance.show.bind(pageInstance);
	    pageFn.back = pageInstance.back.bind(pageInstance);
	    pageFn.redirect = pageInstance.redirect.bind(pageInstance);
	    pageFn.replace = pageInstance.replace.bind(pageInstance);
	    pageFn.dispatch = pageInstance.dispatch.bind(pageInstance);
	    pageFn.exit = pageInstance.exit.bind(pageInstance);
	    pageFn.configure = pageInstance.configure.bind(pageInstance);
	    pageFn.sameOrigin = pageInstance.sameOrigin.bind(pageInstance);
	    pageFn.clickHandler = pageInstance.clickHandler.bind(pageInstance);

	    pageFn.create = createPage;

	    Object.defineProperty(pageFn, 'len', {
	      get: function(){
	        return pageInstance.len;
	      },
	      set: function(val) {
	        pageInstance.len = val;
	      }
	    });

	    Object.defineProperty(pageFn, 'current', {
	      get: function(){
	        return pageInstance.current;
	      },
	      set: function(val) {
	        pageInstance.current = val;
	      }
	    });

	    // In 2.0 these can be named exports
	    pageFn.Context = Context;
	    pageFn.Route = Route;

	    return pageFn;
	  }

	  /**
	   * Register `path` with callback `fn()`,
	   * or route `path`, or redirection,
	   * or `page.start()`.
	   *
	   *   page(fn);
	   *   page('*', fn);
	   *   page('/user/:id', load, user);
	   *   page('/user/' + user.id, { some: 'thing' });
	   *   page('/user/' + user.id);
	   *   page('/from', '/to')
	   *   page();
	   *
	   * @param {string|!Function|!Object} path
	   * @param {Function=} fn
	   * @api public
	   */

	  function page(path, fn) {
	    // <callback>
	    if ('function' === typeof path) {
	      return page.call(this, '*', path);
	    }

	    // route <path> to <callback ...>
	    if ('function' === typeof fn) {
	      var route = new Route(/** @type {string} */ (path), null, this);
	      for (var i = 1; i < arguments.length; ++i) {
	        this.callbacks.push(route.middleware(arguments[i]));
	      }
	      // show <path> with [state]
	    } else if ('string' === typeof path) {
	      this['string' === typeof fn ? 'redirect' : 'show'](path, fn);
	      // start [options]
	    } else {
	      this.start(path);
	    }
	  }

	  /**
	   * Unhandled `ctx`. When it's not the initial
	   * popstate then redirect. If you wish to handle
	   * 404s on your own use `page('*', callback)`.
	   *
	   * @param {Context} ctx
	   * @api private
	   */
	  function unhandled(ctx) {
	    if (ctx.handled) return;
	    var current;
	    var page = this;
	    var window = page._window;

	    if (page._hashbang) {
	      current = isLocation && this._getBase() + window.location.hash.replace('#!', '');
	    } else {
	      current = isLocation && window.location.pathname + window.location.search;
	    }

	    if (current === ctx.canonicalPath) return;
	    page.stop();
	    ctx.handled = false;
	    isLocation && (window.location.href = ctx.canonicalPath);
	  }

	  /**
	   * Escapes RegExp characters in the given string.
	   *
	   * @param {string} s
	   * @api private
	   */
	  function escapeRegExp(s) {
	    return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
	  }

	  /**
	   * Initialize a new "request" `Context`
	   * with the given `path` and optional initial `state`.
	   *
	   * @constructor
	   * @param {string} path
	   * @param {Object=} state
	   * @api public
	   */

	  function Context(path, state, pageInstance) {
	    var _page = this.page = pageInstance || page;
	    var window = _page._window;
	    var hashbang = _page._hashbang;

	    var pageBase = _page._getBase();
	    if ('/' === path[0] && 0 !== path.indexOf(pageBase)) path = pageBase + (hashbang ? '#!' : '') + path;
	    var i = path.indexOf('?');

	    this.canonicalPath = path;
	    var re = new RegExp('^' + escapeRegExp(pageBase));
	    this.path = path.replace(re, '') || '/';
	    if (hashbang) this.path = this.path.replace('#!', '') || '/';

	    this.title = (hasDocument && window.document.title);
	    this.state = state || {};
	    this.state.path = path;
	    this.querystring = ~i ? _page._decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
	    this.pathname = _page._decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
	    this.params = {};

	    // fragment
	    this.hash = '';
	    if (!hashbang) {
	      if (!~this.path.indexOf('#')) return;
	      var parts = this.path.split('#');
	      this.path = this.pathname = parts[0];
	      this.hash = _page._decodeURLEncodedURIComponent(parts[1]) || '';
	      this.querystring = this.querystring.split('#')[0];
	    }
	  }

	  /**
	   * Push state.
	   *
	   * @api private
	   */

	  Context.prototype.pushState = function() {
	    var page = this.page;
	    var window = page._window;
	    var hashbang = page._hashbang;

	    page.len++;
	    if (hasHistory) {
	        window.history.pushState(this.state, this.title,
	          hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	    }
	  };

	  /**
	   * Save the context state.
	   *
	   * @api public
	   */

	  Context.prototype.save = function() {
	    var page = this.page;
	    if (hasHistory) {
	        page._window.history.replaceState(this.state, this.title,
	          page._hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	    }
	  };

	  /**
	   * Initialize `Route` with the given HTTP `path`,
	   * and an array of `callbacks` and `options`.
	   *
	   * Options:
	   *
	   *   - `sensitive`    enable case-sensitive routes
	   *   - `strict`       enable strict matching for trailing slashes
	   *
	   * @constructor
	   * @param {string} path
	   * @param {Object=} options
	   * @api private
	   */

	  function Route(path, options, page) {
	    var _page = this.page = page || globalPage;
	    var opts = options || {};
	    opts.strict = opts.strict || _page._strict;
	    this.path = (path === '*') ? '(.*)' : path;
	    this.method = 'GET';
	    this.regexp = pathToRegexp_1(this.path, this.keys = [], opts);
	  }

	  /**
	   * Return route middleware with
	   * the given callback `fn()`.
	   *
	   * @param {Function} fn
	   * @return {Function}
	   * @api public
	   */

	  Route.prototype.middleware = function(fn) {
	    var self = this;
	    return function(ctx, next) {
	      if (self.match(ctx.path, ctx.params)) {
	        ctx.routePath = self.path;
	        return fn(ctx, next);
	      }
	      next();
	    };
	  };

	  /**
	   * Check if this route matches `path`, if so
	   * populate `params`.
	   *
	   * @param {string} path
	   * @param {Object} params
	   * @return {boolean}
	   * @api private
	   */

	  Route.prototype.match = function(path, params) {
	    var keys = this.keys,
	      qsIndex = path.indexOf('?'),
	      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
	      m = this.regexp.exec(decodeURIComponent(pathname));

	    if (!m) return false;

	    delete params[0];

	    for (var i = 1, len = m.length; i < len; ++i) {
	      var key = keys[i - 1];
	      var val = this.page._decodeURLEncodedURIComponent(m[i]);
	      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
	        params[key.name] = val;
	      }
	    }

	    return true;
	  };


	  /**
	   * Module exports.
	   */

	  var globalPage = createPage();
	  var page_js = globalPage;
	  var default_1 = globalPage;

	page_js.default = default_1;

	return page_js;

	})));
	});

	var dayjs_min = createCommonjsModule(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
	});

	var relativeTime = createCommonjsModule(function (module, exports) {
	!function(r,e){module.exports=e();}(commonjsGlobal,(function(){return function(r,e,t){r=r||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,e,t,o){return n.fromToBase(r,e,t,o)}t.en.relativeTime=o,n.fromToBase=function(e,n,i,d,u){for(var f,a,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(f=d?t(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(f));if(s=f>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),a="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return a;var M=s?l.future:l.past;return "function"==typeof M?M(a):M.replace("%s",a)},n.to=function(r,e){return i(r,e,this,!0)},n.from=function(r,e){return i(r,e,this)};var d=function(r){return r.$u?t.utc():t()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)};}}));
	});

	createCommonjsModule(function (module, exports) {
	!function(e,a){module.exports=a(dayjs_min);}(commonjsGlobal,(function(e){function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(e),t={name:"pt",weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sab".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),ordinal:function(e){return e+"º"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"alguns segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return o.default.locale(t,null,!0),t}));
	});

	var bind = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is a Buffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */
	function isBuffer(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a plain Object
	 *
	 * @param {Object} val The value to test
	 * @return {boolean} True if value is a plain Object, otherwise false
	 */
	function isPlainObject(val) {
	  if (toString.call(val) !== '[object Object]') {
	    return false;
	  }

	  var prototype = Object.getPrototypeOf(val);
	  return prototype === null || prototype === Object.prototype;
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
	                                           navigator.product === 'NativeScript' ||
	                                           navigator.product === 'NS')) {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (isPlainObject(result[key]) && isPlainObject(val)) {
	      result[key] = merge(result[key], val);
	    } else if (isPlainObject(val)) {
	      result[key] = merge({}, val);
	    } else if (isArray(val)) {
	      result[key] = val.slice();
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	/**
	 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	 *
	 * @param {string} content with BOM
	 * @return {string} content value without BOM
	 */
	function stripBOM(content) {
	  if (content.charCodeAt(0) === 0xFEFF) {
	    content = content.slice(1);
	  }
	  return content;
	}

	var utils = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isPlainObject: isPlainObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim,
	  stripBOM: stripBOM
	};

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	var buildURL = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    var hashmarkIndex = url.indexOf('#');
	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }

	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	var InterceptorManager_1 = InterceptorManager;

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	var transformData = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};

	var isCancel = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

	var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	var enhanceError = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }

	  error.request = request;
	  error.response = response;
	  error.isAxiosError = true;

	  error.toJSON = function toJSON() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: this.config,
	      code: this.code
	    };
	  };
	  return error;
	};

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	var createError = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	var settle = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};

	var cookies = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));

	          if (utils.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }

	          if (utils.isString(path)) {
	            cookie.push('path=' + path);
	          }

	          if (utils.isString(domain)) {
	            cookie.push('domain=' + domain);
	          }

	          if (secure === true) {
	            cookie.push('secure');
	          }

	          document.cookie = cookie.join('; ');
	        },

	        read: function read(name) {
	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	          return (match ? decodeURIComponent(match[3]) : null);
	        },

	        remove: function remove(name) {
	          this.write(name, '', Date.now() - 86400000);
	        }
	      };
	    })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return {
	        write: function write() {},
	        read: function read() { return null; },
	        remove: function remove() {}
	      };
	    })()
	);

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	var isAbsoluteURL = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	var combineURLs = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};

	/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 * @returns {string} The combined full path
	 */
	var buildFullPath = function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	};

	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	var parseHeaders = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });

	  return parsed;
	};

	var isURLSameOrigin = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	    (function standardBrowserEnv() {
	      var msie = /(msie|trident)/i.test(navigator.userAgent);
	      var urlParsingNode = document.createElement('a');
	      var originURL;

	      /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	      function resolveURL(url) {
	        var href = url;

	        if (msie) {
	        // IE needs attribute set twice to normalize properties
	          urlParsingNode.setAttribute('href', href);
	          href = urlParsingNode.href;
	        }

	        urlParsingNode.setAttribute('href', href);

	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	        return {
	          href: urlParsingNode.href,
	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	          host: urlParsingNode.host,
	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	          hostname: urlParsingNode.hostname,
	          port: urlParsingNode.port,
	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	            urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname
	        };
	      }

	      originURL = resolveURL(window.location.href);

	      /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	      return function isURLSameOrigin(requestURL) {
	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	        return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	      };
	    })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return function isURLSameOrigin() {
	        return true;
	      };
	    })()
	);

	var xhr = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    var fullPath = buildFullPath(config.baseURL, config.url);
	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request.onreadystatechange = function handleLoad() {
	      if (!request || request.readyState !== 4) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }

	      reject(createError('Request aborted', config, 'ECONNABORTED', request));

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
	      if (config.timeoutErrorMessage) {
	        timeoutErrorMessage = config.timeoutErrorMessage;
	      }
	      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (!utils.isUndefined(config.withCredentials)) {
	      request.withCredentials = !!config.withCredentials;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (!requestData) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = xhr;
	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    // For node use HTTP adapter
	    adapter = xhr;
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,
	  maxBodyLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	var defaults_1 = defaults;

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	var dispatchRequest = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults_1.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};

	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	var mergeConfig = function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  var config = {};

	  var valueFromConfig2Keys = ['url', 'method', 'data'];
	  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
	  var defaultToConfig2Keys = [
	    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
	    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
	    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
	    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
	    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
	  ];
	  var directMergeKeys = ['validateStatus'];

	  function getMergedValue(target, source) {
	    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
	      return utils.merge(target, source);
	    } else if (utils.isPlainObject(source)) {
	      return utils.merge({}, source);
	    } else if (utils.isArray(source)) {
	      return source.slice();
	    }
	    return source;
	  }

	  function mergeDeepProperties(prop) {
	    if (!utils.isUndefined(config2[prop])) {
	      config[prop] = getMergedValue(config1[prop], config2[prop]);
	    } else if (!utils.isUndefined(config1[prop])) {
	      config[prop] = getMergedValue(undefined, config1[prop]);
	    }
	  }

	  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
	    if (!utils.isUndefined(config2[prop])) {
	      config[prop] = getMergedValue(undefined, config2[prop]);
	    }
	  });

	  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

	  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
	    if (!utils.isUndefined(config2[prop])) {
	      config[prop] = getMergedValue(undefined, config2[prop]);
	    } else if (!utils.isUndefined(config1[prop])) {
	      config[prop] = getMergedValue(undefined, config1[prop]);
	    }
	  });

	  utils.forEach(directMergeKeys, function merge(prop) {
	    if (prop in config2) {
	      config[prop] = getMergedValue(config1[prop], config2[prop]);
	    } else if (prop in config1) {
	      config[prop] = getMergedValue(undefined, config1[prop]);
	    }
	  });

	  var axiosKeys = valueFromConfig2Keys
	    .concat(mergeDeepPropertiesKeys)
	    .concat(defaultToConfig2Keys)
	    .concat(directMergeKeys);

	  var otherKeys = Object
	    .keys(config1)
	    .concat(Object.keys(config2))
	    .filter(function filterAxiosKeys(key) {
	      return axiosKeys.indexOf(key) === -1;
	    });

	  utils.forEach(otherKeys, mergeDeepProperties);

	  return config;
	};

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager_1(),
	    response: new InterceptorManager_1()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = arguments[1] || {};
	    config.url = arguments[0];
	  } else {
	    config = config || {};
	  }

	  config = mergeConfig(this.defaults, config);

	  // Set config.method
	  if (config.method) {
	    config.method = config.method.toLowerCase();
	  } else if (this.defaults.method) {
	    config.method = this.defaults.method.toLowerCase();
	  } else {
	    config.method = 'get';
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	Axios.prototype.getUri = function getUri(config) {
	  config = mergeConfig(this.defaults, config);
	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(mergeConfig(config || {}, {
	      method: method,
	      url: url,
	      data: (config || {}).data
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(mergeConfig(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	var Axios_1 = Axios;

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	var Cancel_1 = Cancel;

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel_1(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	var CancelToken_1 = CancelToken;

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	var spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

	/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */
	var isAxiosError = function isAxiosError(payload) {
	  return (typeof payload === 'object') && (payload.isAxiosError === true);
	};

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios_1(defaultConfig);
	  var instance = bind(Axios_1.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios_1.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios$1 = createInstance(defaults_1);

	// Expose Axios class to allow class inheritance
	axios$1.Axios = Axios_1;

	// Factory for creating new instances
	axios$1.create = function create(instanceConfig) {
	  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios$1.Cancel = Cancel_1;
	axios$1.CancelToken = CancelToken_1;
	axios$1.isCancel = isCancel;

	// Expose all/spread
	axios$1.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios$1.spread = spread;

	// Expose isAxiosError
	axios$1.isAxiosError = isAxiosError;

	var axios_1 = axios$1;

	// Allow use of default import syntax in TypeScript
	var default_1 = axios$1;
	axios_1.default = default_1;

	var axios = axios_1;

	const scroll = i$4`
    * {
        scrollbar-color: hsla(0,0%,100%,.2) transparent;
        -webkit-overflow-scrolling: touch;
    }

    *::-webkit-scrollbar {
        min-width: 10px;
        max-width: 14px;
        width: 1vw;
    }

    *::-webkit-scrollbar-track,
    *::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
        min-height: 50px;
        border: 3px solid transparent;
        border-radius: 8px;
        background-color: hsla(0,0%,100%,.2);
        background-clip: padding-box;
    }

    *::-webkit-scrollbar-thumb:hover{
        background-color:hsla(0,0%,100%,.3);
    }

    *::-webkit-scrollbar-thumb:window-inactive {
        background-color: hsla(0,0%,100%,.05);
    }
`;

	const spinner = i$4`
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(1turn)
        }
    }

    .loading-spinner {
        animation: spin .6s linear infinite;
        border: 2px solid transparent;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        border-top-color: rgb(204, 123, 25);
        border-left-color: rgb(204, 123, 25);
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
    }
`;

	const mycss = {scroll, spinner};

	dayjs_min.extend(relativeTime);
	dayjs_min.locale('pt');

	class Media extends h{
	    static get styles() {
	      return [
	        i$4`
          @keyframes CrossFadeImage {
            from { opacity: 0 }
            to { opacity: 1 }
          }

          :host {
            font-size: 1rem;
          }

          .item {
            width: 7.3rem;
            height: 16rem;
            font-size: max(13px, 0.8rem);
            font-family: 'Open Sans Semibold', sans-serif;
            -webkit-font-smoothing: antialiased;
            /* padding: 15px 15px; */
          }
          .item .poster {
            width: 7.3rem;
            height: 11rem;
            position: relative;
            overflow: hidden;
            border-radius: 4px;
            background-color: rgba(0,0,0,.45);
            box-shadow: 0 0 4px rgba(0,0,0,.3);
            cursor: pointer;
          }
          .poster-icon {
            position: relative;
            width: 100%;
            transform: translateY(calc(11rem / 2));
          }
          .poster-icon>svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: hsla(0,0%,100%,.15);
            fill: currentColor;
            width: 2rem;
            height: 2rem;
          }
          .item .poster div {
            min-width:100%;
            min-height: 100%;
            background-size: cover;
            background-position: center center;
            animation-name: CrossFadeImage;
            animation-duration: 600ms;
          }
          .item .poster:hover {
            box-shadow: 0 0 0 1px #e5a00d, 0 0 4px rgba(0,0,0,.3);
            cursor: pointer;
            color:hsla(0,0%,100%,.7);
          }
          .item .poster:hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(farthest-corner at 50% 50%,rgba(50,50,50,.5) 50%,#323232 100%);
            animation-duration: 250ms;
            animation-name: CrossFadeImage;
          }
          .item .poster button {
            color: inherit;
          }
          .item .poster button.moreDetails {
            margin: 0;
            padding: 0;
            outline: none;
            border: 2px solid hsla(0,0%,100%,.7);
            border-radius: 50%;
            cursor: pointer;
            transition: color .2s;
            -webkit-user-select: none;
            user-select: none;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
            background-color: rgba(0,0,0,.45);

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);

            display: none;
            width: 42px;
            height: 42px;
            transition: all .2s;
            opacity: 0;
            fill: currentcolor;
          }
          .item .poster button.moreDetails:hover {
            background-color: #e5a00d;
            color: #1F2326;
            border-color: transparent;
          }
          .item .poster:hover button.moreDetails {
            opacity: 1;
            display: block;
            animation-duration: 250ms;
            animation-name: CrossFadeImage;
          }
          .item .title-container {
            padding-top: 10px;
          }
          .item .title-container * {
            display: block;
            cursor: default;
            color: #fff;
            line-height: 20px;
            height: 20px;
            user-select: none;
            -webkit-user-select: none;
            overflow: hidden !important;
            min-width: 0;
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap !important;
          }
          .item .title-container a {
            text-decoration: none;
            cursor: pointer;
          }
          .item .title-container a:hover {
            text-decoration: underline;
            cursor: pointer;
          }
          .item .title-container span.loading {
            color: #fff;
          }
          .item .title-container span {
            color: hsla(0,0%,100%,.45);
          }

          .item .poster span.episodes {
            top: 4px;
            right: 4px;
            background-color: #e5a00d;
            color: #1f2326;
            position: absolute;
            padding: 0 6px;
            min-width: 14px;
            border-radius: 4px;
            text-align: center;
            font-family: 'Open Sans Bold', sans-serif;
            line-height: 22px;
            font-size: 14px;
            opacity: 1;
            transition: all .2s;
          }

          .item .poster:hover span.episodes {
            opacity: 0;
            transform: translateY(-10px);
          }
        `
	      ]
	    }

	    render(){
	      if (!this.loaded)
	        return T`
          <div class="item">
            <div class="poster">
              <div></div>
            </div>
            <div class="title-container">
              <span class="loading">A carregar...</span>
            </div>
          </div>
        `
	        return T`
            <div class="item">
              <div class="poster-icon">
                ${this._htmlIcon(this.library.type)}
              </div>
              <div class="poster" @click="${this._handleClick}">
                <div style=${i({backgroundImage: `${this.posterBlob}`})}></div>
                ${this.media.episodes!==undefined?T`<span class="episodes">${this.media.episodes}</span>`:``}
                <button class="moreDetails">
                  <svg viewBox="17.64 140.945 560 560"> <path d="M264.418,570.445v-33.222h-59.634l74.75-74.75l-23.421-23.423l-74.75,74.75v-59.633h-33.222v116.277H264.418 M339.168,402.839l74.75-74.75v59.634h33.222V271.445H330.863v33.223h59.633l-74.75,74.75L339.168,402.839z"/> </svg>
                </button>
              </div>
              <div class="title-container">
                <a title="${this.media.title}" @click="${this._handleClick}">${this.media.title}</a>
                <span class="year">${this.media.year}</span>
                ${this.showTimeAgo?T`
                  <span class="secondary-info">${dayjs_min.unix(this.media.added).fromNow()}</span>
                `:``}
              </div>
            </div>
        `
	    }

	    get posterBlob() {
	      if (!this._posterBlob) return `url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")`
	      return `url("${this._posterBlob}")`
	    }

	    _htmlIcon(type) {
	      switch(type) {
	        case "menu":
	          return T`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M28 420h504v62.222H28V420zm0-171.333h504v62.222H28v-62.222zM28 78h504v62.222H28V78z"></path>
            </svg>
          `
	        case "home":
	          return T`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M0 520V296.569a40 40 0 0 1 11.716-28.285L280 0l268.284 268.284A40 40 0 0 1 560 296.57V520c0 22.091-17.909 40-40 40H340V360H220v200H40c-22.091 0-40-17.909-40-40z"></path>
            </svg>
          `
	        case "show":
	          return T`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M400 10h70L351.25 110H546c7.732 0 14 6.268 14 14v412c0 7.732-6.268 14-14 14H14c-7.732 0-14-6.268-14-14V124c0-7.732 6.268-14 14-14h194.75L90 10h70l120 100L400 10zm100 433V177a7 7 0 0 0-7-7H67a7 7 0 0 0-7 7v266a7 7 0 0 0 7 7h426a7 7 0 0 0 7-7z"></path>
            </svg>
          `
	        case "music":
	          return T`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M199.855 473.52a35.61 35.61 0 0 1 .145 3.222c0 33.115-44.809 68.962-100 80-55.191 11.039-100-6.885-100-40s44.809-68.961 100-80c22.504-4.5 43.282-4.186 60 .01V96.85c0-11.257 8.788-22.154 19.612-24.319L540.388.377C551.212-1.788 560 5.594 560 16.85V392c0 .52-.05 1.028-.145 1.52.096 1.058.145 2.132.145 3.222 0 33.115-44.808 68.962-100 80-55.192 11.039-100-6.885-100-40s44.808-68.961 100-80c22.504-4.5 43.282-4.186 60 .01V124.455l-320 64V472c0 .52-.05 1.028-.145 1.52z"></path>
            </svg>
          `
	        case "photos":
	          return T`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M440 120h100c11.038 0 20 8.962 20 20v360c0 11.038-8.962 20-20 20H20c-11.038 0-20-8.962-20-20V140c0-11.038 8.962-20 20-20h100V60c0-11.038 8.962-20 20-20h280c11.038 0 20 8.962 20 20v60zm-160 40c-88.306 0-160 71.694-160 160s71.694 160 160 160 160-71.694 160-160-71.694-160-160-160zm0 80c44.153 0 80 35.847 80 80s-35.847 80-80 80-80-35.847-80-80 35.847-80 80-80z"></path>
            </svg>
          `
	        // movies
	        default:
	          return T`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M560 40c0-11.038-8.962-20-20-20H20C8.962 20 0 28.962 0 40v480c0 11.038 8.962 20 20 20h520c11.038 0 20-8.962 20-20V40zM100 468v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 310v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V310c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 78v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 70v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V70c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 158v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8z"></path>
            </svg>
          `
	      }
	    }

	    updated(changedProperties) {
	      super.updated(changedProperties);
	      if (changedProperties.has('media') || changedProperties.has('loaded')) {
	        this._posterBlob = null;
	        this._getPosterBlob();
	      }
	    }

	    _handleClick(e) {
	        e.preventDefault();
	        page(`/${this.library.id}/${this.library.slug}/${this.id}`);
	    }

	    _getPosterBlob() {
	      if (!this.loaded) return
	      if (!'poster' in this.media) return
	      if (this._posterBlob) return

	      // axios.get(this.media.poster)
	      //   .then(res=>res.data)
	      //   .then(data=>console.log(data))
	      //   .then(blob=>this._posterBlob=URL.createObjectURL(blob))
	      // return
	      fetch(this.media.poster)
	        .then(response => response.blob())
	        .then(blob => {
	          this._posterBlob = URL.createObjectURL(blob);
	        });
	    }

	    constructor(){
	        super();
	        this._posterBlob = null;
	        this.loaded = false; // for lazyloading
	    }

	    firstUpdated() {
	      const el = this.shadowRoot.querySelector('.item');
	      const observer = new IntersectionObserver( (entries) => {
	        if (entries.some( ({isIntersecting}) => isIntersecting ) ) {
	          this.loaded = true;
	        }
	      });
	      observer.observe(el);
	    }

	    static get properties(){
	        return {
	            library: { type: Object },
	            media: { type: Object },
	            _posterBlob: { type: String },
	            loaded: { type: Boolean },
	            showTimeAgo: { type: Boolean }
	        }
	    }

	}

	customElements.define('media-card', Media);

	class LibraryGrid extends h{
	    static get styles() {
	      return [
	        mycss.scroll,
	        mycss.spinner,
	        i$4`
          * {
              font-family: Open Sans Semibold, Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          @keyframes spin {
            0% {
                transform: rotate(0deg)
            }
            to {
                transform: rotate(1turn)
            }
          }
          #spinnerWrap {
            display: flex;
            margin: 1em auto 2em auto;
          }
          .loading-spinner {
            position: relative;
          }
          .container {
            height: 100%;
            width: 100%;
            overflow-y: auto;
            overflow-x: hidden;
          }
          .container .row {
            display: grid;
            grid-template-columns: repeat(auto-fill, 7.3rem);
            grid-gap: 1rem;
            justify-content: space-between;
            justify-items: center;
            margin: 1rem;
          }
        `
	      ]
	    }

	    render(){
	      return T`
        <div class="container">
          <div class="row">
            ${this.library.map(item => T`
              <media-card 
                .media=${item} 
                .library=${this.currentLibrary} 
                id=${item.id} 
                title=${item.title}
                ?showTimeAgo=${true}
              ></media-card>
            `)}
          </div>
          ${this.loading?T`<div id="spinnerWrap"><div class="loading-spinner"></div></div>`:``}
        </div>
      `;
	    }

	    updated(changedProperties) {
	      if (this.intersectionObserver) this.intersectionObserver.disconnect();
	      if (!this.loading) return

	      const options = {
	        // Not sure why isn't working
	        // root: this.shadowRoot.querySelector('div.container'),
	        // rootMargin: '200px 0px 0px 0px',
	        // threshold: 0
	      };
	      const el = this.shadowRoot.querySelector('#spinnerWrap');
	      this.intersectionObserver = new IntersectionObserver( (entries) => {
	        if (entries.some( ({isIntersecting}) => isIntersecting ) ) {
	          let event = new CustomEvent('library-fetch-more', {
	            bubbles: true, 
	            composed: true });
	          this.dispatchEvent(event);
	        }
	      }, options);
	      this.intersectionObserver.observe(el);
	    }

	    static get properties(){
	        return {
	          currentLibrary: { type: Object },
	          library: { type: Object },
	          lastFetch: { type: Number },
	          loading: { type: Boolean }
	        };
	    }

	}

	customElements.define('library-grid', LibraryGrid);

	class BackgroundContainer extends h{
	  static get styles() {
	    return i$4`
      :host {
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-color: #3f4245;
      }
      .background-image {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        transition: background 0.5s ease-in-out 0s;
        -webkit-transition: background 0.5s ease-in-out 0s;
        -moz-transition: background 0.5s ease-in-out 0s;
        -o-transition: background 0.5s ease-in-out 0s;
      }
      .background-image-noise {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(/img/noise.png);
        z-index: 2;
      }
    `;
	  }

	  render(){ 
	    return T`
      <div class="background-image" style=${i({'background-image': this.backgroundUrl})}></div>
      <div class="background-image-noise"></div>
    `;
	  }

	  constructor(){
	      super();
	  }

	  get backgroundUrl() {
	    if (!this.background) return `url(/img/background.png)`
	    return `url(${this.background})`
	  }

	  static get properties(){
	      return {
	          background: { type: String }
	      };
	  }
	}

	customElements.define('background-container', BackgroundContainer);

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */class n extends s{constructor(i){if(super(i),this.vt=A,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A)return this.Vt=void 0,this.vt=r;if(r===w)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.vt)return this.Vt;this.vt=r;const s=[r];return s.raw=s,this.Vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}}n.directiveName="unsafeHTML",n.resultType=1;const o=i$1(n);

	class mediaModal extends h{
	    static get styles() {
	      return [
	        mycss.scroll,
	        i$4`
          * {
              font-family: Open Sans Semibold, Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          #container {
            width: 100% !important;
            height: 100%;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            box-sizing: border-box;
            padding: 3rem;
          }
          #top {
            font-size: 13px;
            font-family: Open Sans Semibold, Helvetica Neue, Helvetica, Arial, sans-serif;
            position: relative;
            color: #eee;
            display: flex;
            flex-wrap: wrap;
            max-width: 100%;
            column-gap: 3rem;
          }
          #topPoster {
            width: 250px;
            height: 375px;
            position: relative;
            border-radius: 4px;
            background-color: rgba(0,0,0,.45);
            box-shadow: 0 0 4px rgba(0,0,0,.3);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            margin-bottom: 3rem;
          }
          #topInfo {
            flex-grow: 1;
            min-width: 10%;
            width: 60%;
            max-width: 750px;
            flex-basis: 350px;
            margin-bottom: 3rem;
          }
          #topInfo .primary {
            font-size: 24px;
            max-width: 100%;
          }
          #topInfo .secondary {
            font-size: 15px;
            line-height: 30px;
          }
          #topInfo .tertiary {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 4px;
            color: hsla(0,0%,98%,.75);
            font-size: 15px;
          }
          #topInfo .tertiary span.contentRating {
            text-transform: uppercase;
            font-size: 13px;
            background-color: rgba(0,0,0,.15);
            padding: 0 8px;
            border-radius: 4px;
            white-space: nowrap;
            transition: all .2s;
          }
          #topInfo .tertiary .audienceRating {
            display: flex;
          }
          #topInfo .tertiary div.imdb-icon {
            width: 2.5em;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEuNDE0IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTAgODkuOTk2QzAgNjIuMzg0IDIyLjM3OCA0MCA0OS45OTcgNDBoOTAwLjAwNkM5NzcuNjE2IDQwIDEwMDAgNjIuMzg4IDEwMDAgODkuOTk2djM4MC4wMDhjMCAyNy42MTItMjIuMzc4IDQ5Ljk5Ni00OS45OTcgNDkuOTk2SDQ5Ljk5N0MyMi4zODQgNTIwIDAgNDk3LjYxMiAwIDQ3MC4wMDRWODkuOTk2eiIgZmlsbD0iI2UxYmUwMCIvPjxwYXRoIGQ9Ik03NjkuNjggMTM0Ljc2djk0LjY0YzYuMDMtNi45NzYgMTIuNzUzLTEyLjE4MSAyMC4xNy0xNS42MSA3LjQxOS0zLjQyOCAxOC41NTItNS4xNTcgMjcuMjQtNS4xNTcgMTAuMDEgMCAxOC42ODUgMS41NTIgMjYuMDQgNC42NjcgNy4zNjIgMy4xMDkgMTIuOTY3IDcuNDcxIDE2LjgyOSAxMy4wOCAzLjg1NyA1LjYxNCA2LjE3MiAxMS4xMSA2Ljk2MiAxNi40ODUuNzgxIDUuMzc3IDEuMTc2IDE2Ljg0MyAxLjE3NiAzNC40MXY4MS42M2MwIDE3LjQ0OC0xLjE3NiAzMC40MzQtMy41MjggMzguOTgxLTIuMzU3IDguNTQzLTcuODgxIDE1Ljk1OC0xNi41NjcgMjIuMjMtOC42OTEgNi4yNjctMTkgOS40MDUtMzAuOTUyIDkuNDA1LTguNTY3IDAtMTkuNjQ4LTEuODU3LTI3LjA3LTUuNTgxLTcuNDI0LTMuNzI0LTE0LjIxLTkuMzE0LTIwLjM2Mi0xNi43NjdsLTQuNzA5IDE4LjUzOGgtNjguMDR2LTI5MC45NWg3Mi44MDltLTYzMS41OCAyOTAuOTVoNzUuNTh2LTI5MC45NWgtNzUuNTh2MjkwLjk1bTE5OS4zOC0yOTAuOTVjMi44ODEgMTcuNjE1IDUuOSAzOC4yOSA5LjA2IDYyLjAxbDEwLjgyOSA3My45MTUgMTcuNTA1LTEzNS45Mmg5OC43M3YyOTAuOTVoLTY1Ljk5bC0uMjM5LTE5Ni4zOC0yNi40MzMgMTk2LjM4aC00Ny4xNWwtMjcuODYyLTE5Mi4xMS0uMjM4IDE5Mi4xMWgtNjYuMnYtMjkwLjk1aDk3Ljk5bTIxOC4zNiAwYzM2LjU4MSAwIDU3LjYyOSAxLjY4MSA3MC41MiA1LjAzIDEyLjg5NSAzLjM0NyAyMi43MDUgOC44NDcgMjkuNDE5IDE2LjUwNCA2LjcxOSA3LjY1NyAxMC45MTUgMTYuMTgxIDEyLjU5NSAyNS41NjcgMS42NzcgOS4zOSAyLjc1MiAyNy44NDMgMi43NTIgNTUuMzZ2MTAyLjE4YzAgMjYuMDgtMS40NjEgNDMuNTE5LTMuOTE4IDUyLjMxLTIuNDYyIDguOC02Ljc0OCAxNS42NzYtMTIuODYyIDIwLjYzOC02LjEyNCA0Ljk2Mi0xMy42NzYgOC40MzMtMjIuNjcyIDEwLjQwNC05IDEuOTc3LTIyLjU1MSAyLjk2Mi00MC42NTcgMi45NjJoLTkxLjU3di0yOTAuOTVoNTYuMzltMjM5LjMzIDIyMC4zNWMwIDE0LjA4LS43IDIyLjk3Ny0yLjA5NiAyNi42NzctMS40IDMuNzA0LTcuNDg1IDUuNTY2LTEyLjEgNS41NjYtNC41IDAtNy41LTEuNzg2LTkuMDItNS4zNzEtMS41MTktMy41ODEtMi4yNzItMTEuNzU3LTIuMjcyLTI0LjUzOHYtNzYuODkxYzAtMTMuMjU3LjY2Ny0yMS41MTkgMi0yNC44MDkgMS4zMzMtMy4yNzcgNC4yNDgtNC45MjQgOC43NDMtNC45MjQgNC42MDkgMCAxMC43OTYgMS44NzEgMTIuMzc2IDUuNjMzIDEuNTc2IDMuNzYyIDIuMzY3IDExLjc5NSAyLjM2NyAyNC4wOXY3NC41N20tMjAzLjM3LTE2Ny45OWMyLjk4NiAxLjcyOCA0LjkwMSA0LjQ1NyA1LjczNCA4LjE1Ny44MzMgMy43MDkgMS4yNTcgMTIuMTM4IDEuMjU3IDI1LjI5djExMi44YzAgMTkuMzcxLTEuMjU3IDMxLjIzLTMuNzY3IDM1LjU5NS0yLjUwOSA0LjM3MS05LjIgNi41NDgtMjAuMDYgNi41NDh2LTE5MC45OWM4LjIzNCAwIDEzLjg1Mi44NjYgMTYuODM4IDIuNiIvPjwvc3ZnPg==);
            background-repeat: no-repeat;
          }
          #topInfo #summary {
            margin-top: 20px;
            overflow: hidden;
            max-width: 750px;
            color: #fafafa;
            line-height: 1.71428571;
            font-size: 15px;
          }
          #summary .collapsible {
            max-height: 75px;
            overflow: hidden;
            transition: max-height 0.2s ease-in-out 0s;
          }
          #summary button {
            color: hsla(0,0%,100%,.45);
            text-transform: uppercase;
            font-size: 13px;
            font-family: Open Sans Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          #summary button:hover {
            color: white;
          }
          #topInfo #details {
            margin-top: 30px;
          }
          #topInfo #details div{
            display: flex;
          }
          #topInfo #details div span.title {
            flex: 0 0 110px;
            margin-right: 10px;
            padding-top: 2px;
            color: hsla(0,0%,98%,.45);
            text-transform: uppercase;
          }
          #topInfo #details div span.group {
            font-size: 15px;
          }
          #topInfo #details div span.group span:hover {
            text-decoration: underline;
          }

          #roles {
            width: 100%;
          }

          #rolesTitle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            min-height: 25px;
            max-width: 100%;
          }

          #rolesTitle>span {
            color: #eee;
            font-size: 15px;
            font-family: Open Sans Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
            line-height: 24px;
            overflow: hidden!important;
            min-width: 0;
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap!important;
            flex-grow: 1;
          }

          #rolesTitle>div {
            flex-shrink: 0;
            margin-left: auto;
            font-size: 18px;
            line-height: 24px;
          }

          #rolesTitleButtons button {
            font-size: 18px;
            cursor: pointer;
            color: hsla(0,0%,100%,.7);
            margin-left: 10px;
            padding: 0 5px;
            outline: none;
            border: 0;
            background: none;
            transition: color .2s;
            fill: currentColor;
          }

          :root {
            font-size: 1vw;
          }

          #rolesTitleButtons button.disabled {
            cursor: default;
            opacity: .15;
            color: hsla(0,0%,100%,.3);
            pointer-events: none;
          }

          #rolesTitleButtons button>svg {
            height: 1em;
            width: 1em;
          }

          #rolesTitleButtons button:hover {
            color: #fff;
          }

          #rolesGallery {
            width: 100%;
            box-sizing: border-box;
            padding-bottom: 20px;
            display: flex;
            align-content: start;
            justify-content: space-between;
            gap: 1rem;
            overflow-x: auto;
            scroll-behavior: smooth;
          }

          #rolesGallery>div {
            padding: 2px;
            z-index: 0;
            transition: none 0s ease 0s;
            max-width: 10rem;
          }

          #rolesGallery>div .gallery-round.image {
            margin-top: -10rem;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          #rolesGallery>div .gallery-round {
            border-radius: 50%;
            width: 10rem;
            height: 10rem;
          }

          #rolesGallery>div .gallery-round.text {
            position: relative;
            background-color: rgba(0,0,0,.45);
            box-shadow: 0 0 4px rgb(0 0 0 / 30%);
            font-size: 40px;
            z-index: -1;
            color: hsla(0,0%,100%,.15);
            margin: auto auto;
            text-align: center;
            line-height: 10rem;
          }

          #rolesGallery>div .gallery-round:hover {
            box-shadow: 0 0 0 1px #e5a00d, 0 0 4px rgb(0 0 0 / 30%);
          }

          #rolesGallery>div .group {
            padding-top: 10px;
            text-align: center;
            font-size: 13px;
            display: flex;
            flex-direction: column;
            cursor: default;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100%;
            overflow: hidden;
          }

          #rolesGallery>div .group>span {
            font-size: inherit;
            overflow: inherit;
            text-overflow: inherit;
          }

          #rolesGallery>div .group .primary {
            color: #fff;
          }

          #rolesGallery>div .group .secondary {
            color: hsla(0,0%,100%,.45);
          }

          button {
            margin: 0;
            padding: 0;
            outline: none;
            border: 0;
            border-radius: 0;
            background: none;
            text-align: inherit;
            text-decoration: none;
            cursor: pointer;
            transition: color .2s;
            -webkit-user-select: none;
            user-select: none;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
        `
	      ]
	    }
	  
	  get _htmlContentRating() {
	    if (!('contentRating' in this.media)) return
	    return T`<span class="contentRating">${this.media.contentRating}</span>`
	  }

	  get _htmlAudienceRating() {
	    let imageClass = "";
	    if (!('audienceRating' in this.media)) return
	    if ('audienceRatingImage' in this.media) {
	      if (this.media.audienceRatingImage.startsWith("imdb"))
	        imageClass = "imdb-icon";
	    }
	    return T`
      <div class="audienceRating">
        <div class="${imageClass}"></div>
        <span>${this.media.audienceRating}</span>
      </div>
    `
	  }

	  render(){
	    if (!(["movie", "show"].includes(this.media.type)))
	    // Need to add support to `season` and `episode`
	    // until then show as Not Supported
	      return T`
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%; height: 100%;">
          <div style="height: 3rem; width: 3rem; color: #e5a00d; fill: currentcolor;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 140.464 595.279 560.961">
              <g><g><path d="M582.911,569.707L372.628,183.151c-33.786-56.878-116.145-56.954-149.976,0L12.379,569.707 c-34.538,58.121,7.276,131.719,74.97,131.719h420.575C575.56,701.425,617.449,627.886,582.911,569.707z M297.64,631.666 c-19.228,0-34.88-15.65-34.88-34.879s15.652-34.879,34.88-34.879s34.88,15.65,34.88,34.879S316.867,631.666,297.64,631.666z M332.52,492.148c0,19.227-15.652,34.879-34.88,34.879s-34.88-15.652-34.88-34.879V317.749c0-19.228,15.652-34.88,34.88-34.88 s34.88,15.652,34.88,34.88V492.148z"/></g></g>
            </svg>
          </div>

          <p>NOT SUPPORTED YET</p>
        </div>
      `

	    let genres, directors, writers;
	    if ('genre' in this.media)
	        genres = T`${o(this.media.genre.map(item=>{return `<span>${item.name}</span>`}).join(", "))}`;
	    if ('director' in this.media)
	        directors = T`${o(this.media.director.map(item=>{return `<span>${item.name}</span>`}).join(", "))}`;
	    if ('writer' in this.media)
	        writers = T`${o(this.media.writer.map(item=>{return `<span>${item.name}</span>`}).join(", "))}`;
	    if ('producer' in this.media)
	        T`${o(this.media.producer.map(item=>{return `<span>${item.name}</span>`}).join(", "))}`;


	    return T`
      <div id="container">
        <div id="top">
          <div id="topPoster" style="background-image: url(${this.media.posterLarge})"></div>
          <div id="topInfo">
            <div class="primary">${this.media.title}</div>
            <div class="secondary">${this.media.year}</div>
            <div class="tertiary">
              <span>${this.getTimeDuration(this.media.duration)}</span>
            </div>
            ${this.media.summary.trim() != "" ? T`
              <div id="summary">
                <div class="collapsible">
                  <div class="measureContainer">
                    ${this.media.summary}
                  </div>
                </div>
                <button @click=${this._readMoreClickEvent}>Read more</button>
              </div>
            `:``}
            <div id="details">
              <div><span class="title">Directed by</span><span class="group">${directors}</span></div>
              <div><span class="title">Written by</span><span class="group">${writers}</span></div>
              <div><span class="title">Studio</span><span class="group"><span>${this.media.studio}</span></span></div>
              <div><span class="title">Genre</span><span class="group">${genres}</span></div>
            </div>
          </div>
        </div>
        ${this.media.type == "show" ? T`
          <div style="display: flex; gap: 15px; flex-wrap: wrap;">
            ${this.mediaSeasons.map(item => T`
              <media-card
                .media=${item}
                .library=${this.currentLibrary}
                ?showTimeAgo=${false}
                id=${item.id}
              ></media-card>
            `)}
          </div>
        `:``}
        ${'role' in this.media ? T`
          <div id="roles">
            <div id="rolesTitle">
              <span>Cast</span>
              <!-- <div id="rolesTitleButtons">
                <button class="disabled"><svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" stroke-miterlimit="1.414" stroke-linejoin="round"><path d="m28 280l252-252 56 56-196 196 196 196-56 56-252-252"></path></svg></button>
                <button class=""><svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" stroke-miterlimit="1.414" stroke-linejoin="round"><path d="m532 280l-252-252-56 56 196 196-196 196 56 56 252-252"></path></svg></button>
              </div> -->
            </div>
              <div id="rolesGallery">
                ${this.media.role.map(item => T`
                  <div>
                    <div class="gallery-round text">${this.getTwoCapitalLetters(item.name)}</div>
                    <div class="gallery-round image" style="background-image: url(${item.thumb});"></div>
                    <div class="group">
                      <span class="primary" title="${item.name}">${item.name}</span>
                      <span class="secondary" title="${item.role}">${item.role}</span>
                    </div>
                  </div>
                `)}
            </div>
          </div>
        `:``}
      </div>
    `
	  }

	  _getPosterBlob() {
	    if (!'posterLarge' in this.media) return
	    if (this._posterBlob) return
	    
	    fetch(this.media.posterLarge)
	    .then(response => response.blob())
	    .then(blob => {
	      this._posterBlob = URL.createObjectURL(blob);
	    });
	  }

	  _readMoreClickEvent() {
	    const elCollapsible = this.shadowRoot.querySelector('#summary .collapsible');
	    const elMeasure = this.shadowRoot.querySelector('#summary .measureContainer');
	    const elButton = this.shadowRoot.querySelector('#summary button');
	    const size = elMeasure.offsetHeight;
	    if (elCollapsible.style.maxHeight == "") {
	      elCollapsible.style.maxHeight = size+'px';
	      elButton.textContent = "Read less";
	    } else {
	      elCollapsible.style.maxHeight = "";
	      elButton.textContent = "Read more";
	    }
	  }

	  getTwoCapitalLetters(str) {
	    let result = str.trim().split(" ");
	    if (result.length >= 2) {
	      return (result[0][0]+result[result.length-1][0]).toUpperCase()
	    }
	    if (result.length == 1) {
	      return result[0][0].toUpperCase()
	    }
	    return ""
	  }

	  getTimeDuration(timems) {
	    let time = new Date(timems);
	    if (time.getUTCHours() < 1)
	      return time.getMinutes()+' min'
	    return time.getUTCHours()+' h '+time.getMinutes()+' min'
	  }

	  get mediaSeasons() {
	    if (!('seasons' in this.media)) return {}
	    return this.media.seasons.filter( season => 'id' in season )
	  }

	  static get properties(){
	      return {
	          currentLibrary: { type: Object },
	          media: { type: Object }
	      }
	  }
	}

	customElements.define('media-modal', mediaModal);

	const LANG = {
	    PT: {
	        home: "Início",
	        readMore: "Ler mais",
	        readLess: "Ler menos",
	        directedBy: "Realizado por",
	        writtenBy: "Escrito por",
	        studio: "Estúdio",
	        genre: "Género",
	        cast: "Elenco"
	    },
	    EN: {
	        home: "Home",
	        readMore: "Read more",
	        readLess: "Read less",
	        directedBy: "Directed by",
	        writtenBy: "Written by",
	        studio: "Studio",
	        genre: "Genre",
	        cast: "Cast"
	    }
	};

	const languageFind = lang => {
	    if (!lang) return LANG.EN
	    // if (["prt", "bra"].includes(lang)) return LANG.PT // TODO
	    return LANG.EN
	};

	const PAGES = {
	  NONE: 0,
	  LANDING_PAGE: 1,
	  LIBRARY_PAGE: 2,
	  MEDIA_PAGE: 3
	};

	class AppContainer extends h {

	  /****************/
	  /* HTML AND CSS */
	  /****************/

	  static get styles() {
	    return [
	      mycss.scroll,
	      mycss.spinner,
	      i$4`
        button {
          appearance: none;
          border: none;
          background-color: unset;
          outline: none;
          cursor: pointer;
          user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }

        * {
            font-family: Open Sans Semibold, Helvetica Neue, Helvetica, Arial, sans-serif;
        }

        :host {
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;

          --sidebar-width: 60px;
          --header-height: 50px;
          --text-color: rgba(255, 255, 255, 1);
          --text-color-light: rgba(255, 255, 255, .75);
          --text-color-lighter: rgba(255, 255, 255, .45);
          --text-weight: 600;
          --text-family: "Open Sans Semibold", "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        #container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
        }

        #sidebar {
          overflow: hidden;
          min-width: var(--sidebar-width);
          max-width: var(--sidebar-width);
          width: var(--sidebar-width);
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: #1f2326;
          font-size: var(--sidebar-width);
        }

        #content {
          height: 100vh;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        #content>div:not(#header) {
          width: calc(100vw - var(--sidebar-width));
          height: calc(100vh - var(--header-height));
          flex-grow: 1;
        }

        div.slot {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 15px;
          overflow: hidden auto;
          color: var(--text-color-light);
        }

        library-grid,media-modal {
          transition: display 0s, opacity 0.5s linear;
        }

        #sidebar .link {
          display: flex;
          justify-content: center;
          align-content: center;
          min-height: var(--header-height);
          height: var(--header-height);
          width: 100%;
          color: var(--text-color-light);
          cursor: pointer;
          font-size: inherit;
          transition: background-color .1s;
        }

        #sidebar .link:hover, 
        #sidebar .link.active {
          background-color: rgba(255,255,255,0.1);
        }

        #sidebar .link.active {
          box-shadow: inset 4px 0 0 0 #e5a00d;
        }

        #sidebar .link svg {
          width: 0.33em;
          fill: currentColor;
          transition: color .2s;
        }

        #sidebar .link:hover svg,
        #sidebar .link.active svg {
          color: var(--text-color);
        }

        #header {
          padding-right: 25px;
          padding-left: 40px;
          height: var(--header-height);
          box-shadow: 0 3px 6px 0 rgb(0 0 0 / 15%);
          color: var(--text-color-light);
          font-size: 16px;
        }

        #header .left {
          display: flex;
          align-items: center;
          height: 100%;
        }

        #header .left button {
          margin-right: 25px;
          padding-right: 13px;
          min-width: 30px;
          color: var(--text-color-light);
          font-size: inherit;
          transition: color .2s;
        }

        #header .left button:hover {
          color: var(--text-color);
        }

        #header .left button span.arrow-icon {
          border-style: solid;
          border-color: hsla(0,0%,100%,.7);
          border-top-width: 0;
          border-right: 4px solid transparent;
          border-bottom-width: 5px;
          border-left: 4px solid transparent;
          transition: border .2s,transform .4s;
          transform: translateY(-50%) rotateX(180deg);
          position: absolute;
          top: 50%;
          right: 0;
          margin: 0;
          display: inline-block;
          width: 0;
          height: 0;
          vertical-align: middle;
        }

        #header .left button:hover span.arrow-icon {
          border-color: #fff transparent;
        }

        #header .left span.total-items {
          line-height: 1.5;
          background-color: rgba(0,0,0,.15);
          padding: 0 8px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .tooltip {
          font-size: 13px;
          padding: 2px 10px;
          border-radius: 4px;
          background-color: #191a1c;
          box-shadow: 0 4px 10px 0 rgb(0 0 0 / 35%);
          transform: translate(0);
          color: #eee;
        }
      `
	    ]
	  }

	  render(){
	    if (!this.initialized) return T`
      <background-container></background-container>
      <div class="loading-spinner"></div>
    `
	    return T`
      <background-container .background=${this.background}></background-container>
      <div id="container">
        ${this._htmlSidebar()}
        <div id="content">
          ${this._htmlHeader()}
          <div>
            ${this.currentPage == PAGES.LANDING_PAGE ? T`
              <div class="slot"><slot></slot></div>
            `:``}

            ${!this.isEmpty(this.libraryContent) && this.currentPage != PAGES.LANDING_PAGE ? T`
              <library-grid
                .lastFetch=${this.lastLibraryFetch}
                .library=${this.libraryContent.items}
                .currentLibrary=${this.currentLibrary}
                .loading=${this.libraryHasMore}
                ?hidden=${this.currentPage==PAGES.MEDIA_PAGE}
              ></library-grid>
            `:``}
            ${this.isEmpty(this.libraryContent) && this.currentPage == PAGES.LIBRARY_PAGE ? T`
              <div class="loading-spinner"></div>
            `:``}

            ${!this.isEmpty(this.currentMedia) && this.currentPage == PAGES.MEDIA_PAGE ? T`
              <media-modal
                .media=${this.currentMedia}
                .currentLibrary=${this.currentLibrary}
              ></media-modal>
            `:``}
            ${this.isEmpty(this.currentMedia) && this.currentPage == PAGES.MEDIA_PAGE ? T `
              <div class="loading-spinner"></div>
            `:``}
          </div>
        </div>
      </div>
    `
	  }

	  _htmlSidebar() {
	    return T`
      <div id="sidebar">
        <a class="link ${this.currentPage==PAGES.LANDING_PAGE ? "active" : ""}" href="/" title="Home">
          ${this._htmlSidebarIcon('home')}
        </a>
        ${this.libraries.map(item => T`
          <a class="link ${this.currentLibrary == item && this.currentPage!=PAGES.LANDING_PAGE ? "active" : ""}" href="/${item.id}/${item.slug}" title=${item.title} data-tooltip-title=${item.title}>
            ${this._htmlSidebarIcon(item.type)}
          </a>
        `)}
      </div>`
	  }

	  _htmlSidebarIcon(type) {
	    switch(type) {
	      case "menu":
	        return T`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path d="M28 420h504v62.222H28V420zm0-171.333h504v62.222H28v-62.222zM28 78h504v62.222H28V78z"></path>
          </svg>
        `
	      case "home":
	        return T`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path d="M0 520V296.569a40 40 0 0 1 11.716-28.285L280 0l268.284 268.284A40 40 0 0 1 560 296.57V520c0 22.091-17.909 40-40 40H340V360H220v200H40c-22.091 0-40-17.909-40-40z"></path>
          </svg>
        `
	      case "show":
	        return T`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path d="M400 10h70L351.25 110H546c7.732 0 14 6.268 14 14v412c0 7.732-6.268 14-14 14H14c-7.732 0-14-6.268-14-14V124c0-7.732 6.268-14 14-14h194.75L90 10h70l120 100L400 10zm100 433V177a7 7 0 0 0-7-7H67a7 7 0 0 0-7 7v266a7 7 0 0 0 7 7h426a7 7 0 0 0 7-7z"></path>
          </svg>
        `
	      case "music":
	        return T`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path d="M199.855 473.52a35.61 35.61 0 0 1 .145 3.222c0 33.115-44.809 68.962-100 80-55.191 11.039-100-6.885-100-40s44.809-68.961 100-80c22.504-4.5 43.282-4.186 60 .01V96.85c0-11.257 8.788-22.154 19.612-24.319L540.388.377C551.212-1.788 560 5.594 560 16.85V392c0 .52-.05 1.028-.145 1.52.096 1.058.145 2.132.145 3.222 0 33.115-44.808 68.962-100 80-55.192 11.039-100-6.885-100-40s44.808-68.961 100-80c22.504-4.5 43.282-4.186 60 .01V124.455l-320 64V472c0 .52-.05 1.028-.145 1.52z"></path>
          </svg>
        `
	      case "photos":
	        return T`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path d="M440 120h100c11.038 0 20 8.962 20 20v360c0 11.038-8.962 20-20 20H20c-11.038 0-20-8.962-20-20V140c0-11.038 8.962-20 20-20h100V60c0-11.038 8.962-20 20-20h280c11.038 0 20 8.962 20 20v60zm-160 40c-88.306 0-160 71.694-160 160s71.694 160 160 160 160-71.694 160-160-71.694-160-160-160zm0 80c44.153 0 80 35.847 80 80s-35.847 80-80 80-80-35.847-80-80 35.847-80 80-80z"></path>
          </svg>
        `
	      // movies
	      default:
	        return T`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path d="M560 40c0-11.038-8.962-20-20-20H20C8.962 20 0 28.962 0 40v480c0 11.038 8.962 20 20 20h520c11.038 0 20-8.962 20-20V40zM100 468v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 310v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V310c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 78v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 70v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V70c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 158v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8z"></path>
          </svg>
        `
	    }
	  }

	  _htmlHeader() {
	    // ${this.currentPage==PAGES.LIBRARY_PAGE?
	    //   html`
	    //     <button>Todos <span class="arrow-icon"></span></button>
	    //     <button>Por titulo <span class="arrow-icon"></span></button>
	    //     <span class="total-items">${this.libraryContent.length}</span>
	    //   `:html``
	    // }
	    return T`
      <div id="header">
        <div class="left">
          ${this.currentPage==PAGES.LANDING_PAGE?T`
          <button><span>${this.txt("home")}</span></button>
          `:``}
          ${this.currentPage==PAGES.MEDIA_PAGE?
            'parent' in this.currentMedia?
            T`
              <button @click="${() => page(`/${this.currentLibrary.id}/${this.currentLibrary.slug}/${this.currentMedia.parent.id}`)}">${this.currentMedia.parent.title}</span></button>
            `:
            T`
              <button @click="${() => page(`/${this.currentLibrary.id}/${this.currentLibrary.slug}`)}">${this.currentLibrary.title}</span></button>
            `:``
          }
          ${this.currentPage==PAGES.LIBRARY_PAGE?
            T`
              <button @click="${() => page(`/${this.currentLibrary.id}/${this.currentLibrary.slug}`)}">${this.currentLibrary.title}</span></button>
              <span class="total-items">${this.libraryContent.totalSize}</span>
            `:T``
          }
        </div>
        <div class="right"></div>
      </div>
    `
	  }

	  /****************/
	  /*    ROUTES    */
	  /****************/

	  _setupRoutes() {
	    // /
	    page('/',
	      (ctx, next) => this._processInitialData(ctx, next),
	      (ctx) => this._pageRouteLanding(ctx)
	    );
	    // /:id/:slug
	    page(/^\/(\d+)\/([a-z0-9_-]+)$/,
	      (ctx, next) => this._processInitialData(ctx, next),
	      (ctx) => this._pageRouteLibrary(ctx)
	    );
	    // /:id/:slug/:media
	    page(/^\/(\d+)\/([a-z0-9_-]+)\/(\d+)$/,
	      (ctx, next) => this._processInitialData(ctx, next),
	      (ctx, next) => this._pageRouteLibrary(ctx, next),
	      (ctx) => this._pageRouteMedia(ctx)
	    );
	    // catchall
	    page('*', () => page.redirect('/') );
	    page();
	  }

	  _pageRouteLanding(ctx) {
	    this.currentPage = PAGES.LANDING_PAGE;
	    // this.setDocumentTitle(this.currentLanguage.home)
	  }

	  _pageRouteLibrary(ctx, next) {
	    if (ctx.params[2]) {
	      next();
	      return
	    }

	    if (this.isEmpty(this.libraryContent) || this.libraryContentId != ctx.params[0])
	      this._fetchLibrary(ctx.params[0], this.libraryContent.length);

	    this.currentPage = PAGES.LIBRARY_PAGE;
	  }

	  _pageRouteMedia(ctx) {
	    this.currentMedia = {};
	    
	    this._fetchMedia(ctx.params[2])
	      .then( result => {
	        this.currentMedia = result.media;
	        if ('parent' in this.currentMedia)
	          this.setDocumentTitle(this.currentMedia.parent.title+' > '+this.currentMedia.title);
	        else 
	          this.setDocumentTitle(this.currentMedia.title);
	      });
	      this.currentPage = PAGES.MEDIA_PAGE;
	  }

	  _checkActiveLibrary(id, cmpSlug = false) {
	    if (!this.initialized) return
	    this.libraries.map( src => {
	      if (src.id == id) {
	        this.currentLibrary = src;
	        // this.setDocumentTitle(this.currentLibrary.title)
	        if (cmpSlug) {
	          if (src.slug != cmpSlug) {
	            // Change path to match slug, if incorrect
	            let url = window.location.pathname.split("/");
	            url[2] = src.slug;
	            url = url.join("/");
	            history.replaceState(null, '', url);
	          }
	        }
	      }
	    });
	  }

	  _processInitialData(ctx, next) {
	    if (this.initialized) {
	      if (Object.keys(ctx.params).length > 1)
	        this._checkActiveLibrary(ctx.params[0], ctx.params[1]);
	      next();
	      return
	    }
	    Promise.all([this._fetchServerInfo(), this._fetchLibraries()])
	      .then( () => {
	        this.initialized = true;
	        this._processInitialData(ctx, next);
	      });
	  }
	  
	  async _fetchServerInfo() {
	    // Not much relevant
	    return axios.get(`/api/server`)
	      .then(res=>this.serverInfo = res.data.result)
	      .then(res => 
	        this.currentLanguage = languageFind(this.serverInfo.countryCode))
	  }

	  async _fetchLibraries() {
	    return axios(`/api/libraries`)
	      .then(res=>this.libraries = res.data.result)
	  }

	  async _fetchLibrary(id, start=0) {
	    if (start==0) this.libraryContent = {};

	    if (typeof this.libraryCancelToken != typeof undefined)
	      this.libraryCancelToken.cancel();

	    this.libraryCancelToken = axios.CancelToken.source();

	    axios.get(`/api/libraries/${id}`, {
	      params: {start: start},
	      cancelToken: this.libraryCancelToken.token
	    })
	    .then(res=>{
	      if (start==0) this.libraryContent = res.data.result;
	      else this.libraryContent.items = [...this.libraryContent.items, ...res.data.result.items];
	      this.lastLibraryFetch = Date.now();
	    });
	  }
	  
	  async _fetchMedia(id) {
	    if (typeof this.mediaCancelToken != typeof undefined)
	      this.mediaCancelToken.cancel();

	    this.mediaCancelToken = axios.CancelToken.source();

	    return axios.get(`/api/media/${id}`, {
	      cancelToken: this.mediaCancelToken.token
	    })
	      .then(res=>res.data.result)
	  }

	  _handleLibraryFetchMore() {
	    this._fetchLibrary(this.libraryContentId, this.libraryContent.items.length);
	  }

	  _pageChangeEvent() {
	    let event = new CustomEvent('page-change', { 
	      detail: {
	        currentLibrary: this.currentLibrary,
	        currentPage: this.currentPage,
	        background: this.background
	      },
	      bubbles: true, 
	      composed: true });
	    this.dispatchEvent(event);
	  }

	  /*****************/
	  /* AUX FUNCTIONS */
	  /*****************/

	  isEmpty(obj) {
	    return Object.keys(obj).length === 0
	  }

	  setDocumentTitle(prefix) {
	    document.title = prefix + ' > Plex';
	  }

	  /*********************/
	  /* GETTERS & SETTERS */
	  /*********************/

	  txt(val) {
	    if (!this.currentLanguage) return ""
	    return this.currentLanguage[val]
	  }

	  get libraryHasMore() {
	    if ('totalSize' in this.libraryContent)
	      if (this.libraryContent.totalSize <= this.libraryContent.items.length)
	        return false
	    return true

	  }

	  get libraryContentId() {
	    if (this.isEmpty(this.libraryContent)) return null
	    if ('library' in this.libraryContent)
	      return this.libraryContent.library.id
	  }

	  get currentPage() {
	    return this._currentPage
	  }

	  set currentPage(page) {
	    this._currentPage = page;
	    switch (page) {
	      case PAGES.LANDING_PAGE:
	        this.setDocumentTitle(this.currentLanguage.home);
	        break
	      case PAGES.LIBRARY_PAGE:
	        this.setDocumentTitle(this.currentLibrary.title);
	        break

	    }
	    this._pageChangeEvent();
	  }

	  get background() {
	    if (this.currentPage != PAGES.MEDIA_PAGE) return null
	    if (this.currentMedia)
	      if ('background' in this.currentMedia) return this.currentMedia.background
	  }

	  /*****************/
	  /* LIT FUNCTIONS */
	  /*****************/

	  connectedCallback() {
	    super.connectedCallback();
	    window.addEventListener('library-fetch-more', this._handleLibraryFetchMore.bind(this));
	  }

	  disconnectedCallback() {
	    window.removeEventListener('library-fetch-more', this._handleLibraryFetchMore);
	    super.disconnectedCallback();
	  }

	  static get properties(){
	    return {
	      isLoading: { type: Boolean },
	      _currentPage : { type: Number },

	      initialized: { type: Boolean },

	      serverInfo: { type: Object },
	      libraries: { type: Array },
	      currentLibrary: { type: Object },
	      libraryContent: { type: Object },
	      lastLibraryFetch: { type: Number },
	      currentMedia: { type: Object }
	    }
	  }

	  constructor(){
	    super();
	    this.currentPage = PAGES.NONE;
	    this.initialized = false;
	    this.lastLibraryFetch = null;
	    this.libraryContent = {};
	    this.currentMedia = {};
	    this._setupRoutes();
	  }

	}

	customElements.define('app-container', AppContainer);

})));
