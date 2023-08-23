if (document.getElementById('loginButton')) {
    document.getElementById('loginButton').addEventListener('click', function() {
        netlifyIdentity.open('login');
    });
}

netlifyIdentity.on('login', user => {
    console.log('login', user);
    window.location.href = "dashboard.html"; // Redirect to dashboard after login
});

netlifyIdentity.on('logout', () => {
    console.log('Logged out');
    window.location.href = "login.html"; // Redirect back to login after logout
});

function logout() {
    console.log('Logout function called');
    netlifyIdentity.logout();
}
