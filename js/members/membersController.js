let memberBlock = document.getElementById("memberBlock");
let memberPhoto = document.querySelector(".member_photo")
console.log(memberPhoto)

let membersList = [];

membersList.push(
    // new Member({
    //     name: "Дэнчик", 
    //     age: "16", 
    //     faculty: "Программист", 
    //     photo: "",
    //     abstract: "рассказывает анекдоты на высшем уровне",
    //     cvLink: "*ссылка*",
    //     daddy: memberBlock
    // }),
    
    // new Member({
    //     name: "Дэнчик", 
    //     age: "16", 
    //     faculty: "Программист", 
    //     photo: "",
    //     abstract: "рассказывает анекдоты на высшем уровне",
    //     cvLink: "*ссылка*",
    //     daddy: memberBlock
    // }),

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

memberPhoto.style.backgroundImage = 
