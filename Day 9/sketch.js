let angle = 0;
let hue = 0;
let x = 0;
let y = 0;
function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
}
function draw() {

  hue = map(mouseX, 0, width, 0, 360);
  background(hue, 100, 100);
  noStroke();

  translate(width / 2, height / 2);
  rotate(angle);
  angle += 0.01;
  
  for (let i = 0; i < 10; i++) {

    fill((hue + i * 36) % 360, 100, 100);

    x = sin(frameCount * (0.05 + i * 0.01)) * (100 + i * 10);
    y = cos(frameCount * (0.03 + i * 0.01)) * (100 + i * 10);

    rect(-150 + x, -200 + y, 200, 50);
    rect(0 + x, -150 + y, 50, 100);
    rect(-150 + x, -50 + y, 200, 50);
    rect(-150 + x, -0 + y, 50, 100);
    rect(-150 + x, 100 + y, 200, 50);
  }
}