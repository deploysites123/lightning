(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{ZOrW:function(a,e,t){"use strict";t.r(e);t("FtyQ");var n,r,s,l=t("WvG8"),i=(t("8keV"),t("IhqU")),o=(t("wHx7"),t("dqcz")),c=(t("KaAb"),t("jr2x")),d=(t("i1An"),t("evC4")),u=t("dLrW"),p=t.n(u),h=t("cjXc"),f=t.n(h),y=t("3m6/"),g=t.n(y),m=t("CIpT"),b=t.n(m),v=t("QetK"),k=t.n(v),D=t("qE61"),E=t.n(D),T=t("zQXf"),C=t("v99g"),x=t("+n12"),S=t("lVjH"),P=t.n(S),R=t("xqX8");function w(a){var e=V();return function(){var t,n=k()(a);if(e){var r=k()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return b()(this,t)}}function V(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var j=E.a.lazy(function(){return Promise.all([t.e(0),t.e(50)]).then(t.bind(null,"Y65U"))}),q=E.a.lazy(function(){return Promise.all([t.e(0),t.e(53)]).then(t.bind(null,"20K/"))}),A=E.a.lazy(function(){return Promise.all([t.e(0),t.e(54)]).then(t.bind(null,"b2ve"))}),I=E.a.lazy(function(){return Promise.all([t.e(0),t.e(52)]).then(t.bind(null,"tLGd"))}),z=E.a.lazy(function(){return Promise.all([t.e(0),t.e(51)]).then(t.bind(null,"Jqna"))}),G=(n=Object(T["connect"])(function(a){var e=a.chart,t=a.loading;return{chart:e,loading:t.effects["chart/fetch"]}}),n((s=function(a){g()(t,a);var e=w(t);function t(){var a;p()(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=e.call.apply(e,[this].concat(r)),a.state={salesType:"all",currentTabKey:"",rangePickerValue:Object(x["d"])("year")},a.handleChangeSalesType=function(e){a.setState({salesType:e.target.value})},a.handleTabChange=function(e){a.setState({currentTabKey:e})},a.handleRangePickerChange=function(e){var t=a.props.dispatch;a.setState({rangePickerValue:e}),t({type:"chart/fetchSalesData"})},a.selectDate=function(e){var t=a.props.dispatch;a.setState({rangePickerValue:Object(x["d"])(e)}),t({type:"chart/fetchSalesData"})},a.isActive=function(e){var t=a.state.rangePickerValue,n=Object(x["d"])(e);return t[0]&&t[1]&&t[0].isSame(n[0],"day")&&t[1].isSame(n[1],"day")?P.a.currentDate:""},a}return f()(t,[{key:"componentDidMount",value:function(){var a=this.props.dispatch;this.reqRef=requestAnimationFrame(function(){a({type:"chart/fetch"})})}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.reqRef)}},{key:"render",value:function(){var a,e=this.state,t=e.rangePickerValue,n=e.salesType,r=e.currentTabKey,s=this.props,u=s.chart,p=s.loading,h=u.visitData,f=u.visitData2,y=u.salesData,g=u.searchData,m=u.offlineData,b=u.offlineChartData,v=u.salesTypeData,k=u.salesTypeDataOnline,T=u.salesTypeDataOffline;a="all"===n?v:"online"===n?k:T;var x=E.a.createElement(d["a"],null,E.a.createElement(d["a"].Item,null,"\u64cd\u4f5c\u4e00"),E.a.createElement(d["a"].Item,null,"\u64cd\u4f5c\u4e8c")),S=E.a.createElement("span",{className:P.a.iconGroup},E.a.createElement(o["a"],{overlay:x,placement:"bottomRight"},E.a.createElement(c["a"],{type:"ellipsis"}))),w=r||m[0]&&m[0].name;return E.a.createElement(C["a"],null,E.a.createElement(D["Suspense"],{fallback:E.a.createElement(R["default"],null)},E.a.createElement(j,{loading:p,visitData:h})),E.a.createElement(D["Suspense"],{fallback:null},E.a.createElement(q,{rangePickerValue:t,salesData:y,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:p,selectDate:this.selectDate})),E.a.createElement("div",{className:P.a.twoColLayout},E.a.createElement(l["a"],{gutter:24,type:"flex"},E.a.createElement(i["a"],{xl:12,lg:24,md:24,sm:24,xs:24},E.a.createElement(D["Suspense"],{fallback:null},E.a.createElement(A,{loading:p,visitData2:f,selectDate:this.selectDate,searchData:g,dropdownGroup:S}))),E.a.createElement(i["a"],{xl:12,lg:24,md:24,sm:24,xs:24},E.a.createElement(D["Suspense"],{fallback:null},E.a.createElement(I,{dropdownGroup:S,salesType:n,loading:p,salesPieData:a,handleChangeSalesType:this.handleChangeSalesType}))))),E.a.createElement(D["Suspense"],{fallback:null},E.a.createElement(z,{activeKey:w,loading:p,offlineData:m,offlineChartData:b,handleTabChange:this.handleTabChange})))}}]),t}(D["Component"]),r=s))||r);e["default"]=G},lVjH:function(a,e,t){a.exports={iconGroup:"antd-pro-pages-dashboard-analysis-iconGroup",rankingList:"antd-pro-pages-dashboard-analysis-rankingList",rankingItemNumber:"antd-pro-pages-dashboard-analysis-rankingItemNumber",active:"antd-pro-pages-dashboard-analysis-active",rankingItemTitle:"antd-pro-pages-dashboard-analysis-rankingItemTitle",salesExtra:"antd-pro-pages-dashboard-analysis-salesExtra",currentDate:"antd-pro-pages-dashboard-analysis-currentDate",salesCard:"antd-pro-pages-dashboard-analysis-salesCard",salesBar:"antd-pro-pages-dashboard-analysis-salesBar",salesRank:"antd-pro-pages-dashboard-analysis-salesRank",salesCardExtra:"antd-pro-pages-dashboard-analysis-salesCardExtra",salesTypeRadio:"antd-pro-pages-dashboard-analysis-salesTypeRadio",offlineCard:"antd-pro-pages-dashboard-analysis-offlineCard",twoColLayout:"antd-pro-pages-dashboard-analysis-twoColLayout",trendText:"antd-pro-pages-dashboard-analysis-trendText",rankingTitle:"antd-pro-pages-dashboard-analysis-rankingTitle",salesExtraWrap:"antd-pro-pages-dashboard-analysis-salesExtraWrap"}}}]);