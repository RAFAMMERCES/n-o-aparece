class Box 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic: true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    angle = angle = +2;
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill("yellow");
    rect(0, 0, this.w, this.h);
    pop();
  }
}