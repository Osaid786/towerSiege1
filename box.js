class Box{
    constructor(x,y){
        var options={
           isStatic:false,
           restitution : 0.4,
         
        }
        this.body = Bodies.rectangle(x,y,100,20,options)
        this.width=60
        this.height=100
        
        World.add(world,this.body)
    }
   
    display(){
            
        var pos=this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,30,50)
        pop();
        
        
    };
};