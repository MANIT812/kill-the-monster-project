class monster{
    constructor(x,y){
               var options={
                   frictionAir:0.01,
                   density:20
               }
               this.body=Bodies.rectangle(x,y,200,200,options);
               this.width=200;
               this.height=200;
               this.image=loadImage("images/monster1.png");
               World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}