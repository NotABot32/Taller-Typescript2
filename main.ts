import {series} from "./data.js";
import { Serie } from "./Serie.js";




    let serieTable : HTMLElement = document.getElementById("tablaSeries")!;
let seriesDetail: HTMLElement = document.getElementById("series-detail")!;
let seriesImage: HTMLImageElement = document.getElementById("series-image") as HTMLImageElement;
let seriesTitle: HTMLElement = document.getElementById("series-title")!;
let seriesLink: HTMLAnchorElement = document.getElementById("series-link") as HTMLAnchorElement;

      console.log(series);

        mostrarSeries(series);

      function mostrarSeries(seriesP : Serie[])
      {
        for (var i=0; i<seriesP.length; i++)
        {
            console.log(series[i].nombre);
        }
        let tbodySerie = document.createElement("tbody");
        tbodySerie.innerHTML = `<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Channel</th>
      <th scope="col">Seasons</th>
    </tr>
  </thead>
  <tbody>`
  for (var i=0; i<seriesP.length; i++)
    {
        tbodySerie.innerHTML += `
        <tr>
            <th scope="row">${seriesP[i].id}</th>
            <td><span class="series-link" data-id="${seriesP[i].id}">${seriesP[i].nombre}</span></label></td>
            <td>${seriesP[i].Canal}</td>
            <td>${seriesP[i].temporadas}</td>
        </tr>
        `
    }
   
  serieTable.appendChild(tbodySerie);
  ;


  let seriesLinks = document.getElementsByClassName('series-link');
    for(let i = 0; i < seriesLinks.length; i++) {
        seriesLinks[i].addEventListener('click', function(e) {
            let id = Number((e.target as HTMLElement).getAttribute('data-id'));
            detalleSerie(id);
        });
    }


  
    function detalleSerie(idSerie: number) {
      let serieEncontrada = null;
      for (var i = 0; i < series.length; i++) {
          if (series[i].id === idSerie) {
              serieEncontrada = series[i];
              break;
          }
      }
      
      if (serieEncontrada) {
          const seriesDetail = document.getElementById('series-detail')!;
          const seriesImage = document.getElementById('series-image') as HTMLImageElement;
          const seriesTitle = document.getElementById('series-title')!;
          const seriesDescription = document.getElementById('series-description')!;
          const seriesLink = document.getElementById('series-link') as HTMLAnchorElement;
  
          seriesDetail.style.display = 'block';
          seriesImage.src = serieEncontrada.poster;
          seriesTitle.textContent = serieEncontrada.nombre;
          seriesDescription.textContent = serieEncontrada.sinopsis;
          console.log(serieEncontrada.sinopsis);
          seriesLink.href = serieEncontrada.paginaWeb;
          seriesLink.textContent = serieEncontrada.paginaWeb;
      }
  }

  function calcularPromedioTemporadas(){
      
       const seasonCells = document.querySelectorAll('tbody td:nth-child(4)') as NodeListOf<HTMLTableCellElement>;

       let totalSeasons = 0;
       let numberOfShows = seasonCells.length;

       seasonCells.forEach(cell => {
           totalSeasons += parseInt(cell.textContent || '0');
       });

  
       let average = totalSeasons / numberOfShows;

       
       const seasonAverageElement = document.getElementById('seasonAverage') as HTMLSpanElement;
       seasonAverageElement.textContent = `Seasons average: ${average.toFixed(2)}`;
   
      }
    
      calcularPromedioTemporadas();
  
}

      
    