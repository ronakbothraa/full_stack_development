function shape() {
}

shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function circle() {
    this.radius = 1
}
circle.prototype = Object.create(shape.prototype)
circle.prototype.draw = function() {
    console.log('draw')
}

const s = new shape()
const c = new circle()
