let images = [];
let imgCount = 26;

function initImages(){
  for(i=0; i < imgCount; i++){
    images[i]=document.querySelector('#img'+i);
  }
}

function scroll(idx){
  if (idx >= imgCount) idx = imgCount-1;

  for (i=0; i < imgCount;i++){
    images[i].style.opacity = i == idx ? 1 : 0;
  }

}

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
