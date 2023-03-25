import { Enemy } from "../../../../../../entities/mob/enemies/enemy.js"
import { Spawn } from "../../../../../../entities/spawnpoint/spawn.js"
import { Load_Select } from "../load/load_select.js"
import { Special_Entity_Button } from "./special_entity_button.js"

export class Special_Entity_List extends Load_Select{
    constructor(x, y, length, width, display, upper_tool){
        super(x, y, length, width, display, upper_tool)
    }

    load(load_select){
        var special_entities = [new Spawn(), new Enemy()]
        var count = 0

        for (var i in special_entities){
            count += 1
            this.interactables.push(new Special_Entity_Button(this.x, 
                this.y + count * 40 - this.width/2 + 10, 80, 30, special_entities[i], this.upper_tool))

            if (count > 8) {
                count = 0
            }
        }
    }
}