<script>

    let elementos =[]
    let pagination
  let elements
    let page  =3
    let limit=5
    let nextPage
    let previousPage

   $: pagination={
        page:page,
        limit:limit,
        nextPage:nextPage,
        previousPage:previousPage,
    }

function manexador(){
    fetch(`http://localhost:8000/pax/?page=${page}&limit=${limit}`)
        .then(res => res.json())
        .then(data => {elementos = data}) 
    }

// for  (let ele of elementos){
//   ele.push(pu)
// }

</script>
pagina
<input type="text"bind:value={page}>
elementos
<input type="text"bind:value={limit}>
<button on:click={manexador}>boton</button>
<button >mas</button>
<button >menos</button>

<p>{pu}</p>

