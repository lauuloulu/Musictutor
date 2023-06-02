function soundPlay(element) {
  element.currentTime = 0;
  element.play();
}

/*const btnActive = document.getElementsByClassName('btnactive');

document.addEventListener('keydown', function(event) {
  btnActive.classList.add('active');
});

document.addEventListener('keyup', function(event) {
  btnActive.classList.remove('active');
});*/

btn1.addEventListener("click", function() {
  soundPlay(bombo);
}, false);

document.addEventListener('keydown', function(event) {
  if (event.key === 'w' || event.key === 'W') {
    var audio = document.getElementById("bombo");
    audio.play();
  }
});

btn2.addEventListener("click", function() {
  soundPlay(crash);
}, false);

document.addEventListener('keydown', function(event) {
  if (event.key === 'u' || event.key === 'U') {
    var audio = document.getElementById("crash");
    audio.play();
  }
});

btn3.addEventListener("click", function() {
  soundPlay(hithat);
}, false);

document.addEventListener('keydown', function(event) {
  if (event.key === 'f' || event.key === 'F') {
    var audio = document.getElementById("hithat");
    audio.play();
  }
});

btn4.addEventListener("click", function() {
  soundPlay(redoblante);
}, false);

document.addEventListener('keydown', function(event) {
  if (event.key === 'g' || event.key === 'G') {
    var audio = document.getElementById("redoblante");
    audio.play();
  }
});


btn5.addEventListener("click", function() {
  soundPlay(tom1);
}, false);

document.addEventListener('keydown', function(event) {
  if (event.key === 'd' || event.key === 'D') {
    var audio = document.getElementById("tom1");
    audio.play();
  }
});

btn6.addEventListener("click", function() {
  soundPlay(tom2);
}, false);

document.addEventListener('keydown', function(event) {
  if (event.key === 'h' || event.key === 'H') {
    var audio = document.getElementById("tom2");
    audio.play();
  }
});

btn7.addEventListener("click", function() {
  soundPlay(tom3);
}, false);

document.addEventListener('keydown', function(event) {
  if (event.key === 'c' || event.key === 'C') {
    var audio = document.getElementById("tom3");
    audio.play();
  }
});

btn8.addEventListener("click", function() {
  soundPlay(tom4);
}, false);

document.addEventListener('keydown', function(event) {
  if (event.key === 'b' || event.key === 'B') {
    var audio = document.getElementById("tom4");
    audio.play();
  }
});