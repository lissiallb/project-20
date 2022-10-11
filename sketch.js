
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var planeo =
	{
		isStatic : true
	}
	plane = Bodies.rectangle(width/2, 698, width, 10, planeo);
	World.add(world, plane);

	var block1o =
	{
		restitution : 0.95,
		frictionAir : 0.1
	}
    block1 = Bodies.circle(220, 50, 50, block1o);
	World.add(world, block1);

	var block2o =
	{
		restitution : 0.7,
		frictionAir : 0.4
	}
    block2 = Bodies.rectangle(600, 50, 150, 50, block2o);
	World.add(world, block2);
    
	var block3o =
	{
		restitution : 0.999999,
		frictionAir : 0
	}
    block3 = Bodies.rectangle(350, 50, 100, 100, block3o);
	World.add(world, block3);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("lightgreen");
  Engine.update(engine);
  
  fill(0);
  rect(plane.position.x, plane.position.y, width, 25);
  
  fill("red");
  ellipse(block1.position.x, block1.position.y, 50);
  rect(block2.position.x, block2.position.y, 150, 50);
  rect(block3.position.x, block3.position.y, 100, 100);
  
  drawSprites();
}



