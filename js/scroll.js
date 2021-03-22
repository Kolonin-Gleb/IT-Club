requestAnimationFrame(() => {
    const boxes = document.querySelectorAll(".box");
    let carousel = document.getElementById("carousel")

    function getIntersectionRatio(i) {
      const a = [carousel.scrollTop, carousel.scrollTop + carousel.clientHeight]; 
      const b = [boxes[i].offsetTop, boxes[i].offsetTop + boxes[i].clientHeight];
  
      const max = Math.max(a[0], b[0]);
      const min = Math.min(a[1], b[1]);
  
      return Math.max(0, (min - max) / (b[1] - b[0]));
    }
  
    function onScroll() {
      var boxes = document.querySelectorAll(".box");
      for (let i = 0; i < boxes.length; i += 1) {
        const intersection = getIntersectionRatio(i);
        const top = boxes[i].offsetTop - carousel.scrollTop < 0;
  
        boxes[i].firstElementChild.style = `
        transform-origin: ${top ? "bottom center" : "top center"};
        position: ${top ? "fixed" : "absolute"};
        transform: scale(${intersection});
        opacity: ${intersection};
        background: ${eventsList[i].background};
        `;
      }
      requestAnimationFrame(onScroll);
    }
  
    onScroll();
  });