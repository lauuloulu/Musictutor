//Botones//
let btn1 = document.getElementById("btn1"); //
let btn2 = document.getElementById("btn2"); //
let btn3 = document.getElementById("btn3"); //
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");

//Sonidos//

let bombo = document.getElementById("bombo"); //
let crash = document.getElementById("crash"); //
let hithat = document.getElementById("hit-hat"); //
let redoblante = document.getElementById("redoblante");
let tom1 = document.getElementById("tom1");
let tom2 = document.getElementById("tom2");
let tom3 = document.getElementById("tom3");
let tom4 = document.getElementById("tom4");

//Funcion botón + sonido//

function bomboPlay() {
  bombo.currentTime = 0
  bombo.play();
}
btn1.addEventListener("click", bomboPlay, false);

function crashPlay() {
  crash.currentTime = 0
  crash.play();
}
btn2.addEventListener("click", crashPlay, false);

function hitHatPlay() {
  hithat.currentTime = 0
  hithat.play();
}
btn3.addEventListener("click", hitHatPlay, false);

function redoblantePlay() {
  redoblante.currentTime = 0
  redoblante.play();
}
btn4.addEventListener("click", redoblantePlay, false);

function tom1Play() {
  tom1.currentTime = 0
  tom1.play();
}
btn5.addEventListener("click", tom1Play, false);

function tom2Play() {
  tom2.currentTime = 0
  tom2.play();
}
btn6.addEventListener("click", tom2Play, false);

function tom3Play() {
  tom3.currentTime = 0
  tom3.play();
}
btn7.addEventListener("click", tom3Play, false);

function tom4Play() {
  tom4.currentTime = 0
  tom4.play();
}
btn8.addEventListener("click", tom4Play, false);
