(this["webpackJsonppractica-jest-redux"]=this["webpackJsonppractica-jest-redux"]||[]).push([[0],{79:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),r=n(26),a=n.n(r),o=n(107),s=n(35),d=n(9),j=n(100),u=n(102),l=n(55),p=n.n(l),m=n(18),b=n(3),O=Object(j.a)((function(t){return{root:{display:"flex",justifyContent:"space-around"}}})),h=function(){var t=Object(m.d)((function(t){return t.shopping.cart.length})),e=O();return Object(b.jsxs)(u.a,{container:!0,className:e.root,children:[Object(b.jsx)(u.a,{item:!0,children:Object(b.jsx)("h1",{children:Object(b.jsx)(s.b,{to:"/",children:"Tienda"})})}),Object(b.jsx)(u.a,{item:!0,children:Object(b.jsx)("h1",{children:Object(b.jsxs)(s.b,{to:"/Shopping",children:[Object(b.jsx)(p.a,{}),t]})})})]})},x=function(t){var e=t.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),e]})},f=n(111),g=n(104),v=n(105),y=n(106),C=n(108),E=n(110),_=Object(j.a)((function(t){return{root:{display:"flex",flexDirection:"column",justifyContent:"space-between"},image:{objectFit:"contain"},textDescriptionContainer:{textAlign:"center"}}})),w=Object(m.b)()((function(t){var e=t.textBotton,n=t.product,c=t.handleAction,i=_();return Object(b.jsx)(E.a,{sx:{width:330,margin:2,justifyContent:"center"},children:Object(b.jsxs)(f.a,{className:i.root,children:[Object(b.jsx)(g.a,{component:"img",height:"230",image:n.image,alt:n.title}),Object(b.jsxs)(v.a,{className:i.textDescriptionContainer,children:[Object(b.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:n.title}),Object(b.jsx)(y.a,{variant:"body2",children:n.description}),Object(b.jsx)(y.a,{variant:"body2",children:n.price})]}),Object(b.jsx)(C.a,{variant:"contained",onClick:c(n),children:e})]})})})),N="INCREMENT",D="DECREMENT",A="RESETCOUNTER",T="ADD_TO_CART",R="REMOVE_FROM_CART",S=Object(j.a)((function(t){return{root:{display:"flex",justifyContent:"center"}}})),k={add_to_cart:function(t){return{type:T,payload:t}}},L=Object(m.b)((function(t){return{products:t.shopping.products}}),k)((function(t){var e=S(),n=t.products,c=function(e){return function(){t.add_to_cart(e)}};return Object(b.jsx)(u.a,{container:!0,className:e.root,children:n.map((function(t){return Object(b.jsx)(u.a,{item:!0,sm:12,md:6,lg:4,children:Object(b.jsx)(w,{textBotton:"Agregar",product:t,handleAction:c})},t.id)}))})})),M=Object(j.a)((function(t){return{root:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),z=function(){var t=M();Object(m.d)((function(t){return t.counter})),Object(m.c)();return Object(b.jsx)(u.a,{container:!0,className:t.root,children:Object(b.jsx)(u.a,{item:!0,children:Object(b.jsx)(L,{})})})},B=Object(j.a)((function(t){return{root:{display:"flex"},textDescriptionContainer:{textAlign:"center"}}})),F={removeFromCart:function(t){return{type:R,payload:t}}},I=Object(m.b)((function(t){return{products:t.shopping.cart}}),F)((function(t){var e=t.products,n=B(),c=function(e){return function(){t.removeFromCart(e)}};return Object(b.jsx)(u.a,{container:!0,className:n.root,children:e.map((function(t){return Object(b.jsx)(u.a,{lg:4,item:!0,children:Object(b.jsx)(w,{textBotton:"Eliminar",product:t,handleAction:c})},t.id)}))})})),J=Object(j.a)((function(t){return{root:{display:"flex",flexDirection:"column",textAlign:"center"}}})),P=function(){var t=J();return Object(b.jsxs)(u.a,{container:!0,className:t.root,children:[Object(b.jsx)(u.a,{item:!0,children:Object(b.jsx)(y.a,{variant:"h2",children:"lista de pedidos"})}),Object(b.jsx)(u.a,{item:!0,children:Object(b.jsx)(I,{})})]})},U=function(){return Object(b.jsx)(s.a,{children:Object(b.jsx)(x,{children:Object(b.jsx)(d.c,{children:Object(b.jsxs)(o.a,{fixed:!0,children:[Object(b.jsx)(d.a,{exact:!0,path:"/",component:z}),Object(b.jsx)(d.a,{exact:!0,path:"/Shopping",component:P})]})})})})},V=n(31),X=n(57),H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return t+1;case D:return t-1;case A:return 0;default:return t}},q=n(23),G=n(37),K={cart:[],products:[{id:"1",image:"https://arepa.s3.amazonaws.com/camiseta.png",title:"Camiseta",price:25,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"3",image:"https://arepa.s3.amazonaws.com/mug.png",title:"Mug",price:10,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"4",image:"https://arepa.s3.amazonaws.com/pin.png",title:"Pin",price:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"5",image:"https://arepa.s3.amazonaws.com/stickers1.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"6",image:"https://arepa.s3.amazonaws.com/stickers2.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"7",image:"https://arepa.s3.amazonaws.com/hoodie.png",title:"Hoodie",price:35,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return Object(G.a)(Object(G.a)({},t),{},{cart:[].concat(Object(q.a)(t.cart),[e.payload])});case R:return Object(G.a)(Object(G.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload.id}))});default:return t}},W=Object(V.b)({counter:H,shopping:Q}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.c,Z=Object(V.d)(W,Y(Object(V.a)(X.a)));a.a.render(Object(b.jsx)(m.a,{store:Z,children:Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(U,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.6ced5d20.chunk.js.map