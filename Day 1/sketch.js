let numbers = [];
let numberWidth;
let numberHeight;
let baselineOffset;
let descent;

function setup() {
  createCanvas(1000, 1000);

  textFont('Georgia');
  textSize(350);
  
  numberWidth = textWidth('2');
  numberHeight = textAscent() + textDescent();
  
  baselineOffset = textAscent() - 125;
  descent = textDescent() - 75;
  
  for (let i = 0; i < 10; i++) {
    let number = {
      x: random(width),
      y: random(height),
      xSpeed: randomSpeed(),
      ySpeed: randomSpeed(),
      color: [random(255), random(255), random(255)]
    };
    numbers.push(number);
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    
    number.x += number.xSpeed;
    number.y += number.ySpeed;
    
    if (number.x + numberWidth > width || number.x < 0) {
      number.xSpeed = randomSpeed();
      number.color = [random(255), random(255), random(255)];
      if (number.x < 0) {
        number.x = 0;
      }
      if (number.x + numberWidth > width) {
        number.x = width - numberWidth;
      }
    }
    
    if (number.y + descent > height || number.y < baselineOffset) {
      number.ySpeed = randomSpeed();
      number.color = [random(255), random(255), random(255)];
      if (number.y < baselineOffset) {
        number.y = baselineOffset;
      }
      if (number.y + descent > height) {
        number.y = height - descent;
      }
    }
    
    strokeWeight(4);
    textSize(350);
    fill(number.color);
    text('2', number.x, number.y);
  }
}

function mousePressed() {
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.color = [random(255), random(255), random(255)];
  }
}

function randomSpeed() {
  let speed = random(-5, 5);
  while (abs(speed) < 2) {
    speed = random(-5, 5);
  }
  return speed;
}