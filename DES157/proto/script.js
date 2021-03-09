(function () {
    'use strict';
    alert("Hello! Welcome to my site. Here are a few tasks I would like you to do: 1. Click the text below the different circular images to reach different positions on the page. 2. Is the change in background reasonable？ 3. Try to click the back to top button" );
    
    var pageTop; 
    const bodyTag = document.querySelector(' body'); 
    window.addEventListener('scroll', function(){ 
        pageTop = window.pageYOffset; 
        
        switch(true){ 
            case pageTop < 1000: bodyTag.className="one"; break; 
            case pageTop < 3000: bodyTag.className="two"; break; 
            case pageTop < 5000: bodyTag.className="three"; break; 
            case pageTop < 7000: bodyTag.className="four"; break; 
            case pageTop < 9000: bodyTag.className="five"; break;
            default: bodyTag.className="five"; 
        }
    }); 

    const navLinks = document.querySelectorAll('nav ul li a'); 
    navLinks.forEach(function (eachLink) { 
        eachLink.addEventListener('click', smoothScroll); 
    });

    function smoothScroll(event){ 
        event.preventDefault(); 
        const targetID = event.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID); 

        const originalTop = Math.floor(targetAnchor.getBoundingClientRect(). 
        top) - 70; 
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' }); 
        console.log(originalTop);
    }
    })();


    window.addEventListener('load', function() { 
    const posts = document.querySelectorAll('section'); 
    let postTops = []; 
    let pagetop; 
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;



    resetPagePosition();

    window.addEventListener( 'scroll', function() { 
        pagetop = window.pageYOffset + 250; 
        //console.log(pagetop);

        if (pagetop > postTops[counter]) { 
            counter++; 
            console.log(`scrolling down ${counter}`); 
        } else if (counter > 1 && pagetop < postTops[counter-1]) { 
            counter--; 
            console.log(`scrolling up ${counter}`);
        }  // end window scroll function

        if (counter != prevCounter) { 
            navLinks.forEach(function(eachLink) { 
                eachLink.removeAttribute('class'); 
            });

            const thisLink = document.querySelector (`nav ul li:nth-child (${counter}) a`); 
            thisLink.className = 'selected'; 
            prevCounter = counter;
        }
    });
    
    window.addEventListener('resize', function() { 
        clearTimeout(doneResizing); 
        doneResizing = setTimeout( function(){
            resetPagePosition(); 
        }, 500); 
    });

    function resetPagePosition(){ 
        postTops = []; 
        posts.forEach(function(post) {
            postTops.push (Math.floor (post.getBoundingClientRect().top) + window.pageYoffset); 
        }); 
        
        const pagePosition = window.pageYOffset + 250;
        counter = 0;
        postTops.forEach( function(post){ if( pagePosition > post ){ counter++; }}); 
        navLinks.forEach(function (eachLink) { eachLink.removeAttribute ('class'); }); 
        const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`); 
        thisLink.className = 'selected';
    }

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');

    hotSpots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function () {
            theImg.className = 'start';
        });
    });

    function zoomPhoto(event) {
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner) {
            case 'topleft': theImg.className = 'topleft'; break;
            case 'topright': theImg.className = 'topright'; break;
            case 'bottomleft': theImg.className = 'bottomleft'; break;
            case 'bottomright': theImg.className = 'bottomright'; break;
            case 'center': theImg.className = 'center'; break;
        }
    }
    


});