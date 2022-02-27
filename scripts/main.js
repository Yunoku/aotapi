async function getCharacters() {
    const response = await fetch('aot.json');
    const characters = await response.json();
    return characters;
}
getCharacters().then(characters => {
    console.log(characters);
});