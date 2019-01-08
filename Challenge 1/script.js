

window.onkeyup = function(e) {
    if(e.keyCode == '65') {
        let audioElement = document.getElementById('audio1');
        let keyElement = document.querySelectorAll('[data-key="A"]');
        audioElement.play();
        keyElement[0].classList.add("press");
        setTimeout(function() {
  keyElement[0].classList.remove("press");
}, 300);
    } else if(e.keyCode == '83') {
        let audioElement = document.getElementById('audio2');
        let keyElement = document.querySelectorAll("[data-key='S']");
        audioElement.play();
        keyElement[0].classList.add("press");
        setTimeout(function() {
  keyElement[0].classList.remove("press");
}, 300);
    } else if(e.keyCode == '68') {
        let audioElement = document.getElementById('audio3');
        let keyElement = document.querySelectorAll("[data-key='D']");
        audioElement.play();
        keyElement[0].classList.add("press");
        setTimeout(function() {
  keyElement[0].classList.remove("press");
}, 300);
    } else if(e.keyCode == '70') {
        let audioElement = document.getElementById('audio4');
        let keyElement = document.querySelectorAll("[data-key='F']");
        audioElement.play();
        keyElement[0].classList.add("press");
        setTimeout(function() {
  keyElement[0].classList.remove("press");
}, 300);
    } else if(e.keyCode == '71') {
        let audioElement = document.getElementById('audio5');
        let keyElement = document.querySelectorAll("[data-key='G']");
        audioElement.play();
        keyElement[0].classList.add("press");
        setTimeout(function() {
  keyElement[0].classList.remove("press");
}, 300);
    } else if(e.keyCode == '72') {
        let audioElement = document.getElementById('audio6');
        let keyElement = document.querySelectorAll("[data-key='H']");
        audioElement.play();
        keyElement[0].classList.add("press");
        setTimeout(function() {
  keyElement[0].classList.remove("press");
}, 300);
    } else if(e.keyCode == '74') {
        let audioElement = document.getElementById('audio7');
        let keyElement = document.querySelectorAll("[data-key='J']");
        audioElement.play();
        keyElement[0].classList.add("press");
        setTimeout(function() {
  keyElement[0].classList.remove("press");
}, 300);
    } else if(e.keyCode == '75') {
        let audioElement = document.getElementById('audio8');
        let keyElement = document.querySelectorAll("[data-key='K']");
        audioElement.play();
        keyElement[0].classList.add("press");
        setTimeout(function() {
  keyElement[0].classList.remove("press");
}, 300);
    } else if(e.keyCode == '76') {
        let audioElement = document.getElementById('audio9');
        let keyElement = document.querySelectorAll("[data-key='L']");
        audioElement.play();
        keyElement[0].classList.add("press");
        setTimeout(function() {
  keyElement[0].classList.remove("press");
}, 300);
    }

 }