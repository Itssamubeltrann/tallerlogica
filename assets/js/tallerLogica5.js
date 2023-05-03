const numero = parseInt(prompt("Ingresa un numero"))
let totalOperacion = 0;
if(numero == null){
}else{ for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    totalOperacion += resultado;
}
console.log(`${totalOperacion}`)
}