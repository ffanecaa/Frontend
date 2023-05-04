<div style='opacity: 1;' id='imageHover'>
    <div class="image-hover-container">
        <div class='container'>
            <div class='middle'>
                <div class='bg-image lake-district'></div>
                <a href='https://www.patrimoniocultural.com'  target="_blank" class='overlay'>
                    <p>mapas de galicia</p>
                  
                   
                </a>
            </div>
            <div class='bottom-right'>
                <div class='bg-image lake-district'></div>
            </div>
            <div class='bottom-left'>
                <div class='bg-image lake-district'><a href="http://www.google.com">linl</a></div>
            </div>
            
            <div class='top-left'>
                <div class='bg-image lake-district'></div>
            </div>
            <div class='top-right'>
                <div class='bg-image lake-district'></div>
            </div>
        </div>
    </div>
   
    </div>


    <style>@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300&family=Open+Sans&family=Roboto:wght@300&display=swap");
        .image-hover-container {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          background-image: linear-gradient(rgba(128, 128, 128, 0.773),hsla(60, 10%, 23%, 0.559));
        }
        .image-hover-container .container {
          position: relative;
          height: 630px;
          width: 510px;
          margin: auto;
          display: flex;
        }
         /*EFECTO HOVER*/
        .image-hover-container .container:hover > .middle {
          height: 90%;
          left: 5%;
          top: 5%;
          width: 90%;
          box-shadow: 0px 23px 33px rgba(0, 0, 0, 0.34);
        }
        .image-hover-container .container:hover > .middle .overlay {
          opacity: 1;  /*opacidade texto*/
          z-index: 1;
        }
        .image-hover-container .container:hover > .bottom-right { 
            top: 70%;
            left: 80%;
            box-shadow: 0px 37px 29px rgba(0, 0, 0, 0.3);
            width: 650px;
          }
        .image-hover-container .container:hover > .top-left {
          left: -70px;
          top: -90px;
          width: 150px;
          box-shadow: 0px 37px 29px rgba(0, 0, 0, 0.3);
        }
        .image-hover-container .container:hover > .top-right {
          left: 250px;
          top: -90px;
          width: 260px;
          height: 280px;
          box-shadow: 0px 37px 29px rgba(0, 0, 0, 0.3);
        }
        .image-hover-container .container:hover > .bottom-left {
          left: -49%;
          top: 75%;
          width: 360px;
          box-shadow: 0px 37px 29px rgba(0, 0, 0, 0.3);
        }
        /* FIN EFECTO HOVER*/
        .image-hover-container .container .lake-district {
          background-image: url(../../../public/petro.jpg);
          background-repeat:no-repeat  ;
          background-size: cover;
        }
        .image-hover-container .container .bg-image {
          background-size: cover;
          background-attachment: fixed;
          background-position: 10% 10%;
        }
         .middle {
          transition: 500ms all;
          transition-delay: 0.25s;
          transition-timing-function: cubic-bezier(0.17, 0.67, 0.33, 0.97);
          position: relative;
          margin: auto;
          height: 100%;
          width: 100%;
          margin: 0px;
          left: 0;
          top: 0;
        
        }
        .image-hover-container .container .middle .bg-image {
          height: 100%;
          width: 100%;
        /* que ocupe el 100% del contenedor  middle*/
        }
        .image-hover-container .container .middle .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 9;
          background: rgba(67, 27, 12, 0.75);
          display: flex;
          flex-direction: column;
          transition: 300ms all;
          transition-delay: 0.37s;
          opacity: 0;
          text-decoration: none;
          z-index: -1;
        }
         p {
         
          color: #fff;
          text-transform: uppercase;
          font-family: "Roboto", sans-serif;
          font-size: 1.1em;
          opacity: 0.8;
          /* text-align: center; */
         margin:50% auto;
        }
        
        
        
        .image-hover-container .container .bottom-right {
          transition: 800ms all;
          transition-delay: 0.15s;
          transition-timing-function: cubic-bezier(0.17, 0.67, 0.33, 0.97);
          position: absolute;
          left: 0%;
          top: 48%;
          width: 100%;
          box-shadow: 0px 37px 29px rgba(0, 0, 0, 0);
          z-index: 1;
        }
        /* indicamos que ocupa la imaGen dentro del contener*/
        .top-right .bg-image {
         
            height: 100%;
            width: 100%;
          } 
         .bottom-right .bg-image,
         .bottom-left .bg-image,
         .top-left .bg-image {
          height: 220px;
          width: 100%;
        }
        
        /*TRANSICIONES*/
        .image-hover-container .container .bottom-left {
          transition: 800ms all;
          transition-delay: 0.17s;
          transition-timing-function: cubic-bezier(0.17, 0.67, 0.33, 0.97);
          position: absolute;
          left: 0%;
          top: 48%;
          width: 100%;
          z-index: 1;
        }
        
        .image-hover-container .container .top-left {
            /*desde donde viene el contendor imagen top*/
          transition-timing-function: cubic-bezier(0.17, 0.67, 0.33, 0.97);
          transition: 600ms all;
          transition-delay: 0.19s;
          position: absolute;
          left: 0%;
          top: 0%;
          width: 150px;
          z-index: 1;
        }
        
        .image-hover-container .container .top-right {
          transition: 500ms all;
          transition-delay: 0.08s;
          position: absolute;
          left: 0%;
          top: 0%;
          width: 300px;
          height: 260px;
          z-index: 1;
          transition-timing-function: cubic-bezier(0.17, 0.67, 0.33, 0.97);
        }
        
       
         @media (max-width: 350px) {
        .bottom-right,
        .bottom-left,
        .top-left,
        .top-right {
            display: none ;
          }
          .image-hover-container {
            transform: scale(0.8) translateX(0px);
            overflow: hidden;
          }
        } 
         
        @media (max-width: 920px){
        
        .image-hover-container .container {
         
          height: 330px;
          width: 210px;
         
        }
         /*EFECTO HOVER*/
        .image-hover-container .container:hover > .middle {
          height: 90%;
          left: 5%;
          top: 5%;
          width: 90%;
         
        }
        
        .image-hover-container .container:hover > .bottom-right { 
            top: 70%;
            left: 80%;
            width: 150px;
          }
        .image-hover-container .container:hover > .top-left {
          left: -70px;
          top: -90px;
          width: 120px;
          
        }
        .image-hover-container .container:hover > .top-right {
          left: 180px;
          top: -90px;
          width: 130px;
          height: 240px;
         
        }
        .image-hover-container .container:hover > .bottom-left {
          left: -49%;
          top: 75%;
          width: 160px;
         
        }
        }</style>

        <script>
           const hoverImagesContainer = document.getElementById('imageHover');
	


    window.addEventListener("load",()=>{
  
	hoverImagesContainer.style.opacity = '1';
    }) 
        </script>