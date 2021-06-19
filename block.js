class Block {
    constructor(x, y, color) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, 40, 60, options);
        this.width = 40;
        this.height = 60;
        this.color = color;

        this.visibility = 255;
        
        World.add(world, this.body);
    }

    display() {
        if(this.body.speed < 3){
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            fill(this.color);
            strokeWeight(1.2);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            push();
            World.remove(world, this.body);
            this.visibility-=5;
            tint(255, this.visibility);
            pop();
        }
    }

    score() {
        if(this.visibility < 0 && this.visibility >- 105){
            score++;
        }
    }
}