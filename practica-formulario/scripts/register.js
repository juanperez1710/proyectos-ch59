/**
 * Para acceder a elementos del DOM siempre es mediante la opción document
 * .getElementById() regresa el primer elemento con ese id
 * .querySelector() recibe un selector CSS, regresa el primero que encuentra
 * . para clase 
 * # para ids
 * .querySelectorAll() -> colección viva
 * .getElementsByClassName() -> seleccionar más de un elemento
 * div selector de elemento
 * * Un evento es una acción que se hace sobre un elemento HTML (focus, dar clic, escribir, borrar, cuando pasas el mouse (hover), submit (enviar), entre otros a esto se le llama "escuchar por eventos")
 */
const formEl = document.querySelector("form");
const divEl = document.querySelector(".message");

// Agregando evento al elemento, addEventListener recibe dos argumentos: tipo de evento y una función donde vamos a poner qué efecto se va a desencadenar cuando ocurra ese evento
// Para evitar el efecto por defecto usamos preventDefault
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    divEl.innerHTML = ""; // Limpia el mensaje anterior

    // Forma de obtener todos los valores de un formulario: 
    const formData = new FormData(formEl);
    const objectData = Object.fromEntries(formData);
    
    // Lógica IF/ELSE para manejar éxito y error
    if (checkPasswords(objectData.password, objectData.confirm_password)) {
        // Las contraseñas coinciden: ejecutar lógica de éxito
        localStorage.setItem(objectData.email, JSON.stringify(objectData));
        renderSuccess("Registro exitoso. Serás redirigido en 3 segundos.");
        formEl.reset();

        setTimeout(() => {
            window.location.href = "./pages/login.html";
        }, 3000);
    } else {
        // Las contraseñas NO coinciden: ejecutar lógica de error
        renderError("Las contraseñas no coinciden");
    }
});
 
// Comprobar las contraseñas
const checkPasswords = (password, confirm_password) => password === confirm_password;

// Función para renderizar un mensaje de error
const renderError = (message) => {
    const alert = `
    <div class="alert alert-danger" role="alert">
        ${message}
    </div>
    `;
    divEl.innerHTML = alert;
};

// Función para renderizar un mensaje de éxito
const renderSuccess = (message) => {
    const alert = `
    <div class="alert alert-success" role="alert">
        ${message}
    </div>
    `;
    divEl.innerHTML = alert;
};
