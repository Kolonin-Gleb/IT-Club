let sideBlock = document.getElementById("sideBlock");
let mainBlock = document.getElementById("mainBlock");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
// принимается разрешение экрана пользователя, для дальнейшего вычисления размера блока, относительно высоты viewport-а 

function Oliver(index) {
    if (index !== 0){
        document.getElementById("title").innerHTML = eventsList[index].title;
        document.getElementById("description").innerHTML = eventsList[index].description;
        mainBlock.style.backgroundImage = eventsList[index].background;
        eventsList[index].element.scrollIntoView({block: "center", behavior: "smooth"})
    }
}

let eventsList = [];

let activeElemI = 0;

eventsList.push(
    new EventsSideBlock({
        title: "", 
        background: "", 
        description: "", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "Выступление Огурлиева Гамида \"О ИИ\" ", 
        background: 'url(images/gallery_of_events/1_Semestr/1_Gamid_about_AI.jpg)',
        description:    
        "Октябрь 2020 года. <br> Одно из первых выступлений в клубе. <br> Студент 3 курса направления Программирование - Огурлиев Гамид согласился выступить и рассказать нам о Искуственном интелекте. <br> Его презентация была интересной и он ответил на все наши вопросы.",
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "Изучение устройства ПК", 
        background: "url(images/gallery_of_events/1_Semestr/2_PC_system.jpg)", 
        description: "Октябрь 2020 года. <br> Колонин Глеб принес старый офисный компьютер. <br> Вместе мы изучили его устройство и узнали какими кабелями куда нужно подключать его комплектующие.", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "Мастер-класс Геворкяна Марата по C#", 
        background: "url(images/gallery_of_events/1_Semestr/3_Marat_Csharp.jpg)", 
        description: "Декарь 2020 года. <br> Геворкян Марат подготовил презентацию и провел мастер-класс по C#. <br> По окончанию мастер-класса мы создали калькуляторы.", 
        daddy: sideBlock
    }),
    
    new EventsSideBlock({
        title: "Мастер-класс Колонина Глеба по Основам git и GitHub", 
        background: "url(images/gallery_of_events/1_Semestr/4_Gleb_GitHub.jpg)", 
        description: "Декарь 2020 года. <br> Колонин Глеб подготовил презентацию и провел мастер-класс по \"Основам git и GitHub\". <br> В конце дал рекомендации и ресурсы для дальнейшего изучения.", 
        daddy: sideBlock
    }),
    
    // 2 Semestr

    new EventsSideBlock({
        title: "sugar daddy", 
        background: "url(https://birdinflight.imgix.net/wp-content/uploads/2019/02/moose-2.png?auto=format&q=70&fit=crop&crop=faces)", 
        description: "oh my", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "АДАДАДАДАДАДАДДАДА", 
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
