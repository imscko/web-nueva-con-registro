// ================================
// LÓGICA DEL FORMULARIO DE LOGIN
// ================================

// Esperamos a que el documento HTML esté completamente cargado.
document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: CAPTURAR LOS ELEMENTOS DEL DOM ---
    // Usamos document.getElementById() para obtener cada elemento
    // que necesitamos del HTML, usando sus IDs.
    var formulario = document.getElementById("loginForm");      // El formulario de login
    var correo = document.getElementById("correoLogin");        // Campo de email
    var password = document.getElementById("passwordLogin");    // Campo de contraseña
    var mensaje = document.getElementById("mensajeLogin");      // Elemento donde mostramos errores/éxito

    // --- PASO 2: ESCUCHAR EL EVENTO "SUBMIT" ---
    // Cuando el usuario hace clic en "Ingresar", interceptamos el envío.
    formulario.addEventListener("submit", function (event) {

        // --- PASO 3: PREVENIR EL COMPORTAMIENTO POR DEFECTO ---
        // Evitamos que la página se recargue al enviar el formulario.
        event.preventDefault();

        // --- PASO 4: OBTENER LOS VALORES INGRESADOS ---
        // .value captura lo que el usuario escribió.
        // .trim() quita espacios al inicio y al final.
        var valorCorreo = correo.value.trim();
        var valorPassword = password.value;

        // --- PASO 5: LIMPIAR MENSAJES ANTERIORES ---
        // Reseteamos el texto y las clases CSS del mensaje.
        mensaje.textContent = "";
        mensaje.className = "formulario-mensaje";

        // --- PASO 6: VALIDAR CAMPOS OBLIGATORIOS ---
        // Si alguno de los dos campos está vacío, mostramos error.
        if (valorCorreo === "" || valorPassword === "") {
            mensaje.textContent = "Todos los campos son obligatorios.";
            return; // Detenemos aquí la ejecución
        }

        // --- PASO 7: VALIDAR FORMATO DEL EMAIL ---
        // Usamos la misma expresión regular que en el registro
        // para verificar que el email tenga formato válido.
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(valorCorreo)) {
            mensaje.textContent = "El formato del correo electrónico no es válido.";
            return;
        }

        // --- PASO 8: SI TODO ESTÁ CORRECTO, MOSTRAR ÉXITO ---
        // Si los formatos son correctos, mostramos un mensaje de éxito
        // como indica el documento: "mostrar un mensaje de éxito si los formatos son correctos".
        mensaje.textContent = "Inicio de sesión exitoso. ¡Bienvenido!";
        mensaje.classList.add("formulario-mensaje-exito");
    });

});
