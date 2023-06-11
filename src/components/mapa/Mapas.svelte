<div class="map" id={mapId} style="height: 500px ;"></div>

<script>
    //  import L from 'leaflet';

     import {onMount} from 'svelte'
  let map;
 export let latitude= 0
export let longitude=0
export let name=""
export let L
$: mapId = name ; // neceito que cada mapa tenga un nombre sino no se genera

//array

$: markers = [
   {
    position: [ latitude,longitude],
    name: name
   },
  
  ];



  onMount(() => {
    map = L.map(mapId).setView([ latitude, longitude], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
  


/* bucle metodo con funcion dentro 
para cada marca que lo envie al marker */
  markers.forEach(marker => {
      L.marker(marker.position).addTo(map).bindPopup(marker.name,);
    });
});
</script>


<style>
 .map{
  width: 600px;
  height: 300px;
  align-items: center;
  margin: 3rem;
  box-shadow: 3px 3px 3px #8A7EA7;
 }
  
</style>