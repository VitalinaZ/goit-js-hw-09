const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let a=null;d.disabled=!0,e.addEventListener("click",(()=>{a=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.disabled=!0,d.disabled=!1}),1e3)})),d.addEventListener("click",(()=>{clearInterval(a),d.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.acd71c4a.js.map
