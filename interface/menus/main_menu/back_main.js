import { Button } from "../../button.js";

export class Back_Main_Button extends Button {
    constructor(x, y, length, width, page){
        super(x, y, length, width, "Back", page)
    }

    // trigger this when this button is clicked
    clicked(event_handler){
        event_handler.set_page("main")
    }
}