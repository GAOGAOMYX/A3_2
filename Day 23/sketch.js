const canvasWidth = 1000;
const canvasHeight = 1000;
let pg;
let pg2;

let textList = [];
let c;

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
      const b = brightness(color(currentC));
      textList.push({ x, y, b });
    }
  }
  pg.stroke(random(255), random(255), random(255));
  c = color(random(255), random(255), random(255));
}

function draw() {
  background(0);
  pg.background(0);

  for (let i = 0; i < textList.length; i++) {
    const item = textList[i];
    if (item.b > 50) {
      if (frameCount % 60 == 0) {
        c = color(random(255), random(255), random(255));
      }
      pg.fill(c);
      pg.ellipse(item.x, item.y, map(item.b, 0, 255, 10, 50));
    } else {
      pg.fill(255);
      pg.ellipse(item.x, item.y, map(item.b, 0, 255, 10, 50));
    }
  }

  image(pg, 0, 0);

  // noLoop();
}
