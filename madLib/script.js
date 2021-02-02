(function(){
    'use strict';
    console.log("reading js")

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
            let top = Math.floor(Math.random() * window.innerHeight/1.5);
            stars[i].style.left = left + 'px';
            stars[i].style.top = top + 'px';
            stars[i].style.animationDelay = Math.floor(Math.random().toFixed(1) * i) + 's';
        }
    }
    starPosition(200);

    const myForm = document.querySelector ('#myform'); 
    const madlib = document.querySelector ('#madlib');

    
    myForm.addEventListener('submit', function(event){
        event.preventDefault(); 
        const noun1 = document.querySelector('#noun1').value; 
        const integer1 = document.querySelector('#integer1').value; 
        const noun2 = document.querySelector('#noun2').value; 
        const integer2 = document.querySelector('integer2').value; 
        const noun3 = document.querySelector('#noun3').value; 
        const adj2 = document.querySelector('#adj2').value; 
        
        let myText;
     

        if (noun1 && integer1  && noun2 && integer2 && noun3  && adj2) { 
            myText =  `You accidentally crossed the wormhole during
            an interstellar journey and arrived at a planet
            called ${noun1} Star ${integer1} light years away from
            The Earth. This planet is very suitable for life 
            and its specialty is ${noun2}. Fortunately, there are 
            ${integer2} ${noun3} from the earth on your spaceship. 
            You built a ${noun3} empire together, and you 
            have lived a ${adj2} life ever since.`; 
        }
        else { 
            myText = "Please give me words so I can make your Mad Libl";
        }

        madlib.innerHTML = myText; 

        var formData = document.querySelectorAl1("input[type=text]"); 
        
        for (var eachField of formData) { 
            eachField.value = ""; 
        }
        
    });


      
    /*document.querySelector('.open').addEventListener('click', function (event) { 
        event.preventDefault(); 
        document.getElementById('overlay').className = 'showing'; 
    }); 
    
    document.querySelector('.close').addEventListener('click', function (event) { 
        event.preventDefault(); 
        document.getElementById('overlay').className = 'hidden';

    });

    document.addEventListener('keydown', function (event) { 
        if (event.key == 'Escape') { 
            document.getElementById('overlay').className = 'hidden';
        }
    });*/
    

})();