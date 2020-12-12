const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,myWorld,ground,bird,box1,box2,box3,box5,box4,pig2,pig1,log1,log2,log3,log4;
var backgroundImage;
function preload(){
  backgroundImage=loadImage("sprites/bg.png")
}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  myWorld=engine.world;

  
  /*var ground_options={
    isStatic:true
  } */
  
 // ground=Bodies.rectangle(200,390,200,20,ground_options);
  
  //World.add(myWorld,ground);
  /*var ball_options={
    restitution:2.0
  }

  ball=Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);
}*/

box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);
pig1=new Pig(810,350);
bird=new Bird(100,100);
pig2=new Pig(810,220);
log1=new Log(810,260,300,PI/2);
log2=new Log(810,180,300,PI/2);
log3=new Log(760,100,150,PI/7);
log4=new Log(870,100,150,-PI/7);
ground=new Ground(600,390,1200,20);
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);

/*rectMode (CENTER);
rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);*/
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
pig1.display();
pig2.display();
bird.display();
log1.display();
log3.display();
log4.display();
log2.display();
ground.display();
//drawSprites();
}