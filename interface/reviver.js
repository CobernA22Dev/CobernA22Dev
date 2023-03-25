import { Enemy } from "../entities/mob/enemies/enemy.js";
import { Player } from "../entities/mob/player.js";
import { Spawn } from "../entities/spawnpoint/spawn.js";
import { Wall } from "../entities/walls/wall.js";

export class Reviver{
    constructor(){

    }

    revive(obj){
        switch(obj.type) {
            case "Wall":
                // code block
                obj = Object.assign(new Wall(), obj)
                break;
            case "Player":
                // code block
                obj = Object.assign(new Player(), obj)
                break;
            case "Spawn":
                // code block
                obj = Object.assign(new Spawn(), obj)
                break;
            case "Enemy":
                // code block
                obj = Object.assign(new Enemy(), obj)
                break;
            default:
                // code block
          }

          return obj
    }

}