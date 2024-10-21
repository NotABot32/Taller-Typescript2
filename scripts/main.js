import { series } from "./data.js";
var serieTable = document.getElementById("tablaSeries");
var seriesDetail = document.getElementById("series-detail");
var seriesImage = document.getElementById("series-image");
var seriesTitle = document.getElementById("series-title");
var seriesLink = document.getElementById("series-link");
console.log(series);
mostrarSeries(series);
function mostrarSeries(seriesP) {
    for (var i = 0; i < seriesP.length; i++) {
        console.log(series[i].nombre);
    }
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Channel</th>\n      <th scope=\"col\">Seasons</th>\n    </tr>\n  </thead>\n  <tbody>";
    for (var i = 0; i < seriesP.length; i++) {
        tbodySerie.innerHTML += "\n        <tr>\n            <th scope=\"row\">".concat(seriesP[i].id, "</th>\n            <td><span class=\"series-link\" data-id=\"").concat(seriesP[i].id, "\">").concat(seriesP[i].nombre, "</span></label></td>\n            <td>").concat(seriesP[i].Canal, "</td>\n            <td>").concat(seriesP[i].temporadas, "</td>\n        </tr>\n        ");
    }
    serieTable.appendChild(tbodySerie);
    ;
    var seriesLinks = document.getElementsByClassName('series-link');
    for (var i_1 = 0; i_1 < seriesLinks.length; i_1++) {
        seriesLinks[i_1].addEventListener('click', function (e) {
            var id = Number(e.target.getAttribute('data-id'));
            detalleSerie(id);
        });
    }
    function detalleSerie(idSerie) {
        var serieEncontrada = null;
        for (var i = 0; i < series.length; i++) {
            if (series[i].id === idSerie) {
                serieEncontrada = series[i];
                break;
            }
        }
        if (serieEncontrada) {
            var seriesDetail_1 = document.getElementById('series-detail');
            var seriesImage_1 = document.getElementById('series-image');
            var seriesTitle_1 = document.getElementById('series-title');
            var seriesDescription = document.getElementById('series-description');
            var seriesLink_1 = document.getElementById('series-link');
            seriesDetail_1.style.display = 'block';
            seriesImage_1.src = serieEncontrada.poster;
            seriesTitle_1.textContent = serieEncontrada.nombre;
            seriesDescription.textContent = serieEncontrada.sinopsis;
            console.log(serieEncontrada.sinopsis);
            seriesLink_1.href = serieEncontrada.paginaWeb;
            seriesLink_1.textContent = serieEncontrada.paginaWeb;
        }
    }
    function calcularPromedioTemporadas() {
        var seasonCells = document.querySelectorAll('tbody td:nth-child(4)');
        var totalSeasons = 0;
        var numberOfShows = seasonCells.length;
        seasonCells.forEach(function (cell) {
            totalSeasons += parseInt(cell.textContent || '0');
        });
        var average = totalSeasons / numberOfShows;
        var seasonAverageElement = document.getElementById('seasonAverage');
        seasonAverageElement.textContent = "Seasons average: ".concat(average.toFixed(2));
    }
    calcularPromedioTemporadas();
}
