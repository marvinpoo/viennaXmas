(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9457:(e,t,s)=>{Promise.resolve().then(s.bind(s,7838))},7838:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var l=s(5155),a=s(2115),i=s(5565),n=s(767),r=s(3518),c=s(6967);function o(e){let{images:t,selectedIndex:s,onClose:o}=e,[u,d]=(0,a.useState)(s),f=()=>{d(e=>e>0?e-1:t.length-1)},h=()=>{d(e=>e<t.length-1?e+1:0)};return(0,a.useEffect)(()=>{let e=e=>{"ArrowLeft"===e.key?f():"ArrowRight"===e.key?h():"Escape"===e.key&&o()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,l.jsxs)("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:[(0,l.jsx)("button",{className:"absolute top-4 right-4 text-white",onClick:o,children:(0,l.jsx)(n.A,{size:24})}),(0,l.jsx)("button",{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-white",onClick:f,children:(0,l.jsx)(r.A,{size:24})}),(0,l.jsx)("button",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-white",onClick:h,children:(0,l.jsx)(c.A,{size:24})}),(0,l.jsx)("div",{className:"relative w-full h-full max-w-4xl max-h-full",children:(0,l.jsx)(i.default,{src:t[u].src,alt:t[u].alt,layout:"fill",objectFit:"contain",sizes:"100vw"})})]})}function u(){let[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(null);return(0,a.useEffect)(()=>{(async()=>{let e=await fetch("/data/images.json");t(await e.json())})()},[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:e.map((e,t)=>(0,l.jsx)("div",{className:"relative w-full h-48 cursor-pointer",children:(0,l.jsx)(i.default,{src:"/thumbnails/".concat(e.name,"-medium.webp"),alt:e.alt,layout:"fill",objectFit:"cover",onClick:()=>n(t),className:"rounded-lg"})},t))}),null!==s&&(0,l.jsx)(o,{images:e,selectedIndex:s,onClose:()=>n(null)})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[356,441,517,358],()=>t(9457)),_N_E=e.O()}]);