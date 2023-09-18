let posX;
let posY;
let posXAdd = 3;
let posYAdd = 5;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  background(255);
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);
  // posX++;
  // posX = posX+1;
  // posX += 1;
  // posX, posY가 ellipse 보다 위에 있으면 저 원은 중앙에 있던 적이 단 한번 도 없을 것.
}

// 벡터란 : 어떤 방향으로(각도) 얼마나(길이) 갈 수 있냐. 물체의 이동을 기술하는 게 편해서 사용.
