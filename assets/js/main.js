import GenericCardView from "./generic-card-view.js";
import Random from "./random.js";

const excuse = Random.excuse();
console.log(excuse);

const villainName = Random.villainName();
console.log(villainName);

//RANDOM EXCUSE GENERATOR
const excuseParentElem = document.querySelector('.excuse-container');
const excuseProperties = {
    title: 'Random Excuse Generator',
    img: 'assets/img/excuse2.jpg',
    btnCaption: 'Generate Random Excuse',
    textGenerator: Random.excuse
}
const randomExcuseView = new GenericCardView(excuseParentElem, excuseProperties);

//RANDOM VILLAIN NAME GENERATOR 
const villainNameParentElem = document.querySelector('.villain-name-container');
const villainNameProperties = {
    title: 'Random Villain Name Generator',
    img: 'assets/img/villain1.jpg',
    btnCaption: 'Generate Random Villain Name',
    textGenerator: Random.villainName
}
const randomVillainNameView = new GenericCardView(villainNameParentElem, villainNameProperties);

