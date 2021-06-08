class superhero{
    constructor(x,y){
        var options={
            density:1,
            frictionAir:0.005
        }
        this.body=Bodies.rectangle(x,y,300,50,options);
        this.width=250;
        this.height=50;
        this.image=loadImage("images/superhero1.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.width);
        pop();
    }
}