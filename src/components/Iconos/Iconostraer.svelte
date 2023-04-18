<script>

let iconos = []



function manexadorget(){
    fetch("http://localhost:8000/icons/")
    .then(res => res.json())
      .then(response => {
        iconos = response;})
}


</script>
<button on:click={manexadorget}>iconos </button>

<ul>
    {#each iconos as {id,file}}
    <li>{id} {file}</li>
    {/each}
</ul>


