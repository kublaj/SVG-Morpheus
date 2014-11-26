/*! SVG Morpheus v0.1.0 License: MIT */var SVGMorpheus=function(){"use strict";function t(t,e,a){var r,s={};for(r in t)switch(r){case"fill":case"stroke":s[r]=i(t[r]),s[r].r=t[r].r+(e[r].r-t[r].r)*a,s[r].g=t[r].g+(e[r].g-t[r].g)*a,s[r].b=t[r].b+(e[r].b-t[r].b)*a,s[r].opacity=t[r].opacity+(e[r].opacity-t[r].opacity)*a;break;case"stroke-width":s[r]=t[r]+(e[r]-t[r])*a}return s}function e(t){var e,a={};for(e in t)switch(e){case"fill":case"stroke":a[e]=N(t[e]);break;case"stroke-width":a[e]=t[e]}return a}function a(t,e){var a,r=[{},{}];for(a in t)switch(a){case"fill":case"stroke":r[0][a]=U(t[a]),void 0===e[a]&&(r[1][a]=U(t[a]),r[1][a].opacity=0);break;case"stroke-width":r[0][a]=t[a],void 0===e[a]&&(r[1][a]=1)}for(a in e)switch(a){case"fill":case"stroke":r[1][a]=U(e[a]),void 0===t[a]&&(r[0][a]=U(e[a]),r[0][a].opacity=0);break;case"stroke-width":r[1][a]=e[a],void 0===t[a]&&(r[0][a]=1)}return r}function r(t,e,a){var r={};for(var s in t)switch(s){case"rotate":r[s]=[0,0,0];for(var n=0;3>n;n++)r[s][n]=t[s][n]+(e[s][n]-t[s][n])*a}return r}function s(t){var e="";return t.rotate&&(e+="rotate("+t.rotate.join(" ")+")"),e}function n(t,e,a){for(var r=[],s=0,n=t.length;n>s;s++){r.push([t[s][0]]);for(var i=1,o=t[s].length;o>i;i++)r[s].push(t[s][i]+(e[s][i]-t[s][i])*a)}return r}function i(t){var e;if(t instanceof Array){e=[];for(var a=0,r=t.length;r>a;a++)e[a]=i(t[a]);return e}if(t instanceof Object){e={};for(var s in t)t.hasOwnProperty(s)&&(e[s]=i(t[s]));return e}return t}function o(t,e,a,r){var s=this;this._states={},this._curStateId=e||"",this._toStateId="",this._curStateItems=[],this._fromStateItems=[],this._toStateItems=[],this._nodesMorph=[],this._nodeStates,this._startTime,this._duration=a||1e3,this._easing=r||"linear",this._rafid,this._fnTick=function(t){s._startTime||(s._startTime=t);var e=Math.min((t-s._startTime)/s._duration,1);s._updateAnimationProgress(e),1>e?s._rafid=u(s._fnTick):s._animationEnd()},this._svgDoc="SVG"===t.nodeName.toUpperCase()?t:t.getSVGDocument(),this._svgDoc?s._init():t.addEventListener("load",function(){s._svgDoc=t.getSVGDocument(),s._init()},!1)}function h(t,e,a,r){return t?("string"==typeof t&&(t=document.getElementById(t)),new o(t,e,a,r)):null}var c={};c["circ-in"]=function(t){return-1*(Math.sqrt(1-t*t)-1)},c["circ-out"]=function(t){return Math.sqrt(1-(t-=1)*t)},c["circ-in-out"]=function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},c["cubic-in"]=function(t){return t*t*t},c["cubic-out"]=function(t){return--t*t*t+1},c["cubic-in-out"]=function(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},c["elastic-in"]=function(t){var e=1.70158,a=0,r=1;if(0==t)return 0;if(1==t)return 1;if(a||(a=.3),r<Math.abs(1)){r=1;var e=a/4}else var e=a/(2*Math.PI)*Math.asin(1/r);return-(r*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/a))},c["elastic-out"]=function(t){var e=1.70158,a=0,r=1;if(0==t)return 0;if(1==t)return 1;if(a||(a=.3),r<Math.abs(1)){r=1;var e=a/4}else var e=a/(2*Math.PI)*Math.asin(1/r);return r*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/a)+1},c["elastic-in-out"]=function(t){var e=1.70158,a=0,r=1;if(0==t)return 0;if(2==(t/=.5))return 1;if(a||(a=.3*1.5),r<Math.abs(1)){r=1;var e=a/4}else var e=a/(2*Math.PI)*Math.asin(1/r);return 1>t?-.5*r*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/a):r*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/a)*.5+1},c["expo-in"]=function(t){return 0==t?0:Math.pow(2,10*(t-1))},c["expo-out"]=function(t){return 1==t?1:1-Math.pow(2,-10*t)},c["expo-in-out"]=function(t){return 0==t?0:1==t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},c.linear=function(t){return t},c["quad-in"]=function(t){return t*t},c["quad-out"]=function(t){return t*(2-t)},c["quad-in-out"]=function(t){return.5>t?2*t*t:-1+(4-2*t)*t},c["quart-in"]=function(t){return t*t*t*t},c["quart-out"]=function(t){return 1- --t*t*t*t},c["quart-in-out"]=function(t){return.5>t?8*t*t*t*t:1-8*--t*t*t*t},c["quint-in"]=function(t){return t*t*t*t*t},c["quint-out"]=function(t){return 1+--t*t*t*t*t},c["quint-in-out"]=function(t){return.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t},c["sine-in"]=function(t){return 1-Math.cos(t*(Math.PI/2))},c["sine-out"]=function(t){return Math.sin(t*(Math.PI/2))},c["sine-in-out"]=function(t){return.5*(1-Math.cos(Math.PI*t))};var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame,l=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.oCancelAnimationFrame;o.prototype._init=function(){if("SVG"!==this._svgDoc.nodeName.toUpperCase()&&(this._svgDoc=this._svgDoc.getElementsByTagName("svg")[0]),this._svgDoc){for(var t="",e=this._svgDoc.childNodes.length-1;e>=0;e--){var a=this._svgDoc.childNodes[e];if("G"===a.nodeName.toUpperCase()){var r=a.getAttribute("id");if(r){for(var s=[],n=0,i=a.childNodes.length;i>n;n++){var o=a.childNodes[n],h={path:"",attrs:{}};switch(o.nodeName.toUpperCase()){case"PATH":h.path=o.getAttribute("d");break;case"CIRCLE":var c=1*o.getAttribute("cx"),u=1*o.getAttribute("cy"),l=1*o.getAttribute("r");h.path="M"+(c-l)+","+u+"a"+l+","+l+" 0 1,0 "+2*l+",0a"+l+","+l+" 0 1,0 -"+2*l+",0z";break;case"ELLIPSE":var c=1*o.getAttribute("cx"),u=1*o.getAttribute("cy"),p=1*o.getAttribute("rx"),f=1*o.getAttribute("ry");h.path="M"+(c-p)+","+u+"a"+p+","+f+" 0 1,0 "+2*p+",0a"+p+","+f+" 0 1,0 -"+2*p+",0z";break;case"RECT":var m=1*o.getAttribute("x"),d=1*o.getAttribute("y"),g=1*o.getAttribute("width"),M=1*o.getAttribute("height"),p=1*o.getAttribute("rx"),f=1*o.getAttribute("ry");h.path=p||f?"M"+(m+p)+","+d+"l"+(g-2*p)+",0a"+p+","+f+" 0 0,1 "+p+","+f+"l0,"+(M-2*f)+"a"+p+","+f+" 0 0,1 -"+p+","+f+"l"+(2*p-g)+",0a"+p+","+f+" 0 0,1 -"+p+",-"+f+"l0,"+(2*f-M)+"a"+p+","+f+" 0 0,1 "+p+",-"+f+"z":"M"+m+","+d+"l"+g+",0l0,"+M+"l-"+g+",0z";break;case"POLYGON":for(var v=o.getAttribute("points"),y=v.split(/\s+/),_="",b=0,x=y.length;x>b;b++)_+=(b&&"L"||"M")+y[b];h.path=_+"z";break;case"LINE":var I=1*o.getAttribute("x1"),S=1*o.getAttribute("y1"),w=1*o.getAttribute("x2"),A=1*o.getAttribute("y2");h.path="M"+I+","+S+"L"+w+","+A+"z"}if(""!=h.path){for(var b=0,C=o.attributes.length;C>b;b++){var k=o.attributes[b];if(k.specified){var q=k.name.toLowerCase();switch(q){case"fill":case"stroke":case"stroke-width":h.attrs[q]=k.value}}}s.push(h)}}if(s.length>0){var P={id:r,items:s};this._states[r]=P}this._nodeStates?this._svgDoc.removeChild(a):(t=r,this._nodeStates=document.createElementNS("http://www.w3.org/2000/svg","g"),this._svgDoc.replaceChild(this._nodeStates,a))}}}""!==t&&(this._setupAnimation(t),this._updateAnimationProgress(1),this._animationEnd())}},o.prototype._setupAnimation=function(t){if(t&&this._states[t]){this._toStateId=t,this._startTime=void 0;var r,s;for(this._fromStateItems=i(this._curStateItems),this._toStateItems=i(this._states[t].items),r=0,s=this._nodesMorph.length;s>r;r++){var n=this._nodesMorph[r];n.fromStateItemIdx=r,n.toStateItemIdx=r}var o,h=Math.max(this._fromStateItems.length,this._toStateItems.length);for(r=0;h>r;r++)if(this._fromStateItems[r]||(this._toStateItems[r]?(o=w(x(this._toStateItems[r].path)),this._fromStateItems.push({path:"M"+o.cx+","+o.cy+"l0,0",attrs:{},trans:{rotate:[0,o.cx,o.cy]}})):this._fromStateItems.push({path:"M0,0l0,0",attrs:{},trans:{rotate:[0,0,0]}})),this._toStateItems[r]||(this._fromStateItems[r]?(o=w(x(this._fromStateItems[r].path)),this._toStateItems.push({path:"M"+o.cx+","+o.cy+"l0,0",attrs:{},trans:{rotate:[0,o.cx,o.cy]}})):this._toStateItems.push({path:"M0,0l0,0",attrs:{},trans:{rotate:[0,0,0]}})),!this._nodesMorph[r]){var c=document.createElementNS("http://www.w3.org/2000/svg","path");this._nodeStates.appendChild(c),this._nodesMorph.push({node:c,fromStateItemIdx:r,toStateItemIdx:r})}for(r=0;h>r;r++){var u=this._fromStateItems[r],l=this._toStateItems[r],p=x(this._fromStateItems[r].path,this._toStateItems[r].path);u.curve=p[0],l.curve=p[1];var f=a(this._fromStateItems[r].attrs,this._toStateItems[r].attrs);if(u.attrsNorm=f[0],l.attrsNorm=f[1],u.attrs=e(u.attrsNorm),l.attrs=e(l.attrsNorm),o=w(l.curve),l.trans={rotate:[0,o.cx,o.cy]},u.trans.rotate){l.trans.rotate[0]=u.trans.rotate[0]+360;var m=u.trans.rotate[0]%360;l.trans.rotate[0]+=180>m?-m:360-m}else l.trans.rotate[0]=360}this._curStateItems=i(this._fromStateItems)}},o.prototype._updateAnimationProgress=function(a){a=c[this._easing](a);for(var i=0,o=this._curStateItems.length;o>i;i++)this._curStateItems[i].curve=n(this._fromStateItems[i].curve,this._toStateItems[i].curve,a),this._curStateItems[i].path=C(this._curStateItems[i].curve),this._curStateItems[i].attrsNorm=t(this._fromStateItems[i].attrsNorm,this._toStateItems[i].attrsNorm,a),this._curStateItems[i].attrs=e(this._curStateItems[i].attrsNorm),this._curStateItems[i].trans=r(this._fromStateItems[i].trans,this._toStateItems[i].trans,a),this._curStateItems[i].transStr=s(this._curStateItems[i].trans);for(var i=0,o=this._nodesMorph.length;o>i;i++){var h=this._nodesMorph[i];h.node.setAttribute("d",this._curStateItems[i].path);var u=this._curStateItems[i].attrs;for(var l in u)h.node.setAttribute(l,u[l]);h.node.setAttribute("transform",this._curStateItems[i].transStr)}},o.prototype._animationEnd=function(){for(var t=this._nodesMorph.length-1;t>=0;t--){var e=this._nodesMorph[t];this._states[this._toStateId].items[t]?e.node.setAttribute("d",this._states[this._toStateId].items[t].path):(e.node.parentNode.removeChild(e.node),this._nodesMorph.splice(t,1))}this._curStateId=this._toStateId,this._toStateId=""},o.prototype.to=function(t,e,a){t!==this._toStateId&&(l(this._rafid),e&&(this._duration=e),a&&(this._easing=a),this._setupAnimation(t),this._rafid=u(this._fnTick))};var p="	\n\f\r   ᠎             　\u2028\u2029",f=new RegExp("([a-z])["+p+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+p+"]*,?["+p+"]*)+)","ig"),m=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+p+"]*,?["+p+"]*","ig"),d=function(t){if(!t)return null;if(typeof t==typeof[])return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},a=[];return String(t).replace(f,function(t,r,s){var n=[],i=r.toLowerCase();if(s.replace(m,function(t,e){e&&n.push(+e)}),"m"==i&&n.length>2&&(a.push([r].concat(n.splice(0,2))),i="l",r="m"==r?"l":"L"),"o"==i&&1==n.length&&a.push([r,n[0]]),"r"==i)a.push([r].concat(n));else for(;n.length>=e[i]&&(a.push([r].concat(n.splice(0,e[i]))),e[i]););}),a},g=function(t,e){for(var a=[],r=0,s=t.length;s-2*!e>r;r+=2){var n=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?s-4==r?n[3]={x:+t[0],y:+t[1]}:s-2==r&&(n[2]={x:+t[0],y:+t[1]},n[3]={x:+t[2],y:+t[3]}):n[0]={x:+t[s-2],y:+t[s-1]}:s-4==r?n[3]=n[2]:r||(n[0]={x:+t[r],y:+t[r+1]}),a.push(["C",(-n[0].x+6*n[1].x+n[2].x)/6,(-n[0].y+6*n[1].y+n[2].y)/6,(n[1].x+6*n[2].x-n[3].x)/6,(n[1].y+6*n[2].y-n[3].y)/6,n[2].x,n[2].y])}return a},M=function(t,e,a,r,s){if(null==s&&null==r&&(r=a),t=+t,e=+e,a=+a,r=+r,null!=s)var n=Math.PI/180,i=t+a*Math.cos(-r*n),o=t+a*Math.cos(-s*n),h=e+a*Math.sin(-r*n),c=e+a*Math.sin(-s*n),u=[["M",i,h],["A",a,a,0,+(s-r>180),0,o,c]];else u=[["M",t,e],["m",0,-r],["a",a,r,0,1,1,0,2*r],["a",a,r,0,1,1,0,-2*r],["z"]];return u},v=function(t){if(t=d(t),!t||!t.length)return[["M",0,0]];var e,a=[],r=0,s=0,n=0,i=0,o=0;"M"==t[0][0]&&(r=+t[0][1],s=+t[0][2],n=r,i=s,o++,a[0]=["M",r,s]);for(var h,c,u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),l=o,p=t.length;p>l;l++){if(a.push(h=[]),c=t[l],e=c[0],e!=e.toUpperCase())switch(h[0]=e.toUpperCase(),h[0]){case"A":h[1]=c[1],h[2]=c[2],h[3]=c[3],h[4]=c[4],h[5]=c[5],h[6]=+c[6]+r,h[7]=+c[7]+s;break;case"V":h[1]=+c[1]+s;break;case"H":h[1]=+c[1]+r;break;case"R":for(var f=[r,s].concat(c.slice(1)),m=2,v=f.length;v>m;m++)f[m]=+f[m]+r,f[++m]=+f[m]+s;a.pop(),a=a.concat(g(f,u));break;case"O":a.pop(),f=M(r,s,c[1],c[2]),f.push(f[0]),a=a.concat(f);break;case"U":a.pop(),a=a.concat(M(r,s,c[1],c[2],c[3])),h=["U"].concat(a[a.length-1].slice(-2));break;case"M":n=+c[1]+r,i=+c[2]+s;default:for(m=1,v=c.length;v>m;m++)h[m]=+c[m]+(m%2?r:s)}else if("R"==e)f=[r,s].concat(c.slice(1)),a.pop(),a=a.concat(g(f,u)),h=["R"].concat(c.slice(-2));else if("O"==e)a.pop(),f=M(r,s,c[1],c[2]),f.push(f[0]),a=a.concat(f);else if("U"==e)a.pop(),a=a.concat(M(r,s,c[1],c[2],c[3])),h=["U"].concat(a[a.length-1].slice(-2));else for(var y=0,_=c.length;_>y;y++)h[y]=c[y];if(e=e.toUpperCase(),"O"!=e)switch(h[0]){case"Z":r=+n,s=+i;break;case"H":r=h[1];break;case"V":s=h[1];break;case"M":n=h[h.length-2],i=h[h.length-1];default:r=h[h.length-2],s=h[h.length-1]}}return a},y=function(t,e,a,r){return[t,e,a,r,a,r]},_=function(t,e,a,r,s,n){var i=1/3,o=2/3;return[i*t+o*a,i*e+o*r,i*s+o*a,i*n+o*r,s,n]},b=function(t,e,a,r,s,n,i,o,h,c){var u,l=120*Math.PI/180,p=Math.PI/180*(+s||0),f=[],m=function(t,e,a){var r=t*Math.cos(a)-e*Math.sin(a),s=t*Math.sin(a)+e*Math.cos(a);return{x:r,y:s}};if(c)S=c[0],w=c[1],x=c[2],I=c[3];else{u=m(t,e,-p),t=u.x,e=u.y,u=m(o,h,-p),o=u.x,h=u.y;var d=(Math.cos(Math.PI/180*s),Math.sin(Math.PI/180*s),(t-o)/2),g=(e-h)/2,M=d*d/(a*a)+g*g/(r*r);M>1&&(M=Math.sqrt(M),a=M*a,r=M*r);var v=a*a,y=r*r,_=(n==i?-1:1)*Math.sqrt(Math.abs((v*y-v*g*g-y*d*d)/(v*g*g+y*d*d))),x=_*a*g/r+(t+o)/2,I=_*-r*d/a+(e+h)/2,S=Math.asin(((e-I)/r).toFixed(9)),w=Math.asin(((h-I)/r).toFixed(9));S=x>t?Math.PI-S:S,w=x>o?Math.PI-w:w,0>S&&(S=2*Math.PI+S),0>w&&(w=2*Math.PI+w),i&&S>w&&(S-=2*Math.PI),!i&&w>S&&(w-=2*Math.PI)}var A=w-S;if(Math.abs(A)>l){var C=w,k=o,q=h;w=S+l*(i&&w>S?1:-1),o=x+a*Math.cos(w),h=I+r*Math.sin(w),f=b(o,h,a,r,s,0,i,k,q,[w,C,x,I])}A=w-S;var P=Math.cos(S),F=Math.sin(S),N=Math.cos(w),E=Math.sin(w),L=Math.tan(A/4),T=4/3*a*L,D=4/3*r*L,U=[t,e],z=[t+T*F,e-D*P],R=[o+T*E,h-D*N],V=[o,h];if(z[0]=2*U[0]-z[0],z[1]=2*U[1]-z[1],c)return[z,R,V].concat(f);f=[z,R,V].concat(f).join().split(",");for(var O=[],G=0,Y=f.length;Y>G;G++)O[G]=G%2?m(f[G-1],f[G],p).y:m(f[G],f[G+1],p).x;return O},x=function(t,e){for(var a=v(t),r=e&&v(e),s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},n={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},i=(function(t,e,a){var r,s;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(b.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"==a||"S"==a?(r=2*e.x-e.bx,s=2*e.y-e.by):(r=e.x,s=e.y),t=["C",r,s].concat(t.slice(1));break;case"T":"Q"==a||"T"==a?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(_(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(_(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(y(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(y(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(y(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(y(e.x,e.y,e.X,e.Y))}return t}),o=function(t,e){if(t[e].length>7){t[e].shift();for(var s=t[e];s.length;)c[e]="A",r&&(u[e]="A"),t.splice(e++,0,["C"].concat(s.splice(0,6)));t.splice(e,1),m=Math.max(a.length,r&&r.length||0)}},h=function(t,e,s,n,i){t&&e&&"M"==t[i][0]&&"M"!=e[i][0]&&(e.splice(i,0,["M",n.x,n.y]),s.bx=0,s.by=0,s.x=t[i][1],s.y=t[i][2],m=Math.max(a.length,r&&r.length||0))},c=[],u=[],l="",p="",f=0,m=Math.max(a.length,r&&r.length||0);m>f;f++){a[f]&&(l=a[f][0]),"C"!=l&&(c[f]=l,f&&(p=c[f-1])),a[f]=i(a[f],s,p),"A"!=c[f]&&"C"==l&&(c[f]="C"),o(a,f),r&&(r[f]&&(l=r[f][0]),"C"!=l&&(u[f]=l,f&&(p=u[f-1])),r[f]=i(r[f],n,p),"A"!=u[f]&&"C"==l&&(u[f]="C"),o(r,f)),h(a,r,s,n,f),h(r,a,n,s,f);var d=a[f],g=r&&r[f],M=d.length,x=r&&g.length;s.x=d[M-2],s.y=d[M-1],s.bx=parseFloat(d[M-4])||s.x,s.by=parseFloat(d[M-3])||s.y,n.bx=r&&(parseFloat(g[x-4])||n.x),n.by=r&&(parseFloat(g[x-3])||n.y),n.x=r&&g[x-2],n.y=r&&g[x-1]}return r?[a,r]:a},I=function(t,e,a,r){return null==t&&(t=e=a=r=0),null==e&&(e=t.y,a=t.width,r=t.height,t=t.x),{x:t,y:e,w:a,h:r,cx:t+a/2,cy:e+r/2}},S=function(t,e,a,r,s,n,i,o){for(var h,c,u,l,p,f,m,d,g=[],M=[[],[]],v=0;2>v;++v)if(0==v?(c=6*t-12*a+6*s,h=-3*t+9*a-9*s+3*i,u=3*a-3*t):(c=6*e-12*r+6*n,h=-3*e+9*r-9*n+3*o,u=3*r-3*e),Math.abs(h)<1e-12){if(Math.abs(c)<1e-12)continue;l=-u/c,l>0&&1>l&&g.push(l)}else m=c*c-4*u*h,d=Math.sqrt(m),0>m||(p=(-c+d)/(2*h),p>0&&1>p&&g.push(p),f=(-c-d)/(2*h),f>0&&1>f&&g.push(f));for(var y,_=g.length,b=_;_--;)l=g[_],y=1-l,M[0][_]=y*y*y*t+3*y*y*l*a+3*y*l*l*s+l*l*l*i,M[1][_]=y*y*y*e+3*y*y*l*r+3*y*l*l*n+l*l*l*o;return M[0][b]=t,M[1][b]=e,M[0][b+1]=i,M[1][b+1]=o,M[0].length=M[1].length=b+2,{min:{x:Math.min.apply(0,M[0]),y:Math.min.apply(0,M[1])},max:{x:Math.max.apply(0,M[0]),y:Math.max.apply(0,M[1])}}},w=function(t){for(var e,a=0,r=0,s=[],n=[],i=0,o=t.length;o>i;i++)if(e=t[i],"M"==e[0])a=e[1],r=e[2],s.push(a),n.push(r);else{var h=S(a,r,e[1],e[2],e[3],e[4],e[5],e[6]);s=s.concat(h.min.x,h.max.x),n=n.concat(h.min.y,h.max.y),a=e[5],r=e[6]}var c=Math.min.apply(0,s),u=Math.min.apply(0,n),l=Math.max.apply(0,s),p=Math.max.apply(0,n),f=I(c,u,l-c,p-u);return f},A=/,?([a-z]),?/gi,C=function(t){return t.join(",").replace(A,"$1")},k={hs:1,rg:1},q="hasOwnProperty",P=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,F=new RegExp("["+p+"]*,["+p+"]*"),N=function(t){var e=Math.round;return"rgba("+[e(t.r),e(t.g),e(t.b),+t.opacity.toFixed(2)]+")"},E=function(t){var e=window.document.getElementsByTagName("head")[0]||window.document.getElementsByTagName("svg")[0],a="rgb(255, 0, 0)";return E=function(t){if("red"==t.toLowerCase())return a;e.style.color=a,e.style.color=t;var r=window.document.defaultView.getComputedStyle(e,"").getPropertyValue("color");return r==a?null:r},E(t)},L=function(t,e,a,r){t=Math.round(255*t),e=Math.round(255*e),a=Math.round(255*a);var s={r:t,g:e,b:a,opacity:isFinite(r)?r:1};return s},T=function(t,e,a,r){typeof t==typeof{}&&"h"in t&&"s"in t&&"b"in t&&(a=t.b,e=t.s,t=t.h,r=t.o),t*=360;var s,n,i,o,h;return t=t%360/60,h=a*e,o=h*(1-Math.abs(t%2-1)),s=n=i=a-h,t=~~t,s+=[h,o,0,0,o,h][t],n+=[o,h,h,o,0,0][t],i+=[0,0,o,h,h,o][t],L(s,n,i,r)},D=function(t,e,a,r){typeof t==typeof{}&&"h"in t&&"s"in t&&"l"in t&&(a=t.l,e=t.s,t=t.h),(t>1||e>1||a>1)&&(t/=360,e/=100,a/=100),t*=360;var s,n,i,o,h;return t=t%360/60,h=2*e*(.5>a?a:1-a),o=h*(1-Math.abs(t%2-1)),s=n=i=a-h/2,t=~~t,s+=[h,o,0,0,o,h][t],n+=[o,h,h,o,0,0][t],i+=[0,0,o,h,h,o][t],L(s,n,i,r)},U=function(t){if(!t||(t=String(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,opacity:-1,error:1};if("none"==t)return{r:-1,g:-1,b:-1,opacity:-1};if(!(k[q](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=E(t)),!t)return{r:-1,g:-1,b:-1,opacity:-1,error:1};var e,a,r,s,n,i,o=t.match(P);return o?(o[2]&&(r=parseInt(o[2].substring(5),16),a=parseInt(o[2].substring(3,5),16),e=parseInt(o[2].substring(1,3),16)),o[3]&&(r=parseInt((n=o[3].charAt(3))+n,16),a=parseInt((n=o[3].charAt(2))+n,16),e=parseInt((n=o[3].charAt(1))+n,16)),o[4]&&(i=o[4].split(F),e=parseFloat(i[0]),"%"==i[0].slice(-1)&&(e*=2.55),a=parseFloat(i[1]),"%"==i[1].slice(-1)&&(a*=2.55),r=parseFloat(i[2]),"%"==i[2].slice(-1)&&(r*=2.55),"rgba"==o[1].toLowerCase().slice(0,4)&&(s=parseFloat(i[3])),i[3]&&"%"==i[3].slice(-1)&&(s/=100)),o[5]?(i=o[5].split(F),e=parseFloat(i[0]),"%"==i[0].slice(-1)&&(e/=100),a=parseFloat(i[1]),"%"==i[1].slice(-1)&&(a/=100),r=parseFloat(i[2]),"%"==i[2].slice(-1)&&(r/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(e/=360),"hsba"==o[1].toLowerCase().slice(0,4)&&(s=parseFloat(i[3])),i[3]&&"%"==i[3].slice(-1)&&(s/=100),T(e,a,r,s)):o[6]?(i=o[6].split(F),e=parseFloat(i[0]),"%"==i[0].slice(-1)&&(e/=100),a=parseFloat(i[1]),"%"==i[1].slice(-1)&&(a/=100),r=parseFloat(i[2]),"%"==i[2].slice(-1)&&(r/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(e/=360),"hsla"==o[1].toLowerCase().slice(0,4)&&(s=parseFloat(i[3])),i[3]&&"%"==i[3].slice(-1)&&(s/=100),D(e,a,r,s)):(e=Math.min(Math.round(e),255),a=Math.min(Math.round(a),255),r=Math.min(Math.round(r),255),s=Math.min(Math.max(s,0),1),o={r:e,g:a,b:r},o.opacity=isFinite(s)?s:1,o)):{r:-1,g:-1,b:-1,opacity:-1,error:1}};return h}();