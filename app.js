const tarjeta = document.querySelector(`.tarjeta`);
const contenedor = document.querySelector(`.contenedor`);

// Items
const titulo = document.querySelector(`.titulo`);
const producto = document.querySelector(`.producto img`);
const comprar = document.querySelector(`.comprar button`);
const descripcion = document.querySelector(`.info h3`);
const tamanos = document.querySelector(`.tamanos`);

//Evento movimiento de animacion
contenedor.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  tarjeta.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animacion empieza
contenedor.addEventListener("mouseenter", (e) => {
  tarjeta.style.transition = "none";

  titulo.style.transform = "translateZ(150px)";
  producto.style.transform = "translateZ(200px) rotateZ(45deg)";
  descripcion.style.transform = "translateZ(125px)";
  tamanos.style.transform = "translateZ(100px)";
  comprar.style.transform = "translateZ(75px)";
});

// Animacion salida
contenedor.addEventListener("mouseleave", (e) => {
  tarjeta.style.transition = "transition: all 0.5s ease";
  tarjeta.style.transform = `rotateY(0deg) rotateX(0deg)`;

  titulo.style.transform = "translateZ(0px)";
  producto.style.transform = "translateZ(0px) rotateZ(0deg)";
  descripcion.style.transform = "translateZ(0px)";
  tamanos.style.transform = "translateZ(0px)";
  comprar.style.transform = "translateZ(0px)";
});
