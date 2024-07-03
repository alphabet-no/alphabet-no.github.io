document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll('.sidebar ul li, .right-sidebar ul li');

    listItems.forEach(item => {
        item.addEventListener('click', loadRandomImages);
    });

    function loadRandomImages() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '';

        fetch('/api/images')
            .then(response => response.json())
            .then(images => {
                // Shuffle and select 25 random images
                const shuffledImages = images.sort(() => 0.5 - Math.random()).slice(0, 25);

                shuffledImages.forEach(img => {
                    const imgElement = document.createElement('img');
                    imgElement.src = `rand-assets/${img}`;
                    imgElement.alt = 'Random Image';
                    mainContent.appendChild(imgElement);
                });
            })
            .catch(error => {
                console.error('Error fetching images:', error);
            });
    }
});
