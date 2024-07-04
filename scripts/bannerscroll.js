document.addEventListener("DOMContentLoaded", function() {
    const bannerContent = document.getElementById('banner-content');
    const numberOfImages = 253; // Total number of images
    const imageUrlPrefix = "./assets/logo/"; // Prefix of your image URLs
    const imageUrlSuffix = ".png"; // Suffix of your image URLs
    var imgPaths = [];

    for (let i = 1; i <= numberOfImages; i++){
        var imgPath = imageUrlPrefix+i+imageUrlSuffix;
        imgPaths.push(imgPath);
    }

    for (let i = imgPaths.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [imgPaths[i], imgPaths[j]] = [imgPaths[j], imgPaths[i]];
    }

    for (let i = 1; i <= numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = imgPaths[i];
        img.alt = `Logo ${i}`;
        bannerContent.appendChild(img);
    }

    // Duplicate images for smooth scrolling
    for (let i = 1; i <= numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = `${imageUrlPrefix}${i}${imageUrlSuffix}`;
        img.alt = `Logo ${i}`;
        bannerContent.appendChild(img);
    }
});