// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
function checkPositive(arr) {
	// Only change code below this line
  return  arr.every(value => value > 0)
  
	// Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));