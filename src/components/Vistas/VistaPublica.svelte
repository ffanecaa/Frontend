<script>

  
    import {  Link} from "svelte-routing";
  
 
   import Header from "../Header/Header.svelte"

  </script>



<div class="container">
    <Header/>

  <nav>
    <ul>
      <li>
       
					<span> <Link to="/">Home</Link></span>
		
       
      </li>
      <li>
      
					<span>   <Link to="/mapa">Mapa</Link></span>
			
      </li>
      <li>  
        <span>   <Link to="/paginacion">paginacion</Link></span>
 
        
      </li>
      <li>  
        <span>    <Link to="/nombre">mapas nombre </Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/lento">Categorias</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/rutass">Rutas</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/busqueda">paginados Nombres</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/bic">bic</Link></span>
    
      
      </li>
      <li>
        <span>     <Link to="/busqueda/nombre">elementos nombre</Link></span>
    
      
      </li>
    </ul>
   
  </nav>
</div>


<style>

    nav ul {
        list-style: none; 
      overflow: hidden; 
      position: relative;
    color:black ;
    
    
    }
    
        nav ul li {
            float: left;
         margin: 0 10px 0 0;
        background-color: whitesmoke;
          box-shadow: 3px 3px 10px rgb(129, 125, 125);
          border-radius: 5%;
          margin-left: 50px;
                display: block;
           width: 120px; 
           height: 40px;
            }
                nav ul li:nth-child(1)  {
                    /* background-color: #D3975B; */
                    background-position: 28px 28px;
            
                
                }
                nav ul li:nth-child(2)  {
                    /* background-color: #D3975B; */
                    background-position: 28px -96px;
        
                }
                nav ul li:nth-child(3)  {
                    /* background-color: #D3975B; */
                    background-position: 28px -222px;
            
                
                }
                nav ul li:nth-child(4)  {
                    /* background-color: #D3975B; */
                    background-position: 28px -342px;
                }
                nav ul li:nth-child(5)  {
                    /* background-color: #E6E7EB; */
                    background-position: 28px -462px;
                }
                nav ul li:nth-child(6)  {
                    /* background-color: #D3975B; */
                    background-position: 28px -582px;
                }
             span {
                        font: 1rem "Dosis", sans-serif; 
              text-transform: uppercase; 
           
        
                    }
                     :hover span {
                            display: block;
                        }
                    
    
              :global(a) {
          text-decoration: none;
          color:#c5455a8f;
          text-align: center;
          font-weight: bold;
      
        }		
      main{
      width: 100%;
     
      background-color:transparent;
      display: flex;
      justify-content: center;
      margin:5% 0;
      }
    </style>
    