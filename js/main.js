let sideBlock = document.getElementById("sideBlock");
let mainBlock = document.getElementById("mainBlock");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
// принимается разрешение экрана пользователя, для дальнейшего вычисления размера блока, относительно высоты viewport-а 

function Oliver(i) {
    mainBlock.innerHTML = eventsList[i].title;
    mainBlock.style.backgroundImage = eventsList[i].background;
}

let eventsList = [];

eventsList.push(
    new EventsSideBlock({
        title: "help((", 
        background: "url(https://images11.esquire.ru/upload/custom/18e/18e0e0775cbd25bdadf3645cd6e907e0.jpg)", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "попался)))", 
        background: "url(https://st3.depositphotos.com/11233746/15685/i/600/depositphotos_156854540-stock-photo-businessman-meditating-in-office.jpg)", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "теневое клонирование", 
        background: "url(https://memepedia.ru/wp-content/uploads/2018/09/stock-photo-backstabber-original-360x270.jpg)", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "sugar daddy", 
        background: "url(https://birdinflight.imgix.net/wp-content/uploads/2019/02/moose-2.png?auto=format&q=70&fit=crop&crop=faces)", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "ад", 
        background: "url(https://teknoblog.ru/wp-content/uploads/2020/08/Ofis.jpg)", 
        text: "", 
        daddy: sideBlock
    })
);
var img = new Image();
mainBlock.innerHTML = eventsList[eventsList.length - 1].title;
// заголовок главного блока равен первому слева

mainBlock.style.backgroundImage = eventsList[eventsList.length - 1].background;
// фон правого блока такой же, как у первого блока слева

for(let i = 0; i < document.getElementById("sideBlock").children.length; i++){
    document.getElementById("sideBlock").children[i].children[0].addEventListener("click", function() {Oliver(i);});
    console.log(document.getElementById("sideBlock").children[i].children[0]);
}
