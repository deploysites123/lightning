(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"0tIf":function(e,t,n){"use strict";n.r(t);var a,r,i=n("tJVT"),c=n("fWQN"),o=n("mtLc"),s=n("yKVA"),l=n("879j"),u=(n("Ahcs"),n("k0dM")),p=n("q1tI"),m=n.n(p),d=n("/MKj"),f=n("PUmp"),v=n("mmaM"),b=u["a"].TabPane,g=(a=Object(d["c"])((function(e){var t=e.user.currentUser.permissions;return{permissions:t}})),a(r=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;Object(c["a"])(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={object:[]},e}return Object(o["a"])(n,[{key:"componentDidMount",value:function(){var e=this;Object(v["getSettingConf"])().then((function(t){return e.setState({object:t})}))}},{key:"render",value:function(){var e=this.state.object,t=this.props.permissions;return t?m.a.createElement(u["a"],{tabPosition:"left",style:{background:"#fff",padding:"25px 0px"}},e&&e.map((function(e){var n=e.title,a=e.admins,r=e.schemas,c=e.model,o=e.values,s=e.help_text,l=e.permission_code;if(l){var u=l.split("."),p=Object(i["a"])(u,2),d=p[0],v=p[1];if(!t.includes("".concat(v,"__").concat(d)))return null}return m.a.createElement(b,{TabPane:!0,tab:n,key:n},m.a.createElement(f["a"],{admins:a,schemas:r,model:c,values:o,helpText:s}))}))):null}}]),n}(m.a.Component))||r);t["default"]=g},"43qG":function(e,t,n){"use strict";var a=n("0Owb"),r=(n("eNCU"),n("pjJH")),i=n("PpiC"),c=n("fWQN"),o=n("mtLc"),s=n("yKVA"),l=n("879j"),u=n("q1tI"),p=n.n(u),m=n("TSYQ"),d=n.n(m),f={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"\u62b1\u6b49\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"\u62b1\u6b49\uff0c\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"\u62b1\u6b49\uff0c\u670d\u52a1\u5668\u51fa\u9519\u4e86"}},v=f,b=n("VbCV"),g=n.n(b),h=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(e){var a;return Object(c["a"])(this,n),a=t.call(this,e),a.state={},a}return Object(o["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.backText,c=e.linkElement,o=void 0===c?"a":c,s=e.type,l=e.title,m=e.desc,f=e.img,b=e.actions,h=e.redirect,j=Object(i["a"])(e,["className","backText","linkElement","type","title","desc","img","actions","redirect"]),y=s in v?s:"404",O=d()(g.a.exception,t);return p.a.createElement("div",Object(a["a"])({className:O},j),p.a.createElement("div",{className:g.a.imgBlock},p.a.createElement("div",{className:g.a.imgEle,style:{backgroundImage:"url(".concat(f||v[y].img,")")}})),p.a.createElement("div",{className:g.a.content},p.a.createElement("h1",null,l||v[y].title),p.a.createElement("div",{className:g.a.desc},m||v[y].desc),p.a.createElement("div",{className:g.a.actions},b||Object(u["createElement"])(o,{to:h,href:h},p.a.createElement(r["a"],{type:"primary"},n)))))}}]),n}(p.a.PureComponent);h.defaultProps={backText:"back to home",redirect:"/"};t["a"]=h},IAhd:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a={"app.exception.back":"\u8fd4\u56de\u9996\u9875","app.exception.description.403":"\u62b1\u6b49\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u6b64\u9875\u9762","app.exception.description.404":"\u62b1\u6b49\uff0c\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728","app.login.userName":"\u7528\u6237\u540d","app.login.email":"\u90ae\u7bb1","app.login.password":"\u5bc6\u7801","app.login.message-invalid-credentials":"\u8d26\u6237\u6216\u5bc6\u7801\u9519\u8bef","app.login.sign-in-with":"\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f","app.login.login":"\u767b\u5f55","app.login.verification-code-warning":"\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001","app.login.verification-code-err":"\u83b7\u53d6\u9a8c\u8bc1\u7801\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5","app.login.confirm.password":"\u786e\u8ba4\u5bc6\u7801","app.register-result.msg":"\u6ce8\u518c\u6210\u529f","app.register.register":"\u6ce8\u518c","app.register.get-verification-code":"\u83b7\u53d6\u9a8c\u8bc1\u7801","app.register.sign-in":"\u4f7f\u7528\u5df2\u6709\u8d26\u6237\u767b\u5f55","validation.userName.required":"\u8bf7\u8f93\u5165\u7528\u6237\u540d!","validation.email.required":"\u8bf7\u8f93\u5165\u90ae\u7bb1\u540d!","validation.emailType.required":"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u540d!","validation.password.required":"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01","validation.password.strength.strong":"\u5f3a\u5ea6\uff1a\u9ad8","validation.password.strength.medium":"\u5f3a\u5ea6\uff1a\u4e2d","validation.password.strength.short":"\u5f3a\u5ea6\uff1a\u592a\u77ed","validation.password.twice":"\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u5339\u914d!","validation.password.strength.msg":"\u8bf7\u81f3\u5c11\u8f93\u5165 6 \u4e2a\u5b57\u7b26\u3002\u8bf7\u4e0d\u8981\u4f7f\u7528\u5bb9\u6613\u88ab\u731c\u5230\u7684\u5bc6\u7801\u3002","validation.phone-number.required":"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01","validation.phone-number.wrong-format":"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01","validation.confirm-password.required":"\u8bf7\u786e\u8ba4\u5bc6\u7801\uff01","validation.verification-code.required":"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01","menu.account.webSettings":"\u7cfb\u7edf\u8bbe\u7f6e","menu.account.logout":"\u9000\u51fa\u767b\u5f55","menu.about":"\u5173\u4e8e","form.password.placeholder":"\u81f3\u5c116\u4f4d\u5bc6\u7801\uff0c\u533a\u5206\u5927\u5c0f\u5199","form.confirm-password.placeholder":"\u786e\u8ba4\u5bc6\u7801","form.phone-number.placeholder":"\u624b\u673a\u53f7","form.verification-code.placeholder":"\u9a8c\u8bc1\u7801","form.get-captcha":"\u83b7\u53d6\u9a8c\u8bc1\u7801","form.captcha.second":"\u79d2"},r=a,i=function(e){var t,n=e.id,a=e.defaultMessage;return null!==(t=r[n])&&void 0!==t?t:a}},PUmp:function(e,t,n){"use strict";var a,r,i,c=n("k1fw"),o=(n("ascH"),n("GqlH")),s=(n("GPKB"),n("mFAc")),l=n("9og8"),u=n("fWQN"),p=n("mtLc"),m=n("yKVA"),d=n("879j"),f=n("WmNS"),v=n.n(f),b=n("q1tI"),g=n.n(b),h=n("/MKj"),j=n("mmaM"),y=n("xNPh"),O=n("ASN+"),w=n("r/IN"),E=n("fVK0"),k=Object(y["a"])(),x=(a=Object(h["c"])((function(e){var t=e.content;return{content:t}})),r=Object(w["a"])(E["a"].CHANGE_SETTING),a(i=r(i=function(e){Object(m["a"])(n,e);var t=Object(d["a"])(n);function n(){var e;Object(u["a"])(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.getViewDom=function(t){e.view=t},e.onSubmit=function(){var t=Object(l["a"])(v.a.mark((function t(n){var a,r,i,c,o,l,u,p,m,d,f,b;return v.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.props,c=i.model,o=i.schemas,l=i.admins,u={},o[c].fields.forEach((function(e){u[e.name]=e})),p=null===(a=l[c])||void 0===a||null===(r=a.formFields)||void 0===r?void 0:r.some((function(e){return"License"===e.widget&&e.name in u})),!p){t.next=10;break}if(!1!==O["b"].valid){t.next=7;break}return t.abrupt("return");case 7:if(void 0!==O["b"].valid){t.next=10;break}return s["a"].error("\u8bf7\u586b\u5199 License \uff01"),t.abrupt("return");case 10:return m={},Object.keys(n).forEach((function(e){"mref"===u[e].type?m[e]=n[e].map((function(e){return e.id||e})):m[e]=n[e]})),t.next=14,Object(j["cloudFunction"])({model:"bsm_config__setting",functionName:"update_setting",params:{settings:m,model:c}});case 14:d=t.sent,f=d.error_code,"0"===f&&(b=e.props.dispatch,b({type:"bsmSetting/getSettings"}),s["a"].success("\u66f4\u65b0\u914d\u7f6e\u6210\u529f"));case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.admins,n=e.schemas,a=e.model,r=e.values,i=e.helpText,s=e.content,l=s.schemas,u=s.admins;return g.a.createElement("div",{style:{paddingRight:18}},i&&g.a.createElement(o["a"],{type:"info",showIcon:!0,description:i}),n&&g.a.createElement(g.a.Fragment,null,g.a.createElement(k,{hideCard:!0,model:a,schemas:Object(c["a"])(Object(c["a"])({},l),n),onSubmit:this.onSubmit,object:r,admins:Object(c["a"])(Object(c["a"])({},u),t)})))}}]),n}(b["Component"]))||i)||i);t["a"]=x},VbCV:function(e,t,n){e.exports={exception:"exception___2GeG8",imgBlock:"imgBlock___1I7QM",imgEle:"imgEle___24cxR",content:"content___kGx-7",desc:"desc___3GiZp",actions:"actions___3GpZH"}},pjZx:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("uYtH"),c=n("43qG"),o=n("IAhd"),s=function(){return r.a.createElement(c["a"],{type:"403",desc:Object(o["a"])({id:"app.exception.description.403"}),linkElement:i["a"],backText:Object(o["a"])({id:"app.exception.back"})})};t["a"]=s},"r/IN":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),i=n("/MKj"),c=n("pjZx"),o=Object(i["c"])((function(e){var t=e.user.currentUser.permissions;return{permissions:t}}))((function(e){var t=e.permissions,n=e.permission;return t?t.includes(n)?e.children:r.a.createElement(c["a"],null):null}));function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){return function(n){return r.a.createElement(o,{permission:e},r.a.createElement(t,n))}}}},uYtH:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("WHYC"),r=n("dI71"),i=n("q1tI"),c=n.n(i),o=n("YS25"),s=(n("17x9"),n("wx14")),l=n("zLVn"),u=n("9R94");c.a.Component;c.a.Component;var p=function(e,t){return"function"===typeof e?e(t):e},m=function(e,t){return"string"===typeof e?Object(o["c"])(e,null,null,t):e},d=function(e){return e},f=c.a.forwardRef;function v(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}"undefined"===typeof f&&(f=d);var b=f((function(e,t){var n=e.innerRef,a=e.navigate,r=e.onClick,i=Object(l["a"])(e,["innerRef","navigate","onClick"]),o=i.target,u=Object(s["a"])({},i,{onClick:function(e){try{r&&r(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||o&&"_self"!==o||v(e)||(e.preventDefault(),a())}});return u.ref=d!==f&&t||n,c.a.createElement("a",u)}));var g=f((function(e,t){var n=e.component,r=void 0===n?b:n,i=e.replace,o=e.to,v=e.innerRef,g=Object(l["a"])(e,["component","replace","to","innerRef"]);return c.a.createElement(a["e"].Consumer,null,(function(e){e||Object(u["a"])(!1);var n=e.history,a=m(p(o,e.location),e.location),l=a?n.createHref(a):"",b=Object(s["a"])({},g,{href:l,navigate:function(){var t=p(o,e.location),a=i?n.replace:n.push;a(t)}});return d!==f?b.ref=t||v:b.innerRef=v,c.a.createElement(r,b)}))})),h=function(e){return e},j=c.a.forwardRef;function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}"undefined"===typeof j&&(j=h);j((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,o=void 0===i?"active":i,d=e.activeStyle,f=e.className,v=e.exact,b=e.isActive,O=e.location,w=e.sensitive,E=e.strict,k=e.style,x=e.to,_=e.innerRef,N=Object(l["a"])(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.a.createElement(a["e"].Consumer,null,(function(e){e||Object(u["a"])(!1);var n=O||e.location,i=m(p(x,n),n),l=i.pathname,C=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),I=C?Object(a["f"])(n.pathname,{path:C,exact:v,sensitive:w,strict:E}):null,q=!!(b?b(I,n):I),R=q?y(f,o):f,A=q?Object(s["a"])({},k,{},d):k,S=Object(s["a"])({"aria-current":q&&r||null,className:R,style:A,to:i},N);return h!==j?S.ref=t||_:S.innerRef=_,c.a.createElement(g,S)}))}))}}]);