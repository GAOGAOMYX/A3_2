let x = 0;
let y = 0;
let spacing = 20;

function setup() {
  createCanvas(1000, 1000);
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(10);
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
  
  // Draw the shape of the number 2
  noFill();
  stroke(0);
  strokeWeight(100);
  beginShape();
  vertex(250, 250);
  vertex(750, 250);
  vertex(750, 500);
  vertex(250, 500);
  vertex(250, 750);
  vertex(750, 750);
  endShape();
}