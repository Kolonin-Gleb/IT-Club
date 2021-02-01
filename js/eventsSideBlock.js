class EventsSideBlock {
    title;
    background;
    text;

    template = document.createElement("div");

    constructor(title, background, text, daddy) {
        this.title      = title;
        this.background = background;
        this.text       = text;

        let span = Object.assign(document.createElement("span"), {innerHTML: title});
        this.template.appendChild(span);

        daddy.appendChild(this.template);
    }
}