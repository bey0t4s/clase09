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
    numero1 = Number(prompt('ingrese un nro.:').replace(',','.'));
    numero2 = Number(prompt('ingrese otro nro.:').replace(',','.'));
}

function validar(){
    if(isNaN(numero1) || isNaN(numero2))
    {
        alert('Debe ingresar un valor numérico')
    }
    else if(numero1 == "" || numero2 == "")
    {
        alert('Debe completar ambos valores')
    }
}

function sumar() {
    validar();
    suma = numero1 + numero2;
    resultado.innerHTML = `El resultado es: ${suma}`;
}

function restar() {
    validar();
    resta = numero1 - numero2;
    resultado.innerHTML = `El resultado es: ${resta}`;
}

function multiplicar() {
    validar();
    multiplicacion = numero1 * numero2;
    resultado.innerHTML = `El resultado es: ${multiplicacion}`;
}

function dividir() {
    validar();
    division = numero1 / numero2;
    resultado.innerHTML = `El resultado es: ${division}`;
}