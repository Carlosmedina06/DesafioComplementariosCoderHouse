//Contar de dos en dos.
let numero = parseInt(prompt('por favor ingresa un numero con el que quiere empezar a contar'))
let distanciaAContar = parseInt(prompt('por favor ingrese cuantas veces quiere contar'))
for (let i = 0; i <  distanciaAContar ; i++) {
    let resultado = numero + i * 2;
    console.log(resultado)
    }


