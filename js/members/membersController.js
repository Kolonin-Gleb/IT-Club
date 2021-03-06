let memberBlock = document.getElementById("memberBlock");
console.log(memberBlock);

let membersList = [];

membersList.push(
    new Member({
        name: "Глеб Колонин", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Gleb.jpg",
        abstract: "Программирую на С++, Python. Есть личные проекты на github.",
        cvLink: "Посмотреть резюме",
        cvLinkAddress: "https://collegemirbis-my.sharepoint.com/:b:/g/personal/kolonings20_st_ithub_ru/EUfLSRQFkJ9LvqWVqv7p6okBjVHKPShc16huuxZozN13Zw",
        daddy: memberBlock
    }),
    
    new Member({
        name: "Марат Геворкян", 
        age: "17", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Marat.jpg", 
        abstract: "Свободно говорю на C#. Лично знаком с асинхронностью и абстракциями ;)",
        cvLink: "Посмотреть резюме",
        cvLinkAddress: "https://collegemirbis-my.sharepoint.com/:w:/g/personal/kolonings20_st_ithub_ru/EWBpbCk4ZFRKha4Xaph7O34BLj2rVNLHCsEWMuW0-0d5kQ?e=ReT7DI",
        daddy: memberBlock
    }),

    new Member({
        name: "Алиса Матросова", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Alice.jpg",
        abstract: "Живу в коммуналке вместе с ленью и прокрастинацией",
        cvLink: "Посмотреть резюме",
        cvLinkAddress: "https://collegemirbis-my.sharepoint.com/:b:/g/personal/kolonings20_st_ithub_ru/ES5LQLDbTiNCgDZOgmSuuEoBWLeF_Al9sZGbL0HNVIaNPA?e=p7PSKP",
        daddy: memberBlock
    }),

    new Member({
        name: "София Кучмар", 
        age: "17", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Sofia.jpg",
        abstract: "Программист на Python. Есть опыт в управлении командой и организации  мероприятий. Люблю статистику и планирование!",
        cvLink: "Посмотреть резюме",
        cvLinkAddress: "https://collegemirbis-my.sharepoint.com/:b:/g/personal/kolonings20_st_ithub_ru/ETYEhPnDuhlBuLP-tPBFybMBvodnklztmWsgPtNdQ5z6Nw?e=EYYPcb",
        daddy: memberBlock
    }),

    new Member({
        name: "Игорь Молчанов", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Igor.jpg",
        abstract: "Программист Python, Dart/Flutter, HTML CSS. Базовое знание C, C++, C#, Pascal, Bash, Java.",
        cvLink: "Посмотреть резюме",
        cvLinkAddress: "https://collegemirbis-my.sharepoint.com/:w:/g/personal/kolonings20_st_ithub_ru/EWwZM3hGtiJNlGnYlx_zP5YBzDaSWJH-jxKcllVFcGVcyA",
        daddy: memberBlock
    }),

    new Member({
        name: "Александр Степанов", 
        age: "16", 
        faculty: "Программист, Веб-разработчик", 
        photo: "images/gallery_of_members/Alexander.jpg",
        abstract: "HTML-программист",
        cvLink: "Посмотреть резюме",
        cvLinkAddress: "https://collegemirbis-my.sharepoint.com/:w:/g/personal/kolonings20_st_ithub_ru/EVGkwElDS9FGgoE-4KYBJT8BKp18-jagPsnSVu-D88yp1w?e=gTuH2y",
        daddy: memberBlock
    }),

    new Member({
        name: "Николай Квашнин", 
        age: "18", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Nikolay.jpg",
        abstract: "Программист python/js. Имею навыки моделирвания в SOLIDWORKS. Есть опыт работы с фрезерным и лазеным станками, а также с 3D и 2D принтерами.",
        cvLink: "Посмотреть резюме",
        cvLinkAddress: "https://collegemirbis-my.sharepoint.com/:w:/g/personal/kolonings20_st_ithub_ru/EYmj_RrgxlhDg0m4drMpjPEBMYcjG4AaWVdvZgV2GMisoA?e=yjdn58",
        daddy: memberBlock
    }),
    
    new Member({
        name: "Мелания Манойлович", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Melanie.jpg",
        abstract: "Программирую на Python, начала изучать C++. Владею математическим *как и английским* языком на уровне B2",
        cvLink: "Посмотреть резюме",
        cvLinkAddress: "https://collegemirbis-my.sharepoint.com/:b:/g/personal/kolonings20_st_ithub_ru/EQ7a8_Vz7uRJsJsU95KRe_QBJfcz8alRZAJN-fHX-kMxoQ?e=uo54Bl",
        daddy: memberBlock
    }),

    new Member({
        name: "Ален Асатрян", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Alen.jpg",
        abstract: "Фрилансер",
        cvLink: "Посмотреть резюме",
        cvLinkAddress: "https://collegemirbis-my.sharepoint.com/:b:/g/personal/kolonings20_st_ithub_ru/EcFJIjUt_fxNjC490CfW5ucBF4w_cOUun6O54HrkgNDmdw",
        daddy: memberBlock
    })

);
