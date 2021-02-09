(function(){
    'use strict';

    //star function
    function starInit(starCount){
        const starArea = document.querySelector(".starArea");
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            starArea.appendChild(star);
        }
    }

    function starPosition(starCount){
        starInit(starCount);
        const stars = document.querySelectorAll(".star");
        console.log(stars);
        for (let i = 0; i < starCount; i++) {
            let left = Math.floor(Math.random() * window.innerWidth);
            let top = Math.floor(Math.random() * window.innerHeight/2);
            stars[i].style.left = left + 'px';
            stars[i].style.top = top + 'px';
            stars[i].style.animationDelay = Math.floor(Math.random().toFixed(1) * i) + 's';
        }
    }
    starPosition(200);
    //main
    const myform = document.querySelector('#myform');
    const madlibcontent = document.querySelector('#madlibcontent');
    const errorcontent = document.querySelector('#errorcontent');

    myform.addEventListener('submit', function(e){
        e.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const num1 = document.querySelector('#num1').value;
        const noun2 = document.querySelector('#noun2').value;
        const num2 = document.querySelector('#num2').value;
        const noun3 = document.querySelector('#noun3').value;
        const adj = document.querySelector('#adj').value;

        let reText;

        if (noun1 && num1 && noun2 && num2 && noun3 && adj) {
            document.getElementById('overlay').className = "showing";
            reText = `You accidentally crossed the wormhole during
            an interstellar journey and arrived at a planet
            called ${noun1} Star ${num1} light years away from
            The Earth. This planet is very suitable for life 
            and its specialty is ${noun2}. Fortunately, there are 
            ${num2} ${noun3} from the earth on your spaceship. 
            You built a ${noun3} empire together, and you 
            have lived a ${adj} life ever since.`;

            madlibcontent.innerHTML = reText;
        }
        else {
            document.getElementById('error').className = "showing";
            reText = "Please fill out all the fields.";

            errorcontent.innerHTML = reText;
        }

        const formData = document.querySelectorAll("input[type=text]");

        for (const eachField of formData) {
            eachField.value = "";
        }
    });
    //close botton
    document.querySelector('.close').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('overlay').className = "hidden";
    });

    document.addEventListener('keydown', function (e) {
        if(e.key === 'Escape') {
            document.getElementById('overlay').className = "hidden";
        }
    });

}());