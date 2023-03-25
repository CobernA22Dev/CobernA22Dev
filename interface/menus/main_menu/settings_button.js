import { Button } from "../../button.js";

export class Settings_Button extends Button {
    constructor(x, y, length, width, page){
        super(x, y, length, width, "Settings", page)
    }

    // trigger this when this button is clicked
    clicked(event_handler){
        event_handler.set_page("settings")
    }
}