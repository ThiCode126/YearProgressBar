const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
const oneDay = 1000 * 60 * 60 * 24;
const day = Math.floor(diff / oneDay);

const year = new Date().getFullYear()

const bissextile = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ) ? true : false;
const nomberOfDay = bissextile ? 366 : 355;

const pourcentDay = Math.floor((day / nomberOfDay) * 100);

const progressBar = document.getElementById("progressBar");

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


let newTitle = '';
newTitle += '<h3>Date du jour : ' + now.toLocaleDateString('fr-FR', options) + '</h3>';
newTitle += '<h3>Jour n°' + day + '</h3>';
newTitle +=  bissextile ? '<h5>Année bissextile : oui</h5>' : '<h5>Année bissextile : non</h5>';
const newHtml = '<div class="progress-bar bg-success" role="progressbar" style="width: ' + pourcentDay + '%" aria-valuenow="' + pourcentDay + '" aria-valuemin="0" aria-valuemax="100"></div>';

progressBar.insertAdjacentHTML('beforebegin', newTitle);
progressBar.insertAdjacentHTML('afterbegin', newHtml);