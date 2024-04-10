

<script>
    import { onMount,afterUpdate } from "svelte";
    import L from "leaflet";

    import { getElementsBusqueda } from "../../lib/fetchs.mjs";
    import { MarkerClusterGroup } from 'leaflet.markercluster';
    
    let map;
    let markers = new MarkerClusterGroup()
    let name = "catedral";
    let elementos = [];
  let marker
    function busqueda() {
      getElementsBusqueda(name).then((datosRecibidos) => {
        elementos = datosRecibidos;
  console.log(elementos);
       
  
  for (let elemento of elementos) {
          const contenido = `
          <h3>${elemento.name}</h3>
          <a href="/ficha/${elemento.id}"> link</a>
        `;
        console.log(elemento.latitude)
       
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
      map = L.map("mymap").setView([42.888052, -8.04569], 9);
  
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://1938.com.es/">Web Inteligencia Artificial</a>',
      }).addTo(map);
   
  
      
    });
  </script>
  
  <div class="busqueda">
    <h1> Localiza los elementos</h1>
    <input type="text" bind:value={name} />
    <button on:click={busqueda}>Buscar </button>
    <div id="mymap"></div>
  </div>
  
  <style>
    .busqueda {
      width: 100%;
      height:100vh;
      display: flex;
      flex-wrap: wrap;
     justify-content: center;
      align-content: center;
      gap:2rem;
      background-color: black;
    }
   #mymap {
    width: 80vw;
    height: 60vh;
   }
    button{
      width: 8rem;
      height: 2rem;
    }
    input{
      width: 10rem;
      height: 2rem;
    }
    h1{
      font-size: 4rem;
      color:white;
    }
  </style>