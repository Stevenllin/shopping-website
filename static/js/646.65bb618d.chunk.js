"use strict";(self.webpackChunkshopping_website=self.webpackChunkshopping_website||[]).push([[646],{1646:function(e,n,s){s.r(n);var i=s(4165),l=s(5861),c=s(885),t=s(2791),a=s(364),d=s(7325),r=s(8530),o=s(8820),u=s(4373),m=s(4102),h=s(2583),v=s(6620),x=s(4664),f=s(184);n.default=function(){var e=(0,d.k6)(),n=(0,a.I0)(),s=(0,a.v9)((function(e){return e.common.member})),j=(0,a.v9)((function(e){return e.features.cart})),p=(0,t.useState)([]),N=(0,c.Z)(p,2),b=N[0],y=N[1],C=(0,t.useState)([]),g=(0,c.Z)(C,2),w=g[0],Z=g[1];(0,t.useEffect)((function(){(0,l.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.Z.getProducts();case 2:n=e.sent,y(n);case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,t.useEffect)((function(){var e=j.products.map((function(e){var n;return{quantity:e.quantity,detail:null!==(n=b.find((function(n){return n.id===e.productId})))&&void 0!==n?n:null}}));Z(e)}),[j,b]);var k=(0,t.useMemo)((function(){var e=0;return w.forEach((function(n){var s;n.detail&&(e+=n.quantity*(null===(s=n.detail)||void 0===s?void 0:s.price))})),e}),[w]);return(0,f.jsx)("div",{id:"confirm-info",children:(0,f.jsxs)("div",{className:"context content-section",children:[(0,f.jsx)("h3",{className:"text-center section-title",children:"CUSTOMER'S INFORMATION"}),(0,f.jsxs)("section",{id:"customer-info",children:[(0,f.jsxs)("div",{className:"row mb-3",children:[(0,f.jsx)("div",{className:"col-3",children:(0,f.jsx)("p",{className:"info-label",children:"Firstname:"})}),(0,f.jsx)("div",{className:"col-3",children:(0,f.jsx)("p",{children:null===s||void 0===s?void 0:s.name.firstname})}),(0,f.jsx)("div",{className:"col-3",children:(0,f.jsx)("p",{className:"info-label",children:"Lastname:"})}),(0,f.jsx)("div",{className:"col-3",children:(0,f.jsx)("p",{children:null===s||void 0===s?void 0:s.name.lastname})})]}),(0,f.jsxs)("div",{className:"row mb-3",children:[(0,f.jsx)("div",{className:"col-3",children:(0,f.jsx)("p",{className:"info-label",children:"Phone:"})}),(0,f.jsx)("div",{className:"col-3",children:(0,f.jsx)("p",{children:null===s||void 0===s?void 0:s.phone})}),(0,f.jsx)("div",{className:"col-3",children:(0,f.jsx)("p",{className:"info-label",children:"Email:"})}),(0,f.jsx)("div",{className:"col-3",children:(0,f.jsx)("p",{children:null===s||void 0===s?void 0:s.email})})]}),(0,f.jsxs)("div",{className:"row mb-3",children:[(0,f.jsx)("div",{className:"col-3",children:(0,f.jsx)("p",{className:"info-label m-0",children:"Address:"})}),(0,f.jsx)("div",{className:"col-9",children:(0,f.jsxs)("p",{className:"m-0",children:[null===s||void 0===s?void 0:s.address.zipcode," ",null===s||void 0===s?void 0:s.address.city," ",null===s||void 0===s?void 0:s.address.street]})})]})]}),(0,f.jsx)("h3",{className:"text-center section-title",children:"CART'S INFORMATION"}),(0,f.jsx)("section",{id:"cart-info",children:w.length>0&&w.map((function(e,n){var s,i,l,c;return(0,f.jsxs)("div",{className:"row mb-5",children:[(0,f.jsx)("div",{className:"col-6 d-flex justify-content-center",children:(0,f.jsx)("img",{src:null===(s=e.detail)||void 0===s?void 0:s.image,alt:null===(i=e.detail)||void 0===i?void 0:i.title,height:300})}),(0,f.jsxs)("div",{className:"col-6 p-5 d-flex flex-column justify-content-around",children:[(0,f.jsx)("h4",{children:null===(l=e.detail)||void 0===l?void 0:l.title}),(0,f.jsxs)("div",{className:"d-flex align-items-center",children:[(0,f.jsx)("button",{type:"button",className:"me-4",children:(0,f.jsx)(o.n6z,{className:"icons-md icons-grey",onClick:function(){return v.Z.handleRemoveProductFromCart(e.detail)}})}),(0,f.jsx)("p",{className:"m-0",children:e.quantity}),(0,f.jsx)("button",{type:"button",className:"ms-4",onClick:function(){return v.Z.handleAddProductToCart(e.detail)},children:(0,f.jsx)(u.S$f,{className:"icons-md icons-grey"})})]}),(0,f.jsxs)("p",{children:["$ ",null===(c=e.detail)||void 0===c?void 0:c.price]})]})]},n)}))}),(0,f.jsx)("div",{className:"d-flex justify-content-end",children:(0,f.jsxs)("p",{children:["Total Price: ",k]})}),(0,f.jsx)("div",{className:"d-flex justify-content-center",children:(0,f.jsx)("button",{type:"button",className:"button-main",onClick:function(){n((0,m.pd)(h.V6[x.Z.PAY_CLAUSE])),e.push(x.Z.PAY_CLAUSE)},children:"NEXT"})})]})})}},4102:function(e,n,s){s.d(n,{pd:function(){return l},qI:function(){return c}});var i=s(9889),l=function(e){return{type:i.We,payload:{step:e}}},c=function(){return{type:typeof i.dp}}}}]);
//# sourceMappingURL=646.65bb618d.chunk.js.map