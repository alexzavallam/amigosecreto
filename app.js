let ingresarNombreLista;
let listaDeNombre = [];
let numeroMaximoDeNombres= 0; 

function agregarAmigo() {
        let entradaDeNombre = (document.getElementById('amigo').value);
        if (entradaDeNombre == ""){
            alert("Por favor, inserte un nombre.");
            limpiarCaja();
        }else{
            ingresarNombreLista = listaDeNombre.push(entradaDeNombre);
            limpiarCaja();
            listaDeAmigos();
        } 
}
//Limpiar el valor en la caja de entrada
function limpiarCaja() {
    let valorCaja = document.querySelector ('#amigo');
    valorCaja.value = '';
}
// Agregar lista de amigos 
function listaDeAmigos(){
    let listaParaMostrar = document.querySelector('#listaAmigos');
    listaParaMostrar.innerHTML ='';
    for (let i = 0; i < listaDeNombre.length; i++) {
        listaParaMostrar.innerHTML += `<li>${listaDeNombre[i]}</li>`;
    }
}
// Sortear un amigo secreto
function sortearAmigo(){
    numeroMaximoDeNombres = listaDeNombre.length;
    
    if (listaDeAmigos !== ""){
       let nombreSorteado = Math.floor(Math.random()*numeroMaximoDeNombres);
       let resultadoDeNombre = document.querySelector('#resultado');
       resultadoDeNombre.innerHTML = `El amigo secreto es: ${listaDeNombre[nombreSorteado]}`
    }else{
        alert("Por favor, inserte un nombre.");
    }
}