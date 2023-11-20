class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = random(['rock', 'paper', 'scissors']);
    this.nextState = this.state;
    this.neighbors = [];
    this.RPSCARule = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper',
    };
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    const livingNeighbors = this.neighbors.filter(
      (eachNeighbor) => this.RPSCARule[eachNeighbor?.state] === this.state
    ).length;

    if (livingNeighbors <= 2) {
      this.nextState = this.state;
    } else {
      const livingNeighborsStates = this.neighbors.filter(
        (eachNeighbor) => this.RPSCARule[eachNeighbor?.state] === this.state
      );
      const randomIndex = Math.floor(
        Math.random() * livingNeighborsStates.length
      );
      this.nextState = livingNeighborsStates[randomIndex].state;
    }
  }

  update() {
    this.state = this.nextState;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    if (this.state === 'rock') {
      fill('red');
    } else if (this.state === 'scissors') {
      fill('blue');
    } else if (this.state === 'paper') {
      fill('green');
    }
    rect(0, 0, this.w, this.h);
    pop();
  }
}
