export default class Random {
    static defaultLeadIn = [`I'm sorry but`, `Holy Moses...`, `I couldn't help it but`, `I lost track of time because`, `Holy shit! Get this...`, `I'm usually not like this, but`];
    static defaultPerpetrator = [`the ghost of Hitler`, `the entire Roman Empire`, `a triceratops named Penelope`, `Scrooge McDuck`, `the little Asian kid from Indiana Jones`, `a man with 6 fingers on his right hand`, `Raiden from Mortal Kombat`];
    static defaultDelayingFactor = [`made me find Jesus`, `stole my bicycle`, `called me "too gay to fly a kite"... whatever that means`, `tried to seduce me`, `put me in a Chinese finger trap`, `texted racial slurs from my phone`, `ran me over with a diesel backhoe`, `slept with my uncle`, `stole my identity`];

    static defaultVillainFirstName = ['The Brutal', 'The Vile', 'Phantom', 'The Black', 'Lorin'];
    static defaultVillainLastName = ['Man', 'Child', 'Lord', 'Tarantula', 'Skull', 'Fortuna', 'Clown'];

    static randomNumberGenerator(){
        let min, max;
        switch (arguments.length) {
            case 0:
                min = 0;
                max = 10;
                break;

            case 1:
                min = 0;
                max = arguments[0];
                break;
            default:
                [min, max] = arguments;
                break;
        }

        return min + Math.floor(Math.random() * (max - min + 1)); 
    }

    static diceRoll(sides = 6){
        return Random.randomNumberGenerator(1, sides);
    }

    static option(options = ['option1', 'option2', 'option3']){
        return options[Random.randomNumberGenerator(options.length - 1)];
    }

    static hexCode(){
        const characters = '0123456789ABCDEF';
        let hexCode = '#';
        for (let i = 0; i < 6; i++) {
            const randomCharacter = characters[Random.randomNumberGenerator(characters.length - 1)];
            hexCode += randomCharacter;
        }

        return hexCode;
    }

    static optionsCombination(){
        let options = [];

        for (let i = 0; i < arguments.length; i++) {
            options.push(Random.option(arguments[i]));
        }
        
        return options.join(' ');
    }


    static excuse(leadIn = [...Random.defaultLeadIn], perpetrator = [...Random.defaultPerpetrator], delayingFactor = [...Random.defaultDelayingFactor]){
        return Random.optionsCombination(leadIn, perpetrator, delayingFactor);
    }


    static villainName(firstName = [...Random.defaultVillainFirstName], lastName = [...Random.defaultVillainLastName]){
        return Random.optionsCombination(firstName, lastName);
    }
}