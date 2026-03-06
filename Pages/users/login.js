
document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://proyecto-aw2-backend.onrender.com/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
                contraseña: password
            })
        });

        if (!response.ok) {
            alert('Usuario o contraseña incorrectos.');
            return;
        }

        const data = await response.json();
        
        const nombreUsuario = data.nombre;
        const apellidoUsuario = data.apellido;
        
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('idUsuario', data.id);
        sessionStorage.setItem('nombreUsuario', data.nombre);
        sessionStorage.setItem('apellidoUsuario', data.apellido);

        alert(`Sesion Iniciada. Bienvenido ${nombreUsuario} ${apellidoUsuario}`);

        window.location.href = '../home.html';

    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Hubo un error al iniciar sesión.');
    }
});
