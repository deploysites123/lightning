(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{Z8Jt:function(e,t,n){"use strict";n.r(t);var a=n("dLrW"),r=n.n(a),i=n("cjXc"),c=n.n(i),l=n("3m6/"),o=n.n(l),s=n("CIpT"),u=n.n(s),d=n("QetK"),p=n.n(d),f=n("qE61"),m=n.n(f),y=n("s98/"),v=n.n(y),h=n("qlT2"),b=n("zQXf"),g=(n("qms0"),n("vZs3")),x=(n("KaAb"),n("jr2x")),E=(n("Ti7s"),n("t/Nd")),k=(n("DAWX"),n("USTd")),_=n("CxVk"),w=n.n(_),S=(n("1DiQ"),n("o2ao")),O=(n("2zJo"),n("EpZc")),j=n("sXdV"),F=n.n(j),q=n("q847"),C=n.n(q),M=n("uVek"),A=n.n(M),V=n("o9sT"),N=n.n(V),T=(n("2eh7"),n("T37F")),D=(n("HqD5"),n("4sAw")),R=(n("vypk"),n("k/ax")),W=(n("pO4F"),n("Xaj1")),K=n("OaWn"),P=n.n(K),z=n("XqQr"),J=n.n(z),U=n("Mh+x"),X={xs:{maxWidth:575},sm:{minWidth:576,maxWidth:767},md:{minWidth:768,maxWidth:991},lg:{minWidth:992,maxWidth:1199},xl:{minWidth:1200,maxWidth:1599},xxl:{minWidth:1600}},B=[{key:"after_create",title:"\u521b\u5efa\u6570\u636e\u540e"},{key:"after_update",title:"\u66f4\u65b0\u6570\u636e\u540e"},{key:"after_delete",title:"\u5220\u9664\u6570\u636e\u540e"}],L=[{name:"name",label:"\u540d\u79f0",type:"string",component:"input",required:!0},{name:"event",label:"\u89e6\u53d1\u7c7b\u578b",type:"string",component:"select",choices:B,defaultValue:"after_create"},{name:"description",label:"\u63cf\u8ff0",type:"string",component:"textArea"},{name:"opened",label:"\u542f\u7528",type:"boolean",component:"switch",defaultValue:!1}],I=function(e){return[{name:"appModel".concat(e),label:"\u6a21\u578b",type:"array",component:"modelSelect"},{name:"filter".concat(e),label:"\u67e5\u8be2\u6761\u4ef6",type:"array",component:"querybuilder",schames:{}},{name:"setFields".concat(e),label:"\u4fdd\u5b58\u5b57\u6bb5",type:"string",component:"input",schames:{}}]},Q={create:{name:"\u521b\u5efa\u6570\u636e",action:I},update:{name:"\u66f4\u65b0\u6570\u636e",action:I},delete:{name:"\u5220\u9664\u6570\u636e",action:I}},$={before_create:{condition:"database",actions:["create","update","delete"]},after_create:{condition:"database",actions:["create","update","delete"]},before_update:{condition:"database",actions:["create","update","delete"]},after_update:{condition:"database",actions:["create","update","delete"]},before_delete:{condition:"database",actions:["create","update","delete"]},after_delete:{condition:"database",actions:["create","update","delete"]}},G=function(e){var t={displayName:"default",name:"default__table",fields:[],titleField:"id"},n={displayName:"\u65e7\u5bf9\u8c61",name:"old",ref:"old",type:"ref"},a={displayName:"\u65b0\u5bf9\u8c61",name:"new",ref:"new",type:"ref"};return["before_update","after_update"].includes(e)&&t.fields.push(n,a),["before_create","after_create"].includes(e)&&t.fields.push(a),["before_delete","after_delete"].includes(e)&&t.fields.push(n),t},H=n("HP82");function Z(){return Y.apply(this,arguments)}function Y(){return Y=C()(F.a.mark(function e(){var t,n,a,r=arguments;return F.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,a="save_trigger",(0===n||n)&&(a="update_trigger"),e.abrupt("return",Object(H["E"])("/basebone/client/trigger_core__trigger/func/",{method:"POST",data:{func_name:a,params:{id:n,config:t}}}));case 5:case"end":return e.stop()}},e)})),Y.apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return te=C()(F.a.mark(function e(t){return F.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(H["E"])("/basebone/client/trigger_core__trigger/func/",{method:"POST",data:{func_name:"show_trigger",params:{slug:t}}}));case 1:case"end":return e.stop()}},e)})),te.apply(this,arguments)}var ne,ae,re,ie=n("9Ndd"),ce=n("BSml"),le=n("I2cA"),oe=n("8hbc"),se=n("AxL8"),ue=n.n(se),de=n("YGWX"),pe=n.n(de),fe=n("3Rrz"),me=function(e){var t={};return Object.keys(e).forEach(function(n){var a=e[n].value,r=a.name,i=a.type,c=a.value;"constant"===i&&(t[r]=JSON.stringify(c)),"system"===i&&(t[r]="".concat(Array.isArray(c)?c.join("."):c))}),t},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];function t(e){return e.map(function(e){var n=e.operator,a=e.value,r=e.field,i=e.type,c=e.children,l={operator:n};if(r&&i){l.field=r;var o={constant:JSON.stringify(a),system:"".concat(Array.isArray(a)?a.join("."):a)};l.expression=o[i]}else c&&(l.children=t(c));return l})}return t(e)},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];function t(e){return e.map(function(e){var n=e.operator,a=e.value,r=e.field,i=e.type,c=e.children,l={operator:n};if(r&&i){l.field="$".concat("{",r,"}");var o={constant:a,system:"$".concat("{",Array.isArray(a)?a.join("."):a,"}")};l.expression=o[i]}return c&&(l.children=t(c)),l})}return t(e)},he=function(e){function t(e){return e.map(function(e){var n={operator:e.operator};return e.field&&(n.field=e.field.toString().replace(/[${}#]/g,""),n.type="constant",n.value=Object.keys(e).includes("expression")?e.expression:e.value,n.value.toString().search(/[$]/)>-1&&(n.type="system"),"system"===n.type&&(n.value=n.value.split("."),n.value=n.value.toString().replace(/[${}#]/g,""))),e.children&&(n.children=t(e.children)),n})}var n=t(e);return n},be=function(e,t){return Object.keys(e).map(function(n){var a=e[n].type;if(["create","update","delete"].includes(a)){var r=ue()(t["actionModel".concat(n)],2),i=r[0],c=r[1],l={action:a,app:i,model:c};return["update","delete"].includes(a)&&(l.filters=ye(t["actionFilter".concat(n)])),["update","create"].includes(a)&&(l.fields=me(t["actionSetField".concat(n)])),l}return null})},ge=2,xe=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(a>ge)return[];var r=[];return t[n].fields.forEach(function(n){var i=A()({},n);i.value="".concat(n.name),i.label="".concat(n.name,"(").concat(n.displayName,")"),i.isLeaf=!0,i.type=n.type,"ref"!==n.type&&"mref"!==n.type&&"bref"!==n.type||(i.isLeaf=!1,i.ref=n.ref,i.children=e(t,n.ref,a+1)),r.push(i)}),r},Ee=function(e){var t=e.event,n={};if("database"===$[t].condition){var a=ue()(e.qfModel,2),r=a[0],i=a[1],c=e.qfFilter;n.app=r,n.model=i,n.filters=ve(c)}return n},ke=function(e,t){var n=e.event,a={};if("database"===$[n].condition){var r=e.condition,i=r.app,c=r.model,l=r.filters,o=[i,c],s=he(l);t({qfModel:o},function(){return setTimeout(function(){t({qfFilter:s})},2e3)}),a.qfModel=o,a.qfFilter=s}return a},_e=function(e){function t(e){return e.map(function(e){var n=e.operator,a=e.expression,r=e.field,i=e.children,c={operator:n};if(r){c.field=r;try{var l=JSON.parse(a);c.value=l,c.type="constant"}catch(e){c.value=a.split("."),c.type="system"}}return i&&(c.children=t(i)),c})}return t(e)},we=function(e,t){var n=t.schemas,a=t.app,r=t.model,i={};return Object.keys(e).forEach(function(t){var c={name:t};try{var l=JSON.parse(e[t]);c.value=l,c.type="constant"}catch(n){c.value=e[t].split("."),c.type="system"}var o={id:pe()(),pid:-1,value:c};o.fieldNames=Object(fe["b"])(n,"".concat(a,"__").concat(r)),i[o.id]=o}),i},Se=function(e,t,n){var a={};return e.forEach(function(e,r){var i=e.action,c=e.app,l=e.model;if(["create","update","delete"].includes(i)){if(a["actionModel".concat(Object.keys(t)[r])]=[c,l],["update","delete"].includes(i)){var o=e.filters;a["actionFilter".concat(Object.keys(t)[r])]=_e(o)}if(["update","create"].includes(i)){var s=e.fields;a["actionSetField".concat(Object.keys(t)[r])]=we(s,{app:c,model:l,schemas:n})}}}),a},Oe=n("y9Gy"),je=n.n(Oe);function Fe(e){var t=qe();return function(){var n,a=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}function qe(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var Ce,Me,Ae=W["a"].TabPane,Ve=R["a"].Step,Ne=D["a"].Item,Te=T["a"].Option,De=ie["b"].TextArea,Re=ie["b"].Switch,We=[{key:"0",title:"\u914d\u7f6e\u89e6\u53d1\u5668"},{key:"1",title:"\u8bbe\u7f6e\u6761\u4ef6"},{key:"2",title:"\u8bbe\u7f6e\u52a8\u4f5c"}],Ke=0,Pe=(ne=Object(b["connect"])(),Object(oe["c"])(ae=ne((re=function(e){o()(n,e);var t=Fe(n);function n(){var e;r()(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),e.state={current:0,appModels:[],actionKeys:{}},e.onAddAction=function(t){var n=e.state.actionKeys,a=A()({},n);a[Ke]={key:Ke,type:t},e.setState({actionKeys:a},function(){e.handleCancel(),Ke+=1})},e.onDelAction=function(t){var n=e.state.actionKeys,a=A()({},n);delete a[t],e.setState({actionKeys:a})},e.TabsOnChange=function(t){var n=e.state.current;return parseInt(t,0)>n?e.next():e.prev()},e.showModal=function(){e.setState({visible:!0})},e.handleCancel=function(){e.setState({visible:!1})},e.next=C()(F.a.mark(function t(){var n,a,r;return F.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.props.form.validateFields,t.next=3,n();case 3:a=e.state.current,r=a+1,e.setState({current:r});case 6:case"end":return t.stop()}},t)})),e.prev=function(){var t=e.state.current,n=t-1;e.setState({current:n})},e.getSch=function(){var t=e.props,n=t.schemas,a=t.form.getFieldValue,r=N()(e),i=r.qfModel,c=a("event");return A()({},n,{old:{displayName:"old",name:"old__table",fields:n[i].fields,titleField:"id"},new:{displayName:"new",name:"new__table",fields:n[i].fields,titleField:"id"},default:G(c)})},e.handleSubmit=C()(F.a.mark(function t(){var n,a,r,i,c,l,o,s,u,d,p,f,m,y,v;return F.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.props,a=n.form,r=a.getFieldsValue,i=a.validateFields,c=n.isUpdate,t.next=3,i();case 3:if(l=e.state.actionKeys,o=r(),s=o.name,u=o.event,d=o.description,p=o.opened,f=be(l,o),m=Ee(o),y={disable:!p,name:s,event:u,description:d,triggeraction:f,condition:m},!c){t.next=15;break}return v=e.props.id,t.next=13,Z(y,parseInt(v,0));case 13:return P.a.push("/content/trigger_core__trigger"),t.abrupt("return");case 15:return t.next=17,Z(y);case 17:P.a.push("/content/trigger_core__trigger");case 18:case"end":return t.stop()}},t)})),e}return c()(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.schemas,n=e.checkModelManaged,a=Object(oe["o"])(t,n);this.setState({appModels:a});var r=this.props.isUpdate;r&&this.setValues()}},{key:"setValues",value:function(){var e=C()(F.a.mark(function e(){var t,n,a,r,i,c,l,o,s,u,d,p,f,m;return F.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.props,n=t.dispatch,a=t.id,r=t.form.setFieldsValue,i=t.schemas,e.next=3,n({type:"content/detail",payload:{model:"trigger_core__trigger",id:a}});case 3:return c=e.sent,l=c.slug,e.next=7,ee(l);case 7:o=e.sent,s=o.name,u=o.event,d=o.description,p=o.disable,f=o.triggeraction,r({name:s,event:u,description:d,opened:!p},function(){ke(o,r)}),m={},f.forEach(function(e){var t=e.action;m[Ke]={key:Ke,type:t},Ke+=1}),this.setState({actionKeys:m},function(){var e=Se(f,m,i);r(e)});case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"renderField",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.itemProps,r=void 0===a?{}:a,i=n.widgetProps,c=void 0===i?{}:i,l=this.props.form.getFieldDecorator,o=O["a"],s=e.name,u=e.label,d=e.component,p=e.defaultValue,f=e.choices,y=void 0===f?[]:f,v=e.type,b=e.required,g=void 0!==b&&b,x={input:O["a"],select:T["a"],textArea:De,switch:Re,modelSelect:S["a"],querybuilder:ce["d"]},E=A()({},c);if(x[d]&&(o=x[d]),"select"===d&&(Object(h["isEmpty"])(y)||(t=y.map(function(e){return m.a.createElement(Te,{key:e.key},e.title)}))),"modelSelect"===d){var k=this.state.appModels;E.options=k,E.placeholder="\u8bf7\u9009\u62e9",E.displayRender=function(e){return e.join("__")}}return m.a.createElement(Ne,w()({},r,{label:u,key:s}),l(s,{initialValue:p,rules:[{required:g},{type:v}]})(m.a.createElement(o,E,t&&t)))}},{key:"render",value:function(){var e=this,t=this.props,n=t.isUpdate,a=t.schemas,r=t.form,i=r.resetFields,c=r.getFieldDecorator,l=r.getFieldValue,o=this.state,s=o.current,u=o.appModels,d=o.visible,p=o.actionKeys,f=function(){return m.a.createElement(k["a"],null,m.a.createElement(R["a"],{current:s},We.map(function(e){return m.a.createElement(Ve,{title:e.title,key:e.key})})))},y="".concat(s),v={};n||(v.renderTabBar=f,v.activeKey=y);var h=function(t){var n={span:{xs:24,sm:3,md:2,lg:2,xl:2,xxl:1}[t]},a={span:{xs:24,sm:10,md:8,lg:5,xl:4,xxl:4}[t]};return m.a.createElement(k["a"],{style:{marginTop:8}},m.a.createElement("div",{className:je.a.title},"\u89e6\u53d1\u5668\u914d\u7f6e"),L.map(function(r){var i={span:{xs:24,sm:21,md:18,lg:15,xl:12,xxl:10}[t]};return"description"===r.name?e.renderField(r,{itemProps:{labelCol:n,wrapperCol:i}}):e.renderField(r,{itemProps:{labelCol:n,wrapperCol:a}})}))},b=m.a.createElement(S["a"],{options:u,placeholder:"\u8bf7\u9009\u62e9",displayRender:function(e){return e.join("__")}}),_=Object.keys(a)[0],O=_&&_.split("__")||[],j=function(t){var n={span:{xs:24,sm:3,md:2,lg:2,xl:2,xxl:1}[t]},a={span:{xs:24,sm:10,md:8,lg:5,xl:4,xxl:4}[t]},r=[],i=[],l=e.qfModel;if(l){var o=e.getSch();r=Object(le["k"])(o,"default"),i=xe(o,"default")}return m.a.createElement(k["a"],{style:{marginTop:8}},m.a.createElement("div",{className:je.a.title},"\u6761\u4ef6\u8bbe\u7f6e"),m.a.createElement(Ne,{labelCol:n,wrapperCol:a,label:"\u6a21\u578b"},c("qfModel",{initialValue:[]})(b)),m.a.createElement("div",null,m.a.createElement("div",{style:{paddingBottom:2}},m.a.createElement("span",{style:{fontSize:26}},"\u6ee1\u8db3\u6761\u4ef6")),m.a.createElement(Ne,null,c("qfFilter",{initialValue:[]})(m.a.createElement(ce["d"],{key:"qfFilter",columns:r,hideVariable:!0,systemData:i})))))},F=function(t,r,i,o){var s={span:{xs:24,sm:3,md:2,lg:2,xl:2,xxl:1}[t]},u={span:{xs:24,sm:10,md:8,lg:5,xl:4,xxl:4}[t]},d=l("actionModel".concat(r))&&l("actionModel".concat(r)).length&&l("actionModel".concat(r)).join("__"),p=[],f=e.qfModel;if(f){var y=e.getSch();p=xe(y,"default")}return m.a.createElement(k["a"],{style:{marginTop:8},key:"action".concat(r)},m.a.createElement("div",{className:"".concat(je.a.title," ").concat(je.a["space-between"])},m.a.createElement("div",null,i),m.a.createElement(E["a"],{onClick:function(){return e.onDelAction(r)}},"\u5220\u9664")),m.a.createElement(Ne,{labelCol:s,wrapperCol:u,label:"\u6a21\u578b"},c("actionModel".concat(r),{initialValue:O})(b)),"create"!==o&&m.a.createElement("div",null,m.a.createElement("div",{style:{paddingBottom:2}},m.a.createElement("span",{style:{fontSize:26}},"\u67e5\u8be2\u6761\u4ef6")),m.a.createElement(Ne,null,c("actionFilter".concat(r),{initialValue:[]})(m.a.createElement(ce["d"],{columns:Object(le["k"])(a,d)||[],hideVariable:!0,systemData:p})))),"delete"!==o&&m.a.createElement(Ne,null,c("actionSetField".concat(r),{initialValue:[]})(m.a.createElement(ce["e"],{schemas:a,model:d,hideVariable:!0,systemData:p,isNew:!n,isNested:!1}))))},q=function(e){var t=l("event"),n={database:j};return m.a.createElement("div",null,n[$[t].condition](e))},C=function(t){var n={create:F,update:F,delete:F};return m.a.createElement("div",null,Object.keys(p).map(function(e){return n[p[e].type](t,e,Q[p[e].type].name,p[e].type)}),m.a.createElement(k["a"],{style:{marginTop:8,fontSize:20,textAlign:"center"},onClick:e.showModal},"\u6dfb\u52a0\u52a8\u4f5c ",m.a.createElement(x["a"],{style:{fontSize:20},type:"plus"})))},M={0:h,1:q,2:C},A=m.a.createElement("div",null,s<We.length-1&&!n&&m.a.createElement(E["a"],{type:"primary",onClick:function(){return e.next()}},"\u4e0b\u4e00\u6b65"),s>0&&!n&&m.a.createElement(E["a"],{style:{marginLeft:8},onClick:function(){return e.prev()}},"\u4e0a\u4e00\u6b65"),(n||s===We.length-1)&&m.a.createElement(E["a"],{style:{marginLeft:8,marginRight:8},onClick:i},"\u53d6\u6d88"),(n||s===We.length-1)&&m.a.createElement(E["a"],{type:"primary",onClick:this.handleSubmit},"\u63d0\u4ea4"));return m.a.createElement("div",null,m.a.createElement(D["a"],null,m.a.createElement(g["a"],{title:"\u52a8\u4f5c\u7c7b\u578b",visible:d,footer:null,onCancel:this.handleCancel},m.a.createElement("div",null,Object.keys(Q).map(function(t){return m.a.createElement(E["a"],{block:!0,key:t,onClick:function(){return e.onAddAction(t)},style:{marginBottom:10}},Q[t].name)}))),m.a.createElement(U["ContainerQuery"],{query:X},function(t){return m.a.createElement("div",null,!!J()(t)&&m.a.createElement("div",null),m.a.createElement(W["a"],w()({},v,{onChange:e.TabsOnChange,tabBarStyle:{backgroundColor:"white"},className:je.a["ant-tabs-bar"]}),We.map(function(e){return m.a.createElement(Ae,{forceRender:!0,tab:e.title,key:e.key},M[e.key](J()(t)||"sm"),m.a.createElement(k["a"],{style:{marginTop:8}},A))})))})))}},{key:"qfModel",get:function(){var e=this.props.form.getFieldValue,t=e("qfModel")&&e("qfModel").length&&e("qfModel").join("__");if(t)return t}}]),n}(f["Component"]),ae=re))||ae)||ae),ze=D["a"].create({})(Pe),Je=ze,Ue=n("zHco");function Xe(e){var t=Be();return function(){var n,a=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}function Be(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var Le=0,Ie=(Ce=Object(b["connect"])(function(e){var t=e.content.schemas;return{schemas:t}}),v()(Me=Ce(Me=function(e){o()(n,e);var t=Xe(n);function n(){return r()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){Le+=1;var e=this.props.schemas,t=this.props.match.params.id;return console.log(Le,this.isUpdate,e),Object(h["isEmpty"])(e)?null:m.a.createElement(Je,{isUpdate:this.isUpdate,schemas:e,id:t})}},{key:"isUpdate",get:function(){var e=this.props.match.params.id;return!(0!==e&&!e)}}]),n}(f["PureComponent"]))||Me)||Me);t["default"]=function(){return m.a.createElement(Ue["a"],null,m.a.createElement(Ie,null))}},y9Gy:function(e,t,n){e.exports={title:"antd-pro-bsm-components-trigger-index-title","space-between":"antd-pro-bsm-components-trigger-index-space-between","ant-tabs-bar":"antd-pro-bsm-components-trigger-index-ant-tabs-bar"}}}]);