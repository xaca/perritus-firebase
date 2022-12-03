//https://codepen.io/rainner/pen/JJXOmQ
let imagen;
let pagina;
let colores = ["#D91438","#BF046B","#F2059F","#00CCC0","#72F2EB"];
window.onload = init;

function init(){
  pagina = document.querySelector("#home");
  imagen = document.getElementById("imagen");
  cargarPerrito();
  pagina.addEventListener("click", e => {
    hearts.push(new Heart());
    cambiarColor();
    document.dispatchEvent(
      new CustomEvent("actualizar_valor", {
          bubles: true,
          detail: {
              data: ""
          }
      }));
  
  });
}

function cargarPerrito(){
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => actualizarImagen(data));
}

function actualizarImagen(data){
  imagen.style.backgroundImage=`url(${data.message})`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cambiarColor(){
  pagina.style.backgroundColor = colores[random(0,colores.length)];
}

// heart class 
class Heart {

  constructor(x, y, color) {
    this.x = parseFloat(x || window.innerWidth / 2);
    this.y = parseFloat(y || window.innerHeight - 30);
    this.color = color || Math.floor(Math.random() * 360);
    this.phase = Math.random() * 360;
    this.radius = Math.random() * 1;
    this.speed = 2 + Math.random() * 2;
    this.scale = 0.3 + Math.random() * 0.8;
    this.grow = 0.01;
    this.alpha = 1;
    this.done = false;

    this.outer = document.createElement("div");
    this.outer.className = "heart-outer";

    this.inner = document.createElement("div");
    this.inner.className = "heart-inner";
    this.inner.style.backgroundColor = "hsl( " + this.color + ", 50%, 50% )";

    this.outer.appendChild(this.inner);
    document.body.appendChild(this.outer);
    this.draw();
  }

  flush() {
    if (document.body.contains(this.outer)) {
      document.body.removeChild(this.outer);
    }
    this.outer = null;
    this.inner = null;
  }

  draw() {
    if (this.done) return;
    this.outer.style.transform = "translateX( " + this.x + "px ) translateY( " + this.y + "px ) translateZ( 0 ) scale( " + this.grow + " )";
    this.outer.style.opacity = this.alpha;
  }

  update() {
    this.alpha = this.alpha > 0 ? this.alpha - 0.0015 : this.alpha;
    this.alpha = this.alpha < 0 ? 0 : this.alpha;

    this.x += Math.cos(this.phase / 50) * this.radius;
    this.y -= this.speed;

    this.grow += (this.scale - this.grow) / 10;
    this.phase += 1;

    this.done = this.y < -400 || this.alpha <= 0 ? true : false;
  }}


// hearts list
let hearts = [];

// add on click 
/*window.addEventListener("click", e => {
  hearts.push(new Heart());
  cambiarColor();
});*/

// auto add on interval 
/*setInterval(() => {
  hearts.push(new Heart());
}, 1000);*/

// main loop 
function loop() {
  requestAnimationFrame(loop);
  let i;

  // cleanup 
  for (i = 0; i < hearts.length; ++i) {
    if (hearts[i].done) {
      hearts[i].flush();
      hearts.splice(i, 1);
    }
  }
  // animate 
  for (i = 0; i < hearts.length; ++i) {
    hearts[i].update();
    hearts[i].draw();
  }
}

loop();