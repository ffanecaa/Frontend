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
  //  import Nosaldra from "./components/Mapa/Nosaldra.svelte";
   import Geolocalizacion from "./components/Geolocalizacion/Geolocalizacion.svelte";

 




   //import IconCathe from "./components/Iconos/IconCathe.svelte"
  import { Router, Link, Route } from "svelte-routing";
  import MapaTotal from "./components/MapaTotal/MapaTotal.svelte";
  // import Mapas from "./components/mapa/Mapas.svelte";
  // import PaginacionCategoria from "./components/Paginacion/PaginacionCategoria.svelte";
  import Lento from "./components/Mapa/Lento.svelte";

  
 // import Usuario from "./components/Usuarios/Usuario.svelte";
 // import Sesion from "./components/Usuarios/Sesion.svelte";
  import Header from "./components/Header/Header.svelte";
  import Geojson from "./components/geojson/Geojson.svelte";
  import LocalizarNombres from "./components/Mapa/LocalizarNombres.svelte";
  import LocalizarNombresPax from "./components/Paginacion/LocalizarNombresPax.svelte";
 
  //import Rutas from "./components/Geolocalizacion/Rutas.svelte";
  //  import Portada from "./components/modulares/portada.svelte";
  // Agrega esta línea para importar la variable `url`
</script>

<Router >
  <Header/>

  <div class="container">
  

  <nav>
    <ul>
      <li>
       
					<span> <Link to="/">Home</Link></span>
		
       
      </li>
      <li>
      
					<span>   <Link to="/mapa">Mapa</Link></span>
			
      </li>
      <li>  
        <span>   <Link to="/paginacion">paginacion</Link></span>
 
        
      </li>
      <li>  
        <span>    <Link to="/nombre">busqueda por nombre </Link></span>
    
      
      </li>
      <!-- <li>
        <span>     <Link to="/lento">Categorias</Link></span>
    
      
      </li> -->
      <li>
        <span>     <Link to="/rutass">Rutas</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/bic">Bic</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/bics">Busqueda Nombre</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/pagina/busquedas">pagina Nombre</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/lento">Categorias</Link></span>
    
      
      </li>
    </ul>
   
  </nav>
  <main>
   
    <Route path="/mapa" component={MapaTotal} />

  
    <Route path="/mapa/:id" component={Mapaelemento} />    
    <Route path="/paginacion" component={Paginacion} />
    <Route path="/nombre" component={MapaElementoNombre} />
    <Route path="/rutass" component={Geolocalizacion} />
    <Route path="/bic" component={Geojson} />
    <Route path="/bics" component={LocalizarNombres} />
    <!-- <Route path="/portada" component={Portada} /> -->

    <Route path="/lento" component={Lento} />
    <Route path="/pagina/busquedas" component={LocalizarNombresPax} />


  </main>


</div>
</Router>


<style>

  nav ul {
	list-style: none; overflow: hidden; position: relative;
color:black ;
}
	nav ul li {
		float: left; margin: 0 20px 0 0;
    background-color: #C59378;
	}
		nav ul li  {
			display: block; width: 120px; height: 40px;
		}
			nav ul li:nth-child(1)  {
				/* background-color: #D3975B; */
				background-position: 28px 28px;
        
			
			}
			nav ul li:nth-child(2)  {
				/* background-color: #D3975B; */
				background-position: 28px -96px;
    
			}
			nav ul li:nth-child(3)  {
				/* background-color: #D3975B; */
				background-position: 28px -222px;
        
			
			}
			nav ul li:nth-child(4)  {
				/* background-color: #D3975B; */
				background-position: 28px -342px;
			}
			nav ul li:nth-child(5)  {
				/* background-color: #E6E7EB; */
				background-position: 28px -462px;
			}
			nav ul li:nth-child(6)  {
				/* background-color: #D3975B; */
				background-position: 28px -582px;
			}
		 span {
					font: 1rem "Dosis", sans-serif; text-transform: uppercase; 
	
				}
				 :hover span {
						display: block;
					}
				

					
  main{
  width: 100%;
 
  background-color:transparent;
  display: flex;
  justify-content: center;
  margin:5% 0;
  }
</style>








