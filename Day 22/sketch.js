const canvasWidth = 1000;
const canvasHeight = 1000;
let pg;
let pg2;

let textList = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(60);
  noStroke();

  pg = createGraphics(canvasWidth, canvasHeight);
  pg2 = createGraphics(canvasWidth, canvasHeight);

  pg.background(0);

  pg2.background(0);

  pg2.textSize(1000);
  pg2.textAlign(CENTER, CENTER);

  pg2.fill(255);
  pg2.text("2", width / 2, height / 2);

  for (let x = 0; x < pg.width; x += 40) {
    for (let y = 0; y < pg.height; y += 40) {
      const currentC = pg2.get(x, y);
      if (brightness(color(currentC)) > 50) {
        fill(255);
        textList.push({ x, y });
      }
    }
  }
  pg.stroke(random(255), random(255), random(255));
}

function draw() {
  background(0);
  pg.background(0);
  // pg.noStroke();
  pg.rectMode(CENTER);
  if (frameCount % 30 == 0) {
    pg.background(0);
  }

  for (let i = 0; i < textList.length; i++) {
    for (let j = 0; j < textList.length; j++) {
      const p = textList[i];
      const pp = textList[j];
      const d = createVector(p.x, p.y).dist(createVector(pp.x, pp.y));
      if (d < random(100, 300)) {
        pg.strokeWeight(map(d, 100, 0, 0.1, 3));
        pg.line(p.x, p.y, pp.x, pp.y);
      }
      const d2 = createVector(p.x, p.y).dist(createVector(mouseX, mouseY));
      if (d2 < random(100, 300)) {
        pg.strokeWeight(map(d, 100, 0, 0.1, 3));
        pg.line(p.x, p.y, mouseX, mouseY);
      }
    }
  }

  image(pg, 0, 0);

  // noLoop();
}
