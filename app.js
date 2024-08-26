// Variables globales para almacenar las frases
let frases = [];

// Función para abrir el modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Función para agregar una nueva frase
function agregarFrase() {
    const autor = document.getElementById('nuevoAutor').value;
    const texto = document.getElementById('nuevoTexto').value;

    if (autor && texto) {
        frases.push({ autor, texto });
        actualizarTabla();
        closeModal();
    }
}

// Función para actualizar la tabla con las frases
function actualizarTabla() {
    const lista = document.getElementById('frase-lista');
    lista.innerHTML = '';

    frases.forEach((frase, index) => {
        const row = `<tr>
                        <td>${frase.texto}</td>
                        <td>${frase.autor}</td>
                    </tr>`;
        lista.innerHTML += row;
    });
}
