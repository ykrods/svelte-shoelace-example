function t(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}function e(e){var i,a;const n=[];!function t(e){e instanceof HTMLElement&&(n.push(e),null!==e.shadowRoot&&"open"===e.shadowRoot.mode&&t(e.shadowRoot)),[...e.children].forEach((e=>t(e)))}(e);return{start:null!=(i=n.find((e=>t(e))))?i:null,end:null!=(a=n.reverse().find((e=>t(e))))?a:null}}export{e as g};