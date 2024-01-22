let sideBlock = document.getElementById("sideBlock");
let mainBlock = document.getElementById("mainBlock");

// Тут данные для заполнения (Model part)
let eventsList = [];
let activeElemI = 0;

eventsList.push(
    new EventsSideBlock({
        title: "", 
        background: "", 
        description: "", 
        daddy: sideBlock,
        year: 2020,
        month: "Октябрь"
    }),

    new EventsSideBlock({
        title: "Искусственный интеллект. Выступление Огурлиева Гамида", 
        background: 'url(images/gallery_of_events/1_term/1_Gamid_about_AI.jpg)',
        description:    
        `Октябрь 2020 года. <br> Одно из первых выступлений в клубе. <br> Студент 3 курса направления Программирование - Огурлиев Гамид согласился выступить и рассказать нам о Искуственном интелекте. <br> Его презентация была интересной и он ответил на все наши вопросы.  Презентацию с выступления можно найти по ссылке: <a href="https://collegemirbis-my.sharepoint.com/:f:/g/personal/kolonings20_st_ithub_ru/Ek9_k5hUipBPsN6bs3-i6B8B0L2SMJeYB5UHHC4MlT8c5g" target="_blank"> Открыть </a> <br>`,
        daddy: sideBlock,
        year: 2020,
        month: 'Октябрь'
    }),

    new EventsSideBlock({
        title: "Изучение устройства ПК", 
        background: "url(images/gallery_of_events/1_term/2_PC_system.jpg)", 
        description: "Октябрь 2020 года. <br> Колонин Глеб принес старый офисный компьютер. <br> Вместе мы изучили его устройство и узнали какими кабелями куда нужно подключать его комплектующие.", 
        daddy: sideBlock,
        year: 2020,
        month: 'Октябрь'
    }),

    new EventsSideBlock({
        title: "Программирование на C#. Мастер-класс Геворкяна Марата", 
        background: "url(images/gallery_of_events/1_term/3_Marat_Csharp.jpg)", 
        description: `Декарь 2020 года. <br> Геворкян Марат подготовил презентацию и провел мастер-класс по C#. <br> По окончанию мастер-класса мы создали калькуляторы. Презентацию с выступления можно найти по ссылке: <a href="https://collegemirbis-my.sharepoint.com/:f:/g/personal/kolonings20_st_ithub_ru/Ek9_k5hUipBPsN6bs3-i6B8B0L2SMJeYB5UHHC4MlT8c5g" target="_blank"> Открыть </a> <br>`, 
        daddy: sideBlock,
        year: 2020,
        month: 'Декабрь'
    }),
    
    new EventsSideBlock({
        title: "Основы git и GitHub. Мастер-класс Колонина Глеба", 
        background: "url(images/gallery_of_events/1_term/4_Gleb_GitHub.jpg)", 
        description: `Декабрь 2020 года. <br> Колонин Глеб подготовил презентацию и провел мастер-класс по \"Основам git и GitHub\". <br> В конце дал рекомендации и ресурсы для дальнейшего изучения. Презентацию с выступления можно найти по ссылке: <a href="https://collegemirbis-my.sharepoint.com/:f:/g/personal/kolonings20_st_ithub_ru/Ek9_k5hUipBPsN6bs3-i6B8B0L2SMJeYB5UHHC4MlT8c5g" target="_blank"> Открыть </a> <br>`, 
        daddy: sideBlock,
        year: 2020,
        month: 'Декабрь'
    }),
    
    // 2 term

    new EventsSideBlock({
        title: "Создание карты сайта", 
        background: "url(images/gallery_of_events/2_term/1_Nikita_site_map.jpg)", 
        description: "Январь 2020 года. <br> Молодоря Никита помог с созданием карты сайта для нашего совместного проекта - сайта IT Club. <br> Все изменения, вносимые на сайт, что вы сейчас смотрите сначала тщательно продумываются на этой карте.", 
        daddy: sideBlock,
        year: 2021,
        month: 'Январь'
    }),

    new EventsSideBlock({
        title: "Изучение протокола SSH. Выступление Игоря Молчанова", 
        background: "url(images/gallery_of_events/2_term/2_Igor_SSH.jpg)", 
        description: "Январь 2020 года. <br> Игорь Молчанов рассказал нам о сетевом протоколе SSH.", 
        daddy: sideBlock,
        year: 2021,
        month: 'Январь'
    }),

    new EventsSideBlock({
        title: "Работа в Unity. Мастер-класс Ефима Ланцмана",
        background: "url(images/gallery_of_events/2_term/3_Efim_Unity.jpg)", 
        description: "Февраль 2021 года. <br> Ефим Ланцман - студент-разработчик 2 курса провел мастер-класс по Unity. <br> По итогам мастер-класса мы написали код на C#, узнали что такое игровые движки и поработали в Unity.", 
        daddy: sideBlock,
        year: 2021,
        month: 'Февраль'
    }),

    new EventsSideBlock({
        title: "Работе с WordPress и OpenServer. Мастер-класс Степанова Александра",
        background: "url(images/gallery_of_events/2_term/4_Sasha_WordPress.jpg)", 
        description: "Февраль 2021 года. <br> Степанов Александр - программист 1 курса провел мастер-класс по работе с WordPress и OpenServer. <br> Мастер-класс был очень интересным и полезным. <br> Степанов Алексндр помог нам решить все появившиеся сложности и ответил на все наши вопросы.", 
        daddy: sideBlock,
        year: 2021,
        month: 'Февраль'
    }),

    new EventsSideBlock({
        title: "Разработка на Swift. Мастер-класс Молодори Никиты",
        background: "url(images/gallery_of_events/2_term/5_Nikita_Swift.jpg)", 
        description: `Март 2021 года. <br> Молодоря Никита - провел мастер-класс по программированию на Swift. <br> В течении мастер-класса велась разработка мобильного приложения, <br> которое следило за котировками валют. Презентацию с выступления можно найти по ссылке: <a href="https://collegemirbis-my.sharepoint.com/:f:/g/personal/kolonings20_st_ithub_ru/Ek9_k5hUipBPsN6bs3-i6B8B0L2SMJeYB5UHHC4MlT8c5g" target="_blank"> Открыть </a> <br>`, 
        daddy: sideBlock,
        year: 2021,
        month: 'Март'
    }),

    new EventsSideBlock({
        title: "Работа в Blender. Мастер-класс Ефима Ланцмана",
        background: "url(images/gallery_of_events/2_term/6_Efim_Blender.jpg)", 
        description: "Март 2021 года. <br> Ефим Ланцман провел мастер-класс по 3D моделированию в Blender. <br> В результате мастер-класса были созданы модели средневековых мечей и освоены основы интерфеййса программы Blender 3D. <br> Ефим поделился материалами для дальнейшего изучения 3D моделирования.", 
        daddy: sideBlock,
        year: 2021,
        month: 'Март'
    }),

    new EventsSideBlock({
        title: "Merge-sort сортировка. Выступление Квашина Николая ",
        background: "url(images/gallery_of_events/2_term/7_Nikolay_merge_sort.jpeg)", 
        description: `12 Апреля 2021 года. <br> Квашин Николай провел выступление, на котором рассказал об эффективной сортировке merge-sort. Был разобран код, который реализует данную сортировку, а также её преимущества. <br> Презентацию с выступления можно найти по ссылке: <a href="https://collegemirbis-my.sharepoint.com/:f:/g/personal/kolonings20_st_ithub_ru/Ek9_k5hUipBPsN6bs3-i6B8B0L2SMJeYB5UHHC4MlT8c5g" target="_blank"> Открыть </a> <br>`,
        daddy: sideBlock,
        year: 2021,
        month: 'Апрель'
    }),

    new EventsSideBlock({
        title: "Основы финансовой грамотности и Инвестирования. Выступление Глеба",
        background: "url(images/gallery_of_events/2_term/8_Gleb_Investing.jpg)",
        description: `22 Апреля 2021 года. <br> Колонин Глеб выступил по теме Основы финансовой грамотности и Инвестирования. <br> Он ответил на вопросы аудитории, поделился своим опытом инвестирования и дал ресурсы дя дальнейшего изучения темы. <br> Презентацию с выступления можно найти по ссылке: <a href="https://collegemirbis-my.sharepoint.com/:f:/g/personal/kolonings20_st_ithub_ru/Ek9_k5hUipBPsN6bs3-i6B8B0L2SMJeYB5UHHC4MlT8c5g" target="_blank"> Открыть </a> <br>`,
        daddy: sideBlock,
        year: 2021,
        month: 'Апрель'
    })
);

// Данная функция находит положение карточки и заполняет её данными (Controller part)
function Oliver(index) {
    if (index !== 0){
        document.getElementById("title").innerHTML = eventsList[index].title;
        document.getElementById("description").innerHTML = eventsList[index].description;
        mainBlock.style.backgroundImage = eventsList[index].background;
        eventsList[index].element.scrollIntoView({block: "center", behavior: "smooth"});
    }
}

// Установка данных в карточку.
mainBlock.style.backgroundImage = eventsList[eventsList.length - 1].background;
document.getElementById("title").innerHTML = eventsList[eventsList.length - 1].title;
document.getElementById("description").innerHTML = eventsList[eventsList.length - 1].description;
// Заполнение карточки по клику на неё.
for (let index = 0; index < eventsList.length; index++) {
    // console.log(index);
    document.getElementById("sideBlock").children[index].children[0].addEventListener("click", function() {Oliver(index);});
}
// Добавление всплывающих окон с подробной информацией о событиях (pop-ups)
for (let index = eventsList.length-1; index > 0; index--) {
    let child = document.createElement("div");
    let title = document.createElement("div");
    // let description = document.createElement("div");

    child.classList = ["box"];
    child.style.backgroundImage = eventsList[index].background;
    title.innerHTML = eventsList[index].title;
    child.appendChild(title);
    child.setAttribute("index", index);
    child.addEventListener("click", (e) => {
        // e.toElement
        let popup = document.createElement("div");
        let popupContent = document.createElement("div");
        let title = document.createElement("div");
        let image = document.createElement("div");
        let description = document.createElement("div");
        let cross = document.createElement("div");
        popup.classList = ["popup"]
        popup.setAttribute("id", "popup")
        title.classList = ["popup-title"];
        image.classList = ["popup-image"];
        description.classList = ["popup-desc"];
        cross.classList = ["cross"]
        cross.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cross_icon_%28white%29.svg/1024px-Cross_icon_%28white%29.svg.png)";
        title.innerHTML = eventsList[e.toElement.getAttribute("index")].title;
        image.style.backgroundImage = eventsList[e.toElement.getAttribute("index")].background;
        description.innerHTML = eventsList[e.toElement.getAttribute("index")].description;
        cross.addEventListener("click", () => {
            // console.log("popup-removed");
            document.querySelector("#popup").remove();
        });
        popupContent.appendChild(title);
        popupContent.appendChild(image);
        popupContent.appendChild(description);
        popupContent.appendChild(cross);
        popup.appendChild(popupContent);
        document.body.appendChild(popup);
    });

    document.querySelector("#events > .smaller > .slider").appendChild(child);
}
