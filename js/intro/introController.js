let introPhotos = document.getElementById("intro");

for (let i = 1; i <= 10; i++) {
    let div = Object.assign(document.createElement("div"), {style: "width: 100px; height: 300px;"});
    introPhotos.appendChild(div);
    introPhotos.lastElementChild.style.background = `url(images/gallery_intro/${i}.jpg)`;
}
