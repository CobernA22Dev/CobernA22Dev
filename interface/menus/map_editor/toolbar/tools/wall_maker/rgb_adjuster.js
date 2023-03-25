import { Button } from "../../../../../button.js"
import { Rgb_Button } from "./rgb_button.js"

export class Rgb_Adjuster extends Button{
    constructor(x, y, length, width, page){
        super(x, y, length, width, "Undo", page)
        this.rgb_value = "rgb(255, 255, 255)"

        this.extended_buttons = {
            "r" : new Rgb_Button(this.x, this.y - 110, 80, 20, "red", "main"),
            "g" : new Rgb_Button(this.x, this.y - 80, 80, 20, "green","main"),
            "b" : new Rgb_Button(this.x, this.y - 50, 80, 20, "blue","main"),
        }
    }

    clicked(tool){
        // does nothing when clicked
        return true
    }

    mouse_update(x, y, clicked, event_handler){
        for (var i in this.extended_buttons){
            var ret = this.extended_buttons[i].mouse_update(x, y, clicked, event_handler)

            if (ret) {
                this.update_rgb()
                return true
            }
        }
    }

    update_rgb(){
        var r = Math.round(this.extended_buttons["r"].get_color_val())
        var g = Math.round(this.extended_buttons["g"].get_color_val())
        var b = Math.round(this.extended_buttons["b"].get_color_val())

        this.rgb_value = "rgb(" + r + "," + g + "," + b + ")"
    }

    get_rgb(){
        return this.rgb_value
    }

    get_rgba(){
        var r = Math.round(this.extended_buttons["r"].get_color_val())
        var g = Math.round(this.extended_buttons["g"].get_color_val())
        var b = Math.round(this.extended_buttons["b"].get_color_val())

        return "rgba(" + r + "," + g + "," + b + ","
    }

    draw(){
        for (var i in this.extended_buttons){
            this.extended_buttons[i].draw()
        }

        fill(this.rgb_value)
        rect(this.x, this.y, this.length, this.width)
    }
}