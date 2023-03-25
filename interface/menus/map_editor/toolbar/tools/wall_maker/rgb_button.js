import { Button } from "../../../../../button.js"

export class Rgb_Button extends Button{
    constructor(x, y, length, width, text, page){
        super(x, y, length, width, text, page)
        this.color_value = 255
        this.slider_point = this.x + this.length/2
    }

    clicked(tool){
        var x = mouseX
        this.slider_point = x
        var point_clicked = (x - this.x + this.length/2)/this.length // range from 0 to 1 indicating where on the button was clicked

        this.color_value = 255 * point_clicked
        return true
    }

    draw(){
        super.draw()
        
        fill("white")
        rect(this.slider_point, this.y, 10, this.width)
    }

    get_color_val(){
        return this.color_value
    }
}