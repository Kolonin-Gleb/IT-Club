class EventsSideBlock {
    element = document.createElement("div");
    title;
    background;
    text;

    set["bg"](v) {
        this.background = v;
        this.element.style.background = v;
    }

    constructor({title, background, text, daddy}) {
        this.title = title;
        this.text  = text;
        this.bg = background;
        
        let span = Object.assign(document.createElement("span"), {innerHTML: title});
        this.element.appendChild(span);

        daddy.appendChild(this.element);
    }

}