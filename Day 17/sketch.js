let angle = 0;
let speed = 0.05;

function setup() {
  createCanvas(1000, 1000);
  textSize(5000);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  let r = map(sin(angle), -1, 1, 200, 200);
  let x = r * cos(angle);
  let y = r * sin(angle);


  noStroke();
  fill(255);
  text("2", x, y);


  for (let i = 0; i < 10; i++) {
    let randX = x + random(-200, 200);
    let randY = y + random(-200, 200);
    fill(random(255), random(255), random(255), 100);
    ellipse(randX, randY, 20, 20);
  }


  for (let i = 0; i < 10; i++) {
    let startX = x + random(-200, 200);
    let startY = y + random(-200, 200);
    let endX = x + random(-200, 200);
    let endY = y + random(-200, 200);
    stroke(random(255), random(255), random(255), 100);
    strokeWeight(4);
    line(startX, startY, endX, endY);
  }


  for (let i = 0; i < 10; i++) {
    let randX = x + random(-200, 200);
    let randY = y + random(-200, 200);
    fill(random(255), random(255), random(255), 100);
    rect(randX, randY, 100, 100);
  }


  for (let i = 0; i < 50; i++) {
    let randX = x + random(-200, 200);
    let randY = y + random(-200, 200);
    fill(random(255), random(255), random(255), 100);
    textSize(64);
    text("22", randX, randY);
  }
}