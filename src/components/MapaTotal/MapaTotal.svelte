<script>
    import L from 'leaflet';
    import { MarkerClusterGroup } from 'leaflet.markercluster';

    import { onMount } from 'svelte'
  
    let map;
    let elementos = [];
    let markers= new MarkerClusterGroup()
    function manexadorTrae(){
      fetch("http://localhost:8000/elements/")
        .then(res => res.json())
        .then(response => {
          elementos = response;
          // for dentro pq es lo q queremos q realice el manexador coja y disponga
          for (let elemento of elementos) {
          let marker =  L.marker(
              [elemento.latitude, elemento.longuitude]
            ).bindPopup(elemento.name)
            markers.addLayer(marker)
          } map.addLayer(markers)
    })
        }
    
  

  
    onMount(() => {
      map = L.map("mymap").setView([42.812000, -7.90005], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);
  
      // Agregar cada marcador al mapa
   
// no pq es dentro de la funcion manexador pq trae los datos y los dispara en el mapa
    //   for(let i =0; i >elementos.length; i++){

    //     L.marker([latitude,longuitude]).addTo(map)
    //   }
    });
  
  </script>
  <h1>mapa puntos</h1>
  
  <div id="mymap" style="height: 600px;"></div>
  <!-- convendria fuera funcion load dispare cargue pagina mirar evento -->
  <button on:click={manexadorTrae}>Cargar localizaciones</button>
  
  <style>
    
  </style>