<script>
  import { onMount } from "svelte";
  import Mapas from "../Mapa/Mapas.svelte";
  import L from "leaflet";
  import {
    getElementsBusquedaPax,
    traerpaxPosterior,
    traerpaxAnterior,
  } from "../../lib/fetchs.mjs";

  let info = { elements: [], pagination: {} };

  let name = "";
  let description = "";
  let longitude;
  let latitude;
  $: elemento = {
    name: name,
    description: description,
    latitude: latitude,
    longitude: longitude,
  };

  let page = 1;
  let limit = 6;

  function traerDatosm() {
    getElementsBusquedaPax(name, page, limit).then((datosrecibidos) => {
      info = datosrecibidos;
    });
  }

  // // next/////

  function mas() {
    traerpaxPosterior(info.pagination.nextPAge).then(
      (datosrecibidos) => (info = datosrecibidos)
    );
    console.log(info);
  }
  function menos() {
    traerpaxAnterior(info.pagination.previousPage).then(
      (datosrecibidos) => (info = datosrecibidos)
    );
    console.log(info);
  }
</script>

<div class="container">
  <div class="header">
    <h1>busca</h1>
    <input type="text" bind:value={name} />

    <button on:click={traerDatosm}>boton</button>
  </div>  


  <div class="container_pagination" >
    <div class="container_ficha">
      {#each info.elements as elemento (elemento.id)}
        <div class="ficha">
          <h2>{elemento.name}</h2>

          <p>{elemento.description}</p>
          <p class="coordenadas">{elemento.latitude} {elemento.longitude}</p>

          <div class="mapa">
            <Mapas
              name={elemento.name}
              latitude={elemento.latitude}
              longitude={elemento.longitude}
              {L}
            />
          </div>
        </div>
      {/each}
    </div>

    <div class="paginacion">
      <button on:click={menos}>◀</button>
      <button on:click={mas}>▶</button>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin-top:200px;
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
.map{
  width:40%;
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
