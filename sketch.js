
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Roof(400,350,width,height);
	bobObject1=new Bob(340,500,30);
	bobObject2=new Bob(370,500,30);
	bobObject3=new Bob(400,500,30);
	bobObject4=new Bob(430,500,30);
  bobObject5=new Bob(460,500,30);

  bobDiameter=-1;

  rope1=new Rope(bobObject1.body,roof.body, -bobDiameter*2-60,0);
  rope2=new Rope(bobObject2.body,roof.body,  -bobDiameter*2-30,0);
  rope3=new Rope(bobObject3.body,roof.body, -bobDiameter*2,0);
  rope4=new Rope(bobObject4.body,roof.body, -bobDiameter*2+30,0);
  rope5=new Rope(bobObject5.body,roof.body,  -bobDiameter*2+60,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  console.log(bobObject1)
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  }



  function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:85,y:-85});
    }
    }