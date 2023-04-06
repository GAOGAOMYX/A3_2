let img;

function preload() {
  img = createGraphics(100, 100);
  img.background(255);
  img.textSize(64);
  img.text('2', 10, 70);
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(200);
  let size = map(sin(frameCount * 0.05), -1, 1, 0.5, 2);
  scale(size);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  for (let x = -50; x <= 50; x += 25) {
    for (let y = -50; y <= 50; y += 25) {
      for (let z = -50; z <= 50; z += 25) {
        push();
        translate(x, y, z);
        texture(img);
        box(20);
        pop();
      }
    }
  }
}