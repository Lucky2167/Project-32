class Ground {
    constructor(x,y,width,height, color1, color2, color3) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.color1 = color1;
      this.color2 = color2;
      this.color3 = color3;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(this.color1, this.color2, this.color3);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };