<div id={mapId} style="height: 500px;"></div>

<script>
    //  import L from 'leaflet';
     import {onMount} from 'svelte'
  let map;
 export let latitude= 0
export let longuitude=0
export let name='catedral'
export let L
const mapId = `map-${name}`;

//array

$: markers = [
   {
    position: [ latitude,longuitude],
    name: name
   },
  
  ];



  onMount(() => {
    map = L.map(mapId).setView([ 42.8805200,-8.5456900], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
  



  markers.forEach(marker => {
      L.marker(marker.position).addTo(map).bindPopup(marker.name);
    });
});
</script>