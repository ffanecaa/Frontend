<script>
    let name
let description 
let longuitude
let latitude

let element ={
  name:name,
  description:description,
  latitude:latitude,
  longuitude:longuitude
}

function manexadorPost(){
  const datos = fetch ('http://localhost:8000/Element/',{
    method: 'POST',
    headers: {'content-type':'application/json'
  },
  body:JSON.stringify(element)
})
}


</script>

<div>
    <h1>datos</h1>
    <label >nome
      <input type="text" bind:value={name}>
    </label><br>
    <label >description
      <input type="text" bind:value={description}>
    </label><br>
    <label >longuitude
      <input type="text" bind:value={longuitude}>
    </label><br>
    <label >latitude
      <input type="text" bind:value={latitude}>
    </label>
   <button on:click={manexadorPost}>subir</button>
  </div>
  