// dashboard-script.js
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
