<script>
//   import Registro from "./components/Elemento/Registro.svelte";
//   import Leer from "./components/Elemento/Leer.svelte";

// import Iconos from "./components/Iconos/Iconos.svelte";
// import Iconostraer from "./components/Iconos/Iconostraer.svelte";
// import Cathegory from "./components/Cathegory/Cathegory.svelte"
   
  //  import MapaTotal from "./components/MapaTotal/MapaTotal.svelte"
  // import IconCathe from "./components/Iconos/icon-Cathe.svelte";
  // import Pruebass from "./components/Elemento/Pruebass.svelte";
  import Paginacion from "./components/Paginacion/Paginacion.svelte";
  import Mapaelemento from "./components/Mapa/Mapaelemento.svelte";
  import MapaElementoNombre from "./components/Mapa/MapaElementoNombre.svelte";
   import Nosaldra from "./components/Mapa/Nosaldra.svelte";
   import Geolocalizacion from "./components/Geolocalizacion/Geolocalizacion.svelte";

 




   //import IconCathe from "./components/Iconos/IconCathe.svelte"
  import { Router, Link, Route } from "svelte-routing";
  import MapaTotal from "./components/MapaTotal/MapaTotal.svelte";
  // import Mapas from "./components/mapa/Mapas.svelte";
  // import PaginacionCategoria from "./components/Paginacion/PaginacionCategoria.svelte";
  import Lento from "./components/Mapa/Lento.svelte";

  
  import Usuario from "./components/Usuarios/Usuario.svelte";
  import Sesion from "./components/Usuarios/Sesion.svelte";
  // Agrega esta línea para importar la variable `url`
</script>

<Router >
  <nav>
    <Link to="/">Home</Link>
    <Link to="/mapa">Mapa</Link>
    <Link to="/paginacion">paginacion</Link>
    <Link to="/nombre">busqueda por nombre </Link>
    
    <!-- <Link to="/cates">busqueda Categoria</Link> -->
    
    <Link to="/lento">Categorias</Link>
   
  </nav>
  <main>
    <Route path="/" component={Nosaldra} />
    <Route path="/mapa" component={MapaTotal} />

    <!-- genera el link  -->
    <Route path="/mapa/:id" component={Mapaelemento} />    
    <Route path="/paginacion" component={Paginacion} />
    <Route path="/nombre" component={MapaElementoNombre} />
    

  
   
    <!-- <Route path="/cates" component={PaginacionCategoria} /> -->
    <Route path="/lento" component={Lento} />
 <!-- <Geolocalizacion/> -->
 <Usuario/>
 <Sesion/>
  </main>
</Router>


<style>
  nav{
 display: flex;
 justify-content: space-between;
 color:whitesmoke
  }
</style>








