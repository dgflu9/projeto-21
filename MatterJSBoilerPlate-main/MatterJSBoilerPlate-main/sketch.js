
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);



	var ball_options={
		isStatic: false,
    restitution: 0.3,
		friction: 0.1,
		density: 1.2
	}

	var ground_options ={
		isStatic: true
	  };

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


 ball = Bodies.circle(100,385,10,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(width/2,390,width,20,ground_options);
  World.add(world,ground);

  leftSide = Bodies.rectangle(650,390,20,120,ground_options);
  World.add(world,leftSide);

  rightSide = Bodies.rectangle(750,390,20,120,ground_options);
  World.add(world,rightSide);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
 
  drawSprites();
  ellipse(ball.position.x,ball.position.y,10);
  rect(ground.position.x,ground.position.y,1100,20);
  rect(leftSide.position.x,leftSide.position.y,20,120);
  rect(rightSide.position.x,rightSide.position.y,20,120);
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0, y:0},{x:13,y:-18});
	}
}





