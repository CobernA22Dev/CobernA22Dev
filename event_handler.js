import { Game_Display } from "./interface/in_game/game_display.js";
import { Main_Menu } from "./interface/menus/main_menu/main_menu.js";
import { Map_Editor } from "./interface/menus/map_editor/map_editor.js";


export class Event_Handler {
    constructor(width, height){
        this.width = width
        this.height = height
        this.display = new Main_Menu(width, height)
    }

    update(){
        this.display.update(this)
    }

    mouse_clicked(){
        this.display.mouse_clicked(this)
    }

    draw(){
        this.display.draw()
    }

    set_page(page){
        this.display.page = page
    }

    set_display(display_name){
        var display_dict = {
            "map_editor" : new Map_Editor(this.width, this.height),
            "main_menu" : new Main_Menu(this.width, this.height),
            "in_game": new Game_Display(this.width, this.height)
        }

        this.display = display_dict[display_name]
    }

    key_pressed(){
        this.display.key_pressed(key)
    }
}