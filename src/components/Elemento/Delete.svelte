<script>
      let name=''
  let description=''
  let longuitude=0
  let latitude=0
export let elemento={      
   name:name,
   description:description,
   longuitude:longuitude,
   latitude:latitude}


function handleDelete(){
    fetch("http://localhost:8000/elements/",{
method:"DELETE",
headers:{"content-Type":"application/json"},
body: JSON.stringify({id: elemento.id})
}
    )
}

</script>


<button on:click = {handleDelete}>❌</button>


