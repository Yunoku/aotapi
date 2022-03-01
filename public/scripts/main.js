import { characterObject } from "./data.js";
// This class contains all methods used for the characters
class Characters {
    constructor(characters) {
        // The characters property is a fulfilled promise
        this.characters = characters;
    }

    static getCharacters() {
        this.characters.then(characters => {
            console.log(characters);
        });
    }

    static getScouts() {
        this.characters.then(characters => {
            console.log(characters.scouts);
        });
    }

    static setCharacters(characters) {
        this.characters = characters;
    }
}

// Here the class Characters is filled with a fulfilled promise
Characters.setCharacters(
    characterObject.then(characters => {
        return characters;
    })
);

Characters.getCharacters();
Characters.getScouts();