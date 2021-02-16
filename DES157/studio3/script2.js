(function () {

    'use strict';

    let currentImageb = 0;
    const myphotosb = ["image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg"];

    const containerb = document.getElementById('contentb');
    const nextBtnb = document.getElementById('nextb');
    const prevBtnb = document.getElementById('previousb');

    nextBtnb.addEventListener('click', function (event) {
        event.preventDefault();

        currentImageb++;
        if (currentImageb > myphotosb.length - 1) { currentImageb = 0; }

        swapImage();
    });

    prevBtnb.addEventListener('click', function (event) {
        event.preventDefault();

        currentImageb--;
        if (currentImageb < 0) { currentImageb = myphotosb.length - 1; }

        swapImage();
    });

    function swapImage() {
        const newSlideb = document.createElement('img');
        newSlideb.src = `images/${myphotosb[currentImageb]}`;
        newSlideb.className = "fadeinimg";
        containerb.appendChild(newSlideb);

        if (containerb.children.length > 2) {
            containerb.removeChild(containerb.children[0]);
        }
    }


})();