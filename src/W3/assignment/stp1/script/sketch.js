let pos;
let vel;
let acc;
let rad = 30;

function setup() {
  let canvas;
  canvas = createCanvas(700, 700);
  let canvasParent;
  canvasParent = select('#mySketchGoesHere');
  canvas.parent(canvasParent);
  background('255');

  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
}

function draw() {
  background('255');
  update();
  InfiniteEdges();
  display();
  displayVectors();

  let mouse = createVector(mouseX, mouseY);

  strokeWeight(2);
  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);
}

function update() {
  acc = p5.Vector.random2D();
  vel.add(acc);
  pos.add(vel);

  vel.limit(5);
}

function InfiniteEdges() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}

function display() {
  noStroke();
  fill('green');
  ellipse(pos.x, pos.y, 2 * rad);
}

function displayVectors() {
  stroke('red');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);

  stroke('blue');
  line(pos.x, pos.y, pos.x + acc.x * 100, pos.y + acc.y * 100);
}
