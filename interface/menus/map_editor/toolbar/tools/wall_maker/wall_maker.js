import { v4 } from 'https://cdn.skypack.dev/uuid';
import { Wall } from "../../../../../../entities/walls/wall.js";
import { Tool } from "../tool.js";
import { Rgb_Adjuster } from './rgb_adjuster.js';
import { Undo_Button } from './undo_button.js';


export class Wall_Maker extends Tool{
    constructor(x, y, length, width, page, display){
        super(x, y, length, width, "Wall Maker", page, 2, display)

        this.interactables.push(new Undo_Button(1100, 150, 50, 50, "main"))
        this.interactables.push(new Rgb_Adjuster(1100, 300, 50, 50, "main"))

        this.last_added_ids = []
        this.rgba_color = "rgba(255, 255, 255)"
    }

    undo_action(){
        if (this.last_added_ids.length > 0){
            this.display.remove_entity(this.last_added_ids.pop())
        }
    }

    trigger_action(event_handler){
        var rect = this.get_rect(this.mouse_clicked[0].x, this.mouse_clicked[0].y, this.mouse_clicked[1].x, this.mouse_clicked[1].y)
        var random_id = v4()

        var rgba_text = this.interactables[this.interactables.length-1].get_rgba()
        if (this.display.dict_index == 'background'){
            rgba_text = rgba_text + "0.5)"
        } else {
            rgba_text = rgba_text + "1)"
        }
        this.display.add_entity(new Wall(rect.x, rect.y, rect.length, rect.width, random_id, rgba_text), random_id)
        this.last_added_ids.push(random_id)
    }

    // given the coordinates of the top left and bottom right point, return the rectangle's x, y, length, width
    get_rect(x1, y1, x2, y2){
        var length = Math.abs(x2 - x1)
        var width = Math.abs(y2 - y1)

        var x_pos = Math.min(x1, x2)
        var y_pos = Math.min(y1, y2)

        return {x: x_pos + length/2, y: y_pos + width/2, length: length, width: width}
    }

    draw(selected){
        super.draw(selected)
        // this will need to implement an rgb color picker for the color of the walls

        // implement seeing the shadow of walls
        if (selected){
            if (this.mouse_clicked.length == 1) {
                var offset = this.display.get_offset()
                var current_mouse_x = this.round(mouseX - offset.x)
                var current_mouse_y = this.round(mouseY - offset.y)
                var Rect = this.get_rect(this.mouse_clicked[0].x, this.mouse_clicked[0].y, current_mouse_x, current_mouse_y)

                var rgba_text = this.interactables[this.interactables.length-1].get_rgba()
                this.rgba_color = rgba_text + "1)"

                var rgba_color_to_shadow = rgba_text + "0.5)"

                fill(rgba_color_to_shadow)
                rect(Rect.x + offset.x, Rect.y + offset.y, Rect.length, Rect.width)
            }
        }
    }
}