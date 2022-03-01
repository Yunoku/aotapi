"use strict";
export let characterObject; // This variable contains the fetched data

// This function gets the data from the aot.json file using Fetch
async function getCharacterData() {
    const response = await fetch('aot.json');
    const characters = await response.json();
    return characters;
}

// This variable pushes data into the characterObject variable 
characterObject = getCharacterData();