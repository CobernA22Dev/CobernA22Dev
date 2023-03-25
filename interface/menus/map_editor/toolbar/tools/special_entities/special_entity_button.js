import { Button } from "../../../../../button.js";

export class Special_Entity_Button extends Button{
    constructor(x, y, length, width, entity, upper_tool){
        super(x, y, length, width, entity.type, "main")
        this.upper_tool = upper_tool
        this.entity = entity;
    }

    clicked(display){
        this.upper_tool.set_entity(this.entity) // CONTINUE HERE IMPLEMENT METHOD IN load_assets.js
    }
}