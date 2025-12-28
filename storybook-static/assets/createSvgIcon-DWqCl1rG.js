import{r as g,R as m}from"./index-BF9HgEP8.js";import{c as P}from"./index-BEUhGoCT.js";var q=function(e){return function(t){return!e||!t?"":Array.isArray(t)?P(t.filter(function(n){return!!n}).map(function(n){return"".concat(e,"-").concat(n)})):"".concat(e,"-").concat(t)}},I=g.createContext({});I.Provider;function j(){var e=g.useContext(I)||{},t=e.classPrefix,n=t===void 0?"rs-":t,r=e.csp,i=e.disableInlineStyles,a=i===void 0?!1:i;return{classPrefix:n,csp:r,disableInlineStyles:a}}function H(){var e=j().classPrefix,t="".concat(e,"icon");return[t,q(t)]}var x=[],f=[];function M(e){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.setAttribute("data-insert-css","rsuite-icons"),e&&t.setAttribute("nonce",e),t}function U(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.prepend===!0?"prepend":"append",r=t.container||document.querySelector("head");if(!r)throw new Error("No container found to insert CSS.");var i=x.indexOf(r);i===-1&&(i=x.push(r)-1,f[i]={});var a;return f[i][n]?a=f[i][n]:(a=M(t.nonce),f[i][n]=a,n==="prepend"?r.insertBefore(a,r.firstChild):r.appendChild(a)),e.charCodeAt(0)===65279&&(e=e.slice(1)),a.styleSheet?a.styleSheet.cssText+=e:a.textContent+=e,a}var W=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"rs-";return".".concat(e,`icon {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
}
.`).concat(e,`icon[tabindex] {
  cursor: pointer;
}
.`).concat(e,`icon-spin {
  -webkit-animation: icon-spin 2s infinite linear;
          animation: icon-spin 2s infinite linear;
}
.`).concat(e,`icon-pulse {
  -webkit-animation: icon-spin 1s infinite steps(8);
          animation: icon-spin 1s infinite steps(8);
}
.`).concat(e,`icon-flip-horizontal {
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}
.`).concat(e,`icon-flip-vertical {
  -webkit-transform: scaleY(-1);
      -ms-transform: scaleY(-1);
          transform: scaleY(-1);
}
@-webkit-keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
@keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}`)},w=!1,F=function(){var e=j(),t=e.csp,n=e.classPrefix,r=e.disableInlineStyles;g.useEffect(function(){!w&&!r&&(U(W(n),{prepend:!0,nonce:t==null?void 0:t.nonce}),w=!0)},[])};function O(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e){if(Array.isArray(e))return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(d){a=!0,s=d}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Q(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){u(e,i,n[i])})}return e}function V(e,t){if(e==null)return{};var n=Z(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Z(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function C(e,t){return G(e)||J(e,t)||K(e,t)||Q()}function K(e,t){if(e){if(typeof e=="string")return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}}function ee(e){var t={};return Object.entries(e).forEach(function(n){var r=C(n,2),i=r[0],a=r[1];typeof a<"u"&&(t[i]=a)}),t}var k=m.forwardRef(function(e,t){var n=e.as,r=n===void 0?"svg":n,i=e.spin,a=e.pulse,o=e.flip,s=e.fill,d=s===void 0?"currentColor":s,E=e.className,p=e.rotate,A=e.children,N=e.viewBox,l=e.size,z=e.width,B=e.height,_=e.style,R=V(e,["as","spin","pulse","flip","fill","className","rotate","children","viewBox","size","width","height","style"]),h=C(H(),2),T=h[0],y=h[1],c,X=P(E,T,(c={},u(c,y("spin"),i),u(c,y("pulse"),a),u(c,y("flip-".concat(o)),!!o),c)),Y={msTransform:"rotate(".concat(p,"deg)"),transform:"rotate(".concat(p,"deg)")};F();var v,$=(v=l??z)!==null&&v!==void 0?v:"1em",b,D=(b=l??B)!==null&&b!==void 0?b:"1em",L=ee({width:$,height:D,fill:d,viewBox:N,className:X,style:p?S({},Y,_):_});return m.createElement(r,S({"aria-hidden":!0,focusable:!1,ref:t},L,R),A)});k.displayName="Icon";function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){te(e,i,n[i])})}return e}function ae(e){var t=e.as,n=e.ariaLabel,r=e.displayName,i=e.category,a=m.forwardRef(function(o,s){return m.createElement(k,ne({"aria-label":n,"data-category":i,ref:s,as:t},o))});return a.displayName=r,a}export{k as I,ae as c};
