document.addEventListener("DOMContentLoaded", function() {
    const bannerContent = document.getElementById('banner-content');
    const numberOfImages = 252; // Total number of images
    const imageUrlPrefix = "./assets/logo/"; // Prefix of your image URLs
    const imageUrlSuffix = ".png"; // Suffix of your image URLs
    
    for (let i = 0; i <= numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = `${imageUrlPrefix}${i}${imageUrlSuffix}`;
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