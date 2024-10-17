let numeros = parseInt(prompt("Digite un número para verificar si es negativo o positivo."));

if (numeros < 0) {
    document.getElementById("demo").innerHTML = "El número es negativo";
} else if (numeros > 0) {
    document.getElementById("demo").innerHTML = "El número es positivo";
} else {
    document.getElementById("demo").innerHTML = "El número es 0";
}




