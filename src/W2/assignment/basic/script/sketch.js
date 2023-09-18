function setup() {
  setCanvasContainer('p5-canvas', 1, 1, true);
  background('white');
}

function draw() {
  background(255);
  rectMode(CORNER);
  fill(255);
  colorMode(RGBA);
  //   stroke(0);
  //   strokeWeight(1);
  noStroke();

  //벽
  fill('#eb3782l');
  rect(0, 0, 1000);

  ///창문
  fill('#aa9999');
  rect(70, 20, 300, 400);

  ////풍경
  fill('#4c5a66');
  rect(80, 30, 280, 380);
  fill('#384254');

  rect(80, 80, 160, 330);
  rect(200, 160, 160, 250);
  fill('#262d35');
  rect(80, 80, 30, 330);
  fill('#262d35');
  rect(240, 160, 30, 250);

  //불빛
  fill('#e0d59b');
  rect(110, 120, 60, 20);
  rect(190, 170, 40, 20);
  rect(290, 220, 30, 20);
  rect(150, 300, 80, 20);
  rect(200, 100, 30, 20);

  noStroke();

  //책장
  fill('#cc8787');
  rect(500, 220, 700, 1000);
  fill('#cc6666');
  rect(525, 270, 1000, 700);
  fill('#cc9999');
  rect(525, 370, 1000, 15);
  rect(525, 370 + 1 * 115, 1000, 15);
  rect(525, 370 + 2 * 115, 1000, 15);
  rect(525, 370 + 3 * 115, 1000, 15);
  rect(525, 370 + 4 * 115, 1000, 15);

  //책상
  fill(255);
  ////위
  fill('#cc9999');
  rect(0, 670, 450, 25);
  ////다리
  fill('#8e6666');
  rect(90, 695, 25, 280);
  rect(410, 695, 25, 280);
}
