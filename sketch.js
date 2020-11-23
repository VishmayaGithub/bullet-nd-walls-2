var bullet,wall,thickness
var speed,weight

function setup() {

  createCanvas(1500,400);

 bullet =  createSprite(50, 200, 30, 10);
 
 bullet.shapeColor = "80,80,80"
 wall = createSprite(1200,200,20,300)
 
 speed = random(100,200)
 weight = random(15,30)
 thickness = random(10,20)
}

function draw() {
  background("black"); 
  bullet.velocityX = speed/2;
  ibounce(bullet,wall)

  if(ibounce(bullet,wall)){
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness
    if(damage>10){
    bullet.shapeColor = "red"
    }
    if(damage<4){
      bullet.shapeColor ="green"
    }
  
  }
 
  drawSprites();
}


