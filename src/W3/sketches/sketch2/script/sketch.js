let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  update();
  infiniteEdge();
  ellipse(pos.x, pos.y, 2 * radius);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.x = height;
  } else if (pos.y > height) {
    pos.x = 0;
  }
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(random(5));
  vel.add(acc);
  pos.add(vel);
}

// 벡터란 : 어떤 방향으로(각도) 얼마나(길이) 갈 수 있냐. 물체의 이동을 기술하는 게 편해서 사용.

// 코드 백업
// let pos;
// let vel;
// let radius = 25;

// function setup() {
//   setCanvasContainer('mySketchGoesHere', 3, 2, true);
//   background(255);
//   pos = createVector(width / 2, height / 2);
//   vel = createVector(5, 2);
//   console.log(pos);
//   console.log(vel);
//   ellipse(pos.x, pos.y, 50);
// }

// function draw() {
//   background(255);
//   pos.add(vel);
//   // if (pos.x < 0) {
//   //   vel.x *= -1;
//   // } else if (pos.x > width) {
//   //   vel.x *= -1;
//   // }
//   if (pos.x - radius < 0 || pos.x + radius > width) {
//     vel.x *= -1;
//   }
//   if (pos.y - radius < 0 || pos.y + radius > height) {
//     vel.y *= -1;
//   }
//   ellipse(pos.x, pos.y, 2 * radius);
// }

//과제 힌트
// 원이 마우스로 향하는 벡터가 있을 것. 원리 마우스로 향하는 벡터
// 벡터 섭트렉션(?). 벡터간의 뺴기 연상. 화면 중아에서 마우스로 향하는 벡터를 구할 수 있다.
