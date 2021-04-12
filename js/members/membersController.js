let memberBlock = document.getElementById("memberBlock");
console.log(memberBlock)

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
    })
);
