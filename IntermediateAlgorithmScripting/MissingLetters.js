// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
function fearNotLetter(str) {
	let currCode = str.charCodeAt(0);
	let missing = undefined;
  
	str.split("")
	   .forEach(letter => {
		 if (letter.charCodeAt(0) === currCode) {
		   currCode++;
		 } else {
		   missing = String.fromCharCode(currCode);
		 }
	   });
	return missing;
  }
  
  console.log(fearNotLetter("abce"));