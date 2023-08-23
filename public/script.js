// script.js

// Netlify Identity Logic
if (document.getElementById('loginButton')) {
    document.getElementById('loginButton').addEventListener('click', function() {
        netlifyIdentity.open('login');
    });
}

netlifyIdentity.on('login', user => {
    console.log('login', user);
    window.location.href = "dashboard.html"; 
});

netlifyIdentity.on('logout', () => {
    console.log('Logged out');
    window.location.href = "login.html"; 
});

function logout() {
    console.log('Logout function called');
    netlifyIdentity.logout();
    window.location.href = "index.html"; // or "/" for the root of your website
}


// Cloudinary Widget Logic
const widget = cloudinary.createUploadWidget(
    {
        cloudName: 'laxdotcom',
        uploadPreset: 'prevectorlogos'
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
