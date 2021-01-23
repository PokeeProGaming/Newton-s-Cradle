class Rope{
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        

    }
    display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            var anchorBX = pointB.x+this.offsetX;
            var anchorBY = pointB.y+this.offsetY;
            push();
            strokeWeight(2);
            stroke("#fff");
            fill("black");
            line(pointA.x,pointA.y,anchorBX,anchorBY);
            pop();
    
    }
}