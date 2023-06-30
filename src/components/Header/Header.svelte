<script>
  import Users from "../Usuarios/Users.svelte";
</script>

<header>
  <!-- <img src="descarga.png" alt="letras"> -->
  <h1>                  Galicia Monumental</h1>

  <div class="users"><Users /></div>
</header>

<style>
  header {
   
    background-image: url(/colla.jpg
    );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 80% 60%;
    background-position: 80% 80%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    height:400px;
    margin-top: 0;
   
  }

     h1 {
    background: transparent;
    font-size: 7rem;
    font-weight: bold;
    margin-top: 0%;
    margin-left:0%;
    text-align:center;
    text-shadow: 4px 4px 4px white;
    overflow: hidden;
   
  }
  .users {
    position: absolute;
    bottom: 0;
    right: 0;
  }

</style>
