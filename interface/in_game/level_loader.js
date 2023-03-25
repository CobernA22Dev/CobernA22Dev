import { Reviver } from "../reviver.js";

export class Level_Loader {
    constructor(game_display){
        this.game_display = game_display
        this.load_level("testing_level", this.game_display)
    }

    load_level(level_name, display){
        readUserData(level_name).then(function(result){
            var contents = result
            var reviver = new Reviver()
            for (var i in contents){
                contents[i] = reviver.revive(contents[i])
            }

            display.game["entities"] = contents

            for (var entity in display.game["entities"]){
                display.game["entities"][entity].load(display.game)
            }
        })

        readUserData(level_name + "_background").then(function(result){
            var contents = result
            var reviver = new Reviver()
            for (var i in contents){
                contents[i] = reviver.revive(contents[i])
            }

            display.game["background"] = contents
        })
    }
}