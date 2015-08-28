console.log("--- comparison.js ---");

var number;

number = 101;

if (number !== 101 && number < 25 || number > 100) {
    console.log(number + " isn't 101 AND is less than 25 OR is greater than 100.");
}

/* The operator AND `&&` is computed first and `||` OR second.
 * Thus the first part:
 *      `number !== 101 && number < 25`
 * is computed as false.
 * The statement `number > 100` is true and is compared with
 * OR operator to false result. Thus the whole condition is true since 
 * for OR you only need one statement to be true.
 */

