!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s}())}(window),function(e,t){"use strict";function n(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function r(){P=!1,D=e.devicePixelRatio,W={},N={},h.DPR=D||1,k.width=Math.max(e.innerWidth||0,w.clientWidth),k.height=Math.max(e.innerHeight||0,w.clientHeight),k.vw=k.width/100,k.vh=k.height/100,m=[k.height,k.width,D].join("-"),k.em=h.getEmValue(),k.rem=k.em}function i(e,t,n,r){var i,s,a;return"saveData"===C.algorithm?e>2.7?a=n+1:(s=(t-n)*(i=Math.pow(e-.6,1.5)),r&&(s+=.1*i),a=e+s):a=n>1?Math.sqrt(e*t):e,a>n}function s(e){var t,n=h.getSet(e),r=!1;"pending"!==n&&(r=m,n&&(t=h.setRes(n),h.applySetCandidate(t,e))),e[h.ns].evaled=r}function a(e,t){return e.res-t.res}function c(e,t,n){var r;return!n&&t&&(n=(n=e[h.ns].sets)&&n[n.length-1]),(r=o(t,n))&&(t=h.makeUrl(t),e[h.ns].curSrc=t,e[h.ns].curCan=r,r.res||V(r,r.set.sizes)),r}function o(e,t){var n,r,i;if(e&&t)for(i=h.parseSet(t),e=h.makeUrl(e),n=0;n<i.length;n++)if(e===h.makeUrl(i[n].url)){r=i[n];break}return r}function u(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[h.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function l(e,t){function r(t){var n,r=t.exec(e.substring(d));if(r)return n=r[0],d+=n.length,n}function i(){var e,n,r,i,c,o,u,l,d,p=!1,m={};for(i=0;i<a.length;i++)o=(c=a[i])[c.length-1],u=c.substring(0,c.length-1),l=parseInt(u,10),d=parseFloat(u),O.test(u)&&"w"===o?((e||n)&&(p=!0),0===l?p=!0:e=l):Q.test(u)&&"x"===o?((e||n||r)&&(p=!0),d<0?p=!0:n=d):O.test(u)&&"h"===o?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(m.url=s,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,f.push(m))}for(var s,a,c,o,u,l=e.length,d=0,f=[];;){if(r(F),d>=l)return f;s=r(U),a=[],","===s.slice(-1)?(s=s.replace(H,""),i()):function(){for(r(_),c="",o="in descriptor";;){if(u=e.charAt(d),"in descriptor"===o)if(n(u))c&&(a.push(c),c="",o="after descriptor");else{if(","===u)return d+=1,c&&a.push(c),void i();if("("===u)c+=u,o="in parens";else{if(""===u)return c&&a.push(c),void i();c+=u}}else if("in parens"===o)if(")"===u)c+=u,o="in descriptor";else{if(""===u)return a.push(c),void i();c+=u}else if("after descriptor"===o)if(n(u));else{if(""===u)return void i();o="in descriptor",d-=1}d+=1}}()}}function d(e){var t,r,i,s,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(r=function(e){function t(){s&&(a.push(s),s="")}function r(){a[0]&&(c.push(a),a=[])}for(var i,s="",a=[],c=[],o=0,u=0,l=!1;;){if(""===(i=e.charAt(u)))return t(),r(),c;if(l){if("*"===i&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(n(i)){if(e.charAt(u-1)&&n(e.charAt(u-1))||!s){u+=1;continue}if(0===o){t(),u+=1;continue}i=" "}else if("("===i)o+=1;else if(")"===i)o-=1;else{if(","===i){t(),r(),u+=1;continue}if("/"===i&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}s+=i,u+=1}}}(e)).length,t=0;t<i;t++)if(s=r[t],a=s[s.length-1],function(e){return!!(o.test(e)&&parseFloat(e)>=0)||(!!u.test(e)||("0"===e||"-0"===e||"+0"===e))}(a)){if(c=a,s.pop(),0===s.length)return c;if(s=s.join(" "),h.matchesMedia(s))return c}return"100vw"}t.createElement("picture");var f,p,m,h={},A=!1,g=function(){},v=t.createElement("img"),z=v.getAttribute,y=v.setAttribute,b=v.removeAttribute,w=t.documentElement,E={},C={algorithm:""},S=navigator.userAgent,x=/rident/.test(S)||/ecko/.test(S)&&S.match(/rv\:(\d+)/)&&RegExp.$1>35,M="currentSrc",T=/\s+\+?\d+(e\d+)?w/,L=/(\([^)]+\))?\s*(.+)/,R=e.picturefillCFG,B="font-size:100%!important;",P=!0,W={},N={},D=e.devicePixelRatio,k={px:1,in:96},$=t.createElement("a"),I=!1,_=/^[ \t\n\r\u000c]+/,F=/^[, \t\n\r\u000c]+/,U=/^[^ \t\n\r\u000c]+/,H=/[,]+$/,O=/^\d+$/,Q=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,G=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},q=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},j=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=q(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var i;if(!(t in W))if(W[t]=!1,r&&(i=t.match(e)))W[t]=i[1]*k[i[2]];else try{W[t]=new Function("e",n(t))(k)}catch(e){}return W[t]}}(),V=function(e,t){return e.w?(e.cWidth=h.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},K=function(e){if(A){var n,r,i,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),n=s.elements||h.qsa(s.context||t,s.reevaluate||s.reselect?h.sel:h.selShort),i=n.length){for(h.setupRun(s),I=!0,r=0;r<i;r++)h.fillImg(n[r],s);h.teardownRun(s)}}};e.console&&console.warn,M in v||(M="src"),E["image/jpeg"]=!0,E["image/gif"]=!0,E["image/png"]=!0,E["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),h.ns=("pf"+(new Date).getTime()).substr(0,9),h.supSrcset="srcset"in v,h.supSizes="sizes"in v,h.supPicture=!!e.HTMLPictureElement,h.supSrcset&&h.supPicture&&!h.supSizes&&function(e){v.srcset="data:,a",e.src="data:,a",h.supSrcset=v.complete===e.complete,h.supPicture=h.supSrcset&&h.supPicture}(t.createElement("img")),h.supSrcset&&!h.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=t.createElement("img"),r=function(){2===n.width&&(h.supSizes=!0),p=h.supSrcset&&!h.supSizes,A=!0,setTimeout(K)};n.onload=r,n.onerror=r,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",n.src=e}():A=!0,h.selShort="picture>img,img[srcset]",h.sel=h.selShort,h.cfg=C,h.DPR=D||1,h.u=k,h.types=E,h.setSize=g,h.makeUrl=q(function(e){return $.href=e,$.href}),h.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},h.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?h.matchesMedia=function(e){return!e||matchMedia(e).matches}:h.matchesMedia=h.mMQ,h.matchesMedia.apply(this,arguments)},h.mMQ=function(e){return!e||j(e)},h.calcLength=function(e){var t=j(e,!0)||!1;return t<0&&(t=!1),t},h.supportsType=function(e){return!e||E[e]},h.parseSize=q(function(e){var t=(e||"").match(L);return{media:t&&t[1],length:t&&t[2]}}),h.parseSet=function(e){return e.cands||(e.cands=l(e.srcset,e)),e.cands},h.getEmValue=function(){var e;if(!f&&(e=t.body)){var n=t.createElement("div"),r=w.style.cssText,i=e.style.cssText;n.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",w.style.cssText=B,e.style.cssText=B,e.appendChild(n),f=n.offsetWidth,e.removeChild(n),f=parseFloat(f,10),w.style.cssText=r,e.style.cssText=i}return f||16},h.calcListLength=function(e){if(!(e in N)||C.uT){var t=h.calcLength(d(e));N[e]=t||k.width}return N[e]},h.setRes=function(e){var t;if(e)for(var n=0,r=(t=h.parseSet(e)).length;n<r;n++)V(t[n],e.sizes);return t},h.setRes.res=V,h.applySetCandidate=function(e,t){if(e.length){var n,r,s,o,u,l,d,f,p,m=t[h.ns],A=h.DPR;if(l=m.curSrc||t[M],(d=m.curCan||c(t,l,e[0].set))&&d.set===e[0].set&&((p=x&&!t.complete&&d.res-.1>A)||(d.cached=!0,d.res>=A&&(u=d))),!u)for(e.sort(a),u=e[(o=e.length)-1],r=0;r<o;r++)if((n=e[r]).res>=A){u=e[s=r-1]&&(p||l!==h.makeUrl(n.url))&&i(e[s].res,n.res,A,e[s].cached)?e[s]:n;break}u&&(f=h.makeUrl(u.url),m.curSrc=f,m.curCan=u,f!==l&&h.setSrc(t,u),h.setSize(t))}},h.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},h.getSet=function(e){var t,n,r,i=!1,s=e[h.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&h.matchesMedia(n.media)&&(r=h.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},h.parseSets=function(e,t,n){var r,i,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[h.ns];(void 0===l.src||n.src)&&(l.src=z.call(e,"src"),l.src?y.call(e,"data-pfsrc",l.src):b.call(e,"data-pfsrc")),(void 0===l.srcset||n.srcset||!h.supSrcset||e.srcset)&&(r=z.call(e,"srcset"),l.srcset=r,a=!0),l.sets=[],c&&(l.pic=!0,u(t,l.sets)),l.srcset?(i={srcset:l.srcset,sizes:z.call(e,"sizes")},l.sets.push(i),(s=(p||l.src)&&T.test(l.srcset||""))||!l.src||o(l.src,i)||i.has1x||(i.srcset+=", "+l.src,i.cands.push({url:l.src,d:1,set:i}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=void 0,l.supported=!(c||i&&!h.supSrcset||s&&!h.supSizes),a&&h.supSrcset&&!l.supported&&(r?(y.call(e,"data-pfsrcset",r),e.srcset=""):b.call(e,"data-pfsrcset")),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==h.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},h.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[h.ns]||(e[h.ns]={}),n=e[h.ns],(r||n.evaled!==m)&&(n.parsed&&!t.reevaluate||h.parseSets(e,e.parentNode,t),n.supported?n.evaled=m:s(e))},h.setupRun=function(){I&&!P&&D===e.devicePixelRatio||r()},h.supPicture?(K=g,h.fillImg=g):function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function(){var e=t.readyState||"";s=setTimeout(i,"loading"===e?200:999),t.body&&(h.fillImgs(),(n=n||r.test(e))&&clearTimeout(s))},s=setTimeout(i,t.body?9:99),a=w.clientHeight;G(e,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(function(){P=Math.max(e.innerWidth||0,w.clientWidth)!==k.width||w.clientHeight!==a,a=w.clientHeight,P&&h.fillImgs()},99)),G(t,"readystatechange",i)}(),h.picturefill=K,h.fillImgs=K,h.teardownRun=g,K._=h,e.picturefillCFG={pf:h,push:function(e){var t=e.shift();"function"==typeof h[t]?h[t].apply(h,e):(C[t]=e[0],I&&h.fillImgs({reselect:!0}))}};for(;R&&R.length;)e.picturefillCFG.push(R.shift());e.picturefill=K,"object"==typeof module&&"object"==typeof module.exports?module.exports=K:"function"==typeof define&&define.amd&&define("picturefill",function(){return K}),h.supPicture||(E["image/webp"]=function(t,n){var r=new e.Image;return r.onerror=function(){E[t]=!1,K()},r.onload=function(){E[t]=1===r.width,K()},r.src=n,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),function(e){var t=function(e,t){"use strict";if(t.getElementsByClassName){var n,r=t.documentElement,i=e.Date,s=e.HTMLPictureElement,a=e.addEventListener,c=e.setTimeout,o=e.requestAnimationFrame||c,u=e.requestIdleCallback,l=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],f={},p=Array.prototype.forEach,m=function(e,t){return f[t]||(f[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),f[t].test(e.getAttribute("class")||"")&&f[t]},h=function(e,t){m(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},A=function(e,t){var n;(n=m(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},g=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&g(e,t),d.forEach(function(n){e[r](n,t)})},v=function(e,n,r,i,s){var a=t.createEvent("CustomEvent");return a.initCustomEvent(n,!i,!s,r||{}),e.dispatchEvent(a),a},z=function(t,r){var i;!s&&(i=e.picturefill||n.pf)?i({reevaluate:!0,elements:[t]}):r&&r.src&&(t.src=r.src)},y=function(e,t){return(getComputedStyle(e,null)||{})[t]},b=function(e,t,r){for(r=r||e.offsetWidth;r<n.minSize&&t&&!e._lazysizesWidth;)r=t.offsetWidth,t=t.parentNode;return r},w=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},u=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?c:o)(a)))};return u._lsFlush=a,u}(),E=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w(function(){e.apply(t,n)})}},C=function(e){var t,n=0,r=666,s=function(){t=!1,n=i.now(),e()},a=u?function(){u(s,{timeout:r}),666!==r&&(r=666)}:E(function(){c(s)},!0);return function(e){var s;(e=!0===e)&&(r=44),t||(t=!0,(s=125-(i.now()-n))<0&&(s=0),e||s<9&&u?a():c(a,s))}},S=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=i.now()-n;e<99?c(s,99-e):(u||r)(r)};return function(){n=i.now(),t||(t=c(s,99))}},x=function(){var s,o,u,d,f,b,x,T,L,R,B,P,W,N,D,k=/^img$/i,$=/^iframe$/i,I="onscroll"in e&&!/glebot/.test(navigator.userAgent),_=0,F=0,U=-1,H=function(e){F--,e&&e.target&&g(e.target,H),(!e||F<0||!e.target)&&(F=0)},O=function(e,n){var i,s=e,a="hidden"==y(t.body,"visibility")||"hidden"!=y(e,"visibility");for(L-=n,P+=n,R-=n,B+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=r;)(a=(y(s,"opacity")||1)>0)&&"visible"!=y(s,"overflow")&&(i=s.getBoundingClientRect(),a=B>i.left&&R<i.right&&P>i.top-1&&L<i.bottom+1);return a},Q=function(){var e,i,a,c,l,d,p,m,h;if((f=n.loadMode)&&F<8&&(e=s.length)){i=0,U++,null==N&&("expand"in n||(n.expand=r.clientHeight>500&&r.clientWidth>500?500:370),W=n.expand,N=W*n.expFactor),_<N&&F<1&&U>2&&f>2&&!t.hidden?(_=N,U=0):_=f>1&&U>1&&F<6?W:0;for(;i<e;i++)if(s[i]&&!s[i]._lazyRace)if(I)if((m=s[i].getAttribute("data-expand"))&&(d=1*m)||(d=_),h!==d&&(x=innerWidth+d*D,T=innerHeight+d,p=-1*d,h=d),a=s[i].getBoundingClientRect(),(P=a.bottom)>=p&&(L=a.top)<=T&&(B=a.right)>=p*D&&(R=a.left)<=x&&(P||B||R||L)&&(u&&F<3&&!m&&(f<3||U<4)||O(s[i],d))){if(Y(s[i]),l=!0,F>9)break}else!l&&u&&!c&&F<4&&U<4&&f>2&&(o[0]||n.preloadAfterLoad)&&(o[0]||!m&&(P||B||R||L||"auto"!=s[i].getAttribute(n.sizesAttr)))&&(c=o[0]||s[i]);else Y(s[i]);c&&!l&&Y(c)}},G=C(Q),q=function(e){h(e.target,n.loadedClass),A(e.target,n.loadingClass),g(e.target,V)},j=E(q),V=function(e){j({target:e.target})},K=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},J=function(e){var t,r,i=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i),t&&((r=e.parentNode).insertBefore(e.cloneNode(),e),r.removeChild(e))},X=E(function(e,t,r,i,s){var a,o,u,f,m,y;(m=v(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(r?h(e,n.autosizesClass):e.setAttribute("sizes",i)),o=e.getAttribute(n.srcsetAttr),a=e.getAttribute(n.srcAttr),s&&(f=(u=e.parentNode)&&l.test(u.nodeName||"")),y=t.firesLoad||"src"in e&&(o||a||f),m={target:e},y&&(g(e,H,!0),clearTimeout(d),d=c(H,2500),h(e,n.loadingClass),g(e,V,!0)),f&&p.call(u.getElementsByTagName("source"),J),o?e.setAttribute("srcset",o):a&&!f&&($.test(e.nodeName)?K(e,a):e.src=a),(o||f)&&z(e,{src:a})),e._lazyRace&&delete e._lazyRace,A(e,n.lazyClass),w(function(){(!y||e.complete&&e.naturalWidth>1)&&(y?H(m):F--,q(m))},!0)}),Y=function(e){var t,r=k.test(e.nodeName),i=r&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&u||!r||!e.src&&!e.srcset||e.complete||m(e,n.errorClass))&&(t=v(e,"lazyunveilread").detail,s&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,X(e,t,s,i,r))},Z=function(){if(!u)if(i.now()-b<999)c(Z,999);else{var e=S(function(){n.loadMode=3,G()});u=!0,n.loadMode=3,G(),a("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){b=i.now(),s=t.getElementsByClassName(n.lazyClass),o=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),D=n.hFac,a("scroll",G,!0),a("resize",G,!0),e.MutationObserver?new MutationObserver(G).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",G,!0),r.addEventListener("DOMAttrModified",G,!0),setInterval(G,999)),a("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,G,!0)}),/d$|^c/.test(t.readyState)?Z():(a("load",Z),t.addEventListener("DOMContentLoaded",G),c(Z,2e4)),s.length?(Q(),w._lsFlush()):G()},checkElems:G,unveil:Y}}(),M=function(){var e,r=E(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),l.test(t.nodeName||""))for(s=0,a=(i=t.getElementsByTagName("source")).length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)}),i=function(e,t,n){var i,s=e.parentNode;s&&(n=b(e,s,n),(i=v(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&r(e,s,i,n))},s=S(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(n.autosizesClass),a("resize",s)},checkElems:s,updateElem:i}}(),T=function(){T.i||(T.i=!0,M._(),x._())};return function(){var t,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in r)t in n||(n[t]=r[t]);e.lazySizesConfig=n,c(function(){n.init&&T()})}(),{cfg:n,autoSizer:M,loader:x,init:T,uP:z,aC:h,rC:A,hC:m,fire:v,gW:b,rAF:w}}}(e,e.document);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}(window);