export class Text {
    constructor(x, y, text, page, color){
        this.x = x
        this.y = y
        this.text = text
        this.page = page
        this.color = color
    }

    draw(){
        fill("white")
        text(this.text, this.x, this.y)
    }
}