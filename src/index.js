// File index.js

// TEST - 1

// 1. Next code lines add imports:
// previous function, 
// styles & set dependency ... 

import './css/styles.css';
import Notiflix from 'notiflix';
import API from './fetchCountries';
import API2 from './respons-quantity-verification';
import API4 from './respons-equal-1';
import debounce from 'lodash.debounce';

// 2. Next code lines restricts sending typing-requests;
// + selects input field in tag input in HTML for management (DOM-navigation); 
// + selects in teg div in HTML for management (DOM-navigation);

const DEBOUNCE_DELAY = 300;
const ref = {
  input: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
};

// 2. Next code lines add event listener on input for management 
// & add restricts sending typing-requests;

ref.input.addEventListener('input', debounce(getValue, DEBOUNCE_DELAY));

// 3. Next code creates a function getValue which used to get the value 
// of the input field as argument. Function processes data:
// - fetchCountries function to response request data;
// - listCountryCard function & countryList HTML markup layout;
// - ifListEqualOne function & countryCard HTML markup layout; 
// + checking input field value if is an empty, tag div HTML markup is emptied,
// + Otherwise calls listCountryCard function which creates card = countryList HTML markup layout 
// for each country that matches the input value.
// +  If no country matches the input value, a failure notification is displayed.

function getValue(event) {
  API2.countryList.innerHTML = '';
  if (event.target.value.trim() === '') {
    API4.countryCard.innerHTML = '';
    return;
  }
  const value = event.target.value;
  API.fetchCountries(value)
    .then(country => {
      API2.listCountryCard(country);
    })
    .catch(error => {
      return Notiflix.Notify.failure(
        'Oops, there is no country with that name'
      );
    });
}
