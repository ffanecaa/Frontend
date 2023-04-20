<div id={mapId} style="height: 550px;"></div>

<script>
    //  import L from 'leaflet';
     import {onMount} from 'svelte'
  let map;
 export let latitude= 0
export let longuitude=0
export let name='catedral'
export let L
const mapId = `map-${name}`; // neceito que cada mapa tenga un nombre sino no se genera

//array

$: markers = [
   {
    position: [ latitude,longuitude],
    name: name
   },
  
  ];



  onMount(() => {
    map = L.map(mapId).setView([ latitude, longuitude], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
  


/* bucle metodo con funcion dentro 
para cada marca que lo envie al marker */
  markers.forEach(marker => {
      L.marker(marker.position).addTo(map).bindPopup(marker.name);
    });
});
</script>