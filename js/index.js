//declaramos las variables
let suma;
let resta, multiplicacion, division;
let numero1, numero2;

let resultado = document.getElementById("resultado");

//console.log(resultado);

function saludar(){
    resultado.innerHTML = 'hola usuario, un placer!!';
}
function iniciar(){
    numero1 = prompt('ingrese un nro.:');
    numero2 = prompt('ingrese otro nro.:');

    console.log(numero1, numero2);
}

function sumar() {
    suma = Number(numero1) + Number(numero2);
    console.log(resultado.textContent + suma);
    resultado.innerHTML = 'El resultado es: ' + suma;
}

function restar() {
    resta = Number(numero1) - Number(numero2);
    console.log(resultado.textContent + resta);
    resultado.innerHTML = 'El resultado es: ' + resta;
}

function multiplicar() {
    multiplicacion = Number(numero1) * Number(numero2);
    console.log(resultado.textContent + multiplicacion);
    resultado.innerHTML = 'El resultado es: ' + multiplicacion;
}

function dividir() {
    division = Number(numero1) / Number(numero2);
    console.log(resultado.textContent + division);
    resultado.innerHTML = 'El resultado es: ' + division;
}