export class Interactable {
    constructor(x, y, length, width, page){
        this.x = x;
        this.y = y;
        this.length = length;
        this.width = width;
        this.color = "white"
        this.page = page; // this controls which page the interactable can be seen on
    }

    draw(){

    }

    clicked(event_handler){

    }

    // Run this when the mouse hovers over the button.
    // clicked -> a bool representing whether or not the mouse was clicked
    mouse_update(x, y, clicked, event_handler) {
        if (this.contains(x, y)){
            this.color = "rgb(125, 125, 125)"
            if (clicked){
                this.clicked(event_handler)
                return true
            }
        } else {
            this.color = "rgb(255, 255, 255)"
        }
        return false
    }

    key_pressed(key){
        // Abstract; implement in subclasses
    }

    // This method will check if the x and y coordinate are contained within the button
    contains(x, y){
        if (x >= this.x - this.length/2 && x <= this.x + this.length/2 &&
            y >= this.y - this.width/2 && y <= this.y + this.width/2){
                return true
        } 

        return false
    }
}