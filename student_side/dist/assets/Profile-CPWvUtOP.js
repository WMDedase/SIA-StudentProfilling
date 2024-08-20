import{p as ce,O as ze,g as fe,P as me,Q as Ee,l as P,u as ve,R as pe,a as t,m as A,r as h,s as Oe,T as Me,z as le,K as H,U as Ge,F as L,n as ge,M as He,W as $e,t as ee,X as xe,q as je,Y as Le,_ as Ke,A as ae,Z as We,S as ne,o as R,f as oe,w as u,d as p,C as $,b as s,c as j,y as m,B as Ye,h as Je,$ as be,J as Qe,a0 as ye,N as Xe,D as Ze,a1 as et,a2 as tt}from"./index-BNY_wFJi.js";import{I as lt,V as te}from"./lazy-D6cDBeqJ.js";import{V as Ce,c as ke,a as we,b as Pe}from"./VCard-C_Nje8yU.js";import{V as at,a as Z}from"./VRow-BoLK9wl-.js";import{m as nt,g as Ve,h as ot,f as st,V as ut,a as it,i as Se,b as rt}from"./VToolbar-DJvvMP_W.js";import{a as he,u as _e,b as K,d as Fe,e as Re,g as De,h as Ie,f as Ae,V as Be}from"./VTextField-UJixJx_W.js";import{V as Te,a as Ue}from"./VSpacer-n8xaCHEl.js";import"./ssrBoot-CcPqA_Mj.js";const dt=ce({...he(),...ze(nt(),["inline"])},"VCheckbox"),ct=fe()({name:"VCheckbox",inheritAttrs:!1,props:dt(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,l){let{attrs:C,slots:_}=l;const a=me(e,"modelValue"),{isFocused:i,focus:n,blur:c}=_e(e),q=Ee(),g=P(()=>e.id||`checkbox-${q}`);return ve(()=>{const[v,f]=pe(C),y=K.filterProps(e),w=Ve.filterProps(e);return t(K,A({class:["v-checkbox",e.class]},v,y,{modelValue:a.value,"onUpdate:modelValue":B=>a.value=B,id:g.value,focused:i.value,style:e.style}),{..._,default:B=>{let{id:D,messagesId:E,isDisabled:V,isReadonly:W,isValid:O}=B;return t(Ve,A(w,{id:D.value,"aria-describedby":E.value,disabled:V.value,readonly:W.value},f,{error:O.value===!1,modelValue:a.value,"onUpdate:modelValue":N=>a.value=N,onFocus:n,onBlur:c}),_)}})}),{}}}),ft=ce({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...he(),...Fe()},"VTextarea"),mt=fe()({name:"VTextarea",directives:{Intersect:lt},inheritAttrs:!1,props:ft(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:C,emit:_,slots:a}=l;const i=me(e,"modelValue"),{isFocused:n,focus:c,blur:q}=_e(e),g=P(()=>typeof e.counterValue=="function"?e.counterValue(i.value):(i.value||"").toString().length),v=P(()=>{if(C.maxlength)return C.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function f(r,k){var x,S;!e.autofocus||!r||(S=(x=k[0].target)==null?void 0:x.focus)==null||S.call(x)}const y=h(),w=h(),B=Oe(""),D=h(),E=P(()=>e.persistentPlaceholder||n.value||e.active);function V(){var r;D.value!==document.activeElement&&((r=D.value)==null||r.focus()),n.value||c()}function W(r){V(),_("click:control",r)}function O(r){_("mousedown:control",r)}function N(r){r.stopPropagation(),V(),ee(()=>{i.value="",xe(e["onClick:clear"],r)})}function se(r){var x;const k=r.target;if(i.value=k.value,(x=e.modelModifiers)!=null&&x.trim){const S=[k.selectionStart,k.selectionEnd];ee(()=>{k.selectionStart=S[0],k.selectionEnd=S[1]})}}const T=h(),M=h(+e.rows),Y=P(()=>["plain","underlined"].includes(e.variant));Me(()=>{e.autoGrow||(M.value=+e.rows)});function o(){e.autoGrow&&ee(()=>{if(!T.value||!w.value)return;const r=getComputedStyle(T.value),k=getComputedStyle(w.value.$el),x=parseFloat(r.getPropertyValue("--v-field-padding-top"))+parseFloat(r.getPropertyValue("--v-input-padding-top"))+parseFloat(r.getPropertyValue("--v-field-padding-bottom")),S=T.value.scrollHeight,G=parseFloat(r.lineHeight),I=Math.max(parseFloat(e.rows)*G+x,parseFloat(k.getPropertyValue("--v-input-control-height"))),U=parseFloat(e.maxRows)*G+x||1/0,b=Le(S??0,I,U);M.value=Math.floor((b-x)/G),B.value=je(b)})}le(o),H(i,o),H(()=>e.rows,o),H(()=>e.maxRows,o),H(()=>e.density,o);let d;return H(T,r=>{r?(d=new ResizeObserver(o),d.observe(T.value)):d==null||d.disconnect()}),Ge(()=>{d==null||d.disconnect()}),ve(()=>{const r=!!(a.counter||e.counter||e.counterValue),k=!!(r||a.details),[x,S]=pe(C),{modelValue:G,...I}=K.filterProps(e),U=Re(e);return t(K,A({ref:y,modelValue:i.value,"onUpdate:modelValue":b=>i.value=b,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":Y.value},e.class],style:e.style},x,I,{centerAffix:M.value===1&&!Y.value,focused:n.value}),{...a,default:b=>{let{id:z,isDisabled:J,isDirty:X,isReadonly:ue,isValid:ie}=b;return t(De,A({ref:w,style:{"--v-textarea-control-height":B.value},onClick:W,onMousedown:O,"onClick:clear":N,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},U,{id:z.value,active:E.value||X.value,centerAffix:M.value===1&&!Y.value,dirty:X.value||e.dirty,disabled:J.value,focused:n.value,error:ie.value===!1}),{...a,default:re=>{let{props:{class:Q,...F}}=re;return t(L,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ge(t("textarea",A({ref:D,class:Q,value:i.value,onInput:se,autofocus:e.autofocus,readonly:ue.value,disabled:J.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:V,onBlur:q},F,S),null),[[He("intersect"),{handler:f},null,{once:!0}]]),e.autoGrow&&ge(t("textarea",{class:[Q,"v-textarea__sizer"],id:`${F.id}-sizer`,"onUpdate:modelValue":de=>i.value=de,ref:T,readonly:!0,"aria-hidden":"true"},null),[[$e,i.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:k?b=>{var z;return t(L,null,[(z=a.details)==null?void 0:z.call(a,b),r&&t(L,null,[t("span",null,null),t(Ie,{active:e.persistentCounter||n.value,value:g.value,max:v.value},a.counter)])])}:void 0})}),Ae({},y,w,D)}}),vt={data(){return{dialog:!1,document_type:"",documentTypeOptions:["Form 137-A(TOR/SF10)","Diploma","Report Card(F-138)(CTC)","Good Moral Certificate","Enrollment Certificate","ESC Certificate","Completion Certificate","English as Medium Ins.","With Honors Certificate","GWA Certificate"],purpose:"",requested_by:"",person_requesting:"",guardian_name:"",student_id:""}},mounted(){this.fetchStudentProfile()},methods:{async fetchStudentProfile(){try{const e=await ae();this.student_id=e.student_profile.student_id,console.log(this.student_id)}catch(e){console.error("Failed to fetch student profile:",e.message)}},openDialog(){this.document_type="",this.purpose="",this.guardian_name="",this.dialog=!0},submitRequest(){ae();const e={student_id:this.student_id,requested_by:this.requested_by?"Relative":"Student",guardian_name:this.guardian_name?this.guardian_name:"  ",document_type:this.document_type,purpose:this.purpose};We.post("/docreq",e).then(l=>{this.dialog=!1,ne.fire({title:"SUCCESS",text:"Document Succesfully Requested",icon:"success",confirmButtonText:"OK"})}).catch(l=>{ne.fire({icon:"error",title:"FAILED",text:"Document Request Failed",confirmButtonText:"OK"})}),this.dialog=!1}}},pt=s("span",{class:"material-icons",style:{position:"relative",right:"5px",top:"5px"}},"description",-1),ht=s("small",{class:"text-caption text-medium-emphasis"},"*The document/s requested is/are subject for verification and to be released seve, (7) working days from the date of payment. ",-1);function _t(e,l,C,_,a,i){return R(),oe(Ue,{modelValue:a.dialog,"onUpdate:modelValue":l[6]||(l[6]=n=>a.dialog=n),"max-width":"700"},{activator:u(({props:n})=>[t(te,A({class:"text-none font-weight-regular",color:"var(--dark)","prepend-icon":"mdi-file-document"},n,{style:{color:"white"}}),{default:u(()=>[p("Request Documents")]),_:2},1040)]),default:u(()=>[t(Ce,null,{default:u(()=>[t(ke,{class:"fw-bold",style:{padding:"1.2rem","background-color":"var(--dark)",color:"white","border-radius":"3px"}},{default:u(()=>[pt,p("Document Request Form")]),_:1}),t(we,null,{default:u(()=>[t(at,{dense:""},{default:u(()=>[t(Z,{cols:"12"},{default:u(()=>[t(ot,{modelValue:a.document_type,"onUpdate:modelValue":l[0]||(l[0]=n=>a.document_type=n),items:a.documentTypeOptions,label:"Document Type*",required:""},null,8,["modelValue","items"])]),_:1}),t(Z,{cols:"12"},{default:u(()=>[t(mt,{modelValue:a.purpose,"onUpdate:modelValue":l[1]||(l[1]=n=>a.purpose=n),label:"Purpose*",required:"","auto-grow":""},null,8,["modelValue"])]),_:1}),t(Z,{cols:"12"},{default:u(()=>[t(ct,{modelValue:a.requested_by,"onUpdate:modelValue":l[2]||(l[2]=n=>a.requested_by=n),label:"Add Guardian Name(If Applicable)"},null,8,["modelValue"])]),_:1}),a.requested_by?(R(),oe(Z,{key:0,cols:"12"},{default:u(()=>[t(Be,{modelValue:a.guardian_name,"onUpdate:modelValue":l[3]||(l[3]=n=>a.guardian_name=n),label:"Guardian Name*",required:""},null,8,["modelValue"])]),_:1})):$("",!0),ht]),_:1})]),_:1}),t(st),t(Pe,null,{default:u(()=>[t(Te),t(te,{text:"Close",variant:"plain",onClick:l[4]||(l[4]=n=>a.dialog=!1)}),t(te,{color:"primary",text:"Request",variant:"tonal",onClick:l[5]||(l[5]=n=>i.submitRequest())})]),_:1})]),_:1})]),_:1},8,["modelValue"])}const qe=Ke(vt,[["render",_t]]),gt={style:{padding:"1rem"}},yt={data(){return{search:"",documentlist:[],headers:[{title:"Document Type",key:"document_type"},{title:"Status",key:"status"},{title:"Release Date",key:"document_release_date"}],documentData:{document_id:null,document_type:"",status:"",loading:!0}}},mounted(){this.getDocx()},methods:{async getDocx(){try{const e=await Je.get("/student");this.documentlist=e.data,console.log(this.documentlist)}catch(e){console.error("Error fetching items:",e)}},getStatusColor(e){return e==="Pending"?"#FFA500":e==="For Recieved"?"#6EACDA":e==="Received"?"green":"red"}}},Ne=Object.assign(yt,{__name:"PendingTable",setup(e){const l=h([]),C=h([{title:"Document Type",key:"document_type"},{title:"Status",key:"document_remarks"}]),_=h(!0),a=h(null);return le(async()=>{var i;try{const n=await ae();console.log("API response:",n);const c=(i=n.student_profile)==null?void 0:i.docreq;Array.isArray(c)?l.value=c:c?l.value=[c]:a.value="No document request found or data is not an array",console.log("Document Request data:",l.value)}catch(n){a.value="Failed to fetch current user",console.error("Error:",n)}finally{_.value=!1}}),(i,n)=>(R(),oe(rt,{search:i.search,headers:C.value,items:l.value,loading:_.value,"sort-by":[{key:"items_name",order:"asc"}]},{top:u(()=>[t(ut,{flat:""},{default:u(()=>[t(it,{class:"text-h6 font-weight-black",style:{color:"#2F3F64"}}),t(Be,{modelValue:i.search,"onUpdate:modelValue":n[0]||(n[0]=c=>i.search=c),class:"w-auto mr-4",density:"compact",label:"Search","prepend-inner-icon":"mdi-magnify",variant:"solo-filled",flat:"","hide-details":"","single-line":""},null,8,["modelValue"])]),_:1})]),item:u(({item:c})=>[(R(),j("tr",{key:c.id},[s("td",gt,m(c.document_type),1),s("td",{style:Ye({color:i.getStatusColor(c.document_remarks)})},[t(Se,null,{default:u(()=>[p(m(c.document_remarks),1)]),_:2},1024)],4),s("td",null,m(c.document_release_date),1)]))]),_:1},8,["search","headers","items","loading"]))}}),Vt=ce({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...he({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:()=>[],validator:e=>be(e).every(l=>l!=null&&typeof l=="object")},...Fe({clearable:!0})},"VFileInput"),xt=fe()({name:"VFileInput",inheritAttrs:!1,props:Vt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:C,emit:_,slots:a}=l;const{t:i}=Qe(),n=me(e,"modelValue",e.modelValue,o=>be(o),o=>e.multiple||Array.isArray(e.modelValue)?o:o[0]),{isFocused:c,focus:q,blur:g}=_e(e),v=P(()=>typeof e.showSize!="boolean"?e.showSize:void 0),f=P(()=>(n.value??[]).reduce((o,d)=>{let{size:r=0}=d;return o+r},0)),y=P(()=>ye(f.value,v.value)),w=P(()=>(n.value??[]).map(o=>{const{name:d="",size:r=0}=o;return e.showSize?`${d} (${ye(r,v.value)})`:d})),B=P(()=>{var d;const o=((d=n.value)==null?void 0:d.length)??0;return e.showSize?i(e.counterSizeString,o,y.value):i(e.counterString,o)}),D=h(),E=h(),V=h(),W=P(()=>c.value||e.active),O=P(()=>["plain","underlined"].includes(e.variant));function N(){var o;V.value!==document.activeElement&&((o=V.value)==null||o.focus()),c.value||q()}function se(o){var d;(d=V.value)==null||d.click()}function T(o){_("mousedown:control",o)}function M(o){var d;(d=V.value)==null||d.click(),_("click:control",o)}function Y(o){o.stopPropagation(),N(),ee(()=>{n.value=[],xe(e["onClick:clear"],o)})}return H(n,o=>{(!Array.isArray(o)||!o.length)&&V.value&&(V.value.value="")}),ve(()=>{const o=!!(a.counter||e.counter),d=!!(o||a.details),[r,k]=pe(C),{modelValue:x,...S}=K.filterProps(e),G=Re(e);return t(K,A({ref:D,modelValue:n.value,"onUpdate:modelValue":I=>n.value=I,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":O.value},e.class],style:e.style,"onClick:prepend":se},r,S,{centerAffix:!O.value,focused:c.value}),{...a,default:I=>{let{id:U,isDisabled:b,isDirty:z,isReadonly:J,isValid:X}=I;return t(De,A({ref:E,"prepend-icon":e.prependIcon,onMousedown:T,onClick:M,"onClick:clear":Y,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},G,{id:U.value,active:W.value||z.value,dirty:z.value,disabled:b.value,focused:c.value,error:X.value===!1}),{...a,default:ue=>{var Q;let{props:{class:ie,...re}}=ue;return t(L,null,[t("input",A({ref:V,type:"file",readonly:J.value,disabled:b.value,multiple:e.multiple,name:e.name,onClick:F=>{F.stopPropagation(),J.value&&F.preventDefault(),N()},onChange:F=>{if(!F.target)return;const de=F.target;n.value=[...de.files??[]]},onFocus:N,onBlur:g},re,k),null),t("div",{class:ie},[!!((Q=n.value)!=null&&Q.length)&&(a.selection?a.selection({fileNames:w.value,totalBytes:f.value,totalBytesReadable:y.value}):e.chips?w.value.map(F=>t(Se,{key:F,size:"small",color:e.color},{default:()=>[F]})):w.value.join(", "))])])}})},details:d?I=>{var U,b;return t(L,null,[(U=a.details)==null?void 0:U.call(a,I),o&&t(L,null,[t("span",null,null),t(Ie,{active:!!((b=n.value)!=null&&b.length),value:B.value},a.counter)])])}:void 0})}),Ae({},D,E,V)}}),bt=Ze('<div class="top-container"><h1 class="bg-title">PROFILE</h1><div class="studentProfile"><span class="material-icons">person</span><span class="text fw-bolder">Profile</span></div></div><hr>',2),Ct={class:"bottom-container"},kt={class:"left-container"},wt={class:"pending-table"},Pt=s("h3",null,[s("span",{class:"material-icons"}," pending_actions"),p("Pending Documents")],-1),St={class:"right-container"},Ft={class:"profile"},Rt={class:"profile_header"},Dt=s("h3",null,[s("span",{class:"material-icons"}," account_circle"),p("Profile")],-1),It={class:"request-btn"},At=["src"],Bt={key:0},Tt={key:1},Ut={key:2,class:"content"},qt={class:"left"},Nt=s("h5",null,"School Information",-1),zt={key:1},Et={style:{color:"green","font-weight":"900"}},Ot={class:"right"},Mt=s("h5",null,"Personal Information",-1),Gt=s("span",{class:"material-icons",style:{position:"relative",right:"5px",top:"5px"}},"upload",-1),Ht={components:{DocxRequestForm:qe,PendingTable:Ne}},Xt=Object.assign(Ht,{__name:"Profile",setup(e){const l=h(null),C=h(!0),_=h(null),a=h(!1),i=h(et),n=h(!0);le(async()=>{try{const g=await ae();if(console.log("API response:",g),l.value=g.student_profile,g.student_profile){if(console.log("Current user data:",l.value),g.student_profile.profile_pic&&g.student_profile.profile_pic.image){const v=g.student_profile.profile_pic.image;console.log("Received image data:",v),i.value=`http://26.81.173.255:8000/uploads/profile/${v}`,n.value=!1}}else _.value="No profile picture found, using default."}catch(g){_.value="Failed to fetch current user",console.error("Error:",g)}finally{C.value=!1}});async function c(g){if(!n.value)ne.fire({icon:"warning",title:"Oops...",text:"You have already uploaded a profile picture!",confirmButtonText:"OK",confirmButtonColor:"#3085d6",background:"#f4f4f4"});else{const v=g.target.files[0];if(v&&l.value){const f=new FileReader;f.onloadend=async()=>{i.value=f.result;const y=new FormData;y.append("image",v),y.append("student_id",l.value.student_id);try{await tt(y),console.log("Profile picture uploaded successfully"),ne.fire({title:"Success!",text:"Profile picture uploaded successfully!",icon:"success",confirmButtonText:"OK"}),n.value=!1,await le()}catch(w){console.error("Failed to upload profile picture",w)}},f.readAsDataURL(v),a.value=!1}}}function q(){a.value=!0}return(g,v)=>{const f=Xe("h7");return R(),j("main",null,[bt,s("div",Ct,[s("div",kt,[s("div",wt,[Pt,t(Ne)])]),s("div",St,[s("div",Ft,[s("div",Rt,[Dt,s("div",It,[t(qe)])]),s("div",{class:"profile-pic",onClick:q},[s("img",{src:i.value,alt:"Profile Picture"},null,8,At)]),C.value?(R(),j("div",Bt,"Loading...")):$("",!0),_.value?(R(),j("div",Tt,m(_.value),1)):$("",!0),l.value?(R(),j("div",Ut,[s("div",qt,[Nt,t(f,null,{default:u(()=>[p("Student ID:")]),_:1}),s("h6",null,m(l.value.student_id),1),t(f,null,{default:u(()=>[p("LRN:")]),_:1}),s("h6",null,m(l.value.student_lrn),1),t(f,null,{default:u(()=>[p("Grade Level:")]),_:1}),s("h6",null,m(l.value.grade_level),1),l.value.grade_level>10?(R(),oe(f,{key:0},{default:u(()=>[p("Strand:")]),_:1})):$("",!0),l.value.grade_level>10?(R(),j("h6",zt,m(l.value.strand),1)):$("",!0),t(f,null,{default:u(()=>[p("Section:")]),_:1}),s("h6",null,m(l.value.section),1),t(f,null,{default:u(()=>[p("Adviser:")]),_:1}),s("h6",null,m(l.value.adviser.fname+" "+l.value.adviser.lname),1),t(f,null,{default:u(()=>[p("Enrollment Status:")]),_:1}),s("h6",Et,m(l.value.enrollment_status),1)]),s("div",Ot,[Mt,t(f,null,{default:u(()=>[p("Name:")]),_:1}),s("h6",null,m(l.value.first_name)+" "+m(l.value.middle_name)+" "+m(l.value.last_name),1),t(f,null,{default:u(()=>[p("Gender:")]),_:1}),s("h6",null,m(l.value.sex_at_birth),1),t(f,null,{default:u(()=>[p("Birth Date:")]),_:1}),s("h6",null,m(l.value.birth_date),1),t(f,null,{default:u(()=>[p("Address:")]),_:1}),s("h6",null,m(l.value.street)+", "+m(l.value.barangay)+", "+m(l.value.city)+", "+m(l.value.province),1)])])):$("",!0)])])]),t(Ue,{modelValue:a.value,"onUpdate:modelValue":v[1]||(v[1]=y=>a.value=y),"max-width":"400px"},{default:u(()=>[t(Ce,null,{default:u(()=>[t(ke,{class:"fw-bold",style:{padding:"1.2rem","background-color":"var(--dark)",color:"white","border-radius":"3px"}},{default:u(()=>[Gt,p("Upload Profile Picture ")]),_:1}),t(we,null,{default:u(()=>[t(xt,{onChange:c,accept:"image/*",label:"Choose an image"})]),_:1}),t(Pe,null,{default:u(()=>[t(Te),t(te,{onClick:v[0]||(v[0]=y=>a.value=!1)},{default:u(()=>[p("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}});export{Xt as default};