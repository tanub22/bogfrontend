(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5203)}])},8045:function(t,e,i){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.default=function(t){var e=t.src,i=t.sizes,r=t.unoptimized,s=void 0!==r&&r,u=t.priority,d=void 0!==u&&u,p=t.loading,b=t.lazyBoundary,y=void 0===b?"200px":b,v=t.className,w=t.quality,A=t.width,x=t.height,k=t.objectFit,z=t.objectPosition,O=t.onLoadingComplete,E=t.loader,I=void 0===E?_:E,q=t.placeholder,N=void 0===q?"empty":q,P=t.blurDataURL,D=function(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),L=i?"responsive":"intrinsic";"layout"in D&&(D.layout&&(L=D.layout),delete D.layout);var R="";if(function(t){return"object"===typeof t&&(h(t)||function(t){return void 0!==t.src}(t))}(e)){var C=h(e)?e.default:e;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(P=P||C.blurDataURL,R=C.src,(!L||"fill"!==L)&&(x=x||C.height,A=A||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}e="string"===typeof e?e:R;var W=S(A),B=S(x),H=S(w),M=!d&&("lazy"===p||"undefined"===typeof p);(e.startsWith("data:")||e.startsWith("blob:"))&&(s=!0,M=!1);m.has(e)&&(M=!1);0;var T,U=n(l.useIntersection({rootMargin:y,disabled:!M}),2),F=U[0],V=U[1],J=!M||V,X={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},G={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:z},K="blur"===N?{filter:"blur(20px)",backgroundSize:k||"cover",backgroundImage:'url("'.concat(P,'")'),backgroundPosition:z||"0% 0%"}:{};if("fill"===L)X.display="block",X.position="absolute",X.top=0,X.left=0,X.bottom=0,X.right=0;else if("undefined"!==typeof W&&"undefined"!==typeof B){var Y=B/W,$=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===L?(X.display="block",X.position="relative",Q=!0,G.paddingTop=$):"intrinsic"===L?(X.display="inline-block",X.position="relative",X.maxWidth="100%",Q=!0,G.maxWidth="100%",T='<svg width="'.concat(W,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===L&&(X.display="inline-block",X.position="relative",X.width=W,X.height=B)}else 0;var tt={src:g,srcSet:void 0,sizes:void 0};J&&(tt=j({src:e,unoptimized:s,layout:L,width:W,quality:H,sizes:i,loader:I}));var et=e;0;return o.default.createElement("span",{style:X},Q?o.default.createElement("span",{style:G},T?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(T))}):null):null,o.default.createElement("img",Object.assign({},D,tt,{decoding:"async","data-nimg":L,className:v,ref:function(t){F(t),function(t,e,i,n,r){if(!t)return;var o=function(){t.src!==g&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(t.style.filter="none",t.style.backgroundSize="none",t.style.backgroundImage="none"),m.add(e),r){var i=t.naturalWidth,o=t.naturalHeight;r({naturalWidth:i,naturalHeight:o})}}))};t.complete?o():t.onload=o}(t,et,0,N,O)},style:f({},Z,K)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},D,j({src:e,unoptimized:s,layout:L,width:W,quality:H,sizes:i,loader:I}),{decoding:"async","data-nimg":L,style:Z,className:v,loading:p||"lazy"}))),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+tt.src+tt.srcSet+tt.sizes,rel:"preload",as:"image",href:tt.srcSet?void 0:tt.src,imagesrcset:tt.srcSet,imagesizes:tt.sizes})):null)};var o=d(i(7294)),a=d(i(5443)),c=i(6978),s=i(5809),l=i(7190);function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function d(t){return t&&t.__esModule?t:{default:t}}function f(t){for(var e=arguments,i=function(i){var n=null!=e[i]?e[i]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){u(t,e,n[e])}))},n=1;n<arguments.length;n++)i(n);return t}var m=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var p=new Map([["default",function(t){var e=t.root,i=t.src,n=t.width,r=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(t){var e=t.root,i=t.src,n=t.width,r=t.quality,o=new URL("".concat(e).concat(k(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(t){var e=t.root,i=t.src,n=t.width,r=t.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(k(i))}],["akamai",function(t){var e=t.root,i=t.src,n=t.width;return"".concat(e).concat(k(i),"?imwidth=").concat(n)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(t){return void 0!==t.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,y=b.deviceSizes,v=b.imageSizes,w=b.loader,A=b.path,x=(b.domains,r(y).concat(r(v)));function j(t){var e=t.src,i=t.unoptimized,n=t.layout,o=t.width,a=t.quality,c=t.sizes,s=t.loader;if(i)return{src:e,srcSet:void 0,sizes:void 0};var l=function(t,e,i){if(i&&("fill"===e||"responsive"===e)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,a=[];n=o.exec(i);n)a.push(parseInt(n[2]));if(a.length){var c,s=.01*(c=Math).min.apply(c,r(a));return{widths:x.filter((function(t){return t>=y[0]*s})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:y,kind:"w"}:{widths:r(new Set([t,2*t].map((function(t){return x.find((function(e){return e>=t}))||x[x.length-1]})))),kind:"x"}}(o,n,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(t,i){return"".concat(s({src:e,quality:a,width:t})," ").concat("w"===d?t:i+1).concat(d)})).join(", "),src:s({src:e,quality:a,width:u[f]})}}function S(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function _(t){var e=p.get(w);if(e)return e(f({root:A},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(w))}function k(t){return"/"===t[0]?t.slice(1):t}y.sort((function(t,e){return t-e})),x.sort((function(t,e){return t-e}))},6978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},5203:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return c}});var n=i(5893),r=(i(7294),i(5675)),o=i(2856),a=i.n(o);var c=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:a().title,children:" Adib's Animal Shelter "}),(0,n.jsxs)("div",{className:a().about,children:[(0,n.jsx)("div",{className:a().imageContainer,children:(0,n.jsx)(r.default,{src:"/image/adib2.jpg",layout:"fill",objectFit:"contain"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:" Hi! I'm Adib! I like rescuing animals! "}),(0,n.jsx)("p",{className:a().text,children:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "})]}),")"]}),")"]})}},2856:function(t){t.exports={imageContainer:"HomeScreen_imageContainer__3Zmkc",about:"HomeScreen_about__3mDNI"}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,e,i){t.exports=i(8045)}},function(t){t.O(0,[774,888,179],(function(){return e=3685,t(t.s=e);var e}));var e=t.O();_N_E=e}]);