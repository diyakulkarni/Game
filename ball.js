class ball{
    constructor(x,y,width,height){
        var options={
            isStatis:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body= Bodies.rectangle(x,y,width,height);
        this.width = this.width;
        this.height = this.height;
        World,add(world,this.body);
    }
    display();
    drawSprites();
}
function display(){
var ball = this.body.position;
ball.setColor('red');
ball.circle(width/2,50,100,20);

}
