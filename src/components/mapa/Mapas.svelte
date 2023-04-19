<div id="map" style="height: 500px;"></div>

<script>
     import L from 'leaflet';
     import {onMount} from 'svelte'
  let map;

//array

const markers = [
    {
      position: [ 42.8805200,-8.5456900],
      name: "catedral",
    },
    {
      position: [43.226491146609, -8.4428511895007],
      name: "Pedra Santa Marta. Monte Xalo",
    },
    {
      position: [42.371109280339, -8.1610729556799],
      name: "Necrópole de Orega",
    },
    {
      position: [42.86825847349369, -8.645446300506592],
      name: "Petróglifos do Vilar",
    },
    {
      position: [42.9056139326, -8.65847110748],
      name: "Castro de Cruxeiras",
    },
  ];



  onMount(() => {
    map = L.map('map').setView([ 42.8805200,-8.5456900], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
  



  markers.forEach(marker => {
      L.marker(marker.position).addTo(map).bindPopup(marker.name);
    });
});
</script>