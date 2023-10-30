let dom;
//funtion 안에서 하면, 해당 funtion 안에서만 사용할 수 있는 변수가 된다. 그래서 밖으로 빼줌.
//모든 펑션에서 참조할 수 있는 변수를 만들기 위허서는 바깥에서 해줄 필요가 있다.
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  dom = select('#hereGoesMyP5Sketch');

  //쿼리 셀렉터와 올의 차이. )) 쿼리셀렉터는 상명대 학생이라는 쿼리셀럭터를 돌리면 하나만 찾고 띡. 올 같은 경우에는 일단 거기에 부합하는 거 있으면 한 번에 다 줌.
  //   console.log('p5 selset', dom);
  //   console.log('queryselector', dom.width);

  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  //   console.log('queryselector', htmlDom);
  //   console.log('queryselector', htmlDom.clientWidth);
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(dom);
  background('black');
  //   div에 그림 넣듯 p5.sketch를 넣을 수 있다는 것.
  // 클 때는 ㄱㅊ은데 작아질때 스크롤이 발생. 그것을 고쳐볼깝쇼
}

function draw() {}

function windowResized() {
  //   dom = select('#hereGoesMyP5Sketch');
  //   console.log('queryselector', htmlDom);
  //   console.log('queryselector', htmlDom.clientWidth);
  if (htmlDom.clientWidth < canvasW) {
    console.log('리사이즈됩니다');
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    console.log('리사이즈됩니다');
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
