"use strict";
import { characterObject } from "./data.js";
// This class contains all methods used for the characters
class Characters {
    constructor(characters, characterDiv) {
        // The characters property is a fulfilled promise
        this.characters = characters;
        this.characterDiv = characterDiv;
    }

    static getAllScouts() {
        this.characters.then(characters => {
            for(const name of characters.scouts.names) {
                let characterImage = characters.scouts.images[characters.scouts.names.indexOf(name)];
                let image = document.createElement('img');
                let characterFigure = document.createElement('figure');
                let characterFigcaption =  document.createElement('figcaption');

                this.characterDiv.append(characterFigure);
                characterFigure.appendChild(image);
                document.querySelectorAll('img')[characters.scouts.names.indexOf(name)].src = `../images/${characterImage}`;
                characterFigure.appendChild(characterFigcaption);
                document.querySelectorAll('figcaption')[characters.scouts.names.indexOf(name)].innerHTML = name;
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
        this.characterDiv = document.getElementById('characters');
    }
}

// Here the class Characters is filled with a fulfilled promise
Characters.setCharacters(
    characterObject.then(characters => {
        return characters;
    })
);

Characters.getAllScouts();