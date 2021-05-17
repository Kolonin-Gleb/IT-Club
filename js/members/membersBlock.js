class Member{
    element = document.createElement("div");
    name;
    age;
    faculty;
    photo;
    abstract;
    cvLink;
    
    constructor({name, age, faculty, photo, abstract, cvLink, cvLinkaddress, daddy}) {
        let element = this.element;
        let template = document.getElementById("member_template").content.cloneNode(true);

        element.classList.add("memberBox")

        this.name = name;
        this.age = age;
        this.faculty = faculty;
        this.photo = photo;
        this.abstract = abstract;
        this.cvLink = cvLink;
        this.cvLinkaddress = cvLinkaddress;
        
        template.querySelector(".member_faculty").innerHTML = faculty;
        template.querySelector(".member_name").innerHTML = name;
        template.querySelector(".member_age").innerHTML = age;
        template.querySelector(".member_photo").src = photo;
        template.querySelector(".member_desc").innerHTML = abstract;

        let elementLink = template.querySelector(".member_cv");
        elementLink.innerHTML = cvLink;
        elementLink.setAttribute("href", cvLinkaddress)
        elementLink.setAttribute("target", "_blank");

        element.appendChild(template);

        daddy.appendChild(element);
    }
}