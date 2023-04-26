
<script>

 let elementos=[]



function manexadorTraePrueba(){
    fetch("http://localhost:8000/pax/")
      .then(res => res.json())
      .then(response => {
        elementos = response;
      })
  }

</script>

<h2>elementos</h2>
<button on:click={manexadorTraePrueba}>traer</button>
<br>



{#each elementos as elemento}
<h2>{elemento.name}:</h2>
    <p>{elemento.description}</p>
    <p>{elemento.latitude} {elemento.longitude}</p>
    <p>{elemento.icon}</p>
    {/each}