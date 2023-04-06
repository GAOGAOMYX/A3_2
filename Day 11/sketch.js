let balls = [];

function setup() {
  createCanvas(1000,1000);
  
  for(let i=0;i<5;i++){
    balls.push(new Ball(random(width),random(height)));
  }
}

function draw() {
  background(0, 128, 0);
  
  for(let i=0;i<balls.length;i++){
    balls[i].show();
    balls[i].update();
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = random(-5, 5);
    this.yspeed = random(-5, 5);
    this.angle = 0;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(0, 0, 255); 
    ellipse(0, 0, 80, 80);
    fill(255);
    textSize(40);
    text("2", -10, +10);
    pop();
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    this.angle += this.xspeed / (2 * PI * (40 / 2));
    
    if (this.x > width - 50 || this.x <50) {
      this.xspeed = -this.xspeed;
      this.angle += PI;
    }
    if (this.y > height -50 || this.y <50) {
      this.yspeed = -this.yspeed;
      this.angle += PI;
    }
    
    for (let i = balls.length -1; i >=0; i--) {
      let d = dist(this.x,this.y ,balls[i].x ,balls[i].y)
      if(d <80 && d !=0){
        this.xspeed = -this.xspeed;
        balls[i].xspeed = -balls[i].xspeed;
        this.yspeed = -this.yspeed;
        balls[i].yspeed = -balls[i].yspeed;
      }
    }
  }
}
