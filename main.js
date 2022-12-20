let base = "https://api.open-meteo.com/v1/forecast?latitude=-1.28&longitude=36.82&hourly=temperature_2m"


// const searchbox = document.querySelector('.serch-box');
// searchbox.addEventListener('keypress', setQuery);

// function setQuery(evt) {
//     if (evt.keyCode == 13) {
//         getResult(searchbox.value)
        // console.log(searchbox.value);
//     }
// }

// function getResult(query) {
//     fetch(`${api.base}weather?q=${query}$units=metric`)
//     .then(weather => {
//         return weather.json();
//     })
//     .then(displayResults);
// }

// function displayResults(weather) {
//     console.log(weather);
// }

let url = fetch(base)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error))