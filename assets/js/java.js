function guardarNota() {
    let tituloNota = document.querySelector("#tituloNota")
    let textoNota = document.querySelector("#notaUsuario")
    if (tituloNota.value == '' || textoNota.value == '') {
        disparaALerta("Por favor diligencia todos los campos del formulario", "#ff0101")
        tituloNota.classList.add("border", "border-danger")
        textoNota.classList.add("border", "border-danger")
    } else {
        let cantidadNotasActuales = 1
        if (localStorage.getItem("cantidad") == null) {
            localStorage.setItem("cantidad", "1")
        } else {
            cantidadNotasActuales = localStorage.getItem("cantidad")
            cantidadNotasActuales = parseInt(cantidadNotasActuales) + 1
            localStorage.setItem("cantidad", cantidadNotasActuales)
        }
        localStorage.setItem(`titulo${cantidadNotasActuales}`, tituloNota.value)
        localStorage.setItem(`nota${cantidadNotasActuales}`, textoNota.value)
        tituloNota.classList.remove("border", "border-danger")
        textoNota.classList.remove("border", "border-danger")
        mostrarNotas()
    }
}

function disparaALerta(mensajeDeAlerta, color) {
    Swal.fire({
        title: 'Por favor diligencia todos los campos del formulario',
        color: color,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

function mostrarNotas() {
    let cantidadNotasActuales = localStorage.getItem("cantidad")
    let divNotas = document.querySelector("#notasGuardadas")
    if (cantidadNotasActuales == null) {
        divNotas.innerHTML = "<h1> No hay ninguna nota...</h1>"
    } else {
        divNotas.innerHTML = ''
        for (let x = 1; x <= cantidadNotasActuales; x++) {
            if (localStorage.getItem(`titulo${x}`) != null) {
            let tituloNota = localStorage.getItem(`titulo${x}`)
            let nota = localStorage.getItem(`nota${x}`)
            divNotas.innerHTML += `
        <div class="row">
        <div class="col mt-5">
        <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title">${tituloNota}</h5>
            <p class="card-text">${nota}</p>
        </div>
        <div class=" container justify-content-center align-items-center">
        <button onclick="editarNotas(${x})"><i class="fa-solid fa-pen" style="color: #4287ff;"></i></button>
        <button onclick="eliminarNotas(${x})" class="container col-2 mb-1 btn btn-danger trashCan"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `
            } 
        }
    }
}
function eliminarNotas(idNota){
    localStorage.removeItem(`titulo${idNota}`)
    localStorage.removeItem(`nota ${idNota}`)
    mostrarNotas()
}
function editarNotas(idNota){
    let tituloNota = document.querySelector("#tituloNota")
    let textoNota = document.querySelector("#notaUsuario")
    tituloNota.value = localStorage.getItem (`titulo ${idNota}`)
    textoNota.value =localStorage.getItem (`nota ${idNota}`)
    document.querySelector("#btnFormulario").removeAttribute("onclick")
    document.querySelector("#btnFormulario").innerHTML = "Editar"
    document.querySelector("#btnFormulario").setAttribute = ("onclick", `guardarCambiosNota(${idNota})`)
}
function guardarCambiosNota(idNotaAEditar) {
    let tituloNota = document.querySelector("#tituloNota")
    let textoNota = document.querySelector("#notaUsuario")
    if (tituloNota.value != '' && textoNota.value != ''){
        localStorage.setItem (`titulo ${idNotaAEditar}`, tituloNota.value)
        localStorage.setItem (`nota ${idNotaAEditar}`, textoNota.value)
        mostrarNotas()
        document.querySelector("#btnFormulario").removeAttribute("onclick")
        document.querySelector("#btnFormulario").innerHTML = "Guardar nota"
        document.querySelector("#btnFormulario").setAttribute("onclick", `guardarNota`)
        tituloNota.value = ''
        textoNota.value = ''
    } else{
        disparaALerta("Por favor diligencia todos los campos del formulario", "#ff0101")
        tituloNota.classList.add("border", "border-danger")
        textoNota.classList.add("border", "border-danger")
    }
}

mostrarNotas()
