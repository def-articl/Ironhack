// How do characters `!` `@` `#` `$` `%` `^` `&` and `*` affect
// string comparison?

console.log("--- symbols.js ---");

var string1, string2;

string1 = "Argentina";
string2 = "!Argentina";

console.log("Is \"Argentina\" EQUAL to \"!Argentina\" ?: ",  
            string1 === string2);
// result -> false

console.log("Is \"Argentina\" GREATER than \"!Argentina\" ?: ", 
            string1 > string2);
// result -> true

/* Conclusion:
 * special character acts like a capital character
 * capitals and special chars always come before 
 * lowercase chars
 *
 * LESS = precedes
 * MORE = goes after
 *
 * see example below 
*/

var cityName = "prague", cityNameRight = "Prague";

console.log("Is \"Prague\" LESS than \"prague\" ?: ", 
            cityNameRight < cityName);

console.log("Does \'b\' come before \'A\' ?: ", 
           "b" < "A");
console.log("Does \'A\' come before \'B\' ?: ", 
           "B" > "A");
