import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as o}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector("form"),s=document.querySelector("input[type=number]"),a=document.querySelector("input[value=fulfilled]"),c=document.querySelector("input[value=rejected]");let t,i;l.addEventListener("submit",m);s.addEventListener("input",d);a.addEventListener("change",n);c.addEventListener("change",n);function d(e){return t=Number(e.target.value)}function n(e){return i=e.target.value}function m(e){e.preventDefault(),new Promise((r,u)=>{setTimeout(()=>{if(i==="fulfilled")return r(t);i==="rejected"&&u(t)},t)}).then(f).catch(p)}function f(e){o.show({position:"topRight",class:"iziToastFulfilled",title:"OK",message:`Fulfilled promise in ${e}ms`,iconUrl:"../img/ok.svg"})}function p(e){o.show({position:"topRight",class:"iziToastRejected",title:"Error",message:`Rejected promise in ${e}ms`,iconUrl:"../img/error.svg"})}
//# sourceMappingURL=2-snackbar.js.map
