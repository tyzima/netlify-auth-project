// Netlify Identity Logic
if (document.getElementById('loginButton')) {
    document.getElementById('loginButton').addEventListener('click', function() {
        netlifyIdentity.open('login');
    });
}

netlifyIdentity.on('login', user => {
    console.log('login', user);
    // Check if the current page isn't dashboard.html before redirecting
    if (window.location.pathname !== '/dashboard.html') {
        window.location.href = "dashboard.html"; 
    }
});

netlifyIdentity.on('logout', () => {
    console.log('Logged out');
    // Check if the current page isn't login.html before redirecting
    if (window.location.pathname !== '/login.html') {
        window.location.href = "login.html";
    }
});

// Add the logout function
function logout() {
    netlifyIdentity.logout();
}




// Cloudinary Widget Logic
const widget = cloudinary.createUploadWidget(
    {
        cloudName: 'laxdotcom',
        uploadPreset: 'prevectorlogo'
    },
    (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            document.getElementById(result.info.field).value = result.info.secure_url;
        }
    }
);

function uploadImage(field) {
    widget.open();
    widget.update({ 'field': field });
}


document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().substr(0, 10);
    document.getElementById('date').value = today;
});


