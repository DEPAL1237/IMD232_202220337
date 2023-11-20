let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cam = createCapture(VIDEO);
  cam.hide();
  console.log(cam);
  // noLoop();
}

function draw() {
  background('white');
  image(cam, 0, 0, width, (cam.height / cam.width) * width);
  loadPixel();
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; y < cam.width; x++) {
      const idx = cam.width * y + x;
      const color = cam.pixels[idx];
      const brightness = brightness(color);
      ellipse(x, y, (brightness / 255) * 20);
    }
  }
  updatePixels();
}
