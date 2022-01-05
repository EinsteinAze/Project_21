const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine;
var world;
var ball1;
var ground;
var side1;
var side2;


function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    ball1 = new Paper(100,600, 10);
    ground = new Ground(400,680,800,20);
    side1 = new Dustbin(530,620,20,100);
    side2 = new Dustbin(670,620,20,100);

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
    
  ball1.display();
  ground.display();
  side1.display();
  side2.display();
  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) 
    {
      Matter.Body.applyForce(ball1.body, ball1.body.position, {x: 15,y: -15})
    }
  }


