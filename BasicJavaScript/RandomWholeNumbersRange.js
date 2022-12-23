// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
function randomRange(myMin, myMax) {
	// Only change code below this line
	let answer = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
	return answer;
	// Only change code above this line
  }