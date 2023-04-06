let angle = 0;

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(30, 30, 50);
  
  noStroke();

  orbitControl();

  ambientLight(100, 100, 100);
  

  pointLight(255, 255, 255, mouseX - width / 2, mouseY - height / 2, 200);

  push(); 
  fill(120, 120, 120);
  translate(0, 150, 0);
  box(400, 20, 400);
  pop();

  
  fill(0, 100, 100); 

  
  translate(25, -75, 0);
  rotateY(frameCount * 0.01);
  
 
translate(-50,-100 ,0);
box(200 ,50 ,50 );
translate(75 ,75 ,0);
box(50 ,100 ,50 );
translate(-75 ,75 ,0);
box(200 ,50 ,50 );
translate(-75 ,75 ,0);
box(50 ,100 ,50 );
translate(75 ,75 ,0);
box(200 ,50 ,50 );
push();
pop();

angle +=0.01;
rotateX(map(mouseY ,0,height ,0,PI));
rotateY(map(mouseX ,0,width ,0,PI));
}