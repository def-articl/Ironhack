console.log("--- invalid.js ---")

var gameEngines;
gameEngines = ["Unity", "Source", "CryTek"];

// let's access out of bounds item
console.log(gameEngines[3]);
// return -> undefined/nil

gameDB = {
    name: "Half-Life 2",
    year: 2004,
    engine: "Source",
}

console.log(gameDB.name);
// let's access out of bounds item
console.log(gameDB.rating);
// return -> undefined/nil
