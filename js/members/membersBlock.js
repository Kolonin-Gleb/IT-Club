class Members{
    element = document.createElement("div");
    name;
    age;
    faculty;
    photo;
    skills;
    cvLink;

    constructor({name, age, faculty, photo, skills, cvLink, daddy}) {
        let element1 = this.element;
        // element1.classList = ["box"];
        // element1.appendChild(document.createElement("div"));

        console.log("лол приветули");

        this.name = name;
        this.age = age;
        this.faculty = faculty;
        this.photo = photo;
        this.skills = skills;
        this.cvLink = cvLink;

        daddy.appendChild(element1);
    }
}