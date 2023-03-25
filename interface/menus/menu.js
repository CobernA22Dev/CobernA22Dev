import { Display } from "../display.js"

export class Menu extends Display {
    constructor(x, y, width, height)
    {
        super(x, y, width, height)
        this.interactables = []
        this.static = []
        this.page = "main"
    }

    // draw out all interactables to the screen
    draw(){
        for (var i in this.interactables){
            if (this.interactables[i].page == this.page){
                this.interactables[i].draw()
            }
        }

        for (var i in this.static){
            if (this.static[i].page == this.page){
                this.static[i].draw()
            }
        }
    }

    update(event_handler){
        for (var i in this.interactables){
            var ret = this.interactables[i].mouse_update(mouseX, mouseY, false, event_handler)
            if (ret){
                return
            }
        }
    }

    // update each button based on where the mouse is
    mouse_clicked(event_handler){
        for (var i in this.interactables){
            var ret = this.interactables[i].mouse_update(mouseX, mouseY, true, event_handler)
            if (ret){
                return
            }
        }
    }

    key_pressed(key){

    }
}