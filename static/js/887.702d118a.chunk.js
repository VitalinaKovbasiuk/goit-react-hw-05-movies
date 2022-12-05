"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[887],{308:function(n,e,r){r.d(e,{GC:function(){return d},M1:function(){return l},Pg:function(){return p},rj:function(){return u},tx:function(){return f}});var t=r(861),a=r(687),c=r.n(a),i=r(388),s="406252fd7e7d93d0158a6e1609e77c75",o="https://api.themoviedb.org/3/",u=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},887:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,a,c,i=r(885),s=r(791),o=r(689),u=r(308),d=r(731),p=r(7),l=r.n(p),f=r(168),h=r(934),v=h.Z.h4(t||(t=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),x=h.Z.li(a||(a=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),g=(h.Z.a(c||(c=(0,f.Z)(["\n  color: #888888;\n\n    &:hover,\n    :focus {\n        color: #000000;\n    }\n"]))),r(184)),m=[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}];m.propTypes={location:l().shape({pathname:l().string.isRequired,search:l().string.isRequired,key:l().string.isRequired,hash:l().string,state:l().bool}).isRequired};var b,j,k,Z=function(n){var e=n.location;return(0,g.jsxs)("div",{children:[(0,g.jsx)(v,{children:"Addititonal information"}),(0,g.jsx)("ul",{children:m.map((function(n){var r=n.href,t=n.text;return(0,g.jsx)(x,{children:(0,g.jsx)(d.rU,{to:r,state:{from:e},children:t})},r)}))}),(0,g.jsx)("hr",{})]})},w=h.Z.div(b||(b=(0,f.Z)(["\ndisplay: flex;\n    align-items: center;\n"]))),_=function(n){var e=n.movie,r=e.title,t=e.name,a=e.overview,c=e.genres,i=e.release_date,s=e.first_air_date,o=e.poster_path,u=e.vote_average,d=Math.round(10*u),p=o?"https://image.tmdb.org/t/p/w500".concat(o):"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)("img",{src:p,alt:r||t,width:"200"}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("h2",{children:[r||t," (",(s||i).slice(0,4),")"]}),(0,g.jsxs)("p",{children:["User Score: ",d,"%"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:a}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("p",{children:c.map((function(n){return n.name})).join(", ")})]})]}),(0,g.jsx)("hr",{})]})},y=r(185),U=h.Z.div(j||(j=(0,f.Z)(["\n margin-bottom: 10px;\n"]))),S=(h.Z.link(k||(k=(0,f.Z)(["\n   display: inline-flex;\n    align-items: center;\n    padding: 3px 10px;\n    background-color: #dddddd;\n    font-size: 14px;\n    color: #515151;\n\n    border-radius: 5px;\n    border: 1px solid #bbbbbb;\n\n    &:hover,\n    :focus {\n        color: #dddddd;\n        background-color: #212121;\n    }\n"]))),function(n){var e=n.backLinkHref;return(0,g.jsx)(U,{children:(0,g.jsxs)(d.rU,{to:e,children:[(0,g.jsx)(y.i1r,{size:20}),"Go back"]})})}),q=r(189),R=function(){var n,e,r=(0,s.useState)(null),t=(0,i.Z)(r,2),a=t[0],c=t[1],d=(0,o.UO)().movieId,p=null!==(n=null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,s.useEffect)((function(){u.Pg(d).then((function(n){c(n)})).catch(console.log)}),[d]),a)return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(S,{backLinkHref:p}),(0,g.jsx)(_,{movie:a}),(0,g.jsx)(Z,{location:p}),(0,g.jsx)(s.Suspense,{fallback:(0,g.jsx)(q.Z,{}),children:(0,g.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=887.702d118a.chunk.js.map