var t=new Set;function o(o){if(t.add(o),!document.body.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function e(o){t.delete(o),0===t.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function l(t,o,e="vertical",l="smooth"){const c=function(t,o){return{top:Math.round(t.getBoundingClientRect().top-o.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-o.getBoundingClientRect().left)}}(t,o),n=c.top+o.scrollTop,s=c.left+o.scrollLeft,i=o.scrollLeft,r=o.scrollLeft+o.offsetWidth,d=o.scrollTop,f=o.scrollTop+o.offsetHeight;"horizontal"!==e&&"both"!==e||(s<i?o.scrollTo({left:s,behavior:l}):s+t.clientWidth>r&&o.scrollTo({left:s-o.offsetWidth+t.clientWidth,behavior:l})),"vertical"!==e&&"both"!==e||(n<d?o.scrollTo({top:n,behavior:l}):n+t.clientHeight>f&&o.scrollTo({top:n-o.offsetHeight+t.clientHeight,behavior:l}))}export{o as l,l as s,e as u};