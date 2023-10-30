import "./style.css";

let turnoActual: number = 1;

function getTurno(): string {
  let resultado: string;
  resultado = turnoActual.toString();
  if (turnoActual < 10) {
    resultado = resultado.padStart(2, "0");
    return resultado;
  }
  return resultado;
}

function printTurno(): void {
  let resultadoElement = document.getElementById("numeroTurno");
  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = getTurno();
  }
}

function sumarTurno(): void {
  turnoActual++;
  printTurno();
}

function resetTurno(): void {
  turnoActual = 1;
  printTurno();
}

function restarTurno(): void {
  turnoActual--;
  turnoActual = turnoActual < 0 ? 0 : turnoActual;
  printTurno();
}

function numeroOperario(): void {
  const inputElement = document.getElementById("numeroManual");
  if (inputElement && inputElement instanceof HTMLInputElement) {
    turnoActual = parseInt(inputElement.value);
    printTurno();
  }
}

const botonAnterior = document.getElementById("anterior");
if (botonAnterior && botonAnterior instanceof HTMLButtonElement) {
  botonAnterior.addEventListener("click", restarTurno);
}

const botonReset = document.getElementById("reset");
if (botonReset && botonReset instanceof HTMLButtonElement) {
  botonReset.addEventListener("click", resetTurno);
}

const botonSiguiente = document.getElementById("siguiente");
if (botonSiguiente && botonSiguiente instanceof HTMLButtonElement) {
  botonSiguiente.addEventListener("click", sumarTurno);
}

const botonCambioTurno = document.getElementById("cambiarTurno");
if (botonCambioTurno && botonCambioTurno instanceof HTMLButtonElement) {
  botonCambioTurno.addEventListener("click", numeroOperario);
}

printTurno();
