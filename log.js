class Log{
    constructor(x,y,height,angle){
        var options={
            restitution:1.0,
            density:1.0,
            friction:1.0
        }
    
    //creating boxes body
    this.body = Bodies.rectangle(x,y,320,height,options);
    this.w = 320;
    this.h = height;
    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body);
    
    }

    display(){
        var pos = this.body.position;  
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        stroke("green");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}