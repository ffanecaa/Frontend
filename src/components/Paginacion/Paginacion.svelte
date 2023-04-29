<script>

    import Mapas from "../mapa/Mapas.svelte";  import L from 'leaflet';
$: info = { elements: [], pagination: {} }
    let page  =2
    let limit=5
    // let nextPage = info.pagination.nextPAge
    // let previousPage=info.pagination.previuosPage
//-------------------------traer  datos --------------------------------
 async function traerDatos(){
   const resposta = fetch(`http://localhost:8000/pax/?page=${page}&limit=${limit}`)
        const datos = (await resposta).json()
        return datos
    }
      function traerDatosm(){
    traerDatos()
    .then (datosrecibidos=> info = datosrecibidos)
  
}
// traer datos -------------------------------NEXT PAGE----------------------------------
async function traerpaxPosterior(){
   const resposta = fetch(`http://localhost:8000${info.pagination.nextPAge}`)
        const datos = (await resposta).json()
        return datos
    }
    function mas(){
traerpaxPosterior()
    .then (datosrecibidos=> info = datosrecibidos)
  
}
//------------------PREVIOUS PAGE --------ENVIO RUTA-------------------------------------------
async function traerPaxAnterior(){
   const resposta = fetch(`http://localhost:8000${info.pagination.previousPage}`)
        const datos = (await resposta).json()
        return datos
    }
    // ---------------MANEXADOR USE FUNCION DE BUSQUEDA Y TRAIGO INFO --------------------
    function menos(){
       traerPaxAnterior()
    .then (datosrecibidos=> info = datosrecibidos)
  
}



</script>
pagina
<input type="text"bind:value={page}>
<!-- elementos -->
<!-- <input type="text"bind:value={limit}> -->
<button on:click={traerDatosm}>boton</button>
<button on:click={mas} >mas</button>
<button on:click={menos} >menos</button>




{#each info.elements as elemento }
<p>{elemento.name} {elemento.description}</p>
<Mapas latitude={elemento.latitude} longitude={elemento.longitude} name={elemento.name} L={L} />
{/each}

<p>{info.pagination.nextPAge}</p>
<p>{info.pagination.previousPage}</p>