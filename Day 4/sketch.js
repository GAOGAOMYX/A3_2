let x = [];
let y = [];
let num = 20;
let easing = 0.05;

function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < num; i++) {
    x[i] = 0;
    y[i] = 0;
  }
}

function draw() {
  background(0);
  
  let targetX = mouseX;
  let targetY = mouseY;
  
  for (let i = num - 1; i >= 1; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }
  
  x[0] += (targetX - x[0]) * easing;
  y[0] += (targetY - y[0]) * easing;
  
  for (let i = 0; i < num; i++) {
    fill(255 - i * (255 / num),0,i * (255 / num));
    strokeWeight(4);
    textSize(500);
    text('2', x[i], y[i]);
  }
}