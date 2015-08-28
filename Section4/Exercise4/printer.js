console.log("--- printer.js ---");

function arrayPrinter(anArray) {
    var output = "", i;
    var lastItem = anArray.length - 1;

    for (i = 0; i < anArray.length; i++) {
        if (i === lastItem - 1) {
            output += anArray[i];
        } else if (i === lastItem) {
            output += " and " + anArray[i];
        }
        else {
            output += anArray[i] + ", ";
        }
    }

    return output;
}

ary = ["Canada", "Mexico", "Turkey", "Japan"];
console.log(arrayPrinter(ary));
