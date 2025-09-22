let amigos = [];

function agregarAmigo() {
    const entradaNombre = document.getElementById('amigo');
    const nombre = entradaNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    entradaNombre.value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    const listaAmigosUL = document.getElementById('listaAmigos');
    listaAmigosUL.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigosUL.appendChild(li);
    }
}

function sortearAmigo() {
    const resultadoSorteoUL = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultadoSorteoUL.innerHTML = "<li style='color: red;'>¡Aún no hay amigos en la lista para sortear!</li>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultadoSorteoUL.innerHTML = `<li class="result-item">¡El amigo secreto es... <span>${amigoSorteado.toUpperCase()}</span>!</li>`;
}