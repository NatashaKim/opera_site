const content = document.querySelectorAll(".waves_rect");
  let currentPos = window.pageYOffset;

  const callDistort = function () {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.35;

  for(i=0;i<7;i++)
      content[i].style.transform = "skewY(" + speed + "deg)";
      currentPos = newPos;
      requestAnimationFrame(callDistort);
  };

  callDistort();
