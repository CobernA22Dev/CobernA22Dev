import { Interactable } from "../../../interactable.js";
import { Wall_Maker } from "./tools/wall_maker/wall_maker.js";
import { Mover } from "./tools/mover/mover.js";
import { Deleter } from "./tools/deleter/deleter.js";
import { Save } from "./tools/save/save.js";
import { Loader } from "./tools/load/loader.js";
import { Load_Assets } from "./tools/load/load_assets.js";
import { Special_Entity_Maker } from "./tools/special_entities/special_entities_maker.js";

export class Toolbar extends Interactable{
    constructor(x, y, page, display){
        super(x, y, 100, 500, page)

        this.display = display // keep track of the host display

        this.tools = {}
        this.tool_selected = null

        this.add_tool("Wall Maker")
        this.add_tool("Mover")
        this.add_tool("Deleter")
        this.add_tool("Save")
        this.add_tool("Load Levels")
        this.add_tool("Load Assets")
        this.add_tool("Special Entities")
    }

    draw(){
        fill("white")
        rect(this.x, this.y, this.length, this.width)

        fill ("black")
        textSize (12)
        text ("Tool selected:\n" + this.tool_selected,this.x, this.y - this.width/2 + 20)

        for (var i in this.tools){
            var selected = (this.tool_selected == i)
            this.tools[i].draw(selected)
        }
    }

    mouse_update(x, y, clicked, event_handler){
        for (var i in this.tools){
            var selected = (this.tool_selected == i)
            var ret = this.tools[i].mouse_update(x, y, clicked, event_handler, selected)

            if (ret){
                return true
            }
        }
    }

    clicked(){

    }

    set_tool(tool){
        if (this.tool_selected != null){
            this.tools[this.tool_selected].clear_mouse_clicked()
        }
        
        this.tool_selected = tool
    }

    add_tool(tool){
        var x_pos = this.x
        var y_pos = Object.keys(this.tools).length * 40 + this.y - this.width/2 + 50

        var possible_tools = {
            "Wall Maker" : new Wall_Maker(x_pos, y_pos, 80, 30, this.page, this.display),
            "Mover" : new Mover(x_pos, y_pos, 80, 30, this.page, this.display),
            "Deleter" : new Deleter(x_pos, y_pos, 80, 30, this.page, this.display),
            "Save": new Save(x_pos, y_pos, 80, 30, this.page, this.display),
            "Load Levels": new Loader(x_pos, y_pos, 80, 30, this.page, this.display),
            "Load Assets": new Load_Assets(x_pos, y_pos, 80, 30, this.page, this.display),
            "Special Entities": new Special_Entity_Maker(x_pos, y_pos, 80, 30, this.page, this.display)
        }

        this.tools[tool] = possible_tools[tool]
    }

    key_pressed(key){
        for (var i in this.tools){
            this.tools[i].key_pressed(key)
        }
    }
}