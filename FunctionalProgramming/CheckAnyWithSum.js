// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
function checkPositive(arr) {
	// Only change code below this line
	return arr.some(value => value > 0)
	// Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));