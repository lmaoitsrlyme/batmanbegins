class Umbrella {
    constructor(x,y){
        var options ={
            isStatic : true
        }
this.body = Bodies.circle(x,y,65,options)
World.add(world , this.body)


    }

    display(){
        var pos = this.body.position;
       /*ellipseMode(RADIUS)
fill("red")
ellipse(pos.x,pos.y,40)*/
image(manI,pos.x-95,pos.y-85,144,250)
    }
}