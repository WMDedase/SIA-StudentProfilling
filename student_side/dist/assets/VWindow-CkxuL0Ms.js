import{E as I,p as k,e as T,G as C,g as M,H as P,I as V,J as W,r as _,l as r,s as E,K as L,L as O,u as j,n as F,M as G,a as f}from"./index-BNY_wFJi.js";import{c as A,d as D,V as B}from"./lazy-D6cDBeqJ.js";const w=t=>{const{touchstartX:o,touchendX:e,touchstartY:n,touchendY:i}=t,a=.5,s=16;t.offsetX=e-o,t.offsetY=i-n,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&e<o-s&&t.left(t),t.right&&e>o+s&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&i<n-s&&t.up(t),t.down&&i>n+s&&t.down(t))};function z(t,o){var n;const e=t.changedTouches[0];o.touchstartX=e.clientX,o.touchstartY=e.clientY,(n=o.start)==null||n.call(o,{originalEvent:t,...o})}function J(t,o){var n;const e=t.changedTouches[0];o.touchendX=e.clientX,o.touchendY=e.clientY,(n=o.end)==null||n.call(o,{originalEvent:t,...o}),w(o)}function K(t,o){var n;const e=t.changedTouches[0];o.touchmoveX=e.clientX,o.touchmoveY=e.clientY,(n=o.move)==null||n.call(o,{originalEvent:t,...o})}function q(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:e=>z(e,o),touchend:e=>J(e,o),touchmove:e=>K(e,o)}}function Q(t,o){var d;const e=o.value,n=e!=null&&e.parent?t.parentElement:t,i=(e==null?void 0:e.options)??{passive:!0},a=(d=o.instance)==null?void 0:d.$.uid;if(!n||!a)return;const s=q(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[a]=s,I(s).forEach(v=>{n.addEventListener(v,s[v],i)})}function U(t,o){var a,s;const e=(a=o.value)!=null&&a.parent?t.parentElement:t,n=(s=o.instance)==null?void 0:s.$.uid;if(!(e!=null&&e._touchHandlers)||!n)return;const i=e._touchHandlers[n];I(i).forEach(d=>{e.removeEventListener(d,i[d])}),delete e._touchHandlers[n]}const Z={mounted:Q,unmounted:U},N=Symbol.for("vuetify:v-window"),p=Symbol.for("vuetify:v-window-group"),tt=k({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:t=>typeof t=="boolean"||t==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...T(),...A(),...C()},"VWindow"),nt=M()({name:"VWindow",directives:{Touch:Z},props:tt(),emits:{"update:modelValue":t=>!0},setup(t,o){let{slots:e}=o;const{themeClasses:n}=P(t),{isRtl:i}=V(),{t:a}=W(),s=D(t,p),d=_(),v=r(()=>i.value?!t.reverse:t.reverse),h=E(!1),S=r(()=>{const c=t.direction==="vertical"?"y":"x",l=(v.value?!h.value:h.value)?"-reverse":"";return`v-window-${c}${l}-transition`}),$=E(0),g=_(void 0),m=r(()=>s.items.value.findIndex(c=>s.selected.value.includes(c.id)));L(m,(c,u)=>{const l=s.items.value.length,b=l-1;l<=2?h.value=c<u:c===b&&u===0?h.value=!0:c===0&&u===b?h.value=!1:h.value=c<u}),O(N,{transition:S,isReversed:h,transitionCount:$,transitionHeight:g,rootRef:d});const y=r(()=>t.continuous||m.value!==0),x=r(()=>t.continuous||m.value!==s.items.value.length-1);function X(){y.value&&s.prev()}function Y(){x.value&&s.next()}const H=r(()=>{const c=[],u={icon:i.value?t.nextIcon:t.prevIcon,class:`v-window__${v.value?"right":"left"}`,onClick:s.prev,"aria-label":a("$vuetify.carousel.prev")};c.push(y.value?e.prev?e.prev({props:u}):f(B,u,null):f("div",null,null));const l={icon:i.value?t.prevIcon:t.nextIcon,class:`v-window__${v.value?"left":"right"}`,onClick:s.next,"aria-label":a("$vuetify.carousel.next")};return c.push(x.value?e.next?e.next({props:l}):f(B,l,null):f("div",null,null)),c}),R=r(()=>t.touch===!1?t.touch:{...{left:()=>{v.value?X():Y()},right:()=>{v.value?Y():X()},start:u=>{let{originalEvent:l}=u;l.stopPropagation()}},...t.touch===!0?{}:t.touch});return j(()=>F(f(t.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":t.showArrows==="hover"},n.value,t.class],style:t.style},{default:()=>{var c,u;return[f("div",{class:"v-window__container",style:{height:g.value}},[(c=e.default)==null?void 0:c.call(e,{group:s}),t.showArrows!==!1&&f("div",{class:"v-window__controls"},[H.value])]),(u=e.additional)==null?void 0:u.call(e,{group:s})]}}),[[G("touch"),R.value]])),{group:s}}});export{Z as T,nt as V,N as a,p as b};