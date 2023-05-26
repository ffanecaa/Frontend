<script>

import {navigate} from "svelte-routing"

let name
let password
let id


 async function manexadorEnvio(){
  const response = await  fetch("http://localhost:8000/usuarios/sesion/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,password})
    })

    if ( response.ok){
        const token = await response.text()
        localStorage.setItem("token" , token)
        navigate("/Elements/")

    }
}



    
</script>


<div class="sesion">
    <fieldset>
        <legend>Login</legend>
    
        <label for="">nome
            <input type="text" placeholder="introduce tu nombre"bind:value={name}>
        </label>
        <label for="">contrasinal
            <input type="text" placeholder="introduce tu contrasinal" bind:value={password}>
        </label>
    
        <button on:click={manexadorEnvio}>Logueate</button>
        </fieldset>
</div>


    
<style>

    .sesion{
         width: 50px;}
         
     fieldset{
         display: flex;
         flex-direction: row;
         gap:5px;
         color:white;
        
     }
   
 </style>