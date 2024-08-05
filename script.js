// Website template by https://github.com/Pathetic420
const enterButton = document.getElementById('js-enter');

enterButton.addEventListener("click", async function (e) {
    enterButton.parentElement.classList.add('fade-out');
    enterButton.parentElement.remove();
});

var titleText = " " + document.title + " ";

function titleMarquee() {
    titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
    document.title = titleText;
    setTimeout(titleMarquee, 500);
}

window.onload = titleMarquee;

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const video = document.getElementById('background');

    audio.oncanplay = function() {
        video.play();
        audio.play();
    };
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("myAudio");

    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            audio.loop = true;
            audio.volume = 0.2;
        }).catch(error => {
            console.log('Autoplay was prevented:', error);
            
            document.addEventListener('click', function() {
                audio.loop = true;
                audio.volume = 0.2;
                audio.play();
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');

    document.addEventListener('mousemove', function(e) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const deltaX = e.clientX - cardCenterX;
        const deltaY = e.clientY - cardCenterY;

        const angleX = (deltaY / cardRect.height) * 30;
        const angleY = (deltaX / cardRect.width) * -30;

        card.style.transform = `translate(-50%, -50%) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
});

jQuery(document).ready(function(){
    jQuery(function() {
        jQuery(this).bind("contextmenu", function(event) {
            event.preventDefault();
        });
    });
});
