// ================================
// LÓGICA DEL FORMULARIO DE REGISTRO
// ================================

// Esperamos a que el documento HTML esté completamente cargado
// antes de ejecutar cualquier código JavaScript.
// Esto asegura que todos los elementos del DOM existan cuando los busquemos.
document.addEventListener("DOMContentLoaded", function () {

    // --- PASO 1: CAPTURAR LOS ELEMENTOS DEL DOM ---
    // Usamos document.getElementById() para obtener una referencia
    // a cada elemento HTML que necesitamos manipular.
    // Los IDs deben coincidir exactamente con los del HTML.

    var formulario = document.getElementById("registroForm");       // El formulario completo
    var usuario = document.getElementById("usuario");               // Campo de usuario
    var correo = document.getElementById("correoRegistro");         // Campo de email
    var password = document.getElementById("passwordRegistro");     // Campo de contraseña
    var confirmar = document.getElementById("confirmarPassword");   // Campo de confirmar contraseña
    var mensaje = document.getElementById("mensajeRegistro");       // Elemento <p> donde mostramos errores/éxito

    // --- PASO 2: ESCUCHAR EL EVENTO "SUBMIT" DEL FORMULARIO ---
    // Cuando el usuario hace clic en "Registrarse", el formulario dispara
    // el evento "submit". Nosotros lo interceptamos con addEventListener.
    formulario.addEventListener("submit", function (event) {

        // --- PASO 3: PREVENIR EL COMPORTAMIENTO POR DEFECTO ---
        // Por defecto, un formulario recarga la página al enviarse.
        // Con event.preventDefault() cancelamos eso para manejar
        // la validación nosotros mismos con JavaScript.
        event.preventDefault();

        // --- PASO 4: OBTENER LOS VALORES INGRESADOS ---
        // .value nos da el texto que el usuario escribió en cada campo.
        // .trim() elimina los espacios en blanco al inicio y al final.
        var valorUsuario = usuario.value.trim();
        var valorCorreo = correo.value.trim();
        var valorPassword = password.value;
        var valorConfirmar = confirmar.value;

        // --- PASO 5: LIMPIAR ESTILOS PREVIOS ---
        // Cada vez que se envía el formulario, reseteamos el mensaje
        // para que no queden mensajes anteriores visibles.
        mensaje.textContent = "";
        mensaje.className = "formulario-mensaje";

        // --- PASO 6: VALIDACIÓN DE CAMPOS OBLIGATORIOS ---
        // Verificamos que ningún campo esté vacío.
        // Si alguno está vacío, mostramos un error y detenemos la ejecución con return.
        if (valorUsuario === "" || valorCorreo === "" || valorPassword === "" || valorConfirmar === "") {
            mensaje.textContent = "Todos los campos son obligatorios.";
            return; // Detiene la función aquí, no ejecuta el código de abajo
        }

        // --- PASO 7: VALIDACIÓN DEL EMAIL CON EXPRESIÓN REGULAR (REGEX) ---
        // Una expresión regular es un patrón que define cómo debe verse un texto.
        // Este regex verifica que el email tenga el formato: algo@algo.algo
        //
        // Desglose del regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/:
        //   ^          = inicio del texto
        //   [^\s@]+    = uno o más caracteres que NO sean espacio ni @
        //   @          = el símbolo arroba (obligatorio)
        //   [^\s@]+    = uno o más caracteres que NO sean espacio ni @
        //   \.         = un punto literal (obligatorio)
        //   [^\s@]+    = uno o más caracteres que NO sean espacio ni @
        //   $          = fin del texto
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // .test() prueba si el texto cumple con el patrón.
        // Si NO cumple (!), mostramos error.
        if (!regexEmail.test(valorCorreo)) {
            mensaje.textContent = "El formato del correo electrónico no es válido.";
            return;
        }

        // --- PASO 8: VALIDACIÓN DE LONGITUD DE CONTRASEÑA ---
        // .length nos da la cantidad de caracteres del texto.
        // La contraseña debe tener al menos 8 caracteres.
        if (valorPassword.length < 8) {
            mensaje.textContent = "La contraseña debe tener al menos 8 caracteres.";
            return;
        }

        // --- PASO 9: VERIFICAR QUE AMBAS CONTRASEÑAS SEAN IGUALES ---
        // Comparamos los dos valores con !== (distinto).
        // Si son diferentes, mostramos error.
        if (valorPassword !== valorConfirmar) {
            mensaje.textContent = "Las contraseñas no coinciden.";
            return;
        }

        // --- PASO 10: SI TODO ES CORRECTO, MOSTRAR ÉXITO ---
        // Si llegamos hasta aquí, significa que todas las validaciones pasaron.
        // Mostramos un mensaje de éxito y le agregamos la clase CSS de éxito
        // para que se vea en color cyan (neón).
        mensaje.textContent = "Registro exitoso. ¡Bienvenido!";
        mensaje.classList.add("formulario-mensaje-exito");
    });

});
