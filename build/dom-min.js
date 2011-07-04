/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dom/attr",function(k,c,v,r){function B(b,a){a=u[a]||a;var i=m[a];if(!b)return r;return i&&i.get?i.get(b,a):b[a]}v=document.documentElement;var A=!v.hasAttribute,w=v.textContent!==r?"textContent":"innerText",g=c._isElementNode,j=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:button|input|object|select|textarea)$/i,y=/^a(?:rea)?$/i,d=/:|^on/,n=/\r/g,o={},e={val:1,css:1,html:1,text:1,data:1,width:1,height:1,
offset:1},l={tabindex:{get:function(b){var a=b.getAttributeNode("tabindex");return a&&a.specified?parseInt(a.value,10):p.test(b.nodeName)||y.test(b.nodeName)&&b.href?0:null}},style:{get:function(b){return b.style.cssText},set:function(b,a){b.style.cssText=a}}},u={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},
z={get:function(b,a){return c.prop(b,a)?a.toLowerCase():null},set:function(b,a,i){if(a===false)c.removeAttr(b,i);else{a=u[i]||i;if(a in b)b[a]=true;b.setAttribute(i,i.toLowerCase())}return i}},m={},h={},q={option:{get:function(b){var a=b.attributes.value;return!a||a.specified?b.value:b.text}},select:{get:function(b){var a=b.selectedIndex,i=b.options;b=b.type==="select-one";if(a<0)return null;else if(b)return c.val(i[a]);a=[];b=0;for(var f=i.length;b<f;++b)i[b].selected&&a.push(c.val(i[b]));return a},
set:function(b,a){var i=k.makeArray(a);k.each(b.options,function(f){f.selected=k.inArray(c.val(f),i)});if(!i.length)b.selectedIndex=-1;return i}}};if(A){h={get:function(b,a){var i;return(i=b.getAttributeNode(a))&&i.nodeValue!==""?i.nodeValue:null},set:function(b,a,i){if(b=b.getAttributeNode(i))b.nodeValue=a}};o=u;l.tabIndex=l.tabindex;k.each(["href","src","width","height","colSpan","rowSpan"],function(b){l[b]={get:function(a){a=a.getAttribute(b,2);return a===r?null:a}}});q.button=l.value=h}k.each(["radio",
"checkbox"],function(b){q[b]={get:function(a){return a.getAttribute("value")===null?"on":a.value},set:function(a,i){if(k.isArray(i))return a.checked=k.inArray(c.val(a),i)}}});k.mix(c,{prop:function(b,a,i){if(k.isPlainObject(a))for(var f in a)c.prop(b,f,a[f]);else{b=c.query(b);a=u[a]||a;var s=m[a];if(i!==r)k.each(b,function(t){if(s&&s.set)s.set(t,i,a);else t[a]=i});else{b=b[0];if(!b)return null;b=B(b,a);return b===r?null:b}}},hasProp:function(b,a){var i=c.get(b);return B(i,a)!==r},removeProp:function(b,
a){a=u[a]||a;c.query(b).each(function(i){try{i[a]=r;delete i[a]}catch(f){}})},attr:function(b,a,i,f){if(k.isPlainObject(a)){f=i;for(var s in a)c.attr(b,s,a[s],f)}else if(a=k.trim(a)){a=a.toLowerCase();if(f&&e[a])return c[a](b,i);a=o[a]||a;var t;t=j.test(a)?z:d.test(a)?h:l[a];if(i===r){b=c.get(b);if(!g(b))return null;if(b.nodeName.toLowerCase()=="form")t=h;if(t&&t.get)return t.get(b,a);b=b.getAttribute(a);return b===r?null:b}else k.each(c.query(b),function(x){if(g(x))t&&t.set?t.set(x,i,a):x.setAttribute(a,
""+i)})}},removeAttr:function(b,a){a=a.toLowerCase();a=o[a]||a;k.each(c.query(b),function(i){if(g(i)){var f;i.removeAttribute(a);if(j.test(a)&&(f=u[a]||a)in i)i[f]=false}})},hasAttr:A?function(b,a){a=a.toLowerCase();var i=c.get(b).getAttributeNode(a);return!!(i&&i.specified)}:function(b,a){a=a.toLowerCase();return c.get(b).hasAttribute(a)},val:function(b,a){var i,f;if(a===r){var s=c.get(b);if(s){if((i=q[s.nodeName.toLowerCase()]||q[s.type])&&"get"in i&&(f=i.get(s,"value"))!==r)return f;f=s.value;
return typeof f==="string"?f.replace(n,""):f==null?"":f}return null}c.query(b).each(function(t){if(t.nodeType===1){var x=a;if(x==null)x="";else if(typeof x==="number")x+="";else if(k.isArray(x))x=k.map(x,function(C){return C==null?"":C+""});i=q[t.nodeName.toLowerCase()]||q[t.type];if(!i||!("set"in i)||i.set(t,x,"value")===r)t.value=x}})},text:function(b,a){if(a===r){var i=c.get(b);if(g(i))return i[w]||"";else if(c._nodeTypeIs(i,3))return i.nodeValue;return null}else k.each(c.query(b),function(f){if(g(f))f[w]=
a;else if(c._nodeTypeIs(f,3))f.nodeValue=a})}});return c},{requires:["./base","ua"]});KISSY.add("dom/base",function(k,c){function v(r,B){return r&&r.nodeType===B}return{_isElementNode:function(r){return v(r,1)},_getWin:function(r){return r&&"scrollTo"in r&&r.document?r:v(r,9)?r.defaultView||r.parentWindow:r==c?window:false},_nodeTypeIs:v,_isNodeList:function(r){return r&&!r.nodeType&&r.item&&!r.setTimeout}}});
KISSY.add("dom/class",function(k,c,v){function r(w,g,j,p){if(!(g=k.trim(g)))return p?false:v;w=c.query(w);var y=0,d=w.length,n=g.split(B);for(g=[];y<n.length;y++){var o=k.trim(n[y]);o&&g.push(o)}for(y=0;y<d;y++){n=w[y];if(c._isElementNode(n)){n=j(n,g,g.length);if(n!==v)return n}}if(p)return false;return v}var B=/[\.\s]\s*\.?/,A=/[\n\t]/g;k.mix(c,{hasClass:function(w,g){return r(w,g,function(j,p,y){if(j=j.className){j=(" "+j+" ").replace(A," ");for(var d=0,n=true;d<y;d++)if(j.indexOf(" "+p[d]+" ")<
0){n=false;break}if(n)return true}},true)},addClass:function(w,g){r(w,g,function(j,p,y){var d=j.className;if(d){var n=(" "+d+" ").replace(A," ");d=d;for(var o=0;o<y;o++)if(n.indexOf(" "+p[o]+" ")<0)d+=" "+p[o];j.className=k.trim(d)}else j.className=g},v)},removeClass:function(w,g){r(w,g,function(j,p,y){var d=j.className;if(d)if(y){d=(" "+d+" ").replace(A," ");for(var n=0,o;n<y;n++)for(o=" "+p[n]+" ";d.indexOf(o)>=0;)d=d.replace(o," ");j.className=k.trim(d)}else j.className=""},v)},replaceClass:function(w,
g,j){c.removeClass(w,g);c.addClass(w,j)},toggleClass:function(w,g,j){var p=k.isBoolean(j),y;r(w,g,function(d,n,o){for(var e=0,l;e<o;e++){l=n[e];y=p?!j:c.hasClass(d,l);c[y?"removeClass":"addClass"](d,l)}},v)}});return c},{requires:["dom/base"]});
KISSY.add("dom/create",function(k,c,v,r){function B(f,s){if(k.isPlainObject(s))if(d(f))c.attr(f,s,true);else f.nodeType==11&&k.each(f.childNodes,function(t){c.attr(t,s,true)});return f}function A(f,s){var t=null,x,C;if(f&&(f.push||f.item)&&f[0]){s=s||f[0].ownerDocument;t=s.createDocumentFragment();if(f.item)f=k.makeArray(f);x=0;for(C=f.length;x<C;x++)t.appendChild(f[x])}return t}function w(f,s,t,x){if(t){var C=k.guid("ks-tmp-"),E=RegExp(l);s+='<span id="'+C+'"></span>';k.available(C,function(){var F=
c.get("head"),D,I,G,J,K,H;for(E.lastIndex=0;D=E.exec(s);)if((G=(I=D[1])?I.match(z):false)&&G[2]){D=j.createElement("script");D.src=G[2];if((J=I.match(m))&&J[2])D.charset=J[2];D.async=true;F.appendChild(D)}else if((H=D[2])&&H.length>0)k.globalEval(H);(K=j.getElementById(C))&&c.remove(K);k.isFunction(x)&&x()});g(f,s)}else{g(f,s);k.isFunction(x)&&x()}}function g(f,s){s=(s+"").replace(l,"");try{f.innerHTML=s}catch(t){for(;f.firstChild;)f.removeChild(f.firstChild);s&&f.appendChild(c.create(s))}}var j=
document,p=v.ie,y=c._nodeTypeIs,d=c._isElementNode,n=j.createElement("div"),o=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,e=/<(\w+)/,l=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,u=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,z=/\ssrc=(['"])(.*?)\1/i,m=/\scharset=(['"])(.*?)\1/i;k.mix(c,{create:function(f,s,t){if(y(f,1)||y(f,3)){s=f;t=s.cloneNode(true);if(v.ie<8)t.innerHTML=s.innerHTML;return t}if(!(f=k.trim(f)))return null;var x=null;x=c._creators;var C,E="div",F;
if(C=u.exec(f))x=(t||j).createElement(C[1]);else{f=f.replace(o,"<$1></$2>");if((C=e.exec(f))&&(F=C[1])&&k.isFunction(x[F=F.toLowerCase()]))E=F;f=x[E](f,t).childNodes;x=f.length===1?f[0].parentNode.removeChild(f[0]):A(f,t||j)}return B(x,s)},_creators:{div:function(f,s){var t=s?s.createElement("div"):n;t.innerHTML="w<div>"+f+"</div>";return t.lastChild}},html:function(f,s,t,x){if(s===r){f=c.get(f);if(d(f))return f.innerHTML;return null}else k.each(c.query(f),function(C){d(C)&&w(C,s,t,x)})},remove:function(f){k.each(c.query(f),
function(s){s.parentNode&&s.parentNode.removeChild(s)})},_nl2frag:A});if(p||v.gecko||v.webkit){var h=c._creators,q=c.create,b=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,a={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"},i;for(i in a)(function(f){h[i]=function(s,t){return q("<"+f+">"+s+"</"+f+">",null,t)}})(a[i]);if(p){h.script=function(f,s){var t=s?s.createElement("div"):n;t.innerHTML="-"+f;t.removeChild(t.firstChild);return t};if(p<8)h.tbody=function(f,
s){var t=q("<table>"+f+"</table>",null,s),x=t.children.tags("tbody")[0];t.children.length>1&&x&&!b.test(f)&&x.parentNode.removeChild(x);return t}}k.mix(h,{optgroup:h.option,th:h.td,thead:h.tbody,tfoot:h.tbody,caption:h.tbody,colgroup:h.tbody})}return c},{requires:["./base","ua"]});
KISSY.add("dom/data",function(k,c,v){var r=window,B="_ks_data_"+k.now(),A={},w={},g={};g.applet=1;g.object=1;g.embed=1;var j={hasData:function(d,n){if(d)if(n!==v){if(n in d)return true}else if(!k.isEmptyObject(d))return true;return false}},p={hasData:function(d,n){if(d==r)return p.hasData(w,n);return j.hasData(d[B],n)},data:function(d,n,o){if(d==r)return p.data(w,n,o);d=d[B]=d[B]||{};if(o!==v)d[n]=o;else return n!==v?d[n]===v?null:d[n]:d},removeData:function(d,n){if(d==r)return p.removeData(w,n);
var o=d[B];if(o)if(n!==v){delete o[n];k.isEmptyObject(o)&&p.removeData(d,v)}else delete d[B]}},y={hasData:function(d,n){var o=d[B];if(!o)return false;return j.hasData(A[o],n)},data:function(d,n,o){if(!g[d.nodeName.toLowerCase()]){var e=d[B];e||(e=d[B]=k.guid());d=A[e]=A[e]||{};if(o!==v)d[n]=o;else return n!==v?d[n]===v?null:d[n]:d}},removeData:function(d,n){var o=d[B];if(o){var e=A[o];if(e)if(n!==v){delete e[n];k.isEmptyObject(e)&&y.removeData(d,v)}else{delete A[o];try{delete d[B]}catch(l){}d.removeAttribute&&
d.removeAttribute(B)}}}};k.mix(c,{hasData:function(d,n){var o=false;c.query(d).each(function(e){o=e&&e.nodeType?o||y.hasData(e,n):o||p.hasData(e,n)});return o},data:function(d,n,o){if(k.isPlainObject(n))for(var e in n)c.data(d,e,n[e]);else if(o===v)return(d=c.get(d))&&d.nodeType?y.data(d,n,o):p.data(d,n,o);else c.query(d).each(function(l){l&&l.nodeType?y.data(l,n,o):p.data(l,n,o)})},removeData:function(d,n){c.query(d).each(function(o){o&&o.nodeType?y.removeData(o,n):p.removeData(o,n)})}});return c},
{requires:["./base"]});
KISSY.add("dom/insertion",function(k,c){function v(w,g,j){w=c.query(w);g=c.query(g);if(w=r(w)){var p;if(g.length>1)p=w.cloneNode(true);for(var y=0;y<g.length;y++){var d=g[y],n=y>0?p.cloneNode(true):w;j(n,d)}}}var r=c._nl2frag;k.mix(c,{insertBefore:function(w,g){v(w,g,function(j,p){p.parentNode&&p.parentNode.insertBefore(j,p)})},insertAfter:function(w,g){v(w,g,function(j,p){p.parentNode&&p.parentNode.insertBefore(j,p.nextSibling)})},appendTo:function(w,g){v(w,g,function(j,p){p.appendChild(j)})},prependTo:function(w,
g){v(w,g,function(j,p){p.insertBefore(j,p.firstChild)})}});var B={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},A;for(A in B)c[A]=c[B[A]];return c},{requires:["./create"]});
KISSY.add("dom/offset",function(k,c,v,r){function B(b){var a,i=0;a=0;var f=w.body,s=d(b[l]);if(b[q]){a=b[q]();i=a[u];a=a[z];b=g&&w.documentMode!=9&&(n?j.clientTop:f.clientTop)||0;i-=g&&w.documentMode!=9&&(n?j.clientLeft:f.clientLeft)||0;a-=b;if(v.mobile!=="apple"){i+=c[m](s);a+=c[h](s)}}return{left:i,top:a}}var A=window,w=document,g=v.ie,j=w.documentElement,p=c._isElementNode,y=c._nodeTypeIs,d=c._getWin,n=w.compatMode==="CSS1Compat",o=Math.max,e=parseInt,l="ownerDocument",u="left",z="top",m="scrollLeft",
h="scrollTop",q="getBoundingClientRect";k.mix(c,{offset:function(b,a){if(!(b=c.get(b))||!b[l])return null;if(a===r)return B(b);var i=b;if(c.css(i,"position")==="static")i.style.position="relative";var f=B(i),s={},t,x;for(x in a){t=e(c.css(i,x),10)||0;s[x]=t+a[x]-f[x]}c.css(i,s)},scrollIntoView:function(b,a,i,f){if((b=c.get(b))&&b[l]){f=f===r?true:!!f;i=i===r?true:!!i;if(!a||(a=c.get(a))===A)b.scrollIntoView(i);else{if(y(a,9))a=d(a);var s=!!d(a),t=c.offset(b),x=s?{left:c.scrollLeft(a),top:c.scrollTop(a)}:
c.offset(a),C={left:t[u]-x[u],top:t[z]-x[z]};t=s?c.viewportHeight(a):a.clientHeight;s=s?c.viewportWidth(a):a.clientWidth;x=c[m](a);var E=c[h](a),F=x+s,D=E+t,I=b.offsetHeight;b=b.offsetWidth;var G=C.left+x-(e(c.css(a,"borderLeftWidth"))||0);C=C.top+E-(e(c.css(a,"borderTopWidth"))||0);var J=G+b,K=C+I,H,L;if(I>t||C<E||i)H=C;else if(K>D)H=K-t;if(f)if(b>s||G<x||i)L=G;else if(J>F)L=J-s;c[h](a,H);c[m](a,L)}}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});k.each(["Left","Top"],function(b,a){var i=
"scroll"+b;c[i]=function(f,s){if(k.isNumber(f))arguments.callee(A,f);else{f=c.get(f);var t=0,x=d(f);if(x){if(s!==r){t=b=="Left"?s:c.scrollLeft(x);var C=b=="Top"?s:c.scrollTop(x);x.scrollTo(t,C)}t=x.document;t=x[a?"pageYOffset":"pageXOffset"]||t.documentElement[i]||t.body[i]}else if(p(f=c.get(f)))t=s!==r?f[i]=s:f[i];return s===r?t:r}}});k.each(["Width","Height"],function(b){c["doc"+b]=function(a){a=c.get(a);a=d(a).document;return o(a.documentElement["scroll"+b],a.body["scroll"+b],c["viewport"+b](a))};
c["viewport"+b]=function(a){a=c.get(a);var i="inner"+b;a=d(a);var f=a.document;return i in a?a[i]:n?f.documentElement["client"+b]:f.body["client"+b]}});return c},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(k,c,v){function r(e,l){var u,z,m=[],h;z=k.require("sizzle");l=B(l);if(k.isString(e))if(e.indexOf(",")!=-1){u=e.split(",");k.each(u,function(q){m.push.apply(m,k.makeArray(r(q,l)))})}else{e=k.trim(e);if(d.test(e)){if(z=A(e.slice(1),l))m=[z]}else if(u=n.exec(String(e))){z=u[1];h=u[2];u=u[3];if(l=z?A(z,l):l)if(u)if(!z||e.indexOf(y)!==-1)m=k.makeArray(o(u,h,l));else{if((z=A(z,l))&&c.hasClass(z,u))m=[z]}else if(h)m=w(h,l)}else if(z)m=z(e,l);else g(e)}else if(e&&(k.isArray(e)||
p(e)))m=e;else if(e)m=[e];if(p(m))m=k.makeArray(m);m.each=function(q,b){return k.each(m,q,b)};return m}function B(e){if(e===v)e=j;else if(k.isString(e)&&d.test(e))e=A(e.slice(1),j);else if(k.isArray(e)||p(e))e=e[0]||null;else if(e&&e.nodeType!==1&&e.nodeType!==9)e=null;return e}function A(e,l){if(!l)return null;if(l.nodeType!==9)l=l.ownerDocument;return l.getElementById(e)}function w(e,l){return l.getElementsByTagName(e)}function g(e){k.error("Unsupported selector: "+e)}var j=document,p=c._isNodeList,
y=" ",d=/^#[\w-]+$/,n=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var e=j.createElement("div");e.appendChild(j.createComment(""));if(e.getElementsByTagName("*").length>0)w=function(l,u){var z=k.makeArray(u.getElementsByTagName(l));if(l==="*"){for(var m=[],h=0,q=0,b;b=z[h++];)if(b.nodeType===1)m[q++]=b;z=m}return z}})();var o=j.getElementsByClassName?function(e,l,u){u=e=k.makeArray(u.getElementsByClassName(e));var z=0,m=0,h=e.length,q;if(l&&l!=="*"){u=[];for(l=l.toUpperCase();z<h;++z){q=
e[z];if(q.tagName===l)u[m++]=q}}return u}:j.querySelectorAll?function(e,l,u){return u.querySelectorAll((l?l:"")+"."+e)}:function(e,l,u){l=u.getElementsByTagName(l||"*");u=[];var z=0,m=0,h=l.length,q,b;for(e=y+e+y;z<h;++z){q=l[z];if((b=q.className)&&(y+b+y).indexOf(e)>-1)u[m++]=q}return u};k.mix(c,{query:r,get:function(e,l){return r(e,l)[0]||null},filter:function(e,l,u){var z=r(e,u),m=k.require("sizzle"),h,q,b,a=[];if(k.isString(l)&&(h=n.exec(l))&&!h[1]){q=h[2];b=h[3];l=function(i){return!(q&&i.tagName.toLowerCase()!==
q.toLowerCase()||b&&!c.hasClass(i,b))}}if(k.isFunction(l))a=k.filter(z,l);else if(l&&m)a=m._filter(e,l,u);else g(l);return a},test:function(e,l,u){e=r(e,u);return e.length&&c.filter(e,l,u).length===e.length}});return c},{requires:["dom/base"]});
KISSY.add("dom/style-ie",function(k,c,v,r,B){if(!v.ie)return c;r=document;var A=r.documentElement,w=c._CUSTOM_STYLES,g=/^-?\d+(?:px)?$/i,j=/^-?\d/,p=/^(?:width|height)$/;try{if(A.style.opacity==B&&A.filters)w.opacity={get:function(o){var e=100;try{e=o.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(l){try{e=o.filters("alpha").opacity}catch(u){if(o=((o.currentStyle||0).filter||"").match(/alpha\(opacity[=:]([^)]+)\)/))e=parseInt(k.trim(o[1]))}}return e/100+""},set:function(o,e){var l=o.style,
u=(o.currentStyle||0).filter||"";l.zoom=1;if(u)u=k.trim(u.replace(/alpha\(opacity[=:][^)]+\),?/ig,""));if(u&&e!=1)u+=", ";l.filter=u+(e!=1?"alpha(opacity="+e*100+")":"")}}}catch(y){}v=v.ie==8;var d={},n={get:function(o,e){var l=o.currentStyle[e]+"";if(l.indexOf("px")<0)l=d[l]?d[l]:0;return l}};d.thin=v?"1px":"2px";d.medium=v?"3px":"4px";d.thick=v?"5px":"6px";k.each(["","Top","Left","Right","Bottom"],function(o){w["border"+o+"Width"]=n});if(!(r.defaultView||{}).getComputedStyle&&A.currentStyle)c._getComputedStyle=
function(o,e){var l=o.style,u=o.currentStyle[e];if(p.test(e))u=c[e](o)+"px";else if(!g.test(u)&&j.test(u)){var z=l.left,m=o.runtimeStyle.left;o.runtimeStyle.left=o.currentStyle.left;l.left=e==="fontSize"?"1em":u||0;u=l.pixelLeft+"px";l.left=z;o.runtimeStyle.left=m}return u};return c},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(k,c,v,r){function B(m,h){var q=c.get(m);if(k.isWindow(q))return h==p?c.viewportWidth(q):c.viewportHeight(q);else if(q.nodeType==9)return h==p?c.docWidth(q):c.docHeight(q);var b=h===p?q.offsetWidth:q.offsetHeight;k.each(h===p?["Left","Right"]:["Top","Bottom"],function(a){b-=parseFloat(c._getComputedStyle(q,"padding"+a))||0;b-=parseFloat(c._getComputedStyle(q,"border"+a+"Width"))||0});return b}function A(m,h,q){var b=q;if(q===y&&n.test(h)){b=0;if(k.inArray(c.css(m,"position"),
["absolute","fixed"])){q=m[h==="left"?"offsetLeft":"offsetTop"];if(j&&document.documentMode!=9||v.opera)q-=m.offsetParent["client"+(h=="left"?"Left":"Top")]||0;b=q-(d(c.css(m,"margin-"+h))||0)}}return b}var w=document,g=w.documentElement,j=v.ie,p="width",y="auto",d=parseInt,n=/^(?:left|top)/,o=/^(?:width|height|top|left|right|bottom|margin|padding)/i,e=/-([a-z])/ig,l=function(m,h){return h.toUpperCase()},u={},z={};k.mix(c,{_CUSTOM_STYLES:u,_getComputedStyle:function(m,h){var q="",b=m.ownerDocument;
if(m.style)q=b.defaultView.getComputedStyle(m,null)[h];return q},css:function(m,h,q){if(k.isPlainObject(h))for(var b in h)c.css(m,b,h[b]);else{if(h.indexOf("-")>0)h=h.replace(e,l);b=h;h=u[h]||h;if(q===r){m=c.get(m);var a="";if(m&&m.style){a=h.get?h.get(m,b):m.style[h];if(a===""&&!h.get)a=A(m,h,c._getComputedStyle(m,h))}return a===r?"":a}else{if(q===null||q==="")q="";else if(!isNaN(new Number(q))&&o.test(h))q+="px";(h===p||h==="height")&&parseFloat(q)<0||k.each(c.query(m),function(i){if(i&&i.style){h.set?
h.set(i,q):i.style[h]=q;if(q==="")i.style.cssText||i.removeAttribute("style")}})}}},width:function(m,h){if(h===r)return B(m,p);else c.css(m,p,h)},height:function(m,h){if(h===r)return B(m,"height");else c.css(m,"height",h)},show:function(m){c.query(m).each(function(h){if(h){h.style.display=c.data(h,"display")||"";if(c.css(h,"display")==="none"){var q=h.tagName,b=z[q],a;if(!b){a=w.createElement(q);w.body.appendChild(a);b=c.css(a,"display");c.remove(a);z[q]=b}c.data(h,"display",b);h.style.display=b}}})},
hide:function(m){c.query(m).each(function(h){if(h){var q=h.style,b=q.display;if(b!=="none"){b&&c.data(h,"display",b);q.display="none"}}})},toggle:function(m){c.query(m).each(function(h){if(h)c.css(h,"display")==="none"?c.show(h):c.hide(h)})},addStyleSheet:function(m,h,q){if(k.isString(m)){q=h;h=m;m=window}m=c.get(m);m=c._getWin(m).document;var b;if(q&&(q=q.replace("#","")))b=c.get("#"+q,m);if(!b){b=c.create("<style>",{id:q},m);c.get("head",m).appendChild(b);if(b.styleSheet)b.styleSheet.cssText=h;
else b.appendChild(m.createTextNode(h))}},unselectable:function(m){c.query(m).each(function(h){if(h)if(v.gecko)h.style.MozUserSelect="none";else if(v.webkit)h.style.KhtmlUserSelect="none";else if(v.ie||v.opera){var q=0,b=h.getElementsByTagName("*");for(h.setAttribute("unselectable","on");h=b[q++];)switch(h.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:h.setAttribute("unselectable","on")}}})}});if(g.style.cssFloat!==r)u["float"]="cssFloat";else if(g.style.styleFloat!==
r)u["float"]="styleFloat";return c},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(k,c,v){function r(g,j,p,y,d,n){if(!(g=c.get(g)))return null;if(j===0)return g;n||(g=g[p]);if(!g)return null;d=d&&c.get(d)||null;if(j===v)j=1;n=[];var o=k.isArray(j),e,l;if(k.isNumber(j)){e=0;l=j;j=function(){return++e===l}}do if(w(g)&&B(g,j)&&(!y||y(g))){n.push(g);if(!o)break}while(g!=d&&(g=g[p]));return o?n:n[0]||null}function B(g,j){if(!j)return true;if(k.isArray(j))for(var p=0;p<j.length;p++){if(c.test(g,j[p]))return true}else if(c.test(g,j))return true;return false}
function A(g,j,p){var y=[];var d=g=c.get(g);if(g&&p)d=g.parentNode;if(d){p=0;for(d=d.firstChild;d;d=d.nextSibling)if(w(d)&&d!==g&&(!j||c.test(d,j)))y[p++]=d}return y}var w=c._isElementNode;k.mix(c,{closest:function(g,j,p){return r(g,j,"parentNode",function(y){return y.nodeType!=11},p,true)},parent:function(g,j,p){return r(g,j,"parentNode",function(y){return y.nodeType!=11},p)},next:function(g,j){return r(g,j,"nextSibling",v)},prev:function(g,j){return r(g,j,"previousSibling",v)},siblings:function(g,
j){return A(g,j,true)},children:function(g,j){return A(g,j,v)},contains:document.documentElement.contains?function(g,j){g=c.get(g);j=c.get(j);if(g.nodeType==3)return false;var p;if(j.nodeType==3){j=j.parentNode;p=true}else if(j.nodeType==9)return false;else p=g!==j;return p&&(g.contains?g.contains(j):true)}:document.documentElement.compareDocumentPosition?function(g,j){g=c.get(g);j=c.get(j);return!!(g.compareDocumentPosition(j)&16)}:0,equals:function(g,j){g=c.query(g);j=c.query(j);if(g.length!=j.length)return false;
for(var p=g.length;p>=0;p--)if(g[p]!=j[p])return false;return true}});return c},{requires:["./base"]});KISSY.add("dom",function(k,c){return c},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});