<script>
  /// la pagina genro link mapa totla ///
  import L from "leaflet";
  import { onMount, afterUpdate } from "svelte";
  let map;
  export let id = 1;
  let name = "centro geografico";
  let latitude = 42.812;
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
  async function traerlink() {
    const resposta = await fetch(`http://localhost:8000/link/${id}`);
    const datos = await resposta.json();
    return datos;
  }
  function traerlinkm() {
    traerlink().then((datosrecibidos) => {
      elemento = datosrecibidos;
      console.log(elemento);
    });
  }
  $: mapId = elemento.name;
  onMount(() => {
    map = L.map(mapId).setView([42.812, -7.90005], 8);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);
  });
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
    L.marker([elemento.latitude, elemento.longitude])
      .addTo(map)
      .bindPopup(elemento.name);
  });

  onMount(() => {
    traerlinkm();
  });
</script>

<div class="elemento">
  <h2>{elemento.name}</h2>
  <!-- <button on:click={traerlinkm}>id</button> -->
  <input type="text" on:change={traerlinkm} bind:value={id} />
  <p>{elemento.description}</p>
  
  <div id={mapId} style="height: 600px;width:800px" ></div>
</div>

<style>


.elemento {
  display: flex;
  flex-direction: column;
}

input{
  display:none
}

 
  h2 {
    text-transform: uppercase;
  }
</style>
