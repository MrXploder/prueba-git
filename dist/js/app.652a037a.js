(()=>{"use strict";var t={2360:(t,e,r)=>{r(6992),r(8674),r(9601),r(7727);var a=r(9567),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col mx-auto text-center"},[r("TodoList",{attrs:{nombre:"deberes"}}),r("TodoList",{attrs:{nombre:"supermercado"}}),r("TodoList"),r("TodoList"),r("TodoList"),r("TodoList")],1)])])},n=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card p-4"},[r("h4",{staticClass:"text-secondary mt-4"},[t._v("Lista "+t._s(t.nombre))]),r("form",{staticClass:"mt-4",on:{submit:function(e){return e.preventDefault(),t.agregarNuevaTarea()}}},[r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.nuevaTarea,expression:"nuevaTarea"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingresa una nueva tarea",required:""},domProps:{value:t.nuevaTarea},on:{input:function(e){e.target.composing||(t.nuevaTarea=e.target.value)}}})]),t._m(0)])]),r("h4",{staticClass:"text-secondary mt-4"},[t._v("Lista")]),r("ul",{staticClass:"list-group"},t._l(t.tareas,(function(e,a){return r("li",{key:a,staticClass:"list-group-item"},[t._v(" "+t._s(a+1)+": "+t._s(e)+" ")])})),0)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-2"},[r("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[t._v(" Agregar ")])])}];const u={name:"TodoList",props:{nombre:{type:String,default:"X"}},data:function(){return{nuevaTarea:"",tareas:[]}},methods:{agregarNuevaTarea:function(){this.tareas.unshift(this.nuevaTarea),this.nuevaTarea=""}}},l=u;var c=r(1001),v=(0,c.Z)(l,o,i,!1,null,null,null);const d=v.exports,p={name:"App",components:{TodoList:d}},f=p;var m=(0,c.Z)(f,s,n,!1,null,null,null);const h=m.exports;a.Z.config.productionTip=!1,new a.Z({render:function(t){return t(h)}}).$mount("#app")}},e={};function r(a){var s=e[a];if(void 0!==s)return s.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,r),n.exports}r.m=t,(()=>{var t=[];r.O=(e,a,s,n)=>{if(!a){var o=1/0;for(c=0;c<t.length;c++){for(var[a,s,n]=t[c],i=!0,u=0;u<a.length;u++)(!1&n||o>=n)&&Object.keys(r.O).every((t=>r.O[t](a[u])))?a.splice(u--,1):(i=!1,n<o&&(o=n));if(i){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[a,s,n]}})(),(()=>{r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={143:0};r.O.j=e=>0===t[e];var e=(e,a)=>{var s,n,[o,i,u]=a,l=0;if(o.some((e=>0!==t[e]))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(u)var c=u(r)}for(e&&e(a);l<o.length;l++)n=o[l],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(c)},a=self["webpackChunk_26_todo_list"]=self["webpackChunk_26_todo_list"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var a=r.O(void 0,[998],(()=>r(2360)));a=r.O(a)})();
//# sourceMappingURL=app.652a037a.js.map