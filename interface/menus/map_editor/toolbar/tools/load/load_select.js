import { Interactable } from "../../../../../interactable.js";
import { Load_Level_Button } from "./load_level_button.js";
import { Page_Num_Button } from "./page_num_button.js";

export class Load_Select extends Interactable{
    constructor(x, y, length, width, display, upper_tool){
        super(x, y, length, width, "main")
        this.display = display        
        this.upper_tool = upper_tool

        this.interactables = [new Page_Num_Button(1070, 70, 50, 50, "prev", this, -1),
        new Page_Num_Button(1130, 70, 50, 50, "next", this, 1)]
        
        this.page_num = 0

        this.load(this)
    }
    
    load(load_select){
        readUserData('level_saves').then(function(result){
            var level_saves = result
            var count = 0

            for (var i in level_saves){
                count += 1
                load_select.interactables.push(new Load_Level_Button(load_select.x, 
                    load_select.y + count * 40 - load_select.width/2 + 10, 80, 30, i))

                if (count > 8) {
                    count = 0
                }
            }
        })
    }

    draw(){
        fill(this.color)
        rect(this.x, this.y, this.length, this.width)

        for (var i = this.page_num * 8 + 2; i <= this.page_num * 8 + 10; i ++){
            if (this.interactables[i] != null){
                this.interactables[i].draw()
            }
        }

        this.interactables[0].draw()
        this.interactables[1].draw()

        fill ("white")
        rect (1100, 30, 120, 20)
        fill ("black")
        text ("Page Number: " + this.page_num, 1100, 30)
    }

    mouse_update(x, y, clicked, event_handler, selected) {
        for (var i = 0; i < 2; i ++){
            var ret = this.interactables[i].mouse_update(x, y, clicked, event_handler.display)
                
            if (ret){
                return true
            } 
        }

        for (var i = this.page_num * 8 + 2; i <= this.page_num * 8 + 10; i ++){
            if (this.interactables[i] != null){
                var ret = this.interactables[i].mouse_update(x, y, clicked, event_handler.display)
                
                if (ret){
                    return true
                }
            }
        }
    }

    add_page_num(increment){
        if (this.page_num + increment >= 0)
        this.page_num += increment
    }
}