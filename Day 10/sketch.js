let particles = [];

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  
  let alpha = map(sin(frameCount * 0.1), -1, 1, 0, 255);
  stroke(255, alpha);
  strokeWeight(10);
  noFill();
  beginShape();
  vertex(250, 250);
  vertex(750, 250);
  vertex(750, 500);
  vertex(250, 500);
  vertex(250, 750);
  vertex(750, 750);
  endShape();

  for (let i = particles.length -1; i >=0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i,1);
    }
  }
  
  if (frameCount % 5 ==0) {
    particles.push(new Particle());
  }
}

class Particle {
  
  constructor() {
    this.x = random(width/2-125,width/2+125);
    this.y = height;
    this.vx = random(-2.5,2.5);
    this.vy = random(-12.5,-2.5);
    this.alpha = 255;
    this.size = random(25,75);
    this.c = color(random(255),random(100),random(100));
  }
  
  finished() {
    return this.alpha <0;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -=5;
    this.size -=0.25;
    this.c.setAlpha(this.alpha);
    
    if (this.y < height/2) {
      this.vy = -this.vy;
      this.vx = -this.vx;
    }
    
    if (this.x < width/2-125 || this.x > width/2+125) {
      this.vx = -this.vx;
    }
    
    if (this.y > height) {
      this.vy = -this.vy;
      this.vx = -this.vx;
    }
    
    if (this.size <0) {
      this.size =0;
    }
    
  }
  
   show() {
    noStroke();
    fill(this.c);
    ellipse(this.x,this.y,this.size,this.size);
    
  }
}