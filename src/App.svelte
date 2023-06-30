<script>
  import Paginacion from "./components/Paginacion/Paginacion.svelte";
  import Mapaelemento from "./components/Mapa/Mapaelemento.svelte";
  import MapaElementoNombre from "./components/Mapa/MapaElementoNombre.svelte";
  import Nosaldra from "./components/Mapa/Nosaldra.svelte";

  import { Router, Link, Route } from "svelte-routing";

  import ClasificaCategoria from "./components/Mapa/ClasificaCategoria.svelte";
  import FichaElemento from "./components/Mapa/FichaElemento.svelte";
  import LocalizarNombresPaginados from "./components/Paginacion/LocalizarNombresPaginados.svelte";
  import MapaElementosAgrupados from "./components/MapaElementosAgrupados/MapaElementosAgrupados.svelte";
  import Geolocalizacion from "./components/Geolocalizacion/Geolocalizacion.svelte";
  import Bic from "./components/Bic/Bic.svelte";
  import ElemntosCatalogados from "./components/Bic/ElemntosCatalogados.svelte";
  import MapaElementosNombreVarios from "./components/Mapa/MapaElementosNombreVarios.svelte";
  import Header from "./components/Header/Header.svelte";
  import Delete from "./components/Cathegory/Delete.svelte";
  import Registro from "./components/Elemento/Registro.svelte";
  //  import Rutas from "./components/Geolocalizacion/Rutas.svelte"
</script>

<Router>
  <Header />
  <div class="container">
    <nav>
      <ul>
        <li>
          <span> <Link to="/">INICIO</Link></span>
        </li>
        <li>
          <span> <Link to="/mapa">Mapa</Link></span>
        </li>
        <li>
          <span> <Link to="/paginacion">paginacion</Link></span>
        </li>
        <!-- <li>
          <span> <Link to="/nombre">mapas nombre</Link></span>
        </li> -->
        <li>
          <span> <Link to="/categoria">Categorias</Link></span>
        </li>
        <li>
          <span> <Link to="/rutas">Rutas</Link></span>
        </li>
        <li>
          <span> <Link to="/busqueda">paginados Nombres</Link></span>
        </li>
        <li>
          <span> <Link to="/bic">bic</Link></span>
        </li>
        <li>
          <span> <Link to="/catalogados">catalogados</Link></span>
        </li>
        <li>
          <span> <Link to="/busqueda/nombre">elementos nombre</Link></span>
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
      <Route path="/ficha/:id" component={FichaElemento} />
      <Route path="/busqueda" component={LocalizarNombresPaginados} />
      <Route path="/busqueda/nombre" component={MapaElementosNombreVarios} />

      <Route path="/categoria" component={ClasificaCategoria} />

      <Route path="/registro-elementos" component={Registro} />
    </main>
  </div>
</Router>

<style>
  nav {
    background-color: #FFF5E4;
    background:#C6EBC5;
    background:#D6E4E5;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.8px);
    -webkit-backdrop-filter: blur(6.8px);
    border: 1px solid  #FFF5E4;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 5px;
    align-content: center;
    list-style: none;
    color: white;
    font-size: 1.5rem;
 
  }

  :global(a) {
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 900;
    background: transparent;
    font-size: 4rem;
    font-weight: bold;
    margin-top: 0%;
    margin-left: 0%;
    text-align: center;
    text-shadow: 2px 2px 2px white;
    overflow: hidden;

    text-decoration: none;

    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    transition: font-size 0.2s;

    color:#497174;

    transition: font-size 0.2s;
    cursor: pointer;

    text-shadow: 1px 1px 2px white;

  }

  :global(a:hover) {
    transform: scale(1.1);
    color: #EB6440;
    font-size: 1.8rem;
  }

  main {
    width: 100%;

    background-color: transparent;
    display: flex;
    justify-content: center;
    margin: 5% 0;
    text-transform: capitalize;
  }
</style>
