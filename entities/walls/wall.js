import { Entity } from "../entity.js";

export class Wall extends Entity {
    constructor(x, y, length, width, id, color){
        super(x, y, length, width, id, color)
        this.type = "Wall"
    }

    draw(x_offset, y_offset){
        fill(this.color)
        rect (this.x + x_offset, this.y + y_offset, this.length, this.width)
    }

    // This method will check if the x and y coordinate are contained within the button
    contains(x, y){
        if (x >= this.x - this.length/2 && x <= this.x + this.length/2 &&
            y >= this.y - this.width/2 && y <= this.y + this.width/2){
                return true
        } 

        return false
    }
}