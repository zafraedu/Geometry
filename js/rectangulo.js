let btn = document.querySelector("button");
function calcular() {
  let b = document.querySelector("#base").value;
  let h = document.querySelector("#altura").value;
  let contenido = document.querySelector(".resultado");
  let resultado = b * h;
  contenido.textContent = "Área: " + resultado + " m²";
}
btn.addEventListener("click", calcular);
