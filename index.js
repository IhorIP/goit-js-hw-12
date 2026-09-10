import{a as d,S as q,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();d.defaults.baseURL="https://pixabay.com/api/";const E="57544668-0cace1b92c04c751854fcca6c",v=15;async function f(t,r){const s={key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:v};return(await d.get("",{params:s})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".load-more"),M=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const r=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:o,views:n,comments:S,downloads:P})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>${o}
              </p>
              <p class="info-item">
                <b>Views</b>${n}
              </p>
              <p class="info-item">
                <b>Comments</b>${S}
              </p>
              <p class="info-item">
                <b>Downloads</b>${P}
              </p>
            </div>
          </a>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",r),M.refresh()}function R(){m.innerHTML=""}function p(){g.classList.remove("is-hidden")}function b(){g.classList.add("is-hidden")}function $(){y.classList.remove("is-hidden")}function u(){y.classList.add("is-hidden")}const B=document.querySelector(".form"),O=document.querySelector(".load-more"),x=15;let l="",c=1,L=0;B.addEventListener("submit",A);O.addEventListener("click",H);async function A(t){t.preventDefault();const r=t.target.elements["search-text"].value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}l=r,c=1,R(),u(),p();try{const s=await f(l,c);if(L=s.totalHits,s.hits.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits),w()}catch(s){a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(s)}finally{b(),t.target.reset()}}async function H(){c+=1,u(),p();try{const t=await f(l,c);h(t.hits),_(),w()}catch(t){a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}finally{b()}}function w(){c*x>=L?(u(),a.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):$()}function _(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
