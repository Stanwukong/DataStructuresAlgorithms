// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
function sumAll(arr) {
	let max =  Math.max(arr[0], arr[1]);
	let min =  Math.min(arr[0], arr[1]);
	let sumBetween = 0;
	for (let i = min; i <= max; i++) {
	  sumBetween += i;
	}
	return sumBetween;
  }
  
  console.log(sumAll([1, 4]));