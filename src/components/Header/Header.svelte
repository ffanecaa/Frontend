<script>
  import Users from "../Usuarios/Users.svelte";




</script>
<header>

<img src="../../../public/descarga.png" alt="letras">
<h1>PATRIMONIO GALICIA </h1>


<Users/>
</header>

<style>
    header{
        background-color: #D6E8DB;
        /* background-image: url(../../../public/vent.JPG);
        background-size: cover ;
        background-repeat: no-repeat;
        background-position: 40% 70%; */
        padding: 20px;
       
    }

h1{
  transition: rotateX('300px');
  animation: alternate-reverse;
}
    img{
     position: absolute;
     top:0;
   right: 0;
    }
</style>