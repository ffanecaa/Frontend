<script>
  import { onMount } from "svelte";
  import L from "leaflet";

  import { ele } from "../../../prueb1.mjs";
  import { ele2 } from "../../../prueb2.mjs";
  import { ele3 } from "../../../prueb3.mjs";
  import { ele4 } from "../../../prueb4.mjs";
  import { ele5 } from "../../../prueb5.mjs";
  import { ele6 } from "../../../prueb6.mjs";
  import { ele7 } from "../../../prueba7.mjs";
  // import Utm from 'geodesy/utm.js'
  import { MarkerClusterGroup } from "leaflet.markercluster";

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
    map.setView(event.latlng, 18);
  }

  onMount(() => {
    map = L.map("map").setView([42.812, -7.90005], 10);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    // }).addTo(map);

    L.tileLayer
      .wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
        layers: "OI.OrthoimageCoverage",
        format: "image/jpeg",
        transparent: true,
        version: "1.3.0",
        attribution:
          "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España",
      })
      .addTo(map);

    //       L.tileLayer.wms("https://www.ign.es/wms-inspire/ign-base?", {
    //     layers: 'IGNBaseTodo',
    //     format: 'image/png',
    //     transparent: true,
    //     attribution: "ing"
    // }).addTo(map);

    for (let data of datas) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates);
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
       
      `;
      let marker = L.marker([
        data.geometry.coordinates[1],
        data.geometry.coordinates[0],
      ])
        .bindPopup(contenido)
        .on("click", saveMarkerTarget);
      markers.addLayer(marker);
      mapMarkerToElement.set(marker, data.properties);
    }

    for (let data of datos) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates);
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([
        data.geometry.coordinates[1],
        data.geometry.coordinates[0],
      ])
        .bindPopup(contenido)
        .on("click", saveMarkerTarget);
      markers.addLayer(marker);
      mapMarkerToElement.set(marker, data.properties);
    }
    for (let data of datosTercero) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates);
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([
        data.geometry.coordinates[1],
        data.geometry.coordinates[0],
      ])
        .bindPopup(contenido)
        .on("click", saveMarkerTarget);
      markers.addLayer(marker);
      mapMarkerToElement.set(marker, data.properties);
    }
    for (let data of datosCuarto) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates);
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([
        data.geometry.coordinates[1],
        data.geometry.coordinates[0],
      ])
        .bindPopup(contenido)
        .on("click", saveMarkerTarget);
      markers.addLayer(marker);
      mapMarkerToElement.set(marker, data.properties);
    }
    for (let data of datosCinco) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates);
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([
        data.geometry.coordinates[1],
        data.geometry.coordinates[0],
      ])
        .bindPopup(contenido)
        .on("click", saveMarkerTarget);
      markers.addLayer(marker);
      mapMarkerToElement.set(marker, data.properties);
    }
    for (let data of datosSeis) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates);
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([
        data.geometry.coordinates[1],
        data.geometry.coordinates[0],
      ])
        .bindPopup(contenido)
        .on("click", saveMarkerTarget);
      markers.addLayer(marker);
      mapMarkerToElement.set(marker, data.properties);
    }
    for (let data of datosSeis) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates);
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([
        data.geometry.coordinates[1],
        data.geometry.coordinates[0],
      ])
        .bindPopup(contenido)
        .on("click", saveMarkerTarget);
      markers.addLayer(marker);
      mapMarkerToElement.set(marker, data.properties);
    }

    for (let data of datosSiete) {
      // const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);
      // const latLon = utm.toLatLon();
      console.log(data.geometry.coordinates);
      const contenido = `
      <h3>${data.properties.NOME}</h3>
        <h3>${data.properties.TIPOLOXIA}</h3>
        <h3> Provincia:${data.properties.PROVINCIA}</h3>
        <p>Concello:${data.properties.CONCELLO}</p>
        <p>Parroquia:${data.properties.PARROQUIA}</p>
      `;
      let marker = L.marker([
        data.geometry.coordinates[1],
        data.geometry.coordinates[0],
      ])
        .bindPopup(contenido)
        .on("click", saveMarkerTarget);
      markers.addLayer(marker);
      mapMarkerToElement.set(marker, data.properties);
    }
    map.addLayer(markers);
  });
</script>

<div class="geo">
  <h2>Elementos Catalogados</h2>
  <div id="map"  />
</div>

<!-- A realidade do voo americano
Adoita dicirse que todas as fotografías aéreas catastrais proceden dos denominados “Voos americanos”. Pero, como vimos, os traballos de fotografía aérea comezaran moito antes, aínda que se viron paralizados pola Guerra Civil. O certo é que, na última fase da realización do Catastro parcelario, a utilización das fotografías aéreas de cinco millóns de hectáreas “de los vuelos que realizaron los EE.UU. de América para cubrir fotográficamente nuestro territorio” abaratou significativamente os custes, ao non  ser necesaria contratar  máis que a labor de ampliación (García-Badell, 1968, p. 161, citado por Fernández, 2007, p. 120).

Así, a fins de 1960, o Servizo de Documentación Gráfica do Catastro dispuña de “19.294.115 ha cubiertas por vuelos del Ministerio de Hacenda, de 4.235.112 pertenecientes al vuelo americano de la serie B, realizadas entre 1956 y 1957, y de 873.728 correspondientes a vuelos de las Islas Canarias a escala 1 : 10.000; en total, casi 25 millones de ha fotografiadas. En cambio, la superficie cubierta con planos parcelarios por el Instituto Geográfico desde 1925 hasta 1960 se situaba en 16 millones de ha.” (García-Badell, 1968, ibidem, citado por Fernández, 2007, ibidem). -->

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
  height:80vh
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