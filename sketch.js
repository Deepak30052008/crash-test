var car,wall ,speed,weight;
var deformation
function setup() {
  createCanvas(1000,400);
  speed=Math.round(random(55,90))
  weight=Math.round(random(400,1500))
  deformation=0.5*weight*speed*speed/22500
  wall=createSprite(700, 200, 25, 250);
wall.shapeColour=color(0,0,255)
  car=createSprite(100,200,25,25);
  car.shapeColour=color(0,0,255)

  car.velocityX=speed;
}

function draw() {
  background("black");  
  
  if(wall.x-car.x<=car.width/2+wall.width/2){
  car.velocityX=0;
  }
  if(deformation>=180){
  car.shapeColor="red"
  }
  if(deformation<180 && deformation>=100){
    car.shapeColor="yellow"
  }
  if(deformation<=80){
  car.shapeColor="green"
     }
       console.log(deformation);
  drawSprites();
}