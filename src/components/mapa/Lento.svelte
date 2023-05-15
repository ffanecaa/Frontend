<script>
    import { onMount } from "svelte";
    import L from "leaflet";
    import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css"
    import { MarkerClusterGroup } from 'leaflet.markercluster';
    import { store } from "../../lib/store.js";
    
    
    let map;
  
    const layerGroups = {};
  
    function createMarkerGroup(category) {
      const markerGroup = new MarkerClusterGroup();
      for (let element of $store[category]) {
        const contenido=`<h3>${element.name}</h3>
          <p>${element.description}</p>
          <a href="/mapa/${element.id}"> link</a>
        `;
        let marker = L.marker([element.latitude, element.longitude]).bindPopup(contenido);
        markerGroup.addLayer(marker);
      }
      return markerGroup;
    }
    
    function createLayerGroups() {
      for (let category in $store) {
        const markerGroup = createMarkerGroup(category);  // llamo funcion con parametro categoria y recoge clcuster
        layerGroups[category] = L.layerGroup(); // genero las categorias
        layerGroups[category].addLayer(markerGroup); // añado los grupos a la capa
      }
    }
  
    onMount(() => {
      // Creamos un mapa de Leaflet
      map = L.map('mymap').setView([42.88805200, -8.0456900], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);
  
      createLayerGroups(); // llamo a  la funcion q llama a la funcion
  
      // Agregamos todas las capas a un controlador de capas
      let control = L.control.layers({}, layerGroups, {
        position: 'topright',
        collapsed: true,
        autoZIndex:true
     
      }).addTo(map);
    });

   
  </script>
  
  <div id="mymap" style="height: 600px;width:900px" />

