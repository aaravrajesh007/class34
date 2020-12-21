const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box=[];


function setup(){
     createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
for(var i=0;i<6;i++){
    box[i]=new Box(900,100,70,70)
}
for(var i=6;i<12;i++){
    box[i]=new Box(800,100,70,70)
}
for(var i=12;i<20;i++){
    box[i]=new Box(700,100,70,70)
}

     ground=new Ground(600,700,1200,10)
     ball=new Ball(500,200,80,80)
     rope=new Rope(ball.body,{x:500,y:50})
     
}

function draw(){
    background(0);
    Engine.update(engine);
    
for(var i=0;i<6;i++){
    box[i].display();
}
for(var i=6;i<12;i++){
    box[i].display();
}
for(var i=12;i<20;i++){
    box[i].display();
}
ball.display();
rope.display();
    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}