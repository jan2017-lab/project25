var paper1;
var dustbinimg,middle;
var paperimg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  dustbinimg=loadImage("dustbin.png")
  
}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;

  
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	leftside = createSprite(835,490,15,125)
  leftside.shapeColor=color("white")

	rightside = createSprite(945,490,15,125)
	rightside.shapeColor=color("white")
	
	downside = createSprite(895,545,120,15)
  downside.shapeColor=color("white")
  
  middle = createSprite(892,475,20,20)
  middle.addImage(dustbinimg)
  middle.scale = 0.5


	//Create the Bodies Here.
  Engine.run(engine);
  
  paper1 = new Paper(200,200,30)
  
  ground = Bodies.rectangle(500,565,1000,10,{isStatic:true})
  World.add(world,ground)

  downbody =Bodies.rectangle(900,545,140,20,{isStatic:true} );
  World.add(world, downbody)

  leftbody =Bodies.rectangle(835,490,15,125,{isStatic:true} );
  World.add(world, leftbody) 

  rightbody =Bodies.rectangle(945,490,15,125,{isStatic:true} );
  World.add(world, rightbody)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper1.display();
  drawSprites();
 
}
 
function keyPressed() {
  if (keyCode === UP_ARROW) {
     // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
 
   }
 }


