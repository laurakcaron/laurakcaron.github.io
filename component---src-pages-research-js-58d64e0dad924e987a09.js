(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6yn5":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("E9XD");var r,a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=(r=["",""],a=["",""],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(a)}})));function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(){for(var t=this,n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return o(this,e),this.tag=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return"function"==typeof e?t.interimTag.bind(t,e):"string"==typeof e?t.transformEndResult(e):(e=e.map(t.transformString.bind(t)),t.transformEndResult(e.reduce(t.processSubstitutions.bind(t,r))))},r.length>0&&Array.isArray(r[0])&&(r=r[0]),this.transformers=r.map((function(e){return"function"==typeof e?e():e})),this.tag}return i(e,[{key:"interimTag",value:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return this.tag(l,e.apply(void 0,[t].concat(r)))}},{key:"processSubstitutions",value:function(e,t,n){var r=this.transformSubstitution(e.shift(),t);return"".concat(t,r,n)}},{key:"transformString",value:function(e){return this.transformers.reduce((function(e,t){return t.onString?t.onString(e):e}),e)}},{key:"transformSubstitution",value:function(e,t){return this.transformers.reduce((function(e,n){return n.onSubstitution?n.onSubstitution(e,t):e}),e)}},{key:"transformEndResult",value:function(e){return this.transformers.reduce((function(e,t){return t.onEndResult?t.onEndResult(e):e}),e)}}]),e}(),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(t){if(""===e)return t.trim();if("start"===(e=e.toLowerCase())||"left"===e)return t.replace(/^\s*/,"");if("end"===e||"right"===e)return t.replace(/\s*$/,"");throw new Error("Side not supported: "+e)}}};function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(t){if("initial"===e){var n=t.match(/^[^\S\n]*(?=\S)/gm),r=n&&Math.min.apply(Math,u(n.map((function(e){return e.length}))));if(r){var a=new RegExp("^.{"+r+"}","gm");return t.replace(a,"")}return t}if("all"===e)return t.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+e)}}},f=function(e,t){return{onEndResult:function(n){if(null==e||null==t)throw new Error("replaceResultTransformer requires at least 2 arguments.");return n.replace(e,t)}}},p=function(e,t){return{onSubstitution:function(n,r){if(null==e||null==t)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==n?n:n.toString().replace(e,t)}}},g={separator:"",conjunction:"",serial:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return{onSubstitution:function(t,n){if(Array.isArray(t)){var r=t.length,a=e.separator,i=e.conjunction,l=e.serial,o=n.match(/(\n?[^\S\n]+)$/);if(t=o?t.join(a+o[1]):t.join(a+" "),i&&r>1){var s=t.lastIndexOf(a);t=t.slice(0,s)+(l?a:"")+" "+i+t.slice(s+1)}}return t}}},h=function(e){return{onSubstitution:function(t,n){if(null==e||"string"!=typeof e)throw new Error("You need to specify a string character to split by.");return"string"==typeof t&&t.includes(e)&&(t=t.split(e)),t}}},b=function(e){return null!=e&&!Number.isNaN(e)&&"boolean"!=typeof e},y=function(){return{onSubstitution:function(e){return Array.isArray(e)?e.filter(b):b(e)?e:""}}},v=(new s(m({separator:","}),d,c),new s(m({separator:",",conjunction:"and"}),d,c),new s(m({separator:",",conjunction:"or"}),d,c),new s(h("\n"),y,m,d,c),new s(h("\n"),m,d,c,p(/&/g,"&amp;"),p(/</g,"&lt;"),p(/>/g,"&gt;"),p(/"/g,"&quot;"),p(/'/g,"&#x27;"),p(/`/g,"&#x60;")),new s(f(/(?:\n(?:\s*))+/g," "),c),new s(f(/(?:\n\s*)/g,""),c),new s(m({separator:","}),f(/(?:\s+)/g," "),c),new s(m({separator:",",conjunction:"or"}),f(/(?:\s+)/g," "),c),new s(m({separator:",",conjunction:"and"}),f(/(?:\s+)/g," "),c),new s(m,d,c),new s(m,f(/(?:\s+)/g," "),c),new s(d,c));new s(d("all"),c)},LTVh:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Bl7J"),l=n("Wbzz"),o=n("blbn"),s=function(e){return a.a.createElement(l.b,{query:"2633898436",render:function(t){var n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return n?a.a.createElement(o.a,{image:n.node.childImageSharp.gatsbyImageData}):null}})},c=(n("aSns").rgb([255,255,255]),function(e){var t=e.pubweb?"inline":"none",n=e.fulltextpdf?"inline":"none",r=e.fulltextacc?"inline":"none";return a.a.createElement("div",{className:"card",pubtype:e.pubtype,tabIndex:"0","aria-label":e.shorttitle},a.a.createElement("div",{className:"first"},a.a.createElement("div",{className:"cardImage",style:{zIndex:"0"}},a.a.createElement(s,{filename:e.image,alt:e.alt})),a.a.createElement("div",{style:{padding:"8px"}},a.a.createElement("br",null),a.a.createElement("span",{style:{fontSize:"medium",fontWeight:"bold"}},e.shorttitle," (",e.date,")",a.a.createElement("br",null)),a.a.createElement("br",null),a.a.createElement("span",{style:{fontSize:"small",fontWeight:"lighter"}},e.authors,", "),a.a.createElement("span",{style:{fontSize:"small",fontWeight:"lighter",fontStyle:"italic"}},e.place))),a.a.createElement("div",{className:"second",style:{lineHeight:"1.1"},"aria-label":e.shorttitle},a.a.createElement("span",{style:{fontSize:"small",fontWeight:"bold"}},e.shorttitle," (",e.date,")",a.a.createElement("br",null)),a.a.createElement("br",null),a.a.createElement("span",{style:{fontSize:"smaller",fontWeight:"lighter"}},e.authors,", "),a.a.createElement("span",{style:{fontSize:"smaller",fontWeight:"lighter",fontStyle:"italic"}},e.place),a.a.createElement("p",{style:{fontSize:"smaller",color:"black",marginBottom:"0px",marginTop:"10px"}},e.abstract),a.a.createElement("br",null),a.a.createElement("div",{className:"button-outer",style:{marginTop:"0px",fontSize:"smaller"}},a.a.createElement("a",{href:e.pubweb,style:{display:t}},'Visit the website for "',e.shorttitle,'." '),a.a.createElement("br",null),a.a.createElement("p",null,a.a.createElement("a",{href:e.fulltextpdf,style:{display:n}}," See full text. ")," ",a.a.createElement("span",{style:{display:r}},"(",a.a.createElement("a",{href:e.fulltextacc},"Accessible version"),")")))))});t.default=function(e){var t=Object(l.d)("389775924").site.siteMetadata.research.map((function(e,t){return a.a.createElement(c,{date:e.date,place:e.place,shorttitle:e.shorttitle,authors:e.authors,abstract:e.abstract,fulltextpdf:e.fulltextpdf,fulltextacc:e.fulltextacc,color:e.color,pubtype:e.pubtype,pubweb:e.pubweb,image:e.image})}));return a.a.createElement(i.a,{pageTitle:"Research",pageDescription:"Learn more about my research"},"Use the selections below to explore the gallery.",a.a.createElement("input",{type:"checkbox",id:"All",name:"categories",value:"All","aria-label":"All"}),a.a.createElement("input",{type:"checkbox",id:"journal",name:"categories",value:"journal","aria-label":"Journal articles"}),a.a.createElement("input",{type:"checkbox",id:"institutional",name:"categories",value:"institutional"}),a.a.createElement("input",{type:"checkbox",id:"wp",name:"categories",value:"wp"}),a.a.createElement("input",{type:"checkbox",id:"blog",name:"categories",value:"blog"}),a.a.createElement("input",{type:"checkbox",id:"conference",name:"categories",value:"conference"}),a.a.createElement("input",{type:"checkbox",id:"econ",name:"categories",value:"econ"}),a.a.createElement("input",{type:"checkbox",id:"nonecon",name:"categories",value:"nonecon"}),a.a.createElement("input",{type:"checkbox",id:"history",name:"categories",value:"history"}),a.a.createElement("div",{class:"filters",role:"list"},a.a.createElement("li",{"aria-label":"All"},a.a.createElement("label",{for:"All","aria-label":"All"},"All")),a.a.createElement("li",{"aria-label":"journal articles"},a.a.createElement("label",{for:"journal","area-label":"journal articles"},"Journal Articles")),a.a.createElement("li",null,a.a.createElement("label",{for:"institutional"},"Policy & Institutional Reports")),a.a.createElement("li",null,a.a.createElement("label",{for:"wp"},"Working Papers")),a.a.createElement("li",null,a.a.createElement("label",{for:"blog"},"News Articles & Blogs")),a.a.createElement("li",null,a.a.createElement("label",{for:"conference"},"Conferences & Presentations")),a.a.createElement("li",null,a.a.createElement("label",{for:"econ"},"Economics")),a.a.createElement("li",null,a.a.createElement("label",{for:"nonecon"},"Econ-Related Fields")),a.a.createElement("li",null,a.a.createElement("label",{for:"history"},"History"))),a.a.createElement("div",{className:"card-grid"},t))}},blbn:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=(n("6yn5"),n("q8gk"),n("17x9")),l=n.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var c=new Set,u=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function d(e){e&&c.add(e)}function f(e){return c.has(e)}function p(t,r,a,i,l,s,c,u){var f,p;return void 0===u&&(u={}),null!=c&&c.current&&!("objectFit"in document.documentElement.style)&&(c.current.dataset.objectFit=null!=(f=u.objectFit)?f:"cover",c.current.dataset.objectPosition=""+(null!=(p=u.objectPosition)?p:"50% 50%"),function(e){try{var t=function(){window.objectFitPolyfill(e.current)},r=function(){if(!("objectFitPolyfill"in window))return Promise.resolve(n.e(14).then(n.t.bind(null,"eCb9",7))).then((function(){}))}();Promise.resolve(r&&r.then?r.then(t):t())}catch(e){return Promise.reject(e)}}(c)),e.GATSBY___IMAGE||(u=o({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},u)),o({},a,{loading:i,shouldLoad:t,"data-main-image":"",style:o({},u,{opacity:r?1:0}),onLoad:function(e){if(!r){d(s);var t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().catch((function(){})).then((function(){l(!0)})):l(!0)}},ref:c})}function g(t,n,r,a,i,l){var s={};l&&(s.backgroundColor=l,"fixed"===r?(s.width=a,s.height=i,s.backgroundColor=l,s.position="relative"):("constrained"===r||"fullWidth"===r)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0));var c=o({},t,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:n?0:1,transition:"opacity 500ms linear"},s)});return e.GATSBY___IMAGE||(c.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),c}var m=function(e){var t=e.layout,n=e.width,i=e.height,l=e.children,o=null;return"fullWidth"===t&&(o=a.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}})),"constrained"===t&&(o=a.a.createElement("div",{style:{maxWidth:n,display:"block"}},a.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),a.a.createElement(r.Fragment,null,o,l,!1)},h=!1,b=function(t){var i=t.as,l=void 0===i?"div":i,c=t.style,f=t.className,p=t.class,g=t.onStartLoad,m=t.image,b=t.onLoad,y=t.backgroundColor,v=t.loading,E=void 0===v?"lazy":v,w=s(t,["as","style","className","class","onStartLoad","image","onLoad","backgroundColor","loading"]);if(!m)return null;p&&(f=p);var S=m.width,j=m.height,x=m.layout,O=m.images,A=Object(r.useRef)(),k=Object(r.useRef)(!1),R=Object(r.useRef)(null),C=Object(r.useRef)(null),L=Object(r.useRef)(),_=Object(r.useState)(u()),T=_[0],I=_[1],z=Object(r.useState)(!1),N=z[0],q=z[1];e.GATSBY___IMAGE||h||(h=!0,console.warn('[gatsby-plugin-image] You\'re missing out on some cool performance features. Please add "gatsby-plugin-image" to your gatsby-config.js'));var P=function(t,n,r){var a={},i="gatsby-image-wrapper";return e.GATSBY___IMAGE||(a.position="relative",a.overflow="hidden"),"fixed"===r?(a.width=t,a.height=n):"constrained"===r&&(e.GATSBY___IMAGE||(a.display="inline-block"),i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:a}}(S,j,x),W=P.style,G=P.className,M=s(P,["style","className"]);Object(r.useEffect)((function(){if(A.current){var t=A.current.querySelector("[data-gatsby-image-ssr]");if(u()&&t&&e.GATSBY___IMAGE)return null==g||g({wasCached:!1}),void(t.complete?(null==b||b(),d(JSON.stringify(O))):t.addEventListener("load",(function e(){t.removeEventListener("load",e),null==b||b(),d(JSON.stringify(O))})));n.e(15).then(n.bind(null,"1aP2")).then((function(e){var t=(0,e.createIntersectionObserver)((function(){A.current&&(null==g||g({wasCached:!1}),I(!0))}));A.current&&(R.current=t(A))}))}return function(){R.current&&(R.current(A),k.current&&C.current&&C.current())}}),[]),Object(r.useEffect)((function(){if(A.current){var e=A.current.querySelector("[data-gatsby-image-ssr]");if(u()&&e&&!k.current)return void(k.current=!0);n.e(4).then(n.bind(null,"GcJJ")).then((function(e){C.current=(0,e.lazyHydrate)(o({image:m,isLoading:T,isLoaded:N,toggleIsLoaded:function(){null==b||b(),q(!0)},ref:L,loading:E},w),A,k)}))}}),[S,j,x,O,T,N,q,L,w]);var B=function(e,t,n){var r=null;return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(x,S,j);return a.a.createElement(l,Object.assign({},M,{style:o({},W,c,{backgroundColor:y}),className:G+(f?" "+f:""),ref:A,dangerouslySetInnerHTML:{__html:B},suppressHydrationWarning:!0}))},y=function(e){return a.a.createElement(b,Object.assign({},e))};y.displayName="GatsbyImage";var v,E=function(e){var t=e.src,n=e.srcSet,r=e.loading,i=e.alt,l=void 0===i?"":i,o=e.shouldLoad,c=e.innerRef,u=s(e,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return a.a.createElement("img",Object.assign({},u,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?n:void 0,"data-srcset":o?void 0:n,alt:l,ref:c}))},w=Object(r.forwardRef)((function(e,t){var n=e.fallback,r=e.sources,i=void 0===r?[]:r,l=e.shouldLoad,o=void 0===l||l,c=s(e,["fallback","sources","shouldLoad"]),u=c.sizes||(null==n?void 0:n.sizes),d=a.a.createElement(E,Object.assign({},c,n,{sizes:u,shouldLoad:o,innerRef:t}));return i.length?a.a.createElement("picture",null,i.map((function(e){var t=e.media,n=e.srcSet,r=e.type;return a.a.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:n,sizes:u})})),d):d}));E.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},w.displayName="Picture",w.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:Object(i.exact)({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:Object(i.arrayOf)(Object(i.oneOfType)([Object(i.exact)({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),Object(i.exact)({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var S=function(e){var t=e.fallback,n=s(e,["fallback"]);return t?a.a.createElement(w,Object.assign({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.a.createElement("div",Object.assign({},n))};S.displayName="Placeholder",S.propTypes={fallback:i.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var j=Object(r.forwardRef)((function(e,t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,Object.assign({ref:t},e)),a.a.createElement("noscript",null,a.a.createElement(w,Object.assign({},e,{shouldLoad:!0}))))}));j.displayName="MainImage",j.propTypes=w.propTypes;var x,O=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l.a.number.apply(l.a,[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),k={src:l.a.string.isRequired,alt:l.a.string.isRequired,width:O,height:O,sizes:l.a.string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(x=y,function(e){var t=e.src,n=e.__imageData,r=e.__error,i=s(e,["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"]);return r&&console.warn(r),n?a.a.createElement(x,Object.assign({image:n},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=k}).call(this,n("yLpj"))},q8gk:function(e,t,n){"use strict";var r=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return 0===(e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim()).length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=r,e.exports.default=r}}]);
//# sourceMappingURL=component---src-pages-research-js-58d64e0dad924e987a09.js.map