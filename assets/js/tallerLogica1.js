

function operacionMatematica(){
    let introducirNumero = document.querySelector("#numeroDelUsuario")
    if(introducirNumero.value != ''){
        let sumatoria = 0
        for(let x=1; x<= introducirNumero.value; x++){
            sumatoria=sumatoria+x
            console.log(sumatoria)
        }
        let resultados = document.querySelector("#resultadosGuardados")
        resultados = alert(`Su resultado es ${sumatoria}`)
        console.log(resultados)
    }

}