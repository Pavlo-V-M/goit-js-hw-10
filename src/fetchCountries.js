
// File fetchCountries.js

// TEST 0

// fetch('https://restcountries.com/v3.1/name/deutschland')
//   .then(response => {
//     return response.json();
//   })
//   .then(countrie => {
//     console.log(countrie);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// ---------------------------------------------------

// fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flag,languages')
//   .then(response => {
//     return response.json();
//   })
//   .then(countrie => {
//     console.log(countrie);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// TEST 1
// const countrie = 'deutschland'; // 'canada' 'poland' 'ukraine'

// 1. Next code line creates a variable for the entry point 
// from which the data will be queried.
const DATA_ENTRY_POINT = 'https://restcountries.com/v3.1';

// 2. Next code line creates a function which takes requestData as an argument
// and uses it to construct a URL for the API call.The fetch() method is used 
// to make the request and the response is checked for errors.If there are 
// no errors, the response is parsed into JSON and returned as a promise.
function fetchCountries(requestData) {
  const url = `${DATA_ENTRY_POINT}/name/${requestData}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// fetchCountries(countrie).then(data => console.log(data)).catch(error => console.log(error));

// 3. Next code lines add export fetchCountries function.
export default { fetchCountries };