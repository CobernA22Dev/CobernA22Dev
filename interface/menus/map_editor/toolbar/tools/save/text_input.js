import { Interactable } from "../../../../../interactable.js";

export class Text_Input extends Interactable{
    constructor(x, y, length, width, page, input_prompt){
        super(x, y, length, width, page)
        this.input_prompt = input_prompt
        this.selected = false
        this.user_input = ""
    }

    draw(){
        fill(this.color)
        rect(this.x, this.y, this.length, this.width)
        rect(this.x, this.y - this.width/2 - 10, this.length, 20)

        fill("black")
        text(this.input_prompt, this.x, this.y - this.width/2 - 10)
        text(this.user_input, this.x, this.y)
    }

    key_pressed(key){
        // THIS NEEDS A FIX HERE
        if (this.selected){
            if (key == "Backspace"){
                this.user_input = this.user_input.slice(0,-1)
            } else if (key.length == 1) {
                this.user_input += key
            } else if (key == "Enter"){
    
            }
        }
    }

    get_text(){
        return this.user_input
    }

    mouse_update(x, y, clicked, event_handler){

        if (this.contains(x, y)){
            this.color = "rgb(125, 125, 125)"
            if (clicked){
                this.selected = true
                return true
            }
        } else if (clicked && !this.contains(x, y)){
            this.selected = false
        } else {
            this.color = "rgb(255, 255, 255)"
        }
        return false
    }

}