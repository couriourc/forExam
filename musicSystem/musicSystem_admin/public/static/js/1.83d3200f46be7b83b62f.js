webpackJsonp([1],{beoU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("usIs"),a={data:function(){return{aa:this.active,test:0,active:0,checked:!1,defaultVal:0,isPlay:!1,precentIndex:0,songList:[{url:"",logoImg:"",imginfo:"",song:"",singer:""}],activeNames:["1"],isOther:!1}},computed:{precentSong:function(){return this.songList[this.precentIndex].url},iconName:function(){return!0===this.checked?"pause":"play"}},created:function(){var t=this;this.userId=this.$route.params.id,this.userId?(this.isOther=!0,Object(i.a)(this.userId).then(function(e){t.songList=e.data}).catch(function(t){console.log(t)})):Object(i.c)().then(function(e){t.songList=e.data,console.log(t.songList)}).catch(function(t){console.log(t)})},mounted:function(){this.audio=this.$refs.audioRef},methods:{clickSong:function(t){this.precentIndex=t,this.isPlay=!1,this.checked=!1,this.audio.currentTime=0,setTimeout(this.toPlaySong,150)},onChange:function(t){this.checked=!0;var e=this.audio.duration*(t/100);this.audio.currentTime=e,this.audio.play(),this.isPlay=!0},nextSong:function(){this.precentIndex<this.songList.length&&(this.precentIndex++,this.isPlay=!1,this.checked=!1,this.audio.currentTime=0)},lastSong:function(){this.precentIndex>0&&(this.precentIndex--,this.checked=!1,this.isPlay=!1,this.audio.currentTime=0)},toPlaySong:function(){var t=this;this.checked=!this.checked,this.isPlay=!this.isPlay;var e=void 0;this.isPlay?(this.audio.play(),e=setInterval(function(){t.defaultVal=t.audio.currentTime/t.audio.duration*100},500)):(this.audio.pause(),clearInterval(e))},backtome:function(){this.$router.push({name:"share"})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-sticky",[n("van-button",{staticStyle:{width:"100%"},attrs:{type:"info"}},[t._v("音乐之声")])],1),t._v(" "),n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},[n("van-swipe-item",[n("img",{staticStyle:{height:"150px"},attrs:{src:t.songList[t.precentIndex].imginfo,alt:""}})])],1),t._v(" "),n("van-row",{staticStyle:{margin:"10px"},attrs:{gutter:"30",type:"flex",justify:"center"}},[n("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"8"}},[n("van-icon",{attrs:{name:"arrow-left",size:"40"},on:{click:t.lastSong}})],1),t._v(" "),n("van-col",{staticClass:"switchBox",staticStyle:{"text-align":"center"},attrs:{span:"8"}},[n("van-switch",{attrs:{size:"31px"},on:{click:t.toPlaySong},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._v(" "),n("van-icon",{attrs:{name:t.iconName}})],1),t._v(" "),n("van-col",{attrs:{span:"8"}},[n("van-icon",{attrs:{name:"arrow",size:"40"},on:{click:t.nextSong}})],1)],1),t._v(" "),n("van-slider",{staticStyle:{margin:"20px 0"},on:{change:t.onChange},model:{value:t.defaultVal,callback:function(e){t.defaultVal=e},expression:"defaultVal"}}),t._v(" "),n("van-collapse",{staticStyle:{"padding-bottom":"50px"},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"歌曲列表",name:"1"}},t._l(t.songList,function(e,i){return n("van-card",{key:i,class:{activeCard:t.precentIndex===i},attrs:{desc:"原唱："+e.singer,title:e.song,thumb:t.songList[i].imginfo},on:{click:function(e){return t.clickSong(i)}}})}),1)],1),t._v(" "),n("audio",{ref:"audioRef",attrs:{src:t.precentSong}},[t._v("\n    当前浏览器不支持audio\n  ")]),t._v(" "),t.isOther?n("div",{staticClass:"backtome",on:{click:t.backtome}},[t._v("\n    分享列表\n    "),n("van-icon",{attrs:{name:"https://b.yzcdn.cn/vant/icon-demo-1126.png",size:"30"}})],1):t._e()],1)},staticRenderFns:[]};var c=n("VU/8")(a,s,!1,function(t){n("y8+4")},"data-v-b11908b4",null);e.default=c.exports},"y8+4":function(t,e){}});
//# sourceMappingURL=1.83d3200f46be7b83b62f.js.map