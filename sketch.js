var toto=0;

function setup() {
  createCanvas(400,360);
   background(0);
}

function draw() {

  stroke(255,0,0);
  fill(255,0,0);
  ellipse(mouseX,toto,20,20);
  toto=toto+2;
}

function mousePressed(){
  background(0);
  toto=0;
}