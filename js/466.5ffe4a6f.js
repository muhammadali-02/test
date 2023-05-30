"use strict";(globalThis["webpackChunktemplate"]=globalThis["webpackChunktemplate"]||[]).push([[466],{242:(e,l,t)=>{t.d(l,{Z:()=>s});var a=t(9053);const o={list(){let e=a.Z.getHomes();return e?JSON.parse(e):[]},getById(){},deleteHome(){},save(e){a.Z.setHomes(JSON.stringify(e))}},s=o},9053:(e,l,t)=>{t.d(l,{Z:()=>d});const a="theme",o="homes",s="persons",r="reports",u={setTheme(e){localStorage.setItem(a,e)},getTheme(){return localStorage.getItem(a)},removeTheme(){localStorage.removeItem(a)},setHomes(e){localStorage.setItem(o,e)},getHomes(){return localStorage.getItem(o)},removeHomes(){localStorage.removeItem(o)},setPersons(e){localStorage.setItem(s,e)},getPersons(){return localStorage.getItem(s)},removePersons(){localStorage.removeItem(s)},setReports(e){localStorage.setItem(r,e)},getReports(){return localStorage.getItem(r)},removeReports(){localStorage.removeItem(r)}},d=u},2466:(e,l,t)=>{t.r(l),t.d(l,{default:()=>I});var a=t(9835),o=t(6970);const s=(0,a._)("hr",{class:"q-ma-none"},null,-1),r=(0,a._)("img",{src:"https://img.freepik.com/premium-vector/no-data-empty-data-concept-illustration-vector_610956-1400.jpg",alt:"not_found",style:{"border-radius":"50px",width:"400px"}},null,-1),u=(0,a._)("hr",{class:"q-ma-none"},null,-1),d=(0,a._)("hr",null,null,-1),n={class:"row"},m={class:"col text-left"},i={class:"col text-right"};function c(e,l,t,c,g,p){const w=(0,a.up)("q-toolbar-title"),f=(0,a.up)("q-toolbar"),b=(0,a.up)("q-th"),h=(0,a.up)("q-tr"),_=(0,a.up)("q-td"),W=(0,a.up)("q-btn"),k=(0,a.up)("q-markup-table"),z=(0,a.up)("q-input"),U=(0,a.up)("q-form"),v=(0,a.up)("q-card"),q=(0,a.up)("q-dialog"),x=(0,a.up)("q-inner-loading"),y=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(v,{bordered:"",class:"border-radius-10"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("sidebar.account_number")),1)])),_:1})])),_:1}),s,(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a._)("thead",null,[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)("№")])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("fields.home")),1)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("sidebar.hot")),1)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("sidebar.cold")),1)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("sidebar.gaz")),1)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("sidebar.electronic")),1)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("sidebar.garbage")),1)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("sidebar.communal")),1)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("sidebar.tax")),1)])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$t("actions.title")),1)])),_:1})])),_:1})]),(0,a._)("tbody",null,[g.list&&g.list.length>0?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(g.list,((e,l)=>((0,a.wg)(),(0,a.j4)(h,{key:`item-${l}`},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l+1),1)])),_:2},1024),(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.name),1)])),_:2},1024),(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.hot?e.hot:"-"),1)])),_:2},1024),(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.cold?e.cold:"-"),1)])),_:2},1024),(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.gaz?e.gaz:"-"),1)])),_:2},1024),(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.electronic?e.electronic:"-"),1)])),_:2},1024),(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.garbage?e.garbage:"-"),1)])),_:2},1024),(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.communal?e.communal:"-"),1)])),_:2},1024),(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.tax?e.tax:"-"),1)])),_:2},1024),(0,a.Wm)(_,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{onClick:t=>p.editForm(e,l),flat:"",dense:"",round:"",icon:"edit",class:"text-primary"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128)):((0,a.wg)(),(0,a.j4)(h,{key:1},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{colspan:"10",class:"text-center"},{default:(0,a.w5)((()=>[r])),_:1})])),_:1}))])])),_:1}),(0,a.Wm)(q,{modelValue:g.modal,"onUpdate:modelValue":l[7]||(l[7]=e=>g.modal=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{style:{width:"100%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(g.form.name),1)])),_:1}),(0,a.wy)((0,a.Wm)(W,{flat:"",round:"",dense:"",icon:"close"},null,512),[[y]])])),_:1}),u,(0,a.Wm)(U,{onSubmit:p.save,class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{modelValue:g.form.hot,"onUpdate:modelValue":l[0]||(l[0]=e=>g.form.hot=e),dense:"",outlined:"","lazy-rules":"",rules:[p.required],label:e.$t("sidebar.hot")},null,8,["modelValue","rules","label"]),(0,a.Wm)(z,{modelValue:g.form.cold,"onUpdate:modelValue":l[1]||(l[1]=e=>g.form.cold=e),dense:"",outlined:"","lazy-rules":"",rules:[p.required],label:e.$t("sidebar.cold")},null,8,["modelValue","rules","label"]),(0,a.Wm)(z,{modelValue:g.form.gaz,"onUpdate:modelValue":l[2]||(l[2]=e=>g.form.gaz=e),dense:"",outlined:"","lazy-rules":"",rules:[p.required],label:e.$t("sidebar.gaz")},null,8,["modelValue","rules","label"]),(0,a.Wm)(z,{modelValue:g.form.electronic,"onUpdate:modelValue":l[3]||(l[3]=e=>g.form.electronic=e),dense:"",outlined:"","lazy-rules":"",rules:[p.required],label:e.$t("sidebar.electronic")},null,8,["modelValue","rules","label"]),(0,a.Wm)(z,{modelValue:g.form.garbage,"onUpdate:modelValue":l[4]||(l[4]=e=>g.form.garbage=e),dense:"",outlined:"","lazy-rules":"",rules:[p.required],label:e.$t("sidebar.garbage")},null,8,["modelValue","rules","label"]),(0,a.Wm)(z,{modelValue:g.form.communal,"onUpdate:modelValue":l[5]||(l[5]=e=>g.form.communal=e),dense:"",outlined:"","lazy-rules":"",rules:[p.required],label:e.$t("sidebar.communal")},null,8,["modelValue","rules","label"]),(0,a.Wm)(z,{modelValue:g.form.tax,"onUpdate:modelValue":l[6]||(l[6]=e=>g.form.tax=e),dense:"",outlined:"","lazy-rules":"",rules:[p.required],label:e.$t("sidebar.tax")},null,8,["modelValue","rules","label"]),d,(0,a._)("div",n,[(0,a._)("div",m,[(0,a.wy)((0,a.Wm)(W,{flat:"",label:e.$t("actions.cancel"),color:"negative",class:"bg-red-opacity","no-caps":""},null,8,["label"]),[[y]])]),(0,a._)("div",i,[(0,a.Wm)(W,{flat:"",label:e.$t("actions.save"),type:"submit",color:"positive",class:"bg-green-opacity","no-caps":""},null,8,["label"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(x,{color:"deep-purple",showing:g.loading},null,8,["showing"])])),_:1})}var g=t(242);const p={name:"account-number",data(){return{loading:!1,list:[],form:{},index:null,modal:!1}},methods:{required(e){return e&&e.length>0||this.$t("fields.required")},getList(){this.loading=!0,this.list=g.Z.list(),this.loading=!1},editForm(e,l){this.index=l,this.form=Object.assign({},e),this.modal=!0},save(){this.loading=!0,this.list[this.index]=Object.assign({},this.form),g.Z.save(this.list),this.getList(),this.modal=!1,this.loading=!1,this.$q.notify({message:this.$t(""+(this.create?"success_created":"success_updated")),progress:!0,closeBtn:!0,type:"positive",position:"top-right"})}},created(){this.getList()}};var w=t(1639),f=t(4458),b=t(1663),h=t(1973),_=t(6933),W=t(3532),k=t(1682),z=t(7220),U=t(2150),v=t(2074),q=t(8326),x=t(7471),y=t(854),V=t(2146),$=t(9984),Z=t.n($);const S=(0,w.Z)(p,[["render",c]]),I=S;Z()(p,"components",{QCard:f.Z,QToolbar:b.Z,QToolbarTitle:h.Z,QMarkupTable:_.Z,QTr:W.Z,QTh:k.Z,QTd:z.Z,QBtn:U.Z,QDialog:v.Z,QForm:q.Z,QInput:x.Z,QInnerLoading:y.Z}),Z()(p,"directives",{ClosePopup:V.Z})}}]);