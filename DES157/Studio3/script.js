(function () {

    'use strict';

    const openBtns = document.querySelectorAll('.open'); 
    const closeBtns = document.querySelectorAll('.close'); 
    
    for(const eachBtn of openBtns){ 
        eachBtn.addEventListener('click', function(event){ 
            event.preventDefault();
            const thisBtn = event.target.id; 
            document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';  
        }); 
    }
    for(const eachBtn of closeBtns ){ 
        eachBtn.addEventListener('click', function(event){ 
            event.preventDefault(); 
            document.querySelector('.showing').className = 'overlay hidden'; 
        });
    }

    document.addEventListener('keydown', function (event) { 
        if (event.key === 'Escape') { 
            document.querySelector('.showing').className = 'overlay hidden'; 
        }
    });


    let currentImage = 0;
    const myphotos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentImage++;
        if (currentImage > myphotos.length - 1) { currentImage = 0; }

        swapImage();
    });

    prevBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentImage--;
        if (currentImage < 0) { currentImage = myphotos.length - 1; }

        swapImage();
    });

    function swapImage() {
        const newSlide = document.createElement('img');
        newSlide.src = `images/${myphotos[currentImage]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }

})();