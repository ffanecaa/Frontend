<h2>Categoria</h2>

<label >categoria
    <input type="text" bind:value={name}>
</label>
<button on:click={manexadorPostC}>click</button>
<button on:click={manexadorGetC}>get</button>

<h2>categorias</h2>
<ol>
    {#each cathe as {name}}
    <li>{name}</li>
    
    {/each}
</ol>

<script>

    let cathe=[]

     let name=''
     
   $: cathegory ={
        name: name,
    }
   
    
 function manexadorPostC(){
   fetch("http://localhost:8000/cathegory/",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(cathegory),
    })
}

function manexadorGetC(){
    fetch("http://localhost:8000/cathegory/")
 .then(res => res.json())
.then(response => {
    cathe = response;

 })
    
}

function manexadorDeleteC(){
    fetch("http://localhost:8000/cathegory/",{
     method: "DELETE",
     headers: { "Content-Type":"application/json"},
    body: JSON.stringify({id: cathegoriaa.id})

    })
}


</script>