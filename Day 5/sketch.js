let rects = [
  [250, 125, 500, 125],
  [625, 250, 125, 250],
  [250, 500, 500, 125],
  [250, 625, 125, 250],
  [250, 875, 500, 125]
];

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255);
  
  colorMode(HSB);
  
  for (let i = 0; i < rects.length; i++) {
    let r = rects[i];
    let h1 = map(i + frameCount % rects.length, 0, rects.length - 1, 0, 360);
    let h2 = map((i + frameCount + rects.length / 2) % rects.length,
                 0, rects.length - 1, 0, 360);
    
    for (let j = r[0]; j < r[0] + r[2]; j++) {
      let h = map(j, r[0], r[0] + r[2], h1, h2);
      stroke(h, 100, 100);
      line(j, r[1], j, r[1] + r[3]);
    }
    
    push();
    
    translate(r[0] + r[2] / 2 + sin(frameCount / -10.0) * width / 4,
              r[1] + r[3] / 2 + cos(frameCount / -10.0) * height / 4);
    rotate(frameCount / -100.0);
    
    fill(255);
    rect(-r[2] / 4, -r[3] / 4, r[2] / 2, r[3] / 2);
    
    pop();
    
    noStroke();
    fill(255);
    ellipse(r[0] + r[2] / 2 + sin(frameCount / -10.0) * width / 4,
            r[1] + r[3] / 2 + cos(frameCount / -10.0) * height / 4);
  }
}