const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var botao;

var vent;

var angle = 25;

var obj1,obj2,obj3;

function setup() {
  createCanvas(400,400);
//crie o mecanismo
 engine = Engine.create();
 world = engine.world;
  //Adicione mundo ao mecanismo
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01,
    //density:2
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crie o solo
  ground = Bodies.rectangle(200,400,400,20,ground_options);
//adicione ao mundo
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  vent = Bodies.rectangle(200,250,100,20,ground_options)
  World.add(world,vent)

  botao = createImg("up.png")
  botao.position(20,30)
  botao.size(50,50)
  botao.mouseClicked(vForce)

  obj1 = new Box(40,300,30,50);
  obj2 = new Box(120,300,30,50);
  obj3 = new Box(260,300,30,50);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  


  ellipse(ball.position.x,ball.position.y,20);
  //escreva uma função de retângulo para exibir o solo.
  fill("red");
  rect(ground.position.x,ground.position.y,400,20);
  push();
  translate(vent.position.x,vent.position.y)
  rotate(angle)
  angle = angle +0.2;
  rect(0,0,100,20);
  pop();

  obj1.show(); 
  obj3.show();
  obj2.show();
}

function vForce(){
 Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02})




}