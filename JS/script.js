document.addEventListener('DOMContentLoaded', function () {
    const historialCotizaciones = []; // Arreglo para almacenar historial de cotizaciones
  
    // Evento click del botón Cotizar
    document.getElementById('cotizar').addEventListener('click', function () {
      try {
        // Obtener el tipo de evento seleccionado y la cantidad de invitados
        const tipoEvento = document.getElementById('tipoEvento').value;
        const cantidadInvitados = parseInt(document.getElementById('invitados').value);
  
        // Verificar que se haya seleccionado un tipo de evento y que la cantidad de invitados sea válida
        if (!tipoEvento || isNaN(cantidadInvitados) || cantidadInvitados < 1) {
          throw new Error('Por favor, selecciona un tipo de evento y especifica una cantidad válida de invitados.');
        }
  
        // Obtener datos del archivo JSON mediante fetch
        fetch('data.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('No se pudo acceder al archivo JSON');
            }
            return response.json();
          })
          .then(data => {
            // Buscar el costo base del evento en el archivo JSON
            const evento = data.eventos.find(e => e.tipo === tipoEvento);
            if (!evento) {
              throw new Error('El evento seleccionado no existe en la base de datos');
            }
  
            // Calcular el costo total de la cotización
            const costoTotal = evento.costoBase * cantidadInvitados;
  
            // Mostrar mensaje de cotización con SweetAlert2
            Swal.fire({
              icon: 'success',
              title: 'Cotización',
              html: `Tipo de Evento: ${tipoEvento}<br>
                     Cantidad de Invitados: ${cantidadInvitados}<br>
                     Costo Total: $${costoTotal}`
            });
  
            // Almacena la cotización en el historial
            historialCotizaciones.push({
              tipoEvento,
              cantidadInvitados,
              costoTotal
            });
  
            // Actualiza la pantalla con la cotización y el historial
            actualizarPantalla();
  
            // Muestra el formulario de confirmación
            mostrarFormularioConfirmacion();
          })
          .catch(error => {
            // Mostrar mensaje de error con SweetAlert2
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error.message
            });
          });
      } catch (error) {
        // Mostrar mensaje de error con SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message
        });
      }
    });
  
    // Función para actualizar la pantalla con la cotización y el historial
    function actualizarPantalla() {
      const listaCotizaciones = document.getElementById('historialCotizaciones');
      listaCotizaciones.innerHTML = ''; // Limpiar la lista antes de agregar nuevas cotizaciones
      historialCotizaciones.forEach(cotizacion => {
        const itemCotizacion = document.createElement('li');
        itemCotizacion.textContent = `Evento: ${cotizacion.tipoEvento}, Invitados: ${cotizacion.cantidadInvitados}, Costo: ${cotizacion.costoTotal}`;
        listaCotizaciones.appendChild(itemCotizacion);
      });
    }
  
    // Función para mostrar el formulario de confirmación
    function mostrarFormularioConfirmacion() {
      // Mostrar el formulario de confirmación
      document.getElementById('formularioConfirmacion').style.display = 'block';
  
      // Evento submit del formulario de confirmación
      document.getElementById('formularioConfirmacion').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar envío por defecto del formulario
  
        // Obtener los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
  
        // Muestra el mensaje de agradecimiento
        mostrarMensajeAgradecimiento();
  
        // Limpiar la pantalla
        limpiarPantalla();
      });
    }
  
    // Función para mostrar el mensaje de agradecimiento
    function mostrarMensajeAgradecimiento() {
      // Mostrar el mensaje de agradecimiento
      Swal.fire({
        icon: 'success',
        title: 'Gracias por tu interés',
        text: 'Hemos recibido tu cotización y nos pondremos en contacto contigo pronto.'
      });
    }
  
    // Función para limpiar la pantalla
    function limpiarPantalla() {
      // Limpiar el historial de cotizaciones
      historialCotizaciones.length = 0;
      actualizarPantalla();
  
      // Limpiar campos de entrada
      document.getElementById('tipoEvento').value = '';
      document.getElementById('invitados').value = '';
      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('correo').value = '';
  
      // Ocultar el formulario de confirmación
      document.getElementById('formularioConfirmacion').style.display = 'none';
    }
  });
  