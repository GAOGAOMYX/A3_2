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

  pg.noFill();
  pg.stroke(255);
  pg.strokeWeight(50);

  pg2.textSize(500);
  pg2.textAlign(CENTER, CENTER);

  pg2.fill(255);
  pg2.text("2", width / 2, height / 2);

  for (let x = 0; x < pg.width; x += 30) {
    for (let y = 0; y < pg.height; y += 30) {
      const currentC = pg2.get(x, y);
      if (brightness(color(currentC)) > 50) {
        fill(255);
        const s = new MyShape(x, y);
        textList.push(s);
      }
    }
  }
}

function draw() {
  background(0);
  pg.background(0);
  if (frameCount % 60 == 0) {
  }

  for (const item of textList) {
    item.updateScale(0.1);
    item.updateRotate(PI * sin(frameCount / 10));
    // item.updatePos(
    //   item.x + sin(frameCount / 10) * 3,
    //   item.y + cos(frameCount / 10) * 3
    // );
    item.draw(pg);
  }

  image(pg, 0, 0);
}

class MyShape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scale = 0;
    this.a = 0;
  }

  updateScale(scale) {
    this.scale = scale;
  }

  updateRotate(a) {
    this.a = a;
  }

  updatePos(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(pg) {
    if (pg) {
      pg.push();
      pg.fill(255);
      pg.translate(this.x, this.y);
      pg.rotate(this.a);
      pg.scale(this.scale);
      pg.rect(this.x, this.y, 100, 100);
      pg.pop();
    } else {
      push();
      fill(255);
      translate(this.x, this.y);
      rotate(this.a);
      scale(this.scale);
      rect(this.x, this.y, 100, 100);
      endShape(CLOSE);
      pop();
    }
  }
}
