<h2>Categoria</h2>

<label >categoria
    <input type="text" bind:value={name}>
</label>
<button on:click={manexadorPost}>click</button>
<button on:click={handleClick2}>get</button>

<ol>
    {#each cathegories as {name}}
    <li>{name}</li>
    {/each}
</ol>

<script>
    let cathegories=[]
     let name=''
   $: cathegory ={
        name: name,
    }
   
    
 function manexadorPost(){
   fetch("http://localhost:8000/cathegory/",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(cathegory),
    })
}

function handleClick2(){
    fetch("http://localhost:8000/cathegory")
 .then(res =>res.json())
.then(response =>{
    cathegories=response

 })
    
}




</script>