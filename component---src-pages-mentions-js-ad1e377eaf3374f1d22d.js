"use strict";(self.webpackChunkgatsby_starter_clean_resume=self.webpackChunkgatsby_starter_clean_resume||[]).push([[441],{3082:function(e,n,t){var a=t(7294),r=t(5444);n.Z=function(e){return a.createElement(r.StaticQuery,{query:"1998329724",render:function(n){var t=n.images.edges.find((function(n){return n.node.relativePath.includes(/[^/]*$/g.exec(e.filename))}));return t?a.createElement("img",{src:t.node.childImageSharp.gatsbyImageData.images.fallback.src,lazy:!0,alt:!0,class:"gatimg"}):null}})}},8089:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(7294),r=t(5152),i=t(5444);function l(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}l("/* common */\n.Container {\n  text-align: left;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 7px;\n  border: 1px solid #ccc;\n  color: black;\n  transition: 0.3s all ease;\n  height: fit-content; }\n  .Container:hover {\n    background-color: #fafafa;\n    cursor: pointer; }\n\n.Secondary {\n  color: #646464; }\n\n.LowerContainer {\n  padding: 10px; }\n\n.Title {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n.Image {\n  width: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 30vh; }\n\n.SiteDetails {\n  margin-top: 10px; }\n\n/* sm */\n@media (max-width: 640px) {\n  .Description {\n    display: none; } }\n\n/* md */\n@media (min-width: 641px) and (max-width: 768px) {\n  .Description {\n    display: none; } }\n"),l(".skeleton-container {\n  border-radius: 7px;\n  border: 1px solid #eee; }\n\n.skeleton-lower-container {\n  padding: 10px; }\n"),l("@keyframes react-loading-skeleton {\n    100% {\n        transform: translateX(100%);\n    }\n}\n\n.react-loading-skeleton {\n    --base-color: #ebebeb;\n    --highlight-color: #f5f5f5;\n    --animation-duration: 1.5s;\n    --animation-direction: normal;\n    --pseudo-element-display: block; /* Enable animation */\n\n    background-color: var(--base-color);\n\n    width: 100%;\n    border-radius: 0.25rem;\n    display: inline-flex;\n    line-height: 1;\n\n    position: relative;\n    overflow: hidden;\n    z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */\n}\n\n.react-loading-skeleton::after {\n    content: ' ';\n    display: var(--pseudo-element-display);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(\n        90deg,\n        var(--base-color),\n        var(--highlight-color),\n        var(--base-color)\n    );\n    transform: translateX(-100%);\n\n    animation-name: react-loading-skeleton;\n    animation-direction: var(--animation-direction);\n    animation-duration: var(--animation-duration);\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: infinite;\n}\n");var o=t(3082),c=(t(5517).rgb([255,255,255]),function(e){var n=e.pubweb?"inline":"none",t=e.fulltextpdf?"inline":"none",r=e.fulltextacc?"inline":"none";return a.createElement("div",{className:"card",pubtype:e.pubtype,tabIndex:"0","aria-label":e.shorttitle},a.createElement("div",{className:"first"},a.createElement("div",{className:"cardImage",style:{zIndex:"0",opacity:"1"}},a.createElement(o.Z,{filename:e.image,alt:e.alt,style:{width:"100%",opacity:"1"}}))),a.createElement("div",{className:"second",style:{lineHeight:"1.1"},"aria-label":e.shorttitle},a.createElement("div",null,a.createElement("br",null),a.createElement("h2",null,e.shorttitle," (",e.date,")",a.createElement("br",null)),a.createElement("br",null),a.createElement("h3",{style:{fontStyle:"italic"}},e.place)),a.createElement("p",{style:{fontSize:"smaller",color:"black",marginBottom:"0px",marginTop:"10px"}},e.abstract),a.createElement("br",null),a.createElement("div",{className:"button-outer",style:{marginTop:"0px",fontSize:"smaller"}},a.createElement("a",{href:e.pubweb,style:{display:n}},"Visit the website."),a.createElement("p",null,a.createElement("a",{href:e.fulltextpdf,style:{display:t}},"See full text.")," ",a.createElement("span",{style:{display:r}},"(",a.createElement("a",{href:e.fulltextacc},"Accessible version"),")")))))}),s=function(e){var n=(0,i.useStaticQuery)("3641860798").allMentionsJson.edges.map((function(e,n){return a.createElement(c,{date:e.node.date,place:e.node.place,shorttitle:e.node.shorttitle,abstract:e.node.abstract,pubweb:e.node.pubweb,image:e.node.image,alt:e.node.alt})}));return a.createElement(r.Z,{pageTitle:"Mentions",pageDescription:"Mentions in the media or policy briefs"},"Where my work has been mentioned in the news or policy briefs!",a.createElement("br",null),a.createElement("div",{className:"mentions card-grid"},n))}}}]);
//# sourceMappingURL=component---src-pages-mentions-js-ad1e377eaf3374f1d22d.js.map