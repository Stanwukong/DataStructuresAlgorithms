// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-use-of-assignment-operator-instead-of-equality-operator
/**
 * Fix the condition so the program runs the right branch, and
 * the appropriate value is assigned to result.
*/
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);