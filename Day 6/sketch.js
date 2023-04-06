let x = [];
let y = [];
let xoff = [];
let yoff = [];

function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < 8; i++) {
    x[i] = random(width);
    y[i] = random(height);
    xoff[i] = random(10000);
    yoff[i] = random(10000);
  }
}

function gradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function draw() {
  let c1 = color(255 ,0 ,255 );
  let c2 = color(0 ,191 ,255 );
  gradient(0, 0, width/2 , height , c1, c2);
  
   c1 = color(255 ,215 ,0 );
   c2 = color(255 ,69 ,0 );
  gradient(width/2 , 0,width/2 , height , c1, c2);
-
 strokeWeight(6);
  
  textSize(500);
  
  let alpha = map(sin(frameCount * 0.5), -1 ,1 ,50 ,255 );
  

 for (let i = 0; i < x.length; i++) {
    fill(random(255), random(255), random(255), alpha);
    text('2', x[i], y[i]);
    x[i] += map(noise(xoff[i]), 0, 1, -10, 10);
    y[i] += map(noise(yoff[i]), 0, 1, -10, 10);
    xoff[i] += 0.01;
    yoff[i] += 0.01;
    
    x[i] = constrain(x[i], textWidth('2') / 2 +10 - 180, width - textWidth('2') / 2 -10 - 110 );
    y[i] = constrain(y[i], textAscent() / 2 + textDescent() / 2 +10 + 40,height - textAscent() / 2 - textDescent() / 2 -10 + 350 );
 }
}