document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    // Replace "images" with your actual folder path containing images
    const imageFolder = "images/";

    // List of image file names
    const images = [
        "jpeg420exif.jpg",
        "image2.jpg",
        "image3.jpg"
        // Add more image filenames as needed
    ];

    // Loop through images and create image elements
    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = imageFolder + image;

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image");
        imageWrapper.appendChild(imgElement);

        gallery.appendChild(imageWrapper);
    });
});
