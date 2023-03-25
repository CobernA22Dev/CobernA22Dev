import { Interactable } from "../../../../interactable.js";
import { Accuracy_Toggle } from "./wall_maker/accuracy_toggle.js";

export class Tool extends Interactable {
    constructor(x, y, length, width, name, page, clicks_until_trigger, display){
        super(x, y, length, width, page)

        this.mouse_clicked = []
        this.clicks_until_trigger = clicks_until_trigger
        this.name = name
        this.display = display // keep a reference to the game display
    
        this.accuracy_rounding = 5 // as accuracy_rounding increases, the walls will snap on more

        this.interactables = [new Accuracy_Toggle(1070, 70, 50, 50, "main", -1),
        new Accuracy_Toggle(1130, 70, 50, 50, "main", 1)]

        // PROBLEMS: Clicks on this one will also count as a click toggle
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
            rect (1100, 30, 120, 20)
            fill ("black")
            text ("Increment: " + this.accuracy_rounding, 1100, 30)
        }

        textSize (24)
    }

    clicked(event_handler){
        event_handler.display.set_tool(this.name)
    }

    mouse_update(x, y, clicked, event_handler, selected) {
        var ret = super.mouse_update(x, y, clicked, event_handler)

        if (ret){
            return true
        }

        if (selected){
            for (var i in this.interactables){
                ret = this.interactables[i].mouse_update(x, y, clicked, this)

                if (ret){
                    return ret
                }
            }
        }

        if (clicked && selected){
            var offset = this.display.get_offset()
            var x_pos = this.round(mouseX - offset.x)
            var y_pos = this.round(mouseY - offset.y)
            this.mouse_clicked.push({x: x_pos, y: y_pos})

            this.trigger_mouse_clicked(event_handler)

            if (this.mouse_clicked.length >= this.clicks_until_trigger) {
                this.trigger_action(event_handler)
                this.mouse_clicked = []
                return ret
            }
        }
    }

    key_pressed(key){
        for (var i in this.interactables){
            this.interactables[i].key_pressed(key)
        }
    }

    trigger_mouse_clicked(event_handler){

    }

    clear_mouse_clicked(){
        this.mouse_clicked = []
    }

    round(num){
        return Math.round(num / (2 ** this.accuracy_rounding)) * (2 ** this.accuracy_rounding)
    }

    trigger_action(event_handler){
        // this is what the tool does
    }
}