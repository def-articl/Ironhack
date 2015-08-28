console.log("--- valueGetter.js ---")

function extractValues(obj) {

    valueList = [];
    for (key in obj) {
        valueList.push(obj[key]);
    }

    return valueList;
}


var country;
country = {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo"
};

console.log(extractValues(country));
