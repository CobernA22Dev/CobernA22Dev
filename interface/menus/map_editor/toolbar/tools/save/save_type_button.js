import { Button } from "../../../../../button.js"


export class Save_Type_Button extends Button {
    constructor(x, y, length, width, text, upper_tool){
        super(x, y, length, width, text, "main")
        this.upper_tool = upper_tool
        this.save_types = ["level_saves", "asset_saves"]
        this.save_index = 0
    }

    // trigger this when this button is clicked
    clicked(event_handler){
        this.save_index += 1
        this.save_index = this.save_index % this.save_types.length
        this.upper_tool.save_type = this.save_types[this.save_index]
    }

    draw(){
        fill(this.color)
        rect(this.x, this.y, this.length, this.width)
        rect(this.x, this.y - this.width/2 - 10, this.length, 20)

        fill("black")
        text(this.text, this.x, this.y - this.width/2 - 10)
        text(this.save_types[this.save_index], this.x, this.y)
    }
}