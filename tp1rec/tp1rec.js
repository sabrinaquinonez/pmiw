let circulos;
let colores= []
  

let cambio;
let diametro;

function crearCirculo(x,  y,  diametro,  r,  v,  a) {
  noStroke();
  fill(r, v, a);

  ellipse(x, y, diametro, diametro);
}

function preload() {
  circulos = loadImage("data/circulos.jpg");
}

function  setup() {
createCanvas(800,400)
  circulos.resize(400, 400);
  cambio=0;
  diametro=380;
  colores =[color(37, 81, 80),
  color(34, 51, 79),
  color(32, 29, 74),
  color(46, 34, 78),
  color(67, 38, 47),
  color(103, 32, 32),
  color(150, 26, 0),
  color(170, 33, 0),
  color(206, 83, 0),
  color(216, 150, 0),
  color(221, 199, 0),
  color(137, 184, 2),
  color(74, 135, 65),
  color(49, 106, 91)]
}

function draw() {
  background(220, 216, 211);
  image(circulos, 0, 0);



  let d=diametro;
  for (let i = 13; i >= 0; i--) {
    let r =  red(colores [abs(i-13+cambio)%14]);
    let v =  green(colores [abs(i-13+cambio)%14]);
    let a =  blue(colores[abs(i-13+cambio)%14]);


    crearCirculo(width/2 + width/4, height/2, d+i, r, v, a );
    d= d-27;
  }
  push();
  fill(0);
  rect(width/2, height * 0.82, 70, 30);
  fill(202, 216, 211);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Reiniciar", width/2+34, height * 0.859 );
  pop();
}

function mouseWheel(event) {
  let e = event.delta;
  if (diametro >=400) {
    diametro=400;
  }
  if (diametro<=80) {
    diametro=80;
  }
  diametro=diametro+0.05*e;
}
function keyPressed() {
  if (key >= '0' && key <= '9') {
    cambio=cambio+1;
  }
}
function mouseClicked() {
  if (detectarBoton(width/2, height * 0.82, 70, 30)) {
    // alpha = 0;
    cambio = 0;
    diametro = 380;
  }
}

function  detectarBoton (x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY >  y && mouseY < y + alto;
}
