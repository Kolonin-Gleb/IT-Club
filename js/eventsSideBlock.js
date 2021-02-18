class EventsSideBlock {
    element = document.createElement("div");
    title;
    background;
    text;

    set["bg"](v) {
        this.background = v;
        this.element.lastElementChild.style.background = v;
    }

    constructor({title, background, text, daddy}) {
        console.log(this.element);
        this.element.classList = ["box"]
        this.element.appendChild(document.createElement("div"));

        this.title = title;
        this.text  = text;
        this.bg = background;

        let span = Object.assign(document.createElement("span"), {innerHTML: title});
        this.element.appendChild(span);

        daddy.appendChild(this.element);
    }
}