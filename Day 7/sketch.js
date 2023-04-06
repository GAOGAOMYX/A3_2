let size = 50;
let overNum = false;
let t = 0;
let pg;
let img;
let x = 300;
let y = 800;

function preload() {
  img = loadImage('https://img.zcool.cn/community/017fa95e44de05a801216518ba4c50.png?x-oss-process=image/format,webp/quality,q_100');
}

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  pg = createGraphics(1000, 1000);
}

function draw() {
  pg.background(220);
  
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      pg.fill(i % 255, j % 255, 255);
      pg.noStroke();
      pg.ellipse(i, j, 10, 10);
    }
  }
  
  image(pg, 0, 0);
  
  if (overNum) {
    fill(255 * noise(t), 255 * noise(t + 5), 255 * noise(t + 10));
    t += 0.01;
    x += random(-1,1);
    y += random(-1,1);
    
    image(img, width/2 - img.width/2, height/2 - img.height/2);
    blendMode(BLEND);
    fill(255);
    rect(width/2 - img.width/2, height/2 - img.height/2, img.width, img.height);
    blendMode(MULTIPLY);
    image(img, width/2 - img.width/2, height/2 - img.height/2);
    
    fill(255 * noise(t), 255 * noise(t +5),255 * noise(t +10));
    textSize(800);
    text('2',x,y)
    
    t += .01
} else {
    overNum = false;
    fill(255,204,0)
    x =300
    y=800
}
  
blendMode(MULTIPLY);

strokeWeight(20);
stroke(255,0,0)
textSize(800)
text('2',x,y)

let numWidth = textWidth('2');

if(mouseX > x && mouseX < (x + numWidth) && mouseY > (y - textAscent()) && mouseY < (y + textDescent())){
overNum = true;
}else{
overNum = false;
}
}