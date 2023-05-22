<script>
     import { onMount } from "svelte";
       import L from "leaflet";
    import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css"
    import { MarkerClusterGroup } from 'leaflet.markercluster';
    import { store } from "../../lib/store.js";
  import MapaModulo from "./MapaModulo.svelte";


    const layerGroups = {};
   let map
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
    return markerGroup}
    createLayerGroups(); // llamo a  la funcion q llama a la funcion
   
  
  function createLayerGroups() {
    for (let category in $store) {
      const markerGroup = createMarkerGroup(category);  // llamo funcion con parametro categoria y recoge clcuster
      layerGroups[category] = L.layerGroup(); // genero las categorias
      layerGroups[category].addLayer(markerGroup); // añado los grupos a la capa
    }
  }
  onMount(() => {
      
      // Agregamos todas las capas a un controlador de capas
      let control = L.control.layers({}, layerGroups, {
        position: 'topright',
        collapsed: true,
        autoZIndex:true
     
      }).addTo(map);
    })


</script>
<MapaModulo map ={map}/>

