(globalThis["webpackChunktemplate"]=globalThis["webpackChunktemplate"]||[]).push([[847],{7335:(e,t,l)=>{"use strict";l.d(t,{Z:()=>d});var a=l(7524),r=l(8339),i=l(9053),o=l(5198),n=function(e,t,l,a){function r(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,i){function o(e){try{s(a.next(e))}catch(t){i(t)}}function n(e){try{s(a["throw"](e))}catch(t){i(t)}}function s(e){e.done?l(e.value):r(e.value).then(o,n)}s((a=a.apply(e,t||[])).next())}))};(0,r.tv)();const s={_401interceptor:null,i:0,init(e){a.Z.defaults.baseURL=e},getFile(e){return a.Z.get(e,{responseType:"blob"})},setHeader(){a.Z.defaults.headers.common.Authorization=`Bearer ${i.Z.getToken()}`,a.Z.defaults.headers.common["Accept-Language"]="en"},formData(e,t){return a.Z.post(e,t,{headers:{"Content-Type":"multipart/form-data"}})},removeHeader(){a.Z.defaults.headers.common={}},get(e,t={}){return a.Z.get(`${e}`,t)},post(e,t){return a.Z.post(`${e}`,t)},customPost(e,t){return a.Z.post(e,t,{headers:{"Content-Type":"application/xml"}})},put(e,t){return a.Z.put(e,t)},delete(e){return a.Z["delete"](e)},customRequest(e){return(0,a.Z)(e)},mount401Interceptor(){this._401interceptor=a.Z.interceptors.response.use((e=>e),(e=>n(this,void 0,void 0,(function*(){if(this.i++,1==this.i){if(403===e.response.status||401===e.response.status)throw o.Z.logout(),window.location.reload(),e;if(200!=e.response.statusCode&&417!=e.response.statusCode)throw e}throw this.i=0,e}))))},unmount401Interceptor(){a.Z.interceptors.response.eject(this._401interceptor)}},d=s},5198:(e,t,l)=>{"use strict";l.d(t,{Z:()=>o});var a=l(7335),r=l(9053);const i={login(e){return a.Z.post("/auth-payload",e)},logout(){return a.Z.removeHeader(),r.Z.removeToken(),r.Z.removeUsername(),r.Z.removeRoles(),r.Z.removePermissions(),!0}},o=i},1847:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>X});var a=l(9835),r=l(6970),i=l(7285),o=l.n(i),n=l(3105),s=l.n(n);const d=(0,a._)("img",{src:"https://cdn3.iconfinder.com/data/icons/business-vol-13/100/Artboard_1-512.png",alt:"avatar"},null,-1),c={class:"row no-wrap q-pa-md"},u={class:"column"},p={class:"text-h6 q-mb-md"},m={class:"column items-center"},g=(0,a._)("img",{src:"https://cdn3.iconfinder.com/data/icons/business-vol-13/100/Artboard_1-512.png",alt:"profile"},null,-1),h={class:"text-subtitle1 q-mt-md q-mb-xs"};function b(e,t,l,i,n,b){const f=(0,a.up)("q-btn"),k=(0,a.up)("q-img"),w=(0,a.up)("q-toolbar-title"),_=(0,a.up)("q-avatar"),q=(0,a.up)("q-toggle"),v=(0,a.up)("q-separator"),Z=(0,a.up)("q-btn-dropdown"),x=(0,a.up)("q-toolbar"),y=(0,a.up)("q-header"),$=(0,a.up)("q-item-label"),W=(0,a.up)("q-icon"),Q=(0,a.up)("q-item-section"),C=(0,a.up)("q-item"),A=(0,a.up)("q-expansion-item"),z=(0,a.up)("q-list"),D=(0,a.up)("q-scroll-area"),j=(0,a.up)("q-drawer"),L=(0,a.up)("router-view"),P=(0,a.up)("q-page"),S=(0,a.up)("q-page-container"),T=(0,a.up)("q-footer"),U=(0,a.up)("q-layout"),I=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(U,{view:"hHh LpR fff"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{class:(0,r.C_)(["shadow-5 header-border-radius",e.$q.dark.isActive?"gradient-dark-left-1":"gradient-light-left-1 text-blue-grey-8"])},{default:(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{dense:"",flat:"",round:"",icon:"clear_all",size:"18px",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[e.$q.dark.isActive?((0,a.wg)(),(0,a.j4)(k,{key:0,src:o(),alt:"logo",width:e.$q.screen.xs?"200px":"260px",class:"cursor-pointer",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},null,8,["width"])):((0,a.wg)(),(0,a.j4)(k,{key:1,src:s(),alt:"logo",width:e.$q.screen.xs?"200px":"260px",class:"cursor-pointer",onClick:t[1]||(t[1]=t=>e.$router.push("/"))},null,8,["width"]))])),_:1}),e.$q.screen.xs?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(f,{key:0,onClick:t[2]||(t[2]=t=>e.dark=!e.dark),flat:"",round:"",dense:"",icon:e.$q.dark.isActive?"light_mode":"dark_mode",color:e.$q.dark.isActive?"warning":"blue-4"},null,8,["icon","color"])),e.$q.screen.xs?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(f,{key:1,onClick:t[3]||(t[3]=t=>e.$q.fullscreen.toggle()),flat:"",round:"",dense:"",icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",class:"q-mx-sm"},null,8,["icon"])),(0,a.Wm)(Z,{flat:"",rounded:"",dense:"","transition-show":"jump-down","transition-hide":"jump-up","menu-offset":[8,10]},{label:(0,a.w5)((()=>[(0,a.Wm)(_,{size:"25px",class:"q-mr-sm"},{default:(0,a.w5)((()=>[d])),_:1}),(0,a.Uk)(" "+(0,r.zw)(e.username),1)])),default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a._)("div",u,[(0,a._)("div",p,[(0,a.Uk)("Settings "),(0,a.Wm)(f,{onClick:t[4]||(t[4]=t=>e.$q.fullscreen.toggle()),flat:"",dense:"",round:"",class:"float-right",icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),(0,a.Wm)(q,{modelValue:e.dark,"onUpdate:modelValue":t[5]||(t[5]=t=>e.dark=t),label:"DarkMode"},null,8,["modelValue"])]),(0,a.Wm)(v,{vertical:"",inset:"",class:"q-mx-lg"}),(0,a._)("div",m,[(0,a.Wm)(_,{size:"72px",style:{border:"1px solid black"}},{default:(0,a.w5)((()=>[g])),_:1}),(0,a._)("div",h,(0,r.zw)(e.username),1),(0,a.wy)((0,a.Wm)(f,{onClick:e.logout,to:"/auth/login",color:"negative",label:e.$t("actions.logout"),icon:"logout",size:"sm"},null,8,["onClick","label"]),[[I]])])])])),_:1})])),_:1})])),_:1},8,["class"]),(0,a.Wm)(j,{"show-if-above":"",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[6]||(t[6]=t=>e.leftDrawerOpen=t),side:"left",class:(0,r.C_)("no-shadow "+(e.$q.dark.isActive?"":"drawer-light-bg"))},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{"thumb-style":e.thumbStyle,"bar-style":e.barStyle,class:"full-height"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{style:{width:"299px"},class:"text-blue-grey-8"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.essentialLinks,((t,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:`menu-${l}`},[t.header?((0,a.wg)(),(0,a.j4)($,{key:0,header:"",class:"q-my-none q-pb-none"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t(`${t.header}`)),1)])),_:2},1024)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[t.children?((0,a.wg)(),(0,a.j4)(A,{key:0,icon:t.icon,label:e.$t(`${t.title}`),class:(0,r.C_)(`${0===l?"":"q-my-md"} q-mx-sm shadow-5 border-radius-15 ${e.$q.dark.isActive?e.$route.fullPath===t.link?"gradient-light-right-1 text-blue-grey-8 shadow-15 text-bold":"gradient-dark-left-1":e.$route.fullPath===t.link?"gradient-dark-right-1 text-white shadow-15 text-bold":"gradient-light-left-1"}`),"active-class":e.$q.dark.isActive?"gradient-light-left-1 text-blue-grey-8 shadow-15":"gradient-dark-left-1 text-white shadow-15"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.children,((t,l)=>((0,a.wg)(),(0,a.j4)(C,{key:`child-${l}`,to:t.link,active:e.$route.fullPath===t.link,"active-class":e.$q.dark.isActive?"gradient-light-left-1 text-blue-grey-8":"gradient-dark-left-1 text-white",class:"border-radius-15"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{avatar:"",class:"q-pl-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{name:t.icon},null,8,["name"])])),_:2},1024),(0,a.Wm)(Q,{class:"q-pl-md"},{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t(`${t.title}`)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to","active","active-class"])))),128))])),_:2},1032,["icon","label","class","active-class"])):((0,a.wg)(),(0,a.j4)(C,{key:1,to:t.link,active:e.$route.fullPath===t.link,class:(0,r.C_)(`${0===l?"":"q-my-md"} q-mx-sm shadow-5 border-radius-15 ${e.$q.dark.isActive?e.$route.fullPath===t.link?"gradient-light-right-1 text-blue-grey-8 shadow-15 text-bold":"gradient-dark-left-1":e.$route.fullPath===t.link?"gradient-dark-right-1 text-white shadow-15 text-bold":"gradient-light-left-1"}`),"active-class":e.$q.dark.isActive?"gradient-light-left-1 text-blue-grey-8 shadow-15":"gradient-dark-left-1 text-white shadow-15"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{name:t.icon},null,8,["name"])])),_:2},1024),(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Wm)($,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.$t(`${t.title}`)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to","active","class","active-class"]))],64))],64)))),128))])),_:1})])),_:1},8,["thumb-style","bar-style"])])),_:1},8,["modelValue","class"]),(0,a.Wm)(S,{class:(0,r.C_)(e.$q.dark.isActive?"background-dark":"backgroud")},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{dark:e.dark},null,8,["dark"])])),_:1})])),_:1},8,["class"]),(0,a.Wm)(T,{class:(0,r.C_)(["shadow-up-5 text-right q-pr-sm footer-border-radius",e.$q.dark.isActive?"gradient-dark-left-1":"gradient-light-left-1 text-blue-grey-8"])},{default:(0,a.w5)((()=>[(0,a.Uk)(" Design & Develop by MMA@DataPrizma ")])),_:1},8,["class"])])),_:1})}var f=l(499);function k(e,t,l,i,o,n){const s=(0,a.up)("q-icon"),d=(0,a.up)("q-item-section"),c=(0,a.up)("q-item-label"),u=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(u,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(d,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.title),1)])),_:1}),(0,a.Wm)(c,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const w=(0,a.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var _=l(1639),q=l(490),v=l(1233),Z=l(2857),x=l(3115),y=l(9984),$=l.n(y);const W=(0,_.Z)(w,[["render",k]]),Q=W;$()(w,"components",{QItem:q.Z,QItemSection:v.Z,QIcon:Z.Z,QItemLabel:x.Z});const C=[{header:"sidebar.main"},{title:"sidebar.dashboard",icon:"dashboard",link:"/"},{title:"sidebar.rent",icon:"receipt_long",link:"/"},{header:"sidebar.bills"},{title:"sidebar.account_number",icon:"format_list_numbered",link:"/account-number"},{title:"sidebar.bills_report",icon:"file_copy",children:[{title:"sidebar.hot",icon:"opacity",link:"/report/hot"},{title:"sidebar.cold",icon:"water_drop",link:"/report/cold"},{title:"sidebar.gaz",icon:"local_fire_department",link:"/report/gaz"},{title:"sidebar.electronic",icon:"bolt",link:"/report/electronic"},{title:"sidebar.garbage",icon:"delete_forever",link:"/report/garbage"},{title:"sidebar.communal",icon:"contact_support",link:"/report/communal"},{title:"sidebar.tax",icon:"verified",link:"/report/tax"}]},{title:"sidebar.bills",icon:"real_estate_agent",children:[{title:"sidebar.hot",icon:"opacity",link:"/bills/hot"},{title:"sidebar.cold",icon:"water_drop",link:"/bills/cold"},{title:"sidebar.gaz",icon:"local_fire_department",link:"/bills/gaz"},{title:"sidebar.electronic",icon:"bolt",link:"/bills/electronic"},{title:"sidebar.garbage",icon:"delete_forever",link:"/bills/garbage"},{title:"sidebar.communal",icon:"contact_support",link:"/bills/communal"},{title:"sidebar.tax",icon:"verified",link:"/bills/tax"}]},{header:"sidebar.management"},{title:"sidebar.home",icon:"house",link:"/houses"},{title:"sidebar.person",icon:"group",link:"/persons"},{title:"sidebar.user",icon:"group",link:"/users"}],A=C;var z=l(9053),D=l(5198);const j=(0,a.aZ)({name:"MainLayout",components:{EssentialLink:Q},data(){return{dark:!1}},setup(){const e=(0,f.iH)(!1),t=z.Z.getUsername();return{essentialLinks:A,leftDrawerOpen:e,username:t,thumbStyle:{borderRadius:"3px",backgroundColor:"#253364",width:"4px",opacity:.3},barStyle:{borderRadius:"1px",backgroundColor:"#027be3",width:"10px",opacity:0},toggleLeftDrawer(){e.value=!e.value},logout(){D.Z.logout()}}},watch:{dark:{handler(e){this.$q.dark.toggle(),z.Z.setTheme(e)}}},created(){const e=z.Z.getTheme();this.dark=!(!e||""===e||"true"!==e)}});var L=l(249),P=l(6602),S=l(1663),T=l(8879),U=l(1973),I=l(335),H=l(8479),R=l(1357),V=l(3175),M=l(926),Y=l(906),B=l(6663),E=l(3246),O=l(1123),F=l(2133),K=l(9885),G=l(1378),J=l(2146);const N=(0,_.Z)(j,[["render",b]]),X=N;$()(j,"components",{QLayout:L.Z,QHeader:P.Z,QToolbar:S.Z,QBtn:T.Z,QToolbarTitle:U.Z,QImg:I.Z,QBtnDropdown:H.Z,QAvatar:R.Z,QToggle:V.Z,QSeparator:M.Z,QDrawer:Y.Z,QScrollArea:B.Z,QList:E.Z,QItemLabel:x.Z,QExpansionItem:O.Z,QItem:q.Z,QItemSection:v.Z,QIcon:Z.Z,QPageContainer:F.Z,QPage:K.Z,QFooter:G.Z}),$()(j,"directives",{ClosePopup:J.Z})},7285:(e,t,l)=>{e.exports=l.p+"img/header-logo-dark.a1d7ef9a.png"},3105:(e,t,l)=>{e.exports=l.p+"img/header-logo-light.d785a700.png"}}]);