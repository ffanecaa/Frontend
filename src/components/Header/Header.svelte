<script>
  import Users from "../Usuarios/Users.svelte";




</script>
<header>

<!-- <img src="descarga.png" alt="letras"> -->
<h1>PATRIMONIO GALICIA </h1>


<div class="users"><Users/></div>
</header>

<style>
    header{
        background-color: #D6E8DB;
        /* background-image: url(../../../public/vent.JPG);
        background-size: cover ;
        background-repeat: no-repeat;
        background-position: 40% 70%; */
        padding: 20px;
       display: flex;
       flex-direction: column;
       position: relative;

    }

h1{
  transition: rotateX('300px');
  animation: alternate-reverse;
}
.users{
  position: absolute;
  bottom: 0;
  right: 0;
}
    /* img{
     position: absolute;
     top:0;
   right: 0;
    } */
</style>