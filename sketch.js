
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
//const Constraint=Matter.Constraint;

var backGroundImage,backGround;
var ground1,ground2,ground3;
var bird,birdImg;
var invisibleGround;

var PLAY = 1;
var END = 0;
gameState = PLAY;
//var gameOver;
function preload(){
	
	backGroundImage=loadImage("bg.png");
	birdImg=loadImage("bird.png");
}

function setup() {
	createCanvas(1000, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	backGround=createSprite(400,350,900,20);
	//backGround.velocityX=-3;
	backGround.addImage(backGroundImage);
	backGround.x=backGround.width/2;
	 

	ground1=createSprite(100,650,300,100);
	ground1.velocityX=-3;
	//ground1.x=ground1.width/2;

	ground2=createSprite(500,650,300,100);
	ground2.velocityX=-3;

	ground3=createSprite(900,650,300,100);
	ground3.velocityX=-3;

	bird=createSprite(200,580);
	bird.addImage(birdImg);

	invisibleGround=createSprite(200,190,400,20);
	invisibleGround.visible=false;

	 Engine.run(engine);
   //Render.run(render);  
  
}
// 

  function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground1.display();
  ground2.display();
  ground3.display();

 // ground1.shapeColor("brown");
  bird.display();
  
  if(gameState == PLAY){
	 
	if(keyDown("space") && bird.y >=159){
		bird.velocityY=-12;
	}

	bird.velocityY = bird.velocityY + 0.8;

	if(backGround.x<400){  
	  backGround.x=backGround.width/2
  }
  
  if(ground1.x<-150){
	reset();
	}
  if(ground2.x<-150){
		ground2.x=1100;
	}
  if(ground3.x<-150){
		ground3.x=1100;
	}

	
  bird.collide(ground1);
  bird.collide(ground2);
  bird.collide(ground3);

  if(bird.y>600){
	gameState=END;	
  }
  drawSprites();

}
 
if(gameState==END){
	
	text("game Over",200,250);

	ground1.velocityX=0;
	ground2.velocityX=0;
	ground3.velocityX=0;
  }

  }
   
function reset(){

	ground1.x=1100;
}
  
 




