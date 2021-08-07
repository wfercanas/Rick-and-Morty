(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(7),s=a.n(n),i=(a(17),a(2)),o=a(0),h=Object(r.createContext)(!1),l=function(e){var t=e.children,a=Object(r.useState)(!1),c=Object(i.a)(a,2),n=c[0],s=c[1];return Object(o.jsx)(h.Provider,{value:[n,s],children:t})},j=a(8),u=a(9),d=a(12),O=a(10),b=function(e){Object(d.a)(a,e);var t=Object(O.a)(a);function a(e){var r;return Object(j.a)(this,a),(r=t.call(this,e)).state={hasError:!1},r}return Object(u.a)(a,[{key:"render",value:function(){return this.state.hasError?(console.log("Error: ".concat(this.state.hasError)),Object(o.jsx)("h1",{children:"Oops!! Something failed... please try again soon"})):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log("".concat(e)),{hasError:!0}}}]),a}(c.a.Component),f=(a(19),function(){var e=Object(r.useContext)(h),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(o.jsxs)("div",{className:a?"Header dark":"Header light",children:[Object(o.jsx)("h1",{children:"The Rick and Morty API"}),Object(o.jsx)("button",{type:"button",onClick:function(){c(!a)},className:a?"Button dark":"Button light",children:a?"\ud83c\udf1e":"\ud83c\udf19"})]})}),m={favoriteCharacters:[]},v=a(11),x=a(4),C=function(e,t){switch(t.type){case"ADD_TO_FAVORITES":return e.favoriteCharacters.some((function(e){return e.id===t.payload.id}))?e:Object(x.a)(Object(x.a)({},e),{},{favoriteCharacters:[].concat(Object(v.a)(e.favoriteCharacters),[t.payload])});case"REMOVE_FROM_FAVORITES":return Object(x.a)(Object(x.a)({},e),{},{favoriteCharacters:e.favoriteCharacters.filter((function(e){return e.id!==t.payload.id}))});default:return e}},p=(a(20),function(e){var t=e.favorites,a=Object(r.useContext)(h),c=Object(i.a)(a,1)[0];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:c?"Title dark":"Title",children:"Favorites"}),Object(o.jsx)("ul",{className:c?"Favorites dark":"Favorites",children:t.map((function(e){return Object(o.jsx)("li",{className:"Favorites__avatar",children:Object(o.jsx)("img",{src:e.image,className:"Favorites__avatar--image",alt:"Avatar of character"})},e.id)}))})]})}),_=function(e){var t=e.character,a=e.handleClick,c=Object(r.useContext)(h),n=Object(i.a)(c,1)[0],s=Object(r.useState)(!1),l=Object(i.a)(s,2),j=l[0],u=l[1];return Object(o.jsxs)("article",{className:n?"Character dark":"Character",children:[Object(o.jsx)("div",{className:"Character__image",style:{backgroundImage:"url(".concat(t.image,")")}}),Object(o.jsxs)("div",{className:"Character__data",children:[Object(o.jsx)("h3",{className:"Character__data--name",children:t.name}),Object(o.jsxs)("p",{className:"Character__data--meta",children:[t.status," - ",t.species]}),Object(o.jsx)("p",{className:"Character__data--subtitle",children:"Last known location:"}),Object(o.jsx)("p",{className:"Character__data--value",children:t.location.name}),Object(o.jsx)("p",{className:"Character__data--subtitle",children:"Origin:"}),Object(o.jsx)("p",{className:"Character__data--value",children:t.origin.name}),Object(o.jsx)("button",{className:"Character__favButton",onClick:function(){a(t),u(!j)},children:j?"\ud83e\udde1":"\ud83e\udd0d"})]})]},t.id)},g=(a(21),function(e){var t=e.handleSearch,a=e.search,c=Object(r.useContext)(h),n=Object(i.a)(c,1)[0];return Object(o.jsx)("div",{className:n?"Search dark":"Search light",children:Object(o.jsx)("input",{className:n?"SearchInput dark":"SearchInput light",type:"text",onChange:t,value:a,placeholder:"Search a character"})})}),k=(a(22),function(e){var t=e.characters,a=e.handleClick,c=e.handleSearch,n=e.search,s=Object(r.useContext)(h),l=Object(i.a)(s,1)[0];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:l?"Title dark":"Title",children:"List of characters"}),Object(o.jsx)(g,{handleSearch:c,search:n}),Object(o.jsx)("section",{className:l?"Characters dark":"Characters",children:t.map((function(e){return Object(o.jsx)(_,{character:e,handleClick:a},e.id)}))})]})}),N=function(){var e=function(e){var t=Object(r.useState)([]),a=Object(i.a)(t,2),c=a[0],n=a[1];return Object(r.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return n(e.results)})).catch((function(e){throw new Error("Couldn't get the data:".concat(e))}))}),[e]),c}("https://rickandmortyapi.com/api/character"),t=Object(r.useReducer)(C,m),a=Object(i.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(""),h=Object(i.a)(s,2),l=h[0],j=h[1],u=Object(r.useMemo)((function(){return l?e.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})):e}),[e,l]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{favorites:c.favoriteCharacters}),Object(o.jsx)(k,{characters:u,handleClick:function(e){c.favoriteCharacters.some((function(t){return t.id===e.id}))?n({type:"REMOVE_FROM_FAVORITES",payload:e}):n({type:"ADD_TO_FAVORITES",payload:e})},handleSearch:function(e){var t=e.target;j(t.value)},search:l})]})};var S=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(b,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(N,{})]})})};s.a.render(Object(o.jsx)(l,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9cd8a1a7.chunk.js.map