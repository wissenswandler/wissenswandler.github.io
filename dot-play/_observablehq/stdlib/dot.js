var a=Object.defineProperty;var l=(t,e)=>a(t,"name",{value:e,configurable:!0});import{instance as c}from"../../_npm/@viz-js/viz@3.4.0/_esm.js";var f=Object.defineProperty,u=l((t,e)=>f(t,"name",{value:e,configurable:!0}),"n");const m=await c();function i(t){let e=t[0]+"",n=0,s=arguments.length;for(;++n<s;)e+=arguments[n]+""+t[n];const o=m.renderSVGElement(e,{graphAttributes:{bgcolor:"none",color:"#00000101",fontcolor:"#00000101",fontname:"var(--sans-serif)",fontsize:"12"},nodeAttributes:{color:"#00000101",fontcolor:"#00000101",fontname:"var(--sans-serif)",fontsize:"12"},edgeAttributes:{color:"#00000101"}});for(const r of o.querySelectorAll("[stroke='#000001'][stroke-opacity='0.003922']"))r.setAttribute("stroke","currentColor"),r.removeAttribute("stroke-opacity");for(const r of o.querySelectorAll("[fill='#000001'][fill-opacity='0.003922']"))r.setAttribute("fill","currentColor"),r.removeAttribute("fill-opacity");return o.remove(),o.style="max-width: 100%; height: auto;",o}l(i,"f"),u(i,"dot");export{i as default};
