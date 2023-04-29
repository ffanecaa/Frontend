<!-- <script>
 
  let name=''
  let description=''
  let longitude=0
  let latitude=0
  let elementos = [];
$: elements = {
    name: name,
    description: description,
    latitude: latitude,
    longitude: longitude,
  };

  function manexadorTrae(){
    fetch("http://localhost:8000/elements/")
      .then(res => res.json())
      .then(response => {
        elementos = response;
      })
  }
</script>

<h2>elementos</h2>

<button on:click={manexadorTrae}>traer</button>

<ul>
  {#each elementos as {  name, description, latitude, longitude }}
    <li> {name} {description} {latitude} {longitude}</li>
  {/each}
</ul> -->

<script>
  import Delete from "./Delete.svelte"
  // import Mapas from "../mapa/Mapas.svelte";
  // import L from 'leaflet';
 
  import Put from "./Put.svelte";
   let elementos = [];
   let name=''
  let description=''
  let longitude=0
  let latitude=0
//    $: elements = {
//  name,
//  description,
//  latitude,
//  longitude,

// };

   function manexadorTrae(){
    fetch("http://localhost:8000/elements/")
      .then(res => res.json())
      .then(response => {
        elementos = response;
      })
  }
</script>

<h2>elementos</h2>
<button on:click={manexadorTrae}>traer</button>
<br>



<div>

  {#each elementos as elemento}
  <h2>{elemento.name}:</h2>
    <p>{elemento.description}</p>
    <p class="coordinates">{elemento.latitude} {elemento.longitude}</p>
    <Delete elemento={elemento} />
    <Put bind:element={elemento}/>
    <Mapas latitude={elemento.latitude} longitude={elemento.longitude} name={elemento.name} L={L} />
    <br><br><br><br>
  {/each}

</div>

<style>
  h2{
    text-shadow: 1px 1px 2px black;
    text-transform: capitalize;
  }
  p{
    text-align: left;
    margin: 0;
  padding: 0;
  text-indent: 20px;
  }
  .coordinates{
    text-align:right;
  }
</style>