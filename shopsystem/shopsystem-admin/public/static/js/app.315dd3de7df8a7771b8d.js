webpackJsonp([4],{"3pLw":function(e,t,n){"use strict";n.d(t,"b",function(){return f}),n.d(t,"c",function(){return v}),n.d(t,"a",function(){return h});var a=n("//Fk"),r=n.n(a),s=n("Dd8w"),o=n.n(s),c=n("mtWM"),u=n.n(c),i=n("YaEn"),l=n("Fd2+"),d=this,p=u.a.create({timeout:1e4,baseURL:"/",withCredentials:!1});p.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var m={400:"请求参数错误",401:"权限不足, 请重新登录",403:"服务器拒绝本次访问",404:"请求资源未找到",500:"内部服务器错误",501:"服务器不支持该请求中使用的方法",502:"网关错误",504:"网关超时"};p.interceptors.request.use(function(e){return localStorage.getItem("token")&&(console.log(d),e.headers.Authorization=localStorage.getItem("token")),"get"===e.method&&(e.params=o()({},e.params)),e},function(e){return r.a.reject(e)}),p.interceptors.response.use(function(e){return 200===e.status?(Object(l.a)({message:e.data.message,type:"success"}),r.a.resolve(e.data)):(Object(l.a)({message:e.data.message,type:"danger"}),r.a.reject(e.data))},function(e){if(e.response){var t=e.response.status in m?m[e.response.status]:e.response.data.message;return Object(l.a)({message:t,type:"danger"}),401===e.response.status&&i.a.push({path:"/"}),r.a.reject(e)}return Object(l.a)({message:"请求超时, 请刷新重试",type:"danger"}),r.a.reject(new Error("请求超时, 请刷新重试"))});var f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(a,r){p(o()({method:"get",url:e,params:t},n)).then(function(e){a(e)}).catch(function(e){r(e)})})},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return console.log(t),p(o()({method:"post",url:e,data:t},n)).then(function(t){return console.log(e),r.a.resolve(t)}).catch(function(e){return r.a.reject(e)})},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(a,r){p(o()({method:"delete",url:e,params:t},n)).then(function(e){a(e)}).catch(function(e){r(e)})})}},"4ml/":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(e){n("uwOo")},null,null).exports,o=n("YaEn"),c=n("3pLw"),u={postLogin:function(e){return Object(c.c)("/user/login",e)},postRegister:function(e){return Object(c.c)("/user/register",e)},deleteLogout:function(){return Object(c.a)("/user/logout")},postAddAddress:function(e){return Object(c.c)("/user/addAddress",e)},getUserinfo:function(e){return Object(c.b)("/user/userinfo",e)},deleteAddress:function(e){return Object(c.a)("/user/deleteAddress",e)},getAllProducts:function(e){return Object(c.b)("/product/all",e)},getMyCart:function(e){return Object(c.b)("/cart/getMyCart",e)},addToMyCart:function(e){return Object(c.c)("/product/addToCart",e)},deleteMyCart:function(e){return Object(c.a)("/cart/deleteMyCart",e)},getMyAddress:function(e){return Object(c.b)("/user/getMyAddress",e)}},i=n("Fd2+");n("4ml/"),n("mtWM");a.a.config.productionTip=!1,a.a.prototype.$http=u,a.a.use(i.b),new a.a({el:"#app",router:o.a,components:{App:s},template:"<App/>"})},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),r=n("/ocq"),s=n("Xxa5"),o=n.n(s),c=n("exGp"),u=n.n(c),i=n("tOjG"),l={name:"login",data:function(){return{areaList:i.areaList,searchResult:[],username:"",password:"",confirmPass:"",telephone:"",address:"",userAccount:""}},methods:{onSave:function(e){var t=this;return u()(o.a.mark(function n(){var a,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a={user_account:e.user_account,password:e.password},console.log(a),n.next=4,t.$http.postLogin(a);case 4:return r=n.sent,console.log(r),0===r.ret&&localStorage.setItem("token",r.token),n.next=9,t.$router.push({path:"/main"});case 9:console.log(e);case 10:case"end":return n.stop()}},n,t)}))()},onSubmit:function(e){var t=this;return u()(o.a.mark(function n(){var a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.address,a={username:e.username,user_account:e.userAccount,password:e.password,phone:e.phone,receiveAddress:e.address},n.next=4,t.$http.postRegister(a);case 4:case"end":return n.stop()}},n,t)}))()},areaclick:function(){console.log(1)},areaInfo:function(e){console.log(e)},Validator:function(){return this.password===this.confirmPass},onChangeDetail:function(e){this.searchResult=e?[{}]:[]}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("van-tabs",{attrs:{type:"card"}},[n("van-tab",{attrs:{title:"DENGLU❤"}},[n("van-form",{on:{submit:e.onSave}},[n("van-field",{attrs:{name:"user_account",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.userAccount,callback:function(t){e.userAccount=t},expression:"userAccount"}}),e._v(" "),n("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)],1),e._v(" "),n("van-tab",{attrs:{title:"ZHUCE😀"}},[n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),n("van-field",{attrs:{name:"userAccount",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.userAccount,callback:function(t){e.userAccount=t},expression:"userAccount"}}),e._v(" "),n("van-field",{attrs:{type:"text",name:"phone",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}}),e._v(" "),n("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("van-field",{attrs:{type:"password",name:"confirmPassword",label:"确认密码",placeholder:"再输入一次你的密码哦",rules:[{required:!0,message:"请确认",validator:e.Validator}]},model:{value:e.confirmPass,callback:function(t){e.confirmPass=t},expression:"confirmPass"}}),e._v(" "),n("van-field",{attrs:{type:"text",name:"address",label:"输入地址",placeholder:"请输入你的地址",rules:[{required:!0,message:"请输入你的地址",validator:e.Validator}]},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),e._v(" "),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var p=n("VU/8")(l,d,!1,function(e){n("s0mb")},"data-v-24b8f996",null).exports,m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container"},[n("router-view"),e._v(" "),n("van-tabbar",{attrs:{fixed:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"home-o"},on:{click:function(t){return e.handleChangeRouter("home")}}},[e._v("商品推荐")]),e._v(" "),n("van-tabbar-item",{attrs:{icon:"friends-o"},on:{click:function(t){return e.handleChangeRouter("cart")}}},[e._v("购物车")]),e._v(" "),n("van-tabbar-item",{attrs:{icon:"setting-o"},on:{click:function(t){return e.handleChangeRouter("mine")}}},[e._v("个人信息")])],1)],1)},staticRenderFns:[]};var f=n("VU/8")({data:function(){return{active:0}},methods:{handleChangeRouter:function(e){this.$router.push({name:e}).catch(function(e){})}}},m,!1,function(e){n("wwVL")},"data-v-910569d4",null).exports;a.a.use(r.a);t.a=new r.a({routes:[{path:"/",name:"login",component:p},{path:"/main",name:"main",component:f,redirect:{name:"home"},children:[{path:"home",name:"home",component:function(){return n.e(0).then(n.bind(null,"beoU"))}},{path:"cart",name:"cart",component:function(){return n.e(1).then(n.bind(null,"COBD"))}},{path:"mine",name:"mine",component:function(){return n.e(2).then(n.bind(null,"U/b5"))}}]}]})},s0mb:function(e,t){},uwOo:function(e,t){},wwVL:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.315dd3de7df8a7771b8d.js.map