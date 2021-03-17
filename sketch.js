var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;



function preload(){
  
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 backgroundImage=loadImage("jungle.jpg")
}



function setup() {
  createCanvas(800,400)
  background=createSprite(0,0,800,400)
  background.addImage(backgroundImage)
  background.scale=1.5;
  
  monkey=createSprite(80,315,20,20) 
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,800,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log (ground.x)
  ground.visible=false
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  score=0;
  
}


function draw() {
//background("white")
  background.velocityX=-4;
  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
   }
  if (background.x<100){
    background.x=background.width/2
  }
  
   if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
       }
    
    //add gravity
   monkey.velocityY = monkey.velocityY + 0.8
  
monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();

  
  
  if (obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstaclesGroup.setVelocityXEach(0);
   FoodGroup.setVelocityXEach(0);
    
    obstaclesGroup.setLifetimeEach(-1);
   FoodGroup.setLifetimeEach(-1);
    
  }
stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:" + survivalTime,100,50)
  
  
 
  



  
  
  
  
 
  
  
  
 drawSprites();
  stroke("white")
  textSize(20)
  fill("white")
  text("score:"+ score,500,50)
  

}

function spawnFood(){
  if(frameCount % 80===0){
    var banana=createSprite(600,250,40,10)
  banana.y=random(120,200);
    banana.velocityX=-5
    banana.lifetime=180
    monkey.depth=banana.depth+1;
banana.scale=0.05;

    
  foodGroup.add(banana);
  
    
  }
  
  }

function spawnObstacles(){
  
    
   if(frameCount % 300===0){
  var obstacle=createSprite(800,320,10,40)
  obstacle.velocityX=-6;
     obstacle.lifetime=300;
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    
    obstacleGroup.add(obstacle);
   }
  
}



