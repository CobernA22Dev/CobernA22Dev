import { Tool } from "../tool.js";
import { Load_Select } from "./load_select.js";

export class Loader extends Tool{
    constructor(x, y, length, width, page, display){
        super(x, y, length, width, "Load Levels", page, 1, display)
        this.interactables = []
        this.interactables.push(new Load_Select(1100, 300, 150, 400, "main", display))
    }

    draw(selected){
        fill(this.color)
        rect(this.x, this.y, this.length, this.width)
        fill("black")
        textSize (12)
        text (this.name, this.x, this.y)

        if (selected){
            for (var i in this.interactables){
                this.interactables[i].draw()
            }
        }
    }
}