
function mostrarDatos() {
    let edad = document.querySelector("#edad_usuario").value;
    if (edad < 10) {
      let premioNiños = document.querySelector(".mostrar_premios");
      premioNiños.innerHTML += `<h1 class="notitaPremio">¡Felicidades! Te has ganado un juguito</h1>`;
    } else if (edad >= 18) {
      let genero = confirm("¿eres hombre?");
      if (genero) {
        let premioNiños = document.querySelector(".mostrar_premios");
        premioNiños.innerHTML += `<h1 class="notitaPremio">¡Felicidades! has ganado una pizza de tres carnes y una cerveza</h1>`;
      } else {
        let premioNiños = document.querySelector(".mostrar_premios");
        premioNiños.innerHTML += `<h1 class="notitaPremio">¡Felicidades! has ganado una pizza hawaiana y una cerveza</h1>`;
      }
    }
  }
