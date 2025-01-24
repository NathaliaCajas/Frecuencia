function calcularFrecuencia() {
    //Obtener valores de los inputs
    var masa = document.getElementById("masa").value;
    var k = document.getElementById("k").value;

    //Verificar que los valores sean validos
    if (masa == "" || k == "") {
        alert("Por favor ingresa tanto la masa como la constante de rigidez.");
        return;
    }

    masa = parseFloat(masa);
    k = parseFloat(k);

    //Calcular la frecuencia angular
    var omega = Math.sqrt(k / masa);

    //Calcular la frecuencia
    var frecuencia = omega / (2 * Math.PI);

    //Mostrar el resultado
    document.getElementById("frecuencia").innerText = frecuencia.toFixed(2);
}