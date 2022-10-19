let btn = document.querySelector("button");
function calcular() {
  const Pi = 3.14;
  let r = document.querySelector("#radio").value;
  let contenido = document.querySelector(".resultado");
  let resultado = Pi * (r * r);

  contenido.textContent = "Área: " + resultado + " m²";
}
btn.addEventListener("click", calcular);
