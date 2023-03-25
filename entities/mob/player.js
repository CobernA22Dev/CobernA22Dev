import { Mob } from "./mob.js";

export class Player extends Mob {
    constructor(x, y){
        super(x, y, 25, 40, "player", "white")
        this.type = "Player"
    }

    // command move in a direction
    move(dir){
        var w = 87
        var s = 83
        var a = 65
        var d = 68
        
        if (keyIsDown(a)){
            this.accel.x = -5
        } else if (keyIsDown(d)){
            this.accel.x = 5
        } else {
            this.accel.x = 0
        }

        
    }

    update(display){
        super.update(display)
        this.move()
    }

    // PROBLEM HERE! START HERE AND FIX JUMPING!
    key_pressed(key){
        if (key == "w"){
            this.jump()
        }
    }
}