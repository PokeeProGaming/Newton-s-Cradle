class Bob{
    constructor(x, y, diameter) {
        var options = {
            'isStatic':false,
            'restitution':1,
            'density':0.8
        }
        this.body = Bodies.circle(x, y, diameter/2, options);
        this.diameter=diameter/2;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(0, 0, this.diameter, this.diameter);
        pop();
      }
}