class Member{
    element = document.createElement("div");
    name;
    age;
    faculty;
    photo;
    abstract;
    cvLink;
    
    set["bg"](v) {
        this.background = v;
        template.querySelector("").lastElementChild.style.backgroundImage = v;
    }

    constructor({name, age, faculty, photo, abstract, cvLink, daddy}) {
        let element = this.element;
        let template = document.getElementById("member_template").content.cloneNode(true);

        this.name = name;
        this.age = age;
        this.faculty = faculty;
        this.photo = photo;
        this.abstract = abstract;
        this.cvLink = cvLink;
        
        template.querySelector(".member_faculty").innerHTML = faculty;
        template.querySelector(".member_name").innerHTML = name;
        template.querySelector(".member_age").innerHTML = age;
        // template.querySelector(".member_photo").innerHTML = photo;
        template.querySelector(".member_desc").innerHTML = abstract;
        template.querySelector(".member_cv").innerHTML = cvLink;

        element.appendChild(template);

        daddy.appendChild(element);
    }
}