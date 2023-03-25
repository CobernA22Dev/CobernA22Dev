import { Button } from "../../../../../button.js"

export class Undo_Button extends Button{
    constructor(x, y, length, width, page){
        super(x, y, length, width, "Undo", page)
    }

    clicked(tool){
        tool.undo_action()
    }
}