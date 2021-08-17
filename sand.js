class Sand{
    constructor(x, y, radius){
        var options = {
                 isStatic : false,
                'restitution' : 0.3,
                'friction': 5,
                'density' : 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        ellipseMode(CENTER);
        //strokeWeight(4);
        //stroke("green")
        fill("yellow");
        //pos.x = mouseX
        //pos.y = mouseY
        ellipse(0, 0, this.radius);
        pop();
    }
}