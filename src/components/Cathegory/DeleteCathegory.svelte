<button on:click={manexadorDeleteC}>❌</button>


<script>

    export let cathegory
    function manexadorDeleteC(){
    fetch(`http://localhost:8000/cathegory/`,{
     method: "DELETE",
     headers: { "Content-Type":"application/json"},
    body: JSON.stringify({id: cathegory.id})

    })
}
</script>