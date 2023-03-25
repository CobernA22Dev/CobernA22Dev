import { Entity } from "../entity.js";
import { Player } from "../mob/player.js";

export class Spawn extends Entity {
    constructor(x, y, id){
        super(x, y, 50, 50, id, "rgb(161, 91, 168)")
        this.type = "Spawn"
    }

    draw(x_offset, y_offset){
        fill(this.color)
        rect (this.x + x_offset, this.y + y_offset, this.length, this.width)
        fill("black")
        text("Player\nSpawn", this.x + x_offset, this.y + y_offset)
    }

    contains(x, y){
        if (x >= this.x - this.length/2 && x <= this.x + this.length/2 &&
            y >= this.y - this.width/2 && y <= this.y + this.width/2){
                return true
        } 
        return false
    }

    load(game){
        game["entities"]["Player"] = new Player(this.x, this.y)
        delete game["entities"][this.id]
    }
}