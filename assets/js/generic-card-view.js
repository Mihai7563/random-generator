export default class GenericCardView{
    constructor(parentElem, properties){
        this.parentElem = parentElem;
        this.properties = properties;
        
        this.display = null;
        
        this.init();
    }

    init(){
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        this.parentElem.append(imgContainer);
        imgContainer.style.backgroundImage = `url(${this.properties.img})`;
        
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        this.parentElem.append(textContainer);

        const title = document.createElement('h2');
        title.textContent = this.properties.title;
        textContainer.append(title);
        
        this.display = document.createElement('div');
        this.display.classList.add('random-text-display');
        this.display.textContent = this.properties.textGenerator();
        textContainer.append(this.display);

        this.generateBtn = document.createElement('button');
        this.generateBtn.classList.add('generate-btn', 'btn');
        this.generateBtn.textContent = this.properties.btnCaption;
        textContainer.append(this.generateBtn);
        this.generateBtn.addEventListener('click', () => this.display.textContent = this.properties.textGenerator());
    }
}