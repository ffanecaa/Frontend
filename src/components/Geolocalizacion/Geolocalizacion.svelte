<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.css";
  import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css";
  import { MarkerClusterGroup } from "leaflet.markercluster";
  import "leaflet-routing-machine";
  import "../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js";
  import "../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css";

  let markers = new MarkerClusterGroup();

  let lat;
  let lng;

  let map;
  let latlng;
  let elementos;
  let mapMakerToElemen = new Map();
  let selecteTarget;

  function saveMarkerTarget(event) {
    selecteTarget = event.latlng;
    console.log(selecteTarget);
  }

  function manexadorDistancias() {
    fetch(`http://localhost:8000/distancia/?latitude=${lat}&longitude=${lng}`)
      .then((res) => res.json())
      .then((data) => {
        elementos = data;

        for (let elemento of elementos) {
          const contenido = `
            <h3>${elemento.name}</h3>
  
          `;
          let marker = L.marker([elemento.latitude, elemento.longitude])
            .bindPopup(contenido)
            .on("click", saveMarkerTarget);
          markers.addLayer(marker);
          mapMakerToElemen.set(marker, elemento);
          // Para obetener el elemento del marker: const elemento = mapMarkerToElemen.get(marker)
        }
        map.addLayer(markers);
      });
  }

  onMount(() => {
    // Crea el mapa y
    map = L.map("map").setView([42.33642, -7.862982], 16);

    // mosaic
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    //icono
    let customIcon = new L.Icon({
      iconUrl: "icoo.png",
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
        //  al punto
        map.flyTo(latlng, 11, {
          animate: true,
          duration: 2,
        });
      },
      (error) => {
        console.error(error);
      }
    );

    // function punto (e){
    // let secondMarker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map)
    // }
    /* seleccionar click mapa*/
    //  cosa =map.on('click', (event) =>{
    // let secondMarker = L.marker([event.latlng.lat,event.latlng.lng]).addTo(map)
    //    return ([event.latlng.lat,event.latlng.lng])
    //   })

    console.log(map._lastCenter.lat); // Acceder a la latitud
    console.log(map._lastCenter.lng);
  });

  function calcularRuta() {
    L.Routing.control({
      waypoints: [
        L.latLng(lat, lng),
        L.latLng(selecteTarget.lat, selecteTarget.lng),
      ],

      language: "es",
      routeWhileDragging: true,
      waypointMode: "snap",
    }).addTo(map);
  }
</script>

<div class="container__geolocalizacion">
  <div class="container__map">
    <h2 class="texto__horizontal">CALCULA TU RUTA</h2>
    <div id="map" />

    <button class="button__1" on:click|once={manexadorDistancias}>Buscar</button
    >
    <button class="button__2" on:click={calcularRuta}>ruta</button>
    <h2 class="texto__horizontal">elementos a 10km a la redonda</h2>
  </div>

  <div class="container__image">
    <!-- <div class="texto">
  
   </div>
         -->
    <figure>
      <img src="rutaaa.png" alt="nina" />
    </figure>
  </div>
</div>

<style>
  .container__geolocalizacion {
    display: flex;

    justify-content: space-evenly;
  }
  .container__map {
    width: 70%;
    height: 60vh;

    gap: 30%;
  }
  .container__image {
    width: 50%;
  height: 100vh;
    display: flex;

    justify-content: center;
    align-content: center;
    margin-top: 20%;
  }

  #map {
    width: 100%;
    height: 100%;
  }
  button {
    width: 150px;
    height: 50px;
    border: 3px solid #d5c4a4;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 2px 2px 2px #d5c4a4;
    margin-left: 20px;
    margin-top: 40px;
  }

  figure {
    width: 65%;
    height: 100%;
    object-fit: cover;
  }
  /* .texto{
    width: 20%;
  } */
  img {
    width: 100%;
    height: 100%;
    filter:drop-shadow(0 0 20px #704A2D)
  }

  p {
    font-size: 6rem;
    font-weight: bold;
    writing-mode: vertical-rl;
  }

  .texto__horizontal {
    font-size: 4rem;
    font-weight: bold;
  }
</style>
