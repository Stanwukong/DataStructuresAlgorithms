// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-off-by-one-errors-when-using-indexing
/**
 * Fix the two indexing errors in the following function so all
 * the numbers 1 through 5 are printed to the console.
*/
function countToFive() {
	let firstFive = "12345";
	let len = firstFive.length;
	// Only change code below this line
	for (let i = 0; i < len; i++) {
	// Only change code above this line
	  console.log(firstFive[i]);
	}
  }
  
  countToFive();