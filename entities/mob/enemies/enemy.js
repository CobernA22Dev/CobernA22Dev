import { Mob } from "../mob.js";

export class Enemy extends Mob {
    constructor(x, y, id){
        super(x, y, 25, 40, id, "red")
        this.type = "Enemy"
    }
}