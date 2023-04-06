let angle = 0;
let pg;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  

  pg = createGraphics(500, 500);
  pg.background(255);
  pg.fill(0);
  pg.textSize(375);
  pg.text("2", 50, 375);
}

function draw() {
  background(0);
  

  push();
  rotateZ(radians(0)); 
  rotateY(30); 
  rotateY(-angle); 
  texture(pg);
  noStroke();
  sphere(250);
  pop();
  

  push();
  rotateZ(radians(45));
  rotateY(angle);
  translate(375, 0, 0);
  fill(255, 0, 0);
  noStroke();
  sphere(125);
  pop();
  
  angle += 0.05;
}