import{c as Ne}from"./createLucideIcon-DOLBm2BF.js";import{R as A,r as u,h as O,e as rt}from"./index-B_BwmF1n.js";import{p as ye,o as F,u as _e,K as B,a as ot,b as X,n as R,L as N,_ as We,c as lt,d as ut,x as it,i as re,m as st,f as at,e as ct,R as ft,r as dt,g as mt,w as pt,h as vt,k as gt,l as Ke,O as Se,q as S,s as bt,F as Te,G as Ve,A as ht,t as Et,v as yt}from"./dialog-CJT0ZLl1.js";import{u as $t,i as ne,e as xt,o as Ue,d as se,m as ae,r as It,c as wt,s as Ft,f as St,h as Tt,a as Ct}from"./floating-ui.react-dom-BqMfx6bX.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]],Er=Ne("FileChartColumnIncreasing",Mt);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],yr=Ne("Filter",Pt),je=typeof document<"u"?A.useLayoutEffect:()=>{};function Rt(e){const t=u.useRef(null);return je(()=>{t.current=e},[e]),u.useCallback((...n)=>{const r=t.current;return r==null?void 0:r(...n)},[])}const J=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},K=e=>e&&"window"in e&&e.window===e?e:J(e).defaultView||window;function Lt(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function Dt(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function qe(e){let t=null;return()=>(t==null&&(t=e()),t)}const Ht=qe(function(){return Dt(/^Mac/i)}),kt=qe(function(){return Lt(/Android/i)});function At(e){return e.mozInputSource===0&&e.isTrusted?!0:kt()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}class Ot{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,n){this.nativeEvent=n,this.target=n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget,this.bubbles=n.bubbles,this.cancelable=n.cancelable,this.defaultPrevented=n.defaultPrevented,this.eventPhase=n.eventPhase,this.isTrusted=n.isTrusted,this.timeStamp=n.timeStamp,this.type=t}}function Ge(e){let t=u.useRef({isFocused:!1,observer:null});je(()=>{const r=t.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let n=Rt(r=>{e==null||e(r)});return u.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){t.current.isFocused=!0;let o=r.target,l=a=>{t.current.isFocused=!1,o.disabled&&n(new Ot("blur",a)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};o.addEventListener("focusout",l,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&o.disabled){var a;(a=t.current.observer)===null||a===void 0||a.disconnect();let i=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:i})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:i}))}}),t.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[n])}function Bt(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e;const l=u.useCallback(f=>{if(f.target===f.currentTarget)return r&&r(f),o&&o(!1),!0},[r,o]),a=Ge(l),i=u.useCallback(f=>{const d=J(f.target);f.target===f.currentTarget&&d.activeElement===f.target&&(n&&n(f),o&&o(!0),a(f))},[o,n,a]);return{focusProps:{onFocus:!t&&(n||o||r)?i:void 0,onBlur:!t&&(r||o)?l:void 0}}}let Z=null,ve=new Set,z=new Map,V=!1,ge=!1;const Nt={Tab:!0,Escape:!0};function $e(e,t){for(let n of ve)n(e,t)}function _t(e){return!(e.metaKey||!Ht()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function oe(e){V=!0,_t(e)&&(Z="keyboard",$e("keyboard",e))}function P(e){Z="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(V=!0,$e("pointer",e))}function Ye(e){At(e)&&(V=!0,Z="virtual")}function Qe(e){e.target===window||e.target===document||(!V&&!ge&&(Z="virtual",$e("virtual",e)),V=!1,ge=!1)}function ze(){V=!1,ge=!0}function be(e){if(typeof window>"u"||z.get(K(e)))return;const t=K(e),n=J(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){V=!0,r.apply(this,arguments)},n.addEventListener("keydown",oe,!0),n.addEventListener("keyup",oe,!0),n.addEventListener("click",Ye,!0),t.addEventListener("focus",Qe,!0),t.addEventListener("blur",ze,!1),typeof PointerEvent<"u"?(n.addEventListener("pointerdown",P,!0),n.addEventListener("pointermove",P,!0),n.addEventListener("pointerup",P,!0)):(n.addEventListener("mousedown",P,!0),n.addEventListener("mousemove",P,!0),n.addEventListener("mouseup",P,!0)),t.addEventListener("beforeunload",()=>{Xe(e)},{once:!0}),z.set(t,{focus:r})}const Xe=(e,t)=>{const n=K(e),r=J(e);t&&r.removeEventListener("DOMContentLoaded",t),z.has(n)&&(n.HTMLElement.prototype.focus=z.get(n).focus,r.removeEventListener("keydown",oe,!0),r.removeEventListener("keyup",oe,!0),r.removeEventListener("click",Ye,!0),n.removeEventListener("focus",Qe,!0),n.removeEventListener("blur",ze,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",P,!0),r.removeEventListener("pointermove",P,!0),r.removeEventListener("pointerup",P,!0)):(r.removeEventListener("mousedown",P,!0),r.removeEventListener("mousemove",P,!0),r.removeEventListener("mouseup",P,!0)),z.delete(n))};function Wt(e){const t=J(e);let n;return t.readyState!=="loading"?be(e):(n=()=>{be(e)},t.addEventListener("DOMContentLoaded",n)),()=>Xe(e,n)}typeof document<"u"&&Wt();function Je(){return Z!=="pointer"}const Kt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Vt(e,t,n){var r;const o=typeof window<"u"?K(n==null?void 0:n.target).HTMLInputElement:HTMLInputElement,l=typeof window<"u"?K(n==null?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a=typeof window<"u"?K(n==null?void 0:n.target).HTMLElement:HTMLElement,i=typeof window<"u"?K(n==null?void 0:n.target).KeyboardEvent:KeyboardEvent;return e=e||(n==null?void 0:n.target)instanceof o&&!Kt.has(n==null||(r=n.target)===null||r===void 0?void 0:r.type)||(n==null?void 0:n.target)instanceof l||(n==null?void 0:n.target)instanceof a&&(n==null?void 0:n.target.isContentEditable),!(e&&t==="keyboard"&&n instanceof i&&!Nt[n.key])}function Ut(e,t,n){be(),u.useEffect(()=>{let r=(o,l)=>{Vt(!!(n!=null&&n.isTextInput),o,l)&&e(Je())};return ve.add(r),()=>{ve.delete(r)}},t)}function jt(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,l=u.useRef({isFocusWithin:!1}),a=u.useCallback(d=>{l.current.isFocusWithin&&!d.currentTarget.contains(d.relatedTarget)&&(l.current.isFocusWithin=!1,n&&n(d),o&&o(!1))},[n,o,l]),i=Ge(a),f=u.useCallback(d=>{!l.current.isFocusWithin&&document.activeElement===d.target&&(r&&r(d),o&&o(!0),l.current.isFocusWithin=!0,i(d))},[r,o,i]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:f,onBlur:a}}}let le=!1,ce=0;function he(){le=!0,setTimeout(()=>{le=!1},50)}function Ce(e){e.pointerType==="touch"&&he()}function qt(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",Ce):document.addEventListener("touchend",he),ce++,()=>{ce--,!(ce>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Ce):document.removeEventListener("touchend",he))}}function Gt(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:o}=e,[l,a]=u.useState(!1),i=u.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;u.useEffect(qt,[]);let{hoverProps:f,triggerHoverEnd:d}=u.useMemo(()=>{let m=(s,p)=>{if(i.pointerType=p,o||p==="touch"||i.isHovered||!s.currentTarget.contains(s.target))return;i.isHovered=!0;let v=s.currentTarget;i.target=v,t&&t({type:"hoverstart",target:v,pointerType:p}),n&&n(!0),a(!0)},g=(s,p)=>{if(i.pointerType="",i.target=null,p==="touch"||!i.isHovered)return;i.isHovered=!1;let v=s.currentTarget;r&&r({type:"hoverend",target:v,pointerType:p}),n&&n(!1),a(!1)},c={};return typeof PointerEvent<"u"?(c.onPointerEnter=s=>{le&&s.pointerType==="mouse"||m(s,s.pointerType)},c.onPointerLeave=s=>{!o&&s.currentTarget.contains(s.target)&&g(s,s.pointerType)}):(c.onTouchStart=()=>{i.ignoreEmulatedMouseEvents=!0},c.onMouseEnter=s=>{!i.ignoreEmulatedMouseEvents&&!le&&m(s,"mouse"),i.ignoreEmulatedMouseEvents=!1},c.onMouseLeave=s=>{!o&&s.currentTarget.contains(s.target)&&g(s,"mouse")}),{hoverProps:c,triggerHoverEnd:g}},[t,n,r,o,i]);return u.useEffect(()=>{o&&d({currentTarget:i.target},i.pointerType)},[o]),{hoverProps:f,isHovered:l}}function Yt(e={}){let{autoFocus:t=!1,isTextInput:n,within:r}=e,o=u.useRef({isFocused:!1,isFocusVisible:t||Je()}),[l,a]=u.useState(!1),[i,f]=u.useState(()=>o.current.isFocused&&o.current.isFocusVisible),d=u.useCallback(()=>f(o.current.isFocused&&o.current.isFocusVisible),[]),m=u.useCallback(s=>{o.current.isFocused=s,a(s),d()},[d]);Ut(s=>{o.current.isFocusVisible=s,d()},[],{isTextInput:n});let{focusProps:g}=Bt({isDisabled:r,onFocusChange:m}),{focusWithinProps:c}=jt({isDisabled:!r,onFocusWithinChange:m});return{isFocused:l,isFocusVisible:i,focusProps:r?c:g}}function Qt(e){let t=e.width/2,n=e.height/2;return{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}function zt(e,t){return!(!e||!t||e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)}function Xt({disabled:e=!1}={}){let t=u.useRef(null),[n,r]=u.useState(!1),o=ye(),l=F(()=>{t.current=null,r(!1),o.dispose()}),a=F(i=>{if(o.dispose(),t.current===null){t.current=i.currentTarget,r(!0);{let f=_e(i.currentTarget);o.addEventListener(f,"pointerup",l,!1),o.addEventListener(f,"pointermove",d=>{if(t.current){let m=Qt(d);r(zt(m,t.current.getBoundingClientRect()))}},!1),o.addEventListener(f,"pointercancel",l,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:a,onPointerUp:l,onClick:l}}}let Jt=u.createContext(void 0);function Zt(){return u.useContext(Jt)}function en(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&tn(n)?!1:r}function tn(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let ue=u.createContext(null);ue.displayName="LabelContext";function xe(){let e=u.useContext(ue);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,xe),t}return e}function nn(e){var t,n,r;let o=(n=(t=u.useContext(ue))==null?void 0:t.value)!=null?n:void 0;return((r=void 0)!=null?r:0)>0?[o,...e].filter(Boolean).join(" "):o}function Ze({inherit:e=!1}={}){let t=nn(),[n,r]=u.useState([]),o=e?[t,...n].filter(Boolean):n;return[o.length>0?o.join(" "):void 0,u.useMemo(()=>function(l){let a=F(f=>(r(d=>[...d,f]),()=>r(d=>{let m=d.slice(),g=m.indexOf(f);return g!==-1&&m.splice(g,1),m}))),i=u.useMemo(()=>({register:a,slot:l.slot,name:l.name,props:l.props,value:l.value}),[a,l.slot,l.name,l.props,l.value]);return A.createElement(ue.Provider,{value:i},l.children)},[r])]}let rn="label";function on(e,t){var n;let r=u.useId(),o=xe(),l=Zt(),a=ot(),{id:i=`headlessui-label-${r}`,htmlFor:f=l??((n=o.props)==null?void 0:n.htmlFor),passive:d=!1,...m}=e,g=X(t);R(()=>o.register(i),[i,o.register]);let c=F(h=>{let $=h.currentTarget;if($ instanceof HTMLLabelElement&&h.preventDefault(),o.props&&"onClick"in o.props&&typeof o.props.onClick=="function"&&o.props.onClick(h),$ instanceof HTMLLabelElement){let y=document.getElementById($.htmlFor);if(y){let b=y.getAttribute("disabled");if(b==="true"||b==="")return;let x=y.getAttribute("aria-disabled");if(x==="true"||x==="")return;(y instanceof HTMLInputElement&&(y.type==="radio"||y.type==="checkbox")||y.role==="radio"||y.role==="checkbox"||y.role==="switch")&&y.click(),y.focus({preventScroll:!0})}}}),s=a||!1,p=u.useMemo(()=>({...o.slot,disabled:s}),[o.slot,s]),v={ref:g,...o.props,id:i,htmlFor:f,onClick:c};return d&&("onClick"in v&&(delete v.htmlFor,delete v.onClick),"onClick"in m&&delete m.onClick),N()({ourProps:v,theirProps:m,slot:p,defaultTag:f?rn:"div",name:o.name||"Label"})}let ln=B(on);Object.assign(ln,{});function un(e){if(e===null)return{width:0,height:0};let{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function sn(e,t=!1){let[n,r]=u.useReducer(()=>({}),{}),o=u.useMemo(()=>un(e),[e,n]);return R(()=>{if(!e)return;let l=new ResizeObserver(r);return l.observe(e),()=>{l.disconnect()}},[e]),t?{width:`${o.width}px`,height:`${o.height}px`}:o}function an(e,t){return u.useMemo(()=>{var n;if(e.type)return e.type;let r=(n=e.as)!=null?n:"button";if(typeof r=="string"&&r.toLowerCase()==="button"||(t==null?void 0:t.tagName)==="BUTTON"&&!t.hasAttribute("type"))return"button"},[e.type,e.as,t])}function Me(e){return[e.screenX,e.screenY]}function cn(){let e=u.useRef([-1,-1]);return{wasMoved(t){let n=Me(t);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(t){e.current=Me(t)}}}function fn(e,{container:t,accept:n,walk:r}){let o=u.useRef(n),l=u.useRef(r);u.useEffect(()=>{o.current=n,l.current=r},[n,r]),R(()=>{if(!t||!e)return;let a=_e(t);if(!a)return;let i=o.current,f=l.current,d=Object.assign(g=>i(g),{acceptNode:i}),m=a.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,d,!1);for(;m.nextNode();)f(m.currentNode)},[t,e,o,l])}function dn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}const et={...rt},mn=et.useInsertionEffect,pn=mn||(e=>e());function tt(e){const t=u.useRef(()=>{});return pn(()=>{t.current=e}),u.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}var Ee=typeof document<"u"?u.useLayoutEffect:u.useEffect;let Pe=!1,vn=0;const Re=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+vn++;function gn(){const[e,t]=u.useState(()=>Pe?Re():void 0);return Ee(()=>{e==null&&t(Re())},[]),u.useEffect(()=>{Pe=!0},[]),e}const bn=et.useId,hn=bn||gn;function En(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const yn=u.createContext(null),$n=u.createContext(null),xn=()=>{var e;return((e=u.useContext(yn))==null?void 0:e.id)||null},In=()=>u.useContext($n),wn="data-floating-ui-focusable";function Fn(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=hn(),l=u.useRef({}),[a]=u.useState(()=>En()),i=xn()!=null,[f,d]=u.useState(r.reference),m=tt((s,p,v)=>{l.current.openEvent=s?p:void 0,a.emit("openchange",{open:s,event:p,reason:v,nested:i}),n==null||n(s,p,v)}),g=u.useMemo(()=>({setPositionReference:d}),[]),c=u.useMemo(()=>({reference:f||r.reference||null,floating:r.floating||null,domReference:r.reference}),[f,r.reference,r.floating]);return u.useMemo(()=>({dataRef:l,open:t,onOpenChange:m,elements:c,events:a,floatingId:o,refs:g}),[t,m,c,a,o,g])}function Sn(e){e===void 0&&(e={});const{nodeId:t}=e,n=Fn({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[l,a]=u.useState(null),[i,f]=u.useState(null),m=(o==null?void 0:o.domReference)||l,g=u.useRef(null),c=In();Ee(()=>{m&&(g.current=m)},[m]);const s=$t({...e,elements:{...o,...i&&{reference:i}}}),p=u.useCallback(b=>{const x=ne(b)?{getBoundingClientRect:()=>b.getBoundingClientRect(),contextElement:b}:b;f(x),s.refs.setReference(x)},[s.refs]),v=u.useCallback(b=>{(ne(b)||b===null)&&(g.current=b,a(b)),(ne(s.refs.reference.current)||s.refs.reference.current===null||b!==null&&!ne(b))&&s.refs.setReference(b)},[s.refs]),h=u.useMemo(()=>({...s.refs,setReference:v,setPositionReference:p,domReference:g}),[s.refs,v,p]),$=u.useMemo(()=>({...s.elements,domReference:m}),[s.elements,m]),y=u.useMemo(()=>({...s,...r,refs:h,elements:$,nodeId:t}),[s,h,$,t,r]);return Ee(()=>{r.dataRef.current.floatingContext=y;const b=c==null?void 0:c.nodesRef.current.find(x=>x.id===t);b&&(b.context=y)}),u.useMemo(()=>({...s,context:y,refs:h,elements:$}),[s,h,$,y])}const Le="active",De="selected";function fe(e,t,n){const r=new Map,o=n==="item";let l=e;if(o&&e){const{[Le]:a,[De]:i,...f}=e;l=f}return{...n==="floating"&&{tabIndex:-1,[wn]:""},...l,...t.map(a=>{const i=a?a[n]:null;return typeof i=="function"?e?i(e):null:i}).concat(e).reduce((a,i)=>(i&&Object.entries(i).forEach(f=>{let[d,m]=f;if(!(o&&[Le,De].includes(d)))if(d.indexOf("on")===0){if(r.has(d)||r.set(d,[]),typeof m=="function"){var g;(g=r.get(d))==null||g.push(m),a[d]=function(){for(var c,s=arguments.length,p=new Array(s),v=0;v<s;v++)p[v]=arguments[v];return(c=r.get(d))==null?void 0:c.map(h=>h(...p)).find(h=>h!==void 0)}}}else a[d]=m}),a),{})}}function Tn(e){e===void 0&&(e=[]);const t=e.map(i=>i==null?void 0:i.reference),n=e.map(i=>i==null?void 0:i.floating),r=e.map(i=>i==null?void 0:i.item),o=u.useCallback(i=>fe(i,e,"reference"),t),l=u.useCallback(i=>fe(i,e,"floating"),n),a=u.useCallback(i=>fe(i,e,"item"),r);return u.useMemo(()=>({getReferenceProps:o,getFloatingProps:l,getItemProps:a}),[o,l,a])}function He(e,t){return{...e,rects:{...e.rects,floating:{...e.rects.floating,height:t}}}}const Cn=e=>({name:"inner",options:e,async fn(t){const{listRef:n,overflowRef:r,onFallbackChange:o,offset:l=0,index:a=0,minItemsVisible:i=4,referenceOverflowThreshold:f=0,scrollRef:d,...m}=xt(e,t),{rects:g,elements:{floating:c}}=t,s=n.current[a],p=(d==null?void 0:d.current)||c,v=c.clientTop||p.clientTop,h=c.clientTop!==0,$=p.clientTop!==0,y=c===p;if(!s)return{};const b={...t,...await Ue(-s.offsetTop-c.clientTop-g.reference.height/2-s.offsetHeight/2-l).fn(t)},x=await se(He(b,p.scrollHeight+v+c.clientTop),m),M=await se(b,{...m,elementContext:"reference"}),C=ae(0,x.top),w=b.y+C,_=(p.scrollHeight>p.clientHeight?I=>I:It)(ae(0,p.scrollHeight+(h&&y||$?v*2:0)-C-ae(0,x.bottom)));if(p.style.maxHeight=_+"px",p.scrollTop=C,o){const I=p.offsetHeight<s.offsetHeight*wt(i,n.current.length)-1||M.top>=-f||M.bottom>=-f;O.flushSync(()=>o(I))}return r&&(r.current=await se(He({...b,y:w},p.offsetHeight+v+c.clientTop),m)),{y:w}}});function Mn(e,t){const{open:n,elements:r}=e,{enabled:o=!0,overflowRef:l,scrollRef:a,onChange:i}=t,f=tt(i),d=u.useRef(!1),m=u.useRef(null),g=u.useRef(null);u.useEffect(()=>{if(!o)return;function s(v){if(v.ctrlKey||!p||l.current==null)return;const h=v.deltaY,$=l.current.top>=-.5,y=l.current.bottom>=-.5,b=p.scrollHeight-p.clientHeight,x=h<0?-1:1,M=h<0?"max":"min";p.scrollHeight<=p.clientHeight||(!$&&h>0||!y&&h<0?(v.preventDefault(),O.flushSync(()=>{f(C=>C+Math[M](h,b*x))})):/firefox/i.test(dn())&&(p.scrollTop+=h))}const p=(a==null?void 0:a.current)||r.floating;if(n&&p)return p.addEventListener("wheel",s),requestAnimationFrame(()=>{m.current=p.scrollTop,l.current!=null&&(g.current={...l.current})}),()=>{m.current=null,g.current=null,p.removeEventListener("wheel",s)}},[o,n,r.floating,l,a,f]);const c=u.useMemo(()=>({onKeyDown(){d.current=!0},onWheel(){d.current=!1},onPointerMove(){d.current=!1},onScroll(){const s=(a==null?void 0:a.current)||r.floating;if(!(!l.current||!s||!d.current)){if(m.current!==null){const p=s.scrollTop-m.current;(l.current.bottom<-.5&&p<-1||l.current.top<-.5&&p>1)&&O.flushSync(()=>f(v=>v+p))}requestAnimationFrame(()=>{m.current=s.scrollTop})}}}),[r.floating,f,l,a]);return u.useMemo(()=>o?{floating:c}:{},[o,c])}let q=u.createContext({styles:void 0,setReference:()=>{},setFloating:()=>{},getReferenceProps:()=>({}),getFloatingProps:()=>({}),slot:{}});q.displayName="FloatingContext";let Ie=u.createContext(null);Ie.displayName="PlacementContext";function Pn(e){return u.useMemo(()=>e?typeof e=="string"?{to:e}:e:null,[e])}function Rn(){return u.useContext(q).setReference}function Ln(){return u.useContext(q).getReferenceProps}function Dn(){let{getFloatingProps:e,slot:t}=u.useContext(q);return u.useCallback((...n)=>Object.assign({},e(...n),{"data-anchor":t.anchor}),[e,t])}function Hn(e=null){e===!1&&(e=null),typeof e=="string"&&(e={to:e});let t=u.useContext(Ie),n=u.useMemo(()=>e,[JSON.stringify(e,(o,l)=>{var a;return(a=l==null?void 0:l.outerHTML)!=null?a:l})]);R(()=>{t==null||t(n??null)},[t,n]);let r=u.useContext(q);return u.useMemo(()=>[r.setFloating,e?r.styles:{}],[r.setFloating,e,r.styles])}let ke=4;function kn({children:e,enabled:t=!0}){let[n,r]=u.useState(null),[o,l]=u.useState(0),a=u.useRef(null),[i,f]=u.useState(null);An(i);let d=t&&n!==null&&i!==null,{to:m="bottom",gap:g=0,offset:c=0,padding:s=0,inner:p}=On(n,i),[v,h="center"]=m.split(" ");R(()=>{d&&l(0)},[d]);let{refs:$,floatingStyles:y,context:b}=Sn({open:d,placement:v==="selection"?h==="center"?"bottom":`bottom-${h}`:h==="center"?`${v}`:`${v}-${h}`,strategy:"absolute",transform:!1,middleware:[Ue({mainAxis:v==="selection"?0:g,crossAxis:c}),Ft({padding:s}),v!=="selection"&&St({padding:s}),v==="selection"&&p?Cn({...p,padding:s,overflowRef:a,offset:o,minItemsVisible:ke,referenceOverflowThreshold:s,onFallbackChange(I){var L,j;if(!I)return;let W=b.elements.floating;if(!W)return;let ee=parseFloat(getComputedStyle(W).scrollPaddingBottom)||0,G=Math.min(ke,W.childElementCount),te=0,E=0;for(let D of(j=(L=b.elements.floating)==null?void 0:L.childNodes)!=null?j:[])if(D instanceof HTMLElement){let k=D.offsetTop,Y=k+D.clientHeight+ee,Q=W.scrollTop,Fe=Q+W.clientHeight;if(k>=Q&&Y<=Fe)G--;else{E=Math.max(0,Math.min(Y,Fe)-Math.max(k,Q)),te=D.clientHeight;break}}G>=1&&l(D=>{let k=te*G-E+ee;return D>=k?D:k})}}):null,Tt({padding:s,apply({availableWidth:I,availableHeight:L,elements:j}){Object.assign(j.floating.style,{overflow:"auto",maxWidth:`${I}px`,maxHeight:`min(var(--anchor-max-height, 100vh), ${L}px)`})}})].filter(Boolean),whileElementsMounted:Ct}),[x=v,M=h]=b.placement.split("-");v==="selection"&&(x="selection");let C=u.useMemo(()=>({anchor:[x,M].filter(Boolean).join(" ")}),[x,M]),w=Mn(b,{overflowRef:a,onChange:l}),{getReferenceProps:H,getFloatingProps:U}=Tn([w]),_=F(I=>{f(I),$.setFloating(I)});return u.createElement(Ie.Provider,{value:r},u.createElement(q.Provider,{value:{setFloating:_,setReference:$.setReference,styles:y,getReferenceProps:H,getFloatingProps:U,slot:C}},e))}function An(e){R(()=>{if(!e)return;let t=new MutationObserver(()=>{let n=window.getComputedStyle(e).maxHeight,r=parseFloat(n);if(isNaN(r))return;let o=parseInt(n);isNaN(o)||r!==o&&(e.style.maxHeight=`${Math.ceil(r)}px`)});return t.observe(e,{attributes:!0,attributeFilter:["style"]}),()=>{t.disconnect()}},[e])}function On(e,t){var n,r,o;let l=de((n=e==null?void 0:e.gap)!=null?n:"var(--anchor-gap, 0)",t),a=de((r=e==null?void 0:e.offset)!=null?r:"var(--anchor-offset, 0)",t),i=de((o=e==null?void 0:e.padding)!=null?o:"var(--anchor-padding, 0)",t);return{...e,gap:l,offset:a,padding:i}}function de(e,t,n=void 0){let r=ye(),o=F((f,d)=>{if(f==null)return[n,null];if(typeof f=="number")return[f,null];if(typeof f=="string"){if(!d)return[n,null];let m=Ae(f,d);return[m,g=>{let c=nt(f);{let s=c.map(p=>window.getComputedStyle(d).getPropertyValue(p));r.requestAnimationFrame(function p(){r.nextFrame(p);let v=!1;for(let[$,y]of c.entries()){let b=window.getComputedStyle(d).getPropertyValue(y);if(s[$]!==b){s[$]=b,v=!0;break}}if(!v)return;let h=Ae(f,d);m!==h&&(g(h),m=h)})}return r.dispose}]}return[n,null]}),l=u.useMemo(()=>o(e,t)[0],[e,t]),[a=l,i]=u.useState();return R(()=>{let[f,d]=o(e,t);if(i(f),!!d)return d(i)},[e,t]),a}function nt(e){let t=/var\((.*)\)/.exec(e);if(t){let n=t[1].indexOf(",");if(n===-1)return[t[1]];let r=t[1].slice(0,n).trim(),o=t[1].slice(n+1).trim();return o?[r,...nt(o)]:[r]}return[]}function Ae(e,t){let n=document.createElement("div");t.appendChild(n),n.style.setProperty("margin-top","0px","important"),n.style.setProperty("margin-top",e,"important");let r=parseFloat(window.getComputedStyle(n).marginTop)||0;return t.removeChild(n),r}function Bn(e){throw new Error("Unexpected object: "+e)}var T=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(T||{});function me(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=r??-1;switch(e.focus){case 0:{for(let l=0;l<n.length;++l)if(!t.resolveDisabled(n[l],l,n))return l;return r}case 1:{o===-1&&(o=n.length);for(let l=o-1;l>=0;--l)if(!t.resolveDisabled(n[l],l,n))return l;return r}case 2:{for(let l=o+1;l<n.length;++l)if(!t.resolveDisabled(n[l],l,n))return l;return r}case 3:{for(let l=n.length-1;l>=0;--l)if(!t.resolveDisabled(n[l],l,n))return l;return r}case 4:{for(let l=0;l<n.length;++l)if(t.resolveId(n[l],l,n)===e.id)return l;return r}case 5:return null;default:Bn(e)}}function Nn(e,t){let n=u.useRef({left:0,top:0});if(R(()=>{if(!t)return;let o=t.getBoundingClientRect();o&&(n.current=o)},[e,t]),t==null||!e||t===document.activeElement)return!1;let r=t.getBoundingClientRect();return r.top!==n.current.top||r.left!==n.current.left}let Oe=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Be(e){var t,n;let r=(t=e.innerText)!=null?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let l=!1;for(let i of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),l=!0;let a=l?(n=o.innerText)!=null?n:"":r;return Oe.test(a)&&(a=a.replace(Oe,"")),a}function _n(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(o=>{let l=document.getElementById(o);if(l){let a=l.getAttribute("aria-label");return typeof a=="string"?a.trim():Be(l).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return Be(e).trim()}function Wn(e){let t=u.useRef(""),n=u.useRef("");return F(()=>{let r=e.current;if(!r)return"";let o=r.innerText;if(t.current===o)return n.current;let l=_n(r).trim().toLowerCase();return t.current=o,n.current=l,l})}var Kn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Kn||{}),Vn=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Vn||{}),Un=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e))(Un||{});function pe(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,r=yt(t(e.items.slice()),l=>l.dataRef.current.domRef.current),o=n?r.indexOf(n):null;return o===-1&&(o=null),{items:r,activeItemIndex:o}}let jn={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,t)=>{var n,r,o,l,a;if(e.menuState===1)return e;let i={...e,searchQuery:"",activationTrigger:(n=t.trigger)!=null?n:1,__demoMode:!1};if(t.focus===T.Nothing)return{...i,activeItemIndex:null};if(t.focus===T.Specific)return{...i,activeItemIndex:e.items.findIndex(m=>m.id===t.id)};if(t.focus===T.Previous){let m=e.activeItemIndex;if(m!==null){let g=e.items[m].dataRef.current.domRef,c=me(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});if(c!==null){let s=e.items[c].dataRef.current.domRef;if(((r=g.current)==null?void 0:r.previousElementSibling)===s.current||((o=s.current)==null?void 0:o.previousElementSibling)===null)return{...i,activeItemIndex:c}}}}else if(t.focus===T.Next){let m=e.activeItemIndex;if(m!==null){let g=e.items[m].dataRef.current.domRef,c=me(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});if(c!==null){let s=e.items[c].dataRef.current.domRef;if(((l=g.current)==null?void 0:l.nextElementSibling)===s.current||((a=s.current)==null?void 0:a.nextElementSibling)===null)return{...i,activeItemIndex:c}}}}let f=pe(e),d=me(t,{resolveItems:()=>f.items,resolveActiveIndex:()=>f.activeItemIndex,resolveId:m=>m.id,resolveDisabled:m=>m.dataRef.current.disabled});return{...i,...f,activeItemIndex:d}},3:(e,t)=>{let n=e.searchQuery!==""?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(a=>{var i;return((i=a.dataRef.current.textValue)==null?void 0:i.startsWith(r))&&!a.dataRef.current.disabled}),l=o?e.items.indexOf(o):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:l,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let n=pe(e,r=>[...r,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=pe(e,r=>{let o=r.findIndex(l=>l.id===t.id);return o!==-1&&r.splice(o,1),r});return{...e,...n,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.itemsElement===t.element?e:{...e,itemsElement:t.element}},we=u.createContext(null);we.displayName="MenuContext";function ie(e){let t=u.useContext(we);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ie),n}return t}function qn(e,t){return Ke(t.type,jn,e,t)}let Gn=u.Fragment;function Yn(e,t){let{__demoMode:n=!1,...r}=e,o=u.useReducer(qn,{__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:l,itemsElement:a,buttonElement:i},f]=o,d=X(t);vt(l===0,[i,a],(p,v)=>{f({type:1}),ht(v,Et.Loose)||(p.preventDefault(),i==null||i.focus())});let m=F(()=>{f({type:1})}),g=u.useMemo(()=>({open:l===0,close:m}),[l,m]),c={ref:d},s=N();return A.createElement(kn,null,A.createElement(we.Provider,{value:o},A.createElement(gt,{value:Ke(l,{0:re.Open,1:re.Closed})},s({ourProps:c,theirProps:r,slot:g,defaultTag:Gn,name:"Menu"}))))}let Qn="button";function zn(e,t){var n;let r=u.useId(),{id:o=`headlessui-menu-button-${r}`,disabled:l=!1,autoFocus:a=!1,...i}=e,[f,d]=ie("Menu.Button"),m=Ln(),g=X(t,Rn(),F(w=>d({type:7,element:w}))),c=F(w=>{switch(w.key){case S.Space:case S.Enter:case S.ArrowDown:w.preventDefault(),w.stopPropagation(),O.flushSync(()=>d({type:0})),d({type:2,focus:T.First});break;case S.ArrowUp:w.preventDefault(),w.stopPropagation(),O.flushSync(()=>d({type:0})),d({type:2,focus:T.Last});break}}),s=F(w=>{switch(w.key){case S.Space:w.preventDefault();break}}),p=F(w=>{var H;if(en(w.currentTarget))return w.preventDefault();l||(f.menuState===0?(O.flushSync(()=>d({type:1})),(H=f.buttonElement)==null||H.focus({preventScroll:!0})):(w.preventDefault(),d({type:0})))}),{isFocusVisible:v,focusProps:h}=Yt({autoFocus:a}),{isHovered:$,hoverProps:y}=Gt({isDisabled:l}),{pressed:b,pressProps:x}=Xt({disabled:l}),M=u.useMemo(()=>({open:f.menuState===0,active:b||f.menuState===0,disabled:l,hover:$,focus:v,autofocus:a}),[f,$,v,b,l,a]),C=We(m(),{ref:g,id:o,type:an(e,f.buttonElement),"aria-haspopup":"menu","aria-controls":(n=f.itemsElement)==null?void 0:n.id,"aria-expanded":f.menuState===0,disabled:l||void 0,autoFocus:a,onKeyDown:c,onKeyUp:s,onClick:p},h,y,x);return N()({ourProps:C,theirProps:i,slot:M,defaultTag:Qn,name:"Menu.Button"})}let Xn="div",Jn=Se.RenderStrategy|Se.Static;function Zn(e,t){var n,r;let o=u.useId(),{id:l=`headlessui-menu-items-${o}`,anchor:a,portal:i=!1,modal:f=!0,transition:d=!1,...m}=e,g=Pn(a),[c,s]=ie("Menu.Items"),[p,v]=Hn(g),h=Dn(),[$,y]=u.useState(null),b=X(t,g?p:null,F(E=>s({type:8,element:E})),y),x=lt(c.itemsElement);g&&(i=!0);let M=ut(),[C,w]=it(d,$,M!==null?(M&re.Open)===re.Open:c.menuState===0);st(C,c.buttonElement,()=>{s({type:1})});let H=c.__demoMode?!1:f&&c.menuState===0;at(H,x);let U=c.__demoMode?!1:f&&c.menuState===0;ct(U,{allowed:u.useCallback(()=>[c.buttonElement,c.itemsElement],[c.buttonElement,c.itemsElement])});let _=c.menuState!==0,I=Nn(_,c.buttonElement)?!1:C;u.useEffect(()=>{let E=c.itemsElement;E&&c.menuState===0&&E!==(x==null?void 0:x.activeElement)&&E.focus({preventScroll:!0})},[c.menuState,c.itemsElement,x]),fn(c.menuState===0,{container:c.itemsElement,accept(E){return E.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:E.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(E){E.setAttribute("role","none")}});let L=ye(),j=F(E=>{var D,k,Y;switch(L.dispose(),E.key){case S.Space:if(c.searchQuery!=="")return E.preventDefault(),E.stopPropagation(),s({type:3,value:E.key});case S.Enter:if(E.preventDefault(),E.stopPropagation(),s({type:1}),c.activeItemIndex!==null){let{dataRef:Q}=c.items[c.activeItemIndex];(k=(D=Q.current)==null?void 0:D.domRef.current)==null||k.click()}Ve(c.buttonElement);break;case S.ArrowDown:return E.preventDefault(),E.stopPropagation(),s({type:2,focus:T.Next});case S.ArrowUp:return E.preventDefault(),E.stopPropagation(),s({type:2,focus:T.Previous});case S.Home:case S.PageUp:return E.preventDefault(),E.stopPropagation(),s({type:2,focus:T.First});case S.End:case S.PageDown:return E.preventDefault(),E.stopPropagation(),s({type:2,focus:T.Last});case S.Escape:E.preventDefault(),E.stopPropagation(),O.flushSync(()=>s({type:1})),(Y=c.buttonElement)==null||Y.focus({preventScroll:!0});break;case S.Tab:E.preventDefault(),E.stopPropagation(),O.flushSync(()=>s({type:1})),bt(c.buttonElement,E.shiftKey?Te.Previous:Te.Next);break;default:E.key.length===1&&(s({type:3,value:E.key}),L.setTimeout(()=>s({type:4}),350));break}}),W=F(E=>{switch(E.key){case S.Space:E.preventDefault();break}}),ee=u.useMemo(()=>({open:c.menuState===0}),[c.menuState]),G=We(g?h():{},{"aria-activedescendant":c.activeItemIndex===null||(n=c.items[c.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(r=c.buttonElement)==null?void 0:r.id,id:l,onKeyDown:j,onKeyUp:W,role:"menu",tabIndex:c.menuState===0?0:void 0,ref:b,style:{...m.style,...v,"--button-width":sn(c.buttonElement,!0).width},...ft(w)}),te=N();return A.createElement(dt,{enabled:i?e.static||C:!1},te({ourProps:G,theirProps:m,slot:ee,defaultTag:Xn,features:Jn,visible:I,name:"Menu.Items"}))}let er=u.Fragment;function tr(e,t){let n=u.useId(),{id:r=`headlessui-menu-item-${n}`,disabled:o=!1,...l}=e,[a,i]=ie("Menu.Item"),f=a.activeItemIndex!==null?a.items[a.activeItemIndex].id===r:!1,d=u.useRef(null),m=X(t,d);R(()=>{if(!a.__demoMode&&a.menuState===0&&f&&a.activationTrigger!==0)return mt().requestAnimationFrame(()=>{var I,L;(L=(I=d.current)==null?void 0:I.scrollIntoView)==null||L.call(I,{block:"nearest"})})},[a.__demoMode,d,f,a.menuState,a.activationTrigger,a.activeItemIndex]);let g=Wn(d),c=u.useRef({disabled:o,domRef:d,get textValue(){return g()}});R(()=>{c.current.disabled=o},[c,o]),R(()=>(i({type:5,id:r,dataRef:c}),()=>i({type:6,id:r})),[c,r]);let s=F(()=>{i({type:1})}),p=F(I=>{if(o)return I.preventDefault();i({type:1}),Ve(a.buttonElement)}),v=F(()=>{if(o)return i({type:2,focus:T.Nothing});i({type:2,focus:T.Specific,id:r})}),h=cn(),$=F(I=>{h.update(I),!o&&(f||i({type:2,focus:T.Specific,id:r,trigger:0}))}),y=F(I=>{h.wasMoved(I)&&(o||f||i({type:2,focus:T.Specific,id:r,trigger:0}))}),b=F(I=>{h.wasMoved(I)&&(o||f&&i({type:2,focus:T.Nothing}))}),[x,M]=Ze(),[C,w]=pt(),H=u.useMemo(()=>({active:f,focus:f,disabled:o,close:s}),[f,o,s]),U={id:r,ref:m,role:"menuitem",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-labelledby":x,"aria-describedby":C,disabled:void 0,onClick:p,onFocus:v,onPointerEnter:$,onMouseEnter:$,onPointerMove:y,onMouseMove:y,onPointerLeave:b,onMouseLeave:b},_=N();return A.createElement(M,null,A.createElement(w,null,_({ourProps:U,theirProps:l,slot:H,defaultTag:er,name:"Menu.Item"})))}let nr="div";function rr(e,t){let[n,r]=Ze(),o=e,l={ref:t,"aria-labelledby":n,role:"group"},a=N();return A.createElement(r,null,a({ourProps:l,theirProps:o,slot:{},defaultTag:nr,name:"Menu.Section"}))}let or="header";function lr(e,t){let n=u.useId(),{id:r=`headlessui-menu-heading-${n}`,...o}=e,l=xe();R(()=>l.register(r),[r,l.register]);let a={id:r,ref:t,role:"presentation",...l.props};return N()({ourProps:a,theirProps:o,slot:{},defaultTag:or,name:"Menu.Heading"})}let ur="div";function ir(e,t){let n=e,r={ref:t,role:"separator"};return N()({ourProps:r,theirProps:n,slot:{},defaultTag:ur,name:"Menu.Separator"})}let sr=B(Yn),ar=B(zn),cr=B(Zn),fr=B(tr),dr=B(rr),mr=B(lr),pr=B(ir),$r=Object.assign(sr,{Button:ar,Items:cr,Item:fr,Section:dr,Heading:mr,Separator:pr});export{fr as E,yr as F,ar as I,Er as a,cr as g,$r as r};
