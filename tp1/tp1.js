///tp1
///sabrina quiñonez
///comision 5
///https://youtu.be/BcjI1Jqgjgo?si=m6JIJ7ZmeWwEh8EL



let circulos;
let colores = [
  [37, 81, 80],
  [34, 51, 79],
  [32, 29, 74],
  [46, 34, 78],
  [67, 38, 47],
  [103, 32, 32],
  [150, 26, 0],
  [170, 33, 0],
  [206, 83, 0],
  [216, 150, 0],
  [221, 199, 0],
  [137, 184, 2],
  [74, 135, 65],
  [49, 106, 91]
];

let cambio;
let diametro;

function preload() {
  circulos = loadImage('data/circulos.jpg');
}

function setup() {
  createCanvas(800, 400);
  circulos.resize(400, 400);
  cambio = 0;
  diametro = 380;
}

function draw() {
  background(220, 216, 211);
  image(circulos, 0, 0);

  let x = width / 2 + width / 4;
  let y = height / 2;
  let d = diametro;

  for (let i = 13; i >= 0; i--) {
    let index = abs(i - 13 + cambio) % 14;
    let [r, g, b] = colores[index];

    fill(r, g, b);
    noStroke();
    ellipse(x, y, d, d);

    d -= 27;
  }

  fill(0);
  circle(width / 2, height * 0.82, 70);
  fill(202, 216, 211);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Reiniciar", width / 2, height * 0.82);
}

function mouseWheel(event) {
  let e = event.delta / 10; 
  diametro = constrain(diametro + 4 * e, 80, 400);
}

function keyPressed() {
  if (key >= '0' && key <= '9') {
    cambio += 1;
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, width / 2, height * 0.82);
  if (d < 70) {
    cambio = 0;
    diametro = 380;
  }
}
