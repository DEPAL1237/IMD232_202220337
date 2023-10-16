class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** (1 / 2) * 4;
    this.isHover = false;
    this.isDragging = false;
    this.draggingOffset = createVector(0, 0);
  }

  applyForce(force) {
    let g = force;
    if (!this.isDragging) {
      let forceDividedByMass = p5.Vector.div(g, this.mass);
      this.acc.add(forceDividedByMass);
    }
  }

  update() {
    if (this.isDragging) return;
    this.vel.mult(0.98);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    strokeWeight(3);
    stroke(0);
    if (this.isDragging) {
      fill('blue');
    } else if (this.isHover) {
      fill('green');
    } else {
      fill('#00FF75');
    }
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  edgeBounce() {
    const bounce = -0.7;
    if (this.pos.x < 0 + this.rad) {
      this.pos.x = this.rad;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.rad) {
      this.pos.x = width - 1 - this.rad;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.rad) {
      this.pos.y = height - 1 - this.rad;
      this.vel.y *= bounce;
    }
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (!this.isHover) return;
    this.isDragging = true;
    this.draggingOffset.x = this.pos.x - mX;
    this.draggingOffset.y = this.pos.y - mY;
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.x = mX + this.draggingOffset.x;
      this.pos.y = mY + this.draggingOffset.y;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
