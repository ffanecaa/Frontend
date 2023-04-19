<script>
import L from 'leaflet'
	import 'leaflet/dist/leaflet.css'
    import {onMount} from 'svelte'
    
    
    let map = 




    onMount(() => {
    map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([[-8.5456900, 42.8805200]]).addTo(map)
    .bindPopup('catedral santiago')
    .openPopup();
    

  });




    </script>




<div id="map"></div>