const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var box, box2;
var button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  box = new Box(width / 2, 0, 200, 200)
  box2 = new Box(width / 2 - 200, 150, 200, 50)

  button = createButton("CLICK HERE TO BLOW")
  button.position(600, 400)
  button.size(200, 100)

  button.mousePressed(blow)
}

function draw() {
  background("black");
  box.show();
  box2.show();
  drawSprites();
}

function blow() {
  Body.applyForce(box.Body, { x: 0, y: 0 }, { x: 0, y: 0.05 })
}