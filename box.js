class Box{
    constructor(x,y,width,height){
        var box_options={
            restitution:1.0,
            density:1.0,
            friction:1.0
        }
    
    //creating boxes body
    this.body = Bodies.rectangle(x,y,width,height,box_options);
    this.w = width;
    this.h = height;
    World.add(world,this.body);
    
    }

    display(){
        var pos = this.body.position;
        
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