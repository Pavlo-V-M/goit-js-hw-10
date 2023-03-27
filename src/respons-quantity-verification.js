
// File respons-quantity-verification.js // TEST 1
// 1. Next code lines add imports of function:
import API3 from './respons-more-then-10'; // ifListMoreTen
import API4 from './respons-equal-1'; // ifListEqualOne
import API5 from './respons-up-to-10'; // getCountryList

// 2. selects ul tag in HTML for management (DOM-navigation);
const countryList = document.querySelector('.country-list');

// 3. Next code lines creates a function listCountryCard which used to:
// start one of previous f... depending on request data matches in the response.
function listCountryCard(country) {
  let listArray = [];
  country.forEach(element => {
    listArray.push(API5.getCountryList(element));
    API4.ifListEqualOne(listArray.length, element);
    countryList.append(...listArray);
  });
  API3.ifListMoreTen(listArray.length);
}

// 4. Next code lines add export listCountryCard function & countryList HTML markup layout.
export default { listCountryCard, countryList };
