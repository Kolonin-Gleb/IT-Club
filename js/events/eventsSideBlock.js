class EventsSideBlock {
    element = document.createElement("div");
    title;
    background;
    description;
    year;
    term;

    set["bg"](v) {
        this.background = v;
        this.element.lastElementChild.style.backgroundImage = v;
    }

    constructor({title, background, description, daddy, year, term}) {
        let element1 = this.element;
        element1.classList = ["box"];
        element1.appendChild(document.createElement("div"));

        this.title = title;
        this.description = description;
        this.bg = background;
        this.year = year;
        this.term = term;
        
        let sup_layer = Object.assign(document.createElement("div"));
        element1.children[0].appendChild(sup_layer).classList.add('sup_layer');

        let span = Object.assign(document.createElement("span"), {innerHTML: title});
        element1.children[0].children[0].appendChild(span);

        daddy.appendChild(element1);
    }
}