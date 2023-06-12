<script>
  import Paginacion from "./components/Paginacion/Paginacion.svelte";
  import Mapaelemento from "./components/Mapa/FichasElementoMapa.svelte";
  import MapaElementoNombre from "./components/Mapa/MapaElementoNombre.svelte";
   import Geolocalizacion from "./components/Geolocalizacion/Geolocalizacion.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./components/Header/Header.svelte";
  import ClasificaCategorias from "./components/Mapa/ClasificaCategorias.svelte";
  import Bic from "./components/Bic/Bic.svelte";
  import MapaElementosAgrupados from "./components/MapaElementosAgrupados/MapaElementosAgrupados.svelte";
  import ElementosMapaNombre from "./components/Mapa/ElementosMapaNombre.svelte";
  import LocalizarNombresPaginados from "./components/Paginacion/LocalizarNombresPaginados.svelte";
  import FichasElementoMapa from "./components/Mapa/FichasElementoMapa.svelte";
 
 
  

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
     
    </ul>
   
  </nav>
  <main>
   
    <Route path="/mapa" component={MapaElementosAgrupados} />

  
    <Route path="/mapa/:id" component={FichasElementoMapa} />    
    <Route path="/paginacion" component={Paginacion} />
    <Route path="/nombre" component={MapaElementoNombre} />
    <Route path="/rutass" component={Geolocalizacion} />
    <Route path="/bic" component={Bic} />
    <Route path="/bics" component={ElementosMapaNombre} />
    <!-- <Route path="/portada" component={Portada} /> -->

    <Route path="/lento" component={ClasificaCategorias} />
    <Route path="/pagina/busquedas" component={LocalizarNombresPaginados} />
    <Route path="/pagina/busquedassss" component={Mapaelemento} />


  </main>


</div>
</Router>


<style>

  nav ul {
	list-style: none; 
  overflow: hidden; 
  position: relative;
color:black ;


}

	nav ul li {
		float: left;
     margin: 0 10px 0 0;
    background-color: whitesmoke;
      box-shadow: 3px 3px 10px rgb(129, 125, 125);
      border-radius: 5%;
      margin-left: 50px;
			display: block;
       width: 120px; 
       height: 40px;
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
					font: 1rem "Dosis", sans-serif; 
          text-transform: uppercase; 
       
	
				}
				 :hover span {
						display: block;
					}
				

          :global(a) {
      text-decoration: none;
      color:#c5455a8f;
      text-align: center;
      font-weight: bold;
  
    }		
  main{
  width: 100%;
 
  background-color:transparent;
  display: flex;
  justify-content: center;
  margin:5% 0;
  }
</style>








