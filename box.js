class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      if(this.body.speed<7){
      
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ("white")
      strokeWeight(4)
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
    World.remove(world,this.body)
    push();
    this.visibility=this.visibility-1;
    pop();
    }
  }
  };