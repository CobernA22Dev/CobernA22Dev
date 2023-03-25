import { Button } from "../../button.js";

export class Play_Button extends Button {
    constructor(x, y, length, width, page){
        super(x, y, length, width, "Play", page)
    }

    clicked(event_handler){
        event_handler.set_display("in_game")
    }
}