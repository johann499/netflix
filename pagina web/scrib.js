// Función para comprobar si el usuario está autenticado
function checkAuthentication() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('authModal').style.display = 'none'; // Ocultar modal
        document.getElementById('mainContent').style.display = 'block'; // Mostrar contenido
    } else {
        document.getElementById('authModal').style.display = 'flex'; // Mostrar modal de autenticación
        document.getElementById('mainContent').style.display = 'none'; // Ocultar contenido
    }
}

// Función para manejar el registro de usuarios
const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        signupMessage.textContent = 'Este correo ya está registrado.';
        signupMessage.style.color = 'red';
    } else {
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUser', JSON.stringify({ name, email })); // Iniciar sesión automáticamente
        signupMessage.textContent = 'Cuenta creada exitosamente. Redirigiendo...';
        signupMessage.style.color = 'green';

        setTimeout(() => {
            checkAuthentication(); // Verificar autenticación después de crear la cuenta
        }, 1000);


        // script.js

// Variables de almacenamiento
let isLoggedIn = false;

// Manejar el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de entrada
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simular autenticación (puedes reemplazar esto con tu lógica de autenticación)
    if (email === "usuario@ejemplo.com" && password === "123456") {
        isLoggedIn = true; // Establecer estado de sesión

        // Ocultar el modal y mostrar el contenido principal
        document.getElementById('authModal').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        document.getElementById('loginMessage').innerText = "Credenciales incorrectas.";
    }
});

// Manejar el formulario de creación de cuenta
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de entrada
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simular creación de cuenta (puedes reemplazar esto con tu lógica de creación de cuenta)
    document.getElementById('signupMessage').innerText = "Cuenta creada con éxito. Puedes iniciar sesión ahora.";

    // Limpiar campos
    document.getElementById('signupForm').reset();
});

// Mostrar el modal de autenticación al cargar la página
window.onload = function() {
    if (!isLoggedIn) {
        document.getElementById('authModal').style.display = 'block'; // Mostrar modal si no está autenticado
        document.getElementById('mainContent').style.display = 'none'; // Ocultar contenido principal
    }}

    document.addEventListener("DOMContentLoaded", function () {
        const authModal = document.getElementById("authModal");
        const mainContent = document.getElementById("mainContent");
    
        // Mostrar modal al cargar la página
        authModal.style.display = "flex";
    
        // Manejo de inicio de sesión
        document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();
            // Aquí puedes validar las credenciales
            authModal.style.display = "none";
            mainContent.style.display = "block";
        });
    
        // Manejo de creación de cuenta
        document.getElementById("signupForm").addEventListener("submit", function (e) {
            e.preventDefault();
            // Aquí puedes crear la cuenta
            authModal.style.display = "none";
            mainContent.style.display = "block";
        });
    })});    
