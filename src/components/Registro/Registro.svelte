<script>
  let name=''
  let description=''
  let longuitude=0
  let latitude=0

const elements = {

    name: name,
    description: description,
    latitude: latitude,
    longuitude: longuitude,
   
  };

  function manexadorPost(){
  fetch("http://localhost:8000/elements/",{
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(elements),
  
    })
  }
</script>

<div>
  <h1>datos</h1>
 
  <label
    >nome
    <input type="text" bind:value={name} />
  </label><br />
  <label >description
    <input type="text" bind:value={description} />
  </label><br />
  <label>longuitude
    <input type="number" bind:value={longuitude} />
  </label><br />
  <label
    >latitude

    <input type="number" bind:value={latitude} />
  </label>
  <button on:click={manexadorPost}>subir</button>
</div>
