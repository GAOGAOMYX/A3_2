let hueValue = 0;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
}

function draw() {
  background(255);
  push();
  translate(width / 2, height / 2);
  rotate(frameCount / 20.0);
  translate(-width / 2, -height / 2);
  stroke(hueValue, 100, 100);
  strokeWeight(50);
  noFill();
  line(100, 100, 900, 100);
  line(900, 100, 900, 500);
  line(900, 500, 100, 500);

  line(100, 500, 100, 900);

  line(100, 900, 900, 900);

  beginShape();
    vertex(200,200);
    vertex(800,200);
    vertex(800,400);
    vertex(600,400);
    vertex(600,300);
    vertex(700,300); 
    vertex(700,300);
  endShape(); 

  hueValue +=1; 

  if (hueValue > 360) { hueValue =0; 
  } 
}
