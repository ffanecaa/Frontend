<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.css";
  import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css";
  import { MarkerClusterGroup } from "leaflet.markercluster";
  import "leaflet-routing-machine";
  import "../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js";

  let markers = new MarkerClusterGroup();

  let lat;
  let lng;

  let map;
  let latlng;
  let elementos;

  function manexadorDistancias() {
    fetch(`http://localhost:8000/distancia/?latitude=${lat}&longitude=${lng}`)
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
          ]).bindPopup(contenido);
          markers.addLayer(marker);
        }
        map.addLayer(markers);
      });
  }

  onMount(() => {
    // Crea el mapa y 
    map = L.map("map").setView([51.505, -0.09], 16);

    // mosaic
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    //icono
    let customIcon = new L.Icon({
      iconUrl: "ico.png",
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });

    //  ubicación actual del usuario
    navigator.geolocation.getCurrentPosition(
      (location) => {
        lat = location.coords.latitude;
        lng = location.coords.longitude;

        // crear marcador 
        latlng = L.latLng(lat, lng);
        L.circle(latlng, { radius: 300 }).addTo(map);
        L.marker(latlng, { icon: customIcon })
          .addTo(map)
          .bindPopup("Localizado");
       // al punto 
        map.flyTo(latlng, 11, {
          animate: true,
          duration: 2,
        });
      },
      (error) => {
        console.error(error);
      }
    );


    

  });
 let waypoints=[]
   
 function calcularRuta(){
  L.Routing.control({
  waypoints: [
    L.latLng(lat,lng),
    L.latLng(57.6792, -8.354254)
  ]
}).addTo(map);
 }

// let  latClick
// let lngClick
// map.on('click', function(e){

//   // Obtén las coordenadas del clic
//  latClick = e.latlng.lat;
//  lngClick = e.latlng.lng;

//   // Envía las coordenadas al servidor o úsalas según tus necesidades
 
// })
// map.on('click', onMapClick);





</script>

<h1>Geolocalización</h1>

<div  id="map" style="height: 500px;" ></div>

<button on:click={manexadorDistancias}>Buscar</button>

<style>
  #map {
    height: 400px;
  }

  button {
    width: 50px;
    height: 50px;
  }
</style>
