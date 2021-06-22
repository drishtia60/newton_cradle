
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function setup() {
	createCanvas(1400,900);

	engine = Engine.create();
	world = engine.world;
   
  groundObj = new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);
  rightSide = new Ground(850,600,20,120);

    var ball_options = {
		isStatic:false,
    restitution:0.3,
		friction :0,
		density:1.2
	}

	ball = Bodies.circle(200,20,25,ball_options);
  World.add(world,ball);   

  if(keyDown("left")){
    vForce();
  }


	Engine.run(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {


  rectMode(CENTER);
  background("black");

  groundObj.show();
  leftSide.show();
  rightSide.show();

  fill("white")
  ellipse(ball.position.x,ball.position.y,25);


  textSize(20);
  fill("grey");
  text("press up arrow key to jump",200,400);
  Engine.update(engine)
  
 
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:7});
    }
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-85,y:7});
}




