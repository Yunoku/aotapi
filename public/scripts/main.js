"use strict";
import { characterObject } from "./data.js";
// This class contains all methods used for the characters
class Characters {
    constructor(characters) {
        // The characters property is a fulfilled promise
        this.characters = characters;
    }

    static getAllScouts() {
        this.characters.then(characters => {
            for(const name of characters.scouts.names) {
                console.log(name);
            }
        });
    }

    static getSingleScout(givenName) {
        this.characters.then(characters => {
            for(const name of characters.scouts.names) {
                if(name == givenName) {
                    console.log(name);
                } else {
                    console.error("The requested character does not exist");
                    continue;
                }
            }
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

// Characters.getAllScouts();
Characters.getSingleScout("Mikasa Ackermann");