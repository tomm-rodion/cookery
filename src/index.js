const form = document.querySelector('.js-search');
const list = document.querySelector('.cuisine-list');

form.addEventListener('submit', onSearch);
function onSearch(evt) {
  evt.preventDefault();
  const {
    query: { value: valueQuery },
    cuisine: { value: valueCuisine },
  } = evt.currentTarget.elements;
  if (!valueQuery) {
    alert('Поле назви страви пусте!');
    return;
  }
  dishFetch(valueQuery, valueCuisine).then(data => {
    markupCuisine(data);
    console.dir(data.results);
  });
}

const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'c7bb7efa7e314f5491bd0e25f59e7742';

function markupCuisine(data) {
  console.log(typeof data.results);
  const markup = data.results
    .map(item => {
      return `<li class="resipe">
          <img src="${item.image}" alt="${item.title}" />
          <h2 class="title-risipe">${item.title}</h2>
          <a href="${item.sourceUrl}" target = "_blank">Link in ricept</a>
          <p>${item.summary}<p/>
        </li>`;
    })
    .join('');
  console.log(markup);
  if (markup === '' || markup === undefined) {
    alert(
      'Упс..Нажаль такої страви не знайдено, спробуйте іншу назву страви! '
    );
    return;
  }
  list.innerHTML = markup;
}

function dishFetch(name, valueCuisine) {
  return fetch(
    `${BASE_URL}?apiKey=${API_KEY}&query=${name}&cuisine=${valueCuisine}&addRecipeInformation=true`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .catch(err => console.error(err));
}
