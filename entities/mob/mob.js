import { Entity } from "../entity.js";

export class Mob extends Entity {
    constructor(x, y, length, width, id, color){
        super(x, y, length, width, id, color)
        
        this.max_stats = {
            "ATK": 0,
            "SPD": 0,
            "DEF": 0,
            "AGL": 0,
            "MANA": 0,
            "HP": 0,
            "VIT": 0,
            "WIS": 0,
            "Jumps": 1,
            "Jump Strength": 20,
        }

        this.stats = {...this.max_stats}

        this.vel = {x: 0, y: 0}
        this.accel = {x: 0, y: 0}
    }

    // command move in a direction
    move(dir){
        // abstract
    }

    jump(){
        if (this.stats["Jumps"] > 0){
            this.accel.y = -this.stats["Jump Strength"]
            this.stats["Jumps"] -= 1
        }
    }

    // default draw them as a rectangle
    draw(x_offset, y_offset){
        fill(this.color)
        rect (this.x + x_offset, this.y + y_offset, this.length, this.width)
    }

    update(display){
        var settings = display.settings

        this.vel.x *= 0.2

        this.vel.x += this.accel.x
        this.vel.y += this.accel.y + settings.gravity
        this.accel.y = 0
        var entities = {...display.game.entities}

        this.y += this.vel.y
        for (var i in entities){
            if (this.overlaps(entities[i])){
                this.vel.y = 0

                if (this.y < entities[i].y){
                    this.y = entities[i].y - entities[i].width/2 - this.width/2
                    this.stats["Jumps"] = this.max_stats["Jumps"]
                } else {
                    this.y = entities[i].y + entities[i].width/2 + this.width/2
                }
                // this.vel.y = 0
            }
        }

        this.x += this.vel.x
        for (var i in entities){
            if (this.overlaps(entities[i])){
                if (this.x < entities[i].x){
                    this.x = entities[i].x - entities[i].length/2 - this.length/2
                } else {
                    this.x = entities[i].x + entities[i].length/2 + this.length/2
                }
                this.vel.x = 0
            }
        }
    }
}