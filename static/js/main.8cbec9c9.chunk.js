(this["webpackJsonpmini-me"]=this["webpackJsonpmini-me"]||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),r=n.n(i),o=n(22),a=n.n(o),s=n(12),l=n(2),u=l.b.div.withConfig({displayName:"styles__Layout",componentId:"sc-1azshls-0"})(["width:100%;height:100vh;background:#e6a0a0;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),d=l.b.div.withConfig({displayName:"styles__Contents",componentId:"sc-1azshls-1"})(["width:100%;max-width:36rem;max-height:100vh;background:#e6a0a0;display:flex;flex-direction:column;justify-content:center;align-items:center;@media screen and (min-width:","px){max-width:72rem;flex-direction:row;}"],640),h=l.b.div.withConfig({displayName:"styles__ResultContainer",componentId:"sc-1azshls-2"})(["width:36rem;height:36rem;background:#fff;"]),b=l.b.div.withConfig({displayName:"styles__AssetListContainer",componentId:"sc-1azshls-3"})(["width:36rem;overflow-y:scroll;::-webkit-scrollbar{width:1px;}::-webkit-scrollbar-track{display:none;}"]),m=n(15),g=l.b.div.withConfig({displayName:"styles__Layout",componentId:"sc-16k30c-0"})(["width:100%;display:flex;flex-direction:column;"]),p=l.b.div.withConfig({displayName:"styles__Title",componentId:"sc-16k30c-1"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;height:3rem;font-size:1.4rem;background-color:#ddd;"]),f=l.b.div.withConfig({displayName:"styles__BoxContainer",componentId:"sc-16k30c-2"})(["display:flex;flex-direction:row;background-color:#eee;"]),j=l.b.div.withConfig({displayName:"styles__Box",componentId:"sc-16k30c-3"})(["width:6rem;height:6rem;background-color:",";"],(function(e){return e.isSelected?"#9af367":"white"})),x=l.b.div.withConfig({displayName:"styles__ImageSlice",componentId:"sc-16k30c-4"})(["width:100%;height:100%;background-image:url(",");background-position:calc(0px - 60px * ",");filter:hue-rotate(calc("," * 3.6deg)) saturate(calc(","% * 2)) brightness(calc(","% * 2)) contrast(calc(max(200% - ","% * 2,100%)));"],(function(e){return e.src}),(function(e){return e.index}),(function(e){return e.hue}),(function(e){return e.sat}),(function(e){return e.bri}),(function(e){return e.bri})),y=n(14);function w(){var e=Object(y.a)(["\n  0% { top: 0px; opacity: 0; } \n  100% { top: -30px; opacity: 1; }\n"]);return w=function(){return e},e}var O=Object(l.c)(w()),C=l.b.div.withConfig({displayName:"styles__Layout",componentId:"j7makn-0"})(["width:100%;height:7rem;display:flex;flex-direction:column;justify-content:center;align-items:center;background:pink;"]),k=l.b.input.withConfig({displayName:"styles__RangeInput",componentId:"j7makn-1"})(["animation:"," 0.5s;width:90%;-webkit-appearance:none;background:transparent;outline:none;::-webkit-slider-thumb{-webkit-appearance:none;height:1.4rem;margin-top:-0.2rem;width:0.5rem;background-color:white;cursor:pointer;}::-webkit-slider-runnable-track{width:100%;height:1rem;background:",";}"],O,(function(e){return"hue"===e.index?"linear-gradient(\n        90deg,\n        rgba(255, 0, 0, 1) 0%,\n        rgba(255, 154, 0, 1) 10%,\n        rgba(208, 222, 33, 1) 20%,\n        rgba(79, 220, 74, 1) 30%,\n        rgba(63, 218, 216, 1) 40%,\n        rgba(47, 201, 226, 1) 50%,\n        rgba(28, 127, 238, 1) 60%,\n        rgba(95, 21, 242, 1) 70%,\n        rgba(186, 12, 248, 1) 80%,\n        rgba(251, 7, 217, 1) 90%,\n        rgba(255, 0, 0, 1) 100%\n    )":"sat"===e.index?"linear-gradient(\n        90deg,\n        hsl(calc(".concat(e.hue," * 3.6), 0%, 50%) 0%,\n        hsl(calc(").concat(e.hue," * 3.6), 100%, 50%) 100%\n    )"):"linear-gradient(\n        90deg,\n        hsl(calc(".concat(e.hue," * 3.6), 100%, 0%) 0%,\n        hsl(calc(").concat(e.hue," * 3.6), 100%, 50%) 50%,\n        hsl(calc(").concat(e.hue," * 3.6), 100%, 100%) 100%\n    )")}));l.b.div.withConfig({displayName:"styles__StyledThumb",componentId:"j7makn-2"})(["height:1rem;line-height:1rem;width:1rem;text-align:center;background-color:white;border-radius:50%;cursor:grab;transition:0.1s;outline:none;"]),l.b.div.withConfig({displayName:"styles__StyledTrack",componentId:"j7makn-3"})(["width:100%;top:0;bottom:0;background:red;"]);var v=function(e){var t=e.type,n=e.hue,i=e.sat,r=e.bri,o=e.setColor;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(C,{children:[Object(c.jsx)(k,{type:"range",defaultValue:n,index:"hue",onChange:function(e){return function(e){o(t,Number(e.target.value),i,r)}(e)}}),Object(c.jsx)(k,{type:"range",defaultValue:i,index:"sat",hue:n,onChange:function(e){return function(e){o(t,n,Number(e.target.value),r)}(e)}}),Object(c.jsx)(k,{type:"range",defaultValue:r,index:"bri",hue:n,onChange:function(e){return function(e){o(t,n,i,Number(e.target.value))}(e)}})]})})};var _=function(e){var t=e.count,n=e.type,i=e.title,r=e.char,o=e.setChar,a=e.color,s=e.setColor,l=e.focus,u=e.updateFocus;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(g,{onClick:function(e){u(n)},children:[Object(c.jsx)(p,{children:i}),Object(c.jsx)(f,{children:Object(m.a)(Array(t)).map((function(e,t){return Object(c.jsx)(j,{isSelected:r[n]===t,onClick:function(e){return function(e){o(n,e)}(t)},children:Object(c.jsx)(x,{src:"".concat("","/assets/").concat(n,".png"),index:t,hue:a[n][0],sat:a[n][1],bri:a[n][2]},t)},t)}))}),n===l&&Object(c.jsx)(v,{type:n,hue:a[n][0],sat:a[n][1],bri:a[n][2],setColor:s})]})})},I=l.b.div.withConfig({displayName:"styles__Layout",componentId:"sc-18rjzhr-0"})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),N=l.b.div.withConfig({displayName:"styles__BoxContainer",componentId:"sc-18rjzhr-1"})(["position:relative;width:6rem;height:6rem;"]),F=l.b.div.withConfig({displayName:"styles__Parts",componentId:"sc-18rjzhr-2"})(["width:100%;height:100%;position:absolute;top:0;left:0;background-image:url(",");background-repeat:no-repeat;background-position:calc(0px - 60px * ",");filter:hue-rotate(calc("," * 3.6deg)) saturate(calc(","% * 2)) brightness(calc(","% * 2)) contrast(calc(max(200% - ","% * 2,100%)));"],(function(e){return e.src}),(function(e){return e.index}),(function(e){return e.hue}),(function(e){return e.sat}),(function(e){return e.bri}),(function(e){return e.bri}));var z=function(e){var t=e.count,n=e.char,i=e.color;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(I,{children:Object(c.jsx)(N,{children:Object(m.a)(Array(t)).map((function(e,t){return Object(c.jsx)(F,{src:"".concat("","/assets/").concat(t,".png"),index:n[t],hue:i[t][0],sat:i[t][1],bri:i[t][2]},t)}))})})})};var S=function(){var e=Object(i.useState)([0,0,0,0]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)([[0,50,50],[0,50,50],[0,50,50],[0,50,50],[0,50,50],[0,50,50]]),a=Object(s.a)(o,2),l=a[0],m=a[1],g=Object(i.useState)(0),p=Object(s.a)(g,2),f=p[0],j=p[1],x=Object(i.useState)(!1),y=Object(s.a)(x,2),w=y[0],O=y[1],C=function(e,t){var c=n;c[e]=t,r(c),O(!w)},k=function(e,t,n,c){var i=l,r=[t,n,c];i[e]=r,m(i),O(!w)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(u,{children:Object(c.jsxs)(d,{children:[Object(c.jsx)(h,{children:Object(c.jsx)(z,{count:6,char:n,color:l})}),Object(c.jsxs)(b,{children:[Object(c.jsx)(_,{count:1,title:"\ud53c\ubd80",type:0,char:n,setChar:C,color:l,setColor:k,focus:f,updateFocus:j},0),Object(c.jsx)(_,{count:3,title:"\ubcfc",type:1,char:n,setChar:C,color:l,setColor:k,focus:f,updateFocus:j},1),Object(c.jsx)(_,{count:2,title:"\ub208",type:2,char:n,setChar:C,setColor:k,color:l,focus:f,updateFocus:j},2),Object(c.jsx)(_,{count:3,title:"\ub208\uc379",type:3,char:n,setChar:C,setColor:k,color:l,focus:f,updateFocus:j},3),Object(c.jsx)(_,{count:3,title:"\uc785",type:4,char:n,setChar:C,setColor:k,color:l,focus:f,updateFocus:j},4),Object(c.jsx)(_,{count:5,title:"\uba38\ub9ac",type:5,char:n,setChar:C,setColor:k,color:l,focus:f,updateFocus:j},5)]})]})})})},L=n(26),B=n(3);var T=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(L.a,{children:Object(c.jsxs)(B.d,{children:[Object(c.jsx)(B.b,{path:"/mini-me",exact:!0,component:S}),Object(c.jsx)(B.a,{from:"*",to:"/mini-me"})]})})})};function A(){var e=Object(y.a)(["\n  * {\n    font-family: 'NanumSquare', sans-serif;\n    font-display: 'block';\n    box-sizing : border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    transition: all 0.2s ease;\n  }\n  html {\n    font-size : 10px;\n    overflow: hidden;\n  }\n  \n  body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n  }\n\n  button {\n    cursor: pointer;\n  }\n  \n  ul {\n    list-style-type: none;\n    padding : 0;\n  }\n"]);return A=function(){return e},e}var P=Object(l.a)(A()),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};a.a.render(Object(c.jsxs)(r.a.StrictMode,{children:[Object(c.jsx)(P,{}),Object(c.jsx)(T,{})]}),document.getElementById("root")),V()}},[[42,1,2]]]);
//# sourceMappingURL=main.8cbec9c9.chunk.js.map