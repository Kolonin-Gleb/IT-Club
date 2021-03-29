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
        background: 'url(https://northeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fcollegemirbis-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!7W-QcEwRP0GLzMUxc0PLJltyyaV0FSZFmeICzCrZKXm79JVJyjxASZjpY5gAN7a0%2Fitems%2F01FYKKOPLH3S5OMPGS5BCZAHL3NE6BC52Z%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvY29sbGVnZW1pcmJpcy1teS5zaGFyZXBvaW50LmNvbUBhNWU3NTJkMi1kOTM3LTQxMmEtYjU4Mi0yNTViMTI3MmQyOGMiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjE3MDMwMDAwIiwiZXhwIjoiMTYxNzA1MTYwMCIsImVuZHBvaW50dXJsIjoiWTc3cW92NFhXOGthYkZqWXhkenducEMvS1JJYWlJTGhBU3dwNWlaWVdJWT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik56QTVNRFptWldRdE1URTBZeTAwTVRObUxUaGlZMk10WXpVek1UY3pORE5qWWpJMiIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHxrb2xvbmluZ3MyMEBzdC5pdGh1Yi5ydSIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwZGUwNjhiMTJAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.QWowZmMyR080MmtvUFFpZVBMUkhyN1M2R3d4NkVHeW9KK0xuUjkyT3N4dz0&encodeFailures=1&width=1920&height=897&srcWidth=&srcHeight=)',
        description:    
        "Октябрь 2020 года. <br> Одно из первых выступлений в клубе. <br> Студент 3 курса направления Программирование - Огурлиев Гамид согласился выступить и рассказать нам о Искуственном интелекте. <br> Его презентация была интересной и он ответил на все наши вопросы.",
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "Изучение устройства ПК", 
        background: "url(https://northeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fcollegemirbis-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!7W-QcEwRP0GLzMUxc0PLJltyyaV0FSZFmeICzCrZKXm79JVJyjxASZjpY5gAN7a0%2Fitems%2F01FYKKOPMVSQACN5PFDNH2IT4O4L5PIZKO%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvY29sbGVnZW1pcmJpcy1teS5zaGFyZXBvaW50LmNvbUBhNWU3NTJkMi1kOTM3LTQxMmEtYjU4Mi0yNTViMTI3MmQyOGMiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjE3MDMwMDAwIiwiZXhwIjoiMTYxNzA1MTYwMCIsImVuZHBvaW50dXJsIjoiWTc3cW92NFhXOGthYkZqWXhkenducEMvS1JJYWlJTGhBU3dwNWlaWVdJWT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik56QTVNRFptWldRdE1URTBZeTAwTVRObUxUaGlZMk10WXpVek1UY3pORE5qWWpJMiIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHxrb2xvbmluZ3MyMEBzdC5pdGh1Yi5ydSIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwZGUwNjhiMTJAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.QWowZmMyR080MmtvUFFpZVBMUkhyN1M2R3d4NkVHeW9KK0xuUjkyT3N4dz0&encodeFailures=1&width=1920&height=897&srcWidth=&srcHeight=)", 
        description: "Октябрь 2020 года. <br> Колонин Глеб принес старый офисный компьютер. <br> Вместе мы изучили его устройство и узнали какими кабелями куда нужно подключать его комплектующие.", 
        daddy: sideBlock
    }),

    new EventsSideBlock({
        title: "теневое клонирование", 
        background: "url(https://memepedia.ru/wp-content/uploads/2018/09/stock-photo-backstabber-original-360x270.jpg)", 
        description: "йоу собаки я наруто узумаки", 
        daddy: sideBlock
    }),
    
    new EventsSideBlock({
        title: "смешно смешно смешно смешно", 
        background: "url(https://st.focusedcollection.com/11440334/i/650/focused_143164391-stock-photo-business-people-communicating-in-office.jpg)", 
        description: "смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешнo смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешно смешнo", 
        daddy: sideBlock
    }),
    
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
