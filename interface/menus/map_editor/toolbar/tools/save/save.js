import { Tool } from "../tool.js";
import { Save_Button } from "./save_button.js";
import { Save_Type_Button } from "./save_type_button.js";
import { Text_Input } from "./text_input.js";


export class Save extends Tool{
    constructor(x, y, length, width, page, display){
        super(x, y, length, width, "Save", page, 1, display)
        this.interactables.push(new Save_Button(1100, 350, 100, 50, "Save", this))
        this.interactables.push(new Save_Type_Button(1100, 450, 100, 50, "Save Type", this))
        this.interactables.push(new Text_Input(1100, 250, 100, 50, "main", "Save File Name:"))

        this.save_type = "level_saves"
    }

    trigger_action(event_handler){

        // var entities = this.display.get_entities()
        // var file_name = "save_file.txt"
        // var myFile = new File([`${JSON.stringify(entities)}`], file_name, {
        //     type: "text/plain",
        //   });
        // downloadFile(myFile, file_name);
    }
 
    save_file(){
        if (this.save_type == "asset_saves"){
            this.prep_save_assets()
        }

        var file_name = this.interactables[this.interactables.length-1].get_text()
        writeUserData(file_name, this.display.dict_to_add_to["entities"])
        writeUserData(file_name + "_background", this.display.dict_to_add_to["background"])

        var dict = {}
        dict[file_name] = 1

        updateUserData(this.save_type, dict)
        //set_before[file_name] = file_name
        //writeUserData('level_saves', set_before)
    }

    prep_save_assets(){
        // Todo here: get the top left and bottom right of the entities
        // find center
        let entities = this.display.entities
        var asset_info = {x: 10000, y: 10000, bot_x: -10000, bot_y: -10000}

        for (var i in entities){
            if (entities[i].x - entities[i].length/2 < asset_info.x){
                asset_info.x = entities[i].x - entities[i].length/2
            }

            if (entities[i].y - entities[i].width/2 < asset_info.y){
                asset_info.y = entities[i].y - entities[i].width/2
            }

            if (entities[i].x + entities[i].length/2 > asset_info.bot_x){
                asset_info.bot_x = entities[i].x + entities[i].length/2
            }

            if (entities[i].y + entities[i].width/2 > asset_info.bot_y){
                asset_info.bot_y = entities[i].y + entities[i].width/2
            }
        }

        asset_info.center_x = (asset_info.bot_x + asset_info.x)/2
        asset_info.center_y = (asset_info.bot_y + asset_info.y)/2

        for (var i in entities){
            entities[i].x -= asset_info.center_x
            entities[i].y -= asset_info.center_y
        }
    }
}
