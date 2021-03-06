/*function Punto(x, y) {
  this.x = x
  this.y = y
}

Punto.prototype.moverEnX = function moverEnX(x) { this.x += x }
Punto.prototype.moverEnY = function moverEnY(y) { this.y += y }
Punto.prototype.distancia = function distancia(p) {
  const x = p1.x - p2.x 
  const y = p1.y - p2.y

  return Math.sqrt(x * x + y * y)
}*/

/*const Punto = {
  init: function init(x, y) {
    this.x = x
    this.y = y
  },
  moverEnX: function moverEnX(x) {
    this.x += x
  },
  moverEnY: function moverEnY(y) {
    this.y += y
  },
  distancia: function distancia(p) {
    const x = p1.x - p2.x 
    const y = p1.y - p2.y

    return Math.sqrt(x * x + y * y)
  }
}*/

class Punto {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  moverEnX(x) {
    this.x += x
  }

  moverEnY(y) {
    this.y += y
  }

  distancia(p) {
    const x = p1.x - p2.x 
    const y = p1.y - p2.y

    return Math.sqrt(x * x + y * y)
  }
}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))