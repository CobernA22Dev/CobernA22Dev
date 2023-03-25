import { Button } from "../../../../../button.js"


export class Save_Button extends Button {
    constructor(x, y, length, width, text, upper_tool){
        super(x, y, length, width, text, "main")
        this.upper_tool = upper_tool
    }

    // trigger this when this button is clicked
    clicked(event_handler){
        this.upper_tool.save_file()
    }
}