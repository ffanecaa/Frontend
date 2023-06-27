<script>
 import {onMount} from "svelte"
 
  let name
  let description
  let longitude
  let latitude
  $: elemento ={
    name:name,
    description :description,
    latitude:latitude,
    longitude:longitude
  }
 
    import Mapas from '../Mapa/Mapas.svelte';  
    import L from 'leaflet';
    let info = { elements: [], pagination: {} }

 export let page  =1
 export let limit= 6
    // let nextPage = info.pagination.nextPAge
    // let previousPage=info.pagination.previuosPage


//-------------------------TRAER DATOS --------------------------------
 async function traerDatos(){
   const resposta = await fetch(`http://localhost:8000/pax/?page=${page}&limit=${limit}`)
        const datos = await resposta.json()
        return datos
    }
      function traerDatosm(){
    traerDatos()
    .then (datosrecibidos=> { info = datosrecibidos;  })
  
}
// traer datos -------------------------------NEXT PAGE----------------------------------
  async function traerpaxPosterior(){
    const resposta = fetch(`http://localhost:8000${info.pagination.nextPAge}`)
        const datos = (await resposta).json()
        return datos
       ;
  }

    function mas(){
       traerpaxPosterior()
       .then (datosrecibidos => info = datosrecibidos)
          scroll(900)
    }
//------------------PREVIOUS PAGE --------ENVIO RUTA--------ºº-----------------------------------
   async function traerPaxAnterior(){
      const resposta = fetch(`http://localhost:8000${info.pagination.previousPage}`)
        const datos = (await resposta).json()
        return datos
    }
    // ---------------MANEXADOR USE FUNCION DE BUSQUEDA Y TRAIGO INFO --------------------
    function menos(){
       traerPaxAnterior()
         .then (datosrecibidos=> info = datosrecibidos)
            scroll(900)
}

onMount(()=>{
  traerDatosm()
  })

    function scroll(position) {
    window.scrollTo({ top: position, behavior: "smooth" })
    }
</script>

<div class="container_pagination" >
 <h2>Elementos varios</h2>


    <div class="container_ficha">
   
      {#each info.elements as elemento (elemento.id)}
        <div class="ficha">
          <h2>{elemento.name}</h2>

          <p>{elemento.description}</p>
          <p class="coordenadas">{elemento.latitude} {elemento.longitude}</p>

          <Mapas
            name={elemento.name}
            latitude={elemento.latitude}
            longitude={elemento.longitude}
            {L}
          />
        </div>
      {/each}
    </div>

    <div class="paginacion">
      <button on:click={menos}>◀</button>
      <button on:click={mas}>▶</button>
    </div>
  </div>


<style>

 .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    /* background-image: url(descarga.png); */
  }
  .container_pagination{
    width:100%;
 
  }
  .container_ficha {
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.8rem;

  }
  .ficha{
    background: rgba(255, 255, 255, 0.31);
  border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.8px);
-webkit-backdrop-filter: blur(6.8px);
border: 1px solid rgba(255, 255, 255, 0.21);
padding-left:15px;
    width:40%;
    display:flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;


  }

  .paginacion {
    display: flex;
    justify-content: space-evenly;

  
    width: 90%;
    
  }
  button {
    width: 80px;
    height: 40px;
    background-color: whitesmoke;
    box-shadow: 3px 3px 10px rgb(129, 125, 125);
    border-radius: 5%;
    margin: 50px;
  }

  /* .button-ghost-blue {
    background-color: transparent;
    border-radius: 0.4em;
    color: royalblue;
    padding: 0.4em 1em;
    border: 1px solid royalblue;
  } */
</style>
