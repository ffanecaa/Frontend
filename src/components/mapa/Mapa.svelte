<script>
	import L from 'leaflet'
	import 'leaflet/dist/leaflet.css'
	import {onMount} from 'svelte'
 

const accessToken = "lFES81l8YKINAgfZoKQDCgrjNAQPA1t36ObWQZFNsS8eFqzKfdtQSePWY5Z7a1Sk"

onMount(()=>{
	let latlng =  [-7.3984000, 40.7605200]
	// 3 IS ZOOM
let map = L.map("mymaps").setView([-8.5456900, 42.8805200],8)

	//mosaico mapa
	 L.tileLayer(`https://tile.jawg.io/{z}/{x}/{y}{r}.png?access-token=${accessToken}`,{
		maxZoom:22
	}).addTo(map)
	
    L.marker1([-8.5456900, 42.8805200]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();})
// 	// SET DEFAULT IF OPEN THE MAPS FIRST
// 	mycustomLayer["jawg-streets"].addTo(mymap)

// 	// ADD CONTROLL IN TOP RIGHT FOR SWITCH THEME MAPS
// 	L.control.layers(mycustomLayer).addTo(mymap)
	

// 	//  POSITION
// navigator.geolocation.getCurrentPosition(location=>{
// 	latlng = new L.latLng(location.coords.latitude,location.coords.longitude)
// 	// localizacion
// 	mymap.flyTo(latlng,15,{
// 		animate:true,
// 		duration:2

// 	})
// 	// Circulo
// 	L.circle(latlng,{radius:300}).addTo(mymap)

// 	//localizacion
// 	L.marker(latlng).addTo(mymap).bindPopup("aqui").openPopup()
// // creando marcas 
// let marker1 =  L.marker([42.88052, -8.54569]).addTo(mymap).bindPopup("catedral").openPopup();

// },



// // error
// error=>console.log(error),

// {enableHighAccuracy:true}
// )

// })



</script>

maps 
<div id="mymaps" style="height:500px;width:700px"></div>