class Box {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    show() {
        imageMode(CENTER)
        push()
        fill("brown")
        rect(this.x, this.y, this.w, this.h)
        pop()
    }
}
