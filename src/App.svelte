<script>

  import Paginacion from "./components/Paginacion/Paginacion.svelte";
  import Mapaelemento from "./components/Mapa/Mapaelemento.svelte";
  import MapaElementoNombre from "./components/Mapa/MapaElementoNombre.svelte";
   import Nosaldra from "./components/Mapa/Nosaldra.svelte";
   
  import { Router, Link, Route } from "svelte-routing";


  import ClasificaCategoria from "./components/Mapa/ClasificaCategoria.svelte";
  import FichaElemento from "./components/Mapa/FichaElemento.svelte"
  import LocalizarNombresPaginados from "./components/Paginacion/LocalizarNombresPaginados.svelte"
  import MapaElementosAgrupados from "./components/MapaElementosAgrupados/MapaElementosAgrupados.svelte"
  import Header from "./components/Header/Header.svelte";
  import Bic from "./components/Bic/Bic.svelte";
  import MapaElementosNombreVarios from "./components/Mapa/MapaElementosNombreVarios.svelte"
//  import Rutas from "./components/Geolocalizacion/Rutas.svelte"
  import VistaPublica from "./components/Vistas/VistaPublica.svelte"

</script>

<Router >
 


   


    <Route path="/" component={Nosaldra} />
   
    <Route path="/mapa" component={MapaElementosAgrupados} />
    <Route path="/bic" component={Bic} />

    <!-- genera el link para la ficha de cada elemento -->
    <Route path="/mapa/:id" component={Mapaelemento} /> 
       
    <Route path="/paginacion" component={Paginacion} />
    <Route path="/nombre" component={MapaElementoNombre} />
    <Route path="/rutas" component={Geolocalizacion} />
    <Route path="/ficha/:id" component= {FichaElemento}/>
    <Route path="/busqueda" component= {LocalizarNombresPaginados}/>
    <Route path="/busqueda/nombre" component= {MapaElementosNombreVarios }/>
    

  
   
  
    <Route path="/categoria" component={ClasificaCategoria} />
    <Route path="/vista" component={VistaPublica} />




<VistaPublica/>

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








