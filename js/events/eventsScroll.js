// Здесь описана анимация изменения размера и цвета пролистываемых мероприятий
requestAnimationFrame(() => {
    const boxes = document.querySelectorAll(".box");
    let carousel = document.getElementById("carouselGallery")

    function getIntersectionRatio(i) {
      const a = [carousel.scrollTop, carousel.scrollTop + carousel.clientHeight]; 
      const b = [boxes[i].offsetTop, boxes[i].offsetTop + boxes[i].clientHeight];
  
      const max = Math.max(a[0], b[0]);
      const min = Math.min(a[1], b[1]);
  
      return Math.max(0, (min - max) / (b[1] - b[0]));
    }
  
    function onScroll() {
      var boxes = document.querySelectorAll(".bigger .box");
      let lastActiveElemI = 0;
      for (let i = 0; i < boxes.length; i++) {
        const intersection = getIntersectionRatio(i);
        const top = boxes[i].offsetTop - carousel.scrollTop < 0;
        // console.log(eventsList[i]);
        boxes[i].firstElementChild.style = `
        transform-origin: ${top ? "bottom center" : "top center"};
        position: ${top ? "fixed" : "absolute"};
        transform: scale(${intersection});
        opacity: ${intersection};
        background-image: ${eventsList[i].background};
        `;

        if (intersection === 1){
          lastActiveElemI = i;
        }
      }
      if (lastActiveElemI !== activeElemI && lastActiveElemI !== 0) {
        boxes[activeElemI].classList.remove("active");
        boxes[lastActiveElemI].classList.add("active");
        activeElemI = lastActiveElemI;
        document.getElementById("blockDate").innerHTML = `${eventsList[activeElemI].year} год &nbsp;&nbsp;&nbsp;&nbsp; ${eventsList[lastActiveElemI].month}`
      }
      requestAnimationFrame(onScroll);
    }
  
    onScroll();
  });

