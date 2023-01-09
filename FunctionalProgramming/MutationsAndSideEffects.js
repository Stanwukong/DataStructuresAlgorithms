// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/avoid-mutations-and-side-effects-using-functional-programming
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue + 1;

  // Only change code above this line
}
console.log(incrementer());