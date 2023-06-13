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
  import ClasificaCategoria from "./components/Mapa/ClasificaCategoria.svelte";
  import FichaElemento from "./components/Mapa/FichaElemento.svelte"
  import LocalizarNombresPaginados from "./components/Paginacion/LocalizarNombresPaginados.svelte"

  import Header from "./components/Header/Header.svelte";
 import Geojson from "./components/geojson/Geojson.svelte";
  //import Rutas from "./components/Geolocalizacion/Rutas.svelte";
  //  import Portada from "./components/modulares/portada.svelte";
  // Agrega esta línea para importar la variable `url`
</script>

<Router >
  <!-- <Rutas/> -->

  <div class="container">
    <Header/>
  <!-- <Portada/> -->
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
      <li>
        <span>     <Link to="/lento">Categorias</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/rutass">Rutas</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/busqueda">paginadosNombres</Link></span>
    
      
      </li>
    </ul>
   
  </nav>
  <main>
    <Route path="/" component={Nosaldra} />
    <Route path="/mapa" component={MapaTotal} />

    <!-- genera el link  -->
    <Route path="/mapa/:id" component={Mapaelemento} />    
    <Route path="/paginacion" component={Paginacion} />
    <Route path="/nombre" component={MapaElementoNombre} />
    <Route path="/rutass" component={Geolocalizacion} />
    <Route path="/ficha/:id" component= {FichaElemento}/>
    <Route path="/busqueda" component= {LocalizarNombresPaginados}/>
    

  
   
  
    <Route path="/lento" component={ClasificaCategoria} />


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
    background-color: #D5C4A4
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








