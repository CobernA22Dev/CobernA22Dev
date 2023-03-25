import { Reviver } from "../../../../../reviver.js";
import { Tool } from "../tool.js";
import { Accuracy_Toggle } from "../wall_maker/accuracy_toggle.js";
import { Special_Entity_List } from "./special_entity_list.js";
import { v4 } from 'https://cdn.skypack.dev/uuid';

export class Special_Entity_Maker extends Tool{
    constructor(x, y, length, width, page, display){
        super(x, y, length, width, "Special Entities", page, 1, display)
        this.interactables = [new Accuracy_Toggle(920, 70, 50, 50, "main", -1),
                                new Accuracy_Toggle(980, 70, 50, 50, "main", 1)]
        this.interactables.push(new Special_Entity_List(1100, 300, 150, 400, display, this))
        
        this.entity = null;
    }

    set_entity(entity){
        this.entity = entity
    }

    draw(selected){
        fill(this.color)
        rect(this.x, this.y, this.length, this.width)
        fill("black")
        textSize (12)
        text (this.name, this.x, this.y)

        if (selected){
            for (var i in this.interactables){
                this.interactables[i].draw()
            }

            fill ("white")
            rect (950, 30, 120, 20)
            fill ("black")
            text ("Increment: " + this.accuracy_rounding, 950, 30)

            if (this.entity != null){
                var offset = this.display.get_offset()
                var current_mouse_x = this.round(mouseX - offset.x)
                var current_mouse_y = this.round(mouseY - offset.y)

                this.entity.set_xy(current_mouse_x, current_mouse_y)

                this.entity.draw(offset.x, offset.y)
            }
            
        }
    }

    trigger_action(event_handler){
        var id = v4()
        var reviver = new Reviver()
        var entity = reviver.revive({...this.entity})
        entity.id = id

        this.display.add_entity(entity, entity.id)
    }

    // TODO NEXT: make it so you can add special entities
}