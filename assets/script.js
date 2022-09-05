const dropDown = document.querySelector('#dropdown');
const dropDownFilter = document.querySelector('#dropdown-filter');
const filterRegion = document.querySelector('#region');

function handleDropDown(e) {
    dropDownFilter.classList.toggle('opened');
}

dropDown.addEventListener('click', handleDropDown)

async function countries() {
    const requestURL = 'https://restcountries.com/v3.1/all';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const superHero = await response.json();
    const member = superHero;
    const body = document.querySelector('body');
    const mainDiv = document.createElement('div');
    const container = document.querySelector('#container');
    mainDiv.setAttribute('id', 'main');
    for (members of member) {
        const name = members.name;
        const flags = members.flags;
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const regions = members.region;
        div2.classList.add('text');
        div.classList.add('cards')
        const h2 = document.createElement('h2');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const tlD = document.createElement('p');
        const nativeNa = document.createElement('p');
        const currencies = document.createElement('p');
        const countryPopulation = document.createElement('p');
        const region = document.createElement('p');
        const subRegion = document.createElement('p');
        const capital = document.createElement('p');
        const lang = document.createElement('p');
        const borders = document.createElement('p');
        const countryBorders = document.querySelector('#borders p');
        const img = document.createElement('img');
        const btn = document.createElement('button');
        tlD.innerText = members.tld;
        nativeNa.innerText = Object.keys(name.nativeName);
        currencies.innerText = Object.keys(members.currencies);
        countryPopulation.innerText = members.population;
        region.innerText = members.region;
        subRegion.innerText = members.subregion;
        capital.innerText = members.capital;
        lang.innerText = Object.keys(members.languages);
        borders.innerText = members.borders;
        h2.innerText = name.common;
        p3.innerText = `Population: ${members.population}`;
        p1.innerText = `Region: ${members.region}`;
        p2.innerText = `Capital: ${members.capital}`;
        img.src = `${flags.svg}`;
        btn.innerText = 'Read more';
        btn.classList.add('btn');
        btn.classList.add('btn-primary');
        btn.classList.add('mt-3');
        const country = name.common;
        btn.setAttribute('id', `${country}`)
        div.appendChild(img);
        div.appendChild(div2)
        div2.appendChild(h2);
        div2.appendChild(p3);
        div2.appendChild(p1);
        div2.appendChild(p2);
        div2.appendChild(btn);
        mainDiv.appendChild(div);
        container.appendChild(mainDiv);
        const search = document.querySelector('input[type ="search"]');
        const backBtn = document.querySelector('#back');
        const newPage = document.querySelector('#page');
        const filters = document.querySelector('#filter');

        function back() {
            container.appendChild(mainDiv);
            newPage.classList.add('d-none');
            newPage.classList.remove('opened');
            filters.classList.remove('d-none');
            filters.classList.add('d-flex');
        }

        backBtn.addEventListener('click', back)

        function countryDetails(e) {
            const countryText = document.querySelector('#country');
            const countryImg = document.querySelector('#country-image');
            const native = document.querySelector('#native p');
            const population = document.querySelector('#population p');
            const domain = document.querySelector('#domain p');
            const currncy = document.querySelector('#currencies p');
            const countryRegion = document.querySelector('#regions p');
            const countryLang = document.querySelector('#language p');
            const countrySubRegion = document.querySelector('#subregion p');
            const countryCapital = document.querySelector('#capital p');
            filters.classList.add('d-none');
            filters.classList.remove('d-flex');
            container.removeChild(mainDiv);
            if (btn.id == country) {
                newPage.classList.toggle('opened');
                countryText.innerText = country;
                countryImg.src = `${flags.svg}`;
                native.innerText = nativeNa.innerText;
                population.innerText = countryPopulation.innerText;
                domain.innerText = tlD.innerText;
                currncy.innerText = currencies.innerText;
                countryRegion.innerText = region.innerText;
                countryLang.innerText = lang.innerText;
                countrySubRegion.innerText = subRegion.innerText;
                countryCapital.innerText = capital.innerText;
                countryBorders.innerText = borders.innerText;
            }
        }

        btn.addEventListener('click', countryDetails)

        function filter(e) {
            filterRegion.innerText = e.target.innerText;
            if (filterRegion.innerText == regions) {
                div.appendChild(img);
                div.appendChild(div2);
                div2.appendChild(h2);
                div2.appendChild(p3);
                div2.appendChild(p1);
                div2.appendChild(p2);
                div2.appendChild(btn);
                mainDiv.appendChild(div);
            } else {
                div.removeChild(img);
                div.removeChild(div2);
                div2.removeChild(h2);
                div2.removeChild(p3);
                div2.removeChild(p1);
                div2.removeChild(p2);
                div2.removeChild(btn);
                mainDiv.removeChild(div);
            }
        }

        dropDownFilter.addEventListener('click', filter)

        function handleSearch(e) {
            if (search.value == country || search.value == country.toUpperCase() || search.value == country.toLowerCase() || search.value == '') {
                div.appendChild(img);
                div.appendChild(div2);
                div2.appendChild(h2);
                div2.appendChild(p3);
                div2.appendChild(p1);
                div2.appendChild(p2);
                div2.appendChild(btn);
                mainDiv.appendChild(div);
            } else {
                div.removeChild(img);
                div.removeChild(div2);
                div2.removeChild(h2);
                div2.removeChild(p3);
                div2.removeChild(p1);
                div2.removeChild(p2);
                div2.removeChild(btn);
                mainDiv.removeChild(div);
            }
        }

        search.addEventListener('change', handleSearch);
    }
}

countries();
