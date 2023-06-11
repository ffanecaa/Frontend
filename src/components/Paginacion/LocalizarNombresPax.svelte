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
  let limit = 4;

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

  <div class="container_pagination" style="width:1000px;height:100vh">
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
</div>
<style>
.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  background-image: url(descarga.png);
  /* background-color: #9fb12978; */
}

.container_ficha{
  margin: 10px;
  display: flex;
  justify-content:space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  background-color:#c5455a6c ;
  width:180%;
}














</style>