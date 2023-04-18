<script>
  let id = "";
  let file = "";

  $: icons = {
    id: id,
    file: file,
  };

  function handlePost() {
    fetch("http://localhost:8000/icons/", {
      method: "POST",
      headers:{"Content-Type": "application/json" },
      body: JSON.stringify(icons),
    });
  }
</script>
<h2>iconos::</h2>
<label>
  id
  <input type="text" bind:value={id} />
</label>
<label>
  file
  <input type="text" bind:value={file} />
</label>
<button on:click={handlePost}>añadir </button>
