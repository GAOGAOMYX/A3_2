let rectangles = [];

function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() { 
  for (let i = 0; i < rectangles.length; i++) {
    let rectData = rectangles[i];
    fill(rectData.color);
    rect(rectData.x, rectData.y, rectData.width, rectData.height);
  }
}

function keyPressed() {
  if (key === 'u' && rectangles.length > 0) {
    rectangles.pop();
    background(255);
  }
}

function mousePressed() {
  let rectData = {
    x: mouseX,
    y: mouseY,
    width: random(100, 150),
    height: random(100, 150),
    color: color(random(255), random(255), random(255))
  };
  rectangles.push(rectData);
  fill(rectData.color);
  rect(rectData.x, rectData.y, rectData.width, rectData.height);
}