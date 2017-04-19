class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos() {
    const _this = this
    this.amigos.forEach(function (amigo){
      console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
    })
  }

  listarAmigos2() {
    this.amigos.forEach(function (amigo) {
      console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    }.bind(this))
  }

  listarAmigos3() {
    this.amigos.forEach((amigo) => {
      console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    })
  }
}

const hector = new Persona('Hector', ['Marianays', 'Moises', 'Victor', 'Gaby'])
hector.listarAmigos()
hector.listarAmigos2()
hector.listarAmigos3()