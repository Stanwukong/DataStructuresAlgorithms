// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
function spinalCase(str) {
	return str.split(/\s|_|(?=[A-Z])/)
			  .join("-")
			  .toLowerCase();       
  }
  
  console.log(spinalCase('This Is Spinal Tap'));