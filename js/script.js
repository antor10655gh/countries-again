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

const getCountry = ({name, flags, area, region}) => {
    return `
        <div class="country-info">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Continent: ${region}</p>
            <img src="${flags.png}" alt="">
        </div>
    `
}

loadCountries();