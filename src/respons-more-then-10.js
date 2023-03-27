
// File response-more-then-10.js // TEST 1

// 1. Next code lines add imports ...
import Notiflix from 'notiflix';

// 2. Next code line select tag ul in HTML for management (DOM-navigation);
const countryList = document.querySelector('.country-list');

// 3. Next code lines creates a function ifListMoreTen which used to checking 
// the number of matches request data in the response. If the request data > 10, 
// then tag ul in HTML markup stay empty & displays alert that = set dependency.
function ifListMoreTen(length) {
  if (length > 10) {
    countryList.innerHTML = '';
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}

// 4. Next code lines add export ifListMoreTen function.
export default { ifListMoreTen };