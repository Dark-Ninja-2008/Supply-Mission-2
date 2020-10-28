var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxWall1,boxWall2,boxWall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0,friction:0 ,isStatic:true});
	packageBody.velocityY = 0;
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	boxWall1 = createSprite(345,height-60,10,30)
	boxWall1.shapeColor= "red"

	boxWall2 = createSprite(width/2,height-45,120,10)
	boxWall2.shapeColor= "red"

	boxWall3 = createSprite(455,height-60,10,30);
	boxWall3.shapeColor= "red"

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
	helicopterSprite.velocityX = 5; 
    //package.Body.velocityY = 5;
  }
}



