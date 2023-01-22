let suma;
let resta, multiplicacion, division;
let numeroUno, numeroDos;
let resultado = document.getElementById("resultado");

console.log(resultado);

//function saludar() {
resultado.innerHTML = "Hola usuario";

function iniciar() {
  numeroUno = parseFloat(prompt("Ingrese un numero :"));
  numeroDos = parseFloat(prompt("Ingrese otro numero :"));
  console.log(numeroUno, numeroDos);
}

function validar() {
  if (isNaN(numeroUno) || isNaN(numeroDos)) {
    alert("Debe ingresar un valor numérico");
  } else if (numero1 == "" || numero2 == "") {
    alert("Debe completar ambos valores");
  }
}

function sumar() {
  //Validación con un if
  //true / false
  if (numeroUno == undefined && numeroDos == undefined) {
    alert("Es necesario llenar el dato, click en Iniciar Cálculos");
  } else {
    suma = numeroUno + numeroDos;
    resultado.innerHTML = `El resultado de la suma es: ${suma}`;
    console.log("EL resultado de la suma es " + suma);
  }
}

function restar() {
  {
    validar();
  }
  resta = numeroUno - numeroDos;
  console.log(`el resultado de la resta es` + resta);
  resultado.innerHTML = `el resultado de la resta es  :  ` + resta;
}
function multiplicar() {
  multiplicacion = numeroUno * numeroDos;
  console.log(`el resultado de la multiplicacion es` + multiplicacion);
  resultado.innerHTML =
    `el resultado de la multiplicacion es  :  ` + multiplicacion;
}
function dividir() {
  division = numeroUno / numeroDos;
  console.log(`el resultado de la dividion es` + division);
  resultado.innerHTML = `el resultado de la division es  :  ` + division;
}
