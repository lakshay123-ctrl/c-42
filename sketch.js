
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundSprite;
var plinko = [];
var particle = [];



function setup() {
	createCanvas(480,800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
  Engine.run(engine);
  
  boy = new Boy(240,710,200,200);

}


function draw() {
 // rectMode(CENTER);
  background("black");
  //ellipseMode(RADIUS)

 
  for (var i = 0; i < plinko.length; i++){
	  plinko[i].display();
  }

  for (var j = 0; j < particle.length; j++){
	  particle[j].display();
  }

  if (frameCount%1===0){
	particle.push(new Particle(random(400,10),3,3));
}


  boy.display();
 

  
  drawSprites();



  
	
	
 
 
}
