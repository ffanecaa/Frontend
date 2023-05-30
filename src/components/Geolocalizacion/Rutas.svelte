<script>
    import L from "leaflet"
    import "leaflet-routing-machine";
    import {onMount} from "svelte"
  import { obterLocalizacion } from "../../lib/geolocation.mjs"
  import { getElements, getCathegory,getIcon} from "../../lib/fetchs.mjs"
  let localizacion








 let map 
 let coor={}
let lat 
let lng 



  onMount(() => {
    map = L.map("map").setView([42.812, -7.90005], 8);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);


    L.Routing.control({
  waypoints: [
    L.latLng(57.74, 11.94),
    L.latLng(57.6792, 11.949)
  ]
}).addTo(map);
  });


  obterLocalizacion().then( novaLocalizacion => localizacion = novaLocalizacion )

    
  



</script>


 <div id="map" style="height: 600px;width:800px"></div>