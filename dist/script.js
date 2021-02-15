document.body.innerHTML += `
  <div style="height: 16px"></div>
`;

for (let i = 0; i < 10; i += 1) {
  document.body.innerHTML += `
    <div class="box"><div>
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f079ba"/>
            <stop offset="100%" stop-color="#e34a82"/>
          </linearGradient>
        </defs>
        <path fill="url(#linear)" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,197.3C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <div>Bank</div>
      <div class="content">
        <div>
          <div class="label">Card Holder name</div>
          <div class="value">Colin van Eenige</div>
        </div>
        <div>
          <div class="label">Expiry Date</div>
          <div class="value value-right">05/25</div>
        </div>
      </div>
    </div></div>
  `;
}

requestAnimationFrame(() => {
  const boxes = document.querySelectorAll(".box");

  function getIntersectionRatio(i) {
    const a = [window.scrollY, window.scrollY + window.innerHeight];
    const b = [boxes[i].offsetTop, boxes[i].offsetTop + boxes[i].clientHeight];

    const max = Math.max(a[0], b[0]);
    const min = Math.min(a[1], b[1]);

    return Math.max(0, (min - max) / (b[1] - b[0]));
  }

  function onScroll() {
    var boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i += 1) {
      const intersection = getIntersectionRatio(i);
      const top = boxes[i].offsetTop - window.pageYOffset < 0;
      boxes[i].firstChild.style.cssText = `
        transform-origin: ${top ? "center center" : "top center"};
        position: ${top ? "fixed" : "absolute"};
        transform: scale(${intersection});
        opacity: ${intersection};
      `;
    }
    requestAnimationFrame(onScroll);
  }

  onScroll();
});

// Option with less CPU usage, but also less FPS / smooth
// window.addEventListener('scroll', onScroll);