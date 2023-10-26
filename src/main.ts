import "./style.css";

let turnoActual: number = 1;

function getTurno(): string {
  if (turnoActual < 10) {
    return "0" + turnoActual;
  }
  return turnoActual.toString();
}

function printTurno(): void {
  let resultadoElement = document.getElementById("numeroTurno");
  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = getTurno();
  }
}

function sumarTurno(): void {
  turnoActual = turnoActual + 1;
  printTurno();
}

function resetTurno(): void {
  turnoActual = 1;
  printTurno();
}

function restarTurno(): void {
  turnoActual = turnoActual - 1;
  printTurno();
}

function numeroOperario(): void {
  let numeroManual = parseInt(
    (document.getElementById("numeroManual") as HTMLInputElement).value
  );
  turnoActual = numeroManual;
  printTurno();
}

const botonAnterior = document.getElementById("anterior");
const botonReset = document.getElementById("reset");
const botonSiguiente = document.getElementById("siguiente");
const botonCambioTurno = document.getElementById("cambiarTurno");

if (botonSiguiente !== null && botonSiguiente !== undefined) {
  botonSiguiente.addEventListener("click", sumarTurno);
}

if (botonAnterior !== null && botonAnterior !== undefined) {
  botonAnterior.addEventListener("click", restarTurno);
}

if (botonReset !== null && botonReset !== undefined) {
  botonReset.addEventListener("click", resetTurno);
}

if (botonCambioTurno !== null && botonCambioTurno !== undefined) {
  botonCambioTurno.addEventListener("click", numeroOperario);
}

printTurno();
