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

    shuffle(images);

    const imageList = $("#imageList");
    imageList.empty();

    const selectedImages = images.slice(0, 10);
    selectedImages.forEach(function(src) {
        const listItem = $('<li></li>');
        const imgElement = $('<img>').attr('src', src).attr('alt', 'Img').addClass('small-img');
        const captionElement = $('<div></div>').addClass('caption');
        listItem.append(imgElement).append(captionElement);
        imageList.append(listItem);

        const textsToType = [
            "i love buying the swedish 'new feel' slim zyns it feels like im importing rare ntsc-j nintendo wii exclusives in 2006",
            " orchestrating vast, intricate schemes across time and space is undeniably appealing",
            " immediate  off the cuf f answers  ",
            " When you look at it you are alive and spending your life looking",
            "agi content is overexposed and boring unfortunately",
            "No pressure on that bitcoin stuff but if you don't 10x your net worth 3 times by 2030 you'll be forced to sell your brain's excess compute power to an AI company that uses it to make YouTube videos convincing your children to transition",
            " Neo-China arrives from the future",
            "Metrophage: an interactively escalating parasitic replicator, sophisticating itself through nonlinear involvement with technocapitalist immunocrash",
            "don't mess with me",
            "If reading this doesn't make you feel concerned or trigger a delightful epiphany, even if you don't know the context, then you are still quite far from enlightenment",
            "AGI can help the Sex Worker community by optimising the pricing for custom video content - acting, as it were, as a Pay-per-Clip maximi—",
        ];
        const typingDelay = 120; // Delay in milliseconds

        const captions = document.querySelectorAll('caption');

        captions.forEach((caption, index) => {
            if (index < textsToType.length) {
                caption.style.visibility = 'visible';
                typeText(caption, textsToType[index], typingDelay);
            }
        });
    });
});