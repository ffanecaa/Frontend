<script>
  /// todos los elementos agrupados
  import L from "leaflet";
  import { onMount } from "svelte";
  import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.css";
  import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css";
  import { MarkerClusterGroup } from "leaflet.markercluster";

  let map;
  let elementos = [];
  let mapContainer;
  let markers = new MarkerClusterGroup();

  function manexadorTrae() {
    fetch("http://localhost:8000/elements/")
      .then((res) => res.json())
      .then((response) => {
        elementos = response;
        // for dentro pq es lo q queremos q realice el manexador coja y disponga
        for (let elemento of elementos) {
          const contenido = `
          <h3>${elemento.name}</h3>
          <a href="/ficha/${elemento.id}"> link</a>
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

  let latlng;

  onMount(() => {
    map = L.map("mymap").setView([42.812, -7.90005], 9);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    let customIcon = new L.Icon({
      iconUrl: "ico.png",
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });

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
        // map.flyTo(latlng, 15, {
        //   animate: true,
        //   duration: 2,
        // });
      },
      (error) => {
        console.error(error);
      }
    );
    mapContainer.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  onMount(() => {
    manexadorTrae();
  });
</script>

<div class="mapaTotal">
  <h1>Patrimonio</h1>

  <div class="container__map" bind:this={mapContainer}>
    <div class="map" id="mymap" style="" />
    <!-- convendria fuera funcion load dispare cargue pagina mirar evento -->
    <!-- <button on:click|once={manexadorTrae}>Cargar localizaciones</button> -->
  </div>
</div>

<style>
  .mapaTotal {
    display: flex;
    justify-content: center;

    align-content: center;
    flex-direction: column;
    width: 100vw;
    height: 750px;
 
  }

  .container__map {

    display: flex;
    justify-content: center;
    border: 5px solid grey;
    align-content: center;
  }

  .map {
    height: 800px;
    width: 800px;
  }
</style>
