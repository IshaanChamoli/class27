class Attachment {

    constructor (body1,body2)
{
var op={
    bodyA:body1,
    bodyB:body2,
    stiffness:0.05,
    length:30,

}

this.rubberband=Matter.Constraint.create (op)
World.add(world,this.rubberband)

}

Display (){
var p1=this.rubberband.bodyA.position
var p2=this.rubberband.bodyB.position
line (p1.x,p1.y,p2.x,p2.y)

}
}