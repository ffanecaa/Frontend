<script>
  import L from "leaflet";
  import  'leaflet-routing-machine';
  import { onMount } from "svelte";
  import { obterLocalizacion } from "../../lib/geolocation.mjs";
  import { getElements, getCathegory, getIcon } from "../../lib/fetchs.mjs";
  

  let map;
  let lat
let lng
  
 
 

    // Crear el mapa y establecer la vista utilizando la ubicación obtenida
    map = L.map("map").setView([lat, lng], 8);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.Routing.control({
  waypoints: [
    L.latLng([lat, lng]),
    L.latLng([lat,lng ])
  ]
}).addTo(map);
</script>

<!-- <button on:click={ubica}>Obtener Ubicación</button> -->


<div id="map" style="height: 600px; width: 800px"></div>
