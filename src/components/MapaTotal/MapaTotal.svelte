<script>
    import L from 'leaflet';
    import { onMount } from 'svelte'
  
    let map;
    let longuitude
    let latitude
    let elementos = [
        {longuitude:longuitude,
        latitude:latitude}
    ];
  
    function manexadorTrae(){
      fetch("http://localhost:8000/elements/")
        .then(res => res.json())
        .then(response => {
          elementos = response;
          for (let i = 0; i < elementos.length; i++) {
  let elemento = elementos[i];
  let latitude = elemento.latitude;
  let longuitude = elemento.longuitude;
  L.marker([latitude, longuitude]).addTo(map);
}
    })
        }
    
  
    
  
    onMount(() => {
      map = L.map("mymap").setView([42.812000, -7.90005], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);
  
      // Agregar cada marcador al mapa
   

    //   for(let i =0; i >elementos.length; i++){

    //     L.marker([latitude,longuitude]).addTo(map)
    //   }
    });
  
  </script>
  
  <div id="mymap" style="height: 500px;"></div>
  
  <button on:click={manexadorTrae}>Cargar localizaciones</button>
  