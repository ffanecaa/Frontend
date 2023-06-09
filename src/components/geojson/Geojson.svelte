<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
    import { lugares} from "../../../sitios.mjs"
    import Utm from 'geodesy/utm.js'
    const datas = lugares.features

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
          <p>${data.properties.LUGAR}"</p>
        `;
        let marker = L.marker(latLon).bindPopup(contenido).addTo(map)
    

          }
        })
  </script>
  
  <div id="map" style="width: 100%; height: 400px;"></div>
  
