"use strict";(self.webpackChunkgatsby_starter_clean_resume=self.webpackChunkgatsby_starter_clean_resume||[]).push([[441],{1100:function(e,t,r){r.r(t),r.d(t,{CacheProvider:function(){return j},ClassNames:function(){return F},Global:function(){return I},ThemeContext:function(){return _},createElement:function(){return $},css:function(){return D},jsx:function(){return $},keyframes:function(){return H},withEmotionCache:function(){return N}});var n=r(1721),a=r(7294);var i=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);a.insertRule(e,i?0:a.cssRules.length)}catch(o){0}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();var o=function(e){function t(e,n,s,l,d){for(var h,p,m,b,k,C=0,x=0,A=0,O=0,E=0,z=0,M=m=h=0,D=0,$=0,I=0,L=0,H=s.length,W=H-1,G="",B="",F="",U="";D<H;){if(p=s.charCodeAt(D),D===W&&0!==x+O+A+C&&(0!==x&&(p=47===x?10:47),O=A=C=0,H++,W++),0===x+O+A+C){if(D===W&&(0<$&&(G=G.replace(f,"")),0<G.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:G+=s.charAt(D)}p=59}switch(p){case 123:for(h=(G=G.trim()).charCodeAt(0),m=1,L=++D;D<H;){switch(p=s.charCodeAt(D)){case 123:m++;break;case 125:m--;break;case 47:switch(p=s.charCodeAt(D+1)){case 42:case 47:e:{for(M=D+1;M<W;++M)switch(s.charCodeAt(M)){case 47:if(42===p&&42===s.charCodeAt(M-1)&&D+2!==M){D=M+1;break e}break;case 10:if(47===p){D=M+1;break e}}D=M}}break;case 91:p++;case 40:p++;case 34:case 39:for(;D++<W&&s.charCodeAt(D)!==p;);}if(0===m)break;D++}if(m=s.substring(L,D),0===h&&(h=(G=G.replace(u,"").trim()).charCodeAt(0)),64===h){switch(0<$&&(G=G.replace(f,"")),p=G.charCodeAt(1)){case 100:case 109:case 115:case 45:$=n;break;default:$=P}if(L=(m=t(n,$,m,p,d+1)).length,0<T&&(k=c(3,m,$=r(P,G,I),n,_,S,L,p,d,l),G=$.join(""),void 0!==k&&0===(L=(m=k.trim()).length)&&(p=0,m="")),0<L)switch(p){case 115:G=G.replace(w,o);case 100:case 109:case 45:m=G+"{"+m+"}";break;case 107:m=(G=G.replace(g,"$1 $2"))+"{"+m+"}",m=1===N||2===N&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=G+m,112===l&&(B+=m,m="")}else m=""}else m=t(n,r(n,G,I),m,l,d+1);F+=m,m=I=$=M=h=0,G="",p=s.charCodeAt(++D);break;case 125:case 59:if(1<(L=(G=(0<$?G.replace(f,""):G).trim()).length))switch(0===M&&(h=G.charCodeAt(0),45===h||96<h&&123>h)&&(L=(G=G.replace(" ",":")).length),0<T&&void 0!==(k=c(1,G,n,e,_,S,B.length,l,d,l))&&0===(L=(G=k.trim()).length)&&(G="\0\0"),h=G.charCodeAt(0),p=G.charCodeAt(1),h){case 0:break;case 64:if(105===p||99===p){U+=G+s.charAt(D);break}default:58!==G.charCodeAt(L-1)&&(B+=a(G,h,p,G.charCodeAt(2)))}I=$=M=h=0,G="",p=s.charCodeAt(++D)}}switch(p){case 13:case 10:47===x?x=0:0===1+h&&107!==l&&0<G.length&&($=1,G+="\0"),0<T*R&&c(0,G,n,e,_,S,B.length,l,d,l),S=1,_++;break;case 59:case 125:if(0===x+O+A+C){S++;break}default:switch(S++,b=s.charAt(D),p){case 9:case 32:if(0===O+C+x)switch(E){case 44:case 58:case 9:case 32:b="";break;default:32!==p&&(b=" ")}break;case 0:b="\\0";break;case 12:b="\\f";break;case 11:b="\\v";break;case 38:0===O+x+C&&($=I=1,b="\f"+b);break;case 108:if(0===O+x+C+j&&0<M)switch(D-M){case 2:112===E&&58===s.charCodeAt(D-3)&&(j=E);case 8:111===z&&(j=z)}break;case 58:0===O+x+C&&(M=D);break;case 44:0===x+A+O+C&&($=1,b+="\r");break;case 34:case 39:0===x&&(O=O===p?0:0===O?p:O);break;case 91:0===O+x+A&&C++;break;case 93:0===O+x+A&&C--;break;case 41:0===O+x+C&&A--;break;case 40:if(0===O+x+C){if(0===h)if(2*E+3*z==533);else h=1;A++}break;case 64:0===x+A+O+C+M+m&&(m=1);break;case 42:case 47:if(!(0<O+C+A))switch(x){case 0:switch(2*p+3*s.charCodeAt(D+1)){case 235:x=47;break;case 220:L=D,x=42}break;case 42:47===p&&42===E&&L+2!==D&&(33===s.charCodeAt(L+2)&&(B+=s.substring(L,D+1)),b="",x=0)}}0===x&&(G+=b)}z=E,E=p,D++}if(0<(L=B.length)){if($=n,0<T&&(void 0!==(k=c(2,B,$,e,_,S,L,l,d,l))&&0===(B=k).length))return U+B+F;if(B=$.join(",")+"{"+B+"}",0!=N*j){switch(2!==N||i(B,2)||(j=0),j){case 111:B=B.replace(y,":-moz-$1")+B;break;case 112:B=B.replace(v,"::-webkit-input-$1")+B.replace(v,"::-moz-$1")+B.replace(v,":-ms-input-$1")+B}j=0}}return U+B+F}function r(e,t,r){var a=t.trim().split(m);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var c=0;for(e=0===o?"":e[0]+" ";c<i;++c)t[c]=n(e,t[c],r).trim();break;default:var s=c=0;for(t=[];c<i;++c)for(var l=0;l<o;++l)t[s++]=n(e[l]+" ",a[c],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(b,"$1"+e.trim());case 58:return e.trim()+t.replace(b,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(b,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,r,n){var o=e+";",c=2*t+3*r+4*n;if(944===c){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===N||2===N&&i(s,1)?"-webkit-"+s+s:s}if(0===N||2===N&&!i(o,1))return o;switch(c){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(E,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return h.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(k,"tb");break;case 232:s=o.replace(k,"tb-rl");break;case 220:s=o.replace(k,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,c=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<c?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(x,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(x,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===O.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),M(2!==t?n:n.replace(A,"$1"),r,t)}function o(e,t){var r=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(C," or ($1)").substring(4):"("+t+")"}function c(e,t,r,n,a,i,o,c,s,u){for(var f,d=0,h=t;d<T;++d)switch(f=z[d].call(l,e,h,r,n,a,i,o,c,s,u)){case void 0:case!1:case!0:case null:break;default:h=f}if(h!==t)return h}function s(e){return void 0!==(e=e.prefix)&&(M=null,e?"function"!=typeof e?N=1:(N=2,M=e):N=0),s}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<T){var a=c(-1,r,n,n,_,S,0,0,0,0);void 0!==a&&"string"==typeof a&&(r=a)}var i=t(P,n,r,0,0);return 0<T&&(void 0!==(a=c(-2,i,n,n,_,S,i.length,0,0,0))&&(i=a)),"",j=0,S=_=1,i}var u=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,h=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,b=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,y=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,x=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,S=1,_=1,j=0,N=1,P=[],z=[],T=0,M=null,R=0;return l.use=function e(t){switch(t){case void 0:case null:T=z.length=0;break;default:if("function"==typeof t)z[T++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else R=0|!!t}return e},l.set=s,void 0!==e&&s(e),l},c="/*|*/";function s(e){e&&l.current.insert(e+"}")}var l={current:null},u=function(e,t,r,n,a,i,o,u,f,d){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return l.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===u)return t+c;break;case 3:switch(u){case 102:case 112:return l.current.insert(r[0]+t),"";default:return t+(0===d?c:"")}case-2:t.split("/*|*/}").forEach(s)}},f=function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var n=new o(t);var a,c={};a=e.container||document.head;var s,f=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(f,(function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach((function(e){c[e]=!0})),e.parentNode!==a&&a.appendChild(e)})),n.use(e.stylisPlugins)(u),s=function(e,t,r,a){var i=t.name;l.current=r,n(e,t.styles),a&&(d.inserted[i]=!0)};var d={key:r,sheet:new i({key:r,container:a,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:c,registered:{},insert:s};return d};r(5354);function d(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]):n+=r+" "})),n}var h=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert("."+n,a,e.sheet,!0);a=a.next}while(void 0!==a)}};var p=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},m={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var b=/[A-Z]|^ms/g,g=/_EMO_([^_]+?)_([^]*?)_EMO_/g,v=function(e){return 45===e.charCodeAt(1)},y=function(e){return null!=e&&"boolean"!=typeof e},k=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return v(e)?e:e.replace(b,"-$&").toLowerCase()})),w=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(g,(function(e,t,r){return x={name:t,styles:r,next:x},t}))}return 1===m[e]||v(e)||"number"!=typeof t||0===t?t:t+"px"};function C(e,t,r,n){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return x={name:r.name,styles:r.styles,next:x},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)x={name:a.name,styles:a.styles,next:x},a=a.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=C(e,t,r[a],!1);else for(var i in r){var o=r[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":y(o)&&(n+=k(i)+":"+w(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var c=C(e,t,o,!1);switch(i){case"animation":case"animationName":n+=k(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}else for(var s=0;s<o.length;s++)y(o[s])&&(n+=k(i)+":"+w(i,o[s])+";")}return n}(e,t,r);case"function":if(void 0!==e){var i=x,o=r(e);return x=i,C(e,t,o,n)}}if(null==t)return r;var c=t[r];return void 0===c||n?r:c}var x,A=/label:\s*([^\s;\n{]+)\s*;/g;var O=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";x=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=C(r,t,i,!1)):a+=i[0];for(var o=1;o<e.length;o++)a+=C(r,t,e[o],46===a.charCodeAt(a.length-1)),n&&(a+=i[o]);A.lastIndex=0;for(var c,s="";null!==(c=A.exec(a));)s+="-"+c[1];return{name:p(a)+s,styles:a,next:x}},E=Object.prototype.hasOwnProperty,S=(0,a.createContext)("undefined"!=typeof HTMLElement?f():null),_=(0,a.createContext)({}),j=S.Provider,N=function(e){var t=function(t,r){return(0,a.createElement)(S.Consumer,null,(function(n){return e(t,n,r)}))};return(0,a.forwardRef)(t)},P="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",z=function(e,t){var r={};for(var n in t)E.call(t,n)&&(r[n]=t[n]);return r[P]=e,r},T=function(){return null},M=function(e,t,r,n){var i=null===r?t.css:t.css(r);"string"==typeof i&&void 0!==e.registered[i]&&(i=e.registered[i]);var o=t[P],c=[i],s="";"string"==typeof t.className?s=d(e.registered,c,t.className):null!=t.className&&(s=t.className+" ");var l=O(c);h(e,l,"string"==typeof o);s+=e.key+"-"+l.name;var u={};for(var f in t)E.call(t,f)&&"css"!==f&&f!==P&&(u[f]=t[f]);u.ref=n,u.className=s;var p=(0,a.createElement)(o,u),m=(0,a.createElement)(T,null);return(0,a.createElement)(a.Fragment,null,m,p)},R=N((function(e,t,r){return"function"==typeof e.css?(0,a.createElement)(_.Consumer,null,(function(n){return M(t,e,n,r)})):M(t,e,null,r)}));var D=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return O(t)},$=function(e,t){var r=arguments;if(null==t||!E.call(t,"css"))return a.createElement.apply(void 0,r);var n=r.length,i=new Array(n);i[0]=R,i[1]=z(e,t);for(var o=2;o<n;o++)i[o]=r[o];return a.createElement.apply(null,i)},I=N((function(e,t){var r=e.styles;if("function"==typeof r)return(0,a.createElement)(_.Consumer,null,(function(e){var n=O([r(e)]);return(0,a.createElement)(L,{serialized:n,cache:t})}));var n=O([r]);return(0,a.createElement)(L,{serialized:n,cache:t})})),L=function(e){function t(t,r,n){return e.call(this,t,r,n)||this}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.sheet=new i({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container});var e=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]');null!==e&&this.sheet.tags.push(e),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles()},r.componentDidUpdate=function(e){e.serialized.name!==this.props.serialized.name&&this.insertStyles()},r.insertStyles=function(){if(void 0!==this.props.serialized.next&&h(this.props.cache,this.props.serialized.next,!0),this.sheet.tags.length){var e=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling;this.sheet.before=e,this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,!1)},r.componentWillUnmount=function(){this.sheet.flush()},r.render=function(){return null},t}(a.Component),H=function(){var e=D.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},W=function e(t){for(var r=t.length,n=0,a="";n<r;n++){var i=t[n];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var c in o="",i)i[c]&&c&&(o&&(o+=" "),o+=c);break;default:o=i}o&&(a&&(a+=" "),a+=o)}}return a};function G(e,t,r){var n=[],a=d(e,n,r);return n.length<2?r:a+t(n)}var B=function(){return null},F=N((function(e,t){return(0,a.createElement)(_.Consumer,null,(function(r){var n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=O(r,t.registered);return h(t,a,!1),t.key+"-"+a.name},i={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return G(t.registered,n,W(r))},theme:r},o=e.children(i);var c=(0,a.createElement)(B,null);return(0,a.createElement)(a.Fragment,null,c,o)}))}))},4337:function(e,t,r){Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return n.default}});var n=i(r(1429)),a=i(r(5672));function i(e){return e&&e.__esModule?e:{default:e}}},5672:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),a=r(1100),i=r(1429);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}var h,p,m,b=function(e){function t(){return s(this,t),u(this,f(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.color,r=e.highlightColor,n=e.children,i=(0,a.css)(".react-loading-skeleton{background-color:",t,";background-image:linear-gradient( 90deg,",t,",",r,",",t," );};label:SkeletonTheme;");return(0,a.jsx)("div",{css:i},n)}}])&&l(r.prototype,n),i&&l(r,i),t}(n.Component);t.default=b,h=b,p="defaultProps",m={color:i.defaultBaseColor,highlightColor:i.defaultHighlightColor},p in h?Object.defineProperty(h,p,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[p]=m},1429:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=h,t.skeletonStyles=t.skeletonKeyframes=t.defaultHighlightColor=t.defaultBaseColor=void 0;(n=r(7294))&&n.__esModule;var n,a=r(1100);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  0% {\n    background-position: -200px 0;\n  }\n  ","\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n"]);return s=function(){return e},e}var l="#eee";t.defaultBaseColor=l;var u="#f5f5f5";t.defaultHighlightColor=u;var f=function(e,t){return(0,a.keyframes)(s(),t>0?"".concat(Math.floor(1/(e+t)*e*100),"% {\n    background-position: calc(200px + 100%) 0;\n  }"):void 0)};t.skeletonKeyframes=f;var d=(0,a.css)("background-color:",l,";background-image:linear-gradient( 90deg,",l,",",u,",",l," );background-size:200px 100%;background-repeat:no-repeat;border-radius:4px;display:inline-block;line-height:1;width:100%;;label:skeletonStyles;");function h(e){for(var t=e.count,r=e.duration,n=e.width,i=e.wrapper,c=e.height,s=e.circle,l=e.delay,u=e.style,h=e.className,p=[],m=0;m<t;m++){var b={};null!==n&&(b.width=n),null!==c&&(b.height=c),null!==n&&null!==c&&s&&(b.borderRadius="50%");var g="react-loading-skeleton";h&&(g+=" "+h),p.push((0,a.jsx)("span",{key:m,className:g,css:(0,a.css)(d," animation:",f(r,l)," ",r+l,"s ease-in-out infinite;label:Skeleton;"),style:o({},u,{},b)},"‌"))}return(0,a.jsx)("span",null,i?p.map((function(e,t){return(0,a.jsx)(i,{key:t},e,"‌")})):p)}t.skeletonStyles=d,h.defaultProps={count:1,duration:1.2,width:null,wrapper:null,height:null,circle:!1,delay:0}},8886:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(7294),a=r(5152),i=r(5444),o=r(4337);function c(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}c("/* common */\n.Container {\n  text-align: left;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 7px;\n  border: 1px solid #ccc;\n  color: black;\n  transition: 0.3s all ease;\n  height: fit-content; }\n  .Container:hover {\n    background-color: #fafafa !important;\n    cursor: pointer; }\n\n.Secondary {\n  color: #646464; }\n\n.LowerContainer {\n  padding: 10px; }\n\n.Title {\n  margin-top: 0;\n  margin-bottom: 10px; }\n\n.Image {\n  width: 100%;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 30vh; }\n\n.SiteDetails {\n  margin-top: 10px; }\n\n/* sm */\n@media (max-width: 640px) {\n  .Description {\n    display: none; } }\n\n/* md */\n@media (min-width: 641px) and (max-width: 768px) {\n  .Description {\n    display: none; } }\n"),c(".skeleton-container {\n  border-radius: 7px;\n  border: 1px solid #eee; }\n\n.skeleton-lower-container {\n  padding: 10px; }\n");var s=function(e){var t=e.width,r=void 0===t?"100%":t,a=e.imageHeight,i=void 0===a?"30vh":a,c=e.margin;return n.createElement("div",{className:"skeleton-container",style:{width:r,margin:c}},n.createElement(o.ZP,{width:r,height:i}),n.createElement("div",{className:"skeleton-lower-container"},n.createElement(o.ZP,{count:3})))},l=function(e){var t=e.url,r=e.className,a=void 0===r?"":r,i=e.width,o=e.height,c=e.descriptionLength,l=e.borderRadius,u=e.imageHeight,f=e.textAlign,d=e.margin,h=e.fallback,p=void 0===h?null:h,m=e.backgroundColor,b=void 0===m?"white":m,g=e.primaryTextColor,v=void 0===g?"black":g,y=e.secondaryTextColor,k=void 0===y?"rgb(100, 100, 100)":y,w=e.borderColor,C=void 0===w?"#ccc":w,x=e.showLoader,A=void 0===x||x,O=e.customLoader,E=void 0===O?null:O,S=e.openInNewTab,_=void 0===S||S,j=e.fetcher,N=e.fallbackImageSrc,P=void 0===N?"https://i.imgur.com/UeDNBNQ.jpeg":N,z=e.explicitImageSrc,T=void 0===z?null:z,M=(0,n.useRef)(!0),R=(0,n.useState)(),D=R[0],$=R[1],I=(0,n.useState)(!0),L=I[0],H=I[1];if((0,n.useEffect)((function(){return M.current=!0,H(!0),j?j(t).then((function(e){M.current&&(function(e){return!!e&&null!==e.title&&null!==e.description&&null!==e.image&&null!==e.siteName&&null!==e.hostname&&void 0!==e.title&&void 0!==e.description&&void 0!==e.image&&void 0!==e.siteName&&void 0!==e.hostname&&"null"!==e.image&&!e.image.startsWith("/")}(e)?$(e):$(null),H(!1))})).catch((function(e){console.error(e),console.error("No metadata could be found for the given URL."),M.current&&($(null),H(!1))})):fetch("https://rlp-proxy.herokuapp.com/v2?url="+t).then((function(e){return e.json()})).then((function(e){M.current&&($(e.metadata),H(!1))})).catch((function(e){console.error(e),console.error("No metadata could be found for the given URL."),M.current&&($(null),H(!1))})),function(){M.current=!1}}),[t,j]),L&&A)return E?n.createElement(n.Fragment,null,E):n.createElement(s,{width:i,imageHeight:u,margin:d});if(!D)return n.createElement(n.Fragment,null,p);var W=D.image,G=D.description,B=D.title,F=D.siteName,U=D.hostname;return n.createElement("div",{"data-testid":"container",onClick:function(){var e=_?"_blank":"_self";window.open(t,e)},className:"Container "+a,style:{width:i,height:o,borderRadius:l,textAlign:f,margin:d,backgroundColor:b,borderColor:C}},n.createElement("div",{"data-testid":"image-container",style:{borderTopLeftRadius:l,borderTopRightRadius:l,backgroundImage:"url("+(T||W||P)+"), url("+P+")",height:u},className:"Image"}),n.createElement("div",{className:"LowerContainer"},n.createElement("h3",{"data-testid":"title",className:"Title",style:{color:v}},B),G&&n.createElement("span",{"data-testid":"desc",className:"Description Secondary",style:{color:k}},c&&G.length>c?G.slice(0,c)+"...":G),n.createElement("div",{className:"Secondary SiteDetails",style:{color:k}},F&&n.createElement("span",null,F," • "),n.createElement("span",null,U))))},u=function(e){var t=(0,i.useStaticQuery)("2266532218").allMentionsJson.edges.map((function(e,t){return n.createElement("a",{tabIndex:"0",href:e.node.pubweb},n.createElement(l,{url:e.node.pubweb,descriptionLength:"50",height:"350px",margin:"2%",imageHeight:"200px",backgroundColor:"transparent",fallbackImageSrc:e.node.fallbackimg,tabindex:"0"}))}));return n.createElement(a.Z,{pageTitle:"Mentions",pageDescription:"Mentions in the media or policy briefs"},"Where my work has been mentioned in the news or policy briefs!",n.createElement("br",null),n.createElement("div",{className:"card-grid"},t))}}}]);
//# sourceMappingURL=component---src-pages-mentions-js-d219de94efd3f9cdc4d4.js.map