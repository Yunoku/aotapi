"use strict";
import { characterObject } from "./data.js";
// This class contains all methods used for the characters
class Characters {
    constructor(characters, characterDiv, characterFigure, characterFigcaption) {
        // The characters property is a fulfilled promise
        this.characters = characters;
        this.characterDiv = characterDiv;
        this.characterFigure = characterFigure;
        this.characterFigcaption = characterFigcaption;
    }

    static getAllScouts() {
        this.characters.then(characters => {
            for(const name of characters.scouts.names) {
                let characterName = name;
                let characterImage = characters.scouts.images[characters.scouts.names.indexOf(name)];
                let image = document.createElement('img');

                this.characterDiv.appendChild(this.characterFigure);
                this.characterFigure.append(image);
                document.querySelectorAll('img')[characters.scouts.names.indexOf(name)].src = `../images/${characterImage}`;
                this.characterFigure.append(this.characterFigcaption);
                document.querySelectorAll('figcaption')[characters.scouts.names.indexOf(name)].innerHTML = characterName;
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
        this.characterFigure = document.createElement('figure');
        this.characterFigcaption = document.createElement('figcaption');
    }
}

// Here the class Characters is filled with a fulfilled promise
Characters.setCharacters(
    characterObject.then(characters => {
        return characters;
    })
);

Characters.getAllScouts();