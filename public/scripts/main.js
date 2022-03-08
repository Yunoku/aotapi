"use strict";
import { characterObject } from "./data.js";
// This class contains all methods used for the characters
class AoTCharacters {
    constructor(characters, characterDiv) {
        // The characters property is a fulfilled promise
        this.characters = characters;
        this.characterDiv = characterDiv;
    }

    // This functions loops through every named affiliation and makes sure every character is put inside a figure element
    static #loopCharacters(name, affiliation, affiliationImage) {
        let characterImage = affiliationImage[affiliation.indexOf(name)];
        let image = document.createElement('img');
        let characterFigure = document.createElement('figure');
        let characterFigcaption =  document.createElement('figcaption');

        this.characterDiv.append(characterFigure);
        characterFigure.appendChild(image);
        document.querySelectorAll('img')[affiliation.indexOf(name)].src = `../images/${characterImage}`;
        characterFigure.appendChild(characterFigcaption);
        document.querySelectorAll('figcaption')[affiliation.indexOf(name)].innerHTML = name;
    }

    // All static functions for showing characters of specific affiliations on the page
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

    static getAllGarrison() {
        this.characters.then(characters => {
            for(const name of characters.garrison.names) {
                this.#loopCharacters(name, characters.garrison.names, characters.garrison.images);
            }
        });
    }

    static getAllCadets() {
        this.characters.then(characters => {
            for(const name of characters.cadet_corps.names) {
                this.#loopCharacters(name, characters.cadet_corps.names, characters.cadet_corps.images);
            }
        });
    }

    static getAllMarleyan() {
        this.characters.then(characters => {
            for(const name of characters.marleyan_military.names) {
                this.#loopCharacters(name, characters.marleyan_military.names, characters.marleyan_military.images);
            }
        });
    }

    static getAllWarriors() {
        this.characters.then(characters => {
            for(const name of characters.warriors.names) {
                this.#loopCharacters(name, characters.warriors.names, characters.warriors.images);
            }
        });
    }

    static getAllMarleySecurity() {
        this.characters.then(characters => {
            for(const name of characters.marley_security.names) {
                this.#loopCharacters(name, characters.marley_security.names, characters.marley_security.images);
            }
        });
    }

    static getAllParadisMilitary() {
        this.characters.then(characters => {
            for(const name of characters.paradis_military.names) {
                this.#loopCharacters(name, characters.paradis_military.names, characters.paradis_military.images);
            }
        });
    }

    static getAllNobility() {
        this.characters.then(characters => {
            for(const name of characters.nobility.names) {
                this.#loopCharacters(name, characters.nobility.names, characters.nobility.images);
            }
        });
    }

    static getAllMarleyNobility() {
        this.characters.then(characters => {
            for(const name of characters.marley.names) {
                this.#loopCharacters(name, characters.marley.names, characters.marley.images);
            }
        });
    }

    static getAllOriginalEldians() {
        this.characters.then(characters => {
            for(const name of characters.eldia.names) {
                this.#loopCharacters(name, characters.eldia.names, characters.eldia.images);
            }
        });
    }

    static getHizuru() {
        this.characters.then(characters => {
            for(const name of characters.hizuru.names) {
                this.#loopCharacters(name, characters.hizuru.names, characters.hizuru.images);
            }
        });
    }

    static getAntiMarleyanVolunteers() {
        this.characters.then(characters => {
            for(const name of characters.anti_marleyan_volunteers.names) {
                this.#loopCharacters(name, characters.anti_marleyan_volunteers.names, characters.anti_marleyan_volunteers.images);
            }
        });
    }

    static getAllJaegerists() {
        this.characters.then(characters => {
            for(const name of characters.jaegerists.names) {
                this.#loopCharacters(name, characters.jaegerists.names, characters.jaegerists.images);
            }
        });
    }
    
    // static getSingleCharacter(givenName) {
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
AoTCharacters.setCharacters(
    characterObject.then(characters => {
        return characters;
    })
);

AoTCharacters.getAllScouts();
