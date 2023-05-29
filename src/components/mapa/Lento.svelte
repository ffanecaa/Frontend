<script>
    import { onMount } from "svelte";
    import L from "leaflet";
    import "../../../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css"
    import { MarkerClusterGroup } from 'leaflet.markercluster';
    import { store, storeIconos } from "../../lib/store.js";
    
    
    let map;

   let lat 
   let lng 
let zoom 

    const layerGroups = {};
  
    function createMarkerGroup(category) {
      const markerGroup = new MarkerClusterGroup();
      for (let element of $store[category]) {

        const contenido=`<h3>${element.name}</h3>
          <p>${element.description}</p>
          <a href="/mapa/${element.id}"> link</a>
        `
        const icon = L.icon({
          iconUrl: $storeIconos[category]
      
          })
        let marker = L.marker([element.latitude, element.longitude],{icon: icon}).bindPopup(contenido);
        markerGroup.addLayer(marker);
      }
      return markerGroup;
    }
    
    function createLayerGroups() {
      for (let category in $store) {
        const markerGroup = createMarkerGroup(category);  // llamo funcion con parametro categoria y recoge clcuster
        layerGroups[category] = L.layerGroup(); // genero las categorias
        layerGroups[category].addLayer(markerGroup); // añado los grupos a la capa
      }
    }
  
    onMount(() => {
      // Creamos un mapa de Leaflet
      map = L.map('mymap').setView([ 42.88805200, -8.0456900], 14);
//       L.tileLayer.wms("https://www.ign.es/wms-inspire/ign-base?", {
//     layers: 'IGNBaseTodo',
//     format: 'image/png',
//     transparent: true,
//     attribution: "ing"
// }).addTo(map);
  

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//       })


//  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 17,
// 	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// }).addTo(map)


  // muy lento---------------------------------------------------------------------------------
  // L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
	//    layers: "OI.OrthoimageCoverage",//nombre de la capa (ver get capabilities)
	//    format: 'image/jpeg',
	//    transparent: true,
	//    version: '1.3.0',//wms version (ver get capabilities)
	//    attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
	// }).addTo(map);


  ///  catastro --------------------------------------------------------

  // L.tileLayer.wms("http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?", {
	//    layers: "Catastro",//nombre de la capa (ver get capabilities)
	//    format: 'image/jpeg',
	//    transparent: true,
	//    version: '1.1.1',//wms version (ver get capabilities)
	//    attribution: "DIRECCION GENERAL DEL CATASTRO"
	// }).addTo(map);
//-----------------------verde
// L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",{
//         attribution: "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
//     })
    // mapa negro simple 
    
    // L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",{
    //     attribution: "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
    // })


    /////dibujo malo--------------------------------------
    // L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",{
    //     attribution: "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA."
    // }).addTo(map)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://1938.com.es/">Web Inteligencia Artificial</a>'
    }).addTo(map)





      createLayerGroups(); // llamo a  la funcion q llama a la funcion
  
      // Agregamos todas las capas a un controlador de capas
      let control = L.control.layers({}, layerGroups, {
        position: 'topright',
        collapsed: true,
        autoZIndex:true
     
      }).addTo(map);
    });

   
  </script>
  
  <div id="mymap" style="height: 600px;width:900px" ></div>

