"use strict";
import { characterObject } from "./data.js";
// This class contains all methods used for the characters
class Characters {
    constructor(characters, characterDiv) {
        // The characters property is a fulfilled promise
        this.characters = characters;
        this.characterDiv = characterDiv;
    }

    static #loopCharacters(name, characterCollection, imageCollection) {
        let characterImage = imageCollection[characterCollection.indexOf(name)];
        let image = document.createElement('img');
        let characterFigure = document.createElement('figure');
        let characterFigcaption =  document.createElement('figcaption');

        this.characterDiv.append(characterFigure);
        characterFigure.appendChild(image);
        document.querySelectorAll('img')[characterCollection.indexOf(name)].src = `../images/${characterImage}`;
        characterFigure.appendChild(characterFigcaption);
        document.querySelectorAll('figcaption')[characterCollection.indexOf(name)].innerHTML = name;
    }

    static getAllScouts() {
        this.characters.then(characters => {
            for(const name of characters.scouts.names) {
                this.#loopCharacters(name, characters.scouts.names, characters.scouts.images);
            }
        });
    }

    static getAllPolice() {
        this.characters.then(characters => {
            for(const name of characters.military_police.names) {
                this.#loopCharacters(name, characters.military_police.names, characters.military_police.images);
            }
        });
    }
    
    // static getSingleScout(givenName) {
    //     this.characters.then(characters => {
    //         for(const name of characters.scouts.names) {
    //             if(name == givenName) {
    //                 console.log(name);
    //             } else {
    //                 console.error("The requested character does not exist");
    //                 continue;
    //             }
    //         }
    //     });
    // }

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
