class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:250,
            width:0
        }
        
        this.rope=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.rope);
    }
    display(){
            fill("pink")
            line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);   
    }
}