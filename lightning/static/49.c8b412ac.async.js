(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{"4Ofr":function(e,t,n){e.exports={themeColor:"antd-pro-components-setting-drawer-theme-color-themeColor",title:"antd-pro-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-components-setting-drawer-theme-color-colorBlock"}},"6eND":function(e,t,n){"use strict";var r=n("gmY7"),o=r.CopyToClipboard;o.CopyToClipboard=o,e.exports=o},BFsb:function(e,t,n){e.exports={content:"antd-pro-components-setting-drawer-index-content",blockChecbox:"antd-pro-components-setting-drawer-index-blockChecbox",item:"antd-pro-components-setting-drawer-index-item",selectIcon:"antd-pro-components-setting-drawer-index-selectIcon",color_block:"antd-pro-components-setting-drawer-index-color_block",title:"antd-pro-components-setting-drawer-index-title",handle:"antd-pro-components-setting-drawer-index-handle",productionHint:"antd-pro-components-setting-drawer-index-productionHint"}},PceP:function(e,t,n){"use strict";n.r(t);n("Ut3b");var r,o,a,i=n("xRqD"),c=(n("DPrF"),n("KLaO")),l=(n("Ti7s"),n("t/Nd")),s=(n("uDqj"),n("X8RW")),p=(n("/lFS"),n("/2/W")),u=(n("KaAb"),n("jr2x")),d=(n("3Y6A"),n("sG/I")),f=(n("ES8V"),n("Pp1a")),m=(n("a84e"),n("VowZ")),g=n("dLrW"),y=n.n(g),h=n("cjXc"),b=n.n(h),v=n("3m6/"),k=n.n(v),O=n("CIpT"),E=n.n(O),C=n("QetK"),j=n.n(C),w=n("uVek"),S=n.n(w),x=(n("2eh7"),n("T37F")),P=n("qE61"),M=n.n(P),N=n("kHhk"),D=n("6eND"),F=n("zQXf"),_=n("PXGJ"),I=n("BFsb"),z=n.n(I),H=n("CxVk"),R=n.n(H),T=n("rGn4"),A=n.n(T),B=n("4Ofr"),L=n.n(B),W=function(e){var t=e.color,n=e.check,r=A()(e,["color","check"]);return M.a.createElement("div",R()({},r,{style:{backgroundColor:t}}),n?M.a.createElement(u["a"],{type:"check"}):"")},q=function(e){var t=e.colors,n=e.title,r=e.value,o=e.onChange,a=t;return t||(a=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),M.a.createElement("div",{className:L.a.themeColor},M.a.createElement("h3",{className:L.a.title},n),M.a.createElement("div",{className:L.a.content},a.map(function(e){var t=e.key,n=e.color;return M.a.createElement(d["a"],{key:n,title:Object(N["formatMessage"])({id:"app.setting.themecolor.".concat(t)})},M.a.createElement(W,{className:L.a.colorBlock,color:n,check:r===n,onClick:function(){return o&&o(n)}}))})))},J=q,X=function(e){var t=e.value,n=e.onChange,r=e.list;return M.a.createElement("div",{className:z.a.blockChecbox,key:t},r.map(function(e){return M.a.createElement(d["a"],{title:e.title,key:e.key},M.a.createElement("div",{className:z.a.item,onClick:function(){return n(e.key)}},M.a.createElement("img",{src:e.url,alt:e.key}),M.a.createElement("div",{className:z.a.selectIcon,style:{display:t===e.key?"block":"none"}},M.a.createElement(u["a"],{type:"check"}))))}))},Y=X;function K(e){var t=V();return function(){var n,r=j()(e);if(t){var o=j()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E()(this,n)}}function V(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var G=x["a"].Option,Q=function(e){var t=e.children,n=e.title,r=e.style;return M.a.createElement("div",{style:S()({},r,{marginBottom:24})},M.a.createElement("h3",{className:z.a.title},n),t)},Z=(r=Object(F["connect"])(function(e){var t=e.setting;return{setting:t}}),r((a=function(e){k()(n,e);var t=K(n);function n(){var e;y()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),e.state={collapse:!1},e.getLayoutSetting=function(){var t=e.props.setting,n=t.contentWidth,r=t.fixedHeader,o=t.layout,a=t.autoHideHeader,i=t.fixSiderbar;return[{title:Object(N["formatMessage"])({id:"app.setting.content-width"}),action:M.a.createElement(x["a"],{value:n,size:"small",onSelect:function(t){return e.changeSetting("contentWidth",t)},style:{width:80}},"sidemenu"===o?null:M.a.createElement(G,{value:"Fixed"},Object(N["formatMessage"])({id:"app.setting.content-width.fixed"})),M.a.createElement(G,{value:"Fluid"},Object(N["formatMessage"])({id:"app.setting.content-width.fluid"})))},{title:Object(N["formatMessage"])({id:"app.setting.fixedheader"}),action:M.a.createElement(m["a"],{size:"small",checked:!!r,onChange:function(t){return e.changeSetting("fixedHeader",t)}})},{title:Object(N["formatMessage"])({id:"app.setting.hideheader"}),disabled:!r,disabledReason:Object(N["formatMessage"])({id:"app.setting.hideheader.hint"}),action:M.a.createElement(m["a"],{size:"small",checked:!!a,onChange:function(t){return e.changeSetting("autoHideHeader",t)}})},{title:Object(N["formatMessage"])({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===o,disabledReason:Object(N["formatMessage"])({id:"app.setting.fixedsidebar.hint"}),action:M.a.createElement(m["a"],{size:"small",checked:!!i,onChange:function(t){return e.changeSetting("fixSiderbar",t)}})}]},e.changeSetting=function(t,n){var r=e.props.setting,o=S()({},r);o[t]=n,"layout"===t?o.contentWidth="topmenu"===n?"Fixed":"Fluid":"fixedHeader"!==t||n||(o.autoHideHeader=!1),e.setState(o,function(){var t=e.props.dispatch;t({type:"setting/changeSetting",payload:e.state})})},e.togglerContent=function(){var t=e.state.collapse;e.setState({collapse:!t})},e.renderLayoutSettingItem=function(e){var t=M.a.cloneElement(e.action,{disabled:e.disabled});return M.a.createElement(d["a"],{title:e.disabled?e.disabledReason:"",placement:"left"},M.a.createElement(f["a"].Item,{actions:[t]},M.a.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},e}return b()(n,[{key:"render",value:function(){var e=this,t=this.props.setting,n=t.navTheme,r=t.primaryColor,o=t.layout,a=t.colorWeak,d=this.state.collapse;return M.a.createElement(i["a"],{visible:d,width:300,onClose:this.togglerContent,placement:"right",handler:M.a.createElement("div",{className:z.a.handle,onClick:this.togglerContent},M.a.createElement(u["a"],{type:d?"close":"setting",style:{color:"#fff",fontSize:20}})),style:{zIndex:999}},M.a.createElement("div",{className:z.a.content},M.a.createElement(Q,{title:Object(N["formatMessage"])({id:"app.setting.pagestyle"})},M.a.createElement(Y,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:Object(N["formatMessage"])({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:Object(N["formatMessage"])({id:"app.setting.pagestyle.light"})}],value:n,onChange:function(t){return e.changeSetting("navTheme",t)}})),M.a.createElement(J,{title:Object(N["formatMessage"])({id:"app.setting.themecolor"}),value:r,onChange:function(t){return e.changeSetting("primaryColor",t)}}),M.a.createElement(p["a"],null),M.a.createElement(Q,{title:Object(N["formatMessage"])({id:"app.setting.navigationmode"})},M.a.createElement(Y,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:Object(N["formatMessage"])({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:Object(N["formatMessage"])({id:"app.setting.topmenu"})}],value:o,onChange:function(t){return e.changeSetting("layout",t)}})),M.a.createElement(f["a"],{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),M.a.createElement(p["a"],null),M.a.createElement(Q,{title:Object(N["formatMessage"])({id:"app.setting.othersettings"})},M.a.createElement(f["a"],{split:!1,renderItem:this.renderLayoutSettingItem,dataSource:[{title:Object(N["formatMessage"])({id:"app.setting.weakmode"}),action:M.a.createElement(m["a"],{size:"small",checked:!!a,onChange:function(t){return e.changeSetting("colorWeak",t)}})}]})),M.a.createElement(p["a"],null),M.a.createElement(D["CopyToClipboard"],{text:JSON.stringify(Object(_["a"])(t,["colorWeak"]),null,2),onCopy:function(){return s["a"].success(Object(N["formatMessage"])({id:"app.setting.copyinfo"}))}},M.a.createElement(l["a"],{block:!0,icon:"copy"},Object(N["formatMessage"])({id:"app.setting.copy"}))),M.a.createElement(c["a"],{type:"warning",className:z.a.productionHint,message:M.a.createElement("div",null,Object(N["formatMessage"])({id:"app.setting.production.hint"})," ",M.a.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),n}(P["Component"]),o=a))||o);t["default"]=Z},gmY7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n("qE61")),o=a(n("gkoS"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){v(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t){if(null==e)return{};var n,r,o=p(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?y(e):t}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(){var e,n;u(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=m(this,(e=g(t)).call.apply(e,[this].concat(i))),v(y(n),"onClick",function(e){var t=n.props,a=t.text,i=t.onCopy,c=t.children,l=t.options,s=r["default"].Children.only(c),p=(0,o["default"])(a,l);i&&i(a,p),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)}),n}return h(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,["text","onCopy","options","children"]),o=r["default"].Children.only(t);return r["default"].cloneElement(o,l({},n,{onClick:this.onClick}))}}]),t}(r["default"].PureComponent);t.CopyToClipboard=k,v(k,"defaultProps",{onCopy:void 0,options:void 0})}}]);