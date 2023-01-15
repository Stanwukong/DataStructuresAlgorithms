// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
function sumFibs(num) {
	let fibb0 = 0;
	let fibb1 = 1;
	let result = 0;
	while (fibb1 <= num) {
	  if (fibb1 % 2 !== 0) {
		result += fibb1;
	  }
	  fibb1 += fibb0;
	  fibb0 = fibb1 - fibb0; 
	}
  
  // Add more Fibonacci numbers
  
  
	return result;
  }
  
  console.log(sumFibs(4));