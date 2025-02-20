function toggleForms() {
    let registerForm = document.getElementById("registerForm");
    let loginForm = document.getElementById("loginForm");

    registerForm.style.display = (registerForm.style.display === 'none') ? 'block' : 'none';
    loginForm.style.display = (loginForm.style.display === 'none') ? 'block' : 'none';
}

function registerUser(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username && email && password) {
        const userdata = { username, email, password };
        localStorage.setItem('user', JSON.stringify(userdata));
        alert("Registration Successful 🔥");
        toggleForms();
    } else {
        alert("Please fill all the fields");
    }
}

function login(event) {
    event.preventDefault();
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
