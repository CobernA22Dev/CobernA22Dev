import { Button } from "../../../../../button.js";
import { Reviver } from "../../../../../reviver.js";

export class Load_Asset_Button extends Button{
    constructor(x, y, length, width, text, upper_tool){
        super(x, y, length, width, text, "main")
        this.assets = {}

        this.load_asset(text, this)
        this.upper_tool = upper_tool
    }

    clicked(display){
        this.upper_tool.set_entities(this.assets) // CONTINUE HERE IMPLEMENT METHOD IN load_assets.js
    }

    load_asset(text, tool){
        readUserData(text).then(function(result){
            var asset = result
            var reviver = new Reviver()
            for (var i in asset){
                asset[i] = reviver.revive(asset[i])
            }
            tool.assets = asset
        })
    }
}