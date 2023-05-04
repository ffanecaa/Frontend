<script>
    import L from 'leaflet';
    import { onMount } from 'svelte'
    import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.css"
    import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css"
    import { MarkerClusterGroup } from 'leaflet.markercluster';
    import Mapas from '../mapa/Mapas.svelte';
    let map;
    let elementos = [];

    let markers = new MarkerClusterGroup()

//     {iconCreateFunction: function(cluster) {
// let childCount = cluster.getChildCount();
//     return L.divIcon({className: 'mydivicon', html: '<div><span>' + childCount + '</span></div>'});
// }
    function manexadorTrae(){
      fetch("http://localhost:8000/elements/")
        .then(res => res.json())
        .then(response => {
          elementos = response;
          // for dentro pq es lo q queremos q realice el manexador coja y disponga
          for (let elemento of elementos) {
            const contenido=`
          <h3>${elemento.name}</h3>
          <p>${elemento.description}</p>
          <a href=""> link</a>
        `;
            let marker =  L.marker(
              [elemento.latitude, elemento.longitude]
            ).bindPopup(contenido)
            markers.addLayer(marker)
          } map.addLayer(markers)
        })
    }
    
  
    
  
    onMount(() => {
      map = L.map("mymap").setView([42.812000, -7.90005], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);
  
     
    });
  
  </script>
  <h1>mapa puntos</h1>
  
  <div id="mymap" style="height: 600px;width:800px"></div>
  <!-- convendria fuera funcion load dispare cargue pagina mirar evento -->
  <button on:click|once={manexadorTrae}>Cargar localizaciones</button>
  

<style>
   

 </style>