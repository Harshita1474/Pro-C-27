class Roof{
    constructor(x,y){
      
      var options={
        isStatic:true
      }
        
      this.body=Bodies.rectangle(x,y,170,20,options);
      
      this.width=170;
      this.height=20;
      World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("grey");
        rect(0, 0, this.width,this.height);
        pop();
    }
  };