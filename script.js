document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var fileInput = document.getElementById('file-upload');
    var file = fileInput.files[0];
    var preview = document.getElementById('media-preview');

    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            if (file.type.startsWith('image/')) {
                var img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                preview.innerHTML = '';
                preview.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                var video = document.createElement('video');
                video.src = e.target.result;
                video.controls = true;
                video.style.maxWidth = '100%';
                preview.innerHTML = '';
                preview.appendChild(video);
            }
        };

        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = 'No file selected';
    }
});
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var fileInput = document.getElementById('file-upload');
    var file = fileInput.files[0];
    var preview = document.getElementById('media-preview');

    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            if (file.type.startsWith('image/')) {
                var img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                
                // Şablon ve Font Uygulaması
                applyTemplateAndFont(img);

                preview.innerHTML = '';
                preview.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                var video = document.createElement('video');
                video.src = e.target.result;
                video.controls = true;
                video.style.maxWidth = '100%';

                preview.innerHTML = '';
                preview.appendChild(video);
            }
        };

        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = 'No file selected';
    }
});

function applyTemplateAndFont(mediaElement) {
    var selectedTemplate = document.getElementById('template-select').value;
    var selectedFont = document.getElementById('font-select').value;

    // Font Uygulaması
    mediaElement.style.fontFamily = selectedFont;

    // Şablon Uygulaması
    switch(selectedTemplate) {
        case 'template1':
            mediaElement.style.border = '5px solid red';
            break;
        case 'template2':
            mediaElement.style.border = '5px solid green';
            break;
        case 'template3':
            mediaElement.style.border = '5px solid blue';
            break;
        default:
            mediaElement.style.border = 'none';
    }
}
