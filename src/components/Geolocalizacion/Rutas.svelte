<script>
    import L from "leaflet"
    import "leaflet-routing-machine";
    import {onMount} from "svelte"
  import { obterLocalizacion } from "../../lib/geolocation.mjs"
  import { getElements, getCathegory,getIcon} from "../../lib/fetchs.mjs"

 import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.css";
  import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css";
  import { MarkerClusterGroup } from "leaflet.markercluster";
  import "leaflet-routing-machine";
  import "../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js";

  let localizacion

  let markers = new MarkerClusterGroup();
 let latlng;
  let elementos;

 let map 
 let coor={}
let lat 
let lng 
let mapMakerToElemen = new Map()
  let selecteTarget



 function saveMarkerTarget(event) {
  selecteTarget = event.latlng
   console.log(selecteTarget);
 }


obterLocalizacion().then( novaLocalizacion => localizacion = novaLocalizacion)

$: if (localizacion) L.marker([localizacion.lat,localizacion.lng]).addTo(map).bindPopup("Localizado")



function manexadorDistancias() {
    fetch(`http://localhost:8000/distancia/?latitude=${localizacion.lat}&longitude=${localizacion.lng}`)
      .then((res) => res.json())
      .then((data) => {
        elementos = data;

        for (let elemento of elementos) {
          const contenido = `
            <h3>${elemento.name}</h3>
  
          `;
          let marker = L.marker([
            elemento.latitude,
            elemento.longitude,
          ]).bindPopup(contenido).on("click",saveMarkerTarget);
          markers.addLayer(marker);
          mapMakerToElemen.set(marker, elemento)
          // Para obetener el elemento del marker: const elemento = mapMarkerToElemen.get(marker)
        }
        map.addLayer(markers);
      })
  }
  
  onMount(() => {
    map = L.map("map").setView([42.812, -7.90005], 8);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
    let customIcon = new L.Icon({
      iconUrl: "ico.png",
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });
    } )

          


 function calcularRuta(){
  L.Routing.control({
  waypoints: [
    L.latLng(localizacion.lat,localizacion.lng),
    L.latLng(selecteTarget.lat,selecteTarget.lng),
  ],
  language:"es",
  routeWhileDragging: true,
  waypointMode: 'snap',
}).addTo(map);
 }

//  console.log(lat,lng)

    
  



</script>


 <div id="map" style="height: 600px;width:800px"></div>

 <button on:click={manexadorDistancias}>Buscar</button>
 <button on:click={calcularRuta}>ruta</button>