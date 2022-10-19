let btn = document.querySelector("button");
function calcular() {
  let b1 = document.querySelector("#base1").value;
  let b2 = document.querySelector("#base2").value;
  let h = document.querySelector("#altura").value;
  let contenido = document.querySelector(".resultado");
  let resultado = (b1 * b2 * h) / 2;
  contenido.textContent = "Área: " + resultado + " m²";
}
btn.addEventListener("click", calcular);
