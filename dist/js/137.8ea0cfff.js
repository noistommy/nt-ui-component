"use strict";(self["webpackChunkgabia_ui"]=self["webpackChunkgabia_ui"]||[]).push([[137,51],{4051:function(t,s,i){i.r(s),i.d(s,{default:function(){return _}});var e=i(3396);const a={class:"page-contents-header"},c={class:"page-content-usage"},n={class:"page-contents-body"};function o(t,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",a,[(0,e.WI)(t.$slots,"header")]),(0,e._)("div",c,[(0,e.WI)(t.$slots,"usage")]),(0,e._)("div",n,[(0,e.WI)(t.$slots,"body")])],64)}var l=i(7477);const d={},v=(0,l.Z)(d,[["render",o]]);var _=v},3137:function(t,s,i){i.r(s),i.d(s,{default:function(){return D}});var e=i(3396),a=i(4870),c=i(7139),n=i(4051);const o=(0,e._)("div",{class:"section-tags"},[(0,e._)("span",{class:"ga-tag label teal"},"ga-ui-css"),(0,e._)("span",{class:"ga-tag label purple"},"vue 3.0"),(0,e._)("span",{class:"ga-tag label blue"},"directive")],-1),l=(0,e._)("div",{class:"ga-card attached"},[(0,e._)("h3",null,"툴팁 사용법 및 설정"),(0,e._)("div",{class:"footer"},[(0,e._)("div",{class:"ga-list code"},[(0,e._)("div",{class:"item comment"},"// 프로젝트 전역 모듈로 등록"),(0,e._)("div",{class:"item comment"},"// main.js"),(0,e._)("div",{class:"item"},"import GaTooltip from package_path/GaTooltip"),(0,e._)("div",{class:"item"},"const app = createApp(App)"),(0,e._)("div",{class:"item"},"app.use(GaTooltip)"),(0,e._)("div",{class:"item"}),(0,e._)("div",{class:"item comment"},"// 적용"),(0,e._)("div",{class:"item comment"},"// 리터럴 텍스트 타입"),(0,e._)("div",{class:"item"},[(0,e._)("div",{textContent:"<div v-ga-tootip='`툴팁 내용`'>contents</div>"})]),(0,e._)("div",{class:"item comment"},"// Object 타입"),(0,e._)("div",{class:"item"},[(0,e._)("div",{textContent:"<div v-ga-tootip='{ contents: '툴팁 내용' }'>contents</div>"})]),(0,e._)("div",{class:"item comment"},"// html contents 타입"),(0,e._)("div",{class:"item"},[(0,e._)("div",{textContent:"<div v-ga-tootip='htmlContents'>contents</div>"})]),(0,e._)("div",{class:"item comment"},"// 방향 지정"),(0,e._)("div",{class:"item"},[(0,e._)("div",{textContent:"<div v-ga-tootip:top='{ contents: '툴팁 내용' }'>contents</div>"})]),(0,e._)("div",{class:"item"},[(0,e._)("div",{textContent:"<div v-ga-tootip:bottom='{ contents: '툴팁 내용' }'>contents</div>"})])])])],-1),d=(0,e._)("div",{class:"section-header"},[(0,e._)("div",{class:"section-title"},[(0,e._)("h3",{class:"title"},"기본"),(0,e._)("div",{class:"sub-title"})])],-1),v={class:"section-body"},_={class:"ga-button"},u=(0,e._)("div",{class:"section-header"},[(0,e._)("div",{class:"section-title"},[(0,e._)("h3",{class:"title"},"컨텐츠 타입"),(0,e._)("div",{class:"sub-title"})])],-1),g={class:"section-body"},m={class:"ga-button"},b={class:"ga-button"},p=(0,e._)("div",{class:"section-header"},[(0,e._)("div",{class:"section-title"},[(0,e._)("h3",{class:"title"},"Html 컨텐츠"),(0,e._)("div",{class:"sub-title"})])],-1),r={class:"section-body"},h={class:"ga-button"},w=(0,e._)("div",{class:"section-header"},[(0,e._)("div",{class:"section-title"},[(0,e._)("h3",{class:"title"},"방향 지정"),(0,e._)("div",{class:"sub-title"})])],-1),f={class:"section-body"},y={class:"ga-button"},k={class:"ga-button"};var C={__name:"TooltipTemp",setup(t){const s="툴팁",i={contents:'<div class="bold ga-lightblue-text"><i class="small fa fa-toolbox"></i> 테스트 툴팁 : 나랏말싸미 듕국에 달아 문자와 서로 사맛디 아니할세.</div>'};return(t,C)=>{const x=(0,e.Q2)("ga-tooltip");return(0,e.wg)(),(0,e.j4)((0,a.SU)(n["default"]),null,{header:(0,e.w5)((()=>[(0,e._)("div",{class:"main-title"},(0,c.zw)(s)),o])),usage:(0,e.w5)((()=>[l])),body:(0,e.w5)((()=>[(0,e._)("section",null,[d,(0,e._)("div",v,[(0,e.wy)(((0,e.wg)(),(0,e.iD)("button",_,[(0,e.Uk)("툴팁")])),[[x,"테스트 툴팁입니다"]])])]),(0,e._)("section",null,[u,(0,e._)("div",g,[(0,e.wy)(((0,e.wg)(),(0,e.iD)("button",m,[(0,e.Uk)("내용")])),[[x,"String 타입 컨텐츠"]]),(0,e.wy)(((0,e.wg)(),(0,e.iD)("button",b,[(0,e.Uk)("{ contents: 내용 }")])),[[x,{contents:"Object 타입 컨텐츠"}]])])]),(0,e._)("section",null,[p,(0,e._)("div",r,[(0,e.wy)(((0,e.wg)(),(0,e.iD)("button",h,[(0,e.Uk)("String")])),[[x,i]])])]),(0,e._)("section",null,[w,(0,e._)("div",f,[(0,e.wy)(((0,e.wg)(),(0,e.iD)("button",y,[(0,e.Uk)("Top")])),[[x,"위로 생성","top"]]),(0,e.wy)(((0,e.wg)(),(0,e.iD)("button",k,[(0,e.Uk)("Bottom")])),[[x,"아래로 생성","bottom"]])])])])),_:1})}}};const x=C;var D=x}}]);
//# sourceMappingURL=137.8ea0cfff.js.map