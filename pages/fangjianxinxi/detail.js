(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fangjianxinxi/detail"],{5349:function(t,n,e){"use strict";var i=e("66f9"),a=e.n(i);a.a},5471:function(t,n,e){"use strict";e.r(n);var i=e("946e"),a=e("f895");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("5349");var r,u=e("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=o.exports},"66f9":function(t,n,e){},"946e":function(t,n,e){"use strict";var i={"mescroll-uni":function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"031a"))},"uni-popup":function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"d506"))}},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isAuth("fangjianxinxi","预订"));t.$mp.data=Object.assign({},{$root:{m0:e}})},s=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}))},a83a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,n,e,i,a,s,r){try{var u=t[s](r),o=u.value}catch(c){return void e(c)}u.done?n(o):Promise.resolve(o).then(i,a)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var r=t.apply(n,e);function u(t){s(r,i,a,u,o,"next",t)}function o(t){s(r,i,a,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:3e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=r(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=n.id;case 1:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){var n=r(i.default.mark((function n(e){var a,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.init(),a=t.getStorageSync("nowTable"),n.next=4,this.$api.session(a);case 4:s=n.sent,this.user=s.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup();case 8:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","fangjianxinxi"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=r(i.default.mark((function t(){var n,e;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={page:1,limit:1,refid:this.id,tablename:"fangjianxinxi",userid:this.user.id},t.next=3,this.$api.list("storeup",n);case 3:e=t.sent,this.storeupFlag=e.data.list.length;case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),shoucang:function(){var n=r(i.default.mark((function n(){var e,a,s,u;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=this,a={page:1,limit:1,refid:e.detail.id,tablename:"fangjianxinxi",userid:e.user.id},n.next=4,e.$api.list("storeup",a);case 4:if(s=n.sent,1!=s.data.list.length){n.next=9;break}return u=s.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=r(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=5;break}return t.next=3,e.$api.del("storeup",JSON.stringify([u]));case 3:e.$utils.msg("取消成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}()}),n.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=r(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=5;break}return t.next=3,e.$api.add("storeup",{userid:e.user.id,name:e.detail.fangjianhao,picture:e.swiperList[0],refid:e.detail.id,tablename:"fangjianxinxi"});case 3:e.$utils.msg("收藏成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}()});case 10:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),onAcrossTap:function(n){t.setStorageSync("crossTable","fangjianxinxi"),t.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=r(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("fangjianxinxi",this.id);case 2:n=t.sent,this.detail=n.data,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[],this.detail.fangjianxiangqing=this.detail.fangjianxiangqing.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=r(i.default.mark((function t(n){var e;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discussfangjianxinxi",{page:n.num,limit:n.size,refid:this.id});case 2:e=t.sent,1==n.num&&(this.commentList=[]),this.commentList=this.commentList.concat(e.data.list),0==e.data.list.length&&(this.hasNext=!1),n.endSuccess(n.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discussfangjianxinxi/add-or-update?refid=".concat(this.id))},zan:function(){var n=r(i.default.mark((function n(){var e;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e=this,t.showModal({title:"提示",content:"是否点赞",success:function(){var t=r(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=5;break}return e.detail.thumbsupnum=parseInt(e.detail.thumbsupnum)+1,t.next=4,e.$api.update("fangjianxinxi",e.detail);case 4:e.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}()});case 2:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),cai:function(){var n=r(i.default.mark((function n(){var e;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e=this,t.showModal({title:"提示",content:"是否点踩",success:function(){var t=r(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=5;break}return e.detail.crazilynum=parseInt(e.detail.crazilynum)+1,t.next=4,e.$api.update("fangjianxinxi",e.detail);case 4:e.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}()});case 2:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=r(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("fangjianxinxi",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};n.default=u}).call(this,e("543d")["default"])},eb20:function(t,n,e){"use strict";(function(t){e("ed62"),e("921b");i(e("66fd"));var n=i(e("5471"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},f895:function(t,n,e){"use strict";e.r(n);var i=e("a83a"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a}},[["eb20","common/runtime","common/vendor"]]]);