// ================================
// LÓGICA DEL FORMULARIO DE CONTACTO
// ================================

// Esperamos a que el documento HTML esté completamente cargado.
document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: CAPTURAR LOS ELEMENTOS DEL DOM ---
    // Usamos document.getElementById() para obtener cada elemento.
    var formulario = document.getElementById("contactoForm");           // El formulario de contacto
    var nombre = document.getElementById("nombreContacto");             // Campo de nombre
    var asunto = document.getElementById("asuntoContacto");             // Campo de asunto
    var mensajeTexto = document.getElementById("mensajeContacto");      // Textarea del mensaje
    var contador = document.getElementById("contadorCaracteres");       // Elemento del contador de caracteres
    var mensajeResultado = document.getElementById("mensajeContactoResult"); // Elemento donde mostramos errores/éxito

    // --- PASO 2: CONTADOR DE CARACTERES EN TIEMPO REAL ---
    // Escuchamos el evento "input" del textarea. Este evento se dispara
    // cada vez que el usuario escribe o borra algo en el campo.
    // Así actualizamos el contador sin necesidad de enviar el formulario.
    mensajeTexto.addEventListener("input", function () {
        // .value.length nos da la cantidad de caracteres escritos actualmente.
        // Actualizamos el texto del contador con ese número.
        var cantidadCaracteres = mensajeTexto.value.length;
        contador.textContent = cantidadCaracteres + " caracteres";
    });

    // --- PASO 3: ESCUCHAR EL EVENTO "SUBMIT" ---
    // Cuando el usuario hace clic en "Enviar Mensaje", interceptamos el envío.
    formulario.addEventListener("submit", function (event) {

        // --- PASO 4: PREVENIR EL COMPORTAMIENTO POR DEFECTO ---
        // Evitamos que la página se recargue al enviar.
        event.preventDefault();

        // --- PASO 5: OBTENER LOS VALORES INGRESADOS ---
        var valorNombre = nombre.value.trim();
        var valorAsunto = asunto.value.trim();
        var valorMensaje = mensajeTexto.value.trim();

        // --- PASO 6: LIMPIAR MENSAJES ANTERIORES ---
        mensajeResultado.textContent = "";
        mensajeResultado.className = "formulario-mensaje";

        // --- PASO 7: VALIDAR CAMPOS OBLIGATORIOS ---
        // Verificamos que los tres campos tengan contenido.
        if (valorNombre === "" || valorAsunto === "" || valorMensaje === "") {
            mensajeResultado.textContent = "Todos los campos son obligatorios.";
            return; // Detenemos la ejecución
        }

        // --- PASO 8: SI TODO ESTÁ CORRECTO, MOSTRAR ÉXITO ---
        mensajeResultado.textContent = "Mensaje enviado correctamente. ¡Gracias!";
        mensajeResultado.classList.add("formulario-mensaje-exito");

        // --- PASO 9: LIMPIAR LOS CAMPOS AUTOMÁTICAMENTE ---
        // Después de un envío exitoso, vaciamos todos los campos
        // asignando una cadena vacía ("") a cada .value.
        // También reseteamos el contador de caracteres a 0.
        nombre.value = "";
        asunto.value = "";
        mensajeTexto.value = "";
        contador.textContent = "0 caracteres";
    });

});
