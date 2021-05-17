
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5, block6
var stand1,stone,sling;
var ground;

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    ground = new Ground(450,390);
    stand1 = new Stand(390,300);
    stone = new Stone(50,200);
    sling = new launcher(stone.body, {x:100,y:200})
    block1 = new Box(250,280,PI/2);
    block2 = new Box(250,230,PI/2);
    block3 = new Box(250,180,PI/2);

    block4 = new Box(230,280,PI/2);
    
    

	Engine.run(engine);
  
}


function draw() {
  background(450);
  
  ground.display();
  stand1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  stone.display();
  sling.display();
}



function mouseDragged(){
  
        
   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){

  sling.fly();
}

