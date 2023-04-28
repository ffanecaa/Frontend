<script>
    let elementos = [];
    let name
    let page
    let limit
    
    function manexadorTrae(){
        fetch(`http://localhost:8000/pax/?page=${page}&name=${name}&limit${limit}`)
          .then(res => res.json())
          .then(response => {
            elementos = response;
          })
      }

  function manexadorAnterior(){
    
  }
  function manexadorPosterior(){

  }


    
</script>



<h2>elementos</h2>
<input type="text"bind:value={name}>
<br>
<button on:click={manexadorTrae}>traer</button> <br>
<button on:click={manexadorAnterior}>anterior</button>
<span> paginas</span>
<button on:click={manexadorPosterior}>posterior</button>
<br>



{#each elementos as elemento}
  <h2>{elemento.name}:</h2>
    <p>{elemento.description}</p>
    <p class="coordinates">{elemento.latitude} {elemento.longitude}</p>
    {/each}