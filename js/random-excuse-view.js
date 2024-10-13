import Random from "./random.js";

export default class RandomExcuseView{
    constructor(parentElem){
        this.parentElem = parentElem;
        this.display = null;

        this.init();
    }

    init(){
        this.display = document.createElement('div');
        this.display.classList.add('excuse-display');
        this.display.textContent = Random.excuse();
        this.parentElem.append(this.display);

        this.excuseBtn = document.createElement('button');
        this.excuseBtn.classList.add('excuse-btn');
        this.excuseBtn.textContent = 'Generate New Excuse';
        this.parentElem.append(this.excuseBtn);
        this.excuseBtn.addEventListener('click', () => this.display.textContent = Random.excuse())
    }
}