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

  pg2.textSize(500);
  pg2.textAlign(CENTER, CENTER);

  pg2.fill(255);
  pg2.text("2", width / 2, height / 2);

  for (let x = 0; x < pg.width; x += 30) {
    for (let y = 0; y < pg.height; y += 30) {
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
  pg.noStroke();
  pg.rectMode(CENTER);
  if (frameCount % 30 == 0) {
    pg.background(0);
  }

  for (const item of textList) {
    pg.push();
    pg.translate(item.x, item.y);
    pg.scale(1);
    pg.fill(random(255), random(255), random(255));
    pg.rect(item.x - width / 2, item.y - height / 2, 55, 55);
    if (random() < 0.5) {
      pg.fill(random(255), random(255), random(255));
      pg.rect(item.x - width / 2, item.y - height / 2, 40, 40);
    } else {
      pg.fill(random(255), random(255), random(255));
      pg.ellipse(item.x - width / 2, item.y - height / 2, 40, 40);
    }
    pg.pop();
  }

  image(pg, 0, 0);

  noLoop();
}
