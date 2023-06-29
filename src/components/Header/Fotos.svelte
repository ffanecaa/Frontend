<div class="slider-container">
    <div class="slider">
      <img src="antro.jpg" alt="c">
      <img src="aquis.JPG" alt="c">
      <img src="barona.jpg" alt="c">
      <img src="faro.jpg" alt="c">
      
      <img src="pesquera.jpg" alt="c">
  
    </div>
  </div>
  
  <style>
    .slider-container {
      width: 80%;
      height: 200px;
      overflow: hidden;
      margin: auto;
    }
  
    .slider {
      display: flex;
      animation: slide 20s 1 linear;
      gap:5px;
    }
  
    .slider img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  
  
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-300px * 3));
      }
    }
  </style>
  