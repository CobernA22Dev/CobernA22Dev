import { Button } from "../../../../../button.js";

export class Page_Num_Button extends Button{
    constructor(x, y, length, width, text, tool, increment){
        super(x, y, length, width, text, "main")
        this.tool = tool
        this.increment = increment
    }

    clicked(display){
        this.tool.add_page_num(this.increment)
    }
}