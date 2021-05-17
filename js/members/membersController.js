let memberBlock = document.getElementById("memberBlock");

let membersList = [];

membersList.push(
    new Member({
        name: "Колонин Глеб Семёнович", 
        age: "16", 
        faculty: "Программист", 
        photo: 'images/gallery_of_members/Gleb.jpg',
        abstract: "Программирует на С++. Имеет личные проекты на github",
        cvLink: "*ссылка*",
        cvLinkaddress: "",
        daddy: memberBlock
    }),
    
    new Member({
        name: "Геворкян Марат Вачаганович", 
        age: "17", 
        faculty: "Айтишница", 
        photo: "images/gallery_of_members/Marat.jpg", 
        // сверху образец добавления картинки из папки (относительный путь)
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkaddress: "https://vk.com/da_ili_dada",
        daddy: memberBlock
    }),

    new Member({
        name: "Манойлович Мелания", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Melanie.jpg",
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkaddress: "",
        daddy: memberBlock
    })
);
