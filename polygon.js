class Polygon{
    constructor(x,y,radius){
        var options = {
            'restitution' : 0.1
        }

        
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        var pos= this.body.position
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop();
        
      }
}