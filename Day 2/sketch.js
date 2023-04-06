var shuye1
var shuye2
var shuye3
var shuye4 
var shuye5 
var shuye6
var shuye7
var shuye8
var shuye9
var shuye10 
var shuye11
var shuye12
var shuye13 
var shuye14
var shuye15
var shuye16
var shuye17
var shuye18
var shuye19

let shuyes = [];

function setup() {
  createCanvas(1000, 1000);
  background(220);
  shuye1 = new Shuye(100, 100);
  shuye2 = new Shuye(200, 100);
  shuye3 = new Shuye(300, 100);
  shuye4 = new Shuye(400, 100);
  shuye5 = new Shuye(500, 100);
  shuye6 = new Shuye(500, 200);
  shuye7 = new Shuye(500, 300);
  shuye8 = new Shuye(500, 400);
  shuye9 = new Shuye(100, 400);
  shuye10 = new Shuye(200, 400);
  shuye11 = new Shuye(300, 400);
  shuye12 = new Shuye(400, 400);
  shuye13 = new Shuye(100, 500);
  shuye14 = new Shuye(100, 600);
  shuye15 = new Shuye(100, 700);
  shuye16 = new Shuye(200, 700);
  shuye17 = new Shuye(300, 700);
  shuye18 = new Shuye(400, 700);
  shuye19 = new Shuye(500, 700);
}

function draw() {
  background(220);
  blendMode(DARKEST);
  shuye1.display();
  shuye2.display();
  shuye3.display();
  shuye4.display();
  shuye5.display();
  shuye6.display();
  shuye7.display();
  shuye8.display();
  shuye9.display();
  shuye10.display();
  shuye11.display();
  shuye12.display();
  shuye13.display();
  shuye14.display();
  shuye15.display();
  shuye16.display();
  shuye17.display();
  shuye18.display();
  shuye19.display();
}

function mouseMoved() {
  shuye1.zhuan();
  shuye2.zhuan();
  shuye3.zhuan();
  shuye4.zhuan();
  shuye5.zhuan();
  shuye6.zhuan();
  shuye7.zhuan();
  shuye8.zhuan();
  shuye9.zhuan();
  shuye10.zhuan();
  shuye11.zhuan();
  shuye12.zhuan();
  shuye13.zhuan();
  shuye14.zhuan();
  shuye15.zhuan();
  shuye16.zhuan();
  shuye17.zhuan();
  shuye18.zhuan();
  shuye19.zhuan();
}

class Shuye {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 1;
  }

  display() {
    stroke(0);
    strokeWeight(0.05);
    fill(0, 255, 0);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-10, -30);
    curveVertex(-20, -60);
    curveVertex(0, -50);
    curveVertex(20, -60);
    curveVertex(10, -30);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();
    pop();
  }
  zhuan() {
    this.angle = this.angle + 0.05;
    this.x = this.x + 0.1
    this.y = this.y + 0.05
}

}

