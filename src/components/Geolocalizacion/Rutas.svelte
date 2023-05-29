<script>
    import L from "leaflet"
    import {onMount} from "svelte"
  import { obterLocalizacion } from "../../lib/geolocation.mjs"
  import { getElements, getCathegory,getIcon} from "../../lib/fetchs.mjs"








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
  });


    obterLocalizacion()
 console.log(obterLocalizacion);
    
  



</script>


 <div id="map" style="height: 600px;width:800px"></div>