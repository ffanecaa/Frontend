<script>
  let edit = false;
  export let element;
  function handleEdit() {
    edit = true;
  }

  function handleClick() {
    fetch("http://localhost:8000/elements/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(element),
    });
    edit = false;
  }
</script>

<button on:click={handleEdit}>📝</button>
{#if edit}
  <label
    >nome
    <input type="text" bind:value={element.name} />
  </label><br />
  <label
    >description
    <input type="text" bind:value={element.description} />
  </label><br />
  <label
    >latitude
    <input type="number" bind:value={element.latitude} />
  </label><br />
  <label
    >longitude

    <input type="number" bind:value={element.longitude} />
  </label>
  <button on:click={handleClick}>📝</button>
{/if}
