<script>
  let name=''
  let description=''
  let longitude=0
  let latitude=0
  let icon=""
$: elements = {

    name: name,
    description: description,
    latitude: latitude,
    longitude: longitude,
    icon:icon,
  };

  function handlePost(){
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
  </label><br/> 
  <label>latitude
    <input type="number" bind:value={latitude} />
  </label><br />
  <label
    >longitude

    <input type="number" bind:value={longitude} />
  </label>
  <br>
  <label
    >icon

    <input type="number" bind:value={icon} />
  </label>
  <button on:click={handlePost}>subir</button>

</div>