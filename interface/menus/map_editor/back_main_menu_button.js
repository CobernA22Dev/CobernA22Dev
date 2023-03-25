import { Button } from "../../button.js";

export class Back_Main_Menu_Button extends Button {
    constructor(x, y, length, width, page){
        super(x, y, length, width, "Back", page)
    }

    clicked(event_handler){
        event_handler.set_display("main_menu")
    }
}