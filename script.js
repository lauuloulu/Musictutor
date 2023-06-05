const btns = document.querySelectorAll('.btn-container button');


document.addEventListener('keydown', function(event) {
  if (event.key === 'w' || event.key === 'W') {
    var audio = document.getElementById("bombo");
    audio.play();
    document.querySelector('.btn-container button[data-key="w"]').classList.add('let-active');
  } else if (event.key === 'u' || event.key === 'U') {
    var audio = document.getElementById("crash");
    audio.play();
    document.querySelector('.btn-container button[data-key="u"]').classList.add('let-active');
  } else if (event.key === 'f' || event.key === 'F') {
    var audio = document.getElementById("hithat");
    audio.play();
    document.querySelector('.btn-container button[data-key="f"]').classList.add('let-active');
  } else if (event.key === 'g' || event.key === 'G') {
    var audio = document.getElementById("redoblante");
    audio.play();
    document.querySelector('.btn-container button[data-key="g"]').classList.add('let-active');
  } else if (event.key === 'd' || event.key === 'D') {
    var audio = document.getElementById("tom1");
    audio.play();
    document.querySelector('.btn-container button[data-key="d"]').classList.add('let-active');
  } else if (event.key === 'h' || event.key === 'H') {
    var audio = document.getElementById("tom2");
    audio.play();
    document.querySelector('.btn-container button[data-key="h"]').classList.add('let-active');
  } else if (event.key === 'c' || event.key === 'C') {
    var audio = document.getElementById("tom3");
    audio.play();
    document.querySelector('.btn-container button[data-key="c"]').classList.add('let-active');
  } else if (event.key === 'b' || event.key === 'B') {
    var audio = document.getElementById("tom1");
    audio.play();
    document.querySelector('.btn-container button[data-key="b"]').classList.add('let-active');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'w' || event.key === 'W' || event.key === 'u' || event.key === 'U' || event.key === 'f' || event.key === 'F' || event.key === 'g' || event.key === 'G' || event.key === 'd' || event.key === 'D' || event.key === 'h' || event.key === 'H' || event.key === 'c' || event.key === 'C' || event.key === 'b' || event.key === 'B') {
    document.querySelector(`.btn-container button[data-key="${event.key.toLowerCase()}"]`).classList.remove('let-active');
  }
});

/*Click Event*/

function soundPlay(element) {
  element.currentTime = 0;
  element.play();
}

btn1.addEventListener("click", function() {
  soundPlay(bombo);
}, false);

btn2.addEventListener("click", function() {
  soundPlay(crash);
}, false);

btn3.addEventListener("click", function() {
  soundPlay(hithat);
}, false);

btn4.addEventListener("click", function() {
  soundPlay(redoblante);
}, false);

btn5.addEventListener("click", function() {
  soundPlay(tom1);
}, false);

btn6.addEventListener("click", function() {
  soundPlay(tom2);
}, false);

btn7.addEventListener("click", function() {
  soundPlay(tom3);
}, false);

btn8.addEventListener("click", function() {
  soundPlay(tom4);
}, false);

