<script>
  import { onMount } from 'svelte';
  import L from 'leaflet';

  import { ele } from "../../../prueb1.mjs"
  import { ele2 } from "../../../prueb2.mjs"
  import { ele3 } from "../../../prueb3.mjs"
  import { ele4 } from "../../../prueb4.mjs"
  import { ele5 } from "../../../prueb5.mjs"
  import { ele6 } from "../../../prueb6.mjs"
   import { ele7} from "../../../prueba7.mjs"
 // import Utm from 'geodesy/utm.js'
  import { MarkerClusterGroup } from 'leaflet.markercluster';

  const datas = ele.features;
  const datos = ele2.features;
  const datosTercero = ele3.features;
  const datosCuarto = ele4.features;
  const datosCinco = ele5.features;
  const datosSeis = ele6.features;
  const datosSiete = ele7.features;
  let markers = new MarkerClusterGroup();
  let map;
  let mapMarkerToElement = new Map();

  
 /**
 * Función que se ejecuta al hacer clic en un marcador para atrapar las coordenadas.
 * @param {LeafletEvent} event - Evento de clic en el marcador.
 */
 function saveMarkerTarget(event) {
    map.setView(event.latlng, 18 )
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


    for (let data  of datas) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates)
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
       
      `;
      let marker = L.marker([data.geometry.coordinates[1],data.geometry.coordinates[0]]).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }

    for (let data  of datos) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates)
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([data.geometry.coordinates[1],data.geometry.coordinates[0]]).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }
    for (let data  of datosTercero) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates)
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([data.geometry.coordinates[1],data.geometry.coordinates[0]]).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }
    for (let data  of datosCuarto) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates)
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([data.geometry.coordinates[1],data.geometry.coordinates[0]]).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }
    for (let data  of datosCinco) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates)
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([data.geometry.coordinates[1],data.geometry.coordinates[0]]).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }
    for (let data  of datosSeis) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates)
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([data.geometry.coordinates[1],data.geometry.coordinates[0]]).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }
    for (let data  of datosSeis) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates)
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([data.geometry.coordinates[1],data.geometry.coordinates[0]]).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }
    
    for (let data  of datosSiete) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates)
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([data.geometry.coordinates[1],data.geometry.coordinates[0]]).bindPopup(contenido).on("click", saveMarkerTarget);
      markers.addLayer(marker);
       mapMarkerToElement.set(marker,data.properties);
    }
    map.addLayer(markers);
  });
</script>

<div class="geo">
  <h2>Elementos Catalogados </h2>
  <div id="map" style="width: 100%; height: 600px;"></div>
</div>

<style>
  .geo {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    font-size: 6rem;
    font-weight: 900;
    text-shadow: 10px 12px 2px rgba(255, 255, 255,);
    color:whitesmoke
  }
</style>