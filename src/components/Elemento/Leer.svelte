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
   let elementos = [];

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
    <Delete elemento = { {name, description, latitude, longuitude}}/>
  {/each}
</ul>