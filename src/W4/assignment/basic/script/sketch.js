let pos;
let vel;
let acc;
let mv;

function setup() {
  let canvas;
  canvas = createCanvas(700, 700);
  let canvasParent;
  canvasParent = select('#mySketchGoesHere');
  canvas.parent(canvasParent);
  background('#F3EFFF');

  mv = createVector();

  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(0, 0);
}

function draw() {
  background('#F3EFFF');
  display();
  displayVectors();

  vel.add(acc);
  pos.add(vel);
  vel.limit(5);

  let mouse = createVector(mouseX, mouseY);
  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);

  mv.x = mouseX;
  mv.y = mouseY;

  let cacc = p5.Vector.sub(mouse, pos);
  cacc.setMag(0.1);
  acc = cacc;
}

function display() {
  noStroke();
  fill('red');
  ellipse(pos.x, pos.y, 60);
}

function displayVectors() {
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
}
