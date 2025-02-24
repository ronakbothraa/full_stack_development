function shape() {
}

shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function circle(radius) {
    this.radius = radius
}
circle.prototype = Object.create(shape.prototype)
circle.prototype.draw = function() {
    console.log('draw')
}
 
const s = new shape()
const c = new circle(3)
