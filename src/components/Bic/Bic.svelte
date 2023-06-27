<script>
  import { onMount } from 'svelte';
  import L from 'leaflet';
  import { lugares } from "../../../sitios.mjs"
  import Utm from 'geodesy/utm.js'
  import { MarkerClusterGroup } from 'leaflet.markercluster';

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
    map.setView(event.latlng, 16 )
  }

  onMount(() => {
    map = L.map('map').setView([42.812000, -7.90005], 10);
 
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
        <img src=${data.properties.IMG} style="width: 150px; height: 80px; object-fit: contain">
      `;
      let marker = L.marker(latLon).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }
    map.addLayer(markers);

    mapContainer.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  });
</script>

<div class="geo" >
  <h2><span> B </span> <span> I </span><span> C</span>: Bien Interés Cultural </h2>
  <div id="map"style="width: 80%; height: 800px;"bind:this={mapContainer} ></div>
</div>

<style>
  .geo {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
  }

  h2 {
 
    gap: 10px;
    font-size: 6rem;   display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 900;
    text-shadow: 10px 12px 2px rgba(255, 255, 255,);
    color:whitesmoke
  }
  #map{
 margin-left:auto;
 margin-right:auto;
  }
</style>