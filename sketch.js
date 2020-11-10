
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  var survivaltime=0;
  obstacleGroup=new Group();
  foodGroup=new Group();
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1

  ground=createSprite(350, 350, 900, 20)
ground.velocityX=-7
ground.x=ground.width/2
}
function draw() {
  
  
  background("white")
  obstacles();
  foods();
  if(ground.x<0){
   ground.x=ground.width/2
 
  }
  if(keyDown("space")){
    monkey.velocityY=-12
    
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    obstacleGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach(-1)
     foodGroup.setVelocityXEach(0)
    foodGroup.setLifetimeEach(-1)
 monkey.velocityY=0
  }

  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
text("survival time:"+survivaltime,100, 50 )  
  
drawSprites();
  
}
function obstacles() {
if(frameCount%200==0){
  obstacle=createSprite(800, 320, 10, 40)
  obstacle.velocityX=-7
    obstacle.addImage("obstacle",obstacleImage)
  obstacle.scale=0.2
  obstacle.lifetime=300
  obstacleGroup.add(obstacle)
}


}


function foods(){
  if(frameCount%80==0)
{
  banana=createSprite(600,250,40, 10)
banana.velocityX=-5
banana.y=Math.round(random(120, 200))
banana.addImage(bananaImage)
banana.scale=0.1
foodGroup.add(banana)




}




}







