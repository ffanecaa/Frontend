<script>
let name 
let password
$:usuarios ={
    
    name: name,
    password:password
}
function manexadorEnvio(){
    fetch("http://localhost:8000/usuarios/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(usuarios)
    })
}

</script>


<div class="usuario">
  
    <h2>Registrate</h2>
    <fieldset>
    <label class="nome" for="nome">nome
        <input class="input__nome" id="nome" type="text" placeholder="introduce tu nombre"bind:value={name}>
    </label>
    <label class="pass">contrasinal
        <input class="input__pass"type="text" placeholder="introduce tu contrasinal" bind:value={password}>
    </label>
    
    <button on:click={manexadorEnvio}>envia</button>
</fieldset>
</div>



<style>

  
    .usuario{
        position: absolute;
    top:50%;
    left: 50%;
    height: 600px;
    transform: translate(-50%, -50%);
   width: 400px;
background: rgba(255, 255, 255, 0.31);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.8px);
-webkit-backdrop-filter: blur(6.8px);
border: 1px solid rgba(255, 255, 255, 0.21);
    
    }
  h2{
    position: absolute;
    top:0%;
    left: 50px;
     text-align: center;
    padding: 0 0 20px 0;
    border-bottom: 1px solid silver;
    height: 600px;

text-shadow: 1px 1px 1px black;}
 
fieldset{
   position: absolute;
   top:60px;
   width: 98%;
   height:500px ;
   background-color: transparent;
    box-sizing: border-box;
    border:none ;
   
  }
  input{
    width: 80%;
    padding:  0 5px;
    height: 40px;
    font-size: 16px;
    border:none;
    border-bottom: 3px solid #516007;
    background: none;
    outline:invert;
    color: #516007;
    font-size: 16px;
    padding: 5px;
 
}
.nome{
    position: absolute;
    top: 10%;
    left: 15px;}

.nome , .pass{
    color: #802525;
    font-size: 1.8rem;
    padding: 5px;
}

.pass{
    position: absolute;
    top: 50%;
    left: 15px;
    
}
button{
    position: absolute;
    top: 80%;
    left: 60%;
    padding: 10px;
    width: 20%;
    height: 8%;
    border:2px inset
}

</style>