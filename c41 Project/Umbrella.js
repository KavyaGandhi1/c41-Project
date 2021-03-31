class Umbrella{
    constructor(x,y){
        var options  = {
            isStatic: true,
            density: 1,
            friction: 0.1
        }
      this.umbrella = Bodies.circle(x,y,70,options);
      this.image = loadImage("Walking Frame Copy/walking_1.png") 
      World.add(world,this.umbrella) ;
      this.r = 200;
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.umbrella.position.x,this.umbrella.position.y,this.r,this.r);
    }

}