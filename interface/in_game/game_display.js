
import { Player } from "../../entities/mob/player.js";
import { Wall } from "../../entities/walls/wall.js";
import { Display } from "../display.js";
import { Level_Loader } from "./level_loader.js";

export class Game_Display extends Display{
    constructor(width, height){
        super(0, 0, width, height)

        this.game = {"entities": 
                                {"Player": new Player(this.width/2, this.height/2),
                                "test_wall": new Wall(this.width/2, this.height/2 + 40, 1000, 20, "test_wall", "white"),
                                "test_wall_vert": new Wall(this.width/2 + 100, this.height/2, 30, 30, "test_wall_vert", "white")},
                    "background": {}
                    }

        this.settings = {
            gravity: 1
        }

        this.offset = {x: 0, y: 0}
        this.level_loader = new Level_Loader(this)
        
    }

    draw(){
        for (var frame in this.game){
            for (var id in this.game[frame]){
                this.game[frame][id].draw(this.offset.x, this.offset.y)
            }
        }
    }

    mouse_clicked(event_handler){

    }

    center(character_name){
        if (character_name == null){
            if ("Player" in this.game.entities){
                this.offset.x = this.width/2 - this.game.entities["Player"].x
                this.offset.y = this.height/2 - this.game.entities["Player"].y
            }
        }
    }

    update(event_handler){
        for (var i in this.game["entities"]){
            this.game["entities"][i].update(this)
        }
        this.center()
    }

    key_pressed(key){
        if ("Player" in this.game["entities"]){
            this.game["entities"]["Player"].key_pressed(key)
        }
    }
}