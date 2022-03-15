import e from"mousetrap";import{openBlock as t,createBlock as s,createVNode as l,renderSlot as o,Fragment as a,renderList as i,toDisplayString as n,createCommentVNode as r,createTextVNode as c,onMounted as p}from"vue";const u={},d={},y=e=>e.replace(/[A-Z]/g,(e=>` ${e.toLowerCase()}`)).replace(/-_/g," ").replace(/^./,(e=>e.toUpperCase())),g=e=>e=(e=e.split(",")[0]).replace("mod","undefined"!=typeof window&&/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"cmd":"ctrl"),m=(...e)=>{if(1===e.length)return void m("",e[0]);const[t,s]=e;d[t]||(d[t]={slug:t,name:y(t),actions:[]});const l=d[t];Object.entries(s).forEach((([e,t])=>{"string"==typeof t&&(t={keys:t}),t.name=t.name||y(e),t.display=t.display||g(t.keys),t.short_display=t.short_display||t.display.replace(/shift ?\+ ?/gi,"⇧").replace(/meta ?\+ ?/gi,"⌘").replace(/control ?\+ ?/gi,"^"),u[e]=t,l.actions.push(t)}))};Object.assign(m,{actionBySlug:u,groupBySlug:d});const h=e.prototype.stopCallback;e.prototype.stopCallback=function(e,t,s,l){if(this.paused)return!0;const o=this._globalCallbacks||{};return!o[s]&&!o[l]&&h.call(this,e,t,s)},e.prototype.bindGlobal=function(e,t,s){if(this.bind(e,t,s),this._globalCallbacks=this._globalCallbacks||{},e instanceof Array)for(var l=0;l<e.length;l++)this._globalCallbacks[e[l]]=!0;else this._globalCallbacks[e]=!0};const b=({namespace:t="mousetrap",delimiter:s=","})=>({watch:{[t]:"_sync"+t},mounted(){this["_sync"+t]()},beforeUnmount(){this[`__${t}`].reset()},methods:{["_sync"+t](){var l;null==(l=this[`__${t}`])||l.reset(),this[`__${t}`]=((t,{delimiter:s=","}={})=>{const l=new e;return t=t||{},Object.entries(t).forEach((([e,t])=>{m.actionBySlug[e]&&(e=m.actionBySlug[e].keys),e.includes(s)&&(e=e.split(s).map((e=>e.trim()))),"function"==typeof t&&(t={keydown:t}),t.repeat&&!t.keydown&&(t.keydown=t.repeat);const{repeat:o,keydown:a,keyup:i,keypress:n,global:r}=t,c=(...e)=>r?l.bindGlobal(...e):l.bind(...e);o?c(e,(e=>e.repeat?o(e):a(e))):a&&c(e,(e=>!e.repeat&&a(e))),i&&c(e,i,"keyup"),n&&c(e,n,"keypress")})),l})(this[t],{delimiter:s})}}}),k=b({});k.config=b;const f={mixins:[k],props:{group_slugs:Array},emits:["close"],computed:{groups(){const{group_slugs:e=Object.keys(m.groupBySlug)}=this;return e.map((e=>m.groupBySlug[e]))},mousetrap(){return{"esc,?":()=>this.$emit("close")}}}},_={class:"modal"},w={class:"modal-content"},v=l("h3",null,"Keyboard Shortcuts",-1),C={key:0},S={class:"table"};f.render=function(e,p,u,d,y,g){return t(),s("div",_,[l("div",{class:"modal-mask",onClick:p[1]||(p[1]=t=>e.$emit("close"))}),l("div",w,[v,o(e.$slots,"default"),(t(!0),s(a,null,i(g.groups,(e=>(t(),s("div",{key:e.slug},[e.name?(t(),s("h4",C,n(e.name),1)):r("",!0),l("table",S,[l("tbody",null,[(t(!0),s(a,null,i(e.actions,(e=>(t(),s("tr",{key:e.slug},[l("td",null,[c(n(e.name)+" ",1),e.description?(t(),s("span",{key:0,title:e.description}," ❓ ",8,["title"])):r("",!0)]),l("td",null,n(e.display),1)])))),128))])])])))),128))])])};var $={Mixin:k,Modal:f,register:m,use:(e,t)=>{console.log("wtf"),p((()=>{}))}};export default $;
