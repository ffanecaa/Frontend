<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import {storeIconos} from "../../lib/store.js"

let lat
let lng
  
  let map;
  let latlng;
  let elementos;

  function manexadorDistancias() {
    fetch(`http://localhost:8000/distancia/?latitude=${lat}&longitude=${lng}`)
      .then(res => res.json())
      .then(data => {
        elementos = data;

        for (let elemento of elementos) {
          const contenido = `
            <h3>${elemento.name}</h3>
  
          `;
          let marker = L.marker(
            [elemento.latitude, elemento.longitude]
          ).addTo(map).bindPopup(contenido);
        }
      });
  }

  onMount(() => {
    // Crea el mapa y establece la vista en una ubicación inicial
    map = L.map("map").setView([51.505, -0.09], 16);

    // Agrega una capa de azulejos utilizando OpenStreetMap
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

    // Obtiene la ubicación actual del usuario
    navigator.geolocation.getCurrentPosition(
      (location) => {
        lat = location.coords.latitude;
        lng = location.coords.longitude;

        // Crea un objeto L.LatLng con las coordenadas obtenidas
        latlng = L.latLng(lat, lng);
        L.circle(latlng, { radius: 300 }).addTo(map);
        L.marker(latlng, { icon: customIcon })
          .addTo(map)
          .bindPopup("Localizado");
        // Mueve el mapa a la ubicación obtenida
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

  console.log(lat);
</script>

<h1>Geolocalización</h1>

<div id="map" style="height: 500px;"></div>


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