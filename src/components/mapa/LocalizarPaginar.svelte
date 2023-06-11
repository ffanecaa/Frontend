<script>
    import { onMount,afterUpdate } from "svelte";
    import L from "leaflet";
    import { getElementsBusqueda } from "../../lib/fetchs.mjs";
    import { MarkerClusterGroup } from 'leaflet.markercluster';
    let map;
    let markers = new MarkerClusterGroup()
    let name = "catedral";
    let infos = [];
  let marker
    function busqueda() {
      getElementsBusqueda(name).then((datosRecibidos) => {
        infos = datosRecibidos;
  
       
  
        for(let info of infos){
        
         marker = L.marker([info.latitude, info.longitude]).bindPopup(info.name)
          markers.addLayer(marker)
             map.addLayer(markers)
          }
    }
    
      )}
  
    onMount(() => {
      map = L.map("mymap").setView([42.888052, -8.04569], 14);
  
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://1938.com.es/">Web Inteligencia Artificial</a>',
      }).addTo(map);
  
      
    });
  </script>
  
  <div class="busqueda">
    <input type="text" bind:value={name} />
    <button on:click={busqueda} />
    <div id="mymap" style="height: 600px;width:900px" />
  </div>
  
  <style>
    .busqueda {
      width: 100%;
      height: 400px;
    }
  </style>
  