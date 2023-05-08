<script>
  import Registro from "./components/Elemento/Registro.svelte";
  import Leer from "./components/Elemento/Leer.svelte";

import Iconos from "./components/Iconos/Iconos.svelte";
import Iconostraer from "./components/Iconos/Iconostraer.svelte";
import Cathegory from "./components/Cathegory/Cathegory.svelte"
   
  //  import MapaTotal from "./components/MapaTotal/MapaTotal.svelte"
  import IconCathe from "./components/Iconos/icon-Cathe.svelte";
  import Pruebass from "./components/Elemento/Pruebass.svelte";
  import Paginacion from "./components/Paginacion/Paginacion.svelte";
  import Mapaelemento from "./components/Mapa/Mapaelemento.svelte";
  import MapaElementoNombre from "./components/Mapa/MapaElementoNombre.svelte";
   import Nosaldra from "./components/mapa/Nosaldra.svelte";


    import Principal from "./lib/vistas/Principal.svelte";
    import Privada from "./lib/vistas/Privada.svelte";




   
  import { Router, Link, Route } from "svelte-routing";
  import MapaTotal from "./components/MapaTotal/MapaTotal.svelte";
  import Mapas from "./components/mapa/Mapas.svelte";
  import PaginacionCategoria from "./components/Paginacion/PaginacionCategoria.svelte";
  // Agrega esta línea para importar la variable `url`
</script>

<Router >
  <nav>
    <Link to="/">Home</Link>
    <Link to="/mapa">Mapa</Link>
    <Link to="/paginacion">paginacion</Link>
    <Link to="/nombre">busqueda</Link>
    <Link to="/cate">cathege</Link>
    <Link to="/cates">cosa</Link>
  </nav>
  <main>
    <Route path="/" component={Nosaldra} />
    <Route path="/mapa" component={MapaTotal} />
    <Route path="/mapa/:id" component={Mapaelemento} />
    <Route path="/paginacion" component={Paginacion} />
    <Route path="/nombre" component={MapaElementoNombre} />
    <Route path="/cate" component={Paginacion} />
    <Route path="/cates" component={PaginacionCategoria} />
 
  </main>
</Router>











