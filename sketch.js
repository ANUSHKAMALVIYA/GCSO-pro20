var car, wall, speed, weight;

function setup() {
createCanvas(1600,400);
car=createSprite(200,200,50,50)
wall=createSprite(1200,200,60,100)

car.velocityX=5;

speed=random(25,30);
weight=random(400,1500);
}

function draw() {
  background("black")

  if(wall.x=car.x<(car.width+wall.width)/2)
  {
    car.shapeColor=color("purple");
    wall.shapeColor=color("blue")
  }
  var deformation =0.5;
  if(deformation<180 && deformation>100 )
  {
    car.shapeColor=color("lavander")
    wall.shapeColor=color("blue")
  }
if(deformation<100)
{
  car.shapeColor=color("offwhite")
  wall.shapeColor=color("blue")
}

drawSprites();
}