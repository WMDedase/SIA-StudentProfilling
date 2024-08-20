import{g,e as b,a8 as z,u as f,a as n,p as S,a9 as u,F as V,G,H as J,l as h,n as K,M as Q}from"./index-BNY_wFJi.js";import{g as I,h as x,i as p,e as P,f as k,j as U,k as W,l as X,n as Y,o as Z,p as $,q as ee,r as ae,c as te,s as ne,R as de,t as ie,v as le,w as se,x as ce,y as re,z as ue,A as ve,B as oe,C as me,D as ye,E as ke,L as ge,F as be}from"./lazy-D6cDBeqJ.js";const fe=g()({name:"VCardActions",props:b(),setup(e,i){let{slots:t}=i;return z({VBtn:{slim:!0,variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ie=I("v-card-subtitle"),Ce=I("v-card-title"),Ae=S({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...b(),...x()},"VCardItem"),Ve=g()({name:"VCardItem",props:Ae(),setup(e,i){let{slots:t}=i;return f(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),o=!!(l||t.append),m=!!(e.title!=null||t.title),y=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(V,null,[e.prependAvatar&&n(p,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ce,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),y&&n(Ie,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(V,null,[e.appendIcon&&n(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(p,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=I("v-card-text"),pe=S({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...U(),...b(),...x(),...W(),...X(),...Y(),...Z(),...$(),...ee(),...ae(),...te(),...G(),...ne({variant:"elevated"})},"VCard"),xe=g()({name:"VCard",directives:{Ripple:de},props:pe(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=J(e),{borderClasses:l}=ie(e),{colorClasses:o,colorStyles:m,variantClasses:y}=le(e),{densityClasses:s}=se(e),{dimensionStyles:d}=ce(e),{elevationClasses:B}=re(e),{loaderClasses:D}=ue(e),{locationStyles:L}=ve(e),{positionClasses:T}=oe(e),{roundedClasses:_}=me(e),c=ye(e,t),N=h(()=>e.link!==!1&&c.isLink.value),r=h(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),M=F||E,j=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),H=!!(a.image||e.image),O=M||w||j,q=!!(a.text||e.text!=null);return K(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,l.value,o.value,s.value,B.value,D.value,T.value,_.value,y.value,e.class],style:[m.value,d.value,L.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[H&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ke,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),O&&n(Ve,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(he,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(fe,null,{default:a.actions}),be(r.value,"v-card")]}}),[[Q("ripple"),r.value&&e.ripple]])}),{}}});export{xe as V,he as a,fe as b,Ce as c,Ve as d};