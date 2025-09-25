const formLogin = document.getElementById('login2');
const btnEl=document.getElementById("btnForm")

/**
 * 1. Obtener los datos del localStorage si existe ese email
 * 2. Comparar contraseñas
 * 3. Redirigir al usuario si es exitoso
 */

formLogin.addEventListener("submit", (event) => {
    // 1. Evitar que el formulario se envíe de forma predeterminada (recargue la página)
    event.preventDefault();

    // 2. Obtener el valor de los campos (¡usando .value!)
    const emailInput = event.target.elements["email"].value;
    const passwordInput = event.target.elements["password"].value;

    // 3. Obtener la data del localStorage
    const localData = getUserInfo(emailInput);
    
    // 4. Verificar si el usuario existe
    if (localData === undefined) {
        btnEl.classList.remove("btn-primary");
        btnEl.classList.add("btn-danger");
    }

    // 5. Comparar contraseñas
    if (checkPassword(localData, passwordInput)) {
        btnEl.classList.remove("btn-primary");
        btnEl.classList.remove("btn-danger");
        btnEl.classList.add("btn-success");

        // Aquí iría la lógica para "cambiar la clase de los botones" 
        // o guardar el estado de la sesión (ej. en sessionStorage)

        // 6. Redirigir al usuario después de un pequeño retraso
        setTimeout(() => {
            window.location.href = "../pages/user.html";
        }, 2000); // Redirige después de 1 segundo (1000ms)
    } else {
        alert("Contraseña incorrecta.");
        return;
    }
});

// Función para obtener la información del usuario del localStorage
const getUserInfo = (email) => {
    // El email se usa como clave en localStorage
    const data = localStorage.getItem(email); 
    
    // Si no hay datos, devuelve undefined (o null, pero undefined es consistente con tu lógica original)
    if (data === null) {
        return undefined; 
    }
    
    // Si hay datos, los parsea de JSON a un objeto JavaScript
    return JSON.parse(data);
};

// Función para comparar la contraseña almacenada con la ingresada
const checkPassword = (localUserData, loginPassword) => {
    // Extrae la propiedad 'password' del objeto 'localUserData' (desestructuración)
    const { password: storedPassword } = localUserData; 
    
    return storedPassword === loginPassword;
};

// **Nota:** No se implementó la lógica de "cambiar la clase de los botones" 
// (ej. de Login a Logout en la barra de navegación) ya que requeriría 
// interactuar con el DOM fuera del formulario. Esa lógica iría justo antes de la redirección.


 // comparar contraseñas

 // redirigir al usuario 

 // cambiar la clase de los botones 
