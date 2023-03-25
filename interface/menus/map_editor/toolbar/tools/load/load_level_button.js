import { Button } from "../../../../../button.js";

export class Load_Level_Button extends Button{
    constructor(x, y, length, width, text){
        super(x, y, length, width, text, "main")
    }

    clicked(display){
        display.load_level(this.text, display)
    }
}