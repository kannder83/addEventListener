let contadorDeClick = 0;
let cuantasVecesDioClick = 0;

const darClick = document
  .getElementById("myBtn")
  .addEventListener("click", cambiarColorDeFondo);

function cambiarColorDeFondo() {
  cuantasVecesDioClick++;
  switch (contadorDeClick) {
    case 0:
      document.getElementById("contenedorPpal").classList.remove("bgRed");
      document.getElementById("contenedorPpal").classList.add("bgPurple");
      contadorDeClick = 1;
      break;
    case 1:
      document.getElementById("contenedorPpal").classList.remove("bgPurple");
      document.getElementById("contenedorPpal").classList.add("bgRed");
      contadorDeClick = 2;
      break;
    case 2:
      document.getElementById("contenedorPpal").classList.remove("bgRed");
      document.getElementById("contenedorPpal").classList.remove("bgPurple");
      contadorDeClick = 0;
      break;
  }
  document.getElementById("muestraContador").innerHTML = cuantasVecesDioClick;
}
