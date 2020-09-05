class Hurdle{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      this.body =  Bodies.rectangle(x,y,width,height,options);
     
      this.width = width;
      this.height = height;
      World.add(world,this.body);
    }
    show()
    {
      var pos = this.body.position;

      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
        rectMode(CENTER);
        fill('black');
        stroke ("grey");
        rect(pos.x,pos.y,this.width, this.height);
    }


}
