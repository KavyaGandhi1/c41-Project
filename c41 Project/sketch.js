const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// const Body = Matter.Body
// const Constraint = Matter.Constraint

var engine,world
var thunder1,thunder2,thunder3,thunder4;
var drops = [];
var thunderFrame = 0;
var maxDrops = 100;
var umbrella;
var thunder;
 function preload(){
    thunder1 = loadImage("thunderbolt copy/1.png");
    thunder2 = loadImage("thunderbolt copy/2.png");
    thunder3 = loadImage("thunderbolt copy/3.png");
    thunder4 = loadImage("thunderbolt copy/4.png");
 }

function setup(){
   createCanvas(500,800);
   engine = Engine.create();
   world = engine.world
if(frameCount%10===0){
    for(var i = 0;i<maxDrops;i++){
        drops.push(new createDrop(random(0,400),random(0,400)))
  }
  umbrella = new Umbrella(225,600);
}
   
    
}

function draw(){
    Engine.update(engine)
    background("black")
   
   var rand = Math.round(random(1,4));
   if(frameCount%50 === 0){
    thunderFrame = frameCount;
    thunder = createSprite(random(10,450), random(10,30), 10, 30);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break; 
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default: break;
    }
    thunder.scale = random(0.2,0.6)
 }
 
 if(thunderFrame + 10 ===frameCount && thunder){
    thunder.destroy();
 }
   
   
    for(var i = 0; i<maxDrops; i++){
       
        drops[i].showDrops();
        drops[i].updateY();  
    }
    umbrella.display();
    drawSprites();
}   

