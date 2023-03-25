import { Load_Asset_Button } from "./load_asset_button.js";
import { Load_Select } from "./load_select.js";

export class Load_Select_Assets extends Load_Select{
    constructor(x, y, length, width, display, upper_tool){
        super(x, y, length, width, display)
        this.upper_tool = upper_tool
    }

    load(load_select){
        var self = this
        readUserData('asset_saves').then(function(result){
            var asset_saves = result
            var count = 0

            for (var i in asset_saves){
                count += 1
                load_select.interactables.push(new Load_Asset_Button(load_select.x, 
                    load_select.y + count * 40 - load_select.width/2 + 10, 80, 30, i, self.upper_tool))

                if (count > 8) {
                    count = 0
                }
            }
        })
    }
}