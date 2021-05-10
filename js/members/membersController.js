let memberBlock = document.getElementById("memberBlock");

let membersList = [];

membersList.push(
    new Member({
        name: "Колонин Глеб Семёнович", 
        age: "16", 
        faculty: "Программист", 
        photo: '', //Нужно брать картинку из папки gallery_of_members
        abstract: "Программирует на С++. Имеет личные проекты на github",
        cvLink: "*ссылка*",
        daddy: memberBlock
    }),
    
    new Member({
        name: "Виноградова Юлианна Анастасьевна", 
        age: "17", 
        faculty: "Айтишница", 
        photo: "https://st2.depositphotos.com/1024381/5201/i/600/depositphotos_52013547-stock-photo-mid-adult-woman.jpg",
        abstract: "рассказывает анекдоты на высшем уровне",
        cvLink: "*ссылка*",
        daddy: memberBlock
    }),

    new Member({
        name: "Шахиджанян Владимир Владимирович", 
        age: "16", 
        faculty: "Программист", 
        photo: "https://wl-adme.cf.tsp.li/resize/728x/jpg/72a/ea0/057bce523498aa17e4f3a9d074.jpg",
        abstract: "рассказывает анекдоты на высшем уровне рассказывает анекдоты на высшем уровне рассказывает",
        cvLink: "*ссылка*",
        daddy: memberBlock
    })
);
