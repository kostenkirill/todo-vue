(function(t){function e(e){for(var n,o,c=e[0],r=e[1],u=e[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/todo-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ff6":function(t,e,a){"use strict";var n=a("e3ad"),s=a.n(n);s.a},"18e8":function(t,e,a){},"47b0":function(t,e,a){},"496c":function(t,e,a){"use strict";var n=a("18e8"),s=a.n(n);s.a},"49d0":function(t,e,a){"use strict";var n=a("ce78"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"wrapper"},[a("router-view")],1)])},i=[],o=(a("99af"),function(){for(var t=[],e=0;e<3;e++){var a=Math.floor(56*Math.random())+200;t.push(a)}return"rgb(".concat(t[0],",").concat(t[1],",").concat(t[2],")")}),c=function(t){return JSON.parse(localStorage.getItem(t))},r=function(t,e){localStorage.setItem(t,JSON.stringify(e))},u={name:"App",mounted:function(){this.manageLocalStorage()},methods:{manageLocalStorage:function(){var t=c("tasks");null===t&&r("tasks",[])}}},d=u,l=(a("5c0b"),a("2877")),p=Object(l["a"])(d,s,i,!1,null,null,null),m=p.exports,f=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{attrs:{to:"/taskeditor/newtask"}},[a("app-button",{staticClass:"add-task",attrs:{text:"Add a new task"}})],1),t.taskList?a("div",{staticClass:"tasks-list"},t._l(t.taskList,(function(e){return a("div",{key:e.id},[a("task-card",{attrs:{task:e},on:{todoRemoved:function(){return t.getTasks()}}})],1)})),0):t._e()],1)},k=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-view",style:{backgroundColor:t.bgColor}},[a("modal-window",{attrs:{text:"Do you want to remove this task?"},on:{confirm:function(e){return t.removeTodo(t.id)}},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}}),a("div",{staticClass:"task-content"},[a("h3",[t._v(t._s(t.listName))]),a("ol",t._l(t.list.slice(0,3),(function(e){return a("li",{key:e.id},[t._v(t._s(e.name))])})),0),a("div",{staticClass:"task-buttons"},[a("app-button",{staticClass:"btn-edit",attrs:{text:"Edit"},nativeOn:{click:function(e){return t.editTask(e)}}}),a("app-button",{staticClass:"btn-remove",attrs:{text:"Remove"},nativeOn:{click:function(e){return t.openModal(e)}}})],1)])],1)},b=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn",attrs:{type:"button"}},[t._v(t._s(t.text))])},g=[],x={name:"AppButton",props:{text:{default:""}}},_=x,C=(a("fc2f"),Object(l["a"])(_,O,g,!1,null,"4ae16eb0",null)),w=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"modal"},[a("div",{staticClass:"container"},[a("div",{staticClass:"modal-title"},[t._v("Are you sure?")]),a("p",[t._v(t._s(this.text))]),a("div",{staticClass:"modal-buttons"},[a("app-button",{staticClass:"btn-confirm",attrs:{text:"Confirm"},nativeOn:{click:function(e){return t.confirm(e)}}}),a("app-button",{staticClass:"btn-cancel",attrs:{text:"Cancel"},nativeOn:{click:function(e){return t.close(e)}}})],1)])])},L=[],T={name:"Modal",props:{value:{required:!0},text:{default:"Please confirm your action..."}},components:{AppButton:w},methods:{close:function(){this.$emit("input",!this.value)},confirm:function(){this.close(),this.$emit("confirm")}}},N=T,A=(a("c50d"),Object(l["a"])(N,y,L,!1,null,"4ae10414",null)),$=A.exports,S={name:"TaskCard",props:{task:{default:[]}},data:function(){return{id:"".concat(this.task.id),listName:this.task.listName,list:this.task.list,bgColor:this.task.bgColor,modalOpen:!1}},components:{AppButton:w,ModalWindow:$},methods:{openModal:function(){this.modalOpen=!this.modalOpen},editTask:function(){z.push({path:"/taskeditor/".concat(this.id)})},removeTodo:function(t){this.$store.dispatch("REMOVE_TODO",t),this.$emit("todoRemoved")}}},E=S,j=(a("0ff6"),Object(l["a"])(E,h,b,!1,null,"09beef00",null)),M=j.exports,I={data:function(){return{taskList:null}},components:{TaskCard:M,AppButton:w},methods:{getTasks:function(){this.taskList=c("tasks")}},mounted:function(){this.getTasks()}},P=I,D=(a("49d0"),Object(l["a"])(P,v,k,!1,null,"4300a906",null)),R=D.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-details"},[a("modal-window",{attrs:{text:"Do you want to discard changes and exit?"},on:{confirm:t.exit},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}}),a("div",[a("h1",[t._v("Editor")]),a("h3",[t._v(t._s(t.taskListName))]),a("div",{staticClass:"todo-list"},t._l(t.taskList,(function(e){return a("div",{key:e.id,staticClass:"tasks-list"},[a("div",{staticClass:"task-item"},[a("div",{on:{click:function(a){return t.checkTask(e.id)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"task.checked"}],attrs:{type:"checkbox",name:e.name},domProps:{checked:Array.isArray(e.checked)?t._i(e.checked,null)>-1:e.checked},on:{change:function(a){var n=e.checked,s=a.target,i=!!s.checked;if(Array.isArray(n)){var o=null,c=t._i(n,o);s.checked?c<0&&t.$set(e,"checked",n.concat([o])):c>-1&&t.$set(e,"checked",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(e,"checked",i)}}}),a("label",{attrs:{for:e.name}},[t._v(t._s(e.name))])]),t.showInputField===e.id?a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"task.name"}],attrs:{type:"text",placeholder:"Edit"},domProps:{value:e.name},on:{blur:function(e){t.showInputField=null},input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}):t._e(),a("div",[a("app-button",{attrs:{text:"Edit"},nativeOn:{click:function(a){t.showInputField=e.id}}}),a("app-button",{attrs:{"data-task-id":e.id,text:"Remove"},nativeOn:{click:function(e){return t.removeTask(e)}}})],1)])])})),0)]),a("div",{staticClass:"task-editor"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskListName,expression:"taskListName"}],attrs:{type:"text",placeholder:"List name"},domProps:{value:t.taskListName},on:{input:function(e){e.target.composing||(t.taskListName=e.target.value)}}}),a("div",{staticClass:"add-task"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskName,expression:"taskName"}],attrs:{type:"text",placeholder:"Task name"},domProps:{value:t.taskName},on:{input:function(e){e.target.composing||(t.taskName=e.target.value)}}}),a("app-button",{staticClass:"btn-add",attrs:{text:"Add"},nativeOn:{click:function(e){return t.addTask(e)}}})],1),a("div",{staticClass:"tasks-buttons"},[a("app-button",{staticClass:"btn-save",attrs:{text:"Save"},nativeOn:{click:function(e){return t.save(e)}}}),a("app-button",{staticClass:"btn-discard",attrs:{text:"Discard"},nativeOn:{click:function(e){return t.discard(e)}}}),a("app-button",{staticClass:"btn-revert",attrs:{text:"Revert changes"},nativeOn:{click:function(e){return t.revert(e)}}}),a("app-button",{staticClass:"btn-exit",attrs:{text:"Exit without saving"},nativeOn:{click:function(e){return t.openModal(e)}}})],1)])],1)},F=[],J=(a("c975"),a("d81d"),a("a434"),a("ac1f"),a("466d"),a("5319"),{name:"TaskEditor",data:function(){return{taskListName:"List name",taskName:"",taskList:[],checked:!1,showInputField:null,discardCache:{},todoId:"",modalOpen:!1}},components:{AppButton:w,ModalWindow:$},mounted:function(){this.getTask()},methods:{openModal:function(){this.modalOpen=!this.modalOpen},getTask:function(){var t=this,e=c("tasks"),a=window.location.pathname,n=a.replace("/taskeditor/","");e.map((function(e){e.id===n&&(t.taskListName=e.listName,t.taskList=e.list,t.todoId=n)}))},save:function(){if(!this.taskListName.match(/^$|\s+/)){var t={id:this.todoId,listName:this.taskListName,list:this.taskList,bgColor:o()};this.$store.dispatch("SAVE_TODO",{todo:t}),z.push({path:"/"})}},discard:function(){var t=this.taskListName,e=this.taskList;this.$store.dispatch("DISCARD_TASK",{taskListName:t,taskList:e}),this.getTask()},revert:function(){var t=this.$store.state.discardCache,e=t.taskListName,a=t.taskList;this.taskListName=e,this.taskList=a},exit:function(){z.push("/")},addTask:function(){this.taskName.match(/^$|\s+/)||this.taskList.push({id:"task-".concat(this.taskName,"-").concat(this.taskList.length),name:this.taskName,checked:!1})},removeTask:function(){var t=this,e=event.target.getAttribute("data-task-id");this.taskList.map((function(a){if(a.id===e){var n=t.taskList.indexOf(a);t.taskList.splice(n,1)}}))},checkTask:function(t){this.taskList.map((function(e){e.id===t&&(e.checked=!e.checked)}))}}}),V=J,K=(a("496c"),Object(l["a"])(V,B,F,!1,null,"6903d4e7",null)),W=K.exports,q=[{path:"",name:"main",component:R},{path:"/taskeditor/:id",name:"editor",component:W,props:!0}];n["a"].use(f["a"]);var z=new f["a"]({routes:q,mode:"history"}),G=(a("c740"),a("2f62"));n["a"].use(G["a"]);var H=new G["a"].Store({state:{todos:[],discardCache:{}},mutations:{saveTodo:function(t,e){var a=c("tasks"),n=e.todo;if(""===n.id)n.id="".concat(n.listName.replace(" ","_"),"-").concat(a.length),a.push(n);else{var s=a.findIndex((function(t){return t.id===n.id}));a.splice(s,1,n)}t.todos=a,r("tasks",t.todos)},removeTodo:function(t,e){var a=t.todos;a.map((function(t){if(t.id===e){var n=a.indexOf(t);a.splice(n,1)}})),t.todos=a,r("tasks",t.todos)},discardTask:function(t,e){t.discardCache=e}},actions:{SAVE_TODO:function(t,e){t.commit("saveTodo",e)},REMOVE_TODO:function(t,e){t.commit("removeTodo",e)},DISCARD_TASK:function(t,e){t.commit("discardTask",e)}}});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(m)},router:z,store:H}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"9c0c":function(t,e,a){},c50d:function(t,e,a){"use strict";var n=a("47b0"),s=a.n(n);s.a},ce4f:function(t,e,a){},ce78:function(t,e,a){},e3ad:function(t,e,a){},fc2f:function(t,e,a){"use strict";var n=a("ce4f"),s=a.n(n);s.a}});
//# sourceMappingURL=app.d30afa5e.js.map