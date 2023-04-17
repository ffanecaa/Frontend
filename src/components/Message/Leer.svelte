

<h2> elementos</h2>

<button on:click = {manexadorTrae}>traer</button> 

<ul>
    {#each elementos as {name,description,latitude,longuitude}}
     <li> {name} {description} {latitude} {longuitude} </li>
      {/each}
    </ul>

<script>



let name
let description 
let longuitude
let latitude
let elementos=[]
let element ={
  name:name,
  description:description,
  latitude:latitude,
  longuitude:longuitude
}


function manexadorTrae () { fetch("http://localhost:8000/users")
.then(res=>res.json()) 
    .then(response =>{
        elementos=response
    })
   }
</script>