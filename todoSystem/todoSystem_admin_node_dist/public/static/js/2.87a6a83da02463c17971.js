webpackJsonp([2],{"402x":function(e,t){},"U/b5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),o=n("exGp"),s=n.n(o),c={data:function(){return{active:0,myInfo:{user_id:1,username:"张三",user_mobile:"13000000000"}}},mounted:function(){var e=this;return s()(a.a.mark(function t(){var n,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("token"),t.next=3,e.$http.getUserInfo({token:n});case 3:r=t.sent,console.log(r),e.myInfo=r,localStorage.setItem("userInfo",r);case 7:case"end":return t.stop()}},t,e)}))()},methods:{logout:function(){var e=this;return s()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.clear();case 2:e.$router.replace("/");case 3:case"end":return t.stop()}},t,e)}))()}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-divider",[t("i",{staticClass:"el-icon-mobile-phone"}),this._v("我的信息")]),this._v(" "),t("el-card",{staticClass:"box-card"},[t("van-contact-card",{attrs:{type:"edit",tel:this.myInfo.user_mobile,name:this.myInfo.username,editable:!1}})],1),this._v(" "),t("van-button",{staticStyle:{width:"100%"},attrs:{type:"danger"},on:{click:this.logout}},[this._v("退出登录")])],1)},staticRenderFns:[]};var u=n("VU/8")(c,i,!1,function(e){n("402x")},"data-v-434b6780",null);t.default=u.exports}});
//# sourceMappingURL=2.87a6a83da02463c17971.js.map