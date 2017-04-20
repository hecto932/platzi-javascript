const hector = {
  nombre: 'Hector',
  apellido: 'Flores'
}

function saludar(veces) {
  for(let i = 0; i < veces; ++i) {
    console.log(`Hola ${this.nombre} ${this.apellido}`)
  }
}

saludar.call(hector, 3)

// Apply - Arguments is an array
// Call - The arguments is separated by comas