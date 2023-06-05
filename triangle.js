const btns = document.querySelectorAll('.btn-container1-tri button');


document.addEventListener('keydown', function(event) {
  if (event.key === 't' || event.key === 'T') {
    var audio = document.getElementById("campana1");
    audio.play();
    document.querySelector('.btn-container1-tri button[data-key="t"]').classList.add('let-active');
  } else if (event.key === 'o' || event.key === 'O') {
    var audio = document.getElementById("campana2");
    audio.play();
    document.querySelector('.btn-container1-tri button[data-key="o"]').classList.add('let-active');
  } else if (event.key === 'n' || event.key === 'N') {
    var audio = document.getElementById("campana3");
    audio.play();
    document.querySelector('.btn-container1-tri button[data-key="n"]').classList.add('let-active');
}
});

document.addEventListener('keyup', function(event) {
    if (event.key === 't' || event.key === 'T' || event.key === 'o' || event.key === 'O' || event.key === 'n' || event.key === 'N') {
      document.querySelector(`.btn-container button[data-key="${event.key.toLowerCase()}"]`).classList.remove('let-active');
    }
  });

  function soundPlayTri (element) {
    element.currentTime = 0;
    element.play();
     }

    btn8tri.addEventListener("click", function() {
        soundPlayTri(campana1);
      }, false);
      
    btn9tri.addEventListener("click", function() {
        soundPlayTri(campana2);
      }, false);
      
    btn10tri.addEventListener("click", function() {
        soundPlayTri(campana3);
      }, false);
      