<script>  // busqueda de elemnto por nombre ... ARREGLAR EL TIPO DE BUSQUEDA QUE ES DEMASIADO ARBITRARIA  
    import L from "leaflet";
    import { onMount ,afterUpdate} from "svelte";
  import App from "../../App.svelte";
  import Cathegory from "../Cathegory/Cathegory.svelte";
  import Counter from "../../lib/Counter.svelte";
  import Delete from "../Elemento/Delete.svelte";
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
      const resposta = await fetch(`http://localhost:8000/links/${name}`);
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
      }).addTo(map).bindPopup(elemento.name);
      
    })
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
      L.marker([elemento.latitude, elemento.longitude]).addTo(map).bindPopup(elemento.name)
    });
   
  </script>
  <h2>{elemento.name}</h2>
  <button on:click={traerlinkm}>nombre</button>
  <input type="text" bind:value={name} />
  <p>{elemento.name}{elemento.description}</p>
  
  <div id={mapId} style="height: 600px;width:800px" />

  <!-- <Mapa id={mapId} elemento={elemento}/> -->

  <style>
    button {  
      border-radius: 0.4em;
      padding: 0.4em 1em;
      border: none;
     cursor: grab;
     background-color: transparent;
      border-radius: 0.4em;
      color: royalblue;
      padding: 0.4em 1em;
      border: 1px solid royalblue;   
    }
      div{
      border: 19px inset #ADD19E;
      
      }
      h2{
       text-transform: uppercase; 
      }
    </style>