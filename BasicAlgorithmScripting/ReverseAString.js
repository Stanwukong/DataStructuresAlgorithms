// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string
function reverseString(str) {
	let reverse = "";
	for (let i = str.length - 1; i >= 0; i-- ) {
	   reverse += str[i]
	}
	return reverse;
  }
  
  reverseString("hello");