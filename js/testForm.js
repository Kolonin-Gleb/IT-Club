// Функии для формы теста определения спеиальности

let selected;
let data;
let oReq = new XMLHttpRequest();
let questNum = -1;
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
let list = document.getElementsByClassName("list");

function resultCounting() {
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
    resultDisplay(resArr);
}

function jsonLoading() {
    oReq.onload = reqListener;
    oReq.open("get", "data.json", true);
    oReq.send();
}
function reqListener(e) {
    data = oReq.response;
    data = JSON.parse(data);
}

function showQuestion() {
    if (questNum === data["answersArray"].length) {
        resArr = resultCounting();
    } else {
        document.getElementsByName("pair")[0].checked = false;
        document.getElementsByName("pair")[1].checked = false;
        qnum.textContent = `${questNum + 1}`;
        variant1.textContent = data["answersArray"][questNum]["firstAnswer"];
        variant2.textContent = data["answersArray"][questNum]["secondAnswer"];
        if(questNum >= 0) {
            backButton.hidden = false;
            document.getElementById("nextbutton").textContent = "далее";
        }
    }
}

function radioupd() {
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            selected = i;
        }
    }
    checkButtonAble();
}

function backClick() {
    answersArr.pop();
    questNum--;
    showQuestion();
    checkButtonAble();
}

function nextClick() {
    if (questionForm.className === "test form hidden") {
        questionForm.classList = "test form";
        greeting.className = "test greeting message hidden";
    }
    radioupd();
    if (questNum === -1) {
        questNum++;
        showQuestion();
        checkButtonAble();
    } else {
        answersArr.push(data["answersArray"][questNum]["sphere"][selected]);
        questNum++;
        showQuestion();
        checkButtonAble();
        if (questNum <= data["answersArray"].length - 1 && questNum >= 0) {
            qnum.textContent = `${questNum + 1}`;
        }
    }
}

//Функция проверяет, можно ли нажать кнопку для перехода к след. вопросу
function checkButtonAble() {
    if (questNum === 0) {
        backButton.disabled = true;
    } else {
        backButton.disabled = false;
    }
    if (
        questNum === data["answersArray"].length ||
        (document.getElementsByName("pair")[0].checked === false &&
            document.getElementsByName("pair")[1].checked === false)
    ) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

function resultDisplay(resArr) {
    questionForm.hidden = true;
    document.getElementById("resultForm").hidden = false;
    backButton.hidden = true;
    nextButton.hidden = true;
    document.getElementById("resultProfession").textContent =
        data[`${resArr[0].name}DisplayName`] +
        ` - ${Math.round((resArr[0].score / 12) * 100)}%`;
    document.getElementById("firstProfParagraph").textContent = `${
        data[resArr[0].name]
    }`;
    document.getElementById("secondProfParagraph").textContent =
        data[`${resArr[0].name}SecondParagraph`];
    document.getElementById("modal").className = "test button more";
    points[0].textContent = qaSpecialistScale;
    points[1].textContent = mobileAppsDeveloperScale;
    points[2].textContent = frontendDeloveperScale;
    points[3].textContent = fullstackDeloveperScale;
    linkDisplay(resArr);
    document.getElementById("secondprof").textContent =
        `Также обратите внимание на профессию ` +
        data[`${resArr[1].name}DisplayName`];
}

function linkDisplay(resArr) {
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = "";
    }

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
