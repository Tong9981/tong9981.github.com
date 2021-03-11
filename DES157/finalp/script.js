(function(){
    'use strict';
    var playB = document.getElementById('play');
    var nextB = document.getElementById('next');
    var startPage = document.getElementById('start');
    var afterClick = document.getElementById('afterclick');

    

    const playSound = new Audio('sound/play.mp3');
    

    playB.addEventListener('click', function() {

        playSound.play();
        startPage.className = 'hidden';
        afterClick.className = 'showing';
    });

    nextB.addEventListener('click', function() {
        startPage.className = 'hidden';
        afterClick.className = 'hidden';
        gameBlocks.className = 'showing';
    });



}());