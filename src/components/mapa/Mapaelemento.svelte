<script>
  import L from "leaflet";
  import { onMount ,afterUpdate} from "svelte";
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
    L.marker([elemento.latitude, elemento.longitude]).addTo(map);
  })
  afterUpdate(() => {
    map.setView([elemento.latitude, elemento.longitude], 8);
    L.marker([elemento.latitude, elemento.longitude]).addTo(map);
  });
 
</script>

<button on:click={traerlinkm}>id</button>
<input type="text" bind:value={id} />
<p>{elemento.name}{elemento.description}</p>

<div id={mapId} style="height: 600px;width:800px" />
