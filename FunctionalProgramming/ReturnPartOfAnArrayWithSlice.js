// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method
function sliceArray(anim, beginSlice, endSlice) {
	// Only change code below this line
  return anim.slice(beginSlice, endSlice);
	// Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);