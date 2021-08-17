const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const body = Matter.Body;
var hammer;
var iron  ;
var rubber;
var sand;
var stone;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background("black")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(20,630,800,40)
	hammer = new Hammer(200,160,30,30);
	iron = new Iron (100,100,60,60);
	rubber1 = new Rubber(50,10,30);
	rubber2 = new Rubber(60,10,30);
	rubber3 = new Rubber(45,10,30);
	rubber4 = new Rubber(40,10,30);
	rubber5 = new Rubber(55,10,30);
	sand = new Sand(450,200,30);
	stone = new Stone(500,80,10,10);
	//Engine.run(engine);
  
}


function draw() {
	background("black");
  Engine.update(engine);
  //rectMode(CENTER);
  hammer.display();
  iron.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  rubber4.display();
  sand.display();
  stone.display();
  ground.display();
  //hammer.collide(ground);
  //iron.collide(ground);
  //sand.collide(ground);
  //stone.collide(ground);
  //rubber1.collide(ground);
  //rubber2.collide(ground);
  //rubber3.collide(ground);
  //rubber4.collide(ground);
  drawSprites();
 
}