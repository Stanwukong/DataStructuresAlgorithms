// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice
/**
 * We have defined a function, forecast, that
 * takes an array as an argument. Modify the
 * function using slice() to extract information
 * from the argument array and return a new
 * array that contains the string elements warm
 * and sunny.
*/
function forecast(arr) {
	// Only change code below this line
   arr = arr.slice(2, 4);
	return arr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));