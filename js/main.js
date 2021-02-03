let sideBlock = document.getElementById("sideBlock");
let mainBlock = document.getElementById("mainBlock");

let eventsList = [];
eventsList.push(
    new EventsSideBlock("слева горы", "", "", sideBlock),
    new EventsSideBlock("а вдали", "", "", sideBlock),
    new EventsSideBlock("КАВКАЗ", "", "", sideBlock),
    new EventsSideBlock("крутотенюшка", "red", "", sideBlock)

);

mainBlock.innerHTML = eventsList[eventsList.length - 1].title;

mainBlock.style.backgroundColor = eventsList[eventsList.length - 1].background; 
// фон правого блока такой же, как у первого блока слева

// mainBlock.style.backgroundColor = "red";