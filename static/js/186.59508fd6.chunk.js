"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{976:function(n,t,e){e.d(t,{Av:function(){return i},Yc:function(){return s},dU:function(){return u},gW:function(){return o},zo:function(){return f}});var c=e(44),r="35c9323b204760b5af2587bbf9b07e41",a="https://api.themoviedb.org/3";function u(){return c.ZP.get("".concat(a,"/trending/movie/day?api_key=").concat(r)).then((function(n){return n.data.results}))}function i(n){return c.ZP.get("".concat(a,"/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(n)).then((function(n){return n.data.results}))}function o(n){return c.ZP.get("".concat(a,"/movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data}))}function f(n){return c.ZP.get("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data.cast}))}function s(n){return c.ZP.get("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.data.results}))}},186:function(n,t,e){e.r(t);var c=e(885),r=e(689),a=e(791),u=e(976),i=e(184);t.default=function(){var n=(0,r.UO)().movieId,t=(0,a.useState)(null),e=(0,c.Z)(t,2),o=e[0],f=e[1];return(0,a.useEffect)((function(){(0,u.Yc)(n).then((function(n){return f(n)}))}),[n]),o?0===o.length?"We don`t have any revlews for this movie":(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:o.map((function(n){var t=n.id,e=n.author,c=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:e}),(0,i.jsx)("p",{children:c})]},t)}))})})}):null}}}]);
//# sourceMappingURL=186.59508fd6.chunk.js.map