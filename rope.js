class Rope {

    constructor(body1,point){
        var options={
            bodyA:body1,
            pointB:point,
            stiffness:1.2,
            length:250,
        }
     this.rope= Matter.Constraint.create(options);
     World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA)
        {
        var pointX=this.rope.bodyA.position;
        var pointY=this.rope.pointB;
        push();
        strokeWeight(5)
        stroke("blue")
        line(pointX.x,pointX.y,pointY.x,pointY.y)
        pop();
        }
    }

}


/*
class Rope{
    constructor(body1,body2,offsetX){
      
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:offsetX,y:0}
    }
    this.offsetX=offsetX;
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;//roof
        push();
        strokeWeight(2);
        stroke("skyblue");
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
        pop();

    }
}
*/