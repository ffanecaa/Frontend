<script>
let name 
let password
$:usuarios ={
    
    name: name,
    password:password
}
function manexadorEnvio(){
    fetch("http://localhost:8000/usuarios/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(usuarios)
    })
}

</script>


<fieldset>
<legend>Registrate</legend>

<label for="">nome
    <input type="text" placeholder="introduce tu nombre"bind:value={name}>
</label>
<label for="">contrasinal
    <input type="text" placeholder="introduce tu contrasinal" bind:value={password}>
</label>

<button on:click={manexadorEnvio}>envia</button>
</fieldset>