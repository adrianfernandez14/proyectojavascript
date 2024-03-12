// Modificar el HTML utilizando DOM mediante JS
document.getElementById('botonComentar').addEventListener('click', function() {
    let comentario = prompt("Deja un comentario sobre nuestros trabajos en ambientación:");
    if (comentario) {
        let nuevoComentario = document.createElement('p');
        nuevoComentario.textContent = comentario;
        document.getElementById('seccionComentarios').appendChild(nuevoComentario);
    }
});

mostrarEventoPreferido();

document.getElementById('bautismo').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Bautismo');
    mostrarEventoPreferido();
});

document.getElementById('cumpleanos').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Cumpleaños de 15 o de 18');
    mostrarEventoPreferido();
});

document.getElementById('casamiento').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Casamientos');
    mostrarEventoPreferido();
});

document.getElementById('infantiles').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Cumpleaños Infantiles');
    mostrarEventoPreferido();
});

document.getElementById('despedidaSolteros').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Despedida de Solteros');
    mostrarEventoPreferido();
});

document.getElementById('otros').addEventListener('click', function() {
    localStorage.setItem('eventoPreferido', 'Baby-Shower, Graduacion, etc..');
    mostrarEventoPreferido();
});

function mostrarEventoPreferido() {
    let eventoPreferido = localStorage.getItem('eventoPreferido');
    document.getElementById('eventoPreferido').textContent = eventoPreferido ? "Tu evento preferido es: " + eventoPreferido : "";
}
