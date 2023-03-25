import { Reviver } from "../../reviver.js";
import { Menu } from "../menu.js";
import { Back_Main_Menu_Button } from "./back_main_menu_button.js";
import { Edit_Type_Button } from "./edit_type_button.js";
import { Toolbar } from "./toolbar/toolbar.js";

export class Map_Editor extends Menu{
    constructor(width, height){
        super(0, 0, width, height)

        // back to menu button
        this.interactables.push(new Back_Main_Menu_Button(this.x + 35, this.y + 15, 70, 30, "main"))
        this.interactables.push(new Edit_Type_Button(this.width - 100, this.height - 50, 100, 40, "Depth", this))
        this.interactables.push(new Toolbar(this.x + 100, this.height/2, "main", this))
        
        this.offset = {
            x: 0,
            y: 0
        }

        this.dict_to_add_to = {"entities": {}, "background": {}}
        this.dict_index = "entities"
    }

    update(event_handler){
        super.update(event_handler)
        
        var w = 87
        var s = 83
        var a = 65
        var d = 68

        if (keyIsDown(w)){
            this.offset.y += 3
        } else if (keyIsDown(s)){
            this.offset.y -= 3
        } 
        
        if (keyIsDown(a)){
            this.offset.x += 3
        } else if (keyIsDown(d)){
            this.offset.x -= 3
        } 
    }

    draw(){

        for (var i in this.dict_to_add_to){
            for (var c in this.dict_to_add_to[i]){
                this.dict_to_add_to[i][c].draw(this.offset.x, this.offset.y)
            }
        }
        
        super.draw()
    }

    set_tool(tool){
        this.interactables[this.interactables.length-1].set_tool(tool) // the last element of map editor is the toolbox
    }

    add_entity(entity, id){
        this.dict_to_add_to[this.dict_index][id] = entity
    }

    add_many_entities(entities){
        this.dict_to_add_to[this.dict_index] = {...this.dict_to_add_to[this.dict_index], ...entities}
    }

    remove_entity(id){
        for (var i in this.dict_to_add_to){
            if (id in this.dict_to_add_to[i]){
                delete this.dict_to_add_to[i][id]
                return
            }
        }
    }

    get_entities(){
        return this.dict_to_add_to["entities"]
    }

    remove_entity_coord(x, y){
        for (var i in this.dict_to_add_to[this.dict_index]){
            if (this.dict_to_add_to[this.dict_index][i].contains(x, y)){
                delete this.dict_to_add_to[this.dict_index][i]
                return
            }
        }
    }

    get_offset(){
        return this.offset
    }

    pop_entity_coord(x, y){
        let entities = this.dict_to_add_to[this.dict_index]

        for (var i in entities){
            if (entities[i].contains(x, y)){
                var obj = entities[i]
                delete entities[i]
                return obj
            }
        }
    }

    key_pressed(key){
        for (var i in this.interactables){
            this.interactables[i].key_pressed(key)
        }
    }

    load_level(level_name, display){
        readUserData(level_name).then(function(result){
            var contents = result
            var reviver = new Reviver()
            for (var i in contents){
                contents[i] = reviver.revive(contents[i])
            }

            display.dict_to_add_to["entities"] = contents
        })

        readUserData(level_name + "_background").then(function(result){
            var contents = result
            var reviver = new Reviver()
            for (var i in contents){
                contents[i] = reviver.revive(contents[i])
            }

            display.dict_to_add_to["background"] = contents
        })
    }
}