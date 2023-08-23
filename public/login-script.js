// Listener for button click to open the Netlify Identity login modal
document.getElementById('loginButton').addEventListener('click', function() {
    netlifyIdentity.open('login');
});

// Listener for login event
netlifyIdentity.on('login', user => {
    console.log('login', user);
    window.location.href = "dashboard.html"; // Redirect to dashboard after login
});

// Listener for logout event
netlifyIdentity.on('logout', () => {
    console.log('Logged out');
    window.location.href = "login.html"; // Redirect back to login after logout
});
