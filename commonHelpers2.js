import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t="feedback-form-state",a=document.querySelector(".feedback-form"),r=a.querySelector("input"),o=a.querySelector("textarea");a.addEventListener("submit",e=>{if(e.preventDefault(),r.value.trim()===""||o.value.trim()===""){alert("Будь ласка, заповніть всі поля форми перед відправленням.");return}console.log(JSON.parse(localStorage.getItem(t))),localStorage.removeItem(t),e.currentTarget.reset()});a.addEventListener("input",()=>{const e={email:r.value.trim(),message:o.value.trim()};localStorage.setItem(t,JSON.stringify(e))});function i(){const e=JSON.parse(localStorage.getItem(t));if(e){const s=e.email,l=e.message;e.email&&(r.value=s),e.message&&(o.value=l)}}i();
//# sourceMappingURL=commonHelpers2.js.map
