import { Interactable } from "./interactable.js";

export class Button extends Interactable{
    constructor(x, y, length, width, text, page){
        super(x, y, length, width, page)
        this.text = text
        this.color = "rgb(255, 255, 255)"
    }

    // This will display the button to the screen
    draw(){
        fill(this.color)
        rect(this.x, this.y, this.length, this.width)
        fill("black")
        text(this.text, this.x, this.y)
    }

    // Run this when the button is clicked
    clicked(event_handler){
        // Abstract
    }
}