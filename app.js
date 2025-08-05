let amigos= [];

// Agrega un nombre a la lista 
function asignarAmigo() {
    const imput = document.getElementById("amigo");;
    const amigo = input.value.trim();
    
    if (!amigo) {
        alert("Por favor, ingresa un amigo válido.");
    return;
}

// Muestra los amigos en la lista 
function mostrarAmigos(amigos) {
    const lista = document.getElementById("listaAmigos");
    if (!lista) return;
    lista.innerHTML = "";
    
for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Sortea un amigo secreto de la lista
function sortearAmigo() {
    if (!Array.isArray(amigos) || amigos.length === 0) {
        alert("La lista está vacía. Agrega aigos antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    if (resultado) {
        resultado.textContent = `Amigo Secreto: ${ganador}`;
    }
}

// Limpia la lista
function limpiarAmigos() {
    amigos = [];
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    if (lista) lista.innerHTML = "";
    if (resultado) resultado.innerHTML = "";
}
    
    
   
