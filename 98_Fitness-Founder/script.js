
document.getElementById('showSignUp').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-content').style.display = 'none';
    document.getElementById('signup-content').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-content').style.display = 'none';
    document.getElementById('login-content').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send a request to your server to verify login
    window.location.href = 'home.html';
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send a request to your server to create a new user
    alert('Sign up successful! Please log in.');
    document.getElementById('signup-content').style.display = 'none';
    document.getElementById('login-content').style.display = 'block';
});