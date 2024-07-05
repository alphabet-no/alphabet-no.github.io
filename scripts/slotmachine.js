$.fn.pause = function(duration) {
    $(this).animate({ dummy: 1 }, duration);
    return this;
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function typeText(element, text, delay) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(type, delay);
        }
    }
    type();
}

$(document).ready(function() {
    const typingDelay = 120; // Delay in milliseconds

    shuffle(images);
    shuffle(texts);
    const imageList = $("#imageList");
    imageList.empty();

    const selectedImages = images.slice(0, 10);
    const selectedTexts = texts.slice(0,10);
    selectedImages.forEach(function(src, index) {
        const listItem = $('<li></li>');
        const imgElement = $('<img>').attr('src', src).attr('alt', 'Img').addClass('small-img');
        const captionElement = $('<div></div>').addClass('captions');
        listItem.append(imgElement).append(captionElement);
        imageList.append(listItem);

        // Set the caption's visibility to visible
        captionElement.css('visibility', 'visible');

        // Type the text for the caption
        if (index < selectedTexts.length) {
            typeText(captionElement[0], selectedTexts[index], typingDelay);
        }
    });
});
