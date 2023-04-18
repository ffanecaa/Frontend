<script>
import L from 'leaflet'
	import 'leaflet/dist/leaflet.css'
    
    
    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.control.scale().addTo(map);
L.marker([[-8.5456900, 42.8805200]]).addTo(map)
    .bindPopup('catedral santiago')
    .openPopup();
    
    </script>




<div id="map"></div>