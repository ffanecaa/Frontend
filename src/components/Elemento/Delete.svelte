<script>
export let elemento
function handleDelete(){
    fetch("http://localhost:8000/elements/",{
method:"DELETE",
headers:{"content-Type":"application/json",
body: JSON.stringify({id: elemento.id})
}
    })
}

</script>

<h2>borrar</h2>
<button on:click = {handleDelete}>eliminar</button>


<style