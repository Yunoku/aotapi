class Character {
    constructor(character) {
        this.character = character;
    }

    static getCharacter() {
        console.log(this.character);
    }

    static setCharacter(character) {
        this.character = character;
    }
}

async function getCharacters() {
    const response = await fetch('aot.json');
    const characters = await response.json();
    return characters;
}

getCharacters().then(characters => {
    Character.setCharacter(characters[0]);
});

Character.getCharacter();