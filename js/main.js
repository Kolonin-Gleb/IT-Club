let sideBlock = document.getElementById("sideBlock");
let mainBlock = document.getElementById("mainBlock");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
// принимается разрешение экрана пользователя, для дальнейшего вычисления размера блока, относительно высоты viewport-а 

function Oliver(index) {
    document.getElementById("title").innerHTML = eventsList[index].title;
    document.getElementById("description").innerHTML = eventsList[index].description;
    mainBlock.style.backgroundImage = eventsList[index].background;
}

let eventsList = [];

eventsList.push(
    new EventsSideBlock({
        title: "help((", 
        background: "url(https://images11.esquire.ru/upload/custom/18e/18e0e0775cbd25bdadf3645cd6e907e0.jpg)", 
        description: "i need help asap please", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "попался)))", 
        background: "url(https://st3.depositphotos.com/11233746/15685/i/600/depositphotos_156854540-stock-photo-businessman-meditating-in-office.jpg)", 
        description: "аххаххаххаххаххаах <strong> аахахаххаххаххахахахаххахх </strong> аххаххаххааха ахахаххахха ххахахахаххаххаххаххаххаахааха хаххаххаххахахахаххах хаххаххах хаахаахахаххах хаххахахахахх аххаххаххаххаа хаахахаххахха ххахахахаххахха ххаххаххаахаахах   ххаххаххаххахх аахаахахаххахх аххахахахаххах хаххаххаххааха ахахаххаххахха хахахаххаххахх аххаххаахааха хаххаххаххаха хахаххаххахха ххаххаахаахах аххаххаххахах   хахаххаххахха ххаххаахаахах аххаххаххахаха хаххаххаххахха ххаахаахахахха ххаххахахахахх аххаххаххаххаа хаахахаххаххаххахахах", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "теневое клонирование", 
        background: "url(https://memepedia.ru/wp-content/uploads/2018/09/stock-photo-backstabber-original-360x270.jpg)", 
        description: "йоу собаки я наруто узумаки", 
        daddy: sideBlock
    }),
    
    new EventsSideBlock({
        title: "смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно", 
        background: "url(https://st.focusedcollection.com/11440334/i/650/focused_143164391-stock-photo-business-people-communicating-in-office.jpg)", 
        description: "смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно", 
        daddy: sideBlock
    }),
    
    new EventsSideBlock({
        title: "sugar daddy", 
        background: "url(https://birdinflight.imgix.net/wp-content/uploads/2019/02/moose-2.png?auto=format&q=70&fit=crop&crop=faces)", 
        description: "oh my", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "ад", 
        background: "url(https://teknoblog.ru/wp-content/uploads/2020/08/Ofis.jpg)", 
        description: "хахад какой-то", 
        daddy: sideBlock
    })
);

Oliver(eventsList.length - 1);
// заголовок главного блока равен первому слева

mainBlock.style.backgroundImage = eventsList[eventsList.length - 1].background;
// фон правого блока такой же, как у первого блока слева

for(let index = 0; index < eventsList.length; index++){
    document.getElementById("sideBlock").children[index].children[0].addEventListener("click", function() {Oliver(index);});
}
