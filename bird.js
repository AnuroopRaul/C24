class Bird{
    constructor(x,y){
        var options={
            restitution:1.0,
            density:1.0,
            friction:1.0
        }
    
    //creating Pigs body
    this.body = Bodies.rectangle(x,y,60,60,options);
    this.w = 50;
    this.h = 50;
    World.add(world,this.body);
    
    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
       

        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
       fill("red");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}
