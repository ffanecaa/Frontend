<script>
  import { onMount } from 'svelte';
  import L from 'leaflet';
  import { lugares } from "../../../sitios.mjs"
  import Utm from 'geodesy/utm.js'
  import { MarkerClusterGroup } from 'leaflet.markercluster';
  // import Fotos from '../Header/Fotos.svelte';

  const datas = lugares.features;
  let markers = new MarkerClusterGroup();
  let map;
  let mapMarkerToElement = new Map();
  let mapContainer

  
 /**
 * Función que se ejecuta al hacer clic en un marcador para atrapar las coordenadas.
 * @param {LeafletEvent} event - Evento de clic en el marcador.
 */
 function saveMarkerTarget(event) {
    map.setView(event.latlng, 18 )
  }

  onMount(() => {
    map = L.map('map').setView([42.812000, -7.90005], 9);
 
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    // }).addTo(map);

   L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
      layers: "OI.OrthoimageCoverage",
      format: 'image/jpeg',
      transparent: true,
      version: '1.3.0',
      attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
    }).addTo(map);
    

//       L.tileLayer.wms("https://www.ign.es/wms-inspire/ign-base?", {
//     layers: 'IGNBaseTodo',
//     format: 'image/png',
//     transparent: true,
//     attribution: "ing"
// }).addTo(map);


    for (let data of datas) {
      const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      const latLon = utm.toLatLon();
      const contenido = `
        <h3>${data.properties.NOME}</h3>
        <p>${data.properties.ID_BIC}</p>
        <p>${data.properties.CONCELLO}</p>
       
      `;
      // <img src=${data.properties.IMG} style="width: 150px; height: 80px; object-fit: contain"
      let marker = L.marker(latLon).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }
    map.addLayer(markers);

    mapContainer.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  });
</script>

<div class="geo" >
  <h2>BIC: Bien Interés Cultural </h2>
  <p> es cualquier inmueble y objeto mueble de interés histórico, artístico, paleontológico, arqueológico, etnográfico, científico o técnico, que haya sido declarado como tal por la administración competente. También puede ser declarado como BIC el patrimonio documental y bibliográfico, los yacimientos y zonas arqueológicas, así como los sitios naturales, jardines y parques, que tengan valor artístico, histórico o antropológico.<br>
 [...] Conforme al dispuesto en la disposición transitoria primera de la Ley 5/2016 del Patrimonio Cultural de Galicia, continuarán siendo de aplicación a todos los procedimientos de declaración de interés cultural las normas reglamentarias vigentes a su entrada en vigor que regulan dicho procedimiento, en tanto no se opongan a lo dispuesto en esta ley, por lo que para las solicitudes y definición del contenido de los bienes del Registro de BIC sigue en vigor el dispuesto en el Decreto 430/1991, de 30 de diciembre, por el que se regula la tramitación para la declaración de bien de interés cultural y se crea el Registro de Bienes de Interés Cultural para Galicia (DOG nº 14 de 22 de enero de 1992), en las condiciones descritas.[...] <br><a href="https://sede.xunta.gal/detalle-procedemento?codtram=CT135A" target="a_blanck">**Procedimiento de solicitud de incoación de Bienes de Interés Cultural</a>  </p>

  <div id="map"bind:this={mapContainer} ></div>


  <!-- <Fotos/> -->
  </div>


<style>
  .geo {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
  }
  #map{
 margin:auto;
 width: 80%;
  height:80vh;
  filter:brightness(1.1);
  }

  h2 {
 
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 900;
     background: transparent;
    font-size: 4rem;
    font-weight: bold;
    margin-top: 0%;
    margin-left:0%;
    text-align:center;
    text-shadow: 2px 2px 2px white;
    overflow: hidden;
  
  }
  p {
  text-align: justify; 
   
 margin:0 10% 5% 10%
}

 a{
  font-size:1.2rem;
  text-decoration:underline;
  color:blue
 }
 a:hover{
   font-size:1.3rem;
   color:red;
    transform: scale(1.1);
 }

</style>