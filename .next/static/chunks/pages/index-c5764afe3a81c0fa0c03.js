_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"HaE+":function(e,n,t){"use strict";function s(e,n,t,s,r,i,c){try{var u=e[i](c),a=u.value}catch(o){return void t(o)}u.done?n(a):Promise.resolve(a).then(s,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var c=e.apply(n,t);function u(e){s(c,r,i,u,a,"next",e)}function a(e){s(c,r,i,u,a,"throw",e)}u(void 0)}))}}t.d(n,"a",(function(){return r}))},K64n:function(e,n,t){"use strict";n.Headers=self.Headers,n.Request=self.Request,n.Response=self.Response,n.fetch=self.fetch},LpSC:function(e,n,t){t("K64n"),e.exports=self.fetch.bind(self)},RNiq:function(e,n,t){"use strict";t.r(n);var s=t("o0o1"),r=t.n(s),i=t("HaE+"),c=t("nKUr"),u=t("8Kt/"),a=t.n(u),o=t("rQ2n"),l=t("LpSC"),f=t.n(l),d=t("nOHt"),j=t.n(d),p=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("ul",{className:"list-group",children:e.users.map((function(e){return Object(c.jsxs)("li",{className:"list-group-item  list-group-item-action d-flex justify-content-between align=items=center ",onClick:function(){return j.a.push("/users/[id]","/users/$(user.id}")},children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("h5",{children:[e.id,". ",e.first_name," ",e.last_name]}),Object(c.jsxs)("p",{children:["Email: ",e.email]})]}),Object(c.jsx)("img",{src:e.avatar,alt:e.first_name+e.last_name,style:{borderRadius:"50%"}})]},e.id)}))})})},h=function(e){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(a.a,{children:Object(c.jsx)("title",{children:"Next.js Project - Home"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Next"}),Object(c.jsx)(p,{users:e.users})]})]})};h.getInitialProps=function(){var e=Object(i.a)(r.a.mark((function e(n){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://reqres.in/api/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",{users:s.data});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=h},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1,3]]]);