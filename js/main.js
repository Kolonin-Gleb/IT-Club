let sideBlock = document.getElementById("sideBlock");
let mainBlock = document.getElementById("mainBlock");

let eventsList = [];
eventsList.push(
    new EventsSideBlock({title: "слева горы", 
        background: "aqua", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({title: "КАВКАЗ", 
        background: "greenyellow", 
        text: "", 
        daddy: sideBlock
    }),
    
    new EventsSideBlock({title: "крутотенюшка", 
        background: "rgb(43, 220, 226)", 
        text: "", 
        daddy: sideBlock
    }),

);

mainBlock.innerHTML = eventsList[eventsList.length - 1].title;

mainBlock.style.background = eventsList[eventsList.length - 1].background;
// фон правого блока такой же, как у первого блока слева

// eventsList[eventsList.length - 1].background = "#34115c"


// mainBlock.style.backgroundColor = "red";