(function(t){function e(e){for(var o,r,a=e[0],l=e[1],b=e[2],i=0,p=[];i<a.length;i++)r=a[i],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,b||[]),c()}function c(){for(var t,e=0;e<s.length;e++){for(var c=s[e],o=!0,a=1;a<c.length;a++){var l=c[a];0!==n[l]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=c[0]))}return t}var o={},n={app:0},s=[];function r(e){if(o[e])return o[e].exports;var c=o[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=t,r.c=o,r.d=function(t,e,c){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(c,o,function(e){return t[e]}.bind(null,o));return c},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue3_compositionApi_blog/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var b=0;b<a.length;b++)e(a[b]);var u=l;s.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"04e2":function(t,e,c){},2010:function(t,e,c){},"23cd":function(t,e,c){"use strict";c("43cb")},2695:function(t,e,c){"use strict";c("b410")},"3d4e":function(t,e,c){"use strict";c("bd17")},"40c2":function(t,e,c){},"43cb":function(t,e,c){},"53a2":function(t,e,c){"use strict";c("2010")},"56d7":function(t,e,c){"use strict";c.r(e);var o=c("7a23");function n(t,e,c,n,s,r){const a=Object(o["z"])("Navbar"),l=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(a),Object(o["h"])(l)],64)}const s=t=>(Object(o["v"])("data-v-65fa0857"),t=t(),Object(o["t"])(),t),r=s(()=>Object(o["f"])("h1",null,"Blog Project",-1)),a=Object(o["g"])("Home"),l=Object(o["g"])("Create Post");function b(t,e,c,n,s,b){const u=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("header",null,[r,Object(o["f"])("nav",null,[Object(o["h"])(u,{to:{name:"Home"}},{default:Object(o["F"])(()=>[a]),_:1}),Object(o["h"])(u,{to:{name:"Create"}},{default:Object(o["F"])(()=>[l]),_:1})])])}var u={setup(){return{}}},i=(c("3d4e"),c("6b0d")),p=c.n(i);const d=p()(u,[["render",b],["__scopeId","data-v-65fa0857"]]);var O=d,j={components:{Navbar:O},mounted(){console.log("Application mounted")}};c("f25d");const f=p()(j,[["render",n]]);var v=f,g=c("6605");const h={class:"home"},m=Object(o["f"])("h1",null,"Home",-1),y={key:0},k={key:1,class:"layout"},w={key:2};function _(t,e,c,n,s,r){const a=Object(o["z"])("PostList"),l=Object(o["z"])("TagCloud"),b=Object(o["z"])("Spinner");return Object(o["s"])(),Object(o["e"])("div",h,[m,n.error?(Object(o["s"])(),Object(o["e"])("div",y,Object(o["B"])(n.error),1)):Object(o["d"])("",!0),n.posts.length?(Object(o["s"])(),Object(o["e"])("div",k,[Object(o["h"])(a,{posts:n.posts},null,8,["posts"]),Object(o["h"])(l,{posts:n.posts},null,8,["posts"])])):(Object(o["s"])(),Object(o["e"])("div",w,[Object(o["h"])(b)]))])}var x=c("260b");c("e71f");const S={apiKey:"AIzaSyAkKOMVw-yyXoVRXwaEpMo11mPJVzWXnhQ",authDomain:"blog-site-192d4.firebaseapp.com",projectId:"blog-site-192d4",storageBucket:"blog-site-192d4.appspot.com",messagingSenderId:"975276323956",appId:"1:975276323956:web:8f89c2319a0a3a3e830d21"};x["a"].initializeApp(S);const P=x["a"].firestore(),z=x["a"].firestore.FieldValue.serverTimestamp,T=()=>{const t=Object(o["x"])([]),e=Object(o["x"])(null),c=async()=>{try{const e=await P.collection("posts").orderBy("createdAt","desc").get();t.value=e.docs.map(t=>({...t.data(),id:t.id}))}catch(c){e.value=c.message,console.log(e.value)}};return{posts:t,error:e,load:c}};var B=T;const C={class:"post-list"};function I(t,e,c,n,s,r){const a=Object(o["z"])("SinglePost");return Object(o["s"])(),Object(o["e"])("div",C,[(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(c.posts,t=>(Object(o["s"])(),Object(o["e"])("div",{class:"",key:t.id},[Object(o["h"])(a,{post:t},null,8,["post"])]))),128))])}const A={class:"post"};function H(t,e,c,n,s,r){const a=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",A,[Object(o["h"])(a,{to:{name:"Details",params:{id:c.post.id}}},{default:Object(o["F"])(()=>[Object(o["f"])("h3",null,Object(o["B"])(c.post.title),1)]),_:1},8,["to"]),Object(o["f"])("p",null,Object(o["B"])(n.snippet),1),(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(c.post.tags,t=>(Object(o["s"])(),Object(o["e"])("span",{key:t}," #"+Object(o["B"])(t),1))),128))])}var D=c("a1e9"),V={props:["post"],setup(t){const e=Object(D["c"])(()=>t.post.body.substring(0,100)+"....");return{snippet:e}}};c("2695");const K=p()(V,[["render",H],["__scopeId","data-v-6c31fdda"]]);var M=K,F={props:["posts"],components:{SinglePost:M},setup(t){return Object(o["p"])(()=>{console.log("compontent mounted")}),Object(o["q"])(()=>{console.log("compontent unmounted")}),Object(o["r"])(()=>{console.log("component updated")}),{}}};const E=p()(F,[["render",I]]);var L=E;const q={class:"spin"};function G(t,e){return Object(o["s"])(),Object(o["e"])("div",q)}c("53a2");const J={},U=p()(J,[["render",G],["__scopeId","data-v-21281117"]]);var W=U;const X=t=>(Object(o["v"])("data-v-142fa585"),t=t(),Object(o["t"])(),t),N={class:"tag-cloud"},Q=X(()=>Object(o["f"])("h3",null,"Tags",-1));function R(t,e,c,n,s,r){const a=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",N,[Q,(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(n.tags,t=>(Object(o["s"])(),Object(o["e"])("div",{class:"",key:t},[Object(o["h"])(a,{to:{name:"Tag",params:{tag:t}}},{default:Object(o["F"])(()=>[Object(o["g"])(" #"+Object(o["B"])(t),1)]),_:2},1032,["to"])]))),128))])}const Y=t=>{const e=Object(o["x"])([]),c=new Set;return t.forEach(t=>{t.tags.forEach(t=>c.add(t))}),e.value.push(...c),{tags:e}};var Z=Y,$={props:["posts"],setup(t){const{tags:e}=Z(t.posts);return{tags:e}}};c("bc24");const tt=p()($,[["render",R],["__scopeId","data-v-142fa585"]]);var et=tt,ct={name:"Home",components:{PostList:L,Spinner:W,TagCloud:et},setup(){const{posts:t,error:e,load:c}=B();return c(),{posts:t,error:e}}};c("613e");const ot=p()(ct,[["render",_]]);var nt=ot;const st={key:0},rt={key:1,class:"post"},at={class:"pre"},lt={key:2};function bt(t,e,c,n,s,r){const a=Object(o["z"])("Spinner");return Object(o["s"])(),Object(o["e"])(o["a"],null,[n.error?(Object(o["s"])(),Object(o["e"])("div",st,Object(o["B"])(n.error),1)):Object(o["d"])("",!0),n.post?(Object(o["s"])(),Object(o["e"])("div",rt,[Object(o["f"])("h3",null,Object(o["B"])(n.post.title),1),Object(o["f"])("p",at,Object(o["B"])(n.post.body),1),Object(o["f"])("button",{class:"delete",onClick:e[0]||(e[0]=(...t)=>n.handleClick&&n.handleClick(...t))},"Delete Post")])):(Object(o["s"])(),Object(o["e"])("div",lt,[Object(o["h"])(a)]))],64)}c("d9e2");const ut=t=>{const e=Object(o["x"])(null),c=Object(o["x"])(null),n=async()=>{try{let c=await P.collection("posts").doc(t).get();if(!c.exists)throw Error("That post does not exist.");e.value={...c.data(),id:c.id}}catch(o){c.value=o.message,console.log(c.value)}};return{post:e,error:c,load:n}};var it=ut,pt={props:["id"],components:{Spinner:W},setup(t){const e=Object(g["c"])(),c=Object(g["d"])(),{post:o,error:n,load:s}=it(e.params.id);s();const r=async()=>{await P.collection("posts").doc(t.id).delete(),c.push({name:"Home"})};return{post:o,error:n,handleClick:r}}};c("e4da");const dt=p()(pt,[["render",bt],["__scopeId","data-v-3f97604f"]]);var Ot=dt;const jt={class:"tag"},ft={key:0,class:""},vt={key:1,class:"layout"},gt={key:2,class:""};function ht(t,e,c,n,s,r){const a=Object(o["z"])("PostList"),l=Object(o["z"])("TagCloud"),b=Object(o["z"])("Spinner");return Object(o["s"])(),Object(o["e"])("div",jt,[n.error?(Object(o["s"])(),Object(o["e"])("div",ft,Object(o["B"])(n.error),1)):Object(o["d"])("",!0),n.posts.length?(Object(o["s"])(),Object(o["e"])("div",vt,[Object(o["h"])(a,{posts:n.postsWithTag},null,8,["posts"]),Object(o["h"])(l,{posts:n.posts},null,8,["posts"])])):(Object(o["s"])(),Object(o["e"])("div",gt,[Object(o["h"])(b)]))])}var mt={components:{Spinner:W,PostList:L,TagCloud:et},setup(){const t=Object(g["c"])(),{posts:e,error:c,load:o}=B();o();const n=Object(D["c"])(()=>e.value.filter(e=>e.tags.includes(t.params.tag)));return{error:c,posts:e,postsWithTag:n}}};c("23cd");const yt=p()(mt,[["render",ht]]);var kt=yt;const wt={class:"create"},_t=Object(o["f"])("label",{for:""},"Title:",-1),xt=Object(o["f"])("label",{for:""},"Content:",-1),St=Object(o["f"])("label",{for:""},"Tags (hit enter to add a tag)",-1),Pt=Object(o["f"])("button",null,"Add Post",-1);function zt(t,e,c,n,s,r){return Object(o["s"])(),Object(o["e"])("div",wt,[Object(o["f"])("form",{onSubmit:e[4]||(e[4]=Object(o["I"])((...t)=>n.handleSubmit&&n.handleSubmit(...t),["prevent"]))},[_t,Object(o["G"])(Object(o["f"])("input",{type:"text",required:"","onUpdate:modelValue":e[0]||(e[0]=t=>n.title=t)},null,512),[[o["D"],n.title]]),xt,Object(o["G"])(Object(o["f"])("textarea",{required:"","onUpdate:modelValue":e[1]||(e[1]=t=>n.body=t)},null,512),[[o["D"],n.body]]),St,Object(o["G"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>n.tag=t),onKeydown:e[3]||(e[3]=Object(o["H"])(Object(o["I"])((...t)=>n.handleKeydown&&n.handleKeydown(...t),["prevent"]),["enter"]))},null,544),[[o["D"],n.tag]]),(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(n.tags,t=>(Object(o["s"])(),Object(o["e"])("div",{class:"pill",key:t},"#"+Object(o["B"])(t),1))),128)),Pt],32)])}var Tt={setup(){const t=Object(o["x"])(""),e=Object(o["x"])(""),c=Object(o["x"])(""),n=Object(o["x"])([]),s=Object(g["d"])(),r=()=>{n.value.includes(c.value)||(c.value=c.value.replace(/\s/,""),n.value.push(c.value)),c.value=""},a=async()=>{let c={title:t.value,body:e.value,tags:n.value,createdAt:z()};try{await P.collection("posts").add(c);s.push({name:"Home"})}catch(o){console.log(o.message)}};return{title:t,body:e,tag:c,tags:n,handleKeydown:r,handleSubmit:a}}};c("fd32");const Bt=p()(Tt,[["render",zt]]);var Ct=Bt;const It=[{path:"/",name:"Home",component:nt},{path:"/posts/:id",name:"Details",component:Ot,props:!0},{path:"/tags/:tag",name:"Tag",component:kt,props:!0},{path:"/create",name:"Create",component:Ct}],At=Object(g["a"])({history:Object(g["b"])("/vue3_compositionApi_blog/"),routes:It});var Ht=At;Object(o["c"])(v).use(Ht).mount("#app")},"5bf6":function(t,e,c){},"613e":function(t,e,c){"use strict";c("04e2")},b410:function(t,e,c){},bc24:function(t,e,c){"use strict";c("d48b")},bd17:function(t,e,c){},cc8d:function(t,e,c){},d48b:function(t,e,c){},e4da:function(t,e,c){"use strict";c("40c2")},f25d:function(t,e,c){"use strict";c("cc8d")},fd32:function(t,e,c){"use strict";c("5bf6")}});
//# sourceMappingURL=app.85455fb5.js.map