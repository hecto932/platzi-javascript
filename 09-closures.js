function saludarFamilia(apellido) {
  return function saludarMiembroDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

const saludarFlores = saludarFamilia('Flores')
const saludarPerez = saludarFamilia('Perez')
const saluarRomero = saludarFamilia('Romero')

/*function saludarFlores(nombre) {
  console.log(`Hola ${nombre} Flores`)
}

function saludarPerez(nombre) {
  console.log(`Hola ${nombre} Perez`)
}*/

saludarFlores('Hector')
saludarFlores('Leslie')

saludarPerez('Dario')
saludarPerez('Julieta')
saludarPerez('Rodrigo')

function makePrefixer(prefijo) {
  return function (palabra) {
    console.log(`${prefijo}${palabra}`)
  }
}

const prefijoRe = makePrefixer('in')

prefijoRe('creible')