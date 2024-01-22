// Функии для формы теста определения спеиальности

let selected;
let data;
let oReq = new XMLHttpRequest();
let questNum = -1; // Так как тестирование ещё не началось
let answersArr = [];
let fullstackDeloveperScale = 0;
let qaSpecialistScale = 0;
let frontendDeloveperScale = 0;
let mobileAppsDeveloperScale = 0;
let inp = document.getElementsByName("pair");
let variant1 = document.getElementsByName("answer")[0];
let variant2 = document.getElementsByName("answer")[1];
let qnum = document.getElementById("qnum");
let backButton = document.getElementById("back");
let nextButton = document.getElementById("next");
let questionForm = document.getElementById("questionForm");
let greeting = document.getElementById("greeting");
let points = document.getElementsByClassName("points");
let list = document.getElementsByClassName("list"); // Список полезных ссылок для профессии

// Отображение результатов теста
function resultDisplay(resArr) {
    // Сокрытие формы опроса
    questionForm.hidden = true;
    backButton.hidden = true;
    nextButton.hidden = true;

    // Отображение результата
    document.getElementById("resultForm").hidden = false;

    // Наиболее подходящая профессия и её %
    document.getElementById("resultProfession").textContent =
        data[`${resArr[0].name}DisplayName`] +
        ` - ${Math.round((resArr[0].score / 12) * 100)}%`; // в тесте 12 вопросов

    // Что это за профессия
    document.getElementById("firstProfParagraph").textContent = `${
        data[resArr[0].name]
    }`;
    // Доп. информация о профессии
    document.getElementById("secondProfParagraph").textContent =
        data[`${resArr[0].name}SecondParagraph`];
    document.getElementById("modal").className = "test button more"; // Пройти тест заново

    // На сколько подходят остальные профессии 
    points[0].textContent = qaSpecialistScale;
    points[1].textContent = mobileAppsDeveloperScale;
    points[2].textContent = frontendDeloveperScale;
    points[3].textContent = fullstackDeloveperScale;
    // console.log("qaSpecialistScale", points[0]);
    // console.log("mobileAppsDeveloperScale", points[1]);
    // console.log("frontendDeloveperScale", points[2]);
    // console.log("fullstackDeloveperScale", points[3]);

    // Отображение ссылок-рекомендации для наиболее подходящей профессии
    linkDisplay(resArr);
    
    // 2ая наиболее подходящая профессия
    document.getElementById("secondprof").textContent = 
        `Также обратите внимание на профессию ` + data[`${resArr[1].name}DisplayName`];
}

// Отображение ссылок на рекомендации по профессиям
function linkDisplay(resArr) {
    // Очистка списка с ссылками
    for (let i = 0; i < list.length; i++)
    {
        list[i].innerHTML = "";
    }

    // Формирование списка ссылок-рекомендаций для лучшей профессии
    // Путём итерации по всем профессиям и их ссылкам-рекомендациям
    for (let i = 0; i < resArr.length; i++) {
        for (let j = 0; j < data[`${resArr[i].name}links`].length; j++) {
            let li = document.createElement("li");
            li.id = `list${i}Item${j}`;
            let a = document.createElement("a");
            document.getElementsByClassName("list")[i].append(li);
            document.getElementById(`list${i}Item${j}`).append(a);
            a.href = data[`${resArr[i].name}links`][j];
            a.textContent = data[`${resArr[i].name}names`][j];
        }
    }
}

// Подсчёт результатов теста
function resultCounting() {
    // Используя массив ответов определяем насколько подходят профессии
    for (let i = 0; i < answersArr.length; i++) {
        switch (answersArr[i]) {
            case "front":
                frontendDeloveperScale++;
                break;
            case "qa":
                qaSpecialistScale++;
                break;
            case "mob":
                mobileAppsDeveloperScale++;
                break;
            case "full":
                fullstackDeloveperScale++;
                break;
        }
    }

    // Формирование массива результатов теста и сортировка по убыванию набранных очков
    let resArr = [
        { name: "FRONTEND", score: frontendDeloveperScale },
        { name: "MOBILE", score: mobileAppsDeveloperScale },
        { name: "QA", score: qaSpecialistScale },
        { name: "FULLSTACK", score: fullstackDeloveperScale }
    ];
    resArr.sort(function(a, b) {
        return b.score - a.score;
    });
    resArr.splice(2);
    resultDisplay(resArr); // Наиболее подходящие профессии
}

// Парсинг данных из json файла
function jsonLoading() {
    oReq.onload = reqListener;
    oReq.open("get", "data.json", true);
    oReq.send();
}

function reqListener(e) {
    data = oReq.response;
    data = JSON.parse(data);
}

// Функция отображения вопроса
function showQuestion() {
    // Если получены ответы на все вопросы
    if (questNum === data["answersArray"].length)
    {
        resArr = resultCounting();
    }
    // показать текующий вопрос и варианты ответов
    else
    {
        // Сброс состояний radioButtons для очередного выбора пользователя
        document.getElementsByName("pair")[0].checked = false;
        document.getElementsByName("pair")[1].checked = false;
        qnum.textContent = `${questNum + 1}`; // Счётчик вопросов + 1
        // Установка текста утверждений для выбора
        variant1.textContent = data["answersArray"][questNum]["firstAnswer"];
        variant2.textContent = data["answersArray"][questNum]["secondAnswer"];
        // Если тестирование началось, то отображать кнопки Назад и Далее
        if(questNum >= 0) // Немного костыль
        {
            backButton.hidden = false;
            document.getElementById("nextbutton").textContent = "Далее";
        }
    }
}

// Обновление состояния radioButton при выборе ответа
function radioupd() {
    for (let i = 0; i < inp.length; i++)
    {
        if (inp[i].type == "radio" && inp[i].checked)
        {
            selected = i;
        }
    }
    checkButtonAble(); // Перерасчитать возможность перехода к следующему вопросу
}

// Вернуться к предыдущему вопросу
function backClick() {
    answersArr.pop();
    questNum--;
    showQuestion();
    checkButtonAble();
}

// Перейти к следующему вопросу
function nextClick() {

    if (questionForm.className === "test form hidden")
    {
        questionForm.classList = "test form";
        greeting.className = "test greeting message hidden";
    }

    radioupd();

    if (questNum === -1) // Если это 1ый вопрос
    {
        questNum++;
        showQuestion();
        checkButtonAble();
    }
    else
    {
        // Заполнение массива ответов
        answersArr.push(data["answersArray"][questNum]["sphere"][selected]);
        // console.log(answersArr); // добавляются названия профессий соответствующие утверждению (front, qa, ...)
        questNum++;
        showQuestion();
        checkButtonAble();
        if (questNum <= data["answersArray"].length - 1 && questNum >= 0)
        {
            qnum.textContent = `${questNum + 1}`;
        }
    }
}

//Функция проверяет, можно ли нажать кнопку для перехода к след. вопросу
function checkButtonAble() {
    if (questNum === 0)
    {
        backButton.disabled = true;
    }
    else
    {
        backButton.disabled = false;
    }

    if (
        questNum === data["answersArray"].length ||
        (document.getElementsByName("pair")[0].checked === false &&
            document.getElementsByName("pair")[1].checked === false)
    ) {
        nextButton.disabled = true;
    }
    else {
        nextButton.disabled = false;
    }
}
