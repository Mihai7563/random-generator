import RandomExcuseView from "./random-excuse-view.js";
import Random from "./random.js";

const excuse = Random.excuse();
console.log(excuse);

const villainName = Random.villainName();
console.log(villainName);

const randomExcuseView = new RandomExcuseView(document.querySelector('.excuse-container'));
