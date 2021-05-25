(function(e){function t(t){for(var o,c,a=t[0],s=t[1],l=t[2],h=0,u=[];h<a.length;h++)c=a[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ur-vue-mousetrap/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f1":function(e,t,n){},"1dbd":function(e,t,n){"use strict";n("01f1")},4945:function(e,t,n){},"559f":function(e,t,n){"use strict";n("8fcb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("29ec"),i=n.n(r),c=(n("737e"),n("4945"),{class:"app-root"}),a={class:"navbar"},s=Object(o["createVNode"])("div",{class:"navbar-brand"},"@ur/vue-mousetrap",-1),l={class:"navbar-section flex items-center"},d={class:"app-view"};function h(e,t,n,r,i,h){var u=Object(o["resolveComponent"])("router-link"),p=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[Object(o["createVNode"])("header",a,[s,Object(o["createVNode"])("div",l,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(i.tabs,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:h.css.tab(e),key:e[0]},[Object(o["createVNode"])(u,{to:e[0]},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e[1]),1)]})),_:2},1032,["to"])],2)})),128))])]),Object(o["createVNode"])("div",d,[Object(o["createVNode"])(p)])])}var u=n("3835"),p=[["/","Basics"],["/mousetrap","Mousetrap"],["/help-modal","Help Modal"]],g={data:function(){return{tabs:p}},computed:{css:function(){var e=this;return{tab:function(t){var n=Object(u["a"])(t,1),o=n[0];return["btn",o===e.$route.path?"-primary":"-light"]}}}}};n("1dbd");g.render=h;var m=g,f=(n("ac1f"),n("1276"),{class:"code-wrapper"}),b={class:"lines"};function v(e,t,n,r,i,c){var a=Object(o["resolveComponent"])("ssh-pre");return Object(o["openBlock"])(),Object(o["createBlock"])("div",f,[Object(o["createVNode"])(a,{language:"js","data-line":5},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.code),1)]})),_:1}),Object(o["createVNode"])("div",b,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(n.code.split("\n"),(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t,class:c.css(t)},Object(o["toDisplayString"])(i.counts[t]),3)})),128))])])}n("4160"),n("caad"),n("d81d"),n("2532"),n("159b");var y={props:{code:String,lines:Array},data:function(){return{counts:{},fade:!1,lines0:[]}},watch:{lines:function(){var e=this;this.lines0=this.lines.map((function(e){return e-1})),this.fade=!1,this.lines0.forEach((function(t){return e.counts[t]=(e.counts[t]||0)+1})),setTimeout((function(){return e.fade=!0}),0)}},methods:{css:function(e){return["line",{"bg-blue-300":!this.fade&&this.lines0.includes(e)},{"bg-gray-400":this.fade&&this.lines0.includes(e)}]}}};n("559f");y.render=v;var j=y,O=n("6c02"),k=Object(o["createVNode"])("p",{class:"text-xl text-center"}," Press enter to get started. ",-1),w={key:0,class:"modal"},x=Object(o["createVNode"])("div",{class:"modal-mask"},null,-1),_=Object(o["createVNode"])("div",{class:"modal-content",style:{width:"350px"}},[Object(o["createVNode"])("h2",null,"Welcome!"),Object(o["createVNode"])("p",null," The lines are highlighted in the source code when they are executed. The left column tells how many times that line has been triggered. "),Object(o["createVNode"])("p",null,' Press "enter" again and then scroll down to see more hotkey examples. ')],-1);function B(e,t,n,r,i,c){var a=Object(o["resolveComponent"])("highlighter");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[k,i.show_welcome?(Object(o["openBlock"])(),Object(o["createBlock"])("div",w,[x,_])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(a,{lines:i.highlighted,code:i.code},null,8,["lines","code"])],64)}var N=n("ade3"),V=(n("4fad"),n("d3b7"),n("38cf"),n("498a"),n("ddb0"),n("8a60")),M=n.n(V),S=(n("b0c0"),n("5319"),{}),C={},P=function(e){return e.replace(/[A-Z]/g,(function(e){return" ".concat(e.toLowerCase())})).replace(/-_/g," ").replace(/^./,(function(e){return e.toUpperCase()}))},T=function(){var e=/Mac|iPod|iPhone|iPad/;return"undefined"!=typeof window&&e.test(window.navigator.platform)},A=function(e){return e=e.split(",")[0],e=e.replace("mod",T()?"cmd":"ctrl"),e},F=function(e){return e.replace(/shift ?\+ ?/gi,"⇧").replace(/meta ?\+ ?/gi,"⌘").replace(/control ?\+ ?/gi,"^")},H=function e(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(1!==n.length){var r=n[0],i=n[1];C[r]||(C[r]={slug:r,name:P(r),actions:[]});var c=C[r];Object.entries(i).forEach((function(e){var t=Object(u["a"])(e,2),n=t[0],o=t[1];"string"===typeof o&&(o={keys:o}),o.name=o.name||P(n),o.display=o.display||A(o.keys),o.short_display=o.short_display||F(o.display),S[n]=o,c.actions.push(o)}))}else e("",n[0])};Object.assign(H,{actionBySlug:S,groupBySlug:C});var D=H;(function(e){if(e){var t={},n=e.prototype.stopCallback;e.prototype.stopCallback=function(e,o,r,i){var c=this;return!!c.paused||!t[r]&&!t[i]&&n.call(c,e,o,r)},e.prototype.bindGlobal=function(e,n,o){var r=this;if(r.bind(e,n,o),e instanceof Array)for(var i=0;i<e.length;i++)t[e[i]]=!0;else t[e]=!0},e.init()}})("undefined"!==typeof M.a?M.a:void 0);var I=function(e,t){var n=t.element,o=t.delimiter,r=void 0===o?",":o,i=new M.a(n);return Object.entries(e).forEach((function(e){var t=Object(u["a"])(e,2),n=t[0],o=t[1];D.actionBySlug[n]&&(n=D.actionBySlug[n].keys),n.includes(r)&&(n=n.split(r).map((function(e){return e.trim()}))),"function"===typeof o&&(o={keydown:o}),o.repeat&&!o.keydown&&(o.keydown=o.repeat);var c=o,a=c.repeat,s=c.keydown,l=c.keyup,d=c.keypress,h=c.global,p=function(){return h?i.bindGlobal.apply(i,arguments):i.bind.apply(i,arguments)};a?p(n,(function(e){return e.repeat?a(e):s(e)})):s&&p(n,(function(e){return!e.repeat&&s(e)})),l&&p(n,l,"keyup"),d&&p(n,d,"keypress")})),i},L=function(e){var t=e.namespace,n=void 0===t?"mousetrap":t,o=e.delimiter,r=void 0===o?",":o,i=e.local;return{watch:Object(N["a"])({},n,"_sync"+n),mounted:function(){this["_sync"+n]()},unmounted:function(){this["__".concat(n)].reset()},methods:Object(N["a"])({},"_sync"+n,(function(){var e;null===(e=this["__".concat(n)])||void 0===e||e.reset();var t=i?this.$el:document.body;this["__".concat(n)]=I(this[n],{element:t,delimiter:r})}))}},q=L({});q.config=L;var $=q,E=(n("a4d3"),n("e01a"),{class:"modal"}),G={class:"modal-content"},J=Object(o["createVNode"])("h3",null,"Keyboard Shortcuts",-1),R={key:0},W={class:"table"};function z(e,t,n,r,i,c){return Object(o["openBlock"])(),Object(o["createBlock"])("div",E,[Object(o["createVNode"])("div",{class:"modal-mask",onClick:t[1]||(t[1]=function(t){return e.$emit("close")})}),Object(o["createVNode"])("div",G,[J,Object(o["renderSlot"])(e.$slots,"default"),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.groups,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:e.slug},[e.name?(Object(o["openBlock"])(),Object(o["createBlock"])("h4",R,Object(o["toDisplayString"])(e.name),1)):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("table",W,[Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.actions,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.slug},[Object(o["createVNode"])("td",null,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name)+" ",1),e.description?(Object(o["openBlock"])(),Object(o["createBlock"])("span",{key:0,title:e.description}," ❓ ",8,["title"])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.display),1)])})),128))])])])})),128))])])}n("b64b");var K={mixins:[$],props:{group_slugs:Array},emits:["close"],computed:{groups:function(){var e=this.group_slugs,t=void 0===e?Object.keys(D.groupBySlug):e;return t.map((function(e){return D.groupBySlug[e]}))},mousetrap:function(){var e=this;return{"esc,?":function(){return e.$emit("close")}}}}};K.render=z;var U=K,Z={Mixin:$,Modal:U,register:D},Q='<script>\nimport Mousetrap from "@ur/vue-mousetrap";\nimport code from "raw-loader!./demos/Basics.txt";\n\nexport default {\n  mixins: [Mousetrap.Mixin],\n  data() {\n    return { code, highlighted: [], show_welcome: false };\n  },\n  computed: {\n    mousetrap() {\n      if (this.show_welcome) {\n        // if this.mousetrap is computed, it will be reactive\n        return {\n          enter: () => {\n            this.show_welcome = false;\n            this.highlighted = [15, 16, 17, 18];\n          }\n        };\n      }\n      return {\n        enter: () => {\n          this.show_welcome = true;\n          this.highlighted = [22, 23, 24, 25];\n        },\n\n        // multiple keys can be specified with commas\n        "a,b": () => (this.highlighted = [28]),\n\n        // behavior can be customized with an object\n        "?,/": {\n          keydown: () => (this.highlighted = [32]),\n          keyup: () => (this.highlighted = [33])\n        },\n\n        // repeat keys fire when held down\n        q: {\n          repeat: () => (this.highlighted = [38])\n        },\n\n        // global hotkeys will work even on input fields\n        "ctrl+b,command+b": {\n          global: true,\n          keydown: () => (this.highlighted = [44])\n        }\n      };\n    }\n  }\n};\n<\/script>\n\n<template>\n  \x3c!-- Here is the html. I put the <template> tag at the bottom to keep the code above the fold ¯\\_(ツ)_/¯ --\x3e\n  <p class="text-xl text-center">\n    Press enter to get started.\n  </p>\n  <div v-if="show_welcome" class="modal">\n    <div class="modal-mask" />\n    <div class="modal-content" style="width: 350px">\n      <h2>Welcome!</h2>\n      <p>\n        The lines are highlighted in the source code when they are executed. The\n        left column tells how many times that line has been triggered.\n      </p>\n      <p>\n        Press "enter" again and then scroll down to see more hotkey examples.\n      </p>\n    </div>\n  </div>\n  <highlighter :lines="highlighted" :code="code" />\n</template>\n',X={mixins:[Z.Mixin],data:function(){return{code:Q,highlighted:[],show_welcome:!1}},computed:{mousetrap:function(){var e=this;return this.show_welcome?{enter:function(){e.show_welcome=!1,e.highlighted=[15,16,17,18]}}:{enter:function(){e.show_welcome=!0,e.highlighted=[22,23,24,25]},"a,b":function(){return e.highlighted=[28]},"?,/":{keydown:function(){return e.highlighted=[32]},keyup:function(){return e.highlighted=[33]}},q:{repeat:function(){return e.highlighted=[38]}},"ctrl+b,command+b":{global:!0,keydown:function(){return e.highlighted=[44]}}}}}};X.render=B;var Y=X,ee=Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(" Below is the examples used in the "),Object(o["createVNode"])("a",{href:"https://craig.is/killing/mice"},"Mousetrap documentation"),Object(o["createTextVNode"])(". Since this package is just a wrapper around mousetrap, please refer to the mousetrap docs for more information on how to construct key codes. ")],-1);function te(e,t,n,r,i,c){var a=Object(o["resolveComponent"])("highlighter");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[ee,Object(o["createVNode"])(a,{lines:i.highlighted,code:i.code},null,8,["lines","code"])],64)}var ne='<script>\nimport Mousetrap from "@ur/vue-mousetrap";\nimport code from "raw-loader!./demos/Mousetrap.txt";\n\nexport default {\n  mixins: [Mousetrap.Mixin],\n  data() {\n    return { code, highlighted: [], paused: false };\n  },\n  computed: {\n    mousetrap() {\n      return {\n        // single keys\n        4: () => (this.highlighted = [18]),\n        x: {\n          keyup: () => (this.highlighted = [20])\n        },\n\n        // combinations (mod = ctrl or command)\n        "mod+shift+k": () => {\n          this.highlighted = [24, 25, 26, 27];\n          return false;\n        },\n\n        "command+k,ctrl+k": () => {\n          this.highlighted = [29, 30, 31, 32];\n          return false;\n        },\n\n        // gmail style sequences\n        "g i": () => (this.highlighted = [35]),\n        "* a": () => (this.highlighted = [36]),\n\n        // konami code!\n        "up up down down left right left right b a enter": () => {\n          this.highlighted = [39, 40, 41, 42];\n        }\n      };\n    }\n  }\n};\n<\/script>\n\n<template>\n  <p>\n    Below is the examples used in the\n    <a href="https://craig.is/killing/mice">Mousetrap documentation</a>. Since\n    this package is just a wrapper around mousetrap, please refer to the\n    mousetrap docs for more information on how to construct key codes.\n  </p>\n  <highlighter :lines="highlighted" :code="code" />\n</template>\n',oe={mixins:[Z.Mixin],data:function(){return{code:ne,highlighted:[],paused:!1}},computed:{mousetrap:function(){var e=this;return{4:function(){return e.highlighted=[18]},x:{keyup:function(){return e.highlighted=[20]}},"mod+shift+k":function(){return e.highlighted=[24,25,26,27],!1},"command+k,ctrl+k":function(){return e.highlighted=[29,30,31,32],!1},"g i":function(){return e.highlighted=[35]},"* a":function(){return e.highlighted=[36]},"up up down down left right left right b a enter":function(){e.highlighted=[39,40,41,42]}}}}};oe.render=te;var re=oe,ie=Object(o["createVNode"])("p",{class:"text-xl text-center"},' Press "?" to see help menu. ',-1),ce=Object(o["createVNode"])("div",{style:{"max-width":"300px"}},[Object(o["createVNode"])("p",null,[Object(o["createVNode"])("code",null,"Mousetrap.register"),Object(o["createTextVNode"])(" is useful for generating programatic documentation for hotkeys. It's also used to create aliases and group hotkeys. ")]),Object(o["createVNode"])("p",null,[Object(o["createVNode"])("code",null,"Mousetrap.Modal"),Object(o["createTextVNode"])(" (this component) is included as a quick way to display all registered hotkeys to users. ")])],-1);function ae(e,t,n,r,i,c){var a=Object(o["resolveComponent"])("mousetrap-modal"),s=Object(o["resolveComponent"])("highlighter");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[ie,i.show_help?(Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:0,onClose:t[1]||(t[1]=function(e){return i.show_help=null})},{default:Object(o["withCtx"])((function(){return[ce]})),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(s,{lines:i.highlighted,code:i.code},null,8,["lines","code"])],64)}var se='<script>\nimport Mousetrap from "@ur/vue-mousetrap";\nimport code from "raw-loader!./demos/HelpModal.txt";\n\nMousetrap.register({\n  open: "mod+o", // string yields no overrides\n  showHelp: "?,/", // will only show first key in help menu\n  save: {\n    name: "Save File", // override name\n    keys: "mod+s"\n  },\n  move: {\n    name: "Move player",\n    keys: "up,down,left,right,w,a,s,d",\n    display: "Arrows/wasd",\n    description: "Actions can also have descriptions!"\n  },\n  cheat: {\n    name: "Infinite Lives",\n    keys: "up up down down left right left right b a enter",\n    display: "I\'m not telling!",\n    short_display: "???"\n  },\n  preserveAspectRatio: {\n    // this shortcut only exists as documentation (no keys)\n    display: "Shift+click",\n    description: "Non-keyboard shortcuts can also be added."\n  }\n});\n\nexport default {\n  components: { MousetrapModal: Mousetrap.Modal },\n  mixins: [Mousetrap.Mixin],\n  data() {\n    return { code, highlighted: [], show_help: false };\n  },\n  computed: {\n    mousetrap() {\n      return {\n        open: () => (this.highlighted = [32]),\n        save: {\n          keydown: e => {\n            this.highlighted = [42, 43, 44, 45];\n            e.preventDefault(); // override browser\'s ctrl+s/cmd+s\n          },\n          global: true // works in input, textarea, etc\n        },\n        move: () => (this.highlighted = [48]),\n        cheat: () => (this.highlighted = [49]),\n        showHelp: () => {\n          this.show_help = !this.show_help;\n          this.highlighted = [50, 51, 52, 53];\n        },\n        p: () => (this.highlighted = [54]) // not in global registry\n      };\n    }\n  }\n};\n<\/script>\n\n<template>\n  \x3c!-- Here is the html. I put the <template> tag at the bottom to keep the code above the fold ¯\\_(ツ)_/¯ --\x3e\n  <p class="text-xl text-center">\n    Press "?" to see help menu.\n  </p>\n  <mousetrap-modal v-if="show_help" @close="show_help = null">\n    <div style="max-width: 300px">\n      <p>\n        <code>Mousetrap.register</code> is useful for generating programatic\n        documentation for hotkeys. It\'s also used to create aliases and group\n        hotkeys.\n      </p>\n      <p>\n        <code>Mousetrap.Modal</code> (this component) is included as a quick way\n        to display all registered hotkeys to users.\n      </p>\n    </div>\n  </mousetrap-modal>\n  <highlighter :lines="highlighted" :code="code" />\n</template>\n';Z.register({open:"mod+o",showHelp:"?,/",save:{name:"Save File",keys:"mod+s"},move:{name:"Move player",keys:"up,down,left,right,w,a,s,d",display:"Arrows/wasd",description:"Actions can also have descriptions!"},cheat:{name:"Infinite Lives",keys:"up up down down left right left right b a enter",display:"I'm not telling!",short_display:"???"},preserveAspectRatio:{display:"Shift+click",description:"Non-keyboard shortcuts can also be added."}});var le={components:{MousetrapModal:Z.Modal},mixins:[Z.Mixin],data:function(){return{code:se,highlighted:[],show_help:!1}},computed:{mousetrap:function(){var e=this;return{open:function(){return e.highlighted=[32]},save:{keydown:function(t){e.highlighted=[42,43,44,45],t.preventDefault()},global:!0},move:function(){return e.highlighted=[48]},cheat:function(){return e.highlighted=[49]},showHelp:function(){e.show_help=!e.show_help,e.highlighted=[50,51,52,53]},p:function(){return e.highlighted=[54]}}}}};le.render=ae;var de=le,he=Object(O["b"])(),ue=[{path:"/",component:Y},{path:"/mousetrap",component:re},{path:"/help-modal",component:de}],pe=Object(O["a"])({history:he,routes:ue}),ge=Object(o["createApp"])(m);ge.component("SshPre",i.a),ge.component("Highlighter",j),ge.use(pe),ge.mount("#app")},"8fcb":function(e,t,n){}});
//# sourceMappingURL=app.589c1077.js.map