(this.webpackJsonpburguerapp=this.webpackJsonpburguerapp||[]).push([[0],[,,function(e,t,r){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__11fVa",BreadTop:"BurgerIngredients_BreadTop__odDQ2",Seeds1:"BurgerIngredients_Seeds1__rGnnK",Seeds2:"BurgerIngredients_Seeds2__3XY2r",Meat:"BurgerIngredients_Meat__1cdrX",Cheese:"BurgerIngredients_Cheese__3vENQ",Salad:"BurgerIngredients_Salad__-hFkn",Bacon:"BurgerIngredients_Bacon__aVYvZ"}},function(e,t,r){e.exports={BuildControl:"BuildControl_BuildControl__1Sk_z",Label:"BuildControl_Label__2-ktg",Less:"BuildControl_Less__2yzrF",More:"BuildControl_More__1JIOc"}},,function(e,t,r){e.exports={Content:"Layout_Content__Afbgo",Thread:"Layout_Thread__3TwZP"}},,,,,function(e,t,r){e.exports={Burguer:"Burguer_Burguer__4sAtI"}},function(e,t,r){e.exports={BuildControls:"BuildControls_BuildControls__2d_XX"}},,,,,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(1),s=r(7),c=r.n(s),i=(r(20),function(e){return e.children}),o=r(5),d=r.n(o),l=function(e){return Object(a.jsxs)(i,{children:[Object(a.jsx)("div",{className:d.a.Thread,children:"Toolbar,sidedrawer,Backdrop"}),Object(a.jsx)("main",{className:d.a.Content,children:e.children})]})},u=r(6),b=r(8),j=r(9),_=r(14),g=r(12),B=r(13),m=r(10),p=r.n(m),O=r(2),h=r.n(O),x=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(a.jsx)("div",{className:h.a.BreadBottom});break;case"bread-top":t=Object(a.jsxs)("div",{className:h.a.BreadTop,children:[Object(a.jsx)("div",{className:h.a.Seeds1}),Object(a.jsx)("div",{className:h.a.Seeds2})]});break;case"meat":t=Object(a.jsx)("div",{className:h.a.Meat});break;case"cheese":t=Object(a.jsx)("div",{className:h.a.Cheese});break;case"salad":t=Object(a.jsx)("div",{className:h.a.Salad});break;case"bacon":t=Object(a.jsx)("div",{className:h.a.Bacon});break;default:t=null}return t},v=function(e){var t=Object.keys(e.igredients).map((function(t){return Object(B.a)(Array(e.igredients[t])).map((function(e,r){return Object(a.jsx)(x,{type:t},t+r)}))}));return console.log(t),Object(a.jsxs)("div",{className:p.a.Burguer,children:[Object(a.jsx)(x,{type:"bread-top"}),t,Object(a.jsx)(x,{type:"bread-bottom"})]})},f=r(11),C=r.n(f),k=r(3),y=r.n(k),N=function(e){return Object(a.jsxs)("div",{className:y.a.BuildControl,children:[Object(a.jsx)("div",{className:y.a.Label,children:e.label}),Object(a.jsx)("button",{onClick:e.removeMore,className:y.a.Less,children:"Less"}),Object(a.jsx)("button",{onClick:e.clickMore,className:y.a.More,children:"More"})]})},I=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"},{label:"Cheese",type:"cheese"}],S=function(e){return Object(a.jsx)("div",{className:C.a.BuildControls,children:I.map((function(t){return Object(a.jsx)(N,{removeMore:function(){return e.removeAgain(t.type)},clickMore:function(){return e.clickAgain(t.type)},label:t.label},t.label)}))})},M=function(e){Object(_.a)(r,e);var t=Object(g.a)(r);function r(){var e;Object(b.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={igredients:{salad:0,meat:0,bacon:0,cheese:0}},e.addIgredient=function(t){var r=e.state.igredients[t]+1,a=Object(u.a)({},e.state.igredients);a[t]=r,e.setState({igredients:a})},e.removeIgredient=function(t){var r=e.state.igredients[t];if(0!=r){var a=r-1,n=Object(u.a)({},e.state.igredients);n[t]=a,e.setState({igredients:n})}},e}return Object(j.a)(r,[{key:"render",value:function(){return Object(a.jsxs)(i,{children:[Object(a.jsx)(v,{igredients:this.state.igredients}),Object(a.jsx)(S,{removeAgain:this.removeIgredient,clickAgain:this.addIgredient})]})}}]),r}(n.Component),L=function(){return Object(a.jsx)(l,{children:Object(a.jsx)(M,{})})};c.a.render(Object(a.jsx)(L,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.54eefcc9.chunk.js.map