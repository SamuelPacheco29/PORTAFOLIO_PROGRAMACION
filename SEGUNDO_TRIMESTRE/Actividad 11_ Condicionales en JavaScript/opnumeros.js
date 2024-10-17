let A = parseInt(prompt("Digite un número entero"));
let B = parseInt(prompt("Digite otro número entero"));

var operacion = prompt("Seleccione alguna operación: +, -, *, /");

let resultado = "";

switch (operacion) {
    case "+":
        resultado = A + B;
        break;
    case "-":
        resultado = A - B;
        break;
    case "*":
        resultado = A * B;
        break;
    case "/":
        if (B == 0) {
            resultado = "No se puede dividir por cero";
        } else {
            resultado = A / B;
        }
        break;
    default:
        resultado = "Signo incorrecto, vuelva a intentar";
        break;
}

document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
