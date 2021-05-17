class Stand{
    constructor(x,y){
        var options = {
            isStatic : true,
          
        }
        this.body = Bodies.rectangle(x,y,40,20,options)
        this.width = 250
        this.height = 20 
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle =this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(2)
        stroke("white")
        fill("yellow")
        rect(0,0,this.width,this.height)
        pop()
    };
};