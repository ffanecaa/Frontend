<script>
  import L from "leaflet"
  import { onMount } from "svelte"
  let map
    export let id
let name

let latitude
let longitude
let description
$: elemento={

  name:name,
  description:description,
  latitude:latitude,
  longitude:longitude,
  
}
    async function traerlink(){
    const resposta = await fetch(`http://localhost:8000/link/`)
     const datos = await resposta.json()
        return datos
    }
      function traerlinkm(){
    traerlink()
    .then (datosrecibidos=> { elemento = datosrecibidos;  console.log(elemento)})
  
}
  
  onMount(() => {
    map = L.map("mymapp").setView([42.812000, -7.90005], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);
      L.marker(
              [latitude,longitude]).addTo(map)
    })


</script>
<button on:click={traerlinkm}>id</button>
<input type="text"bind:value={id}>
<p>{name }{description}</p>

<div id="mymapp" style="height: 600px;"></div>
