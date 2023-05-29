//Botones//
let btn1= document.getElementById('btn1')//
let btn2= document.getElementById('btn2')//
let btn3= document.getElementById('btn3') //
let btn4= document.getElementById('btn4')
let btn5= document.getElementById('btn5')
let btn6= document.getElementById('btn6')
let btn7= document.getElementById('btn7')
let btn8= document.getElementById('btn8')

//Sonidos//

let bombo= document.getElementById('bombo')//
let crash= document.getElementById('crash')//
let hithat= document.getElementById('hit-hat') //
let redoblante= document.getElementById('redoblante')
let tom1= document.getElementById('tom1')
let tom2= document.getElementById('tom2')
let tom3= document.getElementById('tom3')
let tom4= document.getElementById('tom4')

//Funcion botón + sonido//


  
  let bomboPlay = function (e) {
    bombo.play();
  };
  btn1.addEventListener("click", bomboPlay, false);
  btn1.addEventListener("mouseover", bomboPlay, false);
  
  let crashPlay = function (e) {
    crash.play();
  };
  btn2.addEventListener("click", crashPlay, false);
  btn2.addEventListener("mouseover", crashPlay, false);

  let hitHatPlay = function (e) {
    hithat.play();
  };
  btn3.addEventListener("click", hitHatPlay, false);
  btn3.addEventListener("mouseover", hitHatPlay, false);


  let redoblantePlay = function (e) {
    redoblante.play();
  };
  btn4.addEventListener("click", redoblantePlay, false);
  btn4.addEventListener("mouseover", redoblantePlay, false);

  let tom1Play = function (e) {
    tom1.play();
  };
  btn5.addEventListener("click", tom1Play, false);
  btn5.addEventListener("mouseover", tom1Play, false);
  
  
  
  let tom2Play = function (e) {
    tom2.play();
  };
  btn6.addEventListener("click", tom2Play, false);
  btn6.addEventListener("mouseover", tom2Play, false);
  
  
  let tom3Play = function (e) {
  
    tom3.play();
  };
  btn7.addEventListener("click", tom3Play, false);
  btn7.addEventListener("mouseover", tom3Play, false);
  
  
  let tom4Play = function (e) {
  
    tom4.play();
  };
  btn8.addEventListener("click", tom4Play, false);
  btn8.addEventListener("mouseover", tom4Play, false);