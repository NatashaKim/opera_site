let images = [];
let dots = [];
let imgCount = 26;

function initImages(){
  for(i=0; i < imgCount; i++){
    images[i]=document.querySelector('#img'+i);
    dots[i]= document.querySelector('#dot'+i);
  }
}

function scroll(idx){
  if (idx >= imgCount) idx = imgCount-1;

  for (i=0; i < imgCount;i++){
    images[i].style.opacity = i == idx ? 1 : 0;
    dots[i].style.opacity = i == idx ? 0.5 : 0;
  }
}

document.querySelector('#dot0').onclick = function() {scroll(0);}
document.querySelector('#dot1').onclick = function() {scroll(1);}
document.querySelector('#dot2').onclick = function() {scroll(2);}
document.querySelector('#dot3').onclick = function() {scroll(3);}
document.querySelector('#dot4').onclick = function() {scroll(4);}
document.querySelector('#dot5').onclick = function() {scroll(5);}
document.querySelector('#dot6').onclick = function() {scroll(6);}
document.querySelector('#dot7').onclick = function() {scroll(7);}
document.querySelector('#dot8').onclick = function() {scroll(8);}
document.querySelector('#dot9').onclick = function() {scroll(9);}
document.querySelector('#dot10').onclick = function() {scroll(10);}
document.querySelector('#dot11').onclick = function() {scroll(11);}
document.querySelector('#dot12').onclick = function() {scroll(12);}
document.querySelector('#dot13').onclick = function() {scroll(13);}
document.querySelector('#dot14').onclick = function() {scroll(14);}
document.querySelector('#dot15').onclick = function() {scroll(15);}
document.querySelector('#dot16').onclick = function() {scroll(16);}
document.querySelector('#dot17').onclick = function() {scroll(17);}
document.querySelector('#dot18').onclick = function() {scroll(18);}
document.querySelector('#dot19').onclick = function() {scroll(19);}
document.querySelector('#dot20').onclick = function() {scroll(20);}
document.querySelector('#dot21').onclick = function() {scroll(21);}
document.querySelector('#dot22').onclick = function() {scroll(22);}
document.querySelector('#dot23').onclick = function() {scroll(23);}
document.querySelector('#dot24').onclick = function() {scroll(24);}
document.querySelector('#dot25').onclick = function() {scroll(25);}

let controller = new ScrollMagic.Controller();
initImages();



var scene = new ScrollMagic.Scene({
  duration: 20000
});
scene.setPin('#wrapper');

        scene.on("progress", function (e) {

          scroll(Math.round(e. progress * imgCount));
      });

        scene.addTo(controller);
