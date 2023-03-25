import { Tool } from "../tool.js";


export class Mover extends Tool{
    constructor(x, y, length, width, page, display){
        super(x, y, length, width, "Mover", page, 2, display)

        this.selected_entity = null
    }

    trigger_mouse_clicked(event_handler){
        if (this.mouse_clicked.length == 1){
            this.selected_entity = this.display.pop_entity_coord(this.mouse_clicked[0].x, this.mouse_clicked[0].y)
        }

        if (this.selected_entity == null){
            this.mouse_clicked = []
        }
    }

    draw(selected){
        super.draw(selected)
        // this will need to implement an rgb color picker for the color of the walls

        // implement seeing the shadow of walls
        if (this.selected_entity != null) {
            var offset = this.display.get_offset()
            var current_mouse_x = this.round(mouseX - offset.x)
            var current_mouse_y = this.round(mouseY - offset.y)

            this.selected_entity.set_xy(current_mouse_x, current_mouse_y)

            this.selected_entity.draw(offset.x, offset.y)
        }
    }

    trigger_action(event_handler){
        this.display.add_entity(this.selected_entity, this.selected_entity.id)
        this.selected_entity = null
    }
}