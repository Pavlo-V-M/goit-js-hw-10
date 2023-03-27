
// File respons-up-to-10.js // TEST 1

// 1. Next code lines creates a function getCountryList which used to:
// receives as an element-argument request data,
// design tags li, img, h1 according to countryItem HTML markup layout.
function getCountryList(element) {
  const countryItem = document.createElement('li');
  countryItem.classList.add('item');
  countryItem.innerHTML = `
        <img src="${element.flags.svg}" alt="${element.flags.alt}" width ="40px" height ="40"px />
          <h1 class="title">${element.name.official}</h1>`;
  return countryItem;
}

// 2. Next code lines add export getCountryList function.
export default { getCountryList };