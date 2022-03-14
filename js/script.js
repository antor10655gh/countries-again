const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => displayCountries(json));
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('country');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountry = country => {
    return `
        <div class="country-info">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" alt="">
        </div>
    `
}

loadCountries();