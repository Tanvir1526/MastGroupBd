var thumbnails = document.querySelectorAll('.img-thumbnail');

// Loop through the thumbnails and add a click event listener
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
        // Get the src of the clicked thumbnail
        var src = this.getAttribute('src');

        // Set the src of the modal image to the src of the clicked thumbnail
        document.getElementById('modalImage').setAttribute('src', src);
    });
});