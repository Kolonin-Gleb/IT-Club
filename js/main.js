let sideBlock = document.getElementById("sideBlock");
let mainBlock = document.getElementById("mainBlock");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
// принимается разрешение экрана пользователя, для дальнейшего вычисления размера блока, относительно высоты viewport-а 

let eventsList = [];

// let backgroundGrey = 111;
// for(let i = 0; i < eventsList.length; i++) {
//     eventsList[i].background = '#' + backgroundGrey;
//     if (backgroundGrey < 1000) {
//         backgroundGrey += 111;    
//     }
//     else {
//         continue;
//     }
// }
// попытка сделать градацию серости фонов элементов списка, но не получилось чёта

eventsList.push(
    new EventsSideBlock({title: "с днём рождения", 
        background: "red", 
        text: "", 
        daddy: sideBlock
    }),
    
    new EventsSideBlock({title: "приятного аппетита", 
        background: "orange", 
        text: "", 
        daddy: sideBlock
    }),
    
    new EventsSideBlock({title: "с днём благодарения", 
        background: "yellow", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({title: "здравствуйте", 
        background: "green", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({title: "с днём победы", 
        background: "blue", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({title: "до свидания", 
        background: "darkblue", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({title: "с пасхой", 
        background: "purple", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({title: "будьте здоровы", 
        background: "palevioletred", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({title: "спасибо", 
        background: "rosybrown", 
        text: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({title: "с новым годом", 
        background: "darksalmon", 
        text: "", 
        daddy: sideBlock
    })
);

mainBlock.innerHTML = eventsList[eventsList.length - 1].title;
// заголовок главного блока равен первому слева

mainBlock.style.background = eventsList[eventsList.length - 1].background;
// фон правого блока такой же, как у первого блока слева

// let height = ((0.7*vh)/3); 
// // высота одного элемента
// let count = 3; 
// // количество блоков, на которое листается список

// let position = height*7; 
// // координата y с которой начинается отсчёт

// document.querySelector('.arrow_up').onclick = function() {
//     position += height * count; 
//     // начальная координата увеличивается на "три элемента"
//     position = Math.min(position, height * (eventsList.length - count)); 
//     // сравнение, position принимает меньшее значение: или position, посчитанный ранее, или координату предпредпредпоследнего элемента (чтобы не перематывало больше чем до последнего, а точнее до 3 с конца, элемента)
//     sideBlock.style.transform = 'translateY(' + position + 'px)';
//     console.log(position)
//     // у sideBlock-а изменяется значение селектора
// };

// document.querySelector('.arrow_down').onclick = function() {
//     position -= height * count;
//     // начальная координата уменьшается на "три элемента"
//     position = Math.max(0, position); 
//     // аналогично первому, только здесь position не может быть меньше нуля, то есть координаты у последнего элемента
//     sideBlock.style.transform = 'translateY(' + position + 'px)';
// };

