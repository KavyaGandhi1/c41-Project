class createDrop{
constructor(x,y){

 var options = {
restitution: 0.1,
friction: 0.2

}
this.rain = Bodies.circle(x,y,10,options)
this.r = 9;
World.add(world,this.rain)
}

updateY(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x: random(0,500),y: random(0,50)})
    }
}
showDrops(){
   

    // stroke("blue");
    fill("blue");

    ellipseMode(CENTER);
    ellipse(this.rain.position.x, this.rain.position.y, this.r, this.r)
}
}