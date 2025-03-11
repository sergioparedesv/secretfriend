// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
const listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Elimina espacios en blanco innecesarios

    // Validación: No se permite agregar un nombre vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista de amigos
    listaAmigos.push(nombre);

    // Limpiar el input
    inputAmigo.value = "";

    // Mostrar la lista actualizada en la interfaz
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un amigo de la lista
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("delete-button");
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaElement.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Debes añadir al menos un amigo antes de hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 El Amigo Secreto es: <strong>${amigoSecreto}</strong> 🎁</li>`;
}
