import {Menu} from "../menu.js"
import { Back_Main_Button } from "./back_main.js"
import {Play_Button} from "./play_button.js"
import {Settings_Button} from "./settings_button.js"
import {Text} from "../../text_box.js"
import { Map_Editor_Button } from "./map_editor_button.js"

export class Main_Menu extends Menu {
    constructor(width, height){
        super(0, 0, width, height)
        // Main
        this.interactables.push(new Play_Button(this.x + this.width/2, this.y + this.height/2 - 100, 200, 50, "main"))
        this.interactables.push(new Map_Editor_Button(this.x + this.width/2, this.y + this.height/2, 200, 50, "main"))
        this.interactables.push(new Settings_Button(this.x + this.width/2, this.y + this.height/2 + 100, 200, 50, "main"))

        // Settings
        this.interactables.push(new Back_Main_Button(this.x + 150, this.y + 75, 200, 50, "settings"))
        this.static.push(new Text(this.x + this.width/2, this.y + this.height/2, "Welcome to the settings!", "settings", "black"))
    }
}