const dato = document.querySelector('#dato');
const enviar = document.querySelector('#enviar');
const resultado = document.querySelector('#resultado');

enviar.addEventListener('click', mensaje);

function mensaje(){
    resultado.innerText = "Asì que escogiste: " + dato.value;
}