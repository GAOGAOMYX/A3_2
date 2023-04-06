let pos;
let target;
let size = 200;

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  
  pos = createVector(width/2, height/2);
  target = createVector(width/2, height/2);
}

function draw() {
  for (let i = 0; i < width; i += 50) {
    for (let j = 0; j < height; j += 50) {
      let c = color(map(i, 0, width, 0, 255), map(j, 0, height, 255, 0), 255);
      fill(c);
      noStroke();
      ellipse(i, j, 40, 40);
    }
  }
  
  strokeWeight(20);
  
  target.x = map(mouseX, 0, width, 100, 900);
  
  pos.lerp(target, 0.1);
  
  let d = dist(mouseX, mouseY, pos.x, pos.y);
  
  if (d < 200) {
    size += 10;
    size = constrain(size, 200, 400);
  } else {
    size -= 10;
    size = constrain(size, 200, 400);
  }
  
 let c1 = color(0,map(pos.x,width-100,width-900,height/2,width/2),map(pos.y,height-100,height-900,height/2,width/2));
 let c2 = color(255,map(pos.x,width-100,width-900,height/2,width/2),map(pos.y,height-100,height-900,height/2,width/2));
 let c = lerpColor(c1,c2,map(pos.x,width-100,width-900,height/2,width/2));
  
 stroke(c);
  
 beginShape();
 vertex(pos.x - size/2,pos.y - size/2);
 vertex(pos.x + size/2,pos.y - size/2);
 vertex(pos.x + size/2,pos.y);
 vertex(pos.x - size/2,pos.y);
 vertex(pos.x - size/2,pos.y + size/2);
 vertex(pos.x + size/2,pos.y + size/2);
 endShape();
}