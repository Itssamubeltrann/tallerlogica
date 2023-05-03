
const prom = new Promise((resolve, reject) => {
    let numero = 8
    if (numero % 2 == 0){
        return resolve({ res: "es par"})
}else{
    return reject("es impar")
}
})

prom
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})