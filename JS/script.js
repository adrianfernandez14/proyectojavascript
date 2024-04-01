// Array para almacenar los comentarios
let listaComentarios = [];

// Función para cargar los comentarios desde el almacenamiento local
function cargarComentarios() {
    let comentariosGuardados = localStorage.getItem('comentarios');
    if (comentariosGuardados) {
        listaComentarios = JSON.parse(comentariosGuardados);
    }
}

// Función para guardar los comentarios en el almacenamiento local
function guardarComentarios() {
    localStorage.setItem('comentarios', JSON.stringify(listaComentarios));
}

// Función para agregar un comentario
function agregarComentario(comentario) {
    listaComentarios.push(comentario);
    guardarComentarios();
}

document.getElementById('botonComentar').addEventListener('click', function() {
    let comentario = document.getElementById('inputComentario').value;
    
    if (comentario.trim() !== "") {
        let nuevoComentario = {
            contenido: comentario,
            fecha: new Date()
        };

        agregarComentario(nuevoComentario);
        mostrarComentarios();
        document.getElementById('inputComentario').value = "";
    }
});

function mostrarComentarios() {
    document.getElementById('seccionComentarios').innerHTML = "";
    listaComentarios.forEach(function(comentario, index) {
        let nuevoElemento = document.createElement('p');
        nuevoElemento.textContent = comentario.contenido + " - " + comentario.fecha.toLocaleString();
        document.getElementById('seccionComentarios').appendChild(nuevoElemento);
    });
}

// Función para mostrar el evento preferido
function mostrarEventoPreferido() {
    let eventoPreferido = localStorage.getItem('eventoPreferido');
    document.getElementById('eventoPreferido').textContent = eventoPreferido ? "Tu evento preferido es: " + eventoPreferido : "";
}

document.getElementById('bautismo').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Bautismo');
    mostrarEventoPreferido();
    mostrarComentarios(); // Mostrar comentarios al cambiar de evento
});

document.getElementById('cumpleanos').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Cumpleaños de 15 o de 18');
    mostrarEventoPreferido();
    mostrarComentarios(); // Mostrar comentarios al cambiar de evento
});

document.getElementById('casamiento').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Casamientos');
    mostrarEventoPreferido();
    mostrarComentarios(); // Mostrar comentarios al cambiar de evento
});

document.getElementById('infantiles').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Cumpleaños Infantiles');
    mostrarEventoPreferido();
    mostrarComentarios(); // Mostrar comentarios al cambiar de evento
});

document.getElementById('despedidaSolteros').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Despedida de Solteros');
    mostrarEventoPreferido();
    mostrarComentarios(); // Mostrar comentarios al cambiar de evento
});

document.getElementById('otros').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Baby-Shower, Graduacion, etc..');
    mostrarEventoPreferido();
    mostrarComentarios(); // Mostrar comentarios al cambiar de evento
});

// Llamar a la función para cargar los comentarios al cargar la página
cargarComentarios();
mostrarComentarios();
mostrarEventoPreferido();
