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
        eventsList[index].element.scrollIntoView({block: "center", behavior: "smooth"});
    }
}

let eventsList = [];

let activeElemI = 0;

eventsList.push(
    new EventsSideBlock({
        title: "", 
        background: "", 
        description: "", 
        daddy: sideBlock,
        year: 2020,
        semester: '1-ый семестр'
        
    }),

    new EventsSideBlock({
        title: "Выступление Огурлиева Гамида \"О ИИ\" ", 
        background: 'url(images/gallery_of_events/1_Semestr/1_Gamid_about_AI.jpg)',
        description:    
        "Октябрь 2020 года. <br> Одно из первых выступлений в клубе. <br> Студент 3 курса направления Программирование - Огурлиев Гамид согласился выступить и рассказать нам о Искуственном интелекте. <br> Его презентация была интересной и он ответил на все наши вопросы.",
        daddy: sideBlock,
        year: 2020,
        semester: '1-ый семестр'
    }),

    new EventsSideBlock({
        title: "Изучение устройства ПК", 
        background: "url(images/gallery_of_events/1_Semestr/2_PC_system.jpg)", 
        description: "Октябрь 2020 года. <br> Колонин Глеб принес старый офисный компьютер. <br> Вместе мы изучили его устройство и узнали какими кабелями куда нужно подключать его комплектующие.", 
        daddy: sideBlock,
        year: 2020,
        semester: '1-ый семестр'
    }),

    new EventsSideBlock({
        title: "Мастер-класс Геворкяна Марата по C#", 
        background: "url(images/gallery_of_events/1_Semestr/3_Marat_Csharp.jpg)", 
        description: "Декарь 2020 года. <br> Геворкян Марат подготовил презентацию и провел мастер-класс по C#. <br> По окончанию мастер-класса мы создали калькуляторы.", 
        daddy: sideBlock,
        year: 2020,
        semester: '1-ый семестр'
    }),
    
    new EventsSideBlock({
        title: "Мастер-класс Колонина Глеба по Основам git и GitHub", 
        background: "url(images/gallery_of_events/1_Semestr/4_Gleb_GitHub.jpg)", 
        description: "Декарь 2020 года. <br> Колонин Глеб подготовил презентацию и провел мастер-класс по \"Основам git и GitHub\". <br> В конце дал рекомендации и ресурсы для дальнейшего изучения.", 
        daddy: sideBlock,
        year: 2020,
        semester: '1-ый семестр'
    }),
    
    // 2 Semester

    new EventsSideBlock({
        title: "Создание карты сайта. Совет Молодоря Никиты", 
        background: "url(images/gallery_of_events/2_Semestr/1_Nikita_site_map.jpg)", 
        description: "Январь 2020 года. <br> Молодоря Никита помог с созданием карты сайта для нашего совместного проекта - сайта IT Club. <br> Все изменения, вносимые на сайт, что вы сейчас смотрите сначала тщательно продумываются на этой карте.", 
        daddy: sideBlock,
        year: 2021,
        semester: '2-ой семестр'
    }),

    new EventsSideBlock({
        title: "Выступление Игоря Молчанова о SSH", 
        background: "url(images/gallery_of_events/2_Semestr/2_Igor_SSH.jpg)", 
        description: "Январь 2020 года. <br> Игорь Молчанов рассказал нам о сетевом протоколе SSH.", 
        daddy: sideBlock,
        year: 2021,
        semester: '2-ой семестр'
    }),

    new EventsSideBlock({
        title: "Мастер-класс Ефима Ланцмана по работе с Unity",
        background: "url(images/gallery_of_events/2_Semestr/3_Efim_Unity.jpg)", 
        description: "Февраль 2021 года. <br> Ефим Ланцман - студент-разработчик 2 курса провел мастер-класс по Unity. <br> По итогам мастер-класса мы написали код на C#, узнали что такое игровые движки и поработали в Unity.", 
        daddy: sideBlock,
        year: 2021,
        semester: '2-ой семестр'
    }),

    new EventsSideBlock({
        title: "Мастер-класс Степанова Александра по работе с WordPress и OpenServer",
        background: "url(images/gallery_of_events/2_Semestr/4_Sasha_WordPress.jpg)", 
        description: "Февраль 2021 года. <br> Степанов Александр - программист 1 курса провел мастер-класс по работе с WordPress и OpenServer. <br> Мастер-класс был очень интересным и полезным. <br> Степанов Алексндр помог нам решить все появившиеся сложности и ответил на все наши вопросы.", 
        daddy: sideBlock,
        year: 2021,
        semester: '2-ой семестр'
    }),

    new EventsSideBlock({
        title: "Мастер-класс Молодори Никиты по Swift",
        background: "url(images/gallery_of_events/2_Semestr/5_Nikita_Swift.jpg)", 
        description: "Март 2021 года. <br> Молодоря Никита - провел мастер-класс по программированию на Swift. <br> В течении мастер-класса велась разработка мобильного приложения, <br> которое следило за котировками валют.", 
        daddy: sideBlock,
        year: 2021,
        semester: '2-ой семестр'
    }),

    new EventsSideBlock({
        title: "Мастер-класс Ефима Ланцмана по работе с Blender",
        background: "url(images/gallery_of_events/2_Semestr/6_Efim_Blender.jpg)", 
        description: "Март 2021 года. <br> Ефим Ланцман провел мастер-класс по 3D моделированию в Blender. <br> В результате мастер-класса были созданы модели средневековых мечей и освоены основы интерфеййса программы Blender 3D. <br> Ефим поделился материалами для дальнейшего изучения 3D моделирования.", 
        daddy: sideBlock,
        year: 2021,
        semester: '2-ой семестр'
    })
);

mainBlock.style.backgroundImage = eventsList[eventsList.length - 1].background;

for(let index = 0; index < eventsList.length; index++){
    document.getElementById("sideBlock").children[index].children[0].addEventListener("click", function() {Oliver(index);});
}
