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

  pg.background(255);

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
}

function draw() {
  background(0);
  pg.background(255);
  // pg.noStroke();
  pg.rectMode(CENTER);

  for (let j = 0; j < textList.length; j++) {
    const pp = textList[j];
    pg.stroke(random(255), random(255), random(255));
    pg.noFill();
    pg.rect(pp.x, pp.y, 40, 40);

    pg.fill(random(255), random(255), random(255));
    pg.ellipse(pp.x, pp.y, 30, 30);
  }

  image(pg, 0, 0);

  noLoop();
}
