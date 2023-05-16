<script>
  import { onMount } from "svelte";
  import L from "leaflet";

  let map;
let latlng;
  onMount(() => {
    // Crea el mapa y establece la vista en una ubicación inicial
    map = L.map("map").setView([51.505, -0.09], 13);

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
        const lat = location.coords.latitude;
        const lng = location.coords.longitude;

        // Crea un objeto L.LatLng con las coordenadas obtenidas
        latlng = L.latLng(lat, lng);
        L.circle(latlng, { radius: 300 }).addTo(map);
        L.marker(latlng, { icon: customIcon })
          .addTo(map)
          .bindPopup("Localizado");
        // Mueve el mapa a la ubicación obtenida
        map.flyTo(latlng, 15, {
          animate: true,
          duration: 2,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  });
</script>

<h1>Geolocalización</h1>

<div id="map" style="height: 400px;" />

<style>
  #map {
    height: 400px;
  }
</style>
