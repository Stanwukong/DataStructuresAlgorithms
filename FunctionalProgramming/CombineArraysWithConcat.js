// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-two-arrays-using-the-concat-method
function nonMutatingConcat(original, attach) {
	// Only change code below this line
   return original.concat(attach)
	// Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);