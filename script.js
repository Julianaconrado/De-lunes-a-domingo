// Lista de frases originales divididas por partes que suenan bien al combinar
const frases = [
  "Lunes de lluvia",
  "Miércoles de sol",
  "El viernes te veo",
  "El domingo te escribo",
  "Martes sin ganas",
  "El jueves todo mejora",
  "El sábado es mi día",
  "El lunes me siento libre",
  "No me busques el jueves",
  "Mejor el miércoles o el sábado",
  "Miércoles de trabajo",
  "Viernes de fiesta",
  "Domingo de descanso",
  "El lunes lo pienso",
  "El martes lo hago",
  "Solo quiero que sea viernes",
  "El miércoles me siento feliz"
];

// Función para seleccionar varias frases aleatorias sin repetir
function obtenerFrasesAleatorias(cantidad) {
  const copia = [...frases];
  const seleccionadas = [];

  for (let i = 0; i < cantidad && copia.length > 0; i++) {
    const indice = Math.floor(Math.random() * copia.length);
    seleccionadas.push(copia.splice(indice, 1)[0]);
  }

  return seleccionadas;
}

// Selecciona 2 o 3 frases aleatorias y las muestra
window.onload = function () {
  const cantidad = Math.floor(Math.random() * 2) + 2; // 2 o 3 frases
  const resultado = obtenerFrasesAleatorias(cantidad).join(", ") + ".";
  document.getElementById("frase").innerText = resultado;
};