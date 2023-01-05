// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
function largestOfFour(arr) {
	let answer = [];
	for (let i = 0; i < arr.length; i++) {
	  let largestNumber = arr[i][0];
	  for (let j = 1; j < arr[i].length; j++) {
		if (arr[i][j] > largestNumber) {
		 largestNumber = arr[i][j];
		}
	  }
	  answer[i] = largestNumber; 
	}
	return answer;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);