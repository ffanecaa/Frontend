<h2>Categoria</h2>

<label >categoria
    <input type="text" bind:value={name}>
</label>
<button on:click={manexadorPostC}>click</button>
<button on:click={manexadorGetC}>get</button>


<h2>categorias</h2>
<ol>
    {#each cathe as cathegory}
    <li>{cathegory.name}</li>
  <DeleteCathegory cathegory={cathegory}/>
    {/each}
</ol>

<script>
import DeleteCathegory from "./DeleteCathegory.svelte";
    let cathe=[]

     let name=''
     let id
   $: cathegory ={
        name: name,
        id:id
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




</script>