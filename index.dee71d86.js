!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var n=document.querySelector(".js-search"),r=document.querySelector(".cuisine-list");n.addEventListener("submit",(function(n){n.preventDefault();var i=n.currentTarget.elements,u=i.query.value,a=i.cuisine.value;if(!u)return void alert("Поле назви страви пусте!");(function(e,t){return fetch("".concat(c,"?apiKey=").concat(o,"&query=").concat(e,"&cuisine=").concat(t,"&addRecipeInformation=true")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){return console.error(e)}))})(u,a).then((function(n){!function(n){console.log(e(t)(n.results));var c=n.results.map((function(e){return'<li class="resipe">\n          <img src="'.concat(e.image,'" alt="').concat(e.title,'" />\n          <h2 class="title-risipe">').concat(e.title,'</h2>\n          <a href="').concat(e.sourceUrl,'" target = "_blank">Link in ricept</a>\n          <p>').concat(e.summary,"<p/>\n        </li>")})).join("");if(console.log(c),""===c||void 0===c)return void alert("Упс..Нажаль такої страви не знайдено, спробуйте іншу назву страви! ");r.innerHTML=c}(n),console.dir(n.results)}))}));var c="https://api.spoonacular.com/recipes/complexSearch",o="c7bb7efa7e314f5491bd0e25f59e7742"}();
//# sourceMappingURL=index.dee71d86.js.map