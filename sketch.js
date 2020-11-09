var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

speed=random(59,90);
weight=random(400,1500);

car=createSprite(50, 200, 50, 50);
car.velocityX=speed;
car .shapeColour=color(255);
wall=createSprite(900,200,60,200);
wall.shapeColour=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}