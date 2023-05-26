<!-- <script>
  import Sesion from "../Usuarios/Sesion.svelte";
import Usuario from "../Usuarios/Usuario.svelte";
// import { createEventDispatcher } from "svelte";

// export let estado = "registro"
// const dispatch = createEventDispatcher()


// function handleClickLogin(){
//    dispatch("uplogin",{ estado :"login"
// })}
// function handleClickRegistro(){ 
//     dispatch("upregistro",{ estado :"registro"
// })
   
//}

let estado = "registro"
let visibility="hidden"
function handleClickLogin(){
    estado ="login"
    visibility="visible"
}
function handleClickRegistro(){
    estado ="registro"
    visibility="visible"
}



</script>



<div class="users" style="visibility={visibility}">
    <div class="botones">
<button on:click={handleClickLogin}>Login</button>
<button on:click={handleClickRegistro}>Registro</button>
   </div>
{ #if (estado === "registro")}
<div class="registro">
    <Usuario/>
</div>
{/if}

{#if (estado === "login")}
<div class="login">
    <Sesion/>
</div>
{/if}

</div>




<style>

    .users{
     
         width: 50px;
        display: flex;
         flex-direction: column;
         gap:5px;
         color:white;
    }
    button{
        padding: 5px;
        width: 60px;
        height: 25px;
     
    }
.botones{
    display: flex;
    flex-direction: row;
    gap:5px;
}
 </style> -->
 <!-- <script>
    import { createEventDispatcher } from "svelte";
    import Sesion from "../Usuarios/Sesion.svelte";
    import Usuario from "../Usuarios/Usuario.svelte";
  
    let estado = "registro";
    const dispatch = createEventDispatcher();
    let showModal = false;
  
    function handleClickLogin() {
      estado = "login";
      showModal = true;
    }
  
    function handleClickRegistro() {
      estado = "registro";
      showModal = true;
    }
  
    function handleCloseModal() {
      showModal = false;
    }
  </script>
  
  <div class="users">
    <div class="botones">
      <button on:click={handleClickLogin}>Login</button>
      <button on:click={handleClickRegistro}>Registro</button>
    </div>
  
    {#if showModal}
    <div class="modal">
      <div class="modal-content">
        <button class="close-button" on:click={handleCloseModal}>Cerrar</button>
        {#if estado === "registro"}
          <div class="content">
            <fieldset>
              <legend>Registro</legend>
              <Usuario/>
            </fieldset>
          </div>
        {:else if estado === "login"}
          <div class="content">
            <fieldset>
              <legend>Login</legend>
              <Sesion/>
            </fieldset>
          </div>
        {/if}
      </div>
    </div>
    {/if}
  </div>
  
  <style>
    .users {
        box-sizing: border-box;
      width: 50px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      color: white;
    }
  
    button {
      padding: 5px;
      width: 60px;
      height: 25px;
    }
  
    .botones {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 20;
    }
  
    .modal-content {
     
      padding: 20px;
      border-radius: 5px;
      position: relative;
    }
  
    .close-button {
      position: absolute;
      top: 10px;
      right: 100px;
    }
  
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    fieldset {
      border: none;
      padding: 0;
      margin: 0;
    }
  
    legend {
      text-align: center;
      margin-bottom: 10px;
    }
  </style>
   -->


   <script>
  
    import Sesion from "../Usuarios/Sesion.svelte";
    import Usuario from "../Usuarios/Usuario.svelte";
  
    let estado = "registro";
  
    let showModal = false;
  
    function handleClickLogin() {
      estado = "login";
      showModal = true;
    }
  
    function handleClickRegistro() {
      estado = "registro";
      showModal = true;
    }
  
    function handleCloseModal() {
      showModal = false;
    }
  </script>
  
  <div class="users">

    <div class="botones">
      <button on:click={handleClickLogin}>Login</button>
      <button on:click={handleClickRegistro}>Registro</button>
    </div>
  
    {#if showModal}
    <div class="ventana">
     
        <button class="close-button" on:click={handleCloseModal}>Cerrar</button>
          
        {#if estado === "registro"}
          <div class="content">
           <h2>Registro</h2>
              <Usuario/>
          
          </div>
        {:else if estado === "login"}
          <div class="content">
            
             
              <Sesion/>
          
          </div>
        {/if}
      </div>
   
    {/if}
  </div>
  
  <style>
    .users {
      width:100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      color: white;
    }
  
    button {
      padding: 5px;
      width: 60px;
      height: 25px;
    }
  
    .botones {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  
    .ventana {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:url(../../../public/fondo.jpg);
    
      z-index: 10000;
     
    
    }
  

  
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  
    .content {
  margin-top: 20%;
 margin-left: 40%;
      align-content: center;
      width: 100%;
      height: 100%;
      z-index: 20;
     
    }
  
  
  </style>
  