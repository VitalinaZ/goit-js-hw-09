const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");e.addEventListener("click",(()=>{timeId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.disabled=!0,d.disabled=!1}),1e3)})),d.addEventListener("click",(()=>{clearInterval(timeId),d.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.3e7f5084.js.map