<script>
  import Sesion from "./Sesion.svelte";



</script>
<div class="userRuta">
    <h2>no estas logueado</h2>
    <h2>loguin</h2>
    <div class="posicion">
<Sesion/>
</div>
</div>


<style>
    .userRuta{
     
        width: 100vw;
        height: 100vh;
        position: relative;

    }
    .posicion{
        position: absolute;
        top:50%;
        left: 50%;

    }
</style>