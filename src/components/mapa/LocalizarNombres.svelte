<div id="map" style="width:300px;heigth:600px"></div>

<input type="text" bind:value={name}>
<button on:click={busqueda}></button>


<script>
    import {onMount} from  "svelte"
    import L from "leaflet"
    import {getElementsBusqueda}from "../../lib/fetchs.mjs"

let map 

let name = "catedral"
let infos = []

async function busqueda (){
    getElementsBusqueda(name)
    .then (datosRecibidos =>{infos = datosRecibidos})

}


onMount(()=>{

map = L.map("map").setView([ 42.88805200, -8.0456900], 14)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://1938.com.es/">Web Inteligencia Artificial</a>'
    }).addTo(map)

for(let info of infos){
    let contenido = info.name
     L.marker([info.latitude, info.longitude]).bindPopup(contenido).addTo(map)
}



})


















</script>









