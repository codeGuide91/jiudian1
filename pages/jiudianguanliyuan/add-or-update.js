(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiudianguanliyuan/add-or-update"],{"0455":function(t,e,n){"use strict";var r=n("432f"),i=n.n(r);i.a},"0dc7":function(t,e,n){"use strict";n.r(e);var r=n("bc2b"),i=n("3aae");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("0455");var u,o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"852767b2",null,!1,r["a"],u);e["default"]=s.exports},"3aae":function(t,e,n){"use strict";n.r(e);var r=n("92f5"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"432f":function(t,e,n){},"82d8":function(t,e,n){"use strict";(function(t){n("ed62"),n("921b");r(n("66fd"));var e=r(n("0dc7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"92f5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,a,u){try{var o=t[a](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(r,i)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var u=t.apply(e,n);function o(t){a(u,r,i,o,s,"next",t)}function s(t){a(u,r,i,o,s,"throw",t)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("fb10"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{zhanghao:"",mima:"",guanliyuanxingming:"",shouji:"",youxiang:""},user:{},ro:{zhanghao:!1,mima:!1,guanliyuanxingming:!1,shouji:!1,youxiang:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(r.default.mark((function e(n){var i,a,u,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(a=e.sent,this.user=a.data,this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=13;break}return this.ruleForm.id=n.id,e.next=11,this.$api.info("jiudianguanliyuan",this.ruleForm.id);case 11:a=e.sent,this.ruleForm=a.data;case 13:if(!n.cross){e.next=40;break}u=t.getStorageSync("crossObj"),e.t0=r.default.keys(u);case 16:if((e.t1=e.t0()).done){e.next=40;break}if(o=e.t1.value,"zhanghao"!=o){e.next=22;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,e.abrupt("continue",16);case 22:if("mima"!=o){e.next=26;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,e.abrupt("continue",16);case 26:if("guanliyuanxingming"!=o){e.next=30;break}return this.ruleForm.guanliyuanxingming=u[o],this.ro.guanliyuanxingming=!0,e.abrupt("continue",16);case 30:if("shouji"!=o){e.next=34;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,e.abrupt("continue",16);case 34:if("youxiang"!=o){e.next=38;break}return this.ruleForm.youxiang=u[o],this.ro.youxiang=!0,e.abrupt("continue",16);case 38:e.next=16;break;case 40:this.styleChange();case 41:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.zhanghao){t.next=3;break}return this.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.guanliyuanxingming){t.next=9;break}return this.$utils.msg("管理员姓名不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=12;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 12:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){t.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 15:if(!this.ruleForm.id){t.next=20;break}return t.next=18,this.$api.update("jiudianguanliyuan",this.ruleForm);case 18:t.next=22;break;case 20:return t.next=22,this.$api.add("jiudianguanliyuan",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(t){this.$refs[t].show()}}};e.default=s}).call(this,n("543d")["default"])},bc2b:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))}},[["82d8","common/runtime","common/vendor"]]]);