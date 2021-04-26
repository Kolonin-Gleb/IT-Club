let memberBlock = document.getElementById("memberBlock");

let membersList = [];

membersList.push(
    new Member({
        name: "Дэнчик", 
        age: "16", 
        faculty: "Программист", 
        photo: "",
        abstract: "рассказывает анекдоты на высшем уровне",
        cvLink: "*ссылка*",
        daddy: memberBlock
    }),
    
    new Member({
        name: "Дэнчик", 
        age: "16", 
        faculty: "Программист", 
        photo: "",
        abstract: "рассказывает анекдоты на высшем уровне",
        cvLink: "*ссылка*",
        daddy: memberBlock
    }),

    new Member({
        name: "Шахиджанян Владимир Владимирович", 
        age: "16", 
        faculty: "Программист", 
        photo: "",
        abstract: "рассказывает анекдоты на высшем уровне рассказывает анекдоты на высшем уровне рассказывает",
        cvLink: "*ссылка*",
        daddy: memberBlock
    })
);
