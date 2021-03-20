const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Boddies
const Constraint = Matter.Constraint;
var engine,world

var ground
function preload() {
 
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;
  
ground=new Ground(600,600,1200,20)
}

function draw() {
  background(bg);
  Engine.update(engine)

  ground.display()
}
