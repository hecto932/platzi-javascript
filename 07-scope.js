/*var nombre = 'Hector'

function saludar() {
  if (true) { // Hoisting
    var nombre = 'Eric'
  }
  console.log(`Hola ${nombre}`)
}

saludar()
console.log(`La variable ${nombre} tiene el valor ${nombre}`)*/

function saludar10(nombre) {
  for(var i = 0; i < 10; ++i) {
    console.log(`Hola ${nombre}`)
  }

  console.log(`${i}`)
}

saludar10('Hector')