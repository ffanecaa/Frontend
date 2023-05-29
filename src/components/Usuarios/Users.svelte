


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
     
        <button class="close-button" on:click={handleCloseModal}>CLOSE</button>
          
        {#if estado === "registro"}
          <div class="content">
          
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
      background-image:url(aquis.JPG);
      background-position:center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 10000;
     
    
    }
  
  
    .close-button {
      /* position: absolute;
      top: 20px;
      right: 10px; */
      width: 100px;
      height: 50px;
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
  