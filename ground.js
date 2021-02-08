class Ground{
    constructor(x,y,width,height){
        var ground_options={
            density:1.0,
            friction:1.0,
            isStatic:true
        }
    
    //creating boxes body
    this.body = Bodies.rectangle(x,y,width,height,ground_options);
    this.w = width;
    this.h = height;
    World.add(world,this.body);
    
    }

    display(){
    
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }

}