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
  import Geolocalizacion from "./components/Geolocalizacion/Geolocalizacion.svelte";
  import Bic from "./components/Bic/Bic.svelte";
 import ElemntosCatalogados from "./components/Bic/ElemntosCatalogados.svelte";
  import MapaElementosNombreVarios from "./components/Mapa/MapaElementosNombreVarios.svelte"
  import Header from "./components/Header/Header.svelte";
//  import Rutas from "./components/Geolocalizacion/Rutas.svelte"
 

</script>

<Router >

<Header/>
<div class="container">
<nav>
  <ul>
    <li>
     
        <span> <Link to="/">INICIO</Link></span>
  
     
    </li>
    <li>
    
        <span>   <Link to="/mapa">Mapa</Link></span>
    
    </li>
    <li>  
      <span>   <Link to="/paginacion">paginacion</Link></span>

      
    </li>
    <li>  
      <span>    <Link to="/nombre">mapas nombre </Link></span>
  
    
    </li>
    <li>
      <span>     <Link to="/categoria">Categorias</Link></span>
  
    
    </li>
    <li>
      <span>     <Link to="/rutas">Rutas</Link></span>
  
    
    </li>
    <li>
      <span>     <Link to="/busqueda">paginados Nombres</Link></span>
  
    
    </li>
    <li>
      <span>     <Link to="/bic">bic</Link></span>
  
    
    </li>
    <li>
      <span>     <Link to="/catalogados">catalogados</Link></span>
  
    
    </li>
    <li>
      <span>     <Link to="/busqueda/nombre">elementos nombre</Link></span>
  
    
    </li>
  </ul>
 
</nav>
   
<main>


    <Route path="/" component={Nosaldra} />
   
    <Route path="/mapa" component={MapaElementosAgrupados} />
    <Route path="/bic" component={Bic} />
    <Route path="/catalogados" component={ElemntosCatalogados} />

    <!-- genera el link para la ficha de cada elemento -->
    <Route path="/mapa/:id" component={Mapaelemento} /> 
       
    <Route path="/paginacion" component={Paginacion} />
    <Route path="/nombre" component={MapaElementoNombre} />
    <Route path="/rutas" component={Geolocalizacion} />
    <Route path="/ficha/:id" component= {FichaElemento}/>
    <Route path="/busqueda" component= {LocalizarNombresPaginados}/>
    <Route path="/busqueda/nombre" component= {MapaElementosNombreVarios }/>
    

  
   
  
    <Route path="/categoria" component={ClasificaCategoria} />
  


 
 
  



  

  </main>

 
 

   
  </div>
  
</Router>
  <style>
    nav{
      background-color: rgb(166, 166, 21);
    }
  
     ul {
    
      display: flex;
      justify-content: space-evenly;
      align-content: center;
      list-style: none;
      color:white;
      font-size: 1.5rem;
      }
 
                      
:global(a) {
            text-decoration: none;
          color:whitesmoke;
            text-align: center;
            font-weight: bold;
            font-size: 1.5rem;
           transition: font-size 0.2s;
      }

:global(a:hover){
  transform: scale(1.2);
  color:grey;
  font-size: 2rem;

}

        main{
        width: 100%;
       
        background-color:transparent;
        display: flex;
        justify-content: center;
        margin:5% 0;
        text-transform:capitalize;
        }
      </style>
      


