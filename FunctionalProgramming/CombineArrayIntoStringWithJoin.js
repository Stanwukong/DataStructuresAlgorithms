// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method
function sentensify(str) {
	// Only change code below this line
	return str.split("-").join(" ")
	// Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));