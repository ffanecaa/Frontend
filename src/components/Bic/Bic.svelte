<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
    import { lugares} from "../../../sitios.mjs"
    import Utm from 'geodesy/utm.js'
    import { MarkerClusterGroup } from 'leaflet.markercluster';
    const datas = lugares.features
    let markers = new MarkerClusterGroup()
    let map
    onMount(() => {
      // Crear el mapa y establecer la vista inicial
     map = L.map('map').setView([42.812000, -7.90005], 13);
  
      // Agregar capa de mapa base
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);
  
        

          for( let data of datas){
    
  const utm = new Utm(29, "N", data.geometry.coordinates[0], data.geometry.coordinates[1]);

  // Crea un objeto Utm con las coordenadas UTM
  const latLon = utm.toLatLon(); 
  const contenido=`
          <h3>${data.properties.NOME}</h3>
          <p>${data.properties.ID_BIC}</p>
          
          <img src =${data.properties.IMG} style="width: 150px; height: 80px;object-fit:contain">
        `;
        let marker = L.marker(latLon).bindPopup(contenido)
        markers.addLayer(marker)
          } map.addLayer(markers)
    

          
        })
  </script>
  <div class="geo">
    <h2><span> Bienes </span> <span> Interes </span><span> Cultural</span> </h2>
  <div id="map" style="width: 100%; height: 600px; "></div>
  
</div>


<style>
  .geo{
    width: 100%;
    display: flex;
    flex-direction: column;

  }
  h2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:12px;
    color:grey;
  }
  h2 span{
    display: block;  /* no funciona con elementos de liena elletter*/
  }

h2 span::first-letter{
    
    font-size: 3.5rem;
    font-weight:900;
    text-shadow: 4px 4px 4px  #6b2430;
    color:#b7374c
   
  
  }
</style>