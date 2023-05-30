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
    let customIcon = new L.Icon({
      iconUrl: "ico.png",
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });
    obterLocalizacion().then( novaLocalizacion => localizacion = novaLocalizacion )
    // L.marker(localizacion, { icon: customIcon })
          .addTo(map)
          .bindPopup("Localizado");
          


    L.Routing.control({
  waypoints: [
    L.latLng(lat,lng),
    L.latLng(47.0502, -8.300255)
  ]
}).addTo(map);
  });


 console.log(lat,lng)

    
  



</script>


 <div id="map" style="height: 600px;width:800px"></div>