<!-- <script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
  
    import Utm from 'geodesy/utm.js'
    import { MarkerClusterGroup } from 'leaflet.markercluster';
   import {sitios} from "../../../Elementos.mjs";

    const datas = sitios.features;
    let markers = new MarkerClusterGroup();
    let map;
    let mapMarkerToElement = new Map();
  let selectedTarget
  
    

  
    onMount(() => {
      map = L.map('map').setView([42.812000, -7.90005], 9);
  
   /*   L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
        layers: "OI.OrthoimageCoverage",
        format: 'image/jpeg',
        transparent: true,
        version: '1.3.0',
        attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
      }).addTo(map);
  */
        L.tileLayer.wms("https://www.ign.es/wms-inspire/ign-base?", {
      layers: 'IGNBaseTodo',
      format: 'image/png',
      transparent: true,
      attribution: "ing"
  }).addTo(map);
  
  
      for (let data of datas) {
       
      
        const contenido = `
          <h3>${data.properties.NOME}</h3>
          <p>${data.properties.ID_BIC}</p>
          <img src=${data.properties.IMG} style="width: 150px; height: 80px; object-fit: contain">
        `;
        let marker = L.marker(data.geometry.coordinates).bindPopup(contenido)//.on("click", saveMarkerTarget);
        markers.addLayer(marker);
        // mapMarkerToElement.set(marker, data.properties);
      }
      map.addLayer(markers);
  /**
   * llamada para modificar el punto vista y vaya a coordenadas seleccionadas
  */
      // map.on("layeradd", () => {
     
      //     map.setView(selectedTarget, 18 );
        
     
      //     });
    });
  </script>
  
  <div class="geo">
    <h2><span> B </span> <span> I </span><span> C</span>: Bien Interés Cultural </h2>
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
  </style> -->