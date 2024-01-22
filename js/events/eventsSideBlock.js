// Данная функция добавляет и отображает дату с боку от просматриваемого мероприятия (Controller part)
class EventsSideBlock {
    // Создание элемента div для блока
    element = document.createElement("div");
    title;
    background;
    description;
    year;
    month;

    // Свойство установки фона блока
    set["bg"](background_value)
    {
        this.background = background_value;
        this.element.lastElementChild.style.backgroundImage = background_value;
    }

    // Конструктор всего блока
    constructor({title, background, description, daddy, year, month})
    {
        let element1 = this.element;
        element1.classList = ["box"];
        element1.appendChild(document.createElement("div"));

        // Инициализируем свойства блока
        this.title = title;
        this.description = description;
        this.bg = background; // Используем свойство bg для установки фона
        this.year = year;
        this.month = month;
        
        // Создаем и добавляем внутренний слой блока
        let sup_layer = Object.assign(document.createElement("div"));
        element1.children[0].appendChild(sup_layer).classList.add('sup_layer');

        // Создаем и добавляем span с заголовком внутреннего слоя
        let span = Object.assign(document.createElement("span"), {innerHTML: title});
        element1.children[0].children[0].appendChild(span);
        
        // Добавление сформированного блока в родительский элемент
        daddy.appendChild(element1);
    }
}
