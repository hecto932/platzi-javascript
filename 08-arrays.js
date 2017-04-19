function suma(...numeros) { // Operador spread ...variable
  return numeros.reduce(function(acum, numero) {
    acum += numero
    return acum
  }, 0)
}

function dobles(...numeros) {
  return numeros.map(numero => numero * 2) 
}

function pares(...numeros) {
  return numeros.filter(numero => numero % 2 === 0)
}

console.log(suma(4, 8, 12, 8954, 7, 9))
console.log(dobles(4, 8, 12, 8954, 7, 9))
console.log(pares(4, 8, 12, 8954, 7, 9))

