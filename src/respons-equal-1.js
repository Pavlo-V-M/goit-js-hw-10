
// File respons-equal-1.js // TEST 1

// 1. select div tag HTML for management (DOM-navigation);
const countryCard = document.querySelector('.country-info');

// 2. Next code lines creates a function ifListEqualOne which used to:
// receives length-argument & element-argument as an request data,
// re-design tag div according to countryCard HTML markup layout.
function ifListEqualOne(length, element) {
  if (length === 1) {
    const values = Object.values(element.languages).join(', ');
    countryCard.innerHTML = `<p class="text"> <b>Capital:</b> ${element.capital}</p><p class="text"> <b>Population:</b> ${element.population}</p><p class="text"> <b>Languages:</b> ${values}</p>`;
  } else {
    countryCard.innerHTML = '';
  }
}

// 2. Next code lines add export ifListEqualOne function & countryCard HTML markup layout.
export default { ifListEqualOne, countryCard };
