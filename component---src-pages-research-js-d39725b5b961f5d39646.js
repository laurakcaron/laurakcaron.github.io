"use strict";(self.webpackChunkgatsby_starter_clean_resume=self.webpackChunkgatsby_starter_clean_resume||[]).push([[236],{3082:function(e,t,a){var n=a(7294),l=a(5444);t.Z=function(e){return n.createElement(l.StaticQuery,{query:"1998329724",render:function(t){var a=t.images.edges.find((function(t){return t.node.relativePath.includes(/[^/]*$/g.exec(e.filename))}));return a?n.createElement("img",{src:a.node.childImageSharp.gatsbyImageData.images.fallback.src,lazy:!0,alt:!0,class:"gatimg"}):null}})}},5347:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),l=a(5152),r=a(5444),s=a(3082),i=(a(5517).rgb([255,255,255]),function(e){var t=e.pubweb?"inline":"none",a=e.fulltextpdf?"inline":"none",l=e.fulltextacc?"inline":"none",r=e.slides?"inline":"none",i=e.presentedat?"inline":"none",o=[].concat(e.presentedat).map((function(e){return n.createElement("li",null,e)}));return n.createElement("div",{className:"card",pubtype:e.pubtype,tabIndex:"0","aria-label":e.shorttitle},n.createElement("div",{className:"first"},n.createElement("div",{className:"cardImage",style:{zIndex:"0",opacity:"1"}},n.createElement(s.Z,{filename:e.image,alt:e.alt,style:{width:"100%",opacity:"1"}}))),n.createElement("div",{className:"second",style:{lineHeight:"1.1"},"aria-label":e.shorttitle},n.createElement("div",null,n.createElement("br",null),n.createElement("h2",{className:"cardTitle"},e.shorttitle," (",e.date,")"),n.createElement("div",{className:"button-outer cardInset",style:{marginTop:"0px",fontSize:"smaller"}},n.createElement("span",{style:{display:t}},n.createElement("a",{href:e.pubweb},"[Source]")),"  ",n.createElement("a",{href:e.fulltextpdf,style:{display:a}},"[Full text]"),"   ",n.createElement("a",{href:e.slides,style:{display:r}},"[Slides]"),n.createElement("span",{style:{display:l}},"(",n.createElement("a",{href:e.fulltextacc},"Accessible version"),")")),n.createElement("h3",{className:"cardInset"},e.authors,", "),n.createElement("h3",{style:{fontStyle:"italic"}},e.place)),n.createElement("div",{className:"abstract cardInset"},n.createElement("p",{style:{fontSize:"smaller",color:"black",marginBottom:"0px",marginTop:"10px"}},e.abstract)),n.createElement("div",{className:"presentedat cardInset"},n.createElement("p",{style:{fontSize:"smaller",color:"black",marginBottom:"0px",marginTop:"10px",display:i}},n.createElement("br",null),n.createElement("br",null),"Presented at:",n.createElement("ul",null,o))),n.createElement("br",null)))}),o=function(e){var t=(0,r.useStaticQuery)("476921712"),a=t.allPublicationsJson.edges.filter((function(e){return e.node.pubtype.includes("journal")})).map((function(e,t){return n.createElement(i,{date:e.node.date,place:e.node.place,shorttitle:e.node.shorttitle,authors:e.node.authors,abstract:e.node.abstract,fulltextpdf:e.node.fulltextpdf,pubtype:e.node.pubtype,pubweb:e.node.pubweb,image:e.node.image,alt:e.node.alt,slides:e.node.slides,presentedat:e.node.presentedat})})),s=t.allPublicationsJson.edges.filter((function(e){return e.node.pubtype.includes("wp")})).map((function(e,t){return n.createElement(i,{date:e.node.date,place:e.node.place,shorttitle:e.node.shorttitle,authors:e.node.authors,abstract:e.node.abstract,fulltextpdf:e.node.fulltextpdf,pubtype:e.node.pubtype,pubweb:e.node.pubweb,image:e.node.image,alt:e.node.alt,slides:e.node.slides,presentedat:e.node.presentedat})})),o=t.allPublicationsJson.edges.filter((function(e){return e.node.pubtype.includes("institutional")})).map((function(e,t){return n.createElement(i,{date:e.node.date,place:e.node.place,shorttitle:e.node.shorttitle,authors:e.node.authors,abstract:e.node.abstract,fulltextpdf:e.node.fulltextpdf,pubtype:e.node.pubtype,pubweb:e.node.pubweb,image:e.node.image,alt:e.node.alt,slides:e.node.slides,presentedat:e.node.presentedat})})),c=t.allPublicationsJson.edges.filter((function(e){return e.node.pubtype.includes("blog")&e.node.pubtype.includes("econ")})).map((function(e,t){return n.createElement(i,{date:e.node.date,place:e.node.place,shorttitle:e.node.shorttitle,authors:e.node.authors,abstract:e.node.abstract,fulltextpdf:e.node.fulltextpdf,pubtype:e.node.pubtype,pubweb:e.node.pubweb,image:e.node.image,alt:e.node.alt,slides:e.node.slides,presentedat:e.node.presentedat})})),d=t.allPublicationsJson.edges.filter((function(e){return e.node.pubtype.includes("history")})).map((function(e,t){return n.createElement(i,{date:e.node.date,place:e.node.place,shorttitle:e.node.shorttitle,authors:e.node.authors,abstract:e.node.abstract,fulltextpdf:e.node.fulltextpdf,pubtype:e.node.pubtype,pubweb:e.node.pubweb,image:e.node.image,alt:e.node.alt,slides:e.node.slides,presentedat:e.node.presentedat})}));return n.createElement(l.Z,{pageTitle:"Research",pageDescription:"Learn more about my research"},n.createElement("input",{type:"checkbox",id:"abstracton",value:"abstracton"}),n.createElement("input",{type:"checkbox",id:"imageson",value:"imageson"}),n.createElement("div",{className:"researchSwitch",role:"list"},n.createElement("li",null,"Show images",n.createElement("label",{class:"switch",for:"imageson"},n.createElement("span",{class:"slider round"}))),n.createElement("li",null,"Show abstracts",n.createElement("label",{class:"switch",for:"abstracton"},n.createElement("span",{class:"slider round"})))),n.createElement("div",{style:{marginTop:"20px"}},n.createElement("h3",{style:{lineHeight:"1.1",fontSize:"larger",marginBottom:"0px"}},"Working papers & works in progress"),n.createElement("hr",{style:{margin:"1rem"}}),n.createElement("div",{className:"card-grid"},s)),n.createElement("div",{style:{marginTop:"20px"}},n.createElement("h3",{style:{lineHeight:"1.1",fontSize:"larger",marginBottom:"0px"}},"Publications"),n.createElement("hr",{style:{margin:"1rem"}}),n.createElement("div",{className:"card-grid"},a)),n.createElement("div",{style:{marginTop:"20px"}},n.createElement("h3",{style:{lineHeight:"1.1",fontSize:"larger",marginBottom:"0px"}},"Policy & institutional reports"),n.createElement("hr",{style:{margin:"1rem"}}),n.createElement("div",{className:"card-grid"},o)),n.createElement("div",{style:{marginTop:"20px"}},n.createElement("h3",{style:{lineHeight:"1.1",fontSize:"larger",marginBottom:"0px"}},"Blog posts & commentary"),n.createElement("hr",{style:{margin:"1rem"}}),n.createElement("div",{className:"card-grid"},c)),n.createElement("div",{style:{marginTop:"20px"}},n.createElement("h3",{style:{lineHeight:"1.1",fontSize:"larger",marginBottom:"0px"}},"History work"),n.createElement("hr",{style:{margin:"1rem"}}),n.createElement("div",{className:"card-grid"},d)))}}}]);
//# sourceMappingURL=component---src-pages-research-js-d39725b5b961f5d39646.js.map