let btn = document.querySelector("button");
function calcular() {
  let lado = document.querySelector("#lado").value;
  let contenido = document.querySelector(".resultado");
  let resultado = lado * lado;
  contenido.textContent = "Área: " + resultado + " m²";
}
btn.addEventListener("click", calcular);
