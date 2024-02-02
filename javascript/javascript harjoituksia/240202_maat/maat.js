import { countries } from "./maadata.js";

function toggleVisibility() {
    this.nextElementSibling.classList.toggle("hidden");
    this.nextElementSibling.nextElementSibling.classList.toggle('hidden');
    this.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('hidden');
}

window.onload = function() {
    const countryListDiv = document.getElementById('countrylist');

    countries.forEach(country =>  {
        let countyDiv = document.createElement('div');
        countyDiv.classList = 'country';
        countyDiv.innerHTML = 
        `<button>${country.name}</button>
        <p class="hidden">Pääkaupunki: ${country.capital}</p>
        <p class="hidden">Väkiluku: ${country.population}</p>
        <img class="hidden" src="${country.flag}" alt="Flag of ${country.name}">`;

        countryListDiv.appendChild(countyDiv);
    });

    for (let country of countryListDiv.children) {
        country.firstChild.addEventListener("click", toggleVisibility);
    }
}