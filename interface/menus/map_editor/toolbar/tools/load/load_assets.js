import { Reviver } from "../../../../../reviver.js";
import { Tool } from "../tool.js";
import { Accuracy_Toggle } from "../wall_maker/accuracy_toggle.js";
import { Load_Select_Assets } from "./load_select_assets.js";
import { v4 } from 'https://cdn.skypack.dev/uuid';

export class Load_Assets extends Tool{
    constructor(x, y, length, width, page, display){
        super(x, y, length, width, "Load Assets", page, 1, display)
        this.interactables = [new Accuracy_Toggle(920, 70, 50, 50, "main", -1),
                              new Accuracy_Toggle(980, 70, 50, 50, "main", 1)]
        this.interactables.push(new Load_Select_Assets(1100, 300, 150, 400, display, this))
        this.entities = {}
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

            if (this.entities != {}){
                var x_pos = this.round(mouseX)
                var y_pos = this.round(mouseY)
                for (var i in this.entities){
                    this.entities[i].draw(x_pos, y_pos)
                }
            }
            
        }
    }

    mouse_update(x, y, clicked, event_handler, selected) {
        var ret = super.mouse_update(x, y, clicked, event_handler, selected)
        if (ret){
            return true
        }

        if (clicked && selected){
            var interactables = this.display.interactables
            for (var i in interactables){
                if (interactables[i].contains(mouseX, mouseY)){
                    return false
                }
            }

            if (this.entities != {}){
                var entities = {}
                var reviver = new Reviver()

                for (var i in this.entities){
                    var entity = reviver.revive({...this.entities[i]})
                    
                    var id = v4()
                    entity.id = id
                    entities[id] = entity
                }
                
                var offset_x = this.round(this.display.offset.x)
                var offset_y = this.round(this.display.offset.y)

                var x_pos = this.round(mouseX) - offset_x
                var y_pos = this.round(mouseY) - offset_y
                for (var i in entities){
                    entities[i].x += x_pos
                    entities[i].y += y_pos
                }

                this.display.add_many_entities(entities)
            }
        }
    }

    // clicked(){
    //     if (this.entities != {}){
    //         this.display.add_many_entities(this.entities)
    //     }
    // }

    set_entities(entities){
        this.entities = entities
    }
}