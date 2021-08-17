class Rubber{
    constructor(x, y, radius){
        var options = {
                //'restitution' : 0.3,
                'friction': 5,
                'density' : 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0, 0, this.radius);
        pop();
    }
     //var angle = this.body.angle;
      //rotate(angle);
      //strokeWeight(4);
        //stroke("green")
         //pos.x = mouseX
        //pos.y = mouseY
}