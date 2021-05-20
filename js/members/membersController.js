let memberBlock = document.getElementById("memberBlock");

let membersList = [];

membersList.push(
    new Member({
        name: "Глеб Колонин", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Gleb.jpg",
        abstract: "Программирую на С++. Есть личные проекты на github",
        cvLink: "*ссылка*",
        cvLinkAddress: "#",
        daddy: memberBlock
    }),
    
    new Member({
        name: "Марат Геворкян", 
        age: "17", 
        faculty: "Айтишница", 
        photo: "images/gallery_of_members/Marat.jpg", 
        // сверху образец добавления картинки из папки (относительный путь)
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkAddress: "#",
        daddy: memberBlock
    }),

    new Member({
        name: "Алиса Матросова", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Marat.jpg",
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkAddress: "#",
        daddy: memberBlock
    }),

    new Member({
        name: "София Кучмар", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Marat.jpg",
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkAddress: "#",
        daddy: memberBlock
    }),

    new Member({
        name: "Игорь Молчанов", 
        age: "16", 
        faculty: "Айтишница", 
        photo: "images/gallery_of_members/Igor.jpg",
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkAddress: "#",
        daddy: memberBlock
    }),

    new Member({
        name: "Александр Степанов", 
        age: "16", 
        faculty: "Айтишница", 
        photo: "images/gallery_of_members/Alexander.jpg",
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkAddress: "#",
        daddy: memberBlock
    }),

    new Member({
        name: "Ален Асатрян", 
        age: "16", 
        faculty: "Айтишница", 
        photo: "images/gallery_of_members/Marat.jpg",
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkAddress: "#",
        daddy: memberBlock
    }),

    new Member({
        name: "Николай Квашнин", 
        age: "18", 
        faculty: "Айтишница", 
        photo: "images/gallery_of_members/Marat.jpg",
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkAddress: "#",
        daddy: memberBlock
    }),
    
    new Member({
        name: "Мелания Манойлович", 
        age: "16", 
        faculty: "Программист", 
        photo: "images/gallery_of_members/Melanie.jpg",
        abstract: "",
        cvLink: "*ссылка*",
        cvLinkAddress: "#",
        daddy: memberBlock
    })
);
