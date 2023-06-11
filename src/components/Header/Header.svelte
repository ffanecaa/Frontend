<script>
  import Users from "../Usuarios/Users.svelte";




</script>
<header>

<!-- <img src="descarga.png" alt="letras"> -->
<h1>Vagando y vagueando:
Galicia Monumental </h1>


<div class="users"><Users/></div>
</header>

<style>
    header{
        /* background-color: #D6E8DB; */
         background-image: url(bus.jpg);
        background-size: cover ;
        background-repeat: no-repeat;
        background-position: 80% 80%; 
        padding: 0 20px;
       display: flex;
       flex-direction: column;
       position: relative;
       height:350px ;
margin-top:0
    }

h1{
color:white;
font-size: 4rem;
font-weight:bold;
margin-top:10%;
    
text-shadow: 2px 2px 3px #c5455a8f;
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