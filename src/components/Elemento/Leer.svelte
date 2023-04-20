<!-- <script>
 
  let name=''
  let description=''
  let longuitude=0
  let latitude=0
  let elementos = [];
$: elements = {
    name: name,
    description: description,
    latitude: latitude,
    longuitude: longuitude,
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
  {#each elementos as {  name, description, latitude, longuitude }}
    <li> {name} {description} {latitude} {longuitude}</li>
  {/each}
</ul> -->

<script>
  import Delete from "./Delete.svelte"
  import Mapas from "../mapa/Mapas.svelte";
  import L from 'leaflet';
  import { element } from "svelte/internal";
   let elementos = [];
//    let name=''
//   let description=''
//   let longuitude=0
//   let latitude=0
//    $: elements = {
//  name,
//  description,
//  latitude,
//  longuitude,

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
  {#each elementos as { 
     name, description, latitude, longuitude }}
    <h2> {name} </h2><p>{description}</p><p> {latitude} {longuitude}</p>
  
    <Delete elemento={{ name, description, latitude, longuitude}}/>
    
     <Mapas latitude={latitude} longuitude={longuitude} name={name} L={L} />
     <br><br>
  {/each}
</div>


