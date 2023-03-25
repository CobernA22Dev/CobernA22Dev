import { Button } from "../../button.js";

export class Map_Editor_Button extends Button {
    constructor(x, y, length, width, page){
        super(x, y, length, width, "Map Editor", page)
    }

    clicked(event_handler){
        event_handler.set_display("map_editor")
    }
}