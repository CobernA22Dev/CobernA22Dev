export class Entity {
    constructor(x, y, length, width, id, color){
        this.x = x
        this.y = y
        this.length = length
        this.width = width
        this.color = color
        this.id = id
        this.shape = "rect"

        this.type = "Entity"
    }

    update(game){
        // abstract
    }

    load(game){
        // abstract
    }

    draw(x_offset, y_offset){
        // abstract
    }

    set_xy(x, y){
        this.x = x
        this.y = y
    }

    overlaps(entity){
        if (entity.shape == "rect"){
            return this.rectRectDetect(this, entity) && this != entity
        }
    }

    rectCircDetect(rect, circle){
        var leftSide = rect.x;
        var rightSide = rect.x + rect.length;
        var topSide = rect.y;
        var botSide = rect.y + rect.width;
        if (circle.x + circle.r/2 > leftSide && circle.x - circle.r/2 < rightSide && circle.y + circle.r/2> topSide && circle.y - circle.r/2< botSide){
            return true;
        } else {
            return false;
        }
    }
    rectRectDetect(rect, rect2){
        var leftSide = rect.x - rect.length/2;
        var rightSide = rect.x + rect.length/2;
        var topSide = rect.y - rect.width/2;
        var botSide = rect.y + rect.width/2;
        var in_between_left_right = rect2.x + rect2.length/2 > leftSide && rect2.x - rect2.length/2 < rightSide 
        var in_between_top_bot = rect2.y + rect2.width/2> topSide && rect2.y - rect2.width/2 < botSide
        if (in_between_left_right && in_between_top_bot){
            return true;
        } else {
            return false;
        }
    }
}