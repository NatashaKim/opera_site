let animSix  = anime({
  targets: '.goods_floating',
  keyframes: [
    {translateY: 7},
    {translateY: -7},
    {translateY: 7},
    {translateY: -7},
    {translateY: 0}
  ],
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)',
  delay: 1000,
  duration: 10000,
  loop: true
});


var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".tr");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
