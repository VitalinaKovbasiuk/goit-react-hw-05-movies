"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[366],{308:function(n,t,e){e.d(t,{GC:function(){return p},M1:function(){return f},Pg:function(){return d},rj:function(){return s},tx:function(){return l}});var r=e(861),a=e(687),c=e.n(a),u=e(388),i="406252fd7e7d93d0158a6e1609e77c75",o="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},366:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c,u,i=e(885),o=e(791),s=e(689),p=e(308),d=e(168),f=e(934),l=f.Z.img(r||(r=(0,d.Z)(["\n    margin-right: 15px;\n"]))),h=f.Z.li(a||(a=(0,d.Z)(["\n     display: flex;\n\n    &:not(:last-child) {\n        margin-bottom: 15px;\n    }\n"]))),g=f.Z.div(c||(c=(0,d.Z)(["\n display: flex;\n    align-items: center;\n    text-align: center;\n    width: 100px;\n    height: 150px;\n    margin-right: 15px;\n    background-color: #dddddd;\n"]))),v=(f.Z.ul(u||(u=(0,d.Z)(["\n   padding: 0;\n"]))),e(184)),x=function(){var n=(0,o.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,s.UO)().movieId;if((0,o.useEffect)((function(){p.M1(a).then((function(n){return r(n)})).catch(console.log)}),[a]),e)return(0,v.jsx)(v.Fragment,{children:e.length>0?(0,v.jsx)("ul",{children:e.slice(0,19).map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,v.jsxs)(h,{children:[a?(0,v.jsx)(l,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:e,width:"100"}):(0,v.jsx)(g,{children:"Image not found"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:(0,v.jsx)("b",{children:e})}),(0,v.jsxs)("p",{children:["Character: ",(0,v.jsx)("b",{children:r})]})]})]},t)}))}):(0,v.jsx)("div",{children:"No casts"})})}}}]);
//# sourceMappingURL=366.cffbe975.chunk.js.map