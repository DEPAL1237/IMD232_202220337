let mover;
let gravity;
let mVec;
let pMVec;
let throwingForce;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  mover = new Mover(width / 2, height / 2, 100);
  gravity = createVector(0, 0.5);
  throwingForce = createVector();
  mVec = createVector();
  pMVec = createVector();

  background(255);
}

function draw() {
  background(255);
  let g = p5.Vector.mult(gravity, mover.mass);
  mover.applyForce(g);
  mover.update();
  mover.edgeBounce();
  mover.display();
}

function mouseMoved() {
  if (!isMouseInsideCanvas()) return;
  mover.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  mover.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  if (!isMouseInsideCanvas()) return;
  mover.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  if (!isMouseInsideCanvas()) return;
  mover.mouseReleased();

  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  throwingForce = p5.Vector.sub(mVec, pMVec);
  throwingForce.mult(40);

  mover.applyForce(throwingForce);
}
