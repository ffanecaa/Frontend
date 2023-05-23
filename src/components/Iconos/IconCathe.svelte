<script>

    let icoCat = []
   
    
    
    function manexadorget(){
        fetch("http://localhost:8000/icons/")
        .then(res => res.json())
          .then(response => {
            icoCat = response;})
            console.log(icoCat)
    }
    
    
    </script>
    <button on:click={manexadorget}>icoca </button>
    
    <ul>
        {#each icoCat as {id,file}}
        <li>{id}  </li>
        <img src="{file}" alt="icono">
        {/each}
    </ul>
    
    
    