<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
    import { lugares} from "../../../sitios.mjs"
    
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

// Suponiendo que `data.geometry.coordinates` es el array de coordenadas UTM
const latLonCoordinates = data.geometry.coordinates.map(coord => {
  const utm = new Utm(29, "N", coord[0], coord[1]); // Crea un objeto Utm con las coordenadas UTM
  return utm.toLatLon(); // 
});


  
        let marker = L.marker(latLong).bindPopup(data.properties.NOME).addTo(map)
        console.log(data.geometry.coordinates);
          }
        })





  </script>
  
  <div id="map" style="width: 100%; height: 400px;"></div>
  
