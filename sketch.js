
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,ground,rubber,stone,sand;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	ground = new Ground(400,height,800,20);

	hammer = new Hammer(400,350);
	stone = new Stone(400,690,70,70);
	rubber = new Rubber(500,350,50,50);
	
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  drawSprites();
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();


}



