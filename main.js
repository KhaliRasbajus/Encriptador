const textareaEncriptar = document.querySelector(".textarea-encriptar");
const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const botonCopiar = document.querySelector(".boton-copiar");
const textareaEvaluar = document.querySelector(".textarea-evaluar");
const imagenEncontrar = document.querySelector(".contenedor-tarjeta");

function encriptarTexto(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

botonEncriptar.addEventListener("click", () => {
  const texto = textareaEncriptar.value;
  const textoEncriptado = encriptarTexto(texto);
  imagenEncontrar.style.opacity = "0";
  textareaEvaluar.value = textoEncriptado;
});

botonDesencriptar.addEventListener("click", () => {
  const texto = textareaEncriptar.value;
  const textoDesencriptado = desencriptarTexto(texto);
  imagenEncontrar.style.opacity = "0";
  textareaEvaluar.value = textoDesencriptado;
});

botonCopiar.addEventListener("click", () => {
  textareaEvaluar.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
});
