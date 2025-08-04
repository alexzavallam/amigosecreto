let amigoSecreto = 5;
let intentos = 0;
let listaAmigoSecreto = [];


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarAmigoSecreto() {
    let amigoGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaAmigoSecretos);
    //Si ya sorteamos todos los números
    if (listaAmigoSecreto.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaAmigoSecreto.includes(amigoGenerado)) {
            return generarAmigoSecreto();
        } else {
            listaAmigoSecreto.push(AmigoGenerado);
            return amigoGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Amigo Secreto!');
    asignarTextoElemento('p',`${cantidadMaxima}`);
    numeroSecreto = generarAmigoSecreto();
    intentos = 1;
    console.log(amigoSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();