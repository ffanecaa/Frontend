<script>  // busqueda de elemnto por nombre ... ARREGLAR EL TIPO DE BUSQUEDA QUE ES DEMASIADO ARBITRARIA  
    import L from "leaflet";
    import { onMount ,afterUpdate} from "svelte";
    import {traerlinkName} from "../../lib/fetchs.mjs"
  // import Cathegory from "../Cathegory/Cathegory.svelte"
  // import Delete from "../Elemento/Delete.svelte";
    let map;
    let id = 1;
    let name = "lugares";
  
    let latitude = 42.812
    let longitude = -7.90005;
    let description = " por descubrir";
    let elemento = {};
    $: elemento = {
      id: id,
      name: name,
      description: description,
      latitude: latitude,
      longitude: longitude,
    };
    // $:marca =[elemento.latitude,elemento.longitude]
  
 
    function traerlinkm() {
      traerlinkName(name).then((datosrecibidos) => {
        elemento = datosrecibidos;
        console.log(elemento);
      });
    }
    $: mapId = elemento.name;
    onMount(() => {
      
       map = L.map(mapId).setView([42.812, -7.90005], 8);
    let map1 =  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      })

     let map2 = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',})

 let map3 =  L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
      layers: "OI.OrthoimageCoverage",
      format: 'image/jpeg',
      transparent: true,
      version: '1.3.0',
      attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
    })

  let map4 =L.tileLayer('http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS'
})



var baseMaps = {
    "map1": map1,
    "map2": map2,
    "map3": map3,
    "map4": map4
};
     
var layerControl = L.control.layers(baseMaps).addTo(map);
      // meter video sobre mapa 
//     let  videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//     videoBounds = [[ 42.812, -7.90005], [ 42.87473850418,-8.7039023678 ]];
// L.videoOverlay(videoUrl, videoBounds ).addTo(map);


//-------------------ARCHIVOS SVG SOBRE MAPA -----------------------------//
// let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
// svgElement.setAttribute('viewBox', "0 0 200 200");
// svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
// let svgElementBounds = [[ 42.812, -7.90005], [ 42.87473850418,-8.7039023678 ]]
// L.svgOverlay(svgElement, svgElementBounds).addTo(map);
      
    })
    afterUpdate(() => {
      // Eliminar el marcador anterior si existe
      //recorre el each si exites marcadores
      map.eachLayer((layer) => {
        //si existen los borra
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });
  
      // Agregar un nuevo marcador en la nueva ubicación
      L.marker([elemento.latitude, elemento.longitude]).addTo(map).bindPopup(elemento.name)
    });
   
  </script>
  <div class="porNombre">
    <h2>{elemento.name}</h2>
    <button on:click={traerlinkm}>nombre</button>
    <input type="text" bind:value={name} />
    <p>{elemento.name}{elemento.description}</p>
    
    <div id={mapId} style="height: 600px;width:800px" ></div>
    <!-- <Mapa id={mapId} elemento={elemento}/> -->
  </div>

  <style>
    button {  
      border-radius: 0.4em;
      padding: 0.4em 1em;
      border: none;
     cursor: grab;
     background-color: transparent;
      border-radius: 0.4em;
      color: whitesmoke;
      padding: 0.4em 1em;
      border: 1px solid royalblue;   
    }
      div{
      border: 19px solid whitesmoke;
      
      }
      h2{
       text-transform: uppercase; 
      }
    </style>