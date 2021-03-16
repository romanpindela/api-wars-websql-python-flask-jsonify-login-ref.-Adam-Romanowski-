import * as renderer from "./renderer.js";
import {createModalRow} from "./renderer.js";

const buttons = {
    previous: document.querySelector('.prev-btn'),
    next: document.querySelector('.next-btn')
}
const tableElement = document.querySelector('.table');
const modalWrapper = document.querySelector('.modal-wrapper');

const urls = {
    home: 'https://swapi.dev/api/planets',
    previous: '',
    next: ''
}

function initButtons() {
    buttons.previous.addEventListener('click', () => fetchData(urls.previous));
    buttons.next.addEventListener('click', () => fetchData(urls.next));
    buttons.previous.addEventListener('dblclick', event => event.preventDefault());
}

initButtons();

fetchData(urls.home);

function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            updateButtons(response);
            let tableDataElements = renderer.tableHeaders;
            response.results.forEach(planet => tableDataElements += renderer.createRow(planet));
            tableElement.innerHTML = tableDataElements;
            response.results.forEach(planet => {
                const thElement = document.getElementById(`${planet.name}`);
                if (planet.residents.length > 0) {
                    const button = document.createElement('button');
                    button.addEventListener('click', () => displayPopup(planet.residents));
                    button.innerText = `${planet.residents.length} resident(s)`;
                    thElement.appendChild(button);
                } else {
                    thElement.innerText = 'nonono';
                }
            })
        });
}

function updateButtons(response) {
    urls.previous = response.previous;
        urls.next = response.next;
        if(!urls.previous) {
            buttons.previous.setAttribute('disabled', '');
        } else {
            buttons.previous.removeAttribute('disabled');
        }

        if(!urls.next) {
            buttons.next.setAttribute('disabled', '');
        } else {
            buttons.next.removeAttribute('disabled');
        }
}

export function displayPopup(residents) {
    let modalHTML = renderer.tableModalHeaders;
    residents.forEach(residentUrl => {
        fetch(residentUrl)
            .then(response => response.json())
            .then(resident => {
                document.querySelector('.modal-table').innerHTML += createModalRow(resident);
            });
    })

    modalHTML += '</table>';
    const button = document.createElement('button');
    button.addEventListener('click', () => modalWrapper.innerHTML = '');
    button.innerText = 'Close';
    modalWrapper.innerHTML = modalHTML;
    modalWrapper.appendChild(button);
}