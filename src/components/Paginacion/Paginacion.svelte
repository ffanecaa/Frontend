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
 
    import Mapas from '../mapa/Mapas.svelte';  
    import L from 'leaflet';
    let info = { elements: [], pagination: {} }

 export let page  =1
 export let limit= 5
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
    .then (datosrecibidos=> { info = datosrecibidos;  console.log(info)})
  
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
      console.log(info) 
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
        console.log(info) 
}

onMount(()=>{
  traerDatosm()
  })

</script>

<div class="container_pagination">
 
  
 
  
  
  <div class="container_title">

  {#each info.elements as elemento (elemento.id)}
<div class="ficha">
  <h2>{elemento.name}</h2>
   
   <p> {elemento.description} </p>
   <p class ="coordenadas">{elemento.latitude} {elemento.longitude}</p>

  <Mapas name={elemento.name} latitude={elemento.latitude} longitude= {elemento.longitude} L={L}/>
</div>
  {/each}
</div>
  <div class="paginacion">
    <button on:click={menos} >◀</button>
    <p>{info.pagination.page}</p>
    <button on:click={mas} >▶</button>
    <input type="text"bind:value={page}>
  <!-- elementos -->
  <!-- <input type="text"bind:value={limit}> -->
  <button on:click={traerDatosm}>boton</button>
  </div>
</div>


<style>
  .container_pagination {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .paginacion {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .siguientes {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .ficha {
    margin-bottom: 80px;
  }
  .coordenadas {
    /*writing-mode: vertical-lr;*/
    left: 10;
    top: 40%;
  }
 input {
    width: 40px;
    text-align: center;
  }


</style>