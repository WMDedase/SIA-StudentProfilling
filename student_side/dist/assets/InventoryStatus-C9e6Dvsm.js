import{_ as g,r as l,z as w,A as k,o as f,c as m,a as t,w as e,d,b as s,y as n,D as N,f as S,B,C as T,i as R,j as A}from"./index-BNY_wFJi.js";import{V as D,a as E,b as F}from"./VToolbar-DJvvMP_W.js";import{V as q,a as y}from"./VRow-BoLK9wl-.js";import{V as h,d as I,c as V,a as b}from"./VCard-C_Nje8yU.js";import{e as P}from"./lazy-D6cDBeqJ.js";import"./VTextField-UJixJx_W.js";import"./ssrBoot-CcPqA_Mj.js";const U={__name:"InventoryBorrowed",setup(c){const p=l(null),u=l([]),i=l(!0),a=l(null),o=[{title:"Item Name",key:"item_name"},{title:"Quantity",key:"quantity"},{title:"Borrow Date",key:"borrow_date"},{title:"Return Date",key:"return_date"}];return w(async()=>{var v;try{const r=await k();console.log("API response:",r),p.value=r.student_profile,(v=r.student_profile)!=null&&v.inventory&&Array.isArray(r.student_profile.inventory)?(u.value=r.student_profile.inventory,console.log("Inventory record data:",u.value)):a.value="No inventory record data found"}catch(r){a.value="Failed to fetch current user",console.error("Error:",r)}finally{i.value=!1}}),(v,r)=>(f(),m("main",null,[t(F,{headers:o,items:u.value,loading:i.value},{top:e(()=>[t(D,{flat:""},{default:e(()=>[t(E,{class:"text-h6 font-weight-black",style:{color:"#2F3F64"}},{default:e(()=>[d("Inventory Records")]),_:1})]),_:1})]),item:e(({item:_})=>[(f(),m("tr",{key:_.id},[s("td",null,n(_.item_name),1),s("td",null,n(_.quantity),1),s("td",null,n(_.borrow_date),1),s("td",null,n(_.return_date),1)]))]),"no-data":e(()=>[d(n(a.value||"No inventory records found."),1)]),_:1},8,["items","loading"])]))}},C=g(U,[["__scopeId","data-v-022e4877"]]),x=c=>(R("data-v-ad20ae62"),c=c(),A(),c),j=N('<div class="top-container" data-v-ad20ae62><h1 class="bg-title" data-v-ad20ae62>INVENTORY</h1><div class="studentProfile" data-v-ad20ae62><span class="material-icons" data-v-ad20ae62>inventory_2</span><span class="text fw-bolder" data-v-ad20ae62>Inventory</span></div></div><hr data-v-ad20ae62>',2),z={class:"bottom-container"},O={class:"left"},M=x(()=>s("span",{class:"material-icons"},"assignment_turned_in",-1)),Q=x(()=>s("span",{class:"material-icons"},"playlist_add_check",-1)),Y={components:{InventoryBorrowed:C}},$=Object.assign(Y,{__name:"InventoryStatus",setup(c){const p=l(null),u=l(!0),i=l(null),a=l(null);return w(async()=>{try{const o=await k();console.log("API response:",o),p.value=o.student_profile,o.student_profile&&o.student_profile.inventory?(o.student_profile.inventory.length>0?a.value="Not Cleared":a.value="Cleared",console.log("Inventory Status:",a.value)):i.value="No inventory data found"}catch(o){i.value="Failed to fetch current user",console.error("Error:",o)}finally{u.value=!1}}),(o,v)=>(f(),m("main",null,[j,s("div",z,[s("div",O,[t(q,null,{default:e(()=>[t(y,{col:"6"},{default:e(()=>[t(h,{class:"top-left mx-auto mr-5",elevation:"3"},{default:e(()=>[t(I,null,{default:e(()=>[t(V,{class:"fw-bold",style:{color:"var(--dark)"}},{default:e(()=>[M,d(" Inventory Status ")]),_:1})]),_:1}),a.value!==null?(f(),S(b,{key:0,class:"status",style:B({color:a.value==="Cleared"?"green":"#dbc501"})},{default:e(()=>[t(P,{color:a.value==="Cleared"?"green":"#dbc501",class:"status-icon"},{default:e(()=>[d(n(a.value==="Cleared"?"mdi-check-circle":"mdi-alert-circle"),1)]),_:1},8,["color"]),d(" "+n(a.value),1)]),_:1},8,["style"])):T("",!0)]),_:1})]),_:1}),t(y,{col:"6"}),t(y,{cols:"12"},{default:e(()=>[t(h,{class:"mx-auto mr-5 bottom-left",elevation:"3","max-width":"auto"},{default:e(()=>[t(I,null,{default:e(()=>[t(V,{class:"fw-bold",style:{color:"var(--dark)"}},{default:e(()=>[Q,d(" Inventory Requirements ")]),_:1})]),_:1}),t(b,null,{default:e(()=>[t(C)]),_:1})]),_:1})]),_:1})]),_:1})])])]))}}),Z=g($,[["__scopeId","data-v-ad20ae62"]]);export{Z as default};
