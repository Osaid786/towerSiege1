class Stone{
    constructor(x,y){
        
        
        this.body=Bodies.circle(x,y,20)
        this.radius=50
       
        World.add(world,this.body)

    }

    display(){
        var pos=this.body.position
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("pink")
        imageMode(CENTER)
        ellipse(pos.x,pos.y,50,50)
        pop();
    }
}