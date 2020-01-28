(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{27:function(t,n,e){t.exports=e(74)},32:function(t,n,e){},74:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(20),i=e.n(o),c=(e(32),e(1)),u=e(21),s=e.n(u),l=function(){return(l=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}).apply(this,arguments)};function p(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t}var d,m,g,f,b,y,h,v,x,E,k,S=function(t,n,e){return a.a.createElement(t.Consumer,null,(function(t){return a.a.createElement(n,l({},e,{store:t}))}))},j=function(t,n,e){if(!e)throw new Error("Invalid error Structure");return e.map((function(e){return{component:t,name:n,message:'"'+e.dataPath+'" '+e.message,schemaPath:e.schemaPath}}))},w={data:{mobile:6,tablet:12,desktop:12,component:{type:"Container",components:[]}}},O={version:1,name:"error-structure",title:"Mage Sheet Structure",root:{name:"error-grid",type:"Grid",items:[[]]}},P=function(t){return void 0===t.type&&void 0!==t.root},z=function(t){return P(t)?"RootContainer":t.type},D=function(t){return P(t)?"root":t.name},J=function(){var t={components:{},structuresSchemas:{},dataSchema:{},childrens:{}};return{getState:function(){return Object.freeze(l({},t))},registerComponent:function(n,e,r,a,o){void 0===a&&(a=null),void 0===o&&(o=function(){return null}),t.components[n]=e,t.structuresSchemas[n]=r,t.dataSchema[n]=a,t.childrens[n]=o},build:function(n,e){var r=z(n),o=e.data[n.name];return function(t,n,e,r){return a.a.createElement(t,{structure:n,data:e,rootData:r})}(t.components[r],n,o,e)},validateStructure:function(n){for(var e=new s.a,r=[{currentType:z(n),currentStructure:n}];0!==r.length;){var a=r[0];r.shift();var o=t.structuresSchemas[a.currentType];if(!o)return[{name:D(a.currentStructure),component:a.currentType,message:"Component not Registered"}];var i=e.compile(o);if(!i(a.currentStructure))return j(a.currentType,D(a.currentStructure),i.errors);var c=(0,t.childrens[a.currentType])(a.currentStructure);if(c){var u=c.map((function(t){return{currentType:t.type,currentStructure:t}}));r.push.apply(r,u)}}return[]}}}(),C=Object(r.createContext)(J),T=function(t,n,e,r){return void 0===n&&(n={}),void 0===e&&(e=null),void 0===r&&(r=function(){return null}),function(a){var o=function(t){return S(C,a,t)};return J.registerComponent(t,o,n,e,r),o}},q={global:Object(c.b)(d||(d=p(["\n  @import url(https://fonts.googleapis.com/css?family=Josefin+Slab&display=swap);\n  body {\n\t\tfont-family: 'Josefin Slab', serif;\n\t\tfont-size: 16px;\n  }\n"],["\n  @import url(https://fonts.googleapis.com/css?family=Josefin+Slab&display=swap);\n  body {\n\t\tfont-family: 'Josefin Slab', serif;\n\t\tfont-size: 16px;\n  }\n"]))),colors:{"c-1":"#75DDDD","c-2":"#508991","c-3":"#172A3A","c-4":"#004346","c-5":"#09BC8A"},zIndex:{base:"0",content:"1"}},I={Headings:{h1:c.c.h1,h2:c.c.h6,h3:c.c.h6,h4:c.c.h6,h5:c.c.h6,h6:c.c.h6}},N=(m=function(t){var n=t.structure,e=t.data,o=t.store,i=Object(r.useState)(null),u=i[0],s=i[1],l=Object(r.useState)(null),p=l[0],d=l[1];if(Object(r.useEffect)((function(){try{var t={structure:JSON.parse(n),data:JSON.parse(e)},r=o.validateStructure(t.structure);0!==r.length?d(r):s(t)}catch(a){console.log("Error: "),console.log(a)}}),[n,e,o]),p){var m=function(t){var n=t.map((function(t){var n;return(n=w.data.component.components).push.apply(n,[{type:"Text",name:t.name},{type:"Text",name:t.name+"-component"},{type:"Text",name:t.name+"-\xa0schemaPath"}]),w})),e=O;return e.root.items[0]=n,{structure:e,data:t.reduce((function(t,n){return t[n.name]=n.message,t[n.name+"-component"]=n.component,t[n.name+"-\xa0schemaPath"]=n.schemaPath,t}),{})}}(p);return o.build(m.structure,{data:m.data})}return u?a.a.createElement(a.a.Fragment,null,a.a.createElement(q.global,null),a.a.createElement(c.a,{theme:q},o.build(u.structure,u.data)),";"):null},function(t){return S(C,m,t)}),F=function(t){return{background:{color:t.background?t.background.color:"",image:t.background?t.background.image:""}}},A=function(t){var n="",e=function(t,n){return t&&n?function(t,n){return t&&n?t.colors[n]:null}(t,n.color)||n.color:null}(t.theme,t.background);e&&(n+="background-color: "+e+";");var r=function(t,n){return t&&n?n.image:null}(t.theme,t.background);return r&&(n+='\n\t\t\tbackground-image: url("'+r+'");\n\t\t\tbackground-size: cover;\n\t\t'),n},B=c.c.div(g||(g=p(["\n  ","\n"],["\n  ","\n"])),(function(t){return A(t)})),G=c.c.div(f||(f=p(["\n  z-index: ",";\n"],["\n  z-index: ",";\n"])),q.zIndex.content),R=function(t){if(!t)return null;var n=q.colors[t];return n||t},H=c.c.div(b||(b=p(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  z-index: ",";\n\n  background: rgb(210, 210, 210);\n  background: linear-gradient(\n    150deg,\n    "," 0%,\n    "," 20%,\n    rgba(0, 212, 255, 0) 100%\n  );\n"],["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  z-index: ",";\n\n  background: rgb(210, 210, 210);\n  background: linear-gradient(\n    150deg,\n    "," 0%,\n    "," 20%,\n    rgba(0, 212, 255, 0) 100%\n  );\n"])),q.zIndex.base,(function(t){return R(t.color)}),(function(t){return R(t.color)})),M=(T("RootContainer",{properties:{version:{type:"number"},name:{type:"string"},title:{type:"string"},background:{type:"object",additionalProperties:!1,properties:{color:{type:"string"},image:{type:"string"},gradient:{type:"string"}}},root:{tyoe:"object"}},additionalProperties:!1,required:["version","name","title","root"]},null,(function(t){return[t.root]}))((function(t){var n=t.structure,e=t.store,r=t.rootData,o=F(n);return a.a.createElement(a.a.Fragment,null,n.background&&n.background.gradient&&a.a.createElement(H,{color:n.background.gradient}),a.a.createElement(G,null,a.a.createElement(B,l({},o),e.build(n.root,r)),";"))})),function(t){return"width: "+t/12*100+"%;"}),W=c.c.div(y||(y=p(["\n  float: left;\n  padding: 0.25rem;\n  min-height: 1px;\n  box-sizing: border-box;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    ","\n  }\n\n  @media only screen and (min-width: 768px) {\n    ","\n  }\n\n  @media only screen and (min-width: 1000px) {\n    ","\n  }\n"],["\n  float: left;\n  padding: 0.25rem;\n  min-height: 1px;\n  box-sizing: border-box;\n  width: 100%;\n\n  @media only screen and (max-width: 768px) {\n    ","\n  }\n\n  @media only screen and (min-width: 768px) {\n    ","\n  }\n\n  @media only screen and (min-width: 1000px) {\n    ","\n  }\n"])),(function(t){var n=t.mobile;return n&&M(n)}),(function(t){var n=t.tablet;return n&&M(n)}),(function(t){var n=t.desktop;return n&&M(n)})),_=c.c.div(h||(h=p(["\n  width: 100%;\n  height: auto;\n  float: left;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"],["\n  width: 100%;\n  height: auto;\n  float: left;\n  box-sizing: border-box;\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n"]))),$=c.c.div(v||(v=p(["\n  position: relative;\n\n  max-width: 1360px;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-top: 16px;\n  padding-bottom: 32px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box;\n\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n\n  ","\n"],["\n  position: relative;\n\n  max-width: 1360px;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-top: 16px;\n  padding-bottom: 32px;\n  margin-right: auto;\n  margin-left: auto;\n  box-sizing: border-box;\n\n  &:before,\n  &:after {\n    content: ' ';\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n\n  ","\n"])),(function(t){return A(t)})),K=(T("Grid",{properties:{type:{type:"string"},name:{type:"string"},background:{type:"object",additionalProperties:!1,properties:{color:{type:"string"},image:{type:"string"},gradient:{type:"string"}}},items:{type:"array",items:{type:"array",items:{type:"object",properties:{data:{type:"object",properties:{mobile:{type:"number"},tablet:{type:"number"},desktop:{type:"number"},component:{type:"object"}},additionalProperties:!1,required:["mobile","tablet","desktop","component"]}},required:["data"]}}}},additionalProperties:!1,required:["type","name","items"]},null,(function(t){return t.items.reduce((function(t,n){return t.push.apply(t,n),t}),[]).map((function(t){return t.data.component}))}))((function(t){var n=t.structure,e=t.store,r=t.rootData,o=F(n);return a.a.createElement($,l({"data-rdc-name":n.name},o),n.background&&n.background.gradient&&a.a.createElement(H,{color:n.background.gradient}),a.a.createElement(G,null,n.items.map((function(t,n){return a.a.createElement(_,{key:n},t.map((function(t,n){var o=t.data,i=o.mobile,c=o.tablet,u=o.desktop,s=o.component;return a.a.createElement(W,{mobile:i,tablet:c,desktop:u,key:n},e.build(s,r))})))}))))})),c.c.div(x||(x=p(["\n  position: relative;\n  display: flex;\n\n  padding: 8px;\n\n  ","\n"],["\n  position: relative;\n  display: flex;\n\n  padding: 8px;\n\n  ","\n"])),(function(t){return A(t)}))),L=(T("Container",{properties:{type:{type:"string"},name:{type:"string"},background:{type:"object",additionalProperties:!1,properties:{color:{type:"string"},image:{type:"string"},gradient:{type:"string"}}},components:{type:"array",items:{type:"object"}}},additionalProperties:!1,required:["type","components"]},null,(function(t){return t.components}))((function(t){var n=t.store,e=t.structure,r=t.rootData,o=F(e);return a.a.createElement(K,l({},o),e.background&&e.background.gradient&&a.a.createElement(H,{color:e.background.gradient}),e.components.map((function(t,e){return a.a.createElement(G,{key:e},n.build(t,r))})))})),c.c.div(E||(E=p(["\n  padding: 8px;\n"],["\n  padding: 8px;\n"])))),Q=function(t){var n=I.Headings[t.typography];if(!n)return a.a.createElement(L,l({},t));var e=n(k||(k=p([""],[""])));return a.a.createElement(e,l({},t))},U=(T("Text",{properties:{type:{type:"string"},name:{type:"string"},typography:{type:"string",enum:["h1","h2","h3","h4","h5","h6"]}},additionalProperties:!1,required:["type","name"]})((function(t){var n=t.structure,e=t.data;return a.a.createElement(Q,{"data-name":n.name,typography:n.typography},e)})),T("Image",{properties:{type:{type:"string"},name:{type:"string"}},additionalProperties:!1,required:["type","name"]})((function(t){var n=t.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:n,alt:"Component Image"}))})),e(3));var V=function(t,n){var e=Object(r.useState)(null),a=Object(U.a)(e,2),o=a[0],i=a[1],c=Object(r.useState)(null),u=Object(U.a)(c,2),s=u[0],l=u[1];return Object(r.useEffect)((function(){fetch(t).then((function(t){return t.text()})).then((function(t){return i(t)}))}),[t]),Object(r.useEffect)((function(){fetch(n).then((function(t){return t.text()})).then((function(t){return l(t)}))}),[n]),{structure:o,data:s,setStructure:i,setData:l}},X=e(10),Y=e.n(X),Z="/react-dynamic-components",tt=function(t){var n=t.data,e=Object(r.useState)(n),o=Object(U.a)(e,2),i=o[0],c=o[1];Object(r.useEffect)((function(){c(n)}),[n]);var u=V("".concat(Z,"/samples/").concat(i,"-structure.json"),"".concat(Z,"/samples/").concat(i,"-data.json")),s=u.structure,l=u.data,p=u.setStructure,d=u.setData;return i&&s&&l?a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{structure:s,data:l}),a.a.createElement(Y.a,{src:JSON.parse(s),onEdit:function(t){return p(JSON.stringify(t.updated_src))}}),";",a.a.createElement(Y.a,{src:JSON.parse(l),onEdit:function(t){return d(JSON.stringify(t.updated_src))}}),";"):null},nt=(T("Sheets",{properties:{type:{type:"string"},name:{type:"string"}},required:["type","name"]})(tt),e(24));function et(){var t=Object(nt.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px;\n"]);return et=function(){return t},t}var rt=c.c.div(et()),at=function(){var t=V("".concat(Z,"/samples/navigation-structure.json"),"".concat(Z,"/samples/navigation-data.json")),n=t.structure,e=t.data;return n&&e?a.a.createElement("div",null,a.a.createElement(rt,null,a.a.createElement("button",{disabled:!0},"Gurps"),a.a.createElement("button",null,"Mage"),a.a.createElement("button",{disabled:!0},"DeD 5.0")),a.a.createElement(N,{structure:n,data:e})):null},ot=(T("SheetsNavigation",{properties:{type:{type:"string"}},required:["type"]})(at),function(){var t=V("".concat(Z,"/samples/base-structure.json"),"".concat(Z,"/samples/base-data.json")),n=t.structure,e=t.data;return n&&e?a.a.createElement(N,{structure:n,data:e}):null});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.a63404b7.chunk.js.map