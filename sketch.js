
var PLAY=1;
var END=0;

var gameState=1;

var monkey , monkey_running;
var banana ,bananaImage,  obstacleImage;
var FoodGroup, obstacleGroup;
var score,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  
  createCanvas(400,400);
  
  
  
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,359,400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  

  obstacleGroup = new Group();
  foodGroup     = new Group();
  
  score=0;
  
  survivalTime=0;
  
  
}

function draw() {

 background("white");
  

  if(ground.x<400){
    
    ground.x=ground.width/2;
    
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
     
  }
   monkey.velocityY=monkey.velocityY+0.7;
  
  monkey.collide(ground)
  
  
  
  

  spawnObstacles();
  
  spawnfood();
  
  
  drawSprites();
  
  textSize(20);
  fill("black")
  text("score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("blue");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime = "+survivalTime,100,50)
  
}

function spawnObstacles(){
  
  if(frameCount%300===0){
    var obstacle=createSprite(Math.round(random(100,570)),330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-2;
    obstacle.lifeTime=300;
    obstacle.scale=0.15;
    
    monkey.depth=obstacle.depth+0.5;
   
    
    obstacleGroup.add(obstacle);
  }
  
}
  
  function  spawnfood(){
    
    if(frameCount%80===0){
      banana=createSprite(400,Math.round(random(140,200)),20,20);
      banana.addImage(bananaImage);
      banana.lifeTime=300;
      banana.scale=0.09;
      banana.velocityX=-2;
      
      foodGroup.add(banana);
      
    }
    
    
    
    
  }
  



