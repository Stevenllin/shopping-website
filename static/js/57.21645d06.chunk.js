"use strict";(self.webpackChunkshopping_website=self.webpackChunkshopping_website||[]).push([[57],{9057:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(2791),a=n(364),c=n(6620),s=n(184),i=function(){var e=(0,a.v9)((function(e){return e.common.category}));return(0,s.jsx)("section",{id:"index-showcase",children:(0,s.jsx)("div",{className:"index-showcase",children:(0,s.jsx)("div",{className:"menu",children:(0,s.jsx)("div",{className:"context",children:(0,s.jsx)("ul",{children:e.map((function(e){return(0,s.jsx)("li",{"data-testid":"category",children:(0,s.jsx)("a",{href:"/#",onClick:function(t){return c.Z.handleWindowScrollToTargetSection(t,e)},children:e.toUpperCase()})},e)}))})})})})})},o=n(8563),l=n(2558),u=function(){return(0,s.jsx)("section",{id:"announcement",children:(0,s.jsx)("div",{className:"announcement",children:(0,s.jsx)(o.tq,{height:10,hashNavigation:!0,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,modules:[l.pt,l.tl,l.W_],speed:1e3,children:[{id:1,text:"Lorem ipsum dolor sit amet, mea prompta tractatos ea."},{id:2,text:"In est timeam intellegam, error consequuntur ius no."},{id:3,text:"Prima placerat quo et, te usu dicat affert soluta."}].map((function(e){return(0,s.jsx)(o.o5,{className:"d-flex align-items-center justify-content-center",children:(0,s.jsx)("p",{className:"mb-0",children:e.text})},e.id)}))})})})},d=n(4165),h=n(5861),m=n(885),x=n(7325),p=n(4664),f=n(8530),g=function(e){var t=(0,x.k6)(),n=(0,r.useState)([]),a=(0,m.Z)(n,2),i=a[0],o=a[1];(0,r.useEffect)((function(){return(0,h.Z)((0,d.Z)().mark((function t(){var n;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.getProductsCategory(e.category);case 2:(n=t.sent).length&&o(n);case 4:case"end":return t.stop()}}),t)})))(),function(){o([])}}),[e.category]);var l=function(){var e=(0,h.Z)((0,d.Z)().mark((function e(n){var r;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.getSingleProduct(n);case 2:(r=e.sent)&&t.push({pathname:p.Z.PRODUCT_DETAIL,state:{detail:r}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.jsx)("section",{id:e.category,className:"content-section",children:(0,s.jsxs)("div",{className:"context",children:[(0,s.jsx)("h3",{"aria-label":"product-".concat(e.category),className:"text-center section-title",children:e.category.toUpperCase()}),(0,s.jsxs)("div",{className:"product-container",children:[0===i.length&&[0,1,2,3].map((function(t){return(0,s.jsx)("div",{"aria-label":"".concat(e.category,"-box"),className:"box",children:(0,s.jsx)("div",{className:"lds-box"})},t)})),i.length>0&&i.map((function(e){return(0,s.jsxs)("div",{className:"product",children:[(0,s.jsx)("img",{src:e.image,alt:e.id.toString(),height:300,loading:"lazy",onClick:function(){return l(e.id)}}),(0,s.jsx)("p",{children:e.title.substring(0,50)}),(0,s.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,s.jsxs)("p",{className:"m-0",children:["$ ",Math.floor(e.price)]}),(0,s.jsx)("button",{type:"button",className:"button-main",onClick:function(){return c.Z.handleAddProductToCart(e)},children:"Add to cart"})]})]},e.id)}))]})]})})},j=g,v=function(){var e=(0,a.v9)((function(e){return e.common.category}));return(0,s.jsxs)("div",{id:"home-main-page",children:[(0,s.jsx)(u,{}),(0,s.jsx)(i,{}),e.length>0&&e.map((function(e){return(0,s.jsx)(j,{category:e},e)}))]})}}}]);
//# sourceMappingURL=57.21645d06.chunk.js.map