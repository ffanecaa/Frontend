<script>
  let elements = [];
  let totalPages = 0;
  let currentPage = 0;
  const pageSize = 5;

  async function loadElements(page) {
    const response = await fetch(`http://localhost:8000/elements?page=${page}&size=${pageSize}`);
    const data = await response.json();
    elements = data.content;
    totalPages = data.totalPages;
    currentPage = page;
  }

  function loadMoreElements() {
    if (currentPage < totalPages - 1) {
      loadElements(currentPage + 1);
    }
  }

  function loadPreviousPage() {
    if (currentPage > 0) {
      loadElements(currentPage - 1);
    }
  }

  function loadNextPage() {
    if (currentPage < totalPages - 1) {
      loadElements(currentPage + 1);
    }
  }
  
  loadElements(0);
</script>

<main>
  <button on:click={manexadorelementos}>Cargar elementos</button>

    <ul>
      {#each elements as element}
        <li>
          <h2>{element.name}</h2>
          <p>{element.description}</p>
          <p>Latitud: {element.latitude} Longitud: {element.longitude}</p>
          <img src={element.icon} alt="">
        </li>
      {/each}
    </ul>
    <div>
      <button on:click={loadPreviousPage}>Anterior</button>
      <span>Página {currentPage + 1} de {totalPages}</span>
      <button on:click={loadNextPage}>Siguiente</button>
    </div>

    <p>Presiona el botón "Cargar elementos" para cargar los elementos desde el backend</p>

</main>

