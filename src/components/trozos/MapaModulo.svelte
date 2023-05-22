<script>

 import { onMount } from "svelte";
    import L from "leaflet";

 export let map 
export let lat
export  let lng
let zoom

    onMount(() => {
      // Creamos un mapa de Leaflet
      map = L.map('mymap').setView([42.88805200, -8.0456900], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);
    })
  
</script>

<div id="mymap" style="height: 600px;width:900px" />